import { all, get, run } from '../src/db/index.js';

// Starter reviews that still use a drawing instead of a product photo and have no affiliate link yet.
// They are set to draft (not deleted) so they can be republished from /admin once a photo and link exist.
const PHOTOLESS = [
  'anycubic-kobra-3-combo', 'bambu-lab-a1-mini', 'bambu-lab-p1s', 'creality-k1c', 'elegoo-neptune-4-pro', 'prusa-mk4s',
  'bosch-gsr-12v-15', 'bosch-pmf-220-ce', 'dewalt-dcd791', 'dewalt-dcs356', 'makita-dhp485', 'milwaukee-m18-fpd3',
  'cosori-pro-le', 'dyson-v15-detect', 'ninja-foodi-af300', 'philips-airfryer-xxl', 'roborock-q7-max', 'roborock-s8',
];
const FLAG = 'cleanup_photoless_2026_11';

const parse = (s) => { try { return JSON.parse(s || '[]'); } catch { return []; } };

/**
 * One-time cleanup: hides the photo-less starter reviews, plus any comparison or guide left with fewer than
 * two published products. Runs once per database (a settings flag records it), so later admin edits stand.
 */
export async function hidePhotoless({ log = console.log } = {}) {
  if (await get('SELECT skey FROM settings WHERE skey = ?', [FLAG])) return;

  let products = 0;
  for (const slug of PHOTOLESS) {
    const p = await get("SELECT id FROM products WHERE slug = ? AND status = 'published' AND (image_url IS NULL OR image_url = '')", [slug]);
    if (!p) continue;
    await run("UPDATE products SET status = 'draft' WHERE id = ?", [p.id]);
    products++;
  }

  const published = new Set((await all("SELECT slug FROM products WHERE status = 'published'")).map((r) => r.slug));
  let comparisons = 0;
  for (const c of await all("SELECT id, product_ids FROM comparisons WHERE status = 'published'")) {
    if (parse(c.product_ids).filter((s) => published.has(s)).length < 2) {
      await run("UPDATE comparisons SET status = 'draft' WHERE id = ?", [c.id]);
      comparisons++;
    }
  }
  let guides = 0;
  for (const g of await all("SELECT id, items FROM guides WHERE status = 'published'")) {
    if (parse(g.items).filter((i) => published.has(i.slug)).length < 2) {
      await run("UPDATE guides SET status = 'draft' WHERE id = ?", [g.id]);
      guides++;
    }
  }

  await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [FLAG, new Date().toISOString()]);
  log(`[cleanup] hid ${products} photo-less reviews, ${comparisons} comparisons, ${guides} guides.`);
}
