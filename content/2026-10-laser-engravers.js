// Laser engravers: LaserPecker. Researched October 2026.
// Prices and images: official US store (us.laserpecker.net), 30 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const lp = (handle) => awin(59557, `https://us.laserpecker.net/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0906/9422/2121/files/${file}`;
const DATE = '2026-10-30 09:00:00';

export default {
  categories: [
    {
      slug: 'laser-engravers', name: 'Laser Engravers & Cutters', group_name: 'DIY', sort_order: 6, art_type: 'laser-engraver', tone: '#e53935',
      blurb: 'Portable and enclosed laser engravers for wood, leather, acrylic and metal, scored on cutting power, results, safety and software.',
      score_labels: { performance: 'Power and speed', quality: 'Results and build', ease: 'Software and safety', value: 'Value' },
      sponsor: 'laserpecker-lx2',
    },
  ],

  products: [
    {
      slug: 'laserpecker-lx2',
      name: 'LaserPecker LX2',
      brand: 'LaserPecker',
      model: 'LX2',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#e53935',
      released: 2025,
      price_usd: 1499,
      featured: true,
      image_url: cdn('LASERPECKER-LX2-laser-cutter-white-image.png?v=1780490025'),
      gallery: [
        cdn('LaserPecker-LX2-Main-Image-1-Fastest-Enclosed-Production.webp?v=1769753160'),
        cdn('LaserPecker-LX2-Main-Image-2-Cut-Deeper.webp?v=1769753160'),
        cdn('LaserPecker-LX2-Main-Image-8-3D-Adaptive-Focus.webp?v=1773201187'),
      ],
      affiliate_url: lp('laserpecker-lx2-laser-cutter'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LX2 review: a big, enclosed laser cutter with swappable heads',
      summary: 'A Class 1 enclosed diode laser with a 500 × 305 mm bed, tool-free 20/40/60 W and infrared modules, and test cuts through 20 mm pine.',
      verdict: 'The LX2 is LaserPecker’s first machine built for cutting rather than portable engraving, and it is a good one: enclosed, fast, with a large bed and modules you swap without tools. Testers cut 3 mm plywood and acrylic in one pass and 20 mm pine in eight. Camera alignment can be fiddly and only one head runs at a time, but for a home workshop it is excellent value.',
      best_for: 'Home workshops and small businesses that cut wood and acrylic',
      pros: [
        'Class 1 enclosed with fire suppression: safe to run indoors without goggles',
        'Large 500 × 305 mm work area, up to 150 mm tall objects with the riser base',
        'Tool-free swap between 20 W, 40 W, 60 W diode and 2 W infrared modules',
        'Tested: 3 mm plywood and acrylic in 1 pass, 20 mm pine in 8 passes (40 W)',
        'Works with LightBurn as well as LaserPecker’s own software',
      ],
      cons: [
        'Camera calibration took more than ten attempts on one test unit',
        'Only one laser head fitted at a time: no simultaneous diode + infrared',
        'No screen; 20–30 minutes to set up; 22.5 kg',
        'Infrared module is weak on hard metals compared with a fibre laser',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed diode laser cutter, Class 1' },
        { label: 'Laser modules', value: '20 W, 40 W or 60 W diode; 2 W 1064 nm infrared (one at a time)' },
        { label: 'Work area', value: '500 × 305 mm' },
        { label: 'Speed', value: '1,000 mm/s, 10,000 mm/s² acceleration' },
        { label: 'Precision', value: '0.01 mm' },
        { label: 'Max object height', value: '45 mm; 150 mm with riser base' },
        { label: 'Camera', value: '12 MP, Point-to-Shape positioning' },
        { label: 'Focus', value: 'Mechanical probe with 3D Adaptive Focus' },
        { label: 'Safety', value: 'Enclosure, fire suppression module included' },
        { label: 'Software', value: 'LaserPecker Design Space, LightBurn' },
        { label: 'Weight', value: '22.5 kg' },
        { label: 'Price', value: '20 W from $1,499 · 40 W from $1,949' },
      ],
      scores: { performance: 8.7, quality: 8.2, ease: 7.6, value: 8.5 },
      body: `## What is it?

LaserPecker made its name with tiny handheld engravers. The LX2 is something else: a desktop, fully enclosed laser cutter with a **500 × 305 mm** bed and laser modules that click in and out without tools. It is aimed at the hobbyist who has outgrown a portable engraver and at small shops that cut coasters, signs and boxes.

The 20 W Standard Bundle costs **$1,499** on the official store (list $1,999) and the 40 W bundle $1,949 at the time of writing.

## Technical overview

- **Modules:** 20 W, 40 W and 60 W blue diode, plus a 2 W 1064 nm infrared module for marking metal and plastics. One fits at a time.
- **Motion:** 1,000 mm/s and 10,000 mm/s² acceleration.
- **Positioning:** 12 MP camera with Point-to-Shape alignment.
- **Focus:** mechanical probe with 3D Adaptive Focus, which follows curved surfaces.
- **Safety:** Class 1 enclosure with a fire suppression module included.

## Setup

3DWork’s reviewer needed **20–30 minutes** to set it up. Without a screen, everything runs from the app or LightBurn.

## Cutting tests

With the 40 W module, 3DWork reported:

| Material | Result |
|---|---|
| 3 mm plywood | Clean cut in 1 pass |
| 3 mm acrylic | 1 pass, no burrs |
| 20 mm solid pine | 8 passes, without heavy charring |

Real cutting speeds were 300–400 mm/s. LaserPecker’s own claims go further (22 mm paulownia, 20 mm acrylic, 0.5 mm stainless), but those are manufacturer figures.

## What testers complain about

- **Camera alignment.** On 3DWork’s unit, calibration needed **more than ten attempts** and still left a few millimetres of error in the centre. Positioning on objects under 50 mm was not accurate. Tom’s Hardware also flagged camera inconsistency and a mechanical probe that failed often.
- **One head at a time.** You cannot run diode and infrared together.
- **No screen.**
- **Fumes.** It is enclosed, but continuous work still needs an extractor or the optional smoke purifier.

## LX2 vs the rivals

- **vs LaserPecker LP5 ($2,429):** the LP5’s 20 W fibre laser is much better on hard steel, but its bed is tiny. 3DWork says the LX2 doesn’t compete with the LP4 and LP5 directly: it is the cutter, they are engravers. See [LX2 vs LP5](/en/compare/laserpecker-lx2-vs-laserpecker-lp5/).
- **vs xTool S1:** the closest enclosed diode rival at a similar size. We have not reviewed it yet.
- **vs Snapmaker Artisan 3-in-1:** the Artisan’s 40 W laser is one of three toolheads in a 3D printer. Buy the LX2 if laser cutting is the main job.

## Price and value

$1,499 for a Class 1 enclosed cutter with this bed size is strong value. The 40 W bundle is the one we would pick: it halves passes on thick wood.

## Final thoughts

The LX2 is the most practical LaserPecker for people who cut. Expect some patience with camera calibration, and budget for an extractor if you run it for hours.

## Sources

- [3DWork: LaserPecker LX2 review](https://3dwork.io/en/laserpecker-lx2-review/) (specs table, cutting tests, calibration issues)
- [Tom’s Hardware: LaserPecker LX2 review](https://www.tomshardware.com/maker-stem/laserpecker-lx2-review-large-scale-dual-laser-cutter)
- [LaserPecker official store: LX2](https://us.laserpecker.net/products/laserpecker-lx2-laser-cutter) (price and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'laserpecker-lp5',
      name: 'LaserPecker LP5',
      brand: 'LaserPecker',
      model: 'LP5',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#c62828',
      released: 2025,
      price_usd: 2429,
      image_url: cdn('Laserpecker-Lp5-engraving-machine-image.webp?v=1790877918'),
      gallery: [
        cdn('Laserpecker-LP5-engraving-machine-image-20251216-1.jpg?v=1765846925'),
        cdn('Laserpecker-LP5-engraving-machine-image-20251216-2.jpg?v=1765846925'),
        cdn('Laserpecker-LP5-engraving-machine-10000-speed.jpg?v=1780490335'),
      ],
      affiliate_url: lp('laserpecker-lp5-smart-20w-fiber-diode-laser-engraver'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LP5 review: fibre-laser metal engraving you can carry, held back by software',
      summary: 'A portable 20 W fibre + 20 W diode engraver that marks steel in seconds and cuts thin brass. Testers love the hardware and dislike the software.',
      verdict: 'The LP5 is the most capable portable engraver LaserPecker makes: a 20 W fibre laser for metal and a 20 W diode for wood and leather in a 6 kg unit. Testers marked a stainless pendant in 41 seconds and cut thin aluminium and brass. The software is the weak link, with no time estimates and limited LightBurn support, and deep 3D embossing takes many hours. Buy it for metal personalisation, not for cutting.',
      best_for: 'Personalising metal: jewellery, tags, tumblers and tools',
      pros: [
        'Dual source: 20 W 1064 nm fibre for metal, 20 W 450 nm diode for organics',
        'Up to 10,000 mm/s engraving speed',
        'Tested: stainless pendant engraved in 41 s; brass pendant in under 3 min',
        'Portable: about 6 kg with stand and cover',
        'Rotary, slide extension and Class 1 safety enclosure available',
      ],
      cons: [
        'Software: no time estimate, missing presets, LightBurn capped and no fibre support',
        'Small native work area (100 × 100 mm square)',
        'Deep 3D embossing takes 5–20 hours on a coin or coaster',
        'No power button, no screen, no air assist; open unit needs goggles',
      ],
      specs: [
        { label: 'Lasers', value: '20 W 1064 nm fibre + 20 W 450 nm diode' },
        { label: 'Work area', value: '100 × 100 mm square (120 × 160 mm ellipse); 160 × 300 mm with slide extension' },
        { label: 'Speed', value: 'Up to 10,000 mm/s' },
        { label: 'Spot size', value: 'Fibre 0.06 × 0.06 mm; diode 0.08 × 0.1 mm' },
        { label: 'Weight', value: 'About 6 kg with stand and cover' },
        { label: 'Connectivity', value: 'USB, 2.4 GHz Wi-Fi' },
        { label: 'Software', value: 'LaserPecker Design Space (Windows, macOS, iOS, Android); limited LightBurn' },
        { label: 'Safety', value: 'Goggles when open; optional Class 1 safety enclosure' },
        { label: 'Price', value: 'Standard bundle $2,429 · All-in-One $3,847' },
      ],
      scores: { performance: 8.6, quality: 8.4, ease: 7.0, value: 7.6 },
      body: `## What is it?

The LP5 puts a **20 W fibre laser** and a **20 W blue diode laser** in one portable engraver. The fibre source is what makes it special: it marks and even cuts thin metal, which diode lasers can’t. The diode handles wood, leather and dark acrylic.

The Standard Bundle is **$2,429** on the official store (list $3,299). Bundles with the safety enclosure, rotary and slide extension go up to $3,847.

## Technical overview

- **Work area:** 100 × 100 mm square (an ellipse of 120 × 160 mm), or 160 × 300 mm with the slide extension.
- **Speed:** up to 10,000 mm/s.
- **Spot:** 0.06 mm (fibre), 0.08 × 0.1 mm (diode).
- **Weight:** about 6 kg including the stand and cover.

## Engraving tests

Three reviewers published detailed tests:

| Job | Laser | Time | Source |
|---|---|---|---|
| Stainless pendant | Fibre | 41 s | CNX Software |
| Brass pendant | Fibre | under 3 min | 3DWithUs |
| Engraved dog tag (8K) | Fibre | under 5 min | 3DWithUs |
| 108 mm plywood engraving | Diode | 2 min 21 s | CNX Software |
| Tumbler on rotary | Fibre | 14 min 32 s | CNX Software |
| Small slate coaster | Fibre | about 40 min | 3DWithUs |
| Aluminium cut-out (16 passes) | Fibre | about 20 min, needed three runs | CNX Software |
| Deep brass challenge coin | Fibre | just under 5 h each | 3DWithUs |
| 3D-embossed slate coaster | Fibre | about 20 h | TechWalls |

The pattern is clear: surface marking on metal is fast and beautiful; deep 3D relief is very slow. TechWalls said deep embossing would really need a 50–100 W fibre source.

## What testers complain about

- **Software.** The most common criticism. 3DWithUs notes no time estimates (only a percentage) and no reference settings. TechWalls says LightBurn is capped at 6,000 mm/s and loses fibre support, and Tom’s Hardware calls the software clunky.
- **USB-only for some jobs**, and Wi-Fi is 2.4 GHz only.
- **Burns without air assist** on wood, and no power button or screen.
- **Metal dust.** Tom’s Hardware clogged a purifier filter during testing.
- **Rotary slipping** on water bottles in TechWalls’ test.
- **One failed 3D run** at CNX Software, where the job ran for hours without the laser firing. Check the laser is active before an overnight job.

## LP5 vs the rivals

- **vs xTool F1 Ultra:** the same 20 W fibre + 20 W diode recipe. 3DWithUs’s guide lists a larger 220 × 220 mm area. Compare current prices; the F1 Ultra’s camera and screen are a plus.
- **vs LaserPecker LP4 ($1,099):** the LP4’s 2 W infrared marks metal lightly, but cannot match fibre. Half the price. See [LP5 vs LP4](/en/compare/laserpecker-lp5-vs-laserpecker-lp4/).
- **vs LaserPecker LX2 ($1,499):** a cutter, not a metal engraver.

## Price and value

At $2,429 the LP5 makes sense if you sell personalised metal goods, where 41-second pendants pay for the machine. For occasional hobby use it is expensive, especially once you add the enclosure.

## Final thoughts

The LP5’s hardware is excellent for metal; its software has not caught up. 3DWithUs scores it 4.6/5. Buy it for fast metal personalisation, avoid it if you want deep relief or big cutting jobs.

## Sources

- [CNX Software: LaserPecker LP5 review with LDS software, rotary and enclosure](https://www.cnx-software.com/2025/04/17/laserpecker-lp5-review-a-20w-diode-fiber-laser-engraver-tested-with-lds-software-rotary-extension-safety-enclosure/)
- [3DWithUs: LaserPecker LP5 review, tests, tips and settings](https://3dwithus.com/laserpecker-lp5-review-laser-engraver-cutter-tests-tips-and-settings)
- [TechWalls: LaserPecker LP5 review](https://www.techwalls.com/laserpecker-lp5-laser-engraver-review/)
- [Tom’s Hardware: LaserPecker LP5 review](https://www.tomshardware.com/maker-stem/laserpecker-lp5-review)
- [LaserPecker official store: LP5](https://us.laserpecker.net/products/laserpecker-lp5-smart-20w-fiber-diode-laser-engraver) (price and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'laserpecker-lp4',
      name: 'LaserPecker LP4',
      brand: 'LaserPecker',
      model: 'LP4',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#ef5350',
      released: 2024,
      price_usd: 1099,
      image_url: cdn('LaserPecker-LP4-Basic-Bundle_61f5aacf-3eb6-451e-b254-82a5ec0e3506.webp?v=1790877261'),
      gallery: [
        cdn('LaserPecker-LP4-Portable-and-Handheld-Design.webp?v=1774939235'),
        cdn('LaserPecker-LP4-Offline-Touchscreen.webp?v=1780490697'),
        cdn('LaserPecker-LP4-Multiangle.webp?v=1780490723'),
      ],
      affiliate_url: lp('laserpecker-lp4-portable-ir-diode-dual-laser'),
      affiliate_label: 'Check price at LaserPecker',
      title: 'LaserPecker LP4 review: a portable dual-laser engraver with a touchscreen',
      summary: 'A 10 W diode + 2 W infrared engraver that works offline from its own touchscreen. Good for craft fairs; light-duty on metal.',
      verdict: 'The LP4 is a clever portable engraver for makers who sell at markets: a 10 W diode for wood and leather, a 2 W infrared laser for marking metal and plastics, and a touchscreen that runs jobs without a laptop. It also works with LightBurn. The work area is small and the infrared is no substitute for a fibre laser, so metal-heavy users should look at the LP5 or xTool F1 Ultra instead.',
      best_for: 'Craft-fair and in-store personalisation on the go',
      pros: [
        '10 W 450 nm diode + 2 W 1064 nm infrared in one portable unit',
        'Offline touchscreen: switch lasers and run files without a computer',
        'Adjustable head engraves at an angle without moving the object',
        'Up to 4,000 mm/s; LightBurn compatible',
        'Big discount: $1,099 vs $1,999 list',
      ],
      cons: [
        'Small work area: 160 × 120 mm (160 × 300 mm with slide extension)',
        'Infrared is light-duty compared with a fibre laser',
        'Battery pack for portable use is sold separately',
        'Few independent hands-on tests published; most figures are official',
      ],
      specs: [
        { label: 'Lasers', value: '10 W 450 nm diode + 2 W 1064 nm infrared' },
        { label: 'Work area', value: '160 × 120 mm; 160 × 300 mm with slide extension' },
        { label: 'Speed', value: 'Up to 4,000 mm/s' },
        { label: 'Resolution', value: 'Up to 8K' },
        { label: 'Cutting (official)', value: '8 mm basswood, 5 mm black acrylic' },
        { label: 'Control', value: 'Built-in touchscreen, app, LightBurn' },
        { label: 'Connectivity', value: 'USB, Bluetooth 5.0' },
        { label: 'Weight', value: 'About 4 kg' },
        { label: 'Price', value: 'Standard $1,099 · All-in-One $1,999' },
      ],
      scores: { performance: 7.8, quality: 8.2, ease: 8.4, value: 8.4 },
      body: `## What is it?

LaserPecker calls the LP4 the first portable dual-laser engraver. It pairs a **10 W blue diode** (wood, leather, cardboard, dark acrylic) with a **2 W infrared** laser (metal marking, plastics, coated surfaces). The feature that sets it apart is the **built-in touchscreen**: load files once, then switch lasers and start jobs at a market stall without a laptop.

The Standard Bundle costs **$1,099** at the time of writing, down from $1,999.

## Technical overview

- **Work area:** 160 × 120 mm (160 × 300 mm with the slide extension).
- **Speed:** up to 4,000 mm/s, 8K resolution.
- **Cutting (official):** 8 mm basswood, 5 mm black acrylic.
- **Weight:** about 4 kg. A PowerPack battery is required for use away from mains and sold separately.
- **Head:** adjustable, so you can engrave the side of an object without holding the machine.

## What the published tests say

We want to be upfront: we found far fewer hands-on LP4 tests than for the LP5 or LX2. LaserEngraverExpert scores it 8.2/10, but says several conclusions are based on LaserPecker’s official specs. The useful findings:

- It reproduced about **220 grey tones** in the reviewer’s photo test versus 256 claimed.
- **Anodised aluminium** marks in one pass with the infrared at LaserPecker’s recommended settings; **bare aluminium** needs two passes.
- A 50 × 50 mm fill was reported at under 40 seconds.

That is why we have marked this as a preview review.

## What reviewers flag

- The work area is compact for anything but tags, wallets and small boards.
- The infrared is lighter-duty than a dedicated fibre laser: fine for marking, not for deep metal engraving.
- At $1,099 it costs more than most single-laser diode machines.

## LP4 vs the rivals

- **vs xTool F1 Ultra:** a fibre + diode machine. LaserEngraverExpert says the F1 Ultra is the better metal engraver; the LP4 wins on LightBurn support, cutting and work area.
- **vs LaserPecker LP5 ($2,429):** real fibre power for metal, but more than twice the price. See [LP5 vs LP4](/en/compare/laserpecker-lp5-vs-laserpecker-lp4/).
- **vs LaserPecker LX2 ($1,499):** buy the LX2 if you mostly cut.

## Price and value

At $1,099, the LP4 is good value for mobile personalisation businesses that need two lasers and offline control. Hobbyists who mainly engrave wood can spend less on a single diode.

## Final thoughts

The LP4’s touchscreen and multi-angle head make it unusually practical away from the workshop. If metal is your main material, step up to fibre.

## Sources

- [LaserEngraverExpert: LaserPecker LP4 review 2026](https://laserengraverexpert.com/laserpecker-lp4-review/)
- [3DWork: LX2 review, with LP4 and LP5 comparison table](https://3dwork.io/en/laserpecker-lx2-review/)
- [LaserPecker official store: LP4](https://us.laserpecker.net/products/laserpecker-lp4-portable-ir-diode-dual-laser) (price, specs and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'laserpecker-lp5-vs-laserpecker-lp4',
      title: 'LaserPecker LP5 vs LP4: is fibre worth twice the price?',
      products: ['laserpecker-lp5', 'laserpecker-lp4'],
      intro: 'Both are portable dual-laser engravers. The LP5 pairs a 20 W diode with a 20 W fibre laser; the LP4 pairs a 10 W diode with a 2 W infrared laser and adds a touchscreen.',
      verdict: 'Buy the LP5 if you engrave metal regularly: its fibre laser marked a stainless pendant in 41 seconds in testing and can cut thin brass. Buy the LP4 if you mostly engrave wood and leather, want offline touchscreen control at markets and only mark metal occasionally.',
      updated_at: DATE,
    },
    {
      slug: 'laserpecker-lx2-vs-laserpecker-lp5',
      title: 'LaserPecker LX2 vs LP5: enclosed cutter or portable metal engraver?',
      products: ['laserpecker-lx2', 'laserpecker-lp5'],
      intro: 'LaserPecker’s two most popular machines do very different jobs. The LX2 is a large enclosed diode cutter; the LP5 is a portable fibre + diode engraver.',
      verdict: 'Choose the LX2 for cutting wood and acrylic on a big 500 × 305 mm bed, safely enclosed. Choose the LP5 for engraving metal: its fibre laser outperforms the LX2’s 2 W infrared module on steel.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-laser-engravers',
      title: 'The best laser engravers and cutters of 2026',
      category: 'laser-engravers',
      intro: 'We compared LaserPecker’s current machines and Snapmaker’s 3-in-1 using published test results, official specs and owner feedback. Prices are official US store prices on 30 October 2026.',
      items: [
        { slug: 'laserpecker-lx2', award: 'Best laser cutter', note: 'Enclosed, 500 × 305 mm bed, 20 mm pine in 8 passes.' },
        { slug: 'laserpecker-lp5', award: 'Best for metal', note: '20 W fibre laser marks stainless steel in seconds.' },
        { slug: 'laserpecker-lp4', award: 'Best portable', note: 'Touchscreen and two lasers for craft fairs.' },
        { slug: 'snapmaker-artisan-3-in-1', award: 'Best 3-in-1', note: 'Laser, CNC and 3D printing in one enclosure.' },
      ],
      updated_at: DATE,
    },
  ],
};
