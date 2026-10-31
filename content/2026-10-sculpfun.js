// Sculpfun batch: S70 Max, SF-A9, S30 Pro Max, iCube Ultra, E1, E1 Pro. Researched 31 October 2026.
// Prices and images: official store (sculpfun.com/products.json), 31 Oct 2026, US-shipped variants.
// Test results: the independent reviews listed in each article's Sources section.
// Skipped for now: S40 Max and A9 Ultra (no independent hands-on tests found).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const sculpfun = (handle) => awin(48841, `https://www.sculpfun.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0628/0695/0066/${file}`;
const DATE = '2026-10-31 22:00:00';
const LABEL = 'Check price at Sculpfun';

export default {
  products: [
    {
      slug: 'sculpfun-s70-max',
      name: 'Sculpfun S70 Max',
      brand: 'Sculpfun',
      model: 'S70 Max',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#c62828',
      released: 2024,
      price_usd: 1599,
      featured: true,
      image_url: cdn('files/S70-max.jpg?v=1757410060'),
      gallery: [cdn('files/S70MAXAir_4.jpg?v=1757410060'), cdn('files/s70main_1.jpg?v=1757410060')],
      affiliate_url: sculpfun('sculpfun-s70-max-70w-laser-engraver-and-cutting-machine'),
      affiliate_label: LABEL,
      title: 'Sculpfun S70 Max review: a 70W diode laser with a huge 830 × 800 mm bed',
      summary: 'A 70 W, 12-diode open-frame laser with autofocus and an 830 × 800 mm bed, $1,599. Cut 18 mm spruce in about 3 passes; open frame means an enclosure and extraction are a must.',
      verdict: 'The S70 Max is about as much cutting power as a diode laser offers. Hobby Laser Cutters cut 3 mm black acrylic in one pass and 18 mm spruce in just over three, and it beat the Atomstack A70 Pro on engraving and cutting efficiency. It is a Class 4 open-frame machine, the bed plate warped during heavy cutting, and the Sculpfun shop’s own reviews are mixed. For a workshop that can enclose and ventilate it, it is excellent value.',
      best_for: 'Workshops cutting large sheets of wood and acrylic',
      pros: [
        '70W from 12 diodes; square ~0.15 mm spot',
        'Huge 830 × 800 mm work area',
        'Motorised autofocus and 50 L/min air assist',
        'Beat the Atomstack A70 Pro on text, aluminium and photo engraving',
        'Offline controller runs jobs from an SD card',
      ],
      cons: [
        'Class 4 open frame: enclosure, goggles and extraction are mandatory',
        'Metal plate under the honeycomb warped and nearly burned through during cutting',
        'Large footprint (frame about 980 × 1,000 mm)',
        'Slightly melts black acrylic surfaces when engraving',
        'Sculpfun shop reviews average only 3.0/5 (16 reviews, via best-lasercutter.com)',
      ],
      specs: [
        { label: 'Laser', value: '70W blue diode (12 × 6W)' },
        { label: 'Spot', value: 'About 0.15 × 0.15 mm (measured)' },
        { label: 'Work area', value: '830 × 800 mm' },
        { label: 'Max speed', value: '36,000 mm/min' },
        { label: 'Features', value: 'Autofocus, 50 L/min air assist, offline controller, SD card' },
        { label: 'Software', value: 'LightBurn, LaserGRBL' },
        { label: 'Price', value: '$1,599 · with honeycomb $1,848 · with B70 enclosure $2,227' },
      ],
      scores: { performance: 9.0, quality: 7.6, ease: 6.6, value: 8.6 },
      body: `## What is it?

The S70 Max is Sculpfun’s most powerful diode laser: twelve 6W diodes in one module, on an extra-large 830 × 800 mm open frame with autofocus and strong air assist.

It costs **$1,599** on the official store (list $2,299). A set with honeycomb bed costs $1,848, and with Sculpfun’s B70 enclosure $2,227.

## Tests

Hobby Laser Cutters (JT Makes It) tested it in May 2025:

- **3 mm black acrylic**: one pass at 600 mm/min.
- **10 mm acrylic**: 4 passes.
- **18 mm spruce**: just over 3 passes at 600 mm/min.
- **1 mm text on anodised aluminium**: clean and sharp.
- The spot was square, about 0.15 mm on both axes, and focus held well.

Against the 70W **Atomstack A70 Pro**, the S70 Max did better on text, aluminium and photo engraving and cut more efficiently. 40W diode lasers were far behind.

## Problems

- During plywood cutting, the metal plate under the honeycomb warped and nearly burned through. Use a proper cutting bed and don’t cut on bare metal.
- A test square was slightly undersized at 10,000 mm/min, and there was slight vibration under the microscope.
- It melted the surface of black acrylic a little when engraving.
- best-lasercutter.com scores it 7.8/10: strong on specs and value, weaker on user-friendliness and customer service. It lists the Sculpfun shop rating at 3.0/5 from 16 reviews.

## Safety

This is a Class 4 open-frame laser. You need an enclosure (Sculpfun sells the B70 for $499), goggles for 455 nm, and fume extraction. Not a beginner machine.

## Who should not buy it

- Beginners or anyone in a living space.
- Anyone who mainly engraves small items: a smaller enclosed laser is easier.

## vs rivals

- **vs Creality Falcon2 Pro 60W ($1,899):** enclosed, smaller 400 × 415 mm bed, less power. See [S70 Max vs Falcon2 Pro 60W](/en/compare/sculpfun-s70-max-vs-creality-falcon2-pro-60w/).
- **vs Sculpfun SF-A9 40W ($799.99):** half the price; slower on thick cuts.

## Final thoughts

The S70 Max is a big, powerful cutter for people who can house it safely. Budget for the enclosure and extraction from day one.

## Sources

- [Hobby Laser Cutters: Sculpfun S70 Max review and test](https://hobbylasercutters.com/sculpfun-s70-max/) (May 2025)
- [best-lasercutter.com: Sculpfun S70 Max 70W](https://best-lasercutter.com/en/lasers/sculpfun-s70-max-70w) (7.8/10)
- [Sculpfun official store: S70 Max](https://www.sculpfun.com/products/sculpfun-s70-max-70w-laser-engraver-and-cutting-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-sf-a9',
      name: 'Sculpfun SF-A9 40W',
      brand: 'Sculpfun',
      model: 'SF-A9',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#d84315',
      released: 2023,
      price_usd: 799.99,
      featured: true,
      image_url: cdn('files/SF-A9.jpg?v=1751348790'),
      gallery: [cdn('files/c.jpg?v=1752656546'), cdn('files/b.jpg?v=1752656546')],
      affiliate_url: sculpfun('sculpfun-sf-a9-40w-laser-engraver-cutting-machine'),
      affiliate_label: LABEL,
      title: 'Sculpfun SF-A9 review: a fast 40W cutter that measured 41W',
      summary: 'An open-frame 40 W (switchable to 20 W) diode laser, $799.99. Measured 41 W, cut 10 mm plywood in one pass and nearly cut a 44 mm plank; the spot is large for fine engraving.',
      verdict: 'The SF-A9 is one of the strongest 40W diode cutters. Hobby Laser Cutters measured 41W, cut 10 mm plywood in one pass at 300 mm/min, and found it the fastest 40W they had tested, beating the xTool S1 and D1 Pro on 6 mm plywood. The spot is larger than rivals, so fine photo engraving is weaker, and the front frame makes placing work awkward. For cutting on a budget, it is a top pick.',
      best_for: 'Makers who mostly cut wood and acrylic and want the most power per dollar',
      pros: [
        'Measured 41W optical output; 20W mode for finer work',
        '10 mm plywood in one pass at 300 mm/min',
        'Beat the xTool S1 and D1 Pro 40W on 6 mm plywood',
        'Steel Y rollers, linear X rail and best-in-class focus retention',
        'Low-idle air assist keeps the lens clean; flame and tilt sensors',
      ],
      cons: [
        'Larger spot: weaker on sub-millimetre detail and photos',
        'Air pump hums constantly while the laser is on',
        'Front frame hides the nozzle, making placement hard',
        'Open frame: needs goggles, enclosure or a dedicated room',
        'Sculpfun’s own app offers little control; plan on LightBurn',
      ],
      specs: [
        { label: 'Laser', value: '40W blue diode (8 diodes), switchable to 20W' },
        { label: 'Measured power', value: '41W (Hobby Laser Cutters)' },
        { label: 'Spot', value: '0.15 × 0.1 mm (claimed)' },
        { label: 'Work area', value: '400 × 400 mm' },
        { label: 'Max speed', value: '36,000 mm/min' },
        { label: 'Safety', value: 'Flame and temperature sensor, 15° tilt sensor, emergency stop, child lock' },
        { label: 'Software', value: 'LightBurn, LaserGRBL' },
        { label: 'Price', value: '$799.99 · with honeycomb and rotary $1,079.99' },
      ],
      scores: { performance: 8.9, quality: 8.0, ease: 6.8, value: 8.7 },
      body: `## What is it?

The SF-A9 is Sculpfun’s 40W open-frame laser. Eight diodes combine for 40W, and a switch drops it to 20W (four diodes) for a finer spot. It has a heat-pipe cooler, steel rollers and a full set of safety sensors.

It costs **$799.99** on the US store (list $1,699.99).

## Tests

Hobby Laser Cutters tested it in March 2024 with a power meter:

- **Power**: 41W optical at the 40W setting, slightly above spec; the 20W mode was on spec.
- **10 mm plywood**: one pass at 300 mm/min, or two at 600 mm/min.
- **10 mm black acrylic**: 6 passes. 3 mm black acrylic: just over one pass.
- **17 mm pine**: 4 passes; **18 mm spruce**: under 6 passes at 600 mm/min.
- A **44 mm spruce plank** was cut through except for one corner.

It nearly matched the xTool S1 on 3 mm plywood, beat both the S1 and the xTool D1 Pro 40W on 6 mm, and was the fastest 40W diode the reviewer had tested.

## Engraving

The spot is larger at best focus than rivals, so sub-millimetre detail suffers, and low-power engraving is slightly weaker in 40W mode. Switch to 20W mode for photos and fine text, or pick a lower-power laser if engraving is your main job.

## Design and software

The Diode Laser Wiki notes the revised mechanics: limit switches on both axes, belt tensioners and tidy cabling. Air assist idles at 10% to keep the lens clean, but that means a constant pump hum. The bulky front frame hides the nozzle tip, which makes placement awkward. Sculpfun’s app offers little control, so most owners use LightBurn (about $60) or free LaserGRBL.

## Who should not buy it

- Anyone who mostly engraves photos.
- Anyone without a safe, ventilated space.

## vs rivals

- **vs Creality Falcon2 40W ($639):** cheaper, with fewer independent cutting tests. See [SF-A9 vs Falcon2 40W](/en/compare/sculpfun-sf-a9-vs-creality-falcon2-40w/).
- **vs Sculpfun S70 Max ($1,599):** twice the price for 70W and a huge bed.
- **vs xTool S1:** enclosed and more polished, but the SF-A9 cut 6 mm plywood faster.

## Final thoughts

If cutting is your main job, the SF-A9 is one of the best 40W diode lasers you can buy, especially at the current price.

## Sources

- [Hobby Laser Cutters: Sculpfun SF-A9 review](https://hobbylasercutters.com/sculpfun-sf-a9/) (March 2024)
- [Diode Laser Wiki: Sculpfun SF-A9](https://diode-laser-wiki.com/documentation/sculpfun-sf-a9/)
- [Laser Engraver Expert: Sculpfun SF-A9 40W review](https://laserengraverexpert.com/sculpfun-sf-a9-review/)
- [LightBurn forum: experiences with the SF-A9 40W](https://forum.lightburnsoftware.com/t/does-anyone-have-any-experience-with-the-sculpfun-sf-a9-40w-laser-buying/175239)
- [Sculpfun official store: SF-A9](https://www.sculpfun.com/products/sculpfun-sf-a9-40w-laser-engraver-cutting-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-s30-pro-max',
      name: 'Sculpfun S30 Pro Max 20W',
      brand: 'Sculpfun',
      model: 'S30 Pro Max',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#bf360c',
      released: 2022,
      price_usd: 599.99,
      image_url: cdn('files/S30-PRO-MAX-2.jpg?v=1752662232'),
      gallery: [cdn('products/SCULPFUNS30ProMax.jpg?v=1752662232'), cdn('products/07_d1a59918-4cac-4dc1-be30-e8cb6714a9cb.jpg?v=1752662232')],
      affiliate_url: sculpfun('sculpfun-s30-pro-max-20w-laser-engraver-rotary-roller-40-40cm-honeycomb-panel'),
      affiliate_label: LABEL,
      title: 'Sculpfun S30 Pro Max review: a precise 20W all-rounder with automatic air assist',
      summary: 'A 20 W open-frame diode laser with a tight spot, automatic air assist and expandable bed; $599.99 with rotary and honeycomb. Beat the Atomstack A20 Pro in head-to-head cuts.',
      verdict: 'The S30 Pro Max is a well-proven 20W laser. In Hobby Laser Cutters’ head-to-head it needed fewer passes than the Atomstack A20 Pro on every hardwood and left cleaner, less charred edges, thanks to a tighter spot. Air assist switches on per layer from LightBurn. There is no physical emergency stop and the design dates from 2022. At $599.99 with a rotary and honeycomb, it is a strong all-round bundle.',
      best_for: 'Hobbyists who want detail and solid cutting from a proven 20W open-frame laser',
      pros: [
        'Tight ~0.15 × 0.1 mm spot (measured), better than the Atomstack A20 Pro',
        'Fewer passes than the A20 Pro: e.g. 5 mm beech in 2.5 vs 5',
        'Automatic air assist, switchable per layer in LightBurn',
        'Replaceable lens; bed expands to 900 × 890 mm',
        'US bundle includes rotary roller and honeycomb panel',
      ],
      cons: [
        'No physical emergency stop (only a board connector)',
        'Weak air-assist tube',
        'Standard bed is 370 × 360 mm, smaller than the 410 × 400 often quoted',
        'Open frame: needs goggles and ventilation',
        'Older 2022 design; Sculpfun’s software is limited, so plan on LightBurn',
      ],
      specs: [
        { label: 'Laser', value: '20W blue diode (4 diodes)' },
        { label: 'Spot', value: 'About 0.15 × 0.1 mm (measured)' },
        { label: 'Work area', value: '370 × 360 mm, expandable to 900 × 370 or 900 × 890 mm' },
        { label: 'Engraving accuracy', value: '0.05 mm (claimed)' },
        { label: 'Air assist', value: 'Built-in, 30 L/min, automatic per layer' },
        { label: 'Software', value: 'LightBurn, LaserGRBL' },
        { label: 'Price', value: '$599.99 with rotary roller and 35 × 35 cm honeycomb' },
      ],
      scores: { performance: 8.0, quality: 8.0, ease: 7.2, value: 8.6 },
      body: `## What is it?

The S30 Pro Max is the 20W member of Sculpfun’s popular S30 family: an open-frame laser with built-in automatic air assist, a replaceable lens and an expandable aluminium frame.

On 31 October 2026 the US store sells it for **$599.99** in a bundle with a rotary roller and a 35 × 35 cm honeycomb panel (list $899.99).

## Head-to-head tests

Hobby Laser Cutters compared it with the Atomstack A20 Pro, which uses a similar 20W four-diode module. Passes needed to cut through at 600 mm/min (S30 Pro Max vs A20 Pro):

| Material | S30 Pro Max | Atomstack A20 Pro |
|---|---|---|
| 4 mm pine | 2 | 3 |
| 3 mm beech | 1 | 2 |
| 5 mm beech | 2.5 | 5 |
| 5 mm oak | 2 | 4 |
| 18 mm spruce | 9 | 10 |
| 10 mm black acrylic | 10 | 11 |

The Sculpfun’s cuts also looked cleaner and less charred. The reviewer measured its spot at about 0.15 × 0.1 mm versus 0.2 × 0.15 mm for the Atomstack, and found it held focus over a longer distance. Both cut 0.05 and 0.1 mm stainless steel, but not 0.15 mm.

Laser Engraver Expert counted 152 distinct grayscale tones at 300 mm/s and 65% power, a good result for photo engraving.

## Living with it

The built-in pump (30 L/min) can be switched on only for selected layers in LightBurn, which keeps engraving quiet and cutting clean. Assembly took Laser Engraver Expert about 72 minutes.

The downsides: no physical emergency stop, a weak air-assist tube, and a standard work area of 370 × 360 mm (Sculpfun’s current spec), smaller than the 410 × 400 mm in some older listings. Sculpfun’s own software is limited; most owners use LightBurn.

## Who should not buy it

- Anyone who wants an enclosed, Class 1 machine: look at the Sculpfun E1.
- Anyone cutting thick wood daily: the SF-A9 40W is much faster.

## vs rivals

- **vs Creality Falcon2 22W ($549):** similar power, bigger standard bed, no rotary in the bundle. See [S30 Pro Max vs Falcon2 22W](/en/compare/sculpfun-s30-pro-max-vs-creality-falcon2-22w/).
- **vs Atomstack A20 Pro:** the S30 Pro Max cut faster and cleaner in direct tests.

## Final thoughts

The S30 Pro Max is a refined, well-tested 20W laser, and the current bundle with rotary and honeycomb is good value.

## Sources

- [Hobby Laser Cutters: S30 Pro Max vs Atomstack A20 Pro](https://hobbylasercutters.com/sculpfun-s30-pro-max-vs-atomstack-a20-x20-pro/)
- [Laser Engraver Expert: Sculpfun S30 Pro Max review](https://laserengraverexpert.com/sculpfun-s30-pro-max-review/)
- [Creadeliefje: S30 Pro Max 20W review](https://www.creadeliefje.be/en/sculpfun-s30-pro-max-20w-review-what-to-expect-10w-vs-20w/)
- [Sculpfun official store: S30 Pro Max bundle](https://www.sculpfun.com/products/sculpfun-s30-pro-max-20w-laser-engraver-rotary-roller-40-40cm-honeycomb-panel) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-icube-ultra',
      name: 'Sculpfun iCube Ultra',
      brand: 'Sculpfun',
      model: 'iCube Ultra',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#e65100',
      released: 2025,
      price_usd: 299,
      image_url: cdn('files/icube_392d32fc-98cf-4a19-9bef-866b62b92afd.jpg?v=1760598895'),
      gallery: [cdn('files/icube_ultra_5.png?v=1760598895'), cdn('files/icube_ultra_dual_main.png?v=1770369242')],
      affiliate_url: sculpfun('icube-ultra-portable-laser-engraving-machine'),
      affiliate_label: LABEL,
      title: 'Sculpfun iCube Ultra review: a compact enclosed 12W laser with an IR option',
      summary: 'A small Class 1 enclosed laser with 12 W diode, autofocus and built-in smoke filter, from $299; $499 with a 1.2 W IR module. 3DWithUs scored it 4.5/5; the bed is only 150 × 150 mm.',
      verdict: 'The iCube Ultra packs a 12W diode, autofocus and a smoke filter into a small enclosed box. 3DWithUs scored it 4.5/5, cutting 5 mm plywood cleanly and marking a stainless dog tag with the IR module. The 150 × 150 mm bed is small and there is no touchscreen. At $299 it is one of the cheapest safe, enclosed lasers that can still cut.',
      best_for: 'Beginners and gift makers who want a small, safe enclosed laser',
      pros: [
        'Class 1 enclosure with door interlock, emergency stop and USB security key',
        'Built-in smoke filter',
        'Autofocus',
        '12W cut 5 mm plywood cleanly at 200 mm/min (3DWithUs)',
        'Optional 1.2W IR module marks stainless steel',
      ],
      cons: [
        'Small 150 × 150 mm bed (150 × 135 mm with IR)',
        'No touchscreen',
        'No reversible honeycomb; curved items need magnets',
        'IR module is for marking, not deep metal engraving',
        'Camera and air assist are extra-cost add-ons',
      ],
      specs: [
        { label: 'Laser', value: '12W blue diode (455 nm); optional 1.2W IR' },
        { label: 'Work area', value: '150 × 150 mm (IR: 150 × 135 mm)' },
        { label: 'Max speed', value: '10,000 mm/min (claimed)' },
        { label: 'Enclosure', value: 'Class 1, detachable acrylic cover, small access door' },
        { label: 'Features', value: 'Autofocus, built-in smoke filter, emergency stop' },
        { label: 'Software', value: 'Sculpfun app, LightBurn, LaserGRBL' },
        { label: 'Price', value: '12W $299 · dual 12W + 1.2W IR $499' },
      ],
      scores: { performance: 7.2, quality: 8.0, ease: 8.4, value: 9.0 },
      body: `## What is it?

The iCube Ultra is Sculpfun’s compact enclosed laser. It is a small Class 1 box with a 12W diode, autofocus and a built-in smoke filter, so you don’t need goggles. A dual version adds a 1.2W infrared module for marking metal.

It costs **$299** on the official store for the 12W version (list $599), or **$499** for the dual-laser version.

## Tests

3DWithUs’s Phil Macey tested the dual version (May 2026, updated September 2026):

- **3 mm plywood**: engraved at 60% and 6,000 mm/min, then cut at 100% and 500 mm/min.
- **5 mm plywood**: engraved at 80%, cut at 100% and 200 mm/min. Clean cut.
- Leather keyring, coated aluminium card, scratch paper and slate all engraved well.
- **IR module**: a stainless steel dog tag at 100% and 4,000 mm/min, with light cleanup.

The final score was 4.5/5.

## Limits

The bed is small: 150 × 150 mm with the diode, 150 × 135 mm with the IR module. There is no touchscreen, no reversible honeycomb, and curved items need magnets to hold them. The IR module marks metal; it does not engrave deeply. A camera ($59.99) and air assist kit ($69.99) are sold separately.

## Software

It works with LightBurn (as a GRBL device), LaserGRBL and Sculpfun’s app. 3DWithUs used LightBurn for the tests.

## Who should not buy it

- Anyone making signs or cutting large parts.
- Anyone who wants deep metal engraving: consider a fibre laser.

## vs rivals

- **vs Creality Falcon A1C ($269–$399):** a very similar concept. The A1C has a lifting platform for taller objects; the iCube Ultra has a built-in smoke filter and slightly more diode power. See [iCube Ultra vs Falcon A1C](/en/compare/sculpfun-icube-ultra-vs-creality-falcon-a1c/).
- **vs Sculpfun E1 ($499):** a much bigger 400 × 320 mm bed and a camera, for $200 more.

## Final thoughts

The iCube Ultra is a safe, capable first laser for small projects, and the $299 price is hard to beat.

## Sources

- [3DWithUs: Sculpfun iCube Ultra review](https://3dwithus.com/sculpfun-icube-ultra-review-diode-ir-laser-tests) (4.5/5, May 2026)
- [Notebookcheck: iCube Ultra deal](https://www.notebookcheck.com/Deal-Lasergravierer-iCube-Ultra-mit-bis-zu-zwei-Lasern-fuer-starkes-Schneiden-und-praezises-Gravieren-stark-reduziert.1152270.0.html)
- [Sculpfun official store: iCube Ultra](https://www.sculpfun.com/products/icube-ultra-portable-laser-engraving-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-e1',
      name: 'Sculpfun E1 12W',
      brand: 'Sculpfun',
      model: 'E1',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#ef6c00',
      released: 2026,
      price_usd: 499,
      image_url: cdn('files/e1_20260507.png?v=1778142604'),
      gallery: [cdn('files/E1-12W-1-main.jpg?v=1779421930'), cdn('files/12w.jpg?v=1780888834')],
      affiliate_url: sculpfun('sculpfun-e1-enclosed-dual-laser-engraving-machine'),
      affiliate_label: LABEL,
      title: 'Sculpfun E1 review (preview): an enclosed CoreXY laser with a camera for $499',
      summary: 'Sculpfun’s new Class 1 enclosed 12 W laser with CoreXY motion, HD camera and a 400 × 320 mm bed, $499. Promising specs, but no independent measured tests yet.',
      verdict: 'On paper the E1 is excellent value: Class 1 enclosure, CoreXY motion at 600 mm/s, an HD camera and a 400 × 320 mm bed for $499, plus a very fine 0.04 × 0.06 mm spot. We could not find an independent review with measured results yet, so this is a preview based on specs and early reviews. Expect thin wood and leather in one pass, but not thick cuts or bare metal unless you buy the Dual version.',
      best_for: 'Beginners who want an enclosed laser with a camera and a usable bed size',
      pros: [
        'Class 1 enclosure filters about 99% of laser light; interlock, E-stop, safety lock',
        'CoreXY motion, up to 600 mm/s',
        'Built-in HD camera for positioning',
        '400 × 320 mm bed, much bigger than compact enclosed lasers',
        'Very fine 0.04 × 0.06 mm spot for detailed engraving',
      ],
      cons: [
        'No independent measured tests yet (preview)',
        '12W: 6 mm+ hardwood is difficult; regular thick cutting will outgrow it',
        'No bare metal without the $949 Dual (12W + 3W IR) version',
        'Cannot cut clear acrylic (true of all blue diodes)',
        'Diode Laser Wiki questions whether its Class 1 claim passes German inspection',
      ],
      specs: [
        { label: 'Laser', value: '12W blue diode (455 nm); Dual adds 3W IR' },
        { label: 'Spot', value: '0.04 × 0.06 mm (claimed)' },
        { label: 'Work area', value: '400 × 320 mm' },
        { label: 'Motion', value: 'CoreXY, up to 600 mm/s' },
        { label: 'Features', value: 'HD camera, Class 1 enclosure, Hall-sensor lid interlock' },
        { label: 'Weight', value: '11.95 kg' },
        { label: 'Software', value: 'Sculpfun Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '12W $499 · Dual 12W + 3W IR $949' },
      ],
      scores: { performance: 7.0, quality: 7.6, ease: 8.2, value: 8.6 },
      body: `## What is it?

The E1 is Sculpfun’s first full-size enclosed laser, launched in May 2026. It combines a Class 1 enclosure, CoreXY motion and a built-in HD camera with a 12W diode and a 400 × 320 mm bed. The E1 Pro is the 21W version; we cover it [separately](/en/review/sculpfun-e1-pro/).

It costs **$499** on the official store (list $599). The Dual version, which adds a 3W infrared laser for bare metal, costs $949.

## A note on evidence

The E1 is new, and we could not find an independent review with measured cutting or engraving results. Laser Engraver Expert scores it 8.2/10, but its review lists claims without a test method. Treat the numbers below as manufacturer and early-review figures, not proven results. We will update this review when hands-on tests appear.

## What the specs promise

- **Spot**: 0.04 × 0.06 mm, finer than the 21W E1 Pro, which should help photo engraving.
- **Motion**: CoreXY at up to 600 mm/s, the same layout as Creality’s A1 series.
- **Cutting**: early reviews expect 3 mm plywood in 1–2 passes, 5 mm MDF in 2–3, thin leather in one, and 6 mm+ hardwood to be difficult. Sculpfun’s own page claims more.
- **Safety**: the cover filters about 99% of laser light, and a Hall sensor stops the laser when the lid opens. There is also a safety lock and emergency stop.

The Diode Laser Wiki points out it is unclear whether the design passes German inspection as Class 1, and advises German buyers not to rely on that rating.

## Who should not buy it

- Anyone who needs proven performance today: the Creality Falcon A1 has more track record.
- Anyone who wants to cut thick wood: get the E1 Pro or a 40W laser.
- Anyone who needs to mark bare metal: get the Dual version.

## vs rivals

- **vs Creality Falcon A1 ($549):** similar enclosed CoreXY design, 381 × 305 mm bed, 10W, with months of owner reports. See [E1 vs Falcon A1](/en/compare/sculpfun-e1-vs-creality-falcon-a1/).
- **vs Sculpfun iCube Ultra ($299):** much smaller bed, $200 cheaper.
- **vs xTool S1 20W:** more power and a bigger bed, at a higher price.

## Final thoughts

The E1 looks like a strong value enclosed laser, but wait for independent tests if you need certainty.

## Sources

- [Diode Laser Wiki: Sculpfun E1 enclosed laser](https://diode-laser-wiki.com/documentation/sculpfun-e1-enclosed-laser/) (specs)
- [Laser Engraver Expert: Sculpfun E1 review](https://laserengraverexpert.com/sculpfun-e1-review/) (8.2/10, no measured tests)
- [Geekbuying: Sculpfun E1 series comparison](https://www.geekbuying.com/geekgiz/2026/08/sculpfun-e1-series-comparison-which-enclosed-laser-engraver-is-right-for-you/)
- [Sculpfun official store: E1](https://www.sculpfun.com/products/sculpfun-e1-enclosed-dual-laser-engraving-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-e1-pro',
      name: 'Sculpfun E1 Pro 21W',
      brand: 'Sculpfun',
      model: 'E1 Pro',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#f57c00',
      released: 2026,
      price_usd: 799,
      image_url: cdn('files/E1_49718c7e-36fe-4871-925e-0b23354b0c69.png?v=1780651031'),
      gallery: [cdn('files/E1-21W-1.jpg?v=1779435728'), cdn('files/21W-2_81d00d2f-bdc0-4948-8698-7c72d5a078a6.jpg?v=1780480731')],
      affiliate_url: sculpfun('sculpfun-e1-pro-enclosed-dual-laser-engraving-machine'),
      affiliate_label: LABEL,
      title: 'Sculpfun E1 Pro review (preview): 21W in a Class 1 CoreXY enclosure',
      summary: 'The 21 W version of Sculpfun’s enclosed E1, with camera and a 400 × 320 mm bed, $799. Early reviews expect 8 mm basswood in one pass; no independent measured tests yet.',
      verdict: 'The E1 Pro puts a 21W diode in the same enclosed CoreXY body as the E1, which should roughly double cutting speed: early reviews expect 8 mm basswood and 6 mm plywood in one pass. Laser Engraver Expert scores it 8.6/10, but no independent review has measured results yet. Compared with the Creality Falcon A1 Pro, it is $300 cheaper with a bigger bed but no autofocus track record.',
      best_for: 'Crafters who want an enclosed laser that also cuts 6–8 mm wood',
      pros: [
        '21W diode in a Class 1 enclosure',
        'CoreXY motion, up to 600 mm/s',
        'Built-in HD camera; 400 × 320 mm bed',
        'Early reviews expect 8 mm basswood in one pass',
        '$300 cheaper than the Creality Falcon A1 Pro',
      ],
      cons: [
        'No independent measured tests yet (preview)',
        'Coarser 0.06 × 0.08 mm spot than the 12W E1',
        'No bare metal without the $1,149 Dual version',
        'Not built for all-day production use',
        'Class 1 claim questioned for German inspection (Diode Laser Wiki)',
      ],
      specs: [
        { label: 'Laser', value: '21W blue diode (455 nm); Dual adds 3W IR' },
        { label: 'Spot', value: '0.06 × 0.08 mm (claimed)' },
        { label: 'Work area', value: '400 × 320 mm' },
        { label: 'Motion', value: 'CoreXY, up to 600 mm/s' },
        { label: 'Features', value: 'HD camera, Class 1 enclosure, Hall-sensor lid interlock' },
        { label: 'Software', value: 'Sculpfun Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '21W $799 · Dual 21W + 3W IR $1,149' },
      ],
      scores: { performance: 7.8, quality: 7.6, ease: 8.2, value: 8.3 },
      body: `## What is it?

The E1 Pro is the 21W version of Sculpfun’s enclosed [E1](/en/review/sculpfun-e1/). It keeps the same Class 1 enclosure, CoreXY motion, HD camera and 400 × 320 mm bed, and swaps the 12W diode for a 21W one.

It costs **$799** on the official store (list $949). The Dual version with a 3W infrared laser for bare metal costs $1,149.

## A note on evidence

As with the E1, we could not find an independent review with measured results. Laser Engraver Expert scores it 8.6/10, but its cutting figures are claims without a test method. This is a preview based on specs and early reviews.

## What to expect

- **Cutting**: early reviews expect 8 mm basswood and 6 mm plywood in one pass (glue layers in plywood may need two), and dark acrylic in one pass. Sculpfun claims up to 12 mm.
- **Engraving**: the spot is 0.06 × 0.08 mm, a little coarser than the 12W E1. The Diode Laser Wiki claims the 21W comes close to the 3W IR module on quality, without a test to back it.
- **Safety**: same as the E1: filtering cover, Hall-sensor interlock, safety lock and emergency stop.

## Who should not buy it

- Anyone running a laser 8 hours a day: Laser Engraver Expert says it isn’t built for that.
- Anyone marking bare metal: get the Dual.
- Anyone who wants proven results today.

## vs rivals

- **vs Creality Falcon A1 Pro ($1,099):** 20W with autofocus, touchscreen and several independent tests, but a smaller 358 × 268 mm bed. See [E1 Pro vs Falcon A1 Pro](/en/compare/sculpfun-e1-pro-vs-creality-falcon-a1-pro/).
- **vs xTool S1:** 20W or 40W, bigger 498 × 330 mm bed and more mature software, for more money.
- **vs Sculpfun E1 ($499):** finer spot, about half the cutting power, $300 cheaper.

## Final thoughts

The E1 Pro looks like the best-value enclosed 20W-class laser on paper. If you can wait, let independent testers confirm the cutting claims first.

## Sources

- [Laser Engraver Expert: Sculpfun E1 Pro review](https://laserengraverexpert.com/sculpfun-e1-pro-review/) (8.6/10, no measured tests)
- [Diode Laser Wiki: Sculpfun E1 enclosed laser](https://diode-laser-wiki.com/documentation/sculpfun-e1-enclosed-laser/) (specs)
- [TechnicalTrendy: Sculpfun E1 Pro now shipping](https://www.technicaltrendy.com/sculpfun-e1-pro-now-shipping-review/)
- [Sculpfun official store: E1 Pro](https://www.sculpfun.com/products/sculpfun-e1-pro-enclosed-dual-laser-engraving-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'sculpfun-s70-max-vs-creality-falcon2-pro-60w',
      title: 'Sculpfun S70 Max vs Creality Falcon2 Pro 60W: biggest diode cutters',
      products: ['sculpfun-s70-max', 'creality-falcon2-pro-60w'],
      intro: 'The two most powerful diode lasers we cover. The S70 Max is open-frame with a huge bed; the Falcon2 Pro 60W is enclosed.',
      verdict: 'Choose the S70 Max ($1,599) for large sheets and maximum power, and budget for an enclosure and extraction. Choose the Falcon2 Pro 60W ($1,899) if you want an enclosed machine out of the box and your work fits a 400 × 415 mm bed.',
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-sf-a9-vs-creality-falcon2-40w',
      title: 'Sculpfun SF-A9 vs Creality Falcon2 40W: best budget 40W cutter',
      products: ['sculpfun-sf-a9', 'creality-falcon2-40w'],
      intro: 'Two open-frame 40W diode lasers under $800.',
      verdict: 'Pick the SF-A9 ($799.99) for proven cutting: it measured 41W and beat the xTool S1 on 6 mm plywood. Pick the Falcon2 40W ($639) to save $160 and get a slightly bigger bed, with fewer independent tests behind it.',
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-s30-pro-max-vs-creality-falcon2-22w',
      title: 'Sculpfun S30 Pro Max vs Creality Falcon2 22W: 20W-class all-rounders',
      products: ['sculpfun-s30-pro-max', 'creality-falcon2-22w'],
      intro: 'Two popular open-frame lasers around 20W with air assist.',
      verdict: 'Choose the S30 Pro Max ($599.99) for its rotary-and-honeycomb bundle, per-layer air assist and tight spot. Choose the Falcon2 22W ($549) for a bigger 400 × 415 mm standard bed and stronger safety sensors.',
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-icube-ultra-vs-creality-falcon-a1c',
      title: 'Sculpfun iCube Ultra vs Creality Falcon A1C: best compact enclosed laser',
      products: ['sculpfun-icube-ultra', 'creality-falcon-a1c'],
      intro: 'Two small Class 1 lasers with 150 × 150 mm beds and optional IR modules.',
      verdict: 'Pick the iCube Ultra ($299) for 12W, autofocus and a built-in smoke filter. Pick the Falcon A1C ($269–$399) if you engrave taller objects: its lifting platform gives 148 mm of clearance.',
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-e1-vs-creality-falcon-a1',
      title: 'Sculpfun E1 vs Creality Falcon A1: enclosed CoreXY lasers around $500',
      products: ['sculpfun-e1', 'creality-falcon-a1'],
      intro: 'Two enclosed CoreXY lasers with cameras at about the same price.',
      verdict: 'The E1 ($499) has more power (12W vs 10W), a slightly bigger bed and a finer spot on paper. The Falcon A1 ($549) has months of real owner reports. Choose the A1 if you want proven reliability now.',
      updated_at: DATE,
    },
    {
      slug: 'sculpfun-e1-pro-vs-creality-falcon-a1-pro',
      title: 'Sculpfun E1 Pro vs Creality Falcon A1 Pro: enclosed 20W lasers',
      products: ['sculpfun-e1-pro', 'creality-falcon-a1-pro'],
      intro: 'Enclosed 20W-class diode lasers with cameras. The E1 Pro is newer and $300 cheaper.',
      verdict: 'Choose the E1 Pro ($799) for value and a bigger 400 × 320 mm bed. Choose the Falcon A1 Pro ($1,099) for autofocus, a touchscreen and independent test results.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-budget-laser-engravers',
      title: 'The best budget laser engravers under $800',
      category: 'laser-engravers',
      intro: 'Affordable diode lasers from Sculpfun, Creality and LaserPecker, compared using independent tests and official store prices on 31 October 2026.',
      items: [
        { slug: 'sculpfun-sf-a9', award: 'Best cutter', note: 'Measured 41W; 10 mm plywood in one pass. $799.99.' },
        { slug: 'sculpfun-s30-pro-max', award: 'Best all-rounder', note: 'Tight spot, auto air assist, rotary included. $599.99.' },
        { slug: 'sculpfun-icube-ultra', award: 'Best compact enclosed', note: '12W, autofocus and smoke filter for $299.' },
        { slug: 'creality-falcon-a1c', award: 'Best for tall objects', note: 'Enclosed, 148 mm clearance, from $269.' },
        { slug: 'creality-falcon-a1', award: 'Best proven enclosed', note: '381 × 305 mm bed, reliable in daily use. $549.' },
        { slug: 'creality-falcon2-22w', award: 'Best open-frame detail', note: '4.6/5 from 3DWithUs. $549.' },
        { slug: 'creality-cr-laser-falcon-10w', award: 'Cheapest big bed', note: '400 × 415 mm for $205.' },
      ],
      updated_at: DATE,
    },
  ],
};
