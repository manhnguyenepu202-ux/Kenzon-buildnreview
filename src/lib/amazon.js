// Amazon Associates links (tracking ID bnr-web-20), keyed by product slug.
// Shown as a second button next to the manufacturer's affiliate link.
export const AMAZON_LINKS = {
  'snapmaker-u1': 'https://link.amazon/B09Rit4gR',
};
export const amazonUrl = (p) => AMAZON_LINKS[p.slug] || null;
