// OMTech batch: K40+, Polar Lite, Pronto 35 60W, Maker AF2028-60, Galvo 30W Split. Researched 7 November 2026.
// Prices and images: omtech.com/products.json read in a browser on 7 Nov 2026 (US store, USD).
// Affiliate: OMTech UpPromote link (sca_ref). Test results: the sources listed in each article. Most OMTech coverage
// comes from affiliate sites or owner ratings rather than measured tests, so most articles are marked as previews.
const REF = 'sca_ref=11131467.YB8h4afV5n&utm_source=affiliate&utm_medium=promotors&utm_campaign=liam-johnson';
const omtech = (handle) => `https://omtech.com/products/${handle}?${REF}`;
const cdn = (path) => `https://cdn.shopify.com/s/files/1/0280/0012/4993/files/${path}`;
const DATE = '2026-11-07 10:00:00';
const LABEL = 'Check price at OMTech';

export default {
  products: [
    {
      slug: 'omtech-k40-plus',
      name: 'OMTech K40+ 45W',
      brand: 'OMTech',
      model: 'K40+',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#1565c0',
      released: 2023,
      price_usd: 579.99,
      image_url: cdn('2_b6292a64-1f8e-4296-ad18-1e93793f2c00.jpg?v=1751600467'),
      gallery: [cdn('1_c6238c7a-6b4d-404a-872e-6ade7bc50f7b.jpg?v=1751600467')],
      affiliate_url: omtech('40w-co2-laser-engraver-cutter-usb-032b-us'),
      affiliate_label: LABEL,
      title: 'OMTech K40+ review: the cheapest way into a real CO2 laser',
      summary: 'A desktop CO2 laser with an 8 × 12 in bed for $579.99. It engraves glass, slate and clear acrylic that diode lasers can’t touch, but needs mirror alignment and patience.',
      verdict: 'The K40+ is the cheapest branded CO2 laser you can buy, and it does things diode lasers can’t: Go Laser Go engraved clear acrylic, glass and ceramic tile, and engraved a coaster in under 5 minutes. The trade-offs are classic K40: a small bed, fiddly mirror alignment, a lid that cuts the beam but not the motion, and owner reports that support prefers refunds to repairs. For a tinkerer on a budget it is great value.',
      best_for: 'Budget makers who want CO2 engraving on glass, acrylic and slate',
      pros: [
        'CO2 laser for $579.99 (list $1,099.99)',
        'Engraves clear acrylic, glass, slate and ceramic tile (Go Laser Go)',
        'Wood coaster engraved in 4 min 45 s; slate in 6 min 40 s',
        'Solid enclosed box; works with LightBurn',
        'Chiller package available for $739.99',
      ],
      cons: [
        'Small 8 × 12 in (203 × 305 mm) bed',
        'Mirror alignment is fiddly and needs access to the back',
        'Opening the lid stops the laser but not the head, ruining the job',
        'Owners say support often offers refunds or credit rather than fixes (Machines for Makers, 3.9/5)',
        'Cuts only thin material: OMTech quotes up to 1/8 in',
      ],
      specs: [
        { label: 'Laser', value: 'CO2 glass tube (listed as 45W; earlier units 40W)' },
        { label: 'Work area', value: '8 × 12 in (203 × 305 mm)' },
        { label: 'Max speed', value: '300 mm/s (listed)' },
        { label: 'Focus', value: 'Manual' },
        { label: 'Software', value: 'LightBurn compatible' },
        { label: 'Price', value: 'Standard $579.99 · LightBurn $679.99 · Chiller $739.99' },
      ],
      scores: { performance: 6.8, quality: 6.6, ease: 6.0, value: 8.6 },
      body: `## What is it?

The K40+ is OMTech’s version of the classic "K40" desktop CO2 laser: a sealed glass tube, mirrors that steer the beam to the head, and an enclosed box with an 8 × 12 inch bed. OMTech now lists it as 45W; most reviews tested the earlier 40W version.

On 7 November 2026 it costs **$579.99** on OMTech’s US store (list $1,099.99), $679.99 with LightBurn, or $739.99 with a chiller.

## Why a CO2 laser?

A CO2 laser’s 10.6 µm wavelength is absorbed by materials that blue diode lasers mostly pass through or bounce off: clear acrylic, glass, ceramic, and stone. That is the main reason to buy a K40+ over a diode laser at a similar price.

## Tests

Go Laser Go ran a set of timed jobs:

| Job | Settings | Time |
|---|---|---|
| Wood coaster engraving | 100 mm/s, 20% | 4 min 45 s |
| MDF coaster engraving | 100 mm/s, 10% | 8 min 21 s |
| MDF coaster, engrave and cut | cut at 5 mm/s, 20% | 14 min 45 s |
| Slate coaster | 100 mm/s, 20% | 6 min 40 s |
| Ceramic tile | 125 mm/s, 20% | 6 min |
| Clear acrylic | 275 mm/s, 20% | 3 min 40 s |
| Black acrylic | 5 mm/s, 100% | 8 min |

The reviewer compared the coaster jobs with roughly 25 minutes on an xTool F1. OMTech rates cutting at up to 1/8 inch, so this is an engraver that cuts thin sheet, not a cutter.

## Problems

- **Alignment**: the mirrors need careful alignment and access to the back of the machine.
- **Lid interlock**: opening the lid stops the laser, but the head keeps moving, so the job is lost.
- **Visibility**: the lid is hard to see through; Go Laser Go added a camera.
- **Power setting**: the current control confused the reviewer, who ran at 70% against the manual’s 100%.
- **Support**: on Machines for Makers, owners rate it 3.9/5 from 10 reviews; one says support is quick to refund rather than fix problems.

## Who should not buy it

- Anyone who wants to cut 1/4 inch plywood: get a 55–60W CO2 laser.
- Anyone who wants plug-and-play: an enclosed diode like the Creality Falcon A1 is simpler.

## vs rivals

- **vs Creality Falcon A1 ($549):** pre-assembled, camera, larger bed, but cannot mark clear acrylic or glass. See [K40+ vs Falcon A1](/en/compare/omtech-k40-plus-vs-creality-falcon-a1/).
- **vs OMTech Polar Lite ($2,199.99):** a much more refined desktop CO2 with autofocus and a bigger bed.

## Final thoughts

The K40+ is a tinkerer’s CO2 laser. If you enjoy setting up machines and want to engrave glass and acrylic cheaply, it is excellent value.

## Sources

- [Go Laser Go: OMTech K40+ review and projects](https://golasergo.com/our-omtech-k40-review-projects/) (hands-on, affiliate link)
- [Machines for Makers: OMTech K40+](https://www.machinesformakers.com/products/omtech-k40) (owner ratings)
- [OMTech US store: K40+](https://omtech.com/products/40w-co2-laser-engraver-cutter-usb-032b-us) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'omtech-polar-lite-55w',
      name: 'OMTech Polar Lite 55W',
      brand: 'OMTech',
      model: 'Polar Lite',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#0d47a1',
      released: 2025,
      price_usd: 2199.99,
      featured: true,
      image_url: cdn('1x_1_f85771a2-9c79-436f-9b47-b7967cd5564d.webp?v=1747366149'),
      gallery: [cdn('1x_1_75fe54c2-d83c-4c71-9437-b2ca8018b602.webp?v=1747366149')],
      affiliate_url: omtech('omtech-polar-lite-55w-desktop-co2-laser-engraver-and-cutter'),
      affiliate_label: LABEL,
      title: 'OMTech Polar Lite review (preview): a desktop CO2 laser with autofocus for $2,199',
      summary: 'A desktop 55 W CO2 laser with camera, autofocus, built-in water cooling and a pass-through slot, $2,199.99. Strong value on paper; independent tests of this exact model are scarce.',
      verdict: 'The Polar Lite packs a 55W CO2 tube, 5MP camera, autofocus, built-in water cooling and a pass-through slot into a desktop box for $2,199.99. CO2 cuts clear acrylic and thicker wood far faster than diode lasers. We found no independent hands-on test of this exact model; its predecessor, the Polar 350, impressed MakerHacks but needed driver and safety-switch fixes. Treat this as a promising preview.',
      best_for: 'Small businesses moving up from a diode laser to desktop CO2',
      pros: [
        '55W CO2: cuts and engraves clear acrylic, glass and leather',
        'Autofocus and a 5MP camera for placement',
        'Built-in 2 L water cooling: no separate chiller',
        'Pass-through slot for long boards',
        '$2,199.99, well below most desktop CO2 rivals',
      ],
      cons: [
        'No independent hands-on test of the Lite found (preview)',
        'Small 20.1 × 11.8 in bed',
        'Glass tube wears out (11,000 h listed) and needs eventual replacement',
        'Predecessor needed driver fixes and a safety-switch shim (MakerHacks)',
        'Needs venting or a fume extractor',
      ],
      specs: [
        { label: 'Laser', value: '55W CO2 glass tube (11,000 h listed life)' },
        { label: 'Work area', value: '20.1 × 11.8 in' },
        { label: 'Max speed', value: '500 mm/s (listed)' },
        { label: 'Features', value: 'Autofocus, 5MP camera, built-in water cooling, pass-through' },
        { label: 'Software', value: 'LightBurn' },
        { label: 'Price', value: 'Standard $2,199.99 · Rotary $2,299.99 · LightBurn + Rotary $2,499.99' },
      ],
      scores: { performance: 8.2, quality: 7.6, ease: 7.8, value: 8.4 },
      body: `## What is it?

The Polar Lite is OMTech’s entry desktop CO2 laser. It replaced the Polar 350 and keeps the idea of a compact all-in-one box: a 55W glass tube, built-in water cooling, a camera, autofocus and a pass-through slot.

It costs **$2,199.99** on OMTech’s US store on 7 November 2026 (list $2,499.99), $2,299.99 with a rotary, or $2,499.99 with LightBurn and a rotary.

## A note on evidence

We found no independent hands-on test of the Polar Lite itself. LaserBurn AI compares it with the Polar 2 using published specs and says it did not test the units. MakerHacks tested its predecessor, the Polar 350 50W, which is useful background. Treat this as a preview.

## What the specs promise

- **55W CO2 tube**, 500 mm/s listed speed, 11,000-hour listed tube life.
- **20.1 × 11.8 in bed** with a 15.8 × 0.3 in pass-through slot.
- **5MP camera and autofocus**, which the Polar 350 lacked.
- **2 L built-in water cooling**, so no external chiller.

LaserBurn AI recommends the Polar Lite for most first-time CO2 buyers, and says the far pricier Polar 2 RF ($4,999.99) only makes sense for engraving-heavy shops.

## Lessons from the Polar 350

MakerHacks liked the Polar 350’s built-in chiller and fan, LightBurn support and easy setup, and called it the cheapest branded desktop 50W CO2 at the time. It also hit problems: LightBurn didn’t detect the machine until a USB driver fix, the laser wouldn’t fire until crumb-tray safety switches were shimmed, a loose nozzle caused self-lasering, and camera calibration was rough. It cut about 10 mm acrylic, plywood and basswood. Check whether these are fixed on the Lite during your return window.

## Who should not buy it

- Anyone who needs a big bed: look at the AF2028 or Pronto series.
- Anyone without ventilation.

## vs rivals

- **vs Creality Falcon2 Pro 40W ($1,349):** cheaper diode laser with a bigger bed, but it can’t cut clear acrylic or engrave glass well. See [Polar Lite vs Falcon2 Pro](/en/compare/omtech-polar-lite-55w-vs-creality-falcon2-pro/).
- **vs xTool P2:** a more polished desktop CO2 with a larger bed, at a much higher price.
- **vs OMTech K40+ ($579.99):** a quarter of the price, far more tinkering.

## Final thoughts

On paper the Polar Lite is the best-value desktop CO2 laser OMTech sells. Buy with a good return window and check the setup quirks its predecessor had.

## Sources

- [LaserBurn AI: OMTech Polar 2 RF vs Polar Lite](https://www.laserburnai.com/blog/omtech-polar-review) (spec-based, affiliate)
- [MakerHacks: OMTech Polar 350 review](https://www.makerhacks.com/omtech-polar-350-review/) (predecessor, hands-on)
- [OMTech US store: Polar Lite 55W](https://omtech.com/products/omtech-polar-lite-55w-desktop-co2-laser-engraver-and-cutter) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'omtech-pronto-35-60w',
      name: 'OMTech Pronto 35 60W',
      brand: 'OMTech',
      model: 'Pronto 35',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#1e88e5',
      released: 2024,
      price_usd: 3439.99,
      image_url: cdn('1_9c8446ce-4beb-445b-abe4-5d417506e9a6.jpg?v=1742868554'),
      gallery: [cdn('2_320e4faa-a1db-411c-aecf-58b0610bb6bd.jpg?v=1742868554')],
      affiliate_url: omtech('omtech-pronto-35-60w-co2-laser-cutter-and-engraver-with-autofocus'),
      affiliate_label: LABEL,
      title: 'OMTech Pronto 35 60W review (preview): a production CO2 cabinet laser with autofocus',
      summary: 'A cabinet CO2 laser with a 27.6 × 19.7 in bed, autofocus and pass-through, from $3,439.99. Built for selling work; huge, heavy and needs a chiller and ventilation.',
      verdict: 'The Pronto 35 is the CO2 laser makers buy when they start selling: a big 27.6 × 19.7 in bed, one-click autofocus, pass-through and a Class 1 cabinet. LaserBurn AI scores the Pronto range 4.7/5, and Pardesco’s Pronto 45 tube has run 6–8 hour days for over 18 months. Both are affiliate sites without measured tests, so this is a preview. Budget for the chiller package, ventilation and floor space.',
      best_for: 'Small businesses cutting and engraving in volume',
      pros: [
        'Large 27.6 × 19.7 in bed with pass-through',
        'One-click autofocus and 8.7 in workpiece height',
        'Enclosed Class 1 cabinet; LightBurn support',
        '60W cuts 1/4 in plywood and clear acrylic in one pass, per LaserBurn AI',
        'Owner report of a Pronto tube surviving 18+ months of daily production',
      ],
      cons: [
        'No measured independent tests found (preview)',
        'Very heavy (467–492 lb) and about 40 in deep',
        'Standard package has no chiller: the chiller package costs $320 more',
        'Needs proper ventilation',
        'LightBurn Pro is extra',
      ],
      specs: [
        { label: 'Laser', value: '60W CO2 glass tube (12,000 h listed life)' },
        { label: 'Work area', value: '27.6 × 19.7 in, with pass-through' },
        { label: 'Max speed', value: '1,000 mm/s (listed)' },
        { label: 'Features', value: 'Autofocus, 8.7 in workpiece height, Class 1 cabinet' },
        { label: 'Weight', value: 'About 467–492 lb' },
        { label: 'Price', value: 'Standard $3,439.99 · LightBurn $3,639.99 · Chiller $3,759.99' },
      ],
      scores: { performance: 8.6, quality: 8.0, ease: 7.4, value: 7.8 },
      body: `## What is it?

The Pronto series is OMTech’s line of cabinet CO2 lasers for production work. The Pronto 35 60W is the entry model, with a 27.6 × 19.7 inch bed, autofocus and a pass-through door.

On 7 November 2026 it costs **$3,439.99** (Standard, no chiller), $3,639.99 with LightBurn, or $3,759.99 with a chiller on OMTech’s US store. LaserBurn AI listed it from $2,999.99 a few weeks earlier, so the price moves often.

## A note on evidence

The most detailed Pronto coverage comes from LaserBurn AI and Pardesco, both written by the same maker-entrepreneur and both affiliate sites. Neither publishes measured tests. Treat this as a preview.

## What reviewers report

- **LaserBurn AI** scores the Pronto range 4.7/5 and calls it the best value for makers who sell their work. It says 60W comfortably cuts 1/4 inch plywood and clear acrylic in one pass, and 90–100W handles 3/8 to 1/2 inch stock at production speed. These are the author’s experience, not logged tests.
- **Pardesco** uses a Pronto 45 100W for geometric art. Its tube had run more than 18 months of 6–8 hour days, and the machine paid for itself within a year. It stresses that setup, alignment, cooling and extraction are the real ongoing costs.

## What to budget for

- **Chiller**: the Standard package has none. LaserBurn AI warns this is a common trap; the chiller package adds $320.
- **Space**: 467–492 lb and about 40 inches deep. Measure doors and floors.
- **Ventilation**: mandatory for CO2 cutting.
- **Software**: LightBurn Pro is about $199 extra.

## Who should not buy it

- Hobbyists with occasional jobs: a Polar Lite or K40+ is far smaller and cheaper.
- Anyone renting a small space without ventilation.

## vs rivals

- **vs OMTech Maker AF2028-60 (from $2,789.99):** similar power and autofocus, simpler build, slightly smaller bed. See [Pronto 35 vs AF2028-60](/en/compare/omtech-pronto-35-60w-vs-omtech-af2028-60/).
- **vs Glowforge Pro:** smaller bed, cloud software, far higher price.

## Final thoughts

The Pronto 35 looks like strong value for a production CO2 laser, but buy the chiller package and plan the space before you order.

## Sources

- [LaserBurn AI: OMTech Pronto review](https://www.laserburnai.com/blog/omtech-pronto-review) (affiliate, 4.7/5)
- [Pardesco: OMTech laser cutter review](https://pardesco.com/blogs/technology-art-design/omtech-laser-cutter-reviews) (owner, affiliate)
- [OMTech US store: Pronto 35 60W](https://omtech.com/products/omtech-pronto-35-60w-co2-laser-cutter-and-engraver-with-autofocus) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'omtech-af2028-60',
      name: 'OMTech Maker AF2028-60',
      brand: 'OMTech',
      model: 'AF2028-60',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#1976d2',
      released: 2023,
      price_usd: 2789.99,
      image_url: cdn('2_41212c16-ce22-4fc2-bd48-2a4bc8c924e9.jpg?v=1747122941'),
      gallery: [cdn('1_3c159995-fba7-444e-90e7-92adfc3dc568.jpg?v=1747122941')],
      affiliate_url: omtech('af2028-60-60w-co2-laser-engraver-cutting-machine-with-20-x-28-working-area'),
      affiliate_label: LABEL,
      title: 'OMTech Maker AF2028-60 review (preview): a 60W CO2 workhorse with a 20 × 28 in bed',
      summary: 'A 60 W CO2 laser with autofocus, pass-through and a 20 × 28 in bed, from $2,789.99. Owners like the power and size (4.2/5); support and documentation draw complaints.',
      verdict: 'The AF2028-60 is OMTech’s popular step into big-bed CO2: 60W, autofocus, pass-through and a 20 × 28 inch bed for under $3,000. Owners on Machines for Makers rate it 4.2/5 and praise power and bed size, but mention weak air assist and cooling, no camera and patchy documentation and service. We found no measured independent test, so this is a preview.',
      best_for: 'Makers who need a big CO2 bed on a budget and can handle setup',
      pros: [
        'Large 20 × 28 in (508 × 711 mm) bed',
        '60W CO2 with autofocus and pass-through',
        'Owner rating 4.2/5 from 12 reviews (Machines for Makers)',
        'Works with LightBurn',
        'From $2,789.99',
      ],
      cons: [
        'No measured independent test found (preview)',
        'No built-in camera; owners add their own',
        'Owners report weak air assist and cooling',
        'Documentation and service access criticised',
        'Glass tube needs a chiller and periodic maintenance',
      ],
      specs: [
        { label: 'Laser', value: '60W CO2 glass tube' },
        { label: 'Work area', value: '20 × 28 in (508 × 711 mm), pass-through' },
        { label: 'Max speed', value: '600 mm/s (listed)' },
        { label: 'Focus', value: 'Autofocus' },
        { label: 'Software', value: 'LightBurn (RDWorks also supplied)' },
        { label: 'Price', value: 'LightBurn package $2,789.99 · Chiller package $3,119.99' },
      ],
      scores: { performance: 8.2, quality: 7.2, ease: 7.0, value: 8.2 },
      body: `## What is it?

The Maker AF2028-60 is a 60W CO2 laser in OMTech’s mid-range Maker line, with a 20 × 28 inch bed, autofocus and a pass-through door.

On 7 November 2026 OMTech’s US store lists it at **$2,789.99** with LightBurn, or $3,119.99 with a chiller. Machines for Makers tracked prices between $2,399 and $3,199.99 over the past year.

## A note on evidence

We found no independent measured test. Machines for Makers collects 12 owner reviews (4.2/5), and The Crafty Catsman and LaserBurn AI write buyer guides from specs and experience. Treat this as a preview.

## What owners report

- **Liked**: power, bed size and ease of use once set up.
- **Disliked**: no built-in camera (owners added one), air assist and cooling that needed upgrading, poor documentation, hard-to-reach parts for service, and one owner who said it needed heavy customisation.

Buyer guides add that the glass tube needs a serious chiller in a warm garage, and that most owners switch from the supplied RDWorks to LightBurn. It still uses a glass tube, which means more maintenance than RF-tube machines.

## Who should not buy it

- Beginners who want an all-in-one: the Polar Lite or a Pronto with camera is easier.
- Anyone without space for a large machine and a chiller.

## vs rivals

- **vs OMTech Pronto 35 60W ($3,439.99):** a bigger, heavier cabinet with more polish. See [Pronto 35 vs AF2028-60](/en/compare/omtech-pronto-35-60w-vs-omtech-af2028-60/).
- **vs OMTech Maker MF2028-80 90W (from $2,699.99):** more power for similar money; check which package includes autofocus.

## Final thoughts

The AF2028-60 offers a lot of bed and power for the money. Budget for a chiller, better air assist and a camera, and expect to do your own troubleshooting.

## Sources

- [Machines for Makers: OMTech AF2028-60](https://www.machinesformakers.com/products/omtech-af2028-60) (owner ratings, price history)
- [The Crafty Catsman: OMTech 60W CO2 guide](https://www.thecraftycatsman.com/omtech-60w-co2-laser-guide/)
- [MellowPine: OMTech 60W CO2 laser review](https://mellowpine.com/omtech-60w-co2-laser-review/)
- [OMTech US store: AF2028-60](https://omtech.com/products/af2028-60-60w-co2-laser-engraver-cutting-machine-with-20-x-28-working-area) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'omtech-galvo-30w-split',
      name: 'OMTech Galvo 30W Split Fiber',
      brand: 'OMTech',
      model: 'Galvo 30W Split',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#263238',
      released: 2024,
      price_usd: 2199.99,
      image_url: cdn('1_293c253c-48cd-4e0f-8202-7204b8e79f5b.jpg?v=1713519383'),
      gallery: [cdn('4_50223fc5-d94a-4835-8151-0c6c1fa08455.jpg?v=1729759641')],
      affiliate_url: omtech('30w-fiber-laser-engraver-cutter-usb-30w2-us'),
      affiliate_label: LABEL,
      title: 'OMTech Galvo 30W Split review (preview): a budget fiber laser for metal marking',
      summary: 'A 30 W Raycus fiber galvo marker with a 175 × 175 mm field, $2,199.99. Fast, permanent metal marking; manual focus, no enclosure, and black-and-white only.',
      verdict: 'The Galvo 30W Split is a straightforward fiber laser for marking metal: a Raycus 30W source, a 175 mm field and LightBurn support for $2,199.99. It marks steel, aluminium and brass permanently and fast, but it can’t make colour or black-oxide marks, focus is manual, and there is no enclosure or extraction. EngraverHQ’s research found four different OMTech products sold as "30W fiber", so check the SKU. A preview without measured tests.',
      best_for: 'Small shops engraving metal tags, tools and tumblers',
      pros: [
        'Raycus 30W fiber source, 100,000-hour listed life',
        'Larger 175 × 175 mm field than the compact 30W models',
        'LightBurn and EzCad2 compatible',
        'Clear bundle options with rotary or LightBurn',
        '$2,199.99 (list $3,999.99)',
      ],
      cons: [
        'No measured independent test found (preview)',
        'Black-and-white marking only: no colour or black oxide (needs MOPA)',
        'Manual focus with an external locator',
        'No enclosure, fume extraction or rotary in the base package',
        'Four different OMTech products are called "30W fiber"; easy to buy the wrong one',
      ],
      specs: [
        { label: 'Laser', value: '30W fiber, Raycus source, 1064 nm' },
        { label: 'Field', value: '175 × 175 mm (6.9 × 6.9 in)' },
        { label: 'Speed', value: 'Up to 7,000 mm/s (listed)' },
        { label: 'Focus', value: 'Manual, with red-dot locator' },
        { label: 'Software', value: 'EzCad2, LightBurn' },
        { label: 'Price', value: 'Machine $2,199.99 · with 70mm rotary $2,329.99 · with LightBurn $2,399.99' },
      ],
      scores: { performance: 8.2, quality: 7.6, ease: 6.8, value: 8.2 },
      body: `## What is it?

The Galvo 30W Split is a fiber laser marker: mirrors (a galvo head) steer a 1064 nm beam from a Raycus 30W source across a 175 mm square field. "Split" means the laser source and controller sit in a separate box from the head and column. Fiber lasers mark metal permanently and very fast, which diode and CO2 lasers can’t do well.

It costs **$2,199.99** on OMTech’s US store on 7 November 2026 (list $3,999.99), $2,329.99 with a 70 mm rotary, or $2,399.99 with LightBurn.

## A note on evidence

EngraverHQ’s review is research-based and says it didn’t test the machine. Machines for Makers lists specs and owner ratings. We found no independent measured test, so treat this as a preview.

## What to know before buying

- **Which "30W fiber"?** EngraverHQ points out OMTech sells four different products under that name: this Split model, a Compact 30W ($1,699.99), a MOPA 30W and others. The Split has the larger field.
- **Black-and-white only**: a standard Q-switched fiber marks metal in black, white and grey. Colour marks on stainless steel need a MOPA laser.
- **Manual focus**: you set height with a crank and a red-dot locator.
- **No enclosure**: fiber light is dangerous to eyes; you need fiber-rated goggles or an enclosure, and fume extraction.

## Who should not buy it

- Anyone who wants colour on stainless steel: pick a MOPA.
- Anyone who mostly works with wood or acrylic: CO2 or diode is better.

## vs rivals

- **vs Monport GM 30W Pro (~$1,999.99):** similar class with one-touch autofocus.
- **vs Creality Falcon T1 (from $2,499):** enclosed galvo with swappable fiber, diode and UV modules, at a higher price. See [Galvo 30W vs Falcon T1](/en/compare/omtech-galvo-30w-split-vs-creality-falcon-t1/).
- **vs LaserPecker LP5:** portable 20W fiber, higher price.

## Final thoughts

For straightforward metal marking on a budget, the Galvo 30W Split is a sensible buy. Add goggles, extraction and a rotary if you engrave tumblers.

## Sources

- [EngraverHQ: OMTech 30W fiber laser review](https://www.engraverhq.com/reviews/omtech-30w-fiber-laser-review/) (research-based, affiliate)
- [Machines for Makers: OMTech Galvo 30W Split](https://www.machinesformakers.com/products/omtech-galvo-30w-split)
- [OMTech US store: Galvo 30W Split](https://omtech.com/products/30w-fiber-laser-engraver-cutter-usb-30w2-us) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'omtech-k40-plus-vs-creality-falcon-a1',
      title: 'OMTech K40+ vs Creality Falcon A1: cheap CO2 or easy diode?',
      products: ['omtech-k40-plus', 'creality-falcon-a1'],
      intro: 'Two enclosed lasers around $550–$600. The K40+ is a CO2 laser; the Falcon A1 is a 10W diode.',
      verdict: 'Choose the K40+ ($579.99) to engrave clear acrylic, glass, slate and ceramic, if you don’t mind aligning mirrors. Choose the Falcon A1 ($549) for a pre-assembled, low-maintenance machine with a camera and a bigger bed for wood and leather.',
      updated_at: DATE,
    },
    {
      slug: 'omtech-polar-lite-55w-vs-creality-falcon2-pro',
      title: 'OMTech Polar Lite vs Creality Falcon2 Pro: desktop CO2 or enclosed diode?',
      products: ['omtech-polar-lite-55w', 'creality-falcon2-pro'],
      intro: 'Two enclosed lasers for small businesses. The Polar Lite is a 55W CO2; the Falcon2 Pro is a 22W or 40W diode.',
      verdict: 'Pick the Polar Lite ($2,199.99) for clear acrylic, glass and faster cutting of thicker material. Pick the Falcon2 Pro 40W ($1,349) for a lower price, a bigger 400 × 415 mm bed and no glass tube to maintain.',
      updated_at: DATE,
    },
    {
      slug: 'omtech-pronto-35-60w-vs-omtech-af2028-60',
      title: 'OMTech Pronto 35 vs Maker AF2028-60: which 60W CO2?',
      products: ['omtech-pronto-35-60w', 'omtech-af2028-60'],
      intro: 'OMTech’s two popular 60W CO2 lasers with autofocus and pass-through.',
      verdict: 'The AF2028-60 (from $2,789.99) is the cheaper way to a 20 × 28 in bed. The Pronto 35 ($3,439.99) is the more refined cabinet for daily production. Budget for a chiller with either.',
      updated_at: DATE,
    },
    {
      slug: 'omtech-galvo-30w-split-vs-creality-falcon-t1',
      title: 'OMTech Galvo 30W Split vs Creality Falcon T1: fiber lasers for metal',
      products: ['omtech-galvo-30w-split', 'creality-falcon-t1'],
      intro: 'Two galvo lasers for marking metal: a classic open fiber marker and an enclosed modular machine.',
      verdict: 'Choose the OMTech ($2,199.99) for the lowest price on straightforward metal marking. Choose the Falcon T1 (from $2,499) for an enclosure, autofocus, a camera and the option of diode, MOPA and UV modules.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-co2-and-fiber-lasers',
      title: 'The best CO2 and fiber lasers for makers',
      category: 'laser-engravers',
      intro: 'CO2 lasers cut clear acrylic and engrave glass; fiber lasers mark metal. These are the models we have reviewed, with official prices on 7 November 2026.',
      items: [
        { slug: 'omtech-polar-lite-55w', award: 'Best desktop CO2', note: 'Autofocus, camera and built-in cooling for $2,199.99.' },
        { slug: 'omtech-k40-plus', award: 'Cheapest CO2', note: 'Glass and acrylic engraving for $579.99, if you can align mirrors.' },
        { slug: 'omtech-af2028-60', award: 'Biggest bed for the money', note: '20 × 28 in and 60W from $2,789.99.' },
        { slug: 'omtech-pronto-35-60w', award: 'Best for production', note: 'Cabinet laser with autofocus and pass-through.' },
        { slug: 'omtech-galvo-30w-split', award: 'Best budget fiber', note: 'Metal marking for $2,199.99.' },
        { slug: 'creality-falcon-t1', award: 'Best modular galvo', note: 'Swap fiber, diode, MOPA and UV modules.' },
      ],
      updated_at: DATE,
    },
  ],
};
