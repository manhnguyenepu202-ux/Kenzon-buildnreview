// SIRUI batch 2: Aurora 35mm f/1.4 and Night Walker cine lenses. Researched 7 November 2026.
// Prices and images: store.sirui.com products.json read in a browser on 7 Nov 2026.
// Affiliate: SIRUI direct UpPromote link (sca_ref). The two earlier SIRUI reviews keep their Awin links.
// Skipped: Venus 150mm (out of stock in every mount), Saturn (no independent review read).
const REF = 'sca_ref=11294314.5ncq54eDmv&utm_source=affiliates&utm_medium=uppromote&utm_campaign=11294314';
const sirui = (handle) => `https://store.sirui.com/products/${handle}?${REF}`;
const cdn = (path) => `https://cdn.shopify.com/s/files/1/0449/9344/6037/files/${path}`;
const DATE = '2026-11-07 11:00:00';
const LABEL = 'Check price at SIRUI';

export default {
  products: [
    {
      slug: 'sirui-aurora-35mm-f1-4',
      name: 'SIRUI Aurora 35mm f/1.4',
      brand: 'SIRUI',
      model: 'Aurora 35mm f/1.4',
      category: 'camera-lenses',
      art_type: 'camera-lens',
      tone: '#5d4037',
      released: 2025,
      price_usd: 549,
      image_url: cdn('Aurora_28d2b82e-f28d-4be5-9c5c-2920484f545b.webp?v=1781158723'),
      gallery: [cdn('DSC07529.jpg?v=1793612770')],
      affiliate_url: sirui('sirui-aurora-series-35mm-f1-4-full-frame-autofocus-lens'),
      affiliate_label: LABEL,
      title: 'SIRUI Aurora 35mm f/1.4 review: lovely rendering, divided verdicts',
      summary: 'A $549 full-frame autofocus 35mm f/1.4 for Sony E, Nikon Z, L and Fujifilm X. Reviewers praise its rendering and build; autofocus and wide-open sharpness split them.',
      verdict: 'The Aurora 35mm gives you a fast full-frame f/1.4 with autofocus for $549. PetaPixel called it possibly the best fast 35mm option at its price and Dustin Abbott loved its bokeh; Digital Camera World and The Phoblographer both gave 3/5, citing soft wide-open sharpness, heavy vignetting and odd autofocus behaviour. Buy it for character and value, not for clinical sharpness or fast action.',
      best_for: 'Street, travel and environmental portrait shooters on a budget',
      pros: [
        'Full-frame 35mm f/1.4 with autofocus for $549',
        'Attractive, smooth bokeh (Dustin Abbott, The Phoblographer)',
        'High-quality construction',
        'Available for Sony E, Nikon Z, L-mount and Fujifilm X',
        'Matches the well-reviewed Aurora 85mm',
      ],
      cons: [
        'Wide-open sharpness criticised (Digital Camera World, 3/5)',
        'Autofocus accuracy and occasional delay questioned',
        'Heavy vignetting at f/1.4',
        'Bokeh called middling by PetaPixel, despite praise elsewhere',
        'Not for fast sports or wildlife',
      ],
      specs: [
        { label: 'Focal length', value: '35mm, full frame' },
        { label: 'Aperture', value: 'f/1.4' },
        { label: 'Focus', value: 'Autofocus' },
        { label: 'Mounts', value: 'Sony E, Nikon Z, L-mount, Fujifilm X' },
        { label: 'Price', value: '$549' },
      ],
      scores: { performance: 7.2, quality: 7.6, ease: 8.0, value: 8.4 },
      body: `## What is it?

The Aurora 35mm f/1.4 is SIRUI’s fast, full-frame autofocus 35mm, a sibling to the [Aurora 85mm](/en/review/sirui-aurora-85mm-f1-4/). It is sold for Sony E, Nikon Z, L-mount and Fujifilm X cameras.

It costs **$549** on SIRUI’s store on 7 November 2026.

## What reviewers found

Reviews are split, which tells you a lot about what this lens is:

- **PetaPixel** (January 2026) was positive, calling it possibly the best option for a fast 35mm at its price, while noting middling bokeh and a noticeable delay when focusing.
- **Dustin Abbott** (Nikon Z version) said it isn’t the sharpest 35mm, but praised its gorgeous bokeh rendering.
- **Digital Camera World** (November 2026) gave 3/5, citing lacklustre sharpness, questionable autofocus accuracy and severe wide-aperture vignetting.
- **The Phoblographer** (August 2026) also gave 3/5, praising sharp images and smooth bokeh but noting a few odd focus issues.

The pattern: good build and pleasing rendering, with autofocus and wide-open performance that don’t match premium lenses.

## Who should not buy it

- Sports, events and wildlife shooters who need fast, reliable autofocus.
- Anyone who needs corner-to-corner sharpness wide open: Sony’s 35mm f/1.4 GM or Sigma’s 35mm f/1.4 Art cost far more but deliver it.

## vs rivals

- **vs SIRUI Aurora 85mm ($404.10):** the portrait partner, with stronger reviews. See [Aurora 35mm vs 85mm](/en/compare/sirui-aurora-35mm-f1-4-vs-sirui-aurora-85mm-f1-4/).
- **vs Viltrox 35mm f/1.4:** a similar-priced rival with its own following.

## Final thoughts

The Aurora 35mm is a characterful, affordable fast 35mm. If rendering matters more to you than clinical sharpness, it is good value.

## Sources

- [PetaPixel: SIRUI Aurora 35mm f/1.4 review](https://petapixel.com/2026/01/10/sirui-aurora-35mm-f-1-4-review-sirui-succeeds-again/)
- [Digital Camera World: SIRUI Aurora 35mm f/1.4 review](https://www.digitalcameraworld.com/cameras/lenses/sirui-aurora-35mm-f-1-4-review) (3/5)
- [The Phoblographer: SIRUI 35mm f/1.4 Aurora review](https://www.thephoblographer.com/2026/08/11/sirui-35mm-f1-4-aurora-review-japanese-quality-for-1-4-of-the-price/) (3/5)
- [Dustin Abbott: SIRUI Aurora 35mm F1.4 Z review](https://dustinabbott.net/2025/11/sirui-aurora-35mm-f1-4-z-review/)
- [SIRUI store: Aurora 35mm](https://store.sirui.com/products/sirui-aurora-series-35mm-f1-4-full-frame-autofocus-lens) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sirui-night-walker',
      name: 'SIRUI Night Walker T1.2 Cine Lenses',
      brand: 'SIRUI',
      model: 'Night Walker',
      category: 'camera-lenses',
      art_type: 'camera-lens',
      tone: '#3e2723',
      released: 2023,
      price_usd: 279,
      image_url: cdn('16_351e61e8-14f2-465d-9be5-2d278c86bea2.jpg?v=1762397673'),
      gallery: [cdn('75_9e656160-6b7d-40de-ad17-e30428540e3e.jpg?v=1782480189'), cdn('3_cf7a1e36-39e3-4280-b2c5-e4fc876f22d0.jpg?v=1782480189')],
      affiliate_url: sirui('night-walker-t1-2-s35-cine-lens-series'),
      affiliate_label: LABEL,
      title: 'SIRUI Night Walker review: T1.2 cine primes for under $320',
      summary: 'Manual-focus T1.2 Super 35 cine primes with geared rings, from $279 each. Great value and low-light character; soft and low in contrast wide open.',
      verdict: 'The Night Walker primes give video shooters fast T1.2 cine lenses with geared focus and aperture rings for the price of one cheap photo lens. CineD called them almost unbeatable for the money. Wide open they are soft, low in contrast and show chromatic aberration, but they sharpen by about T1.8. For indie filmmakers on Super 35 cameras, they are excellent value.',
      best_for: 'Indie filmmakers on Super 35 and APS-C cameras',
      pros: [
        'Fast T1.2 aperture for low light',
        'Cine-style geared rings with long 270° focus throw',
        'Compact, around 500 g',
        'From $279 per lens (list $349)',
        'Well-controlled focus breathing (CineD)',
      ],
      cons: [
        'Soft and low-contrast at T1.2',
        'Strong chromatic aberration wide open',
        'Manual focus only',
        'Super 35 coverage, not full frame',
        'Loose focus ring and awkward lens cap on review samples (CineD)',
      ],
      specs: [
        { label: 'Format', value: 'Super 35 / APS-C' },
        { label: 'Aperture', value: 'T1.2' },
        { label: 'Focus', value: 'Manual, geared, 270° throw' },
        { label: 'Focal lengths', value: '16mm, 24mm, 35mm, 55mm, 75mm' },
        { label: 'Mounts', value: 'Sony E, Fujifilm X, Canon RF, L-mount, Micro Four Thirds' },
        { label: 'Price', value: '24/35/55mm from $279 · 16mm and 75mm $319' },
      ],
      scores: { performance: 7.0, quality: 7.4, ease: 7.2, value: 9.0 },
      body: `## What is it?

The Night Walker series are manual-focus cine primes for Super 35 and APS-C cameras, with a fast T1.2 aperture, geared focus and aperture rings, and a 270° focus throw. The range now covers 16, 24, 35, 55 and 75mm.

On 7 November 2026 SIRUI’s store sells most focal lengths from **$279** each (list $349), with the 16mm and 75mm at $319.

## What reviewers found

- **CineD** (Johnnie Behiri, 2023) tested the original 24, 35 and 55mm. It found them soft and not edge-to-edge sharp at T1.2, with strong chromatic aberration wide open, improving clearly when stopped down. The 24mm was the sharpest of the three, focus breathing was well controlled, and the verdict was that they feel almost unbeatable for the price. Downsides included a loose focus ring, metric-only markings and an awkward lens cap.
- **Keith Knittel** described plenty of low-contrast character at T1.2 that sharpens and regains contrast by about T1.8.

These reviews are from the launch period; check that newer batches have tightened the focus ring.

## Who should not buy it

- Stills photographers who want autofocus: the [SIRUI Sniper](/en/review/sirui-sniper-56mm-f1-2/) series adds AF.
- Full-frame shooters: these cover Super 35 only.

## vs rivals

- **vs SIRUI Sniper 56mm f/1.2 ($279):** autofocus APS-C lens for stills and hybrid shooting.
- **vs Meike and 7Artisans cine primes:** similar budget, slower apertures on many models.

## Final thoughts

If you shoot video in low light on a Super 35 camera, the Night Walkers give you real cine ergonomics and a dreamy wide-open look for very little money.

## Sources

- [CineD: SIRUI Nightwalker review](https://www.cined.com/sirui-nightwalker-review-cine-lenses-at-unbeatable-price-and-good-performance/) (2023)
- [Keith Knittel: cinema vs photo lens, SIRUI Nightwalker review](https://www.keithknittel.com/articles/cinema-vs-photo-lens-sirui-nightwalker-review)
- [SIRUI store: Night Walker series](https://store.sirui.com/products/night-walker-t1-2-s35-cine-lens-series) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'sirui-aurora-35mm-f1-4-vs-sirui-aurora-85mm-f1-4',
      title: 'SIRUI Aurora 35mm vs 85mm: which Aurora to buy first?',
      products: ['sirui-aurora-35mm-f1-4', 'sirui-aurora-85mm-f1-4'],
      intro: 'SIRUI’s two full-frame f/1.4 autofocus primes, one for everyday scenes and one for portraits.',
      verdict: 'Buy the Aurora 85mm ($404.10) first if you shoot portraits: it has the stronger reviews and costs less. Buy the 35mm ($549) for street, travel and environmental portraits, accepting softer wide-open results and less reliable autofocus.',
      updated_at: DATE,
    },
  ],
  guides: [],
};
