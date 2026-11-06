// Third pass of the 6 November 2026 price update: the three EINSTAR scanners rose $380–$400 in price, so their value
// scores come down, and the EINSTAR 2 gives up "Best overall" to the cheaper Revopoint POP 4.
export const scoreUpdate = {
  flag: 'prices_2026_11_06c',
  prices: {},
  valueScores: { 'einstar-2': 8.2, 'einstar-vega': 7.4, 'einstar-rockit': 7.6 },
  edits: [
    { table: 'products', slug: 'einstar-2', field: 'verdict', from: 'The EINSTAR 2 is the scanner we would point most 3D-printing hobbyists to first. It adds', to: 'The EINSTAR 2 is a strong first serious scanner for parts scanned at a desk. It adds' },
    {
      table: 'guides', slug: 'best-3d-scanners', field: 'items',
      from: '[{"slug":"einstar-2","award":"Best overall","note":"Blue lasers plus infrared for $1,249: the safest first serious scanner."},',
      to: '[{"slug":"revopoint-pop-4","award":"Best overall","note":"Blue lasers, infrared and a battery grip for wireless scanning, from $839."},{"slug":"einstar-2","award":"Best desk-based all-rounder","note":"Blue lasers plus infrared for dark and shiny parts, $1,249."},',
    },
    { table: 'guides', slug: 'best-3d-scanners', field: 'intro', from: 'Prices are official US store prices on 30 October 2026.', to: 'Prices are official US store prices on 6 November 2026.' },
    { table: 'comparisons', slug: 'einstar-vega-vs-revopoint-miraco', field: 'verdict', from: 'to save $250', to: 'to save $500' },
  ],
};
