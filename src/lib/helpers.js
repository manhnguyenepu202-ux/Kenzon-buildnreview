import { marked } from 'marked';
import { artSvg } from './art.js';
import config from '../config.js';

marked.setOptions({ gfm: true, breaks: false });

export const escapeHtml = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export const markdown = (md) => marked.parse(String(md || ''));

export function slugify(s) {
  return String(s || '')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    .slice(0, 150);
}

export const fmtPrice = (n) =>
  n == null ? '' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: n % 1 ? 2 : 0 }).format(n);

export function fmtDate(d) {
  if (!d) return '';
  const date = new Date(String(d).replace(' ', 'T') + (String(d).length <= 10 ? 'T00:00:00Z' : 'Z'));
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export const isoDate = (d) => (d ? String(d).slice(0, 10) : '');

export const fmtCount = (n) => {
  if (n == null) return '';
  return n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '')}K` : String(n);
};

/** Word label for an overall score out of 10. */
export function scoreWord(s) {
  if (s >= 9) return 'Outstanding';
  if (s >= 8.5) return 'Excellent';
  if (s >= 8) return 'Very good';
  if (s >= 7) return 'Good';
  if (s >= 6) return 'Fair';
  return 'Weak';
}

/** Shopify CDN images can be resized on the fly; other URLs are returned unchanged. */
export function img(src, width) {
  if (!src || !width || !/^https:\/\/cdn\.shopify\.com\//.test(src)) return src;
  return `${src}${src.includes('?') ? '&' : '?'}width=${width}`;
}

/** Product image (photo, or SVG drawing fallback) wrapped for any card or hero. */
export function productVisual(p, { eager = false, width = 640 } = {}) {
  const tone = p.tone || '#7a8b5c';
  if (p.image_url) {
    return `<div class="visual" style="--tone:${escapeHtml(tone)}"><img src="${escapeHtml(img(p.image_url, width))}" alt="${escapeHtml(p.name)}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" width="600" height="600"></div>`;
  }
  return `<div class="visual is-art" style="--tone:${escapeHtml(tone)}">${artSvg(p.art_type, p.name)}</div>`;
}

/** Visible affiliate URL goes through /go/ so clicks are counted and the real link can change later. */
export const goUrl = (p) => `/go/${p.slug}`;

export const absUrl = (path) => `${config.siteUrl}${path}`;

export const truncate = (s, n = 155) => {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  return t.length > n ? `${t.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : t;
};

/** Text lines from a textarea ("one per line"). */
export const lines = (s) => String(s || '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

/** "Label: value" lines -> [{ label, value }] */
export const parseSpecs = (s) =>
  lines(s).map((l) => {
    const i = l.indexOf(':');
    return i === -1 ? { label: l, value: '' } : { label: l.slice(0, i).trim(), value: l.slice(i + 1).trim() };
  });

export const specsToText = (specs = []) => specs.map((s) => `${s.label}: ${s.value}`).join('\n');
