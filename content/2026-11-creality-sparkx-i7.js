// Preview: Creality SPARKX i7 Combo. Researched 24 November 2026 from Amazon US listing titles and bullet text (the owner's pasted pages).
// No independent long-form test found, so the review is marked "(preview)" and nothing here claims our own testing.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const creality = (path) => awin(97013, `https://store.creality.com/${path}`);
const DATE = '2026-11-24 23:00:00';

export default {
  categories: [],
  products: [
    {
      slug: 'creality-sparkx-i7-combo',
      name: 'Creality SPARKX i7 Combo',
      brand: 'Creality',
      model: 'SPARKX i7 Combo',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#455a64',
      released: 2026,
      price_usd: 319,
      image_url: 'https://buildnreview.com/pins/creality-sparkx-i7-combo-photo.jpg',
      gallery: [],
      affiliate_url: creality('collections/3d-printers'),
      affiliate_label: 'Check price at Creality',
      title: 'Creality SPARKX i7 Combo review (preview): multicolour with CFS Lite for about $319',
      summary: 'A compact bed-slinger with the CFS Lite colour system, an AI camera and a quick-swap hotend, listed up to 500 mm/s. Amazon showed it at $319 on 24 Nov 2026; we found no independent test yet.',
      verdict: 'The SPARKX i7 Combo is Creality’s budget route into multicolour printing: a 260 × 260 × 255 mm bed-slinger bundled with the CFS Lite filament system. Amazon listings also mention an AI camera, auto-leveling, a direct-drive extruder, Wi-Fi and an AI photo-to-3D feature. It is new and we found no independent long-form test, so this preview rests on the listing text. Wait for hands-on reviews of colour-change waste and reliability before you rely on it.',
      best_for: 'Beginners who want a low-cost, compact multicolour printer and can accept an open frame',
      pros: [
        'CFS Lite multicolour system included in the Combo',
        '260 × 260 × 255 mm build volume (10.24 × 10.24 × 10 in, Amazon listing)',
        'AI camera monitoring and auto-leveling (listing)',
        'Quick-swap hotend and direct-drive extruder (listing)',
        'Amazon showed the Combo at $319 against a $429 list price on 24 Nov 2026',
      ],
      cons: [
        'No independent long-form test yet (preview)',
        'Open frame, so it suits PLA and PETG better than warp-prone filaments',
        'Listed “up to 500 mm/s” is a peak claim, not a typical print speed',
        'Colour-change purge waste and CFS Lite reliability are untested by us',
        'Several similar Creality listings share the name, so check the exact Combo you buy',
      ],
      specs: [
        { label: 'Type', value: 'Compact open-frame FDM bed-slinger with CFS Lite' },
        { label: 'Build volume', value: '260 × 260 × 255 mm (10.24 × 10.24 × 10 in)' },
        { label: 'Speed', value: 'Up to 500 mm/s (Amazon listing)' },
        { label: 'Extruder', value: 'Direct drive with quick-swap hotend (listing)' },
        { label: 'Smart features', value: 'AI camera monitoring, auto-leveling, AI photo-to-3D printing (listing)' },
        { label: 'Setup', value: '95% pre-assembled (listing)' },
        { label: 'Price', value: 'About $319 on Amazon US (list $429), 24 Nov 2026' },
      ],
      scores: { performance: 7.8, quality: 7.8, ease: 8.2, value: 8.4 },
      body: `## What is it?

The SPARKX i7 Combo is a compact Creality printer bundled with the **CFS Lite**, Creality’s smaller filament system for multicolour prints. The listing describes a **260 × 260 × 255 mm** build volume, an AI camera, auto-leveling, a direct-drive extruder with a quick-swap hotend and Wi-Fi.

On 24 November 2026 Amazon US showed the Combo at **$319** against a **$429** list price. Prices change often, so check the current price before you buy.

## A note on evidence

The SPARKX i7 is new and we found no independent long-form test. This preview draws only on Amazon’s product listings and customer rating counts, which show about 735 ratings on the Combo listing. We haven’t tested it hands-on.

## What the listings say

- **Colour:** the Combo adds CFS Lite for multicolour printing and auto filament management (listing).
- **Speed:** listings say “up to 500 mm/s”. Treat that as a peak figure.
- **Monitoring:** an AI camera watches prints (listing).
- **Setup:** about 95 percent pre-assembled, with auto-leveling and smart calibration (listing).
- **Extras:** a quick-swap hotend, RGB lighting and an AI photo-to-3D feature are mentioned in listing titles.

## Who should not buy it

- Anyone who needs an enclosure for ABS or ASA. See the [Creality K2 Combo](/en/review/creality-k2-combo/) or the [ELEGOO Centauri Carbon 2 Combo](/en/review/elegoo-centauri-carbon-2-combo/).
- Anyone who wants proven multicolour reliability before spending money.
- Anyone who needs a large bed: 260 mm is a mid-sized volume.

## vs rivals

- **vs [Anycubic Kobra X Combo](/en/review/anycubic-kobra-x-combo/):** a similar compact bed-slinger with multicolour; compare colour count and purge waste.
- **vs [ELEGOO Centauri Carbon 2 Combo](/en/review/elegoo-centauri-carbon-2-combo/):** the Elegoo is enclosed, with a 350°C hotend.
- For other picks, see our [best multicolour 3D printers guide](/en/best/best-multicolor-3d-printers/).

## Final thoughts

If you want the cheapest way into multicolour printing and are fine with an open frame, the SPARKX i7 Combo is worth watching. We will update this page when independent tests of print quality and CFS Lite reliability appear.

## Sources

- Amazon US product listings for the Creality SPARKX i7 and SPARKX i7 Combo, read on 24 November 2026 (specs, price and rating counts)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],
  comparisons: [],
  guides: [],
};
