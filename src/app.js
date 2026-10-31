import path from 'node:path';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cookieSession from 'cookie-session';
import config, { ROOT } from './config.js';
import * as helpers from './lib/helpers.js';
import { listCategories } from './models/catalog.js';
import { getSettings } from './models/settings.js';
import publicRoutes from './routes/public.js';
import adminRoutes from './routes/admin.js';

export function createApp() {
  const app = express();
  app.set('view engine', 'ejs');
  app.set('views', path.join(ROOT, 'views'));
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.use(helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'default-src': ["'self'"],
        'img-src': ["'self'", 'data:', 'https:'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'script-src': ["'self'", 'https://www.googletagmanager.com'],
        'connect-src': ["'self'", 'https://*.google-analytics.com', 'https://*.googletagmanager.com'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'upgrade-insecure-requests': config.isProd ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }));
  app.use(compression());
  app.use(express.static(path.join(ROOT, 'public'), { maxAge: config.isProd ? '7d' : 0 }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));
  app.use(cookieSession({
    name: 'bnr_admin',
    keys: [config.sessionSecret],
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
    secure: config.isProd,
  }));

  // Values every template can use.
  app.use(async (req, res, next) => {
    try {
      res.locals.h = helpers;
      res.locals.config = config;
      res.locals.path = req.path;
      res.locals.settings = await getSettings();
      res.locals.navCategories = req.path.startsWith('/admin') ? [] : await listCategories({ nonEmpty: true });
      next();
    } catch (err) { next(err); }
  });

  app.use('/admin', adminRoutes);
  app.use(publicRoutes);

  app.use((req, res) => {
    res.status(404).render('pages/404', { page: { title: 'Page not found', description: 'This page does not exist.', noindex: true } });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500);
    if (req.path.startsWith('/admin')) return res.render('admin/error', { title: 'Error', message: config.isProd ? 'Something went wrong.' : err.message });
    res.render('pages/404', { page: { title: 'Something went wrong', description: '', noindex: true }, error: true });
  });

  return app;
}
