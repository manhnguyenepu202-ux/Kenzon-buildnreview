import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const env = process.env;
const isProd = env.NODE_ENV === 'production';

// MySQL is used whenever DB_HOST is set (Hostinger). Without it, a local SQLite file
// lets you run the site on your computer with zero setup.
const dbClient = env.DB_CLIENT || (env.DB_HOST ? 'mysql' : 'sqlite');

const config = {
  isProd,
  port: Number(env.PORT) || 3000,
  siteUrl: (env.SITE_URL || 'http://localhost:3000').replace(/\/+$/, ''),
  siteName: 'BuildNReview',
  lang: 'en',
  db: {
    client: dbClient,
    host: env.DB_HOST || 'localhost',
    port: Number(env.DB_PORT) || 3306,
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || 'buildnreview',
    sqliteFile: env.SQLITE_FILE || path.join(ROOT, 'data', 'dev.sqlite'),
  },
  admin: {
    email: (env.ADMIN_EMAIL || 'admin@buildnreview.com').toLowerCase(),
    password: env.ADMIN_PASSWORD || (isProd ? '' : 'admin123'),
  },
  sessionSecret: env.SESSION_SECRET || (isProd ? '' : 'dev-only-secret-change-me'),
  autoSeed: env.AUTO_SEED !== 'false',
};

if (isProd) {
  const missing = [];
  if (!config.admin.password) missing.push('ADMIN_PASSWORD');
  if (!config.sessionSecret || config.sessionSecret.length < 24) missing.push('SESSION_SECRET (24+ chars)');
  if (missing.length) {
    console.error(`[config] Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
}

export default config;
