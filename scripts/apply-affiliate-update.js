import { get, run, all } from '../src/db/index.js';

// Snapmaker moved its affiliate program to Impact (November 2026).
// The new tracking link does not accept deep links, so every Snapmaker button points to it.
export const SNAPMAKER_AFFILIATE_URL = 'https://snapmaker.sjv.io/0GZm4Y';
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
