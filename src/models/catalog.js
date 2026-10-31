import { all, get, run, now } from '../db/index.js';

export const SCORE_KEYS = ['performance', 'quality', 'ease', 'value'];
/** Weights for the overall score. Published on the "How we test" page. */
export const SCORE_WEIGHTS = { performance: 0.35, quality: 0.25, ease: 0.2, value: 0.2 };
export const DEFAULT_SCORE_LABELS = { performance: 'Performance', quality: 'Build quality', ease: 'Ease of use', value: 'Value' };

const json = (s, fallback) => {
  if (s == null || s === '') return fallback;
  try { return JSON.parse(s); } catch { return fallback; }
};

export function overallScore(scores = {}) {
  const total = SCORE_KEYS.reduce((sum, k) => sum + (Number(scores[k]) || 0) * SCORE_WEIGHTS[k], 0);
  return Math.round(total * 10) / 10;
}

/* ---------------- Categories ---------------- */

function hydrateCategory(r) {
  if (!r) return r;
  return {
    ...r,
    score_labels: { ...DEFAULT_SCORE_LABELS, ...json(r.score_labels, {}) },
    product_count: r.product_count == null ? undefined : Number(r.product_count),
    url: `/en/category/${r.slug}/`,
  };
}

// nonEmpty: public pages skip categories with no published reviews.
export async function listCategories({ nonEmpty = false } = {}) {
  const rows = await all(
    `SELECT c.*, (SELECT COUNT(*) FROM products p WHERE p.category_id = c.id AND p.status = 'published') AS product_count
     FROM categories c ORDER BY c.sort_order, c.name`,
  );
  const cats = rows.map(hydrateCategory);
  return nonEmpty ? cats.filter((c) => c.product_count > 0) : cats;
}

export async function getCategory(by, value) {
  const col = by === 'id' ? 'id' : 'slug';
  return hydrateCategory(await get(`SELECT * FROM categories WHERE ${col} = ?`, [value]));
}

export async function saveCategory(data, id) {
  const row = {
    slug: data.slug,
    name: data.name,
    group_name: data.group_name || null,
    blurb: data.blurb || null,
    image_url: data.image_url || null,
    art_type: data.art_type || null,
    tone: data.tone || null,
    score_labels: JSON.stringify(data.score_labels || {}),
    sponsor_product_id: data.sponsor_product_id ? Number(data.sponsor_product_id) : null,
    sort_order: Number(data.sort_order) || 0,
  };
  return upsert('categories', row, id);
}

/* ---------------- Products ---------------- */

function hydrateProduct(r, categories) {
  if (!r) return r;
  const p = {
    ...r,
    gallery: json(r.gallery, []),
    pros: json(r.pros, []),
    cons: json(r.cons, []),
    specs: json(r.specs, []),
    scores: json(r.scores, {}),
    overall: Number(r.overall) || 0,
    price_usd: r.price_usd == null ? null : Number(r.price_usd),
    retail_rating: r.retail_rating == null ? null : Number(r.retail_rating),
    retail_count: r.retail_count == null ? null : Number(r.retail_count),
    featured: Boolean(Number(r.featured)),
    is_sample: Boolean(Number(r.is_sample)),
    views: Number(r.views) || 0,
    clicks: Number(r.clicks) || 0,
    url: `/en/review/${r.slug}/`,
  };
  if (categories) p.category = categories.get(p.category_id) || null;
  return p;
}

async function categoryMap() {
  const cats = await listCategories();
  return new Map(cats.map((c) => [c.id, c]));
}

const SORTS = {
  score: 'overall DESC, views DESC',
  popular: 'views DESC, overall DESC',
  newest: 'published_at DESC, id DESC',
  updated: 'updated_at DESC, id DESC',
  name: 'name ASC',
  price_low: 'price_usd ASC',
  price_high: 'price_usd DESC',
};
export const SORT_OPTIONS = Object.keys(SORTS);

/**
 * Flexible product query used by every listing page.
 * opts: { categoryId, status ('published' | 'all'), sort, limit, offset, q, featured, ids, excludeId }
 */
export async function listProducts(opts = {}) {
  const where = [];
  const params = [];
  if (opts.status !== 'all') { where.push('status = ?'); params.push(opts.status || 'published'); }
  if (opts.categoryId) { where.push('category_id = ?'); params.push(Number(opts.categoryId)); }
  if (opts.featured) where.push('featured = 1');
  if (opts.excludeId) { where.push('id <> ?'); params.push(Number(opts.excludeId)); }
  if (opts.ids) {
    if (!opts.ids.length) return [];
    where.push(`id IN (${opts.ids.map(() => '?').join(',')})`);
    params.push(...opts.ids.map(Number));
  }
  if (opts.q) {
    const like = `%${String(opts.q).trim().replace(/[%_]/g, '')}%`;
    where.push('(name LIKE ? OR brand LIKE ? OR model LIKE ? OR summary LIKE ? OR best_for LIKE ?)');
    params.push(like, like, like, like, like);
  }
  let sql = `SELECT * FROM products${where.length ? ` WHERE ${where.join(' AND ')}` : ''} ORDER BY ${SORTS[opts.sort] || SORTS.score}`;
  if (opts.limit) sql += ` LIMIT ${Number(opts.limit)}${opts.offset ? ` OFFSET ${Number(opts.offset)}` : ''}`;
  const [rows, cats] = await Promise.all([all(sql, params), categoryMap()]);
  return rows.map((r) => hydrateProduct(r, cats));
}

