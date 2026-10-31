// Anycubic batch: Kobra S1 Combo, Kobra X Combo, Kobra 4 Combo, Kobra S1 Max, Photon Mono 4, Photon Mono M7 Pro.
// Researched 1 November 2026. Prices and images: Anycubic US store (us.anycubic3d.com/products.json), 1 Nov 2026.
// Affiliate: Anycubic (US) Awin mid 129417. The global store program (mid 69360, store.anycubic.com) is noted in memory.
// Kobra 3 Combo is already on the site (anycubic-kobra-3-combo).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const anycubic = (handle) => awin(129417, `https://us.anycubic3d.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0983/5354/5535/files/${file}`;
const DATE = '2026-11-01 04:00:00';
const LABEL = 'Check price at Anycubic';

export default {
  products: [
    {
      slug: 'anycubic-kobra-s1-combo',
      name: 'Anycubic Kobra S1 Combo',
      brand: 'Anycubic',
      model: 'Kobra S1',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#1565c0',
      released: 2025,
      price_usd: 429,
      featured: true,
      image_url: cdn('641067c3a2b8d362d5b4797c26c75d92_8ad6a20d-b750-4776-917c-fdbc8fb96164.jpg?v=1791857951'),
      gallery: [cdn('1500x1500-_1_74381c14-1bfc-4242-a814-d3ac515bc611.jpg?v=1778571390'), cdn('1500x1500-_2_2d0fe16d-0c4c-425c-95d3-8aa4199a6c08.jpg?v=1778571360')],
      affiliate_url: anycubic('kobra-s1-combo'),
      affiliate_label: LABEL,
      title: 'Anycubic Kobra S1 Combo review: enclosed four-colour CoreXY now $429',
      summary: 'An enclosed CoreXY printer with a four-spool ACE filament dryer, now $429 with ACE 2 Pro. Reviewers rate print quality alongside Bambu; software hiccups and purge waste remain.',
      verdict: 'The Kobra S1 Combo is Anycubic’s answer to the Bambu P1S Combo. The Gadgeteer found it as good as any printer in its collection, and MakerHacks rated its single-colour quality among the best it had tested. Reviewers hit screen freezes and a cancelled print that kept going, purge waste is high, and owner sentiment on Reddit is mixed on reliability. At $429 with the newer ACE 2 Pro, it is exceptional value.',
      best_for: 'Makers who want enclosed multicolour printing for the lowest price',
      pros: [
        'Print quality reviewers compare to Bambu Lab',
        'Enclosed CoreXY with four-spool ACE unit that also dries filament',
        'Now $429 with ACE 2 Pro (reviewed at $699 with ACE Pro)',
        'Expandable to 8 colours with a second ACE',
        'Metal internal frame, plastic shell',
      ],
      cons: [
        'Software hiccups: screen freezes, a cancelled print that carried on (MakerHacks)',
        'High purge waste on multicolour prints',
        'Plastic-heavy enclosure feels less premium',
        'Mixed owner sentiment on reliability (Reddit aggregate 2.9/5)',
        'Reviews tested the original ACE Pro; current combo ships with ACE 2 Pro',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '250 × 250 × 250 mm' },
        { label: 'Multicolour', value: 'ACE 2 Pro, 4 spools with drying; up to 8 with two units' },
        { label: 'Price', value: '$429 with ACE 2 Pro (list $599)' },
      ],
      scores: { performance: 8.6, quality: 8.8, ease: 7.6, value: 9.2 },
      body: `## What is it?

The Kobra S1 is Anycubic’s enclosed CoreXY printer. The Combo pairs it with the ACE (Anycubic Colour Engine), which holds four spools, feeds them automatically and dries filament while it prints.

On 1 November 2026 the US store sells the Kobra S1 with the newer **ACE 2 Pro for $429** (list $599). Reviewers tested it at launch with the original ACE Pro, when the four-colour bundle was $699.

## What reviewers found

- **The Gadgeteer** found prints as good as any printer in its collection, including Bambu Lab machines.
- **MakerHacks** rated single-colour print quality among the highest of any machine it had tested. It saw software hiccups: screen freezes and a cancelled print that kept going. Purging with the ACE generated a lot of waste.
- **3Dnatives** and **bgeek** praised the value; build quality impressions vary, with a metal internal frame but a plastic outer shell.
- A Reddit-based aggregate scores owner sentiment at 2.9/5 from 310 ratings: people like value and print quality but complain about reliability. Treat that as user mood, not a test.

## Who should not buy it

- Anyone who wants the smoothest software: Bambu Lab is still ahead.
- Anyone printing mostly single colours who doesn’t need an enclosure: the Kobra 4 is cheaper.

## vs rivals

- **vs Bambu Lab P1S ($699):** more polished ecosystem, higher price. See [Kobra S1 Combo vs P1S](/en/compare/anycubic-kobra-s1-combo-vs-bambu-lab-p1s/).
- **vs ELEGOO Centauri Carbon 2 Combo ($449):** similar price and concept, 350°C hotend.
- **vs Kobra S1 Max:** 350 mm cube and heated chamber for much more money.

## Final thoughts

At $429, the Kobra S1 Combo is one of the cheapest enclosed multicolour CoreXY printers you can buy. Keep firmware updated and expect some purge waste.

## Sources

- [The Gadgeteer: Anycubic Kobra S1 Combo review](https://the-gadgeteer.com/2025/07/16/anycubic-kobra-s1-3d-printer-combo-review-punching-above-its-price-point/)
- [MakerHacks: Anycubic Kobra S1 Combo review](https://www.makerhacks.com/anycubic-kobra-s1-combo-review/)
- [3Dnatives: testing the Kobra S1 Combo](https://www.3dnatives.com/en/test-of-the-anycubic-kobra-s1-combo-060520254/)
- [TechRadar: Kobra S1 Combo review](https://www.techradar.com/pro/anycubic-kobra-s1-combo-review)
- [Anycubic US store: Kobra S1 + ACE 2 Pro Combo](https://us.anycubic3d.com/products/kobra-s1-combo) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-x-combo',
      name: 'Anycubic Kobra X Combo',
      brand: 'Anycubic',
      model: 'Kobra X',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#1976d2',
      released: 2026,
      price_usd: 469,
      image_url: cdn('KX_ACE_2_Pro_e64d4d64-6ca8-44f2-baf3-e1871aa1abaf.jpg?v=1788275145'),
      gallery: [cdn('en-7_668a6f1d-1d33-4402-b6c3-9b0da25c036f.jpg?v=1778568900'), cdn('en-5.jpg?v=1778562347')],
      affiliate_url: anycubic('kobra-x-combo-3d-printer'),
      affiliate_label: LABEL,
      title: 'Anycubic Kobra X Combo review: a compact bed-slinger with up to 7 colours',
      summary: 'A compact bed-slinger with built-in four-material system plus ACE 2 Pro for seven colours, $469. Consistently good prints and strong runout handling; RFID workflow is clumsy.',
      verdict: 'The Kobra X is an A1-style bed-slinger with four-material printing built in; the Combo adds an ACE 2 Pro for seven colours. FauxHammer found early prints consistently very good and called it possibly Anycubic’s best yet, and TechRadar was surprised how good it was for beginners. The RFID workflow is clumsy and the Combo takes more setup. Tom’s Hardware and TechRadar both prefer it over the Kobra 4.',
      best_for: 'Beginners who want lots of colours in a compact printer',
      pros: [
        'Four materials built in; seven colours with the Combo’s ACE 2 Pro',
        'Consistently very good prints (FauxHammer)',
        'Good filament runout handling',
        'Compact, space-efficient design',
        'Wi-Fi and RFID filament recognition',
      ],
      cons: [
        'RFID workflow is clumsy',
        'Combo needs more setup than the base Kobra X',
        'Bed-slinger: no enclosure for ABS/ASA',
        'Purge waste on multicolour prints',
        'Colour-count marketing (7 / 11 / 19) can confuse',
      ],
      specs: [
        { label: 'Type', value: 'Bed-slinger FDM' },
        { label: 'Multicolour', value: '4 built-in + ACE 2 Pro = 7 colours; up to 19 with three ACE 2 Pro' },
        { label: 'Connectivity', value: 'Wi-Fi, RFID' },
        { label: 'Price', value: 'Combo (7 colours) $469 · +1 ACE 2 Pro $688' },
      ],
      scores: { performance: 8.2, quality: 8.6, ease: 8.4, value: 8.8 },
      body: `## What is it?

The Kobra X is a compact bed-slinger in the style of Bambu Lab’s A1, with a four-material system built into the printer. The Combo adds an ACE 2 Pro unit, bringing it to seven colours, and more ACE units take it up to 19.

On 1 November 2026 the US store sells the **Kobra X Combo (7 colours) for $469** (list $599). TechRadar reviewed the base Kobra X at $299.

## What reviewers found

- **FauxHammer** found early prints consistently very good, praised runout handling, and suggested it might be Anycubic’s best printer yet. It called the RFID workflow clumsy.
- **TechRadar** found the base Kobra X beginner-friendly and surprisingly good for four-colour printing.
- **Tom’s Hardware**, reviewing the Kobra 4 Combo, said it would only pick the Kobra 4 over the Kobra X if you really wanted the all-in-one filament dryer. TechRadar also preferred the Kobra X for value and space.
- A buyer’s guide notes the Combo takes slightly more setup than the base model.

## Who should not buy it

- Anyone printing ABS or ASA: get an enclosed printer.
- Anyone who only prints in one colour.

## vs rivals

- **vs Anycubic Kobra 4 Combo ($299):** cheaper, bigger footprint, ACE 2 Pro dries filament. See [Kobra X Combo vs Kobra 4 Combo](/en/compare/anycubic-kobra-x-combo-vs-anycubic-kobra-4-combo/).
- **vs Bambu Lab A1 Combo:** the benchmark for this design, with a more polished app.

## Final thoughts

The Kobra X Combo gives beginners more colours in less space than almost anything else at the price.

## Sources

- [FauxHammer: Anycubic Kobra X review](https://www.fauxhammer.com/reviews/anycubic-kobra-x-review-a-clever-a1-style-bedslinger-that-might-be-anycubics-best-yet/)
- [TechRadar: Anycubic Kobra X review](https://techradar.com/pro/anycubic-kobra-x-3d-printer-review)
- [Tom’s Hardware: Kobra 4 Combo review](https://www.tomshardware.com/3d-printing/anycubic-kobra-4-combo-3d-printer-review) (compares with Kobra X)
- [Anycubic US store: Kobra X Combo](https://us.anycubic3d.com/products/kobra-x-combo-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-4-combo',
      name: 'Anycubic Kobra 4 Combo',
      brand: 'Anycubic',
      model: 'Kobra 4',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#1e88e5',
      released: 2026,
      price_usd: 299,
      image_url: cdn('31392604aac1a4ac3494a1f38d3feca7_10f9a6e7-0eb1-4911-8e1d-6129ca2c8156.jpg?v=1780914677'),
      gallery: [cdn('2-EN_8c449852-d953-4b12-bc15-403caeb8df7f.jpg?v=1780914677'), cdn('Main-sale-point-1_de809551-5683-4149-b0b2-bc182a33ff6a.jpg?v=1780914677')],
      affiliate_url: anycubic('kobra-4-combo-3d-printer'),
      affiliate_label: LABEL,
      title: 'Anycubic Kobra 4 Combo review: a quiet four-colour printer with a built-in dryer',
      summary: 'A bed-slinger with ACE 2 Pro four-colour feeder and filament dryer, $299. Very quiet with excellent auto-levelling; default purges wasted ~40 g on one print.',
      verdict: 'The Kobra 4 Combo is an evolution of the Kobra 3 Combo: very quiet, with Anycubic’s reliable auto-levelling and an ACE 2 Pro that dries filament while it feeds four colours. Tom’s Hardware called it good value for an entry-level printer; TechRadar saw close to 40 g wasted on purges in one multicolour print. At $299, down from the $379 Tom’s reviewed, it is a strong budget multicolour pick.',
      best_for: 'Beginners who want quiet multicolour printing and dry filament',
      pros: [
        'Very quiet; mostly fan noise (Tom’s Hardware)',
        'Reliable auto bed levelling and Z-offset',
        'ACE 2 Pro dries filament while printing',
        'Up to 8 colours with a second ACE 2 Pro',
        '$299 for the four-colour combo',
      ],
      cons: [
        'Default flushing wasted close to 40 g on one print (TechRadar)',
        'TPU must bypass the ACE 2 Pro',
        'Larger footprint than the Kobra X',
        'An evolution of the Kobra 3, not a leap',
        'Open bed-slinger: not for ABS/ASA',
      ],
      specs: [
        { label: 'Type', value: 'Bed-slinger FDM' },
        { label: 'Multicolour', value: 'ACE 2 Pro, 4 spools with drying; 8 with two units' },
        { label: 'Price', value: 'Combo $299 · Kobra 4 alone $199 · with second ACE 2 Pro $518' },
      ],
      scores: { performance: 8.0, quality: 8.2, ease: 8.6, value: 9.0 },
      body: `## What is it?

The Kobra 4 is Anycubic’s 2026 bed-slinger. The Combo adds the ACE 2 Pro, which feeds four filaments and dries them while printing.

On 1 November 2026 the US store sells the **Kobra 4 Combo for $299** (list $499) and the Kobra 4 alone for $199. Tom’s Hardware reviewed the combo at $379.

## What reviewers found

- **Tom’s Hardware** called it a step rather than a leap over the Kobra 3 Combo, but good value for an entry-level printer. Auto bed levelling and Z-offset were reliable, and it was very quiet, with fan noise the main sound.
- **TechRadar** found the default flushing settings wasted close to 40 g of filament on one multicolour print, and noted TPU must bypass the ACE 2 Pro and load straight into the toolhead. It preferred the Kobra X for value and space.
- **FauxHammer** found it a capable, modern printer with competent quality, easy setup and decent software, but questioned why it exists alongside the Kobra X.

## Who should not buy it

- Anyone short on space: the Kobra X is more compact.
- Anyone printing lots of TPU.

## vs rivals

- **vs Kobra X Combo ($469):** more colours in a smaller printer. See [Kobra X Combo vs Kobra 4 Combo](/en/compare/anycubic-kobra-x-combo-vs-anycubic-kobra-4-combo/).
- **vs Bambu Lab A1 Combo:** more established ecosystem; Tom’s noted the gap in price was small at launch.
- **vs Creality Ender-3 V3 SE ($179):** single colour, much cheaper.

## Final thoughts

At $299, the Kobra 4 Combo is a quiet, easy way into multicolour printing with dry filament. Tune the purge settings to cut waste.

## Sources

- [Tom’s Hardware: Anycubic Kobra 4 Combo review](https://www.tomshardware.com/3d-printing/anycubic-kobra-4-combo-3d-printer-review)
- [FauxHammer: Anycubic Kobra 4 review](https://www.fauxhammer.com/reviews/anycubic-kobra-4-review-a-perfectly-fine-printer-that-probably-shouldnt-exist/)
- [3DWork: Kobra 4 Combo review](https://3dwork.io/en/anycubic-kobra-4-combo-review/)
- [Anycubic US store: Kobra 4 Combo](https://us.anycubic3d.com/products/kobra-4-combo-3d-printer) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-s1-max',
      name: 'Anycubic Kobra S1 Max',
      brand: 'Anycubic',
      model: 'Kobra S1 Max',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#0d47a1',
      released: 2026,
      price_usd: 599,
      image_url: cdn('S1M_3ff45c1a-59a6-4188-9ac8-8755658a6a06.jpg?v=1778564653'),
      gallery: [cdn('en_120a0e4e-c785-451f-9cf2-31c5bed102f0.jpg?v=1778564499'), cdn('1080x1080-4_8af03f33-4237-45f2-a15e-268f489f5ad1.jpg?v=1778558149')],
      affiliate_url: anycubic('kobra-s1-max'),
      affiliate_label: LABEL,
      title: 'Anycubic Kobra S1 Max review (preview): a 350 mm heated-chamber printer from $599',
      summary: 'A large enclosed CoreXY with 350 mm cube volume, 65°C heated chamber and 350°C hotend, $599 ($799 four-colour combo). Promising specs; few long-term tests yet.',
      verdict: 'On paper the Kobra S1 Max is remarkable value: a 350 mm cube, actively heated 65°C chamber, 350°C hotend and up to 16 colours, from $599. Coverage so far is mostly spec-based, real-world owner experience is limited, and Anycubic’s support record is a risk at this price. Treat this as a preview; compare with the Creality K2 Plus, which has longer test history.',
      best_for: 'Makers who need large ABS/ASA parts in an enclosed printer',
      pros: [
        '350 × 350 × 350 mm build volume',
        'Active chamber heating to 65°C',
        '350°C hotend for engineering filaments',
        'Up to 16 colours with ACE units',
        'From $599, much cheaper than rival 350 mm printers',
      ],
      cons: [
        'Few hands-on or long-term reviews (preview)',
        'Anycubic support record flagged as a risk',
        'Complex and large: overkill for small prints',
        'Sold direct from Anycubic only',
        'Purge waste on multicolour prints',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY FDM' },
        { label: 'Build volume', value: '350 × 350 × 350 mm' },
        { label: 'Temperatures', value: 'Hotend 350°C, chamber 65°C (active)' },
        { label: 'Multicolour', value: 'Up to 16 filaments with ACE units' },
        { label: 'Price', value: '$599 · Combo (4 colours) $799 · 8 colours $1,018' },
      ],
      scores: { performance: 8.6, quality: 8.2, ease: 7.4, value: 8.8 },
      body: `## What is it?

The Kobra S1 Max is Anycubic’s large-format enclosed printer: a 350 mm cube, an actively heated chamber up to 65°C and a 350°C hotend. Combos add ACE units for multicolour, up to 16 filaments.

On 1 November 2026 the US store sells it for **$599** (list $899), or **$799** as a four-colour combo.

## A note on evidence

We found no long-term hands-on review from a major outlet. Coverage from Makers101, JC Printfarm, Good Prints 3D and Mr Resin is largely spec-based. Treat this as a preview.

## What we know

- The heated chamber is the key feature: it makes large ABS and ASA parts much less likely to warp.
- The bed moves on Z, which suits tall or heavy prints.
- Good Prints 3D notes real-world owner experience is limited as of mid-2026 and flags Anycubic’s support record as a documented risk at this price.
- Makers101 says the complexity and price may be overkill if you don’t regularly need the size and colour range.

## Who should not buy it

- Anyone whose prints fit in 256 mm.
- Buyers who want proven long-term reliability now.

## vs rivals

- **vs Creality K2 Plus Combo ($1,199):** same 350 mm class with more test history, at twice the price. See [Kobra S1 Max vs K2 Plus Combo](/en/compare/anycubic-kobra-s1-max-vs-creality-k2-plus-combo/).
- **vs Kobra S1 Combo ($429):** 250 mm, no active chamber heat.

## Final thoughts

The Kobra S1 Max could be the best-value large enclosed printer available. Wait for more owner reports if reliability is critical.

## Sources

- [Makers101: Kobra S1 Max Combo review](https://makers101.com/kobra-s1-max-combo-honest-review/)
- [JC Printfarm: Kobra S1 Max review](https://www.jcprintfarm.com/blogs/3d-printing-tech/anycubic-kobra-s1-max-review)
- [Good Prints 3D: who should buy the Kobra S1 Max?](https://www.goodprints3d.com/blogs/3d/anycubic-kobra-s1-max-review-for-large-enclosed-build-volume-and-buyers-who-need-real-room-without-jumping-industrial)
- [Notebookcheck: Kobra S1 Max Combo launch](https://www.notebookcheck.net/Anycubic-Kobra-S1-Max-Combo-New-3D-printer-with-massive-chamber-supports-16-filaments.1157627.0.html)
- [Anycubic US store: Kobra S1 Max](https://us.anycubic3d.com/products/kobra-s1-max) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'anycubic-photon-mono-4',
      name: 'Anycubic Photon Mono 4',
      brand: 'Anycubic',
      model: 'Photon Mono 4',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#e65100',
      released: 2024,
      price_usd: 159,
      image_url: cdn('Mono4_348b0a8e-7d73-4abf-9a19-133373ad5778.jpg?v=1778549023'),
      gallery: [cdn('PhotonMono4-5-EN.jpg?v=1778549049'), cdn('PhotonMono4-4-EN.jpg?v=1778549034')],
      affiliate_url: anycubic('photon-mono-4'),
      affiliate_label: LABEL,
      title: 'Anycubic Photon Mono 4 review: 10K resin detail for $159',
      summary: 'A basic 7-inch 10K resin printer with 17 µm pixels and a laser-engraved plate, $159. Fine detail and easy levelling; no app, no camera, light enough to slide around.',
      verdict: 'The Photon Mono 4 puts its money into fundamentals: a 10K screen with 17 × 17 µm pixels, a laser-engraved plate and simple four-point levelling. Reviewers found setup easy and detail fine for miniatures. It has no app support, no camera or heated vat, and is so light its feet slide on smooth desks. At $159 it is a cheap, capable first resin printer.',
      best_for: 'Budget miniature makers trying resin for the first time',
      pros: [
        '10K mono LCD with 17 × 17 µm pixels',
        'Laser-engraved build plate and four-point levelling',
        'Easy setup and simple interface',
        'Resumes after a power cut',
        'Only $159',
      ],
      cons: [
        'No Anycubic app or Wi-Fi',
        'No camera, heated vat or tilt release',
        'Light: plastic feet slide on smooth surfaces',
        'Some operating noise',
        'Small 153 × 87 × 165 mm build volume',
      ],
      specs: [
        { label: 'Type', value: 'MSLA resin' },
        { label: 'Screen', value: '7-inch 10K mono LCD, 17 × 17 µm' },
        { label: 'Build volume', value: '153.4 × 87 × 165 mm' },
        { label: 'Levelling', value: 'Four-point' },
        { label: 'Price', value: '$159 · with Wash & Cure 3 $228' },
      ],
      scores: { performance: 7.4, quality: 8.4, ease: 8.4, value: 9.2 },
      body: `## What is it?

The Photon Mono 4 is Anycubic’s entry-level resin printer. It has a 7-inch 10K monochrome screen with 17 µm pixels, a laser-engraved build plate and four-point levelling, and leaves out extras such as Wi-Fi, a camera and a heated vat.

It costs **$159** on the US store (list $219), or $228 with the Wash & Cure 3 station.

## What reviewers found

- **FauxHammer** called it a decent entry-level printer that suits most hobby use, though it felt somewhat misjudged next to the Mono 4 Ultra; a reasonable buy if the price is right.
- **JC Printfarm** describes it as deliberately basic, aimed at budget miniature makers who value fine pixel pitch over automation.
- Other reviewers found setup easy and levelling straightforward, and it can resume after a power cut. Downsides: no app support, some noise, and plastic feet that slide because the printer is so light.

## Who should not buy it

- Anyone printing in a cold room: a heated vat (Saturn 4 Ultra 16K, M7 Pro) prevents failures.
- Anyone who wants remote monitoring.

## vs rivals

- **vs ELEGOO Mars 5 Ultra (~$293):** tilt release, AI camera and self-levelling for about $130 more. See [Photon Mono 4 vs Mars 5 Ultra](/en/compare/anycubic-photon-mono-4-vs-elegoo-mars-5-ultra/).
- **vs Photon Mono M7 Pro ($459):** bigger, faster, heated vat.

## Final thoughts

For $159, the Photon Mono 4 delivers the detail that matters for miniatures. Put rubber pads under the feet and keep the room warm.

## Sources

- [FauxHammer: Anycubic Photon Mono 4 review](https://www.fauxhammer.com/reviews/anycubic-photon-mono-4-review-does-10k-actually-matter/)
- [JC Printfarm: Photon Mono 4 review](https://www.jcprintfarm.com/blogs/3d-printing-tech/anycubic-photon-mono-4-review)
- [3DTechValley: Photon Mono 4 review](https://www.3dtechvalley.com/anycubic-photon-mono-4-review/)
- [Anycubic US store: Photon Mono 4](https://us.anycubic3d.com/products/photon-mono-4) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'anycubic-photon-mono-m7-pro',
      name: 'Anycubic Photon Mono M7 Pro',
      brand: 'Anycubic',
      model: 'Photon Mono M7 Pro',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#f4511e',
      released: 2024,
      price_usd: 459,
      image_url: cdn('PhotonMonoM7Pro_4.jpg?v=1778549239'),
      gallery: [cdn('PhotonMonoM7Pro-6-EN.jpg?v=1778549220'), cdn('PhotonMonoM7Pro-7-EN.jpg?v=1778549224')],
      affiliate_url: anycubic('photon-mono-m7-pro'),
      affiliate_label: LABEL,
      title: 'Anycubic Photon Mono M7 Pro review: fast 14K resin printing with a heated vat',
      summary: 'A 10.1-inch 14K resin printer with heated vat, auto resin refill and up to 170 mm/h, $459. Tom’s Hardware called it freaky fast; the hood wobbles slightly.',
      verdict: 'The Photon Mono M7 Pro is fast, detailed and easy: Tom’s Hardware found it freaky fast even with normal resin, and GamesRadar called it the standout of everything it tested in 2024. It adds automatic resin refilling and a heated vat that keeps resin at working temperature. The hood wobbles a little on its base. At $459, down from $669, it is a strong mid-size resin printer.',
      best_for: 'Miniature makers who want speed and reliability in a mid-size resin printer',
      pros: [
        '14K screen, 16.8 × 24.8 µm XY resolution',
        'Up to 170 mm/h with high-speed resin',
        'Heated vat with automatic temperature control',
        'Automatic resin refill',
        'Long-life release film (45,000 layers claimed)',
      ],
      cons: [
        'Hood wobbles slightly on the base (Basic Tutorials)',
        'Top speeds need Anycubic’s high-speed resin',
        'Bigger resin commitment than the Mono 4',
        'No tilt release',
        'Several reviews were sponsored or affiliate-linked',
      ],
      specs: [
        { label: 'Type', value: 'MSLA resin' },
        { label: 'Screen', value: '10.1-inch 14K mono LCD, 16.8 × 24.8 µm' },
        { label: 'Speed', value: 'Up to 170 mm/h (high-speed resin, 0.1 mm layers)' },
        { label: 'Features', value: 'Heated vat, auto resin refill, long-life film' },
        { label: 'Price', value: '$459 (list $669)' },
      ],
      scores: { performance: 9.0, quality: 8.8, ease: 8.6, value: 8.8 },
      body: `## What is it?

The Photon Mono M7 Pro is Anycubic’s mid-size resin printer. It has a 10.1-inch 14K screen, a heated resin vat with automatic temperature control and an automatic resin refill system.

It costs **$459** on the US store on 1 November 2026 (list $669).

## What reviewers found

- **Tom’s Hardware** called it freaky fast even with normal resin, and noted the release film is rated for 45,000 layers.
- **GamesRadar** said it delivers incredibly high detail and was the standout of everything it had tested in 2024; it works out of the box, which makes it good for newcomers.
- **3DWithUs**, **VoxelMatters** and **3DWork** praised its straightforward workflow.
- **Basic Tutorials** found it solid overall, but the hood wobbles slightly on the base.

With Anycubic’s High-Speed 2.0 resin it reaches 170 mm/h at 0.1 mm layers.

## Who should not buy it

- Beginners on a tight budget: the Photon Mono 4 costs $159.
- Anyone wanting the very largest prints: the M7 Max is bigger.

## vs rivals

- **vs ELEGOO Saturn 4 Ultra 16K ($563):** heated vat and tilt release, a little more detail, higher price. See [M7 Pro vs Saturn 4 Ultra 16K](/en/compare/anycubic-photon-mono-m7-pro-vs-elegoo-saturn-4-ultra-16k/).
- **vs Photon Mono 4 ($159):** much smaller, no heated vat.

## Final thoughts

The M7 Pro is fast, reliable and well priced at $459. It is the Anycubic resin printer to buy if you print regularly.

## Sources

- [Tom’s Hardware: Photon Mono M7 Pro review](https://www.tomshardware.com/3d-printing/anycubic-photon-mono-m7-pro-review)
- [GamesRadar: Photon Mono M7 Pro review](https://www.gamesradar.com/hardware/anycubic-photon-mono-m7-pro-review/)
- [3DWithUs: Photon Mono M7 Pro review](https://3dwithus.com/anycubic-photon-mono-m7-pro-review-3d-printer-testing)
- [Basic Tutorials: Photon Mono M7 Pro test](https://basic-tutorials.com/reviews/gadget-reviews/anycubic-photon-mono-m7-pro/)
- [Anycubic US store: Photon Mono M7 Pro](https://us.anycubic3d.com/products/photon-mono-m7-pro) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'anycubic-kobra-s1-combo-vs-bambu-lab-p1s',
      title: 'Anycubic Kobra S1 Combo vs Bambu Lab P1S',
      products: ['anycubic-kobra-s1-combo', 'bambu-lab-p1s'],
      intro: 'Two enclosed CoreXY printers. The Kobra S1 Combo includes four-colour ACE 2 Pro for $429; the P1S has Bambu’s polished ecosystem.',
      verdict: 'Choose the Kobra S1 Combo for multicolour and filament drying at a much lower price. Choose the Bambu Lab P1S for the most reliable software and the largest accessory ecosystem.',
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-x-combo-vs-anycubic-kobra-4-combo',
      title: 'Anycubic Kobra X Combo vs Kobra 4 Combo: which multicolour bed-slinger?',
      products: ['anycubic-kobra-x-combo', 'anycubic-kobra-4-combo'],
      intro: 'Anycubic’s two multicolour bed-slingers. Reviewers often prefer the Kobra X.',
      verdict: 'Pick the Kobra X Combo ($469) for seven colours in a compact printer. Pick the Kobra 4 Combo ($299) to save money and get a filament dryer built into the ACE 2 Pro.',
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-s1-max-vs-creality-k2-plus-combo',
      title: 'Anycubic Kobra S1 Max vs Creality K2 Plus Combo: 350 mm heated-chamber printers',
      products: ['anycubic-kobra-s1-max', 'creality-k2-plus-combo'],
      intro: 'Two large enclosed CoreXY printers with active chamber heating and up to 16 colours.',
      verdict: 'The Kobra S1 Max costs far less ($599, or $799 with four colours) but has little test history yet. The K2 Plus Combo ($1,199) is better documented, including its quirks. Pick Anycubic for value, Creality for a known quantity.',
      updated_at: DATE,
    },
    {
      slug: 'anycubic-photon-mono-4-vs-elegoo-mars-5-ultra',
      title: 'Anycubic Photon Mono 4 vs ELEGOO Mars 5 Ultra: best cheap resin printer',
      products: ['anycubic-photon-mono-4', 'elegoo-mars-5-ultra'],
      intro: 'Two compact 7-inch resin printers for miniatures.',
      verdict: 'Choose the Photon Mono 4 ($159) for the lowest price and fine 17 µm pixels. Choose the Mars 5 Ultra (~$293) for tilt release, self-levelling and an AI camera that pauses failed prints.',
      updated_at: DATE,
    },
    {
      slug: 'anycubic-photon-mono-m7-pro-vs-elegoo-saturn-4-ultra-16k',
      title: 'Anycubic Photon Mono M7 Pro vs ELEGOO Saturn 4 Ultra 16K',
      products: ['anycubic-photon-mono-m7-pro', 'elegoo-saturn-4-ultra-16k'],
      intro: 'Two 10-inch resin printers with heated vats.',
      verdict: 'Pick the M7 Pro ($459) for speed, auto resin refill and value. Pick the Saturn 4 Ultra 16K ($563) for the finest 16K detail, tilt release and an AI camera.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-resin-3d-printers',
      title: 'The best resin 3D printers for miniatures',
      category: '3d-printers',
      intro: 'Resin printers from Anycubic, ELEGOO and NOVA3D compared using independent tests and official prices on 1 November 2026.',
      items: [
        { slug: 'anycubic-photon-mono-m7-pro', award: 'Best overall', note: 'Fast, heated vat, auto refill. $459.' },
        { slug: 'elegoo-saturn-4-ultra-16k', award: 'Best detail', note: '16K, heated vat, zero failures in a freezing studio. $563.' },
        { slug: 'elegoo-mars-5-ultra', award: 'Best for beginners', note: 'Self-levelling and an AI camera. ~$293.' },
        { slug: 'anycubic-photon-mono-4', award: 'Cheapest', note: '10K detail for $159.' },
        { slug: 'nova3d-gem3-max', award: 'Biggest', note: 'Large-format resin printing.' },
      ],
      updated_at: DATE,
    },
  ],
};
