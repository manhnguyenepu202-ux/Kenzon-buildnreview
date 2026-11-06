// Second pass of the 6 November 2026 price update: pros and cons that still quoted old prices.
const e = (slug, field, from, to) => ({ table: 'products', slug, field, from, to });

export const priceUpdateFixes = {
  flag: 'prices_2026_11_06b',
  prices: {},
  edits: [
    e('einstar-vega', 'cons', 'At $1,599 it costs nearly twice an EINSTAR 2', 'At $1,999 it costs about 60% more than an EINSTAR 2'),
    e('einstar-rockit', 'pros', 'Large discount on the store: $1,519 vs $1,899 list', 'At $1,899 it undercuts professional blue-laser scanners'),
    e('einstar-2', 'pros', 'Big store discount: $899 vs $1,249 list', 'Costs far less than the EINSTAR VEGA or Rockit'),
    e('einstar-2', 'pros', '"Refurbished units available from $799",', ''),
    e('einstar-2', 'pros', ',"Refurbished units available from $799"', ''),
    e('revopoint-miraco', 'pros', 'Cheaper than the EINSTAR VEGA ($1,349 vs $1,599)', 'Cheaper than the EINSTAR VEGA ($1,499 vs $1,999)'),
    e('revopoint-pop-3-plus', 'pros', '$526 for the Standard Edition', '$619 for the Standard Edition'),
    e('revopoint-inspire-2', 'pros', 'From $439 on the official store', 'From $494 on the official store'),
    e('uuna-tek-iauto', 'cons', 'Expensive: $2,799 for the Standard model', 'Expensive: $2,999 for the Standard model'),
    e('uuna-tek-idraw-h-a3', 'pros', '(16.5 × 11.7 in) for $559', '(16.5 × 11.7 in) for $599'),
    e('creality-k2-combo', 'pros', 'Four-colour CFS included for $521', 'Four-colour CFS included for $549'),
    e('creality-ender-3-v3-se', 'pros', '$179 on Creality’s official store', '$199 on Creality’s official store'),
    e('laserpecker-lp2', 'pros', 'Big discount: $549 vs $999 list', 'Big discount: $499 vs $999 list'),
    e('laserpecker-lp4', 'pros', 'Big discount: $1,099 vs $1,999 list', 'Big discount: $1,039 vs $1,999 list'),
    e('laserpecker-lp1-plus', 'pros', 'Only $199 for the Standard Bundle', 'Only $179 for the Standard Bundle'),
    e('sirui-aurora-85mm-f1-4', 'pros', 'Full-frame f/1.4 for $449 (list $599)', 'Full-frame f/1.4 for $404.10 (list $599)'),
    e('creality-cr-laser-falcon-10w', 'pros', '$205, down from $489 at launch', '$189.90, down from $489 at launch'),
    e('biqu-panda-breath', 'pros', 'About $96 from BIQU’s US warehouse', 'About $90 from BIQU’s US warehouse'),
  ],
};
