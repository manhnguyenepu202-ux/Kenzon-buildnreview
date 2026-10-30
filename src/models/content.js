import { all, get, run, now } from '../db/index.js';
import { getProductsBySlugs, upsert } from './catalog.js';

const json = (s, fallback) => {
  if (s == null || s === '') return fallback;
  try { return JSON.parse(s); } catch { return fallback; }
};

/* ---------------- Comparisons (head-to-head pages) ---------------- */

function hydrateComparison(r) {
  if (!r) return r;
  return { ...r, product_slugs: json(r.product_ids, []), url: `/en/compare/${r.slug}/` };
}

export async function listComparisons({ status = 'published', withProducts = false } = {}) {
  const rows = (await all(
    `SELECT * FROM comparisons${status === 'all' ? '' : ' WHERE status = ?'} ORDER BY updated_at DESC, id ASC`,
    status === 'all' ? [] : [status],
  )).map(hydrateComparison);
  if (withProducts) for (const c of rows) c.products = await getProductsBySlugs(c.product_slugs);
  return rows;
}

export async function getComparison(by, value, { includeDraft = false } = {}) {
  const col = by === 'id' ? 'id' : 'slug';
  const c = hydrateComparison(await get(
    `SELECT * FROM comparisons WHERE ${col} = ?${includeDraft ? '' : " AND status = 'published'"}`,
    [value],
  ));
  if (c) c.products = await getProductsBySlugs(c.product_slugs);
  return c;
}

export function saveComparison(data, id) {
  return upsert('comparisons', {
    slug: data.slug,
    status: data.status === 'draft' ? 'draft' : 'published',
    title: data.title,
    intro: data.intro || null,
    verdict: data.verdict || null,
    product_ids: JSON.stringify(data.product_slugs || []),
    updated_at: data.updated_at || now(),
  }, id);
}

export const deleteComparison = (id) => run('DELETE FROM comparisons WHERE id = ?', [Number(id)]);

/* ---------------- Guides ("Best of" round-ups) ---------------- */

function hydrateGuide(r) {
  if (!r) return r;
  return { ...r, items: json(r.items, []), url: `/en/best/${r.slug}/` };
}

export async function listGuides({ status = 'published', withProducts = false } = {}) {
  const rows = (await all(
    `SELECT * FROM guides${status === 'all' ? '' : ' WHERE status = ?'} ORDER BY id ASC`,
    status === 'all' ? [] : [status],
  )).map(hydrateGuide);
  if (withProducts) for (const g of rows) await attachGuideProducts(g);
  return rows;
}

async function attachGuideProducts(g) {
  const products = await getProductsBySlugs(g.items.map((i) => i.slug));
  const bySlug = new Map(products.map((p) => [p.slug, p]));
  g.entries = g.items.map((i) => ({ ...i, product: bySlug.get(i.slug) })).filter((e) => e.product);
  return g;
}

export async function getGuide(by, value, { includeDraft = false } = {}) {
  const col = by === 'id' ? 'id' : 'slug';
  const g = hydrateGuide(await get(
    `SELECT * FROM guides WHERE ${col} = ?${includeDraft ? '' : " AND status = 'published'"}`,
    [value],
  ));
  return g ? attachGuideProducts(g) : g;
}

export function saveGuide(data, id) {
  return upsert('guides', {
    slug: data.slug,
    status: data.status === 'draft' ? 'draft' : 'published',
    title: data.title,
    intro: data.intro || null,
    category_id: data.category_id ? Number(data.category_id) : null,
    items: JSON.stringify(data.items || []),
    updated_at: data.updated_at || now(),
  }, id);
}

export const deleteGuide = (id) => run('DELETE FROM guides WHERE id = ?', [Number(id)]);
