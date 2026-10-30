// Batch 2: UUNA TEK pen plotters and NOVA3D. Researched October 2026.
// Prices and images: official stores (uunatek.com, store.nova3dp.com), 30 Oct 2026.
// Independent coverage is thin for several of these products; each article says what was and was not verified.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const uuna = (handle) => awin(117801, `https://uunatek.com/products/${handle}`);
const nova = (handle) => awin(52353, `https://store.nova3dp.com/products/${handle}`);
const ucdn = (file) => `https://cdn.shopify.com/s/files/1/0824/7050/2715/files/${file}`;
const ncdn = (file) => `https://cdn.shopify.com/s/files/1/0738/8220/6528/files/${file}`;
const DATE = '2026-10-30 18:00:00';

export default {
  categories: [
    {
      slug: 'pen-plotters', name: 'Pen Plotters & Writing Robots', group_name: 'DIY', sort_order: 9, art_type: 'pen-plotter', tone: '#6d4c41',
      blurb: 'Pen plotters and automatic handwriting machines for generative art, calligraphy, wedding invitations and bulk handwritten letters.',
      score_labels: { performance: 'Speed and output', quality: 'Line quality and build', ease: 'Software and setup', value: 'Value' },
      sponsor: 'uuna-tek-idraw-h-a3',
    },
  ],

  products: [
    {
      slug: 'uuna-tek-iauto',
      name: 'UUNA TEK iAuto',
      brand: 'UUNA TEK',
      model: 'iAuto (Standard / Advanced)',
      category: 'pen-plotters',
      art_type: 'pen-plotter',
      tone: '#5d4037',
      released: 2024,
      price_usd: 2799,
      featured: true,
      image_url: ucdn('9_3fa16502-f65e-4625-80d0-dcf8eab59af0.png?v=1789456145'),
      gallery: [
        ucdn('20250731090855.png?v=1776323781'),
        ucdn('05df81f0db1d8020c0f3380c05be016e.png?v=1776323781'),
        ucdn('20250731090849.png?v=1776323781'),
      ],
      affiliate_url: uuna('uuna-tek®-iauto-auto-feeding-pen-plotter-handwriting-machine'),
      affiliate_label: 'Check price at UUNA TEK',
      title: 'UUNA TEK iAuto review: a handwriting robot that feeds its own paper',
      summary: 'An automatic writing machine that loads up to 80 letters or 30 envelopes, writes them in real pen and supports mail merge. Superb handwriting, weaker at complex drawings.',
      verdict: 'The iAuto is built for one job and does it very well: writing personalised letters, cards and envelopes in real ink, dozens at a time, without you feeding each sheet. CNX Software was very satisfied with its handwriting and build. It is less convincing as a drawing plotter, the software takes some learning, and at $2,799 it only makes sense if handwritten mail is part of your business.',
      best_for: 'Businesses sending handwritten letters, cards and envelopes at scale',
      pros: [
        'Automatic feeder: up to 80 letters or 30 envelopes per load',
        'Mail merge for personalised letters and envelopes',
        'Handwriting in real pen looked convincing in independent testing',
        'Works with ballpoint, gel, fine markers and even acrylic paint pens (up to 18 mm wide)',
        'Wi-Fi plus a documented HTTP API for automation',
      ],
      cons: [
        'Expensive: $2,799 for the Standard model',
        'Complex SVG drawings came out with missing or shifted lines',
        'Software has a learning curve; API documentation is thin',
        'Wet inks can smear and transfer to rollers; envelopes fed backwards wrinkled',
      ],
      specs: [
        { label: 'Type', value: 'Automatic handwriting machine with paper feeder' },
        { label: 'Capacity', value: 'Up to 80 letters or 30 envelopes per load' },
        { label: 'Paper', value: 'Up to A3; tested on 80–200 gsm' },
        { label: 'Pens', value: 'Up to 18 mm diameter' },
        { label: 'Connectivity', value: 'USB, Wi-Fi, HTTP API' },
        { label: 'Software', value: 'Free iAuto app (Windows x64/Arm, macOS), Font Creator (Windows)' },
        { label: 'Modes', value: 'Table, Simple Note, Character, SVG, Drawing Board' },
        { label: 'Price', value: 'Standard $2,799 · Advanced $2,939' },
      ],
      scores: { performance: 8.6, quality: 8.4, ease: 7.4, value: 7.2 },
      body: `## What is it?

Most pen plotters draw one sheet at a time: you tape paper down, plot, swap. The **iAuto** adds an automatic paper feeder, so it can work through a stack of letters or envelopes on its own. UUNA TEK aims it at marketing agencies, wedding planners, non-profits and anyone who sends handwritten mail in volume.

The Standard model costs **$2,799** on the official store (list $3,999); the Advanced model $2,939.

## Technical overview

- **Capacity:** up to 80 letters or 30 envelopes per load.
- **Paper:** any size up to A3.
- **Pens:** up to 18 mm wide, so most ballpoints, gel pens and markers fit.
- **Software:** a free app for Windows (x64 and Arm) and macOS, with five modes (Table, Simple Note, Character, SVG and Drawing Board) and a Windows Font Creator.
- **Connectivity:** USB and Wi-Fi, plus an HTTP API.

## Setup

CNX Software’s reviewer described setup as easy: a roughly 390 MB software download (driver included), Wi-Fi configured over USB, and a “Change Pen” routine where the pen tip should lightly touch the bed. Full features need a free account registration.

## Writing tests

The most detailed hands-on review we found is CNX Software’s (October 2026):

- **Handwritten text** in blue ballpoint on 80 gsm paper at default settings: the reviewer was very satisfied.
- **Wikipedia text in multiple handwriting fonts:** described as very impressive.
- **Small text:** legible down to size 20; at size 10 the lines merged.
- **Speed presets:** from High Quality to Ultrafast, with no visible quality difference in their tests.
- **Envelopes** (10.8 × 23.4 cm) worked with mail merge. Envelopes fed the wrong way round wrinkled.
- **Pens and paper:** ballpoint, gel, acrylic brush, acrylic paint and fine-tip marker on 80, 110, 160 and 200 gsm paper. Heavy paper was no problem; wet pens made the paper shift and smear on graphics.

## Drawing tests

This is where the iAuto is weaker. A floor-plan SVG came out with missing lines and misplaced dimension lines, and a Wikimedia SVG had shifted elements. Paper size also reset on every SVG import. For artwork, a dedicated plotter like the iDraw H A3 is the better tool.

## Automation

The HTTP API (log in, check machine status, send SVG) worked from Postman, which opens the door to connecting a CRM or order system. The reviewer found the documentation thin.

## What testers complain about

- A steep learning curve in the interface.
- Wet ink transferring to the rollers.
- Wrinkled envelopes when fed incorrectly.
- Thin API documentation.

## iAuto vs the alternatives

- **vs UUNA TEK iDraw H A3 ($559):** a fifth of the price and better at drawing, but you feed every sheet by hand. Fine for a few dozen cards, painful for hundreds. See [iAuto vs iDraw H A3](/en/compare/uuna-tek-iauto-vs-uuna-tek-idraw-h-a3/).
- **vs AxiDraw-style plotters:** cheaper and excellent for art, but no feeder.
- **vs handwriting services:** companies that write cards for you charge per card. If you send thousands a year, owning an iAuto can pay for itself.

## Price and value

At $2,799, the iAuto is a business tool, not a hobby purchase. Run the numbers: if handwritten mail lifts your response rates and you send hundreds of pieces a month, it is good value. If you send a few dozen a year, buy an iDraw.

## Final thoughts

For handwriting at scale, the iAuto is impressive and genuinely automatic. Treat drawing as a bonus, use quick-drying pens, and set aside an afternoon to learn the software.

## Sources

- [CNX Software: UUNA TEK iAuto review (October 2026)](https://www.cnx-software.com/2026/10/03/uuna-tek-iauto-review-a-professional-handwriting-and-drawing-machine/)
- [UUNA TEK official store: iAuto](https://uunatek.com/products/uuna-tek%C2%AE-iauto-auto-feeding-pen-plotter-handwriting-machine) (price, capacity and pen size)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'uuna-tek-idraw-h-a3',
      name: 'UUNA TEK iDraw H A3',
      brand: 'UUNA TEK',
      model: 'iDraw H A3',
      category: 'pen-plotters',
      art_type: 'pen-plotter',
      tone: '#8d6e63',
      released: 2023,
      price_usd: 559,
      featured: true,
      image_url: ucdn('19_a3cf3435-8885-4faa-a0cd-d1b7ec55f9eb.png?v=1793085614'),
      gallery: [
        ucdn('1f399e7050ccd0cbd4ad75a5428c4d45.jpg?v=1774517146'),
        ucdn('15_88055ab5-6334-4f24-8822-93e3d65a097e.jpg?v=1774517146'),
        ucdn('17_488b2e6a-9771-4be2-8f69-7289a0cf000d.jpg?v=1774517146'),
      ],
      affiliate_url: uuna('uuna-tek-h-version-pen-plotter-a3-size-handwriting-machine-xy-plotter-laser-engraver'),
      affiliate_label: 'Check price at UUNA TEK',
      title: 'UUNA TEK iDraw H A3 review: a fast A3 pen plotter for generative art and handwriting',
      summary: 'An A3 pen plotter with a motorised Z-axis for adjustable pen pressure, Inkscape and LightBurn support, and an optional laser head. A popular AxiDraw alternative.',
      verdict: 'The iDraw H A3 is a well-priced A3 plotter for artists and makers. Its stepper-driven Z-axis presses the pen down with adjustable pressure, which helps with brush pens and textured paper, and it works with Inkscape and LightBurn. It is bulky, and independent testing is still limited, but at $559 it undercuts most A3 alternatives.',
      best_for: 'Generative art, calligraphy and small batches of handwritten cards',
      pros: [
        'A3 drawing area (16.5 × 11.7 in) for $559',
        'Stepper-motor Z-axis with adjustable pen pressure',
        'Up to 12,000 mm/min (UUNA TEK figure); 0.01 mm X/Y resolution',
        'Works with Inkscape and LightBurn; mail merge and Hershey fonts',
        'Optional 0.5–15 W laser heads for engraving',
      ],
      cons: [
        'Bulky frame for its drawing area',
        'Base plate sold separately on the default version',
        'Few independent tests; the main hands-on review used a free unit',
        'Hand-fed: no automatic paper loading',
      ],
      specs: [
        { label: 'Drawing area', value: 'A3, 16.5 × 11.7 in (420 × 297 mm)' },
        { label: 'Speed', value: 'Up to 12,000 mm/min (manufacturer)' },
        { label: 'Resolution', value: '0.01 mm X/Y' },
        { label: 'Pen lift', value: 'Stepper-motor Z-axis with adjustable pressure' },
        { label: 'Software', value: 'Inkscape, LightBurn, UUNA TEK 2.0 Control; SVG/JPG/PNG' },
        { label: 'Connectivity', value: 'USB, Bluetooth; Windows, macOS, Linux' },
        { label: 'Mounting', value: 'Horizontal or vertical' },
        { label: 'Laser option', value: '0.5–15 W heads (sold separately)' },
        { label: 'Price', value: '$559 without base plate (list $799)' },
      ],
      scores: { performance: 8.3, quality: 8.1, ease: 7.9, value: 8.8 },
      is_sample: true,
      body: `## What is it?

The iDraw H A3 is UUNA TEK’s mainstream pen plotter: an H-shaped frame that moves any pen over an A3 sheet (16.5 × 11.7 in). It draws generative art, writes calligraphy and fills in cards, and with an optional laser head it can engrave leather or wood.

It costs **$559** on the official store (list $799). The default version ships **without a base plate**, which is an add-on.

## Technical overview

- **Area:** A3.
- **Speed:** up to 12,000 mm/min, which UUNA TEK says is three times faster than other A3 plotters. That is a manufacturer claim.
- **Resolution:** 0.01 mm on X and Y.
- **Pen lift:** a stepper motor drives the Z-axis, so the pen is pressed down with adjustable pressure instead of simply dropped by a servo.
- **Software:** Inkscape and LightBurn, plus UUNA TEK’s own control app. Hershey fonts and mail merge for bulk writing.
- **Connectivity:** USB or Bluetooth, on Windows, macOS and Linux.

## What reviewers say

Independent coverage is limited, and we want to be clear about it:

- A **2023 Medium review** by a generative artist (who received a free unit in exchange for an honest review) said they would choose the iDraw over the AxiDraw for most uses. They praised the **Z-axis stepper design** for its adjustable pen pressure and noted that the machine is **bulky**.
- A **video review** comparing it with the AxiDraw called it an excellent plotter with features its rival lacks.
- A blog review recommended it for artists getting into generative art.
- UUNA TEK notes that the larger A1 and A0 versions need slower speeds to match the A3’s quality. One Reddit user’s A0 first test only used part of the bed until they fixed settings.

Because most evidence is from reviewers who received units, this is marked as a preview review.

## Why the Z-axis matters

Servo pen lifts on cheaper plotters drop the pen with whatever force gravity gives. A motorised Z-axis lets you set exactly how hard the pen presses. That makes a real difference with brush pens, fountain pens and textured watercolour paper, where too little pressure skips and too much floods.

## iDraw H A3 vs the alternatives

- **vs AxiDraw (Evil Mad Scientist):** the plotter most artists know, with excellent software and community. The iDraw’s motorised Z-axis and lower price are its advantages.
- **vs UUNA TEK iAuto ($2,799):** the iAuto feeds its own paper for bulk letters. Buy the iDraw for art and occasional batches. See [iAuto vs iDraw H A3](/en/compare/uuna-tek-iauto-vs-uuna-tek-idraw-h-a3/).
- **vs UUNA TEK iDraw 2.0 A4 ($489):** smaller and cheaper, for beginners and A4 cards.

## Price and value

At $559, plus the base plate if you need it, the iDraw H A3 is good value for an A3 plotter with proper pen-pressure control.

## Final thoughts

A capable, flexible A3 plotter with a feature (motorised pen pressure) that matters to artists. Make room on your desk, and budget for the base plate.

## Sources

- [Medium (Generative Artworks): iDraw H A3 pen plotter review](https://medium.com/@generativeartworks/idraw-h-a3-pen-plotter-review-2146d3624400)
- [RobotShop: iDraw H A3 listing](https://ca.robotshop.com/products/uuna-tek-uuna-tek-174-idraw-h-version-pen-plotter-a3-size-handwriting-machine-xy-plotter-laser-engraver-with-base-plate)
- [UUNA TEK official store: iDraw H A3](https://uunatek.com/products/uuna-tek-h-version-pen-plotter-a3-size-handwriting-machine-xy-plotter-laser-engraver) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'nova3d-seal-3d-scanner',
      name: 'Seal 3D Scanner (NOVA3D store)',
      brand: '3DMakerPro',
      model: 'Seal',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#3949ab',
      released: 2024,
      price_usd: 649,
      image_url: ncdn('71yA18BpKqL._SL1500.jpg?v=1717658793'),
      gallery: [
        ncdn('71ff1n287gL._SL1500.jpg?v=1717658793'),
        ncdn('71wgulTRSdL._SL1500.jpg?v=1717659175'),
      ],
      affiliate_url: nova('seal-3d-scanner-for-3d-printer'),
      affiliate_label: 'Check price at NOVA3D',
      title: 'Seal 3D scanner review: blue-light detail for small objects under $700',
      summary: 'A palm-sized blue-light scanner (sold by NOVA3D, made by 3DMakerPro) that captured a test block within 0.02 mm. Great on matte objects; shiny, black and symmetrical parts need spray and markers.',
      verdict: 'The Seal is a strong small-object scanner for the money: blue structured light picked up layer lines on a printed statue, and 3D Printing Industry measured 0.02 mm deviation on a test block. It struggles with chrome, black plastic and symmetrical parts, and its software is simple. For figurines, small parts and sculptures, at $649 it is excellent value.',
      best_for: 'Scanning small matte objects: figurines, sculptures, small parts',
      pros: [
        'Blue structured light captures fine detail; layer lines visible on prints',
        'Measured 0.02 mm deviation on a 15 × 20 × 25 mm test block (X and Z)',
        'Markerless visual tracking on feature-rich objects',
        '24-bit colour camera with flash',
        'Half price on the NOVA3D store: $649 vs $1,299 list',
      ],
      cons: [
        'Shiny metal, black and transparent parts needed scanning spray',
        'Symmetrical objects confused tracking; duplicated features appeared',
        'Auto-align was inconsistent on complex multi-scan jobs',
        'JMStudio software is basic for advanced users; texture mapping size limits',
      ],
      specs: [
        { label: 'Technology', value: 'Blue light (400–500 nm) encoded structured light' },
        { label: 'Accuracy (claimed)', value: 'Up to 0.01 mm' },
        { label: 'Resolution', value: 'Up to 0.05 mm' },
        { label: 'Speed', value: '10 fps' },
        { label: 'Colour', value: '24-bit camera with flash LED' },
        { label: 'Size', value: '110 × 60 × 35 mm' },
        { label: 'Software', value: 'JMStudio (Windows 10/11 64-bit, macOS 12/13); OBJ, STL, PLY, ASC' },
        { label: 'Price', value: '$649 on the NOVA3D store (list $1,299)' },
      ],
      scores: { performance: 7.6, quality: 8.2, ease: 7.8, value: 8.9 },
      body: `## What is it?

The Seal is a small handheld 3D scanner made by **3DMakerPro** and sold through NOVA3D’s store, with the same JMStudio software and specs as 3DMakerPro’s own version. Its selling point is **blue structured light**: shorter-wavelength light that, in theory, resolves finer detail than the infrared light used by many budget scanners.

On the NOVA3D store it costs **$649** at the time of writing (list $1,299).

## Technical overview

- Blue light, 400–500 nm, encoded structured light.
- Up to 0.01 mm accuracy and 0.05 mm resolution (manufacturer figures).
- 10 frames per second.
- 24-bit colour camera with a flash LED.
- 110 × 60 × 35 mm, all-aluminium body.
- JMStudio for Windows and macOS, plus phone apps.

## Test results

3D Printing Industry ran the most thorough test we found:

| Object | Result |
|---|---|
| 15 × 20 × 25 mm cuboid (turntable) | 0.02 mm deviation on X and Z, −0.16 mm on Y |
| White 3D-printed statue (handheld) | No tracking loss, auto-align worked, layer lines captured |
| Clay sculpture | Up to 1,300 frames, printed copy “near-perfect” |
| Benchmark tile | Tracking lost near the edge; scanned front and back separately |
| Pliers (shiny metal) | Duplicated head and noise until sprayed, then accurate |
| E-scooter suspension (chrome) | Tracking lost on the coil, 0.104 mm deviation: “disappointing” |
| Motorcycle clutch basket | Symmetrical arms duplicated; needed reference markers |

The pattern: on matte, feature-rich objects it is excellent. On chrome, black and symmetrical objects, it needs spray, markers and patience.

## What testers complain about

- Spray needed on black and metallic surfaces (common to most scanners at this price, the reviewer notes).
- Auto-merge inconsistent; manual alignment tedious.
- JMStudio is simple, which is good for beginners but limiting for advanced users; texture mapping is limited by object size; some crashes.
- The blue light is bright, so human subjects should close their eyes.

## Seal vs the rivals

- **vs Revopoint INSPIRE 2 ($439):** cheaper, lighter, and its infrared laser mode copes with more surfaces, but it needs a strong PC for laser mode. The Seal’s blue light gives sharper detail on small matte objects. See [Seal vs INSPIRE 2](/en/compare/nova3d-seal-3d-scanner-vs-revopoint-inspire-2/).
- **vs Revopoint POP 3 Plus ($526):** similar price, infrared, better for medium objects and faces.
- **vs EINSTAR 2 ($899):** blue lasers handle shiny and dark parts better, at a higher price.

## Price and value

At $649, the Seal is good value for anyone scanning small objects for printing or digital art. If you scan car parts or chrome, spend more on a laser scanner.

## Final thoughts

The Seal punches above its price on detail. Keep scanning spray and markers nearby for hard surfaces, and it will reward you with very clean small-object scans. Note that the main independent test dates from early 2024, so later firmware may behave differently.

## Sources

- [3D Printing Industry: 3DMakerPro Seal review](https://3dprintingindustry.com/news/review-3dmakerpro-seal-an-affordable-user-friendly-and-high-quality-3d-scanner-228206/)
- [Fabbaloo: Hands on with the 3DMakerPro Seal, part 1](https://www.fabbaloo.com/news/hands-on-with-the-3dmakerpro-seal-3d-scanner-part-1)
- [NOVA3D official store: Seal 3D scanner](https://store.nova3dp.com/products/seal-3d-scanner-for-3d-printer) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'nova3d-gem3-max',
      name: 'NOVA3D GEM3 Max',
      brand: 'NOVA3D',
      model: 'GEM3 Max (Jewelry)',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: '#8e24aa',
      released: 2025,
      price_usd: 1599,
      image_url: ncdn('GME3-MAX.jpg?v=1783668423'),
      gallery: [
        ncdn('3_f062f32e-74bf-423a-be15-9949611564df.jpg?v=1767078445'),
        ncdn('8_80641de1-f40d-44b1-9e4d-9f27bb8b06da.jpg?v=1767078445'),
      ],
      affiliate_url: nova('gem3-max-jewelry-resin-3d-printer'),
      affiliate_label: 'Check price at NOVA3D',
      title: 'NOVA3D GEM3 Max preview: a resin printer built for jewellery casting',
      summary: 'A 16K-class resin printer tuned for castable jewellery resins, with a uniform UV module and room for 60+ rings per plate. Promising specs, but no independent tests yet.',
      verdict: 'On paper the GEM3 Max is a focused tool for jewellers: high resolution, a light source designed to print the same detail at the edges as in the centre, and NOVA3D’s own castable resins. We could not find any independent hands-on test, so treat this as a specification preview. If you cast jewellery, ask NOVA3D for test prints in your resin before buying.',
      best_for: 'Jewellers printing castable ring and pendant models',
      pros: [
        'Designed for castable resins: Precision Cast, Hi-Wax Cast, Filigree Cast',
        'Claimed minimum hole 0.4 mm and minimum gap 0.14 mm',
        'Over 60 ring models per plate (manufacturer figure)',
        'Patented uniform UV module aims to remove centre-to-edge differences',
        '$1,599, down from $1,899',
      ],
      cons: [
        'No independent hands-on reviews found as of October 2026',
        'All performance figures are NOVA3D’s own',
        'Expensive next to general-purpose 16K resin printers',
        'Specialist machine: little benefit if you don’t cast',
      ],
      specs: [
        { label: 'Technology', value: 'LCD resin (MSLA)' },
        { label: 'Resolution', value: '15,120 × 6,230 (retailer listing)' },
        { label: 'Build volume', value: '211 × 118 × 120 mm (retailer listing)' },
        { label: 'Min. feature (claimed)', value: '0.4 mm hole, 0.14 mm gap' },
        { label: 'Capacity (claimed)', value: '60+ rings or 20+ hollow pieces per plate' },
        { label: 'Resins', value: 'NOVA3D Precision Cast, Hi-Wax Cast, Filigree Cast' },
        { label: 'Price', value: '$1,599 (list $1,899)' },
      ],
      scores: { performance: 7.8, quality: 7.8, ease: 7.2, value: 7.0 },
      body: `## What is it?

NOVA3D is a resin-printer maker best known in Asia. The GEM3 Max is its jewellery-focused machine: a high-resolution LCD resin printer paired with castable resins that burn out cleanly in a casting flask. There is also a dental version at the same price.

It costs **$1,599** on NOVA3D’s store at the time of writing (list $1,899).

## An honest note before you read on

We looked for independent reviews on 3D printing and jewellery sites and found **none with hands-on test results**. Everything below comes from NOVA3D’s product page and retailer listings. That is why the scores are provisional and conservative, and why this is labelled a preview.

## What NOVA3D promises

- **Fine features:** printable holes down to 0.4 mm and gaps of 0.14 mm. Those numbers matter for prong settings and filigree.
- **Batch size:** more than 60 ring models, or more than 20 complex hollow pieces, on one plate.
- **Uniform light:** a patented UV module meant to give the same precision at the edge of the screen as in the centre, which is important when you fill a whole plate with rings.
- **Matched resins:** Precision Cast, Hi-Wax Cast and Filigree Cast, designed for different jewellery types.
- **Resolution and size:** retailer listings give 15,120 × 6,230 pixels and a 211 × 118 × 120 mm build volume.

## What we would test

If we had a unit, we would print a plate of rings with 0.4 mm holes and prong settings across the whole screen, check edge-versus-centre detail, then cast them to see how cleanly each resin burns out. Until someone publishes that, ask NOVA3D or a reseller for sample prints in the resin you plan to use.

## GEM3 Max vs the alternatives

- **General 16K resin printers** (such as Elegoo’s or Anycubic’s 16K models) cost far less and print castable resin too. The GEM3 Max’s case rests on its uniform light source and matched resins.
- **Dedicated jewellery DLP printers** cost much more. The GEM3 Max sits between the two.

## Final thoughts

A promising specialist printer for jewellers, with a price to match. We will update this review with scores from real tests when they become available.

## Sources

- [NOVA3D official store: GEM3 Max Jewelry](https://store.nova3dp.com/products/gem3-max-jewelry-resin-3d-printer) (price and claims)
- [MCast 3D: GEM3 Max jewelry listing](https://mcast3d.com/product/nova-3d-gem3-max-jewelry-resin-3d-printer/) (resolution and build volume)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'uuna-tek-iauto-vs-uuna-tek-idraw-h-a3',
      title: 'UUNA TEK iAuto vs iDraw H A3: automatic feeder or A3 art plotter?',
      products: ['uuna-tek-iauto', 'uuna-tek-idraw-h-a3'],
      intro: 'Both write and draw with real pens. The iAuto feeds its own paper for bulk letters; the iDraw H A3 is a hand-fed A3 plotter at a fifth of the price.',
      verdict: 'Buy the iAuto if you send hundreds of handwritten letters or envelopes a month: the feeder and mail merge save hours. Buy the iDraw H A3 for generative art, calligraphy and occasional card batches, where its motorised pen pressure and $559 price make more sense.',
      updated_at: DATE,
    },
    {
      slug: 'nova3d-seal-3d-scanner-vs-revopoint-inspire-2',
      title: 'Seal vs Revopoint INSPIRE 2: best 3D scanner under $700?',
      products: ['nova3d-seal-3d-scanner', 'revopoint-inspire-2'],
      intro: 'Two budget scanners with different light sources: blue structured light on the Seal, infrared laser plus structured light on the INSPIRE 2.',
      verdict: 'Choose the Seal for small, matte objects like figurines and sculptures, where its blue light captured layer lines and 0.02 mm detail in testing. Choose the INSPIRE 2 if you want to scan from a phone, need outdoor use or have a gaming PC for its laser mode.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-pen-plotters',
      title: 'The best pen plotters and handwriting robots of 2026',
      category: 'pen-plotters',
      intro: 'Pen plotters for art and automatic writing machines for bulk handwritten mail, compared using independent tests and official specs. Prices are official store prices on 30 October 2026.',
      items: [
        { slug: 'uuna-tek-idraw-h-a3', award: 'Best A3 plotter', note: 'Motorised pen pressure, Inkscape and LightBurn, $559.' },
        { slug: 'uuna-tek-iauto', award: 'Best for bulk handwriting', note: 'Feeds 80 letters or 30 envelopes per load with mail merge.' },
      ],
      updated_at: DATE,
    },
  ],
};
