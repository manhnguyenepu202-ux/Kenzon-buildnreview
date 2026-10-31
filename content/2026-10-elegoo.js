// ELEGOO batch: Centauri Carbon 2, Centauri 2, Saturn 4 Ultra 16K, Mars 5 Ultra. Researched 31 October 2026.
// Prices and images: official store (elegoo.com/products.json), 31 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
// Neptune 4 Pro is already on the site (elegoo-neptune-4-pro).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const elegoo = (handle) => awin(61127, `https://www.elegoo.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0296/9026/5648/files/${file}`;
const DATE = '2026-11-01 01:30:00';
const LABEL = 'Check price at ELEGOO';

export default {
  products: [
    {
      slug: 'elegoo-centauri-carbon-2-combo',
      name: 'ELEGOO Centauri Carbon 2 Combo',
      brand: 'ELEGOO',
      model: 'Centauri Carbon 2',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#424242',
      released: 2026,
      price_usd: 449,
      featured: true,
      image_url: cdn('CC2C-_-260811.jpg?v=1786594709'),
      gallery: [cdn('2.CC2C_14343a32-ac78-462b-b591-86ef465122ed.jpg?v=1772439271'), cdn('CC2-_-260811.jpg?v=1786594529')],
      affiliate_url: elegoo('centauri-carbon-2-combo'),
      affiliate_label: LABEL,
      title: 'ELEGOO Centauri Carbon 2 Combo review: enclosed four-colour CoreXY for $449',
      summary: 'An enclosed CoreXY printer with a 350°C hotend and four-colour CANVAS system, $449 ($399 single-colour). Reviewers rate print quality close to Bambu; purge waste is high.',
      verdict: 'The Centauri Carbon 2 Combo is one of the cheapest ways into enclosed, four-colour CoreXY printing. 3DWithUs scored it 4.4 with no failed prints, Creative Bloq gave 4.5/5, and Hackster compared print quality to Bambu Lab. Multicolour prints waste a lot of filament in purges, assembly takes more work than pricier rivals, and original owners can’t upgrade. At $449 it is excellent value.',
      best_for: 'Makers who want enclosed multicolour printing on a budget',
      pros: [
        'Four-colour CANVAS system included for $449',
        'Enclosed CoreXY with 350°C hotend and 110°C bed',
        'No failed prints in 3DWithUs’s tests; quality compared to Bambu Lab',
        '256 mm cube build volume, up to 500 mm/s',
        'Dual-sided PEI plate',
      ],
      cons: [
        'Purge waste almost equal to the model on frequent colour changes',
        'More assembly work than pricier rivals (VoxelMatters)',
        'Weak internal light',
        'Takes a lot of space with the CANVAS unit',
        'No upgrade path for original Centauri Carbon owners',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '256 × 256 × 256 mm' },
        { label: 'Speed', value: 'Up to 500 mm/s, 20,000 mm/s²' },
        { label: 'Temperatures', value: 'Hotend 350°C, bed 110°C' },
        { label: 'Multicolour', value: 'CANVAS, 4 filaments' },
        { label: 'Price', value: 'Combo $449 · single-colour $399' },
      ],
      scores: { performance: 8.6, quality: 8.6, ease: 8.0, value: 9.2 },
      body: `## What is it?

The Centauri Carbon 2 is ELEGOO’s second enclosed CoreXY printer. The Combo version adds the CANVAS system, which feeds up to four filaments for multicolour prints. It has a 350°C hotend, a 110°C bed and a 256 mm cube build volume.

On 31 October 2026 the official store sells the Combo for **$449** and the single-colour Centauri Carbon 2 for **$399**.

## Tests

3DWithUs (published February 2026, updated September 2026, score 4.4) printed:

- A multicolour Benchy in about 2 hours, a two-colour name tag in about an hour, and keyrings at 0.08 mm layers.
- A multicolour Gengar about 5 inches tall in about 14 hours. The purge waste was almost as much as the model.
- A HueForge picture covering about 80% of the bed in about 6 hours.

There were no print failures. Hackster called the print quality comparable to Bambu Lab’s CoreXY printers and said firmware problems from the original model seemed fixed. Creative Bloq scored it 4.5/5 for build and quality.

## Problems

- **Purge waste**: every colour change flushes filament, so prints with many changes waste a lot.
- **Assembly**: VoxelMatters found it took more work than pricier Chinese rivals.
- **Light and space**: the internal light is dim, and the CANVAS unit needs room.
- **Upgrade path**: Tom’s Hardware notes owners of the original Centauri Carbon hoped for a modular add-on; this is a new printer instead.

## Who should not buy it

- Anyone who only prints in one colour: the $399 base model or the $299 Centauri 2 is enough.
- Anyone who wants the most polished software ecosystem: Bambu Lab still leads.

## vs rivals

- **vs Bambu Lab P1S ($699):** more polished ecosystem; needs an AMS for multicolour. See [Centauri Carbon 2 vs P1S](/en/compare/elegoo-centauri-carbon-2-combo-vs-bambu-lab-p1s/).
- **vs Creality K2 Combo ($521):** similar concept, 260 mm cube.
- **vs ELEGOO Centauri 2 Combo ($379):** open-frame, no camera or enclosure.

## Final thoughts

The Centauri Carbon 2 Combo makes enclosed multicolour printing affordable without big compromises on quality.

## Sources

- [3DWithUs: Centauri Carbon 2 Combo review](https://3dwithus.com/elegoo-centauri-carbon-2-combo-3d-printer-review) (4.4)
- [Creative Bloq: Centauri Carbon 2 review](https://www.creativebloq.com/3d/3d-printing/i-tested-the-elegoo-centauri-carbon-2-and-now-i-want-to-print-everything-in-multicolour-glory) (4.5/5)
- [Hackster.io: Centauri Carbon 2 review](https://www.hackster.io/news/the-maker-s-toolbox-elegoo-centauri-carbon-2-3d-printer-review-99788f603c96)
- [VoxelMatters: Centauri Carbon 2 Combo review](https://www.voxelmatters.com/elegoo-centauri-carbon-2-combo-review-ultra-accessible-multicolor-printing/)
- [Tom’s Hardware: Centauri Carbon 2 review](https://www.tomshardware.com/3d-printing/elegoo-centauri-carbon-2-review)
- [ELEGOO official store: Centauri Carbon 2 Combo](https://www.elegoo.com/products/centauri-carbon-2-combo) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'elegoo-centauri-2',
      name: 'ELEGOO Centauri 2',
      brand: 'ELEGOO',
      model: 'Centauri 2',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#616161',
      released: 2026,
      price_usd: 299,
      image_url: cdn('C2-_-260811.jpg?v=1786595807'),
      gallery: [cdn('C2-1-model_1_4e92e558-780d-4445-b9ce-51f618c8313d.jpg?v=1782718171'), cdn('C2C-_-260811.jpg?v=1786595696')],
      affiliate_url: elegoo('centauri-2'),
      affiliate_label: LABEL,
      title: 'ELEGOO Centauri 2 review: a $299 CoreXY with flawless prints and a noisy PSU',
      summary: 'An open CoreXY printer with 350°C hotend and 256 mm cube volume, $299 ($379 Combo with four-colour CANVAS). How-To Geek scored it 9/10; it is louder than pricier printers.',
      verdict: 'The Centauri 2 strips the Centauri Carbon 2 down to the essentials and keeps the print quality: How-To Geek got basically flawless prints with no tuning and scored it 9/10. It is noisier than pricier printers (the power supply whines at idle), has no camera or enclosure, and its runout sensor wastes filament. At $299 it is one of the best budget CoreXY printers.',
      best_for: 'Budget buyers who want fast, high-quality PLA and PETG prints',
      pros: [
        'Basically flawless prints with no tuning (How-To Geek)',
        'CoreXY speed up to 500 mm/s, 350°C hotend, 110°C bed',
        '256 mm cube build volume',
        'Factory anti-vibration feet reduce ringing',
        'Optional four-colour Combo for $379',
      ],
      cons: [
        'Noisy motors, belts and power supply (idle whine)',
        'No camera, enclosure, lights or ventilation',
        'Runout sensor at the end of the Bowden tube wastes more filament',
        'Hard-to-remove promotional sticker',
        'Not suited to ABS/ASA without an enclosure',
      ],
      specs: [
        { label: 'Type', value: 'Open CoreXY FDM' },
        { label: 'Build volume', value: '256 × 256 × 256 mm' },
        { label: 'Speed', value: 'Up to 500 mm/s' },
        { label: 'Temperatures', value: 'Hotend 350°C, bed 110°C' },
        { label: 'Size and weight', value: '398 × 404 × 490 mm, 13.7 kg' },
        { label: 'Price', value: '$299 · Combo (4-colour CANVAS) $379' },
      ],
      scores: { performance: 8.4, quality: 8.8, ease: 8.2, value: 9.4 },
      body: `## What is it?

The Centauri 2 is a cheaper, open version of the [Centauri Carbon 2](/en/review/elegoo-centauri-carbon-2-combo/). It keeps the CoreXY motion, 350°C hotend and 256 mm cube volume, but drops the enclosure, camera, lights and ventilation.

It costs **$299** on the official store, or **$379** for the Combo with the four-colour CANVAS system.

## Tests

How-To Geek (August 2026, 9/10) printed with ELEGOO Slicer’s default settings:

- Every print came off basically flawless, including thin parts and a support-heavy Batman pen holder that released cleanly with no tuning.
- The factory vibration-dampening feet reduced ringing artefacts.

The downside was noise. Belts, motors and especially the power supply were louder than pricier printers; the PSU whined at idle enough that the reviewer moved the printer and switched it off between jobs.

## What you give up

Tom’s Hardware, reviewing the Combo, asks whether losing the camera, lights, enclosure and ventilation is worth saving $60 over the Carbon 2. The runout sensor sits at the far end of the Bowden tube, so more filament is left unused when a spool runs out.

## Who should not buy it

- Anyone printing ABS, ASA or nylon: get an enclosed printer.
- Anyone who prints in a bedroom or office.

## vs rivals

- **vs Bambu Lab A1:** quieter and more polished, but a bed-slinger design rather than CoreXY.
- **vs Creality Ender-3 V3 SE ($179):** much cheaper, much slower bed-slinger.
- **vs Centauri Carbon 2 ($399):** enclosure, camera and lights for $100 more. See [Centauri 2 vs Centauri Carbon 2](/en/compare/elegoo-centauri-2-vs-elegoo-centauri-carbon-2-combo/).

## Final thoughts

If you print PLA and PETG and don’t mind some noise, the Centauri 2 gives near-premium results for $299.

## Sources

- [How-To Geek: ELEGOO Centauri 2 review](https://www.howtogeek.com/elegoo-centauri-2-review/) (9/10, August 2026)
- [Tom’s Hardware: Centauri 2 Combo review](https://www.tomshardware.com/3d-printing/elegoo-centauri-2-combo-review)
- [ELEGOO official store: Centauri 2](https://www.elegoo.com/products/centauri-2) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'elegoo-saturn-4-ultra-16k',
      name: 'ELEGOO Saturn 4 Ultra 16K',
      brand: 'ELEGOO',
      model: 'Saturn 4 Ultra 16K',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#ef6c00',
      released: 2025,
      price_usd: 563,
      image_url: cdn('S4U16K-_01.jpg?v=1792580753'),
      gallery: [cdn('saturn-4-ultra-16k-left-side.jpg?v=1743670697'), cdn('04..png?v=1792580766')],
      affiliate_url: elegoo('saturn-4-ultra-16k-10inch-monochrome-lcd-resin-3d-printer'),
      affiliate_label: LABEL,
      title: 'ELEGOO Saturn 4 Ultra 16K review: a heated-vat resin printer that just works',
      summary: 'A 10-inch 16K resin printer with heated vat, tilt release and AI camera, $563. 3DWithUs had zero failures in a freezing studio (4.6); no air filter included.',
      verdict: 'The Saturn 4 Ultra 16K prints sharp miniatures and busts, but its real strength is reliability: 3DWithUs had zero failures with the studio at -3 to 4°C because the heated vat held resin at about 25°C. GamesRadar called its miniatures some of the best-looking it had seen; Creative Bloq gave 9/10. There is no air filtration and the 16K screen brings diminishing returns. A top pick for serious resin hobbyists.',
      best_for: 'Miniature painters and hobbyists who want reliable, detailed resin prints',
      pros: [
        'Heated vat kept resin at ~25°C in a freezing studio: zero failures',
        '16K (15,120 × 6,230) 10-inch screen, 14 × 19 µm pixels',
        'Tilt release and up to 150 mm/h',
        'Build volume 212 × 118 × 220 mm',
        'AI camera for timelapse and monitoring',
      ],
      cons: [
        'No air filtration included',
        'ELEGOO’s slicer lacked live monitoring in testing (worked in Chitubox)',
        '16K brings diminishing returns over 12K for many models',
        'Resin post-processing is still messy',
        'Pricier than the 12K version',
      ],
      specs: [
        { label: 'Type', value: 'MSLA resin' },
        { label: 'Screen', value: '10-inch 16K mono LCD (15,120 × 6,230), 14 × 19 µm' },
        { label: 'Build volume', value: '211.7 × 118.4 × 220 mm' },
        { label: 'Speed', value: 'Up to 150 mm/h' },
        { label: 'Features', value: 'Heated vat, tilt release, AI camera, 4-inch touchscreen' },
        { label: 'Price', value: '$563 · with air purifier $571 · with Mercury XS $618' },
      ],
      scores: { performance: 8.8, quality: 9.2, ease: 8.4, value: 8.4 },
      body: `## What is it?

The Saturn 4 Ultra 16K is ELEGOO’s flagship 10-inch resin printer. Its 16K monochrome screen has 14 × 19 µm pixels, and it adds a heated resin vat, a tilting release mechanism and an AI camera.

It costs **$563** on the official store on 31 October 2026. Bundles with an air purifier ($571) or the Mercury XS wash-and-cure station ($618) are also listed.

## Tests

3DWithUs (score 4.6) printed in a studio at **-3 to 4°C**. The heated vat held resin at about 25°C after a 5–25 minute preheat:

- A chess piece and a jackal miniature in about an hour each.
- A Blade bust (in two parts) in about 5.5 hours; a Deathwing bust in about 6 hours.
- A full plate of 12 parts.
- **Zero failures** from sliced files or resin temperature, using ELEGOO ABS-like Pro 3.0 resin at standard and fast speeds.

GamesRadar said it makes some of the best-looking miniatures it had seen; Creative Bloq scored it 9/10 with post-processing as the main drawback.

## Is 16K worth it?

JC Printfarm and Filamino both argue the heated vat and tilt release matter more than the jump from 12K to 16K, which gives diminishing returns depending on the model and viewing distance. If you don’t need the very finest detail, the Saturn 4 Ultra 12K costs less.

## Problems

- No air filtration in the base package; resin fumes need a purifier or ventilation.
- In ELEGOO’s SatelLite slicer, live monitoring didn’t work for 3DWithUs; it worked in Chitubox.

## Who should not buy it

- Beginners on a budget: the Mars 5 Ultra is cheaper and smaller.
- Anyone without a ventilated space for resin.

## vs rivals

- **vs ELEGOO Mars 5 Ultra (~$290):** smaller 7-inch 9K screen, no heated vat. See [Saturn 4 Ultra 16K vs Mars 5 Ultra](/en/compare/elegoo-saturn-4-ultra-16k-vs-elegoo-mars-5-ultra/).
- **vs Anycubic Photon Mono M7 Pro:** heated vat, similar size, usually cheaper.

## Final thoughts

The Saturn 4 Ultra 16K’s heated vat makes it one of the most reliable resin printers you can buy, and the detail is superb.

## Sources

- [3DWithUs: Saturn 4 Ultra 16K review](https://3dwithus.com/elegoo-saturn-4-ultra-16k-review-3d-printer-testing) (4.6)
- [GamesRadar: Saturn 4 Ultra 16K review](https://www.gamesradar.com/hardware/elegoo-saturn-4-ultra-16k-review/)
- [Creative Bloq: Saturn 4 Ultra 16K review](https://www.creativebloq.com/3d/3d-printing/ive-been-testing-3d-printers-for-over-a-decade-i-tried-the-elegoo-saturn-4-ultra-16k-and-its-truly-innovative) (9/10)
- [JC Printfarm: Saturn 4 Ultra 16K review](https://www.jcprintfarm.com/blogs/3d-printing-tech/elegoo-saturn-4-ultra-16k-review)
- [ELEGOO official store: Saturn 4 Ultra 16K](https://www.elegoo.com/products/saturn-4-ultra-16k-10inch-monochrome-lcd-resin-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'elegoo-mars-5-ultra',
      name: 'ELEGOO Mars 5 Ultra',
      brand: 'ELEGOO',
      model: 'Mars 5 Ultra',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#f57c00',
      released: 2024,
      price_usd: 293,
      image_url: cdn('f91c887f39b07095c6453b328b4b84cd_89b6a8ea-eb64-49b7-a161-96c53389bb6d.jpg?v=1748253800'),
      gallery: [cdn('Mars_5_Ultra_Resin_3D_Printer_5.jpg?v=1748253800'), cdn('Mars_5_Ultra_Resin_3D_Printer_6_9b4ae800-1dca-4416-ad39-1848b038682b.jpg?v=1748253800')],
      affiliate_url: elegoo('mars-5-ultra-9k-7inch-monochrome-lcd-resin-3d-printer'),
      affiliate_label: LABEL,
      title: 'ELEGOO Mars 5 Ultra review: the easy first resin printer for miniatures',
      summary: 'A 7-inch 9K resin printer with tilt release, self-levelling and an AI camera that pauses failed prints, about $293. Great for miniatures; no heated vat, so cold rooms cause failures.',
      verdict: 'The Mars 5 Ultra is one of the safest first resin printers: it levels itself, sets up in minutes and prints 18 µm detail for tabletop miniatures. DIY Machines saw its AI camera catch a warped support and pause the print. It has no heated vat, so cold rooms cause failures, and the lid isn’t hinged. For miniature painters starting out, it is an easy recommendation.',
      best_for: 'Beginners printing tabletop miniatures',
      pros: [
        '9K 7-inch screen with 18 µm XY detail',
        'Self-levelling; setup in under 2 minutes (3Druck)',
        'Tilt release, up to 150 mm/h',
        'AI camera caught a warped support and paused the print (DIY Machines)',
        'Tempered-glass screen protector included',
      ],
      cons: [
        'No heated vat: resin failures in cold rooms',
        'Small 153 × 78 × 165 mm build volume',
        'No hinged lid',
        'AI camera only sees prints taller than about 50 mm',
        'Price shown on ELEGOO’s store is a UK listing; US prices vary',
      ],
      specs: [
        { label: 'Type', value: 'MSLA resin' },
        { label: 'Screen', value: '7-inch 9K mono LCD (8,520 × 4,320), 18 µm' },
        { label: 'Build volume', value: '153.4 × 77.8 × 165 mm' },
        { label: 'Speed', value: 'Up to 150 mm/h' },
        { label: 'Features', value: 'Tilt release, self-levelling, AI camera, carbon filter' },
        { label: 'Weight', value: '8.8 kg' },
        { label: 'Price', value: 'About $293 (ELEGOO store listing)' },
      ],
      scores: { performance: 8.2, quality: 8.8, ease: 9.0, value: 8.6 },
      body: `## What is it?

The Mars 5 Ultra is ELEGOO’s compact resin printer for beginners and miniature makers. It has a 7-inch 9K screen with 18 µm pixels, a tilting release mechanism, self-levelling and an AI camera that watches for failures.

ELEGOO’s store lists it at **about $293** (list $366) on 31 October 2026; that listing is for the UK store, so US prices may differ. Tom’s Hardware reviewed it at $338, with sales around $270.

## Tests

- **DIY Machines** ran three consecutive prints of the included rook torture test in ELEGOO grey ABS-like resin, all successful. The first attempt failed only because the protective film was still on the screen. The AI camera spotted a warped support foot and paused the print; after resuming, the model was fine. The camera only sees prints taller than about 50 mm.
- **3Druck** found setup and calibration took under 2 minutes.
- **Tom’s Hardware** and **Sprues & Brews** recommend it for tabletop miniatures, praising anti-aliasing on small surfaces.

## Problems

- No heated vat. One reviewer found failures in colder weather were the biggest issue, and warming the room fixed them.
- The small build volume limits busts and large models.
- No hinged lid, and DIY Machines found Chitubox setup awkward.

## Who should not buy it

- Anyone printing large busts or in a cold garage: get the Saturn 4 Ultra 16K with its heated vat.

## vs rivals

- **vs Saturn 4 Ultra 16K ($563):** bigger, sharper, heated vat. See [Saturn 4 Ultra 16K vs Mars 5 Ultra](/en/compare/elegoo-saturn-4-ultra-16k-vs-elegoo-mars-5-ultra/).
- **vs Anycubic Photon Mono 4:** cheaper, without AI camera or tilt release.

## Final thoughts

The Mars 5 Ultra takes most of the fuss out of resin printing. Keep it in a warm room and it will turn out excellent miniatures.

## Sources

- [DIY Machines: ELEGOO Mars 5 Ultra review](https://www.diymachines.co.uk/elegoo-mars-5-ultra-resin-3d-printer-review)
- [3Druck: ELEGOO Mars 5 Ultra in review](https://3druck.com/en/reviews/elegoo-mars-5-ultra-test-51140796/)
- [Tom’s Hardware: ELEGOO Mars 5 Ultra review](https://www.tomshardware.com/3d-printing/elegoo-mars-5-ultra-review)
- [Sprues & Brews: Mars 5 Ultra review](https://spruesandbrews.com/2024/10/12/mars-5-ultra-review-the-best-resin-3d-printer-for-beginners/)
- [ELEGOO official store: Mars 5 Ultra](https://www.elegoo.com/products/mars-5-ultra-9k-7inch-monochrome-lcd-resin-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'elegoo-centauri-carbon-2-combo-vs-bambu-lab-p1s',
      title: 'ELEGOO Centauri Carbon 2 Combo vs Bambu Lab P1S',
      products: ['elegoo-centauri-carbon-2-combo', 'bambu-lab-p1s'],
      intro: 'Two enclosed CoreXY printers. The Centauri Carbon 2 Combo includes four-colour CANVAS for $449; the P1S has the more mature Bambu ecosystem.',
      verdict: 'Choose the Centauri Carbon 2 Combo for multicolour on a budget and a hotter 350°C nozzle. Choose the Bambu Lab P1S for the most polished software, cloud and accessory ecosystem, and add an AMS later if you need colour.',
      updated_at: DATE,
    },
    {
      slug: 'elegoo-centauri-2-vs-elegoo-centauri-carbon-2-combo',
      title: 'ELEGOO Centauri 2 vs Centauri Carbon 2: is the enclosure worth it?',
      products: ['elegoo-centauri-2', 'elegoo-centauri-carbon-2-combo'],
      intro: 'Same CoreXY core, 256 mm cube and 350°C hotend. The Carbon 2 adds an enclosure, camera, lights and ventilation.',
      verdict: 'Buy the Centauri 2 ($299) for PLA and PETG on the tightest budget. Buy the Centauri Carbon 2 ($399, or $449 Combo) for ABS/ASA, quieter operation inside an enclosure and remote monitoring.',
      updated_at: DATE,
    },
    {
      slug: 'elegoo-saturn-4-ultra-16k-vs-elegoo-mars-5-ultra',
      title: 'ELEGOO Saturn 4 Ultra 16K vs Mars 5 Ultra: which resin printer?',
      products: ['elegoo-saturn-4-ultra-16k', 'elegoo-mars-5-ultra'],
      intro: 'ELEGOO’s two most popular resin printers: a 10-inch 16K flagship and a 7-inch 9K beginner machine.',
      verdict: 'Pick the Mars 5 Ultra (~$293) for miniatures on a budget in a warm room. Pick the Saturn 4 Ultra 16K ($563) for bigger prints, the finest detail and a heated vat that keeps prints reliable in cold rooms.',
      updated_at: DATE,
    },
  ],

  guides: [],
};
