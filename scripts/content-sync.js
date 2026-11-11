import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT } from '../src/config.js';
import { get, run } from '../src/db/index.js';
import { saveCategory, saveProduct } from '../src/models/catalog.js';
import { saveComparison, saveGuide } from '../src/models/content.js';

const CONTENT_DIR = path.join(ROOT, 'content');

/**
 * Publishes the review packs in /content (one .js file per brand or batch).
 * Insert-only: a row whose slug already exists is left alone, so edits made in /admin are never overwritten.
 * Pack shape: export default { categories: [], products: [], comparisons: [], guides: [] }
 */
export async function syncContent({ log = console.log } = {}) {
  if (!fs.existsSync(CONTENT_DIR)) return;
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.js')).sort();
  const packs = [];
  for (const f of files) packs.push((await import(pathToFileURL(path.join(CONTENT_DIR, f)).href)).default);

  const added = { categories: 0, products: 0, comparisons: 0, guides: 0 };
  const idBySlug = async (table, slug) => (await get(`SELECT id FROM ${table} WHERE slug = ?`, [slug]))?.id;

  // An item with `replace: '<tag>'` may overwrite an existing row of the same slug, once per database
  // (a settings flag records it), e.g. to turn an old starter draft into a full review. Later admin edits stand.
  const replaceOnce = async (table, item) => {
    if (!item.replace) return false;
    const flag = `r:${item.replace}:${table[0]}:${item.slug}`.slice(0, 80);
    if (await get('SELECT skey FROM settings WHERE skey = ?', [flag])) return false;
    await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [flag, new Date().toISOString()]);
    return true;
  };
  let replaced = 0;

  const newCategories = [];
  for (const c of packs.flatMap((p) => p.categories || [])) {
    if (await idBySlug('categories', c.slug)) continue;
    await saveCategory(c);
    newCategories.push(c);
    added.categories++;
  }

  for (const p of packs.flatMap((pk) => pk.products || [])) {
    const existingId = await idBySlug('products', p.slug);
    const categoryId = await idBySlug('categories', p.category);
    if (!categoryId) { log(`[content] skipped ${p.slug}: unknown category "${p.category}"`); continue; }
    if (existingId) {
      if (!(await replaceOnce('products', p))) continue;
      await saveProduct({ ...p, category_id: categoryId, is_sample: p.is_sample ?? true }, existingId);
      replaced++;
      continue;
    }
    await saveProduct({ ...p, category_id: categoryId, is_sample: p.is_sample ?? true });
    added.products++;
  }

  // The "Maker pick" box on a new category's reviews promotes its sponsor product.
  for (const c of newCategories) {
    const sponsorId = c.sponsor && (await idBySlug('products', c.sponsor));
    if (sponsorId) await run('UPDATE categories SET sponsor_product_id = ? WHERE slug = ?', [sponsorId, c.slug]);
  }

  for (const c of packs.flatMap((p) => p.comparisons || [])) {
    const existingId = await idBySlug('comparisons', c.slug);
    if (existingId) {
      if (!(await replaceOnce('comparisons', c))) continue;
      await saveComparison({ ...c, product_slugs: c.products }, existingId);
      replaced++;
      continue;
    }
    await saveComparison({ ...c, product_slugs: c.products });
    added.comparisons++;
  }

  for (const g of packs.flatMap((p) => p.guides || [])) {
    if (await idBySlug('guides', g.slug)) continue;
    await saveGuide({ ...g, category_id: g.category ? await idBySlug('categories', g.category) : null });
    added.guides++;
  }

  const total = Object.values(added).reduce((a, b) => a + b, 0);
  if (replaced) log(`[content] replaced ${replaced} existing rows.`);
  if (total) log(`[content] published ${added.categories} categories, ${added.products} reviews, ${added.comparisons} comparisons, ${added.guides} guides.`);
}

// Run directly (npm run content:sync). process.argv[1] can be missing under hosting process managers.
// No top-level await: Hostinger loads server.js with require(), which rejects async ES module graphs.
async function main() {
  const { connect } = await import('../src/db/index.js');
  const { migrate } = await import('../src/db/schema.js');
  await connect();
  await migrate();
  await syncContent();
  process.exit(0);
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch((err) => { console.error(err); process.exit(1); });
}
