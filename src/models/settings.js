import { all, run, get, now } from '../db/index.js';

/** Defaults are used until the admin saves a value on the Settings page. */
export const DEFAULT_SETTINGS = {
  site_tagline: 'Independent reviews of 3D printers, DIY tools and home appliances.',
  affiliate_default_url: 'https://us.snapmaker.com/?ref=tatsuki_mura',
  affiliate_default_label: 'Shop Snapmaker',
  sponsor_heading: 'Maker pick',
  sponsor_text: 'Want to make your own parts, signs and fixes? Snapmaker machines 3D print, laser engrave and CNC carve in one workshop.',
  disclosure_short: 'We may earn a commission when you buy through links on this page. It never changes our scores.',
  analytics_id: '',
  contact_email: 'hello@buildnreview.com',
};

let cache = null;

export async function getSettings() {
  if (cache) return cache;
  const rows = await all('SELECT skey, svalue FROM settings');
  cache = { ...DEFAULT_SETTINGS, ...Object.fromEntries(rows.map((r) => [r.skey, r.svalue ?? ''])) };
  return cache;
}

export async function saveSettings(values) {
  for (const key of Object.keys(DEFAULT_SETTINGS)) {
    if (!(key in values)) continue;
    await run('DELETE FROM settings WHERE skey = ?', [key]);
    await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [key, String(values[key] ?? '').trim()]);
  }
  cache = null;
}

/* ---------------- Media (uploads stored in the database so redeploys never lose them) ---------------- */

export async function saveMedia({ filename, mime, buffer }) {
  const res = await run(
    'INSERT INTO media (filename, mime, size, data, created_at) VALUES (?, ?, ?, ?, ?)',
    [filename, mime, buffer.length, buffer, now()],
  );
  return res.insertId;
}

export const getMedia = (id) => get('SELECT id, mime, data FROM media WHERE id = ?', [Number(id)]);
export const listMedia = () => all('SELECT id, filename, mime, size, created_at FROM media ORDER BY id DESC LIMIT 200');
export const deleteMedia = (id) => run('DELETE FROM media WHERE id = ?', [Number(id)]);
