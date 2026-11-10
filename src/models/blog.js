import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from '../config.js';

/**
 * Blog posts live as Markdown files in content/blog/<slug>.md, so they are edited in the repo like code.
 * Front matter is simple "key: value" lines between --- markers; list values are comma separated.
 *   title, description, date (YYYY-MM-DD), updated, topic, cover (a product slug whose photo is the cover),
 *   related (product slugs shown as "Reviews mentioned in this article")
 */
const DIR = path.join(ROOT, 'content', 'blog');
const LISTS = new Set(['related']);
let cache = null;

function parse(file) {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    meta[key] = LISTS.has(key) ? value.split(',').map((s) => s.trim()).filter(Boolean) : value;
  }
  const slug = meta.slug || file.replace(/\.md$/, '');
  const words = m[2].split(/\s+/).filter(Boolean).length;
  return {
    ...meta,
    slug,
    related: meta.related || [],
    updated: meta.updated || meta.date,
    body: m[2],
    minutes: Math.max(1, Math.round(words / 230)),
    url: `/en/blog/${slug}/`,
  };
}

export function listPosts() {
  // Re-read in development so edits show up without a restart.
  if (cache && process.env.NODE_ENV === 'production') return cache;
  if (!fs.existsSync(DIR)) return (cache = []);
  cache = fs.readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .filter((p) => p && p.title && p.date)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return cache;
}

export const getPost = (slug) => listPosts().find((p) => p.slug === slug) || null;
