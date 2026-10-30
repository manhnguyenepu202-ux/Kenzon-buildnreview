// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Đổi SITE_URL khi có tên miền thật (dùng cho canonical, hreflang, sitemap).
const SITE_URL = process.env.SITE_URL || 'https://buildnreview.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== '/' && !page.endsWith('/search/'),
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi-VN', en: 'en-US' },
      },
    }),
  ],
});
