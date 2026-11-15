import { get, run, all } from '../src/db/index.js';

// Snapmaker moved its affiliate program to Impact (November 2026).
// The short vanity link (0GZm4Y) ignores deep links, so it always lands on the home page.
// The full Impact link accepts ?u=, which keeps the click ID and lands on the product page.
export const SNAPMAKER_IMPACT = 'https://snapmaker.sjv.io/c/6833997/1346054/16240';
export const SNAPMAKER_AFFILIATE_URL = SNAPMAKER_IMPACT;
export const snapmakerDeepLink = (handle) =>
  `${SNAPMAKER_IMPACT}?u=${encodeURIComponent(`https://us.snapmaker.com/products/${handle}`)}`;

// Product slug -> us.snapmaker.com product handle (checked 15 Nov 2026).
export const SNAPMAKER_HANDLES = {
  'snapmaker-u1': 'snapmaker-u1-3d-printer',
  'snapmaker-artisan-3-in-1': 'snapmaker-artisan-3-in-1-3d-printer',
  'snapmaker-40w-laser-module': 'snapmaker-20w-and-40w-laser-module-with-air-assist',
  'snapmaker-200w-cnc-module': 'snapmaker-200w-cnc-module-bundle',
  'snapmaker-air-purifier': 'snapmaker-2-0-air-purifier',
  'snapdryer-bundle': 'snapdryer-bundle',
  'snapmaker-10w-laser-module': 'snapmaker-10w-high-power-laser-module',
  'snapmaker-rotary-module': 'snapmaker-2-0-rotary-module',
  'snapmaker-2-dual-extrusion-module': 'snapmaker-dual-extrusion-3d-printing-module',
  'snapmaker-artisan-dual-extrusion-module': 'dual-extrusion-3d-printing-module-for-snapmaker-artisan',
};
const DEEP_FLAG = 'aff:snapmaker-deeplinks-2026-11-15';
const FLAG = 'aff:snapmaker-impact-2026-11';

/** Runs once per database (a settings flag records it). Later edits in /admin are left alone. */
export async function applyAffiliateUpdate({ log = console.log } = {}) {
  if (await get('SELECT skey FROM settings WHERE skey = ?', [FLAG])) return;

  const rows = await all("SELECT id, slug FROM products WHERE affiliate_url LIKE '%snapmaker.com%'");
  for (const r of rows) await run('UPDATE products SET affiliate_url = ? WHERE id = ?', [SNAPMAKER_AFFILIATE_URL, r.id]);

  // The header "Shop Snapmaker" button and the /go/ fallback use this setting.
  const saved = await get("SELECT svalue FROM settings WHERE skey = 'affiliate_default_url'");
  if (saved && /snapmaker\.com/.test(saved.svalue || '')) {
    await run("UPDATE settings SET svalue = ? WHERE skey = 'affiliate_default_url'", [SNAPMAKER_AFFILIATE_URL]);
  }

  await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [FLAG, new Date().toISOString()]);
  log(`[affiliate] Snapmaker links updated on ${rows.length} products${saved ? ' and in settings' : ''}.`);
}

/** Once per database: point every Snapmaker product at its own product page through Impact. */
export async function applySnapmakerDeepLinks({ log = console.log } = {}) {
  if (await get('SELECT skey FROM settings WHERE skey = ?', [DEEP_FLAG])) return;
  let n = 0;
  for (const [slug, handle] of Object.entries(SNAPMAKER_HANDLES)) {
    const row = await get('SELECT affiliate_url FROM products WHERE slug = ?', [slug]);
    if (!row) continue;
    const cur = row.affiliate_url || '';
    if (cur && !/snapmaker\.sjv\.io\/0GZm4Y|snapmaker\.com/.test(cur)) continue; // edited by hand in /admin
    await run('UPDATE products SET affiliate_url = ? WHERE slug = ?', [snapmakerDeepLink(handle), slug]);
    n++;
  }
  const saved = await get("SELECT svalue FROM settings WHERE skey = 'affiliate_default_url'");
  if (saved && /0GZm4Y/.test(saved.svalue || '')) {
    await run("UPDATE settings SET svalue = ? WHERE skey = 'affiliate_default_url'", [SNAPMAKER_IMPACT]);
  }
  await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [DEEP_FLAG, new Date().toISOString()]);
  log(`[affiliate] Snapmaker deep links set on ${n} products.`);
}
