// Creality Official Store batch: K2 Plus Combo, K2 Pro Combo, K2 Combo, Ender-3 V3 SE. Researched 31 October 2026.
// Prices and images: store.creality.com product pages, 31 Oct 2026 (Halloween sale prices).
// Test results: the independent reviews listed in each article's Sources section.
// K1C is already on the site (creality-k1c). Hi Combo is not sold on store.creality.com, so it is skipped.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const creality = (handle) => awin(97013, `https://store.creality.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0893/0603/8637/files/${file}`;
const DATE = '2026-11-01 02:00:00';
const LABEL = 'Check price at Creality';

export default {
  products: [
    {
      slug: 'creality-k2-plus-combo',
      name: 'Creality K2 Plus Combo',
      brand: 'Creality',
      model: 'K2 Plus',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#263238',
      released: 2025,
      price_usd: 1199,
      featured: true,
      image_url: cdn('K2_plus_45_cfs.png?v=1766129203'),
      gallery: [cdn('K2_plus_45.png?v=1766129203'), cdn('output.lin.png?v=1762200442')],
      affiliate_url: creality('creality-k2-plus-combo-3d-printer'),
      affiliate_label: LABEL,
      title: 'Creality K2 Plus Combo review: a 350 mm multicolour flagship with rough edges',
      summary: 'A large 350 mm cube enclosed CoreXY with 60°C heated chamber and four-colour CFS (up to 16), $1,199. Excellent prints; 3DWithUs hit repeated feed errors.',
      verdict: 'The K2 Plus Combo is Creality’s big multicolour flagship: a 350 mm cube, actively heated chamber, 350°C hotend and up to 16 colours. Reviewers praise print quality (XDA 8/10, 3DPut 9/10), but 3DWithUs hit repeated CFS feed errors and a status bug, and early units shipped with uncalibrated belt tensioners. At $1,199 it is the most build volume and colour capacity for the money, if you can handle some troubleshooting.',
      best_for: 'Makers and small print farms who need large multicolour prints',
      pros: [
        'Large 350 × 350 × 350 mm build volume',
        'Active chamber heating to 60°C, 350°C hotend, 120°C bed',
        'CFS: 4 colours, expandable to 16 with more units; RFID',
        'Up to 600 mm/s with dual AI cameras',
        'Excellent print quality in long multicolour jobs',
      ],
      cons: [
        'CFS feed errors (FB2849, FB2844) and an incorrect “idle” status in 3DWithUs’s test',
        'Early units shipped with an uncalibrated belt tensioner',
        'Big and heavy: about 35 kg and 92 cm tall',
        'Lots of features to learn for a first printer',
        'Purge waste on multicolour prints',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '350 × 350 × 350 mm' },
        { label: 'Speed', value: 'Up to 600 mm/s, 30,000 mm/s²' },
        { label: 'Temperatures', value: 'Hotend 350°C, bed 120°C, chamber 60°C (active)' },
        { label: 'Multicolour', value: 'CFS, 4 spools; up to 16 with 4 units' },
        { label: 'Size and weight', value: '495 × 515 × 916 mm, ~35 kg' },
        { label: 'Price', value: '$1,199 with one CFS (list $1,499)' },
      ],
      scores: { performance: 8.8, quality: 8.8, ease: 7.0, value: 8.4 },
      body: `## What is it?

The K2 Plus is Creality’s flagship enclosed CoreXY printer. It has a 350 mm cube build volume, an actively heated chamber, a 350°C hotend and the CFS (Creality Filament System) for four colours, expandable to 16 with extra units.

It costs **$1,199** with one CFS on Creality’s official store on 31 October 2026 (list $1,499).

## Tests

3DWithUs (Max Funkner, updated September 2025) ran long prints:

- A scanned basket lid with organic supports in about 9 hours.
- A 7-hour multicolour print and a 7-hour pastel heart tray, which was the cleanest print of the test.
- Third-party PLA from SUNLU and Sovol purged well.

It also hit problems: the printer showed “idle” incorrectly every second or third job, error FB2849 (filament couldn’t return to the CFS) at a colour change, and FB2844 (PTFE tube detached) six or seven times in one print. Picking the wrong printer profile let the nozzle scratch the PEI plate. The reviewer suspected imported 3MF presets and stopped using them.

XDA scored it 8/10 and 3DPut 9/10, both praising quality and size; XDA flagged complexity and the uncalibrated belt tensioner on early units.

## Living with it

It weighs about 35 kg and stands 92 cm tall, so plan the space. The many features (CFS, auto levelling, cameras, network printing) can overwhelm a first-time user.

## Who should not buy it

- Beginners who want a printer that never needs troubleshooting.
- Anyone whose prints fit in 256 mm: the K2 Pro or a Centauri Carbon 2 costs much less.

## vs rivals

- **vs Creality K2 Pro Combo ($799):** 300 mm cube, quieter, cheaper. See [K2 Plus vs K2 Pro](/en/compare/creality-k2-plus-combo-vs-creality-k2-pro-combo/).
- **vs Bambu Lab P1S Combo:** smaller 256 mm, more polished software.
- **vs QIDI Plus4:** similar chamber heating, smaller volume.

## Final thoughts

The K2 Plus Combo does big multicolour prints that few printers at this price can. Expect a learning curve and some feed errors along the way.

## Sources

- [3DWithUs: Creality K2 Plus Combo review](https://3dwithus.com/creality-k2-plus-combo-review-3d-printer-tests-tips-settings)
- [XDA Developers: Creality K2 Plus Combo review](https://www.xda-developers.com/creality-k2-plus-combo-review/) (8/10)
- [3DPut: K2 Plus Combo review](https://3dput.com/creality-k2-plus-combo-review/) (9/10)
- [TechRadar: Creality K2 Plus review](https://www.techradar.com/pro/creality-k2-plus-review)
- [Creality official store: K2 Plus Combo](https://store.creality.com/products/creality-k2-plus-combo-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-k2-pro-combo',
      name: 'Creality K2 Pro Combo',
      brand: 'Creality',
      model: 'K2 Pro',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#37474f',
      released: 2025,
      price_usd: 799,
      featured: true,
      image_url: cdn('K2_Pro_Combo-_1.png?v=1762929981'),
      gallery: [cdn('2_9ee6a04e-9902-4cc7-93b4-32c5252c6231.png?v=1774945859'), cdn('K2_Pro_-_1.png?v=1768898714')],
      affiliate_url: creality('k2-pro-combo-3d-printer'),
      affiliate_label: LABEL,
      title: 'Creality K2 Pro Combo review: a quiet, polished multicolour workhorse',
      summary: 'A 300 mm cube enclosed CoreXY with heated chamber and four-colour CFS, $799 (down from $1,099). 3DWithUs scored it 4.7; TPU is its weak spot.',
      verdict: 'The K2 Pro Combo is the sweet spot of Creality’s K2 range: Tom’s Hardware had a long run of perfect prints, 3DWithUs scored it 4.7, and Fabbaloo found it very quiet even at speed. It handles most technical filaments with its 300°C nozzle and 60°C chamber, but TPU was a problem. At $799 it is strong value for engineers and power users.',
      best_for: 'Power users printing engineering filaments in multiple colours',
      pros: [
        'Long run of perfect prints in Tom’s Hardware testing',
        'Very quiet even at high speed (Fabbaloo)',
        '300 mm cube; 300°C nozzle, 110°C bed, 60°C chamber',
        'Up to 16 colours with four CFS units',
        'Now $799, down from $1,099',
      ],
      cons: [
        'TPU printing was a problem (Tom’s Hardware)',
        'Not quite as capable as the K2 Plus, per Tom’s Hardware',
        'Overkill for PLA/PETG-only users (3DJake)',
        'Purge waste on multicolour prints',
        'Standalone K2 Pro was back-ordered at time of writing',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '300 × 300 × 300 mm' },
        { label: 'Temperatures', value: 'Nozzle 300°C, bed 110°C, chamber 60°C' },
        { label: 'Multicolour', value: 'CFS, 4 spools; up to 16 with 4 units' },
        { label: 'Price', value: 'Combo $799 · K2 Pro alone $599' },
      ],
      scores: { performance: 8.8, quality: 9.0, ease: 8.2, value: 8.8 },
      body: `## What is it?

The K2 Pro sits between the 260 mm K2 and the 350 mm K2 Plus. It has a 300 mm cube volume, an actively heated chamber and the four-colour CFS in the Combo.

On 31 October 2026 Creality’s store sells the Combo for **$799** (list $1,099). The K2 Pro alone costs $599 but was back-ordered. Tom’s Hardware reviewed it at $999.

## Tests and reviews

- **Tom’s Hardware** called it a mid-sized, four-colour speedster with a lot of polish and reported a long run of perfect prints with no failures. TPU was the exception. It judged it a little behind the K2 Plus.
- **3DWithUs** scored it 4.7 after an 8-colour test with two CFS units.
- **Fabbaloo** found it very quiet, even at higher speeds, and liked the cloud app for monitoring.
- **ThePhonograph** printed a keycap test 32% faster than on the Creality Hi Combo.
- **3DJake** sees it as a machine for power users and engineers, and suggests the cheaper K2 Combo for PLA and PETG only.

## Who should not buy it

- PLA/PETG hobbyists on a budget: the K2 Combo or Centauri Carbon 2 Combo saves money.
- Anyone who prints a lot of TPU.

## vs rivals

- **vs K2 Plus Combo ($1,199):** larger 350 mm volume, more troubleshooting reported. See [K2 Plus vs K2 Pro](/en/compare/creality-k2-plus-combo-vs-creality-k2-pro-combo/).
- **vs K2 Combo ($521):** 260 mm, no active chamber heat.
- **vs Bambu Lab P1S Combo:** smaller, more mature ecosystem.

## Final thoughts

At $799, the K2 Pro Combo is the K2 to buy for most serious makers: quiet, reliable and ready for engineering filaments.

## Sources

- [Tom’s Hardware: Creality K2 Pro Combo review](https://www.tomshardware.com/3d-printing/creality-k2-pro-combo-review)
- [3DWithUs: K2 Pro Combo 8-colour test](https://3dwithus.com/creality-k2-pro-combo-8-color-printing-with-2-cfss-tested) (4.7)
- [Fabbaloo: hands on with the K2 Pro Combo, part 2](https://www.fabbaloo.com/news/hands-on-with-the-creality-k2-pro-combo-part-2)
- [3DJake: K2 Combo vs K2 Pro Combo](https://www.3djake.com/info/guide/creality-k2-combo-vs-k2-pro-combo-which-3d-printer-is-right)
- [Creality official store: K2 Pro Combo](https://store.creality.com/products/k2-pro-combo-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-k2-combo',
      name: 'Creality K2 Combo',
      brand: 'Creality',
      model: 'K2',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#455a64',
      released: 2025,
      price_usd: 521,
      image_url: cdn('K2_Combo-_1.png?v=1762073455'),
      gallery: [cdn('K2_-_1_d3638ad8-8f17-48c9-98c9-7fa125c5dd07.png?v=1762073455'), cdn('1_2_a38f5d50-c06b-4d2f-91cb-4c5a671739a6.png?v=1778139140')],
      affiliate_url: creality('k2-combo-3d-printer'),
      affiliate_label: LABEL,
      title: 'Creality K2 Combo review: the value K2 for multicolour PLA and PETG',
      summary: 'An enclosed 260 mm cube CoreXY with four-colour CFS and camera, $521 ($419 without CFS). CGMagazine scored it 9/10 once set up; setup is fiddly and the fans are loud.',
      verdict: 'The K2 Combo brings Creality’s CFS multicolour system to a 260 mm enclosed printer for $521. CGMagazine called it a reliable workhorse once the kinks are ironed out (9/10); Car Play Life praised overnight prints and the camera but found it big, loud and the software rough. It lacks active chamber heating, so engineering filaments suit the K2 Pro better. For multicolour PLA and PETG, it is great value.',
      best_for: 'Intermediate makers printing multicolour PLA and PETG',
      pros: [
        'Four-colour CFS included for $521',
        'Enclosed 260 mm cube CoreXY with built-in camera',
        'Reliable once configured (CGMagazine 9/10)',
        'Good overnight print results',
        'Expandable CFS like the bigger K2s',
      ],
      cons: [
        'Setup more fiddly than it should be',
        'No active chamber heating',
        'Fan noise and large footprint',
        'Rough edges in Creality Print software',
        'Not ideal as a first printer (DialingIn3D)',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '260 × 260 × 260 mm' },
        { label: 'Multicolour', value: 'CFS, 4 spools' },
        { label: 'Camera', value: 'Built-in' },
        { label: 'Price', value: 'K2 Combo $521 · K2 without CFS $419' },
      ],
      scores: { performance: 8.2, quality: 8.4, ease: 7.4, value: 9.0 },
      body: `## What is it?

The K2 is the entry model of Creality’s K2 family: an enclosed CoreXY printer with a 260 mm cube volume and a camera. The Combo adds the four-colour CFS.

On 31 October 2026 Creality’s store sells the K2 Combo for **$521** and the K2 without CFS for **$419**.

## Reviews

- **CGMagazine** (April 2026, 9/10) found setup more fiddly than it needed to be, but called it a reliable mid-range workhorse once configured.
- **Car Play Life** (September 2026) praised overnight print results and the built-in camera, but flagged size, weight, placement needs, fan noise and rough edges in Creality Print.
- **DialingIn3D** positions it as the value pick below the K2 Pro: unless you need prints over 260 mm or active chamber heating for engineering filaments, the K2 Combo is the stronger value. It suits intermediate makers rather than first-time buyers.

## Who should not buy it

- Anyone printing ABS, ASA or nylon regularly: the K2 Pro’s heated chamber helps.
- Complete beginners who want the smoothest setup.

## vs rivals

- **vs ELEGOO Centauri Carbon 2 Combo ($449):** similar enclosed four-colour concept, a little cheaper, 256 mm cube. See [K2 Combo vs Centauri Carbon 2](/en/compare/creality-k2-combo-vs-elegoo-centauri-carbon-2-combo/).
- **vs K2 Pro Combo ($799):** 300 mm and active chamber heating.

## Final thoughts

The K2 Combo is a good-value enclosed multicolour printer. Give it an afternoon of setup and it should run reliably.

## Sources

- [CGMagazine: Creality K2 Combo review](https://www.cgmagonline.com/review/hardware/creality-k2-combo-3d-printer/) (9/10)
- [Car Play Life: Creality K2 Combo review](https://www.carplaylife.com/review/creality-k2-combo-review/)
- [DialingIn3D: Creality K2 Combo review](https://dialingin3d.com/creality-k2-combo-review/)
- [Creality official store: K2 / K2 Combo](https://store.creality.com/products/k2-combo-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-ender-3-v3-se',
      name: 'Creality Ender-3 V3 SE',
      brand: 'Creality',
      model: 'Ender-3 V3 SE',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#546e7a',
      released: 2023,
      price_usd: 179,
      image_url: cdn('Ender-3_V3_SE_03_d34494e6-bda2-4c37-831d-43310eee5762.png?v=1762200692'),
      gallery: [cdn('97447c05d567d0ca5636e83bda0f5b11.png?v=1739004169'), cdn('dd9334ad08af2cda2a3f7fb3fb0191f3_7c45b380-abbc-41a3-be04-3431628cc07d.jpg?v=1739004169')],
      affiliate_url: creality('ender-3-v3-se-3d-printer'),
      affiliate_label: LABEL,
      title: 'Creality Ender-3 V3 SE review: the $179 beginner printer that still makes sense',
      summary: 'A budget bed-slinger with direct drive, auto-levelling and up to 250 mm/s, $179. Printed a Benchy in 37 minutes; heats slowly and has no runout sensor.',
      verdict: 'The Ender-3 V3 SE is the cheapest printer we would recommend to a beginner. Tom’s Hardware called it a beginner’s dream; How To Mechatronics printed a Benchy in 37 minutes at 250 mm/s with decent quality and 1 h 10 min at 60 mm/s with great quality. It heats slowly, has no filament runout sensor and uses more plastic parts. At $179, it is outstanding value.',
      best_for: 'First-time 3D printer buyers on a tight budget',
      pros: [
        '$179 on Creality’s official store',
        'Direct-drive Sprite extruder and auto bed levelling (16-point mesh)',
        'Up to 250 mm/s: Benchy in 37 minutes',
        'Arrives almost fully assembled',
        'PC-coated spring steel bed',
      ],
      cons: [
        'Slow heating',
        'No filament runout sensor',
        'Quality drops above about 180 mm/s; visible Z seam',
        'More plastic parts than earlier Enders; wobbly spool holder',
        'Bed arrived loose in one test (four bolts to tighten)',
      ],
      specs: [
        { label: 'Type', value: 'Bed-slinger FDM' },
        { label: 'Build volume', value: '220 × 220 × 250 mm' },
        { label: 'Speed', value: 'Up to 250 mm/s' },
        { label: 'Extruder', value: 'Direct-drive Sprite, hotend up to 260°C' },
        { label: 'Levelling', value: 'CR Touch auto levelling, 16-point mesh' },
        { label: 'Price', value: '$179 (list $199)' },
      ],
      scores: { performance: 7.4, quality: 7.8, ease: 8.4, value: 9.4 },
      body: `## What is it?

The Ender-3 V3 SE is Creality’s budget open printer. It keeps the classic Ender bed-slinger layout but adds a direct-drive extruder, automatic bed levelling and much higher speeds than older Enders.

It costs **$179** on Creality’s official store on 31 October 2026 (list $199).

## Tests

How To Mechatronics timed Benchy prints at different speeds:

| Speed | Time | Quality |
|---|---|---|
| 60 mm/s | 1 h 10 min | great |
| 120 mm/s | 50 min | great |
| 180 mm/s | 39 min | slight drop |
| 250 mm/s | 37 min | decent |

A calibration cube showed about 0.1 mm difference between X and Y, and a woven basket printed in about 10 hours at 180 mm/s. The bed arrived loose and needed four bolts tightening. The Z seam was visible at every speed.

Tom’s Hardware called it a beginner’s dream that brings former luxury features to a very low price, while noting it isn’t a true speedster like the K1 series.

## Problems

- Slow heat-up and no filament runout sensor (How To Mechatronics).
- More plastic parts than typical Creality printers (Creality Experts); the stock spool holder wobbles.
- The micro-SD slot is awkward to reach.

## Who should not buy it

- Anyone who wants multicolour or enclosed printing.
- Anyone who values speed and polish over price: a Bambu Lab A1 mini is faster and easier.

## vs rivals

- **vs Bambu Lab A1 mini ($249):** smaller bed, much more polished and faster. See [Ender-3 V3 SE vs A1 mini](/en/compare/creality-ender-3-v3-se-vs-bambu-lab-a1-mini/).
- **vs ELEGOO Centauri 2 ($299):** CoreXY, bigger and faster for $120 more.

## Final thoughts

For $179, the Ender-3 V3 SE is a capable, forgiving first printer. Print at 120 mm/s for the best balance of speed and quality.

## Sources

- [How To Mechatronics: Ender-3 V3 SE review with test prints](https://howtomechatronics.com/tools/reviews/creality-ender-3-v3-se-review-with-test-prints-outstanding-value/)
- [Tom’s Hardware: Creality Ender 3 V3 SE review](https://www.tomshardware.com/reviews/creality-ender-3-v3-se)
- [TechRadar: Ender-3 V3 SE review](https://www.techradar.com/pro/creality-ender-3-v3-se-3d-printer-review)
- [Creality Experts: Ender 3 V3 SE review](https://www.crealityexperts.com/creality-ender-3-v3-se-review)
- [Creality official store: Ender-3 V3 SE](https://store.creality.com/products/ender-3-v3-se-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'creality-k2-plus-combo-vs-creality-k2-pro-combo',
      title: 'Creality K2 Plus Combo vs K2 Pro Combo: how big do you need?',
      products: ['creality-k2-plus-combo', 'creality-k2-pro-combo'],
      intro: 'Two enclosed, heated-chamber K2s with the four-colour CFS. The Plus prints 350 mm cubes; the Pro 300 mm, for $400 less.',
      verdict: 'Choose the K2 Pro Combo ($799) for most work: quieter, very reliable in testing and cheaper. Choose the K2 Plus Combo ($1,199) only if you need 350 mm prints, and be ready for some CFS troubleshooting.',
      updated_at: DATE,
    },
    {
      slug: 'creality-k2-combo-vs-elegoo-centauri-carbon-2-combo',
      title: 'Creality K2 Combo vs ELEGOO Centauri Carbon 2 Combo',
      products: ['creality-k2-combo', 'elegoo-centauri-carbon-2-combo'],
      intro: 'Two enclosed four-colour CoreXY printers around $500 with similar build volumes.',
      verdict: 'The Centauri Carbon 2 Combo ($449) is cheaper, with a 350°C hotend and no failed prints in 3DWithUs’s test. The K2 Combo ($521) can grow to 16 colours with more CFS units. Pick ELEGOO for value, Creality for expandability.',
      updated_at: DATE,
    },
    {
      slug: 'creality-ender-3-v3-se-vs-bambu-lab-a1-mini',
      title: 'Creality Ender-3 V3 SE vs Bambu Lab A1 mini: best cheap first printer',
      products: ['creality-ender-3-v3-se', 'bambu-lab-a1-mini'],
      intro: 'Two popular budget printers for beginners.',
      verdict: 'Buy the Ender-3 V3 SE ($179) for the lowest price and a larger 220 mm bed. Buy the Bambu Lab A1 mini ($249) for a smoother, faster, more polished experience and an easy path to multicolour.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-multicolor-3d-printers',
      title: 'The best multicolour 3D printers',
      category: '3d-printers',
      intro: 'Printers that switch between four or more filaments automatically, compared using independent tests and official prices on 31 October 2026.',
      items: [
        { slug: 'elegoo-centauri-carbon-2-combo', award: 'Best value', note: 'Enclosed, four colours, $449.' },
        { slug: 'creality-k2-pro-combo', award: 'Best for engineering filaments', note: 'Heated chamber, quiet, 4.7 from 3DWithUs. $799.' },
        { slug: 'creality-k2-plus-combo', award: 'Biggest build volume', note: '350 mm cube, up to 16 colours. $1,199.' },
        { slug: 'creality-k2-combo', award: 'Best expandable budget pick', note: '260 mm, CFS grows to 16 colours. $521.' },
        { slug: 'elegoo-centauri-2', award: 'Cheapest CoreXY', note: '$299, or $379 with four colours.' },
        { slug: 'anycubic-kobra-3-combo', award: 'Best bed-slinger multicolour', note: 'Four colours on an open frame.' },
      ],
      updated_at: DATE,
    },
  ],
};
