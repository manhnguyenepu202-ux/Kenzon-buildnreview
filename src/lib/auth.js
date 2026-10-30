import crypto from 'node:crypto';
import config from '../config.js';

const safeEqual = (a, b) => {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
};

export const checkCredentials = (email, password) =>
  Boolean(config.admin.password) &&
  safeEqual(String(email || '').trim().toLowerCase(), config.admin.email) &&
  safeEqual(password || '', config.admin.password);

export function ensureCsrf(req) {
  if (!req.session.csrf) req.session.csrf = crypto.randomBytes(24).toString('hex');
  return req.session.csrf;
}

export function verifyCsrf(req, res, next) {
  const token = req.body?._csrf || req.get('x-csrf-token');
  if (!token || !req.session?.csrf || !safeEqual(token, req.session.csrf)) {
    return res.status(403).render('admin/error', { title: 'Session expired', message: 'Your form expired. Go back, reload the page and try again.' });
  }
  next();
}

export function requireAdmin(req, res, next) {
  if (req.session?.admin) return next();
  res.redirect(`/admin/login?next=${encodeURIComponent(req.originalUrl)}`);
}

/* Small in-memory brute-force guard: 8 failed logins per IP lock it for 15 minutes. */
const attempts = new Map();
export function loginLocked(ip) {
  const a = attempts.get(ip);
  return Boolean(a && a.until > Date.now());
}
export function recordLogin(ip, ok) {
  if (ok) return attempts.delete(ip);
  const a = attempts.get(ip) || { n: 0, until: 0 };
  a.n += 1;
  if (a.n >= 8) { a.until = Date.now() + 15 * 60 * 1000; a.n = 0; }
  attempts.set(ip, a);
}
