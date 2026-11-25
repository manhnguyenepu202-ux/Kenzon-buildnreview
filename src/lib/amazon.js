// Amazon Associates links, keyed by product slug.
// Shown as a second button next to the manufacturer's affiliate link.
// Rule (25 Nov 2026): one bnr-fb-20 link per product, used on the website and in Facebook posts.
export const AMAZON_LINKS = {
  'snapmaker-u1': 'https://link.amazon/B09Rit4gR', // bnr-web-20
  'bambu-lab-p1s': 'https://link.amazon/B03a9r5KX',
  // Batch 1
  'bambu-lab-a1': 'https://link.amazon/B08YcqJWa',
  'xtool-m2': 'https://link.amazon/A031rSk1Q',
  'creality-k2-plus-combo': 'https://link.amazon/B0hZtPgSE',
  'flashforge-creator-5': 'https://link.amazon/B00nEXjPK',
  'xtool-f2-ultra': 'https://link.amazon/A0f0T1cS2',
  'flashforge-ad5x': 'https://link.amazon/B0geGvNst',
  // Batch 2
  'flashforge-creator-5-pro': 'https://link.amazon/B0byheUXP',
  'creality-k2-pro-combo': 'https://link.amazon/B02A3X2ya',
  'creality-k2-combo': 'https://link.amazon/B03VknBQz',
  // Batch 3
  'elegoo-centauri-carbon-2-combo': 'https://link.amazon/B0bvAnXU8',
  'flashforge-adventurer-5m-pro': 'https://link.amazon/B02fbLMXm',
  'anycubic-kobra-x-combo': 'https://link.amazon/B0damxH1k',
  'anycubic-kobra-s1-max': 'https://link.amazon/B0jjWTlfN',
  'creality-sparkx-i7-combo': 'https://link.amazon/B02LyMTVj',
  // Batch 4
  'bambu-lab-p2s': 'https://link.amazon/B02AkDki2',
};
export const amazonUrl = (p) => AMAZON_LINKS[p.slug] || null;
