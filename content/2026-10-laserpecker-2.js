// LaserPecker batch 2: LP2 Plus, LP2, LP1 Plus. Researched October 2026.
// Prices and images: official US store (us.laserpecker.net), 31 Oct 2026.
// Test results: the reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const lp = (handle) => awin(59557, `https://us.laserpecker.net/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0906/9422/2121/files/${file}`;
const DATE = '2026-10-31 09:00:00';

export default {
  products: [
    {
      slug: 'laserpecker-lp2-plus',
      name: 'LaserPecker LP2 Plus',
      brand: 'LaserPecker',
      model: 'LP2 Plus (10 W)',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#d32f2f',
      released: 2025,
      price_usd: 809,
      featured: true,
      image_url: cdn('LP2_Plus_Basic_Bundle.webp?v=1790878046'),
      gallery: [
        cdn('LaserPecker-LP2-Plus-Take-Creativity-Everywhere.webp?v=1773197720'),
        cdn('LaserPecker-LP2-Plus-Focus-in-Seconds.webp?v=1773197720'),
        cdn('LaserPecker-LP2-Plus-See-Every-Detail-in-4K-Ultra-HD.webp?v=1773197720'),
      ],
      affiliate_url: lp('laserpecker-lp2-plus-10w-diode-laser-engraver'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LP2 Plus review: the portable LP2 with twice the power',
      summary: 'A 10 W diode version of LaserPecker’s classic portable engraver: 4,000 mm/s, dual red-dot focus and cuts through 3 mm plywood and acrylic. Fast and compact, with a small work area.',
      verdict: 'The LP2 Plus fixes the original LP2’s biggest weakness, cutting, by doubling the laser to 10 W, and makes it much faster at 4,000 mm/s. A three-month test cut 3 mm birch ply and clear acrylic in one pass and produced 50 keychains in 47 minutes. The work area is still small and accessories cost extra. For makers who want portability with real cutting ability, it is the best-value LaserPecker.',
      best_for: 'Portable engraving plus light cutting for crafts and small batches',
      pros: [
        '10 W 450 nm diode: double the LP2’s power',
        'Up to 4,000 mm/s engraving speed',
        'Dual red-dot focusing set in seconds',
        'Tested single-pass cuts in 3 mm birch ply, 3 mm clear acrylic and 5 mm MDF',
        'Works with SpinTrack roller for items up to 2 m long',
      ],
      cons: [
        'Small work area compared with a gantry laser',
        '10 W can’t match 20 W+ machines on thick cuts; 5–6 mm may need several passes',
        'Phone app is less intuitive than desktop software',
        'SpinTrack, extensions and honeycomb bed sold separately',
      ],
      specs: [
        { label: 'Laser', value: '10 W 450 nm blue diode' },
        { label: 'Speed', value: 'Up to 4,000 mm/s' },
        { label: 'Resolution', value: 'Up to 4K' },
        { label: 'Focus', value: 'Dual red-dot' },
        { label: 'Cutting (claimed)', value: 'Up to 6 mm basswood or acrylic' },
        { label: 'Weight', value: 'About 3.4 kg' },
        { label: 'Control', value: 'LaserPecker Design Space app (iOS, Android, PC)' },
        { label: 'Price', value: 'Basic $809 · SpinTrack $999 · All-in-One $1,499' },
      ],
      scores: { performance: 8.2, quality: 8.2, ease: 8.3, value: 8.6 },
      body: `## What is it?

The original LP2 is one of the best-selling portable engravers, but its 5 W laser was built for engraving, not cutting. The **LP2 Plus** keeps the same multi-angle portable design and doubles the laser to **10 W**, with a top engraving speed of **4,000 mm/s**.

The Basic Bundle costs **$809** on the official store (list $1,099). The SpinTrack Bundle with the roller is $999.

## Technical overview

- 10 W 450 nm blue diode.
- Up to 4,000 mm/s and 4K engraving resolution.
- Dual red-dot focus: move the head until the two dots meet.
- About 3.4 kg.
- Design Space app on phone, tablet and PC.
- SpinTrack roller support for long or cylindrical items up to 2 m.

## Test results

The most detailed hands-on review we found is a three-month test by 3D Printed Decor (November 2025 to February 2026). Note that the reviewer runs a laser-engraving business, and some figures in the article don’t fully agree with each other, so we treat them as indicative:

- **Single-pass cuts** at medium-slow speed: 3 mm birch ply, 3 mm clear acrylic, 5 mm MDF, 4 mm craft foam, and 6 mm basswood (though the article’s FAQ says 5–6 mm may need several passes).
- **Fine detail:** 4-point text legible; a 60 × 60 mm portrait on maple at 4K.
- **Speed:** a logo that took 14 minutes on the LP2 finished in under 2.5 minutes.
- **Batch work:** 50 keychains on 3 mm birch in 47 minutes.
- **Focus:** 10–15 seconds per setup with the red dots.

The reviewer scores it 8.7/10, “Recommended”.

## What reviewers flag

- The work area is small next to gantry lasers.
- 10 W is still modest for thick material.
- The app is less intuitive than desktop software like LightBurn.
- Plan an extra $60–120 for SpinTrack, and more for the rail and honeycomb bed.

## LP2 Plus vs the rivals

- **vs LaserPecker LP2 ($549):** half the power and much slower (600 mm/s), but cheaper and lighter. Buy the LP2 only for engraving. See [LP2 Plus vs LP2](/en/compare/laserpecker-lp2-plus-vs-laserpecker-lp2/).
- **vs LaserPecker LP4 ($1,099):** adds a 2 W infrared laser for metal and plastics, plus a touchscreen. See [LP2 Plus vs LP4](/en/compare/laserpecker-lp2-plus-vs-laserpecker-lp4/).
- **vs xTool M1 Ultra 10 W:** a larger 385 × 305 mm area, but a gantry machine that isn’t portable in the same way.

## Price and value

At $809, the LP2 Plus is the cheapest LaserPecker that can genuinely cut. If you want to engrave on location and cut thin plywood at home, it is the sweet spot in the range.

## Final thoughts

The LP2 Plus is what the LP2 should have been: portable, fast and able to cut. Accept the small work area, budget for accessories, and it is an easy recommendation.

## Sources

- [3D Printed Decor: LaserPecker LP2 Plus review 2026](https://3dprinteddecor.com/?p=12989)
- [3DWithUs: LaserPecker LP2 review](https://3dwithus.com/laserpecker-lp2-review-laser-engraver-tests-tips-and-settings) (for the LP2 comparison)
- [LaserPecker official store: LP2 Plus](https://us.laserpecker.net/products/laserpecker-lp2-plus-10w-diode-laser-engraver) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'laserpecker-lp2',
      name: 'LaserPecker LP2',
      brand: 'LaserPecker',
      model: 'LP2 (5 W)',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#e57373',
      released: 2022,
      price_usd: 549,
      image_url: cdn('LP2_1.webp?v=1790846333'),
      gallery: [
        cdn('laserpecker-lp2-multiple-usage-scenarios.jpg?v=1753429591'),
        cdn('LaserPecker-LP2-engraver-craft-projects.png?v=1753430382'),
        cdn('laserpecker-lp2-engraving-speed.jpg?v=1753430460'),
      ],
      affiliate_url: lp('laserpecker-lp2-classic-handheld-diode-laser-engraver'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LP2 review: a classic handheld engraver, now heavily discounted',
      summary: 'A 5 W galvo engraver that marks wood, leather, glass and coated steel from your phone. Great engraving, weak cutting, and now $549.',
      verdict: 'The LP2 is still a lovely engraving tool: 3DWithUs engraved curved glass, a coated steel bottle, leather and wood with LaserPecker’s presets and scored it 4.6/5. It is not a cutter, the app can drop its Bluetooth connection, and accessories like the roller cost extra. At $549, down from $999, it is a bargain for engraving-only crafters; anyone who wants to cut should pay more for the LP2 Plus.',
      best_for: 'Engraving gifts and personalised items on a budget',
      pros: [
        '5 W 450 nm Nichia diode with a fast galvo (mirror) head',
        'Engraves wood, leather, acrylic, glass and coated metal with presets',
        'Portable: about 1 kg laser unit, multi-angle stand',
        'Stops automatically on tilt, vibration or overheating',
        'Big discount: $549 vs $999 list',
      ],
      cons: [
        'Not good at cutting; LaserPecker advises nothing thicker than about 5 mm',
        'Small work area of roughly 100 × 100 mm',
        'Bluetooth app dropped beyond about 10 feet in testing',
        'Glasses, shield and lack of clamping were fiddly in one review',
      ],
      specs: [
        { label: 'Laser', value: '5 W 450 nm diode (Nichia)' },
        { label: 'Head', value: 'Galvo mirror, up to 600 mm/s' },
        { label: 'Work area', value: 'About 100 × 100 mm; longer with SpinTrack roller' },
        { label: 'Weight', value: 'About 1 kg laser unit; 1.75 kg with stand' },
        { label: 'Connectivity', value: 'Bluetooth 5.0, USB' },
        { label: 'Formats', value: 'BMP, JPG, PNG, SVG, G-code' },
        { label: 'Apps', value: 'iOS, Android, macOS, Windows' },
        { label: 'Price', value: 'Standard $549 · SpinTrack $699 · Deluxe $799' },
      ],
      scores: { performance: 7.2, quality: 8.2, ease: 8.0, value: 8.7 },
      body: `## What is it?

The LP2 is the engraver that made LaserPecker famous: a small, portable galvo laser on a multi-angle stand, controlled from your phone. Instead of moving the laser on rails, mirrors steer the beam, which makes it fast and compact.

The Standard Bundle costs **$549** on the official store at the time of writing, down from a $999 list price.

## Technical overview

- 5 W (5,000 mW) 450 nm Nichia diode.
- Galvo head, up to 36,000 mm/min (600 mm/s).
- Work area of roughly 4 × 4 in; longer with the SpinTrack roller.
- About 1.75 kg with the stand.
- Bluetooth 5.0 and USB; BMP, JPG, PNG, SVG and G-code.

## Engraving tests

3DWithUs tested it with LaserPecker’s recommended settings, mostly at 2K resolution:

| Material | Settings (power / depth) | Result |
|---|---|---|
| Curved glass (acrylic-paint masked) | 100 / 5 | Clean, after prep |
| Coated stainless bottle | 100 / 30 at 1.3K | Good |
| Black acrylic | 70 / 10 | Some misalignment |
| 5 mm wood coaster (pencil-sketch filter) | 90 / 4 | Good |
| Leather | 30 / 5 | Good |
| Stainless dog tag | 100 / 95 at 1K | Readable; 2K might be clearer |

Their verdict: 4.6/5, with “not great for cutting” as the main con.

AndroidGuys found wood, stone, leather and anodised aluminium easy, and glass needed a lot of preparation and cleanup.

## What testers complain about

- **Cutting.** It can cut paper, thin wood and leather, but LaserPecker advises nothing thicker than about 0.2 in (5 mm).
- **Bluetooth range.** The app lost connection beyond about 10 feet and when backgrounded.
- **Handling.** The safety glasses slipped, the shield got in the way when aligning, and there is no way to clamp items.
- **Roller mode** did not always roll straight.

## LP2 vs the rivals

- **vs LaserPecker LP2 Plus ($809):** 10 W, 4,000 mm/s and real cutting. Worth the extra if you’ll cut. See [LP2 Plus vs LP2](/en/compare/laserpecker-lp2-plus-vs-laserpecker-lp2/).
- **vs LaserPecker LP1 Plus ($199):** a fun pocket toy for kids and casual crafts; far less power. See [LP1 Plus vs LP2](/en/compare/laserpecker-lp1-plus-vs-laserpecker-lp2/).
- **vs Creality Falcon2:** a 22 W gantry machine with a big bed for cutting, but not portable.

## Price and value

At $549, the LP2 is excellent value for engraving gifts, tags and leather goods. The Deluxe Bundle adds accessories that make it more versatile.

## Final thoughts

If you only engrave, the LP2 remains a delightful, well-proven machine, and the discount makes it easy to recommend. Just don’t buy it to cut.

## Sources

- [3DWithUs: LaserPecker LP2 review, tests, tips and settings](https://3dwithus.com/laserpecker-lp2-review-laser-engraver-tests-tips-and-settings)
- [AndroidGuys: LaserPecker LP2 review](https://androidguys.com/reviews/laserpecker-lp2-laser-engraver/)
- [LaserPecker official store: LP2](https://us.laserpecker.net/products/laserpecker-lp2-classic-handheld-diode-laser-engraver) (price and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'laserpecker-lp1-plus',
      name: 'LaserPecker LP1 Plus',
      brand: 'LaserPecker',
      model: 'LP1 Plus',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#ef9a9a',
      released: 2026,
      price_usd: 199,
      image_url: cdn('LaserPecker-LP1-Plus-basic-bundle-white.webp?v=1770369681'),
      gallery: [
        cdn('LaserPecker-LP1-Plus-product-stable-setup.webp?v=1780489013'),
        cdn('LaserPecker-LP1-Plus-product-diy-materials.webp?v=1780472326'),
        cdn('LaserPecker-LP1-Plus-product-fruits-and-treats.webp?v=1780489095'),
      ],
      affiliate_url: lp('laserpecker-lp1-plus-pocket-laser-engraver'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LP1 Plus preview: a $199 pocket engraver for beginners',
      summary: 'A tiny, power-bank-friendly engraver with a phone app, multi-angle stand and magnetic base. Fun for wood, leather and paper; a low-power craft tool, not a workshop laser.',
      verdict: 'The LP1 Plus is the easiest way to try laser engraving: $199, phone control, and a first engraving within minutes from a power bank. It is a low-power laser (about 0.6 W), so it engraves rather than cuts, and independent testing is still scarce. As a gift for a curious crafter, it makes sense; for anything serious, start with the LP2 or LP2 Plus.',
      best_for: 'Beginners and families trying laser engraving',
      pros: [
        'Only $199 for the Standard Bundle',
        'Pocket-sized and runs from a power bank',
        'Phone app imports photos and doodles',
        'Multi-angle stand and magnetic base for small items',
        'Optional enclosure and auto-focus stand',
      ],
      cons: [
        'Low power (about 0.6 W): engraving only, slow on harder materials',
        'Few independent hands-on reviews so far',
        'Goggles must be worn and the beam kept away from cameras',
        'Smoke from paper and leather needs ventilation',
      ],
      specs: [
        { label: 'Laser', value: 'About 0.6 W (600 mW) diode' },
        { label: 'Power', value: 'USB power bank or adapter' },
        { label: 'Connectivity', value: 'Bluetooth' },
        { label: 'App', value: 'LaserPecker Design Space' },
        { label: 'Stand', value: 'Multi-angle (Standard) or auto-focus (Creator)' },
        { label: 'Price', value: 'Standard $199 · Creator $349' },
      ],
      scores: { performance: 6.2, quality: 7.6, ease: 8.8, value: 8.3 },
      body: `## What is it?

The LP1 Plus is LaserPecker’s pocket engraver: small enough for a backpack, powered by a phone power bank, and controlled with the same Design Space app as the bigger machines. It is aimed at beginners, families and crafters who want to personalise wood, leather, paper and treats without a workshop.

The Standard Bundle costs **$199** (list $399), and the Creator Bundle with an auto-focus stand **$349**.

## An honest note

We found **no detailed, independent hands-on test** with measured results. This preview is based on LaserPecker’s specifications, a short user write-up and retailer listings. Scores are provisional.

## What you get

- About 0.6 W diode laser, according to retailer specifications: enough to engrave, not to cut.
- A multi-angle stand for 360° engraving and a magnetic base to hold small items.
- Bluetooth control from the phone app: import a photo or a doodle and engrave.
- Options: a safety enclosure for families, and an auto-focus stand for more precise results.

## What early users say

A hands-on user write-up found setup quick and the app easy for beginners, with photo-to-engraving features. The same user stressed wearing the included goggles, keeping the beam away from cameras, and expecting smoke from paper and leather. They saw it as a creative tool for everyday users and hobbyists, not professionals.

## LP1 Plus vs the alternatives

- **vs LaserPecker LP2 ($549):** about eight times the laser power, a faster galvo head and far more materials. See [LP1 Plus vs LP2](/en/compare/laserpecker-lp1-plus-vs-laserpecker-lp2/).
- **vs LaserPecker LP2 Plus ($809):** for anyone who wants to cut.

## Final thoughts

The LP1 Plus is a fun, low-risk introduction to laser engraving at $199. Buy the enclosure if children will use it, and step up to the LP2 family when you outgrow it.

## Sources

- [LaserPecker official store: LP1 Plus](https://us.laserpecker.net/products/laserpecker-lp1-plus-pocket-laser-engraver) (price, bundles and features)
- [Wellbots: LP1 Plus listing](https://www.wellbots.com/products/laserpecker-lp1-plus-laser-engraver) (laser power and connectivity)
- [Dealmoon: LP1 Plus user experience (Chinese)](https://www.dealmoon.com/post/3227318)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'laserpecker-lp2-plus-vs-laserpecker-lp2',
      title: 'LaserPecker LP2 Plus vs LP2: is double the power worth $260?',
      products: ['laserpecker-lp2-plus', 'laserpecker-lp2'],
      intro: 'The same portable design with different lasers: 10 W and 4,000 mm/s on the LP2 Plus, 5 W and 600 mm/s on the LP2.',
      verdict: 'Buy the LP2 Plus if you want to cut thin plywood, acrylic or MDF, or engrave batches quickly: it is several times faster and cut 3 mm materials in one pass in testing. Buy the LP2 if you only engrave gifts, leather and coated metal: at $549 it is a bargain for that job.',
      updated_at: DATE,
    },
    {
      slug: 'laserpecker-lp2-plus-vs-laserpecker-lp4',
      title: 'LaserPecker LP2 Plus vs LP4: one laser or two?',
      products: ['laserpecker-lp2-plus', 'laserpecker-lp4'],
      intro: 'Both are portable 10 W diode engravers at 4,000 mm/s. The LP4 adds a 2 W infrared laser and an offline touchscreen for about $290 more.',
      verdict: 'Choose the LP4 if you mark metal, plastics or coated surfaces often, or sell at markets where the touchscreen saves you a laptop. Choose the LP2 Plus if you mostly engrave and cut wood, leather and acrylic.',
      updated_at: DATE,
    },
    {
      slug: 'laserpecker-lp1-plus-vs-laserpecker-lp2',
      title: 'LaserPecker LP1 Plus vs LP2: pocket toy or real engraver?',
      products: ['laserpecker-lp1-plus', 'laserpecker-lp2'],
      intro: 'LaserPecker’s two cheapest engravers: the $199 LP1 Plus and the $549 LP2.',
      verdict: 'The LP1 Plus is a fun first laser for families and occasional crafts. The LP2, with roughly eight times the laser power and a fast galvo head, is the one to buy if you plan to engrave regularly or sell what you make.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-portable-laser-engravers',
      title: 'The best portable laser engravers of 2026',
      category: 'laser-engravers',
      intro: 'Portable LaserPecker engravers compared using independent tests, owner feedback and official specs, from a $199 pocket laser to a fibre metal engraver. Prices are official US store prices on 31 October 2026.',
      items: [
        { slug: 'laserpecker-lp2-plus', award: 'Best overall', note: '10 W, 4,000 mm/s and real cutting for $809.' },
        { slug: 'laserpecker-lp4', award: 'Best for markets', note: 'Two lasers and an offline touchscreen.' },
        { slug: 'laserpecker-lp5', award: 'Best for metal', note: '20 W fibre laser marks steel in seconds.' },
        { slug: 'laserpecker-lp2', award: 'Best value', note: 'Proven 5 W engraver, now $549.' },
        { slug: 'laserpecker-lp1-plus', award: 'Best for beginners', note: 'Pocket-sized and $199.' },
      ],
      updated_at: DATE,
    },
  ],
};
