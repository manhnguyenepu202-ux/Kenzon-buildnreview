import { get, run } from '../src/db/index.js';
import { priceUpdate } from '../src/deals/price-update-2026-11.js';
import { priceUpdateFixes } from '../src/deals/price-update-2026-11b.js';

const KEY = { products: 'slug', comparisons: 'slug', guides: 'slug' };

/** Applies each update in src/deals once per database (a settings flag records it). */
export async function applyPriceUpdate({ log = console.log } = {}) {
  for (const { flag, prices, edits } of [priceUpdate, priceUpdateFixes]) {
    if (await get('SELECT skey FROM settings WHERE skey = ?', [flag])) continue;

    let priced = 0;
    for (const [slug, price] of Object.entries(prices)) {
      await run('UPDATE products SET price_usd = ? WHERE slug = ?', [price, slug]);
      priced++;
    }

    let changed = 0;
    for (const { table, slug, field, from, to } of edits) {
      if (!KEY[table] || !/^[a-z_]+$/.test(field)) continue;
      const row = await get(`SELECT ${field} AS text FROM ${table} WHERE slug = ?`, [slug]);
      if (!row || !String(row.text ?? '').includes(from)) continue;
      await run(`UPDATE ${table} SET ${field} = ? WHERE slug = ?`, [String(row.text).split(from).join(to), slug]);
      changed++;
    }

    await run('INSERT INTO settings (skey, svalue) VALUES (?, ?)', [flag, new Date().toISOString()]);
    log(`[prices] ${flag}: updated ${priced} prices and ${changed} text mentions.`);
  }
}
