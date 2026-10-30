// Revopoint batch 2: POP 4, MetroY Pro, MINI 2. Researched October 2026.
// Prices and images: official store (global.revopoint3d.com), 30 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const revopoint = (handle) => awin(73435, `https://global.revopoint3d.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0538/9533/2027/files/${file}`;
const DATE = '2026-10-30 20:00:00';

export default {
  products: [
    {
      slug: 'revopoint-pop-4',
      name: 'Revopoint POP 4',
      brand: 'Revopoint',
      model: 'POP 4',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#00796b',
      released: 2026,
      price_usd: 755,
      featured: true,
      image_url: cdn('POP43DScanner-EN_d15ac40b-5eb8-415f-991d-015e66a51fb9.jpg?v=1792655887'),
      gallery: [
        cdn('b58ce7b99582c961375527c3c6b27ebb_785c50d1-7177-41f8-8283-0388aba91952.png?v=1780653570'),
        cdn('5_d42c3efd-7d66-4a9f-9ea9-4d483d477205.png?v=1780653570'),
        cdn('1_4f5d7358-8fb5-41ef-a35c-54f5d7520fa4.png?v=1782108939'),
      ],
      affiliate_url: revopoint('pop4-wireless-hybrid-3d-scanner'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint POP 4 review: blue laser and infrared in one $755 scanner',
      summary: 'Revopoint’s newest POP combines 30 blue laser lines, a deep-hole single line and infrared structured light, works wirelessly for up to 4 hours and copes with sunlight. Versatile, with a learning curve.',
      verdict: 'The POP 4 is the most versatile scanner under $1,000 we have covered: blue lasers for dark and detailed parts, infrared for bodies and big objects, a single line for deep holes, and a battery grip for wireless scanning. 3DWithUs scored it 4.5/5. Choosing the right mode takes practice, and tiny thin parts are still hard, but for most makers it is now the Revopoint to buy.',
      best_for: 'Makers who scan everything from feet to small mechanical parts',
      pros: [
        'Hybrid: 30 crossed blue laser lines, single deep-hole line, infrared and VCSEL modes',
        'Single-frame accuracy up to 0.03 mm in laser mode',
        'Up to 105 fps in multi-line laser mode',
        'Wireless for up to 4 hours with the 5,500 mAh battery grip',
        'Rated for outdoor use in direct light up to 100,000 lux',
      ],
      cons: [
        'Learning curve: you choose a mode before every scan',
        'Tiny, thin parts (like propeller blade edges) stay rough',
        'Dark or shiny surfaces can still need spray',
        'Mesh cleanup takes time; reverse engineering still needs CAD',
      ],
      specs: [
        { label: 'Technology', value: 'Blue laser (30 cross lines + single line) and near-infrared structured light' },
        { label: 'Modes', value: 'Full-Field HD, VCSEL Rapid, Hybrid HD, 30-line laser, single-line deep hole, 3DGS' },
        { label: 'Accuracy', value: 'Single-frame up to 0.03 mm; volumetric 0.03 mm + 0.05 mm × L(m)' },
        { label: 'Point distance', value: 'Up to 0.05 mm' },
        { label: 'Speed', value: 'Up to 105 fps (multi-line laser)' },
        { label: 'Working distance', value: '200–400 mm in blue laser modes' },
        { label: 'Wireless', value: 'Up to 4 h with 5,500 mAh battery grip' },
        { label: 'Software', value: 'Revo Scan 6' },
        { label: 'Price', value: 'Standard $755 · Premium $872' },
      ],
      scores: { performance: 8.7, quality: 8.5, ease: 7.8, value: 8.9 },
      body: `## What is it?

The POP series has always been Revopoint’s affordable all-rounder. The POP 4 is the biggest jump yet: instead of infrared only, it combines **30 crossed blue laser lines**, a **single blue line for deep holes**, and **infrared structured light** for bodies and larger objects. A battery grip makes it wireless for up to four hours.

The Standard Edition costs **$755** and the Premium Edition **$872** on the official store at the time of writing.

## Technical overview

- **Accuracy:** up to 0.03 mm single-frame in laser mode; volumetric 0.03 mm + 0.05 mm per metre.
- **Speed:** up to 105 fps in multi-line laser mode.
- **Working distance:** 200–400 mm in blue laser modes, wider in infrared modes.
- **Outdoors:** rated for direct light up to 100,000 lux.
- **Software:** Revo Scan 6, with a mode picker before each scan and AI object segmentation. Scans from different modes can be aligned afterwards.
- **Extras:** 3D Gaussian Splatting (.splat) export for photoreal captures.

## Real-world scanning

3DWithUs published the most detailed test (May 2026, updated October 2026):

- **A bare foot, handheld and wireless:** the top of the foot came out well; the sole was filled into a curved surface, so not a true replica. The reviewer printed it on a Snapmaker U1 and tried it as a shoe stretcher, with limited success.
- **A foot in a patterned sock** (Color Full-Field HD): the sock’s pattern and colours were captured well.
- **A broken RC boat propeller** (tiny, thin, black): single-line blue laser captured the black part unsprayed; a sprayed version was cleaner. Marker blocks helped tracking. The hub, centre hole and blade count were right, but the thin blade edges stayed rough, so the reviewer would use it as a reference, not a print-ready part.

## What testers complain about

- **Mode choice.** Powerful, but you need to learn which mode suits which object.
- **Tiny thin parts** remain very hard.
- **Spray** may still be needed on dark or shiny surfaces.
- **Cleanup and CAD.** For reverse engineering you still need calipers and CAD.

## POP 4 vs the rivals

- **vs EINSTAR Rockit ($1,519):** 3DWithUs calls the Rockit more capable, at twice the price. See [POP 4 vs Rockit](/en/compare/revopoint-pop-4-vs-einstar-rockit/).
- **vs Revopoint POP 3 Plus ($526):** the POP 3 Plus is infrared-only. The POP 4’s blue lasers and wireless grip are worth the extra for dark and mechanical parts.
- **vs Revopoint INSPIRE 2 ($439):** better for lightweight, simple jobs.
- **vs Creality Pika:** also blue laser plus infrared, in Creality’s ecosystem.

## Price and value

At $755 the POP 4 gives you most of what a $1,500 scanner does. The Premium Edition adds the accessories that make wireless and outdoor work practical.

## Final thoughts

The POP 4 is the new default recommendation in Revopoint’s range: one scanner for feet, figures, car parts and holes. Spend an evening learning the modes and it will cover almost everything a hobbyist scans.

## Sources

- [3DWithUs: Revopoint POP 4 review, hands-on scanning tests](https://3dwithus.com/revopoint-pop-4-review-hands-on-3d-scanning-tests)
- [Revopoint official store: POP 4](https://global.revopoint3d.com/products/pop4-wireless-hybrid-3d-scanner) (price and editions)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'revopoint-metroy-pro',
      name: 'Revopoint MetroY Pro',
      brand: 'Revopoint',
      model: 'MetroY Pro',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#004d40',
      released: 2025,
      price_usd: 1319,
      image_url: cdn('MetroYseries_568ad952-0c76-4892-839f-f44543508f3d.jpg?v=1792656027'),
      gallery: [
        cdn('MetroY-3_c4ee9b5d-e8d0-4abd-86a2-5b53dbd1b958.png?v=1775547272'),
      ],
      affiliate_url: revopoint('blue-laser-3d-scanner-metroy'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint MetroY Pro review: a blue-laser scanner for metal parts and reverse engineering',
      summary: 'Crossed, parallel and single blue laser lines plus full-field blue light, 0.02 mm accuracy and an auto turntable. Scanned shiny steel brackets without spray, but loves markers.',
      verdict: 'The MetroY Pro is Revopoint’s metrology-style scanner for small and medium parts. 3DPrinting.com scanned a slotted steel bracket without spray that its predecessor could not handle, and found it faster than the MetroX. It still wants markers, texture handling on merged scans is awkward, and it needs a strong PC. For reverse engineering mechanical parts, it is excellent value.',
      best_for: 'Reverse engineering metal and mechanical parts',
      pros: [
        '34 cross lines, 15 parallel lines, single line and 62-line full-field blue light',
        'Single-frame accuracy up to 0.02 mm; precision 0.01 mm',
        'Scanned a shiny, deep-slotted steel bracket without spray',
        'Noticeably faster than the MetroX in side-by-side scans',
        'Pro kit includes a dual-axis auto turntable and marker blocks',
      ],
      cons: [
        'Still needy about tracking markers',
        'Merged laser scans can’t be textured afterwards (except in Auto Turntable mode)',
        'Needs a strong PC: 32 GB RAM and RTX 3060 minimum on Windows',
        'Laser modes not suitable for scanning faces',
      ],
      specs: [
        { label: 'Technology', value: 'Blue laser: 34 cross, 15 parallel, 1 single line; 62-line full-field blue light' },
        { label: 'Accuracy', value: 'Single-frame 0.02 mm; precision 0.01 mm; volumetric 0.02 mm + 0.04 mm × L(m)' },
        { label: 'Speed', value: 'Laser up to 2 M points/s; structured light up to 7 M points/s' },
        { label: 'Working distance', value: '200–400 mm (capture area up to 332 × 276 mm)' },
        { label: 'Object size', value: '10 × 10 × 10 mm to 1 × 1 × 1 m' },
        { label: 'Connectivity', value: 'USB-C, Wi-Fi 6' },
        { label: 'Weight', value: '450 g' },
        { label: 'PC minimum', value: 'Windows: i7 13th gen / Ryzen 7 5800, 32 GB, RTX 3060 8 GB; Mac: M2 Pro, 16 GB' },
        { label: 'Price', value: 'MetroY $989 · MetroY Pro $1,319' },
      ],
      scores: { performance: 8.9, quality: 8.9, ease: 7.4, value: 8.6 },
      body: `## What is it?

The MetroY family is Revopoint’s answer to blue-laser scanners like the EINSTAR Rockit, aimed at reverse engineering and inspection rather than faces and figures. The **MetroY Pro** has every laser pattern Revopoint offers plus full-field blue structured light and an automatic turntable for colour scans.

The MetroY Pro costs **$1,319** and the standard MetroY **$989** on the official store at the time of writing. According to reviewers, both share the same accuracy and laser modes; the Pro adds structured light, colour capture and the turntable.

## Technical overview

- **Laser patterns:** 34 crossed blue lines, 15 parallel lines and a single line for deep slots.
- **Structured light:** 62-line full-field blue light.
- **Accuracy:** up to 0.02 mm single-frame, 0.01 mm precision, volumetric 0.02 mm + 0.04 mm per metre.
- **Speed:** up to 2 million points per second in laser mode, 7 million in structured light.
- **Capture area:** up to 332 × 276 mm at 400 mm.
- **Weight:** 450 g.

## Real-world scanning

3DPrinting.com tested it against objects it had scanned on the older MetroX:

- **Steel conveyor-roller bracket** (shiny, deep slots): on the MetroX it needed homemade powder and the slot bottoms still failed. The MetroY Pro scanned it **without spray**, using cross lines for the body and the single line inside the slots. Not quick, with many passes, but it worked.
- **Fire extinguisher** with marker stickers: faster than the MetroX, with a better result on the perforated nozzle plate.
- **Multi-pin plug** in auto turntable colour mode: quick, though the pin sockets were better suited to laser mode.
- **Spray bottle:** quick, with an occluded area under the nozzle.

The reviewer’s PC (Core i7 13th gen, RTX 4060, 64 GB RAM) “worked fine”, with very fast scanning.

## What testers complain about

- **Markers.** The reviewer warned it is still quite needy about tracking markers.
- **Textures on merged scans.** Laser scans that are merged can’t be textured afterwards, except in Auto Turntable mode. Revopoint recommends scanning geometry first and textures separately.
- **PC requirements.** 32 GB of RAM and an RTX 3060 minimum on Windows.

## MetroY Pro vs the rivals

- **vs EINSTAR Rockit ($1,519):** also blue laser, wireless with a battery. The Rockit adds infrared for big objects and people; the MetroY Pro has higher claimed accuracy and the auto turntable. See [MetroY Pro vs Rockit](/en/compare/revopoint-metroy-pro-vs-einstar-rockit/).
- **vs Revopoint POP 4 ($755):** more versatile and much cheaper, but lower claimed accuracy (0.03 mm) and fewer laser lines.
- **vs Revopoint MetroY ($989):** same accuracy and laser modes; skip the Pro if you don’t need colour or the turntable.

## Price and value

$1,319 for 0.02 mm blue-laser scanning with a turntable is very competitive. If you only scan geometry, the $989 MetroY saves money.

## Final thoughts

For reverse engineering brackets, housings and machined parts, the MetroY Pro is one of the best-value tools available. Budget for a strong PC and a pack of markers.

## Sources

- [3DPrinting.com: Hands-on review, Revopoint MetroY Pro](https://3dprinting.com/reviews/hands-on-review-revopoint-metroy-pro-3d-scanner/)
- [Revopoint official store: MetroY and MetroY Pro](https://global.revopoint3d.com/products/blue-laser-3d-scanner-metroy) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'revopoint-mini-2',
      name: 'Revopoint MINI 2',
      brand: 'Revopoint',
      model: 'MINI 2',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#26a69a',
      released: 2024,
      price_usd: 746,
      image_url: cdn('MINI23DScanner_215aa309-638f-4b24-b979-b9f4a675e004.jpg?v=1792656296'),
      gallery: [
        cdn('MINI2main1.jpg?v=1775547529'),
        cdn('3_99850d6a-b9a2-4261-83db-727ba2663c9b.jpg?v=1775547529'),
        cdn('2_27c654f3-6f9a-460b-bd17-e0cf4d23fbc8.jpg?v=1775547529'),
      ],
      affiliate_url: revopoint('industry-3d-scanner-mini'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint MINI 2 review: the small-object specialist',
      summary: 'A 175 g blue-light scanner with 0.02 mm precision for coins, jewellery, figurines and small parts. Superb geometry on small things; poor colour and no use for large objects.',
      verdict: 'The MINI 2 does one thing brilliantly: detailed geometry of small objects. 3DSourced’s scans of a bust, a resin figure and a marble-run piece printed out almost identical to the originals, and it scored 4.5/5. Colour is weak, it is indoor-only and it is not meant for anything bigger than about 30 cm. For jewellery, miniatures and small parts, it is the most detailed scanner here under $800.',
      best_for: 'Jewellery, miniatures, coins and small mechanical parts',
      pros: [
        'Blue structured light: 0.02 mm precision, 0.02 mm point distance',
        'Scans objects as small as 10 × 10 × 10 mm',
        'Test prints of scanned figures and parts were almost identical',
        'Setup in about 10 minutes; generous kit with turntable and case',
        'Light (175 g) with USB-C and Wi-Fi 6',
      ],
      cons: [
        'Poor colour capture; a Lego figure scan was described as disappointing',
        'Indoor only; not recommended for scanning people',
        'Built for small objects: about 30 cm is the practical limit',
        'Dark and reflective surfaces need spray',
      ],
      specs: [
        { label: 'Technology', value: 'Dual-camera blue structured light, Class 1' },
        { label: 'Accuracy', value: 'Single-frame precision 0.02 mm; accuracy 0.05 mm' },
        { label: 'Point distance', value: 'Up to 0.02 mm' },
        { label: 'Speed', value: 'Up to 16 fps' },
        { label: 'Working distance', value: '120–250 mm (capture area 52 × 64 mm at 120 mm)' },
        { label: 'Object size', value: 'From 10 × 10 × 10 mm, up to about 30 cm' },
        { label: 'Connectivity', value: 'USB-C, Wi-Fi 6 (phone needs a power bank)' },
        { label: 'Weight', value: '175 g' },
        { label: 'Price', value: 'Standard $746 · Advanced $836' },
      ],
      scores: { performance: 7.8, quality: 9.0, ease: 8.3, value: 8.2 },
      body: `## What is it?

Most handheld scanners are generalists. The **MINI 2** is a specialist: blue structured light with a very short working distance (120–250 mm), tuned for detail on objects from a 1 cm cube up to about 30 cm. Think rings, coins, keys, fossils, miniatures and small machined parts.

The Standard Edition costs **$746** and the Advanced Edition **$836** on the official store at the time of writing.

## Technical overview

- **Precision:** up to 0.02 mm single-frame; accuracy up to 0.05 mm.
- **Point distance:** up to 0.02 mm, finer than most scanners here.
- **Speed:** up to 16 fps.
- **Size:** 132 × 53 × 36 mm, 175 g.
- **Indoor only:** blue structured light is not designed for sunlight, and the flashing light makes it unsuitable for scanning people.

## Setup

3DSourced had it running in no more than 10 minutes, with a spin-and-flip calibration. The kit includes a mini turntable, calibration board, marker topper and mat, tripod phone holder and a hard-shell case.

## Real-world scanning

3DSourced (March 2024):

- **Agrippa bust** (included): hair and eyes captured; the printed copy was pretty similar to the original.
- **Resin figure:** two merged scans gave a faithful recreation, with slightly less detail than the original.
- **Marble-run track piece:** almost identical; the slicer had no trouble.
- **Lego figure in colour:** disappointing, with major alignment issues and poor colour.

3DVF (in a Revopoint-sponsored article) scanned a seashell, a fossil, a key, a dental mould and a coin under 2.5 cm, and concluded the MINI 2 excels at geometry, not high-resolution textures.

Processing in Revo Scan was mostly done in under two minutes, though load times were long.

## Tips from testers

- Spray dark or reflective surfaces.
- Use Single Shot mode for tiny parts.
- Put modelling clay around symmetrical objects to help tracking.
- Use the marker topper and mat for featureless parts.

## MINI 2 vs the rivals

- **vs Seal ($649):** also blue light for small objects, cheaper, with a measured 0.02 mm deviation in one test. The MINI 2 has a finer point distance and a more mature software ecosystem. See [MINI 2 vs Seal](/en/compare/revopoint-mini-2-vs-nova3d-seal-3d-scanner/).
- **vs Revopoint POP 4 ($755):** far more versatile for larger objects, but less detail on tiny things.
- **vs Revopoint MIRACO ($1,349):** for people and big objects, as 3DSourced and 3DVF both suggest.

## Price and value

At $746 it is not cheap for a scanner limited to small objects, but nothing else in this guide resolves fine detail as well at the price.

## Final thoughts

If most of what you scan fits in your hand, the MINI 2 is the right tool. If not, buy a POP 4 instead.

## Sources

- [3DSourced: Revopoint MINI 2 review](https://www.3dsourced.com/3d-scanner-reviews/revopoint-mini-2-review/)
- [3DVF: what the Revopoint MINI 2 is capable of (sponsored by Revopoint)](https://3dvf.com/en/revopoint-mini-2-heres-what-this-new-high-precision-3d-scanner-is-capable-of)
- [Revopoint official store: MINI 2](https://global.revopoint3d.com/products/industry-3d-scanner-mini) (price and editions)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'revopoint-pop-4-vs-einstar-rockit',
      title: 'Revopoint POP 4 vs EINSTAR Rockit: best hybrid blue-laser scanner',
      products: ['revopoint-pop-4', 'einstar-rockit'],
      intro: 'Both combine blue lasers with infrared and run wirelessly on a battery. The Rockit costs about twice as much as the POP 4.',
      verdict: 'Buy the POP 4 if you want one scanner for everything on a budget: it covers feet, figures and car parts and adds a deep-hole laser line. Buy the EINSTAR Rockit if you scan mechanical parts professionally and want the more capable tool, as 3DWithUs describes it, and you have a strong PC.',
      updated_at: DATE,
    },
    {
      slug: 'revopoint-metroy-pro-vs-einstar-rockit',
      title: 'Revopoint MetroY Pro vs EINSTAR Rockit: blue-laser scanners for reverse engineering',
      products: ['revopoint-metroy-pro', 'einstar-rockit'],
      intro: 'Two blue-laser scanners for mechanical parts at a similar price. The MetroY Pro focuses on accuracy and an auto turntable; the Rockit adds infrared and a swappable battery.',
      verdict: 'Choose the MetroY Pro for small to medium metal parts where accuracy matters: 0.02 mm claimed, and it scanned a shiny slotted bracket without spray. Choose the Rockit if you also scan large objects or people and want true wireless freedom.',
      updated_at: DATE,
    },
    {
      slug: 'revopoint-mini-2-vs-nova3d-seal-3d-scanner',
      title: 'Revopoint MINI 2 vs Seal: best blue-light scanner for small objects',
      products: ['revopoint-mini-2', 'nova3d-seal-3d-scanner'],
      intro: 'Both use blue structured light for detail on small objects. The Seal costs about $100 less.',
      verdict: 'Pick the MINI 2 for the finest detail (0.02 mm point distance) and Revopoint’s more mature software and accessories. Pick the Seal to save money: it measured 0.02 mm deviation on a test block and handles figurines and sculptures very well.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-3d-scanners-for-small-parts',
      title: 'The best 3D scanners for small parts and jewellery',
      category: '3d-scanners',
      intro: 'Scanners that resolve fine detail on objects you can hold in one hand, compared using independent tests and official specs. Prices are official store prices on 30 October 2026.',
      items: [
        { slug: 'revopoint-mini-2', award: 'Best for tiny objects', note: '0.02 mm point distance for coins, rings and miniatures.' },
        { slug: 'revopoint-metroy-pro', award: 'Best for metal parts', note: 'Blue lasers scanned shiny steel without spray.' },
        { slug: 'revopoint-pop-4', award: 'Best all-rounder', note: 'Blue laser plus infrared, wireless, from $755.' },
        { slug: 'nova3d-seal-3d-scanner', award: 'Best budget blue-light', note: '0.02 mm measured deviation for $649.' },
      ],
      updated_at: DATE,
    },
  ],
};