export async function countProducts(opts = {}) {
  const where = [];
  const params = [];
  if (opts.status !== 'all') { where.push('status = ?'); params.push(opts.status || 'published'); }
  if (opts.categoryId) { where.push('category_id = ?'); params.push(Number(opts.categoryId)); }
  const row = await get(`SELECT COUNT(*) AS n FROM products${where.length ? ` WHERE ${where.join(' AND ')}` : ''}`, params);
  return Number(row.n);
}

export async function getProduct(by, value, { includeDraft = false } = {}) {
  const col = by === 'id' ? 'id' : 'slug';
  const row = await get(`SELECT * FROM products WHERE ${col} = ?${includeDraft ? '' : " AND status = 'published'"}`, [value]);
  if (!row) return null;
  return hydrateProduct(row, await categoryMap());
}

/** Keeps the order of `slugs` (used by comparisons and guides). */
export async function getProductsBySlugs(slugs) {
  if (!slugs.length) return [];
  const rows = await all(
    `SELECT * FROM products WHERE status = 'published' AND slug IN (${slugs.map(() => '?').join(',')})`,
    slugs,
  );
  const cats = await categoryMap();
  const bySlug = new Map(rows.map((r) => [r.slug, hydrateProduct(r, cats)]));
  return slugs.map((s) => bySlug.get(s)).filter(Boolean);
}

export async function saveProduct(data, id) {
  const scores = Object.fromEntries(SCORE_KEYS.map((k) => [k, Math.min(10, Math.max(0, Number(data.scores?.[k]) || 0))]));
  const ts = now();
  const row = {
    slug: data.slug,
    status: data.status === 'draft' ? 'draft' : 'published',
    name: data.name,
    brand: data.brand || null,
    model: data.model || null,
    category_id: data.category_id ? Number(data.category_id) : null,
    art_type: data.art_type || null,
    tone: data.tone || null,
    image_url: data.image_url || null,
    gallery: JSON.stringify(data.gallery || []),
    price_usd: data.price_usd === '' || data.price_usd == null ? null : Number(data.price_usd),
    released: data.released ? Number(data.released) : null,
    title: data.title || null,
    summary: data.summary || null,
    verdict: data.verdict || null,
    best_for: data.best_for || null,
    body: data.body || '',
    pros: JSON.stringify(data.pros || []),
    cons: JSON.stringify(data.cons || []),
    specs: JSON.stringify(data.specs || []),
    scores: JSON.stringify(scores),
    overall: overallScore(scores),
    retail_rating: data.retail_rating === '' || data.retail_rating == null ? null : Number(data.retail_rating),
    retail_count: data.retail_count === '' || data.retail_count == null ? null : Number(data.retail_count),
    affiliate_url: data.affiliate_url || null,
    affiliate_label: data.affiliate_label || null,
    featured: data.featured ? 1 : 0,
    is_sample: data.is_sample ? 1 : 0,
    published_at: data.published_at || ts,
    updated_at: data.updated_at || ts,
  };
  if (!id) {
    row.created_at = ts;
    row.views = Number(data.views) || 0;
  }
  return upsert('products', row, id);
}

export const deleteProduct = (id) => run('DELETE FROM products WHERE id = ?', [Number(id)]);
export const addView = (id) => run('UPDATE products SET views = views + 1 WHERE id = ?', [id]);
export const addClick = (id) => run('UPDATE products SET clicks = clicks + 1 WHERE id = ?', [id]);

export async function slugTaken(table, slug, exceptId) {
  const row = await get(`SELECT id FROM ${table} WHERE slug = ?`, [slug]);
  return Boolean(row && Number(row.id) !== Number(exceptId));
}

/* ---------------- shared ---------------- */

export async function upsert(table, row, id) {
  const cols = Object.keys(row);
  if (id) {
    await run(`UPDATE ${table} SET ${cols.map((c) => `${c} = ?`).join(', ')} WHERE id = ?`, [...Object.values(row), Number(id)]);
    return Number(id);
  }
  const res = await run(
    `INSERT INTO ${table} (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`,
    Object.values(row),
  );
  return res.insertId;
}
