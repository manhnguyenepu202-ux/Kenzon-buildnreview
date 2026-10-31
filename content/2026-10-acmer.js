// Acmer batch: P3, P2, P1 S Pro laser engravers. Researched 31 October 2026.
// Prices and images: official store (acmerlaser.com/products.json), 31 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
// Skipped for now: S2 Pro, K1, GE1 (no independent hands-on tests found).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const acmer = (handle) => awin(101769, `https://acmerlaser.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0662/7960/4450/files/${file}`;
const DATE = '2026-10-31 23:30:00';
const LABEL = 'Check price at Acmer';

export default {
  products: [
    {
      slug: 'acmer-p3',
      name: 'Acmer P3 48W',
      brand: 'Acmer',
      model: 'P3',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#283593',
      released: 2024,
      price_usd: 1199,
      featured: true,
      image_url: cdn('48W-01.webp?v=1763376418'),
      gallery: [cdn('48W-02.webp?v=1763376418'), cdn('ACMER_P3_IR_Diode_Enclosed_Dual_Laser_Engraver.webp?v=1763376168')],
      affiliate_url: acmer('acmer-p3-48w-diode-enclosed-laser-engraver'),
      affiliate_label: LABEL,
      title: 'Acmer P3 review: an enclosed 48W CoreXY laser with a camera for $1,199',
      summary: 'A Class 1 enclosed CoreXY laser with 48 W (24/48 W switchable) diode, HD camera and a 400 × 400 mm bed, $1,199. Cut 6 mm plywood cleanly; the exhaust fan is weak.',
      verdict: 'The P3 packs the most diode power of any enclosed laser we cover into a CoreXY box with a camera. CNX Software cut 6 mm plywood and 3 mm black acrylic cleanly, and Creative Bloq loved the deep engraving of the dual-laser version; TechRadar scored it 4.5/5. Owners say the exhaust fan is too weak and camera calibration in LightBurn takes patience. At $1,199 it undercuts most enclosed 40W rivals.',
      best_for: 'Small businesses that want enclosed cutting power and a camera',
      pros: [
        '48W diode (switchable to 24W) in a Class 1 enclosure',
        'CoreXY motion up to 800 mm/s',
        'HD camera over a 400 × 400 mm bed',
        'Cut 6 mm plywood at 600 mm/min in clean edges (CNX Software)',
        'Optional conveyor feeder and dual IR + diode version',
      ],
      cons: [
        'Built-in exhaust fan too weak; smoke leaks (owner reports)',
        'Camera and laser calibration in LightBurn takes time',
        'No auto-home after a job; magnetic shield feels weak (owners)',
        'Conveyor feeder works but is hard to align (Hackster)',
        'Diode can’t mark bare metal; you need the IR version',
      ],
      specs: [
        { label: 'Laser', value: '48W blue diode (24W / 48W switchable); 2-in-1 version adds 2W IR' },
        { label: 'Work area', value: '400 × 400 mm (up to 4,000 mm long with feeder)' },
        { label: 'Motion', value: 'CoreXY, up to 800 mm/s' },
        { label: 'Enclosure', value: 'FDA Class 1, lid shutdown, key switch' },
        { label: 'Camera', value: 'Built-in HD' },
        { label: 'Software', value: 'Acmer Studio, LightBurn, LaserGRBL' },
        { label: 'Price', value: '48W $1,199 · 24W $999 · 2-in-1 diode + IR $1,099' },
      ],
      scores: { performance: 8.6, quality: 7.8, ease: 7.4, value: 8.6 },
      body: `## What is it?

The P3 is Acmer’s enclosed laser: a Class 1 box with CoreXY motion, a built-in HD camera and a 400 × 400 mm bed. The 48W module can switch to 24W for finer work. A 2-in-1 version swaps between a diode and a 2W infrared laser for metal.

On 31 October 2026 the official store sells the 48W for **$1,199** (list $2,299), the 24W for $999 and the 2-in-1 diode + IR for $1,099. CNX Software paid $1,499 at launch.

## Tests

CNX Software tested the 48W with Acmer’s AP220 purifier:

- **6 mm plywood** cut at 600 mm/min, 100%, air on: clean edges.
- **3 mm black acrylic** cut at 500 mm/min, 100%.
- Photo engraving on basswood at 40,000 mm/min, and engraving on anodised aluminium and black acrylic at high speed.

Creative Bloq found the 48W module especially good for deep engraving on the dual-laser version and called it ideal for professionals and serious hobbyists. TechRadar scored the 2-in-1 version 4.5/5, noting its diode was slightly underpowered compared with the 48W but that the IR module made it more versatile. Hackster.io judged the P3 average among enclosed options but good value, and found the optional conveyor feeder worked but was hard to align.

## Problems

- Owners on Acmer’s store say the built-in fan isn’t strong enough to stop smoke leaking, so plan on an external exhaust or purifier.
- No auto-home after a job, and a weak magnetic shield (owner reports).
- Camera and laser calibration in LightBurn takes time and patience.
- CNX’s purifier sample didn’t spin, and support was closed for a holiday at the time.

## Who should not buy it

- Beginners who want plug-and-play: the Creality Falcon A1 Pro is simpler.
- Anyone who mainly marks metal: choose the 2-in-1 or a fibre laser.

## vs rivals

- **vs Creality Falcon2 Pro 40W ($1,349):** bigger 400 × 415 mm bed but manual focus and less power. See [P3 vs Falcon2 Pro](/en/compare/acmer-p3-vs-creality-falcon2-pro/).
- **vs Sculpfun E1 Pro ($799):** cheaper and smaller with 21W, no independent tests yet.
- **vs xTool S1:** more refined software, higher price.

## Final thoughts

The P3 gives more enclosed cutting power per dollar than almost anything else. Budget for better extraction and an evening with LightBurn.

## Sources

- [CNX Software: Acmer P3 48W review](https://www.cnx-software.com/2025/01/30/acmer-p3-48w-laser-engraver-review-with-acmer-ap220-smoke-air-purifier-lightburn-software-mkslaser-app/) (January 2025)
- [TechRadar: Acmer P3 IR & diode review](https://www.techradar.com/pro/acmer-p3-ir-diode-enclosed-dual-laser-engraver-review) (4.5/5)
- [Creative Bloq: Acmer P3 dual laser review](https://www.creativebloq.com/creative-inspiration/digital-crafting/i-tried-the-acmer-p3-dual-laser-engraver-and-it-doesnt-get-any-better-than-this)
- [Hackster.io: Acmer P3 48W review](https://www.hackster.io/news/the-maker-s-toolbox-acmer-p3-48w-corexy-laser-machine-review-8cd01f0b7a2d)
- [Acmer official store: P3 48W](https://acmerlaser.com/products/acmer-p3-48w-diode-enclosed-laser-engraver) (price and owner reviews)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'acmer-p2',
      name: 'Acmer P2 33W',
      brand: 'Acmer',
      model: 'P2',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#3949ab',
      released: 2023,
      price_usd: 589,
      image_url: cdn('ACMER_P2_33W_Laser_Engraver_and_Cutter_Machine.webp?v=1748576165'),
      gallery: [],
      affiliate_url: acmer('acmer-p2-laser-engraver-cutter-machine'),
      affiliate_label: LABEL,
      title: 'Acmer P2 33W review: a pre-assembled, fast open-frame cutter for $589',
      summary: 'A 33 W open-frame diode laser with linear rails, 30 L/min air assist and a 420 × 400 mm bed, $589. 3DWithUs cut 7 mm plywood flawlessly (4.4); no enclosure or honeycomb included.',
      verdict: 'The P2 33W is a strong, quick-to-set-up open-frame laser. 3DWithUs cut 7 mm plywood and 3 mm black acrylic in one pass and scored it 4.4; The Gadgeteer called it powerful and cut 6 mm plywood in one pass; Make: praised its clean edges. It has no enclosure, honeycomb or fume extraction, and the speed units in the docs confuse. At $589, down from $1,199, it is excellent cutting value.',
      best_for: 'Makers with a ventilated workshop who want fast cutting for little money',
      pros: [
        '33W diode cut 7 mm plywood and 3 mm black acrylic in one pass (3DWithUs)',
        'Arrives pre-assembled; running in minutes',
        'Linear rails and built-in 30 L/min air assist',
        'Colour engraving on stainless steel; thin metal cutting',
        '420 × 400 mm bed, expandable with a kit',
      ],
      cons: [
        'Open frame: no enclosure or fume extraction included',
        'No honeycomb bed in the base pack',
        'Docs mix mm/s and mm/min, which confused The Gadgeteer',
        'Air-assist flow is hard to adjust',
        'Acmer’s mobile app is basic; plan on LightBurn',
      ],
      specs: [
        { label: 'Laser', value: '33W blue diode (also 10W and 20W versions)' },
        { label: 'Work area', value: '420 × 400 mm, expandable' },
        { label: 'Max speed', value: '30,000 mm/min' },
        { label: 'Air assist', value: 'Automatic, 30 L/min' },
        { label: 'Motion', value: 'Linear rails' },
        { label: 'Software', value: 'LightBurn, LaserGRBL, Acmer app' },
        { label: 'Price', value: '33W $589 · 20W $539 · 10W $379 · enclosure pack $737' },
      ],
      scores: { performance: 8.5, quality: 8.0, ease: 7.6, value: 9.0 },
      body: `## What is it?

The P2 is Acmer’s open-frame laser with linear rails and built-in air assist. The 33W version is the one most reviewers tested. It arrives almost fully assembled.

It costs **$589** on the official store on 31 October 2026 (Make: reviewed it at $1,199 in 2023). Versions with an enclosure start at $737.

## Tests

**3DWithUs** (January 2025, score 4.4), all with air assist in LightBurn:

- **2 mm plywood** cut in one pass from 70% at 800 mm/min to 100% at 1,100 mm/min.
- **7 mm plywood** cut at 250 mm/min, 100%, with an engraved logo at 12,000 mm/min: called flawless.
- **3 mm black acrylic** cut in one pass at 200 mm/min, about 3 minutes.
- Colour grid on stainless steel in about 15 minutes; anodised aluminium in 1.5 minutes; slate coaster in 5 minutes.

**The Gadgeteer** (May 2025) cut a 6 mm plywood square in one pass after tuning, and engraved 25 metal dog tags with a 3D-printed jig. **Make:** (2023) cut about 1/4-inch wood in 3–4 passes with clean edges.

## Problems

- No enclosure, honeycomb or fume extraction in the base pack. Make: stresses planning for exhaust and safety.
- The Gadgeteer found that speeds are set in mm/s while the docs use mm/min, which caused confusion.
- Air-assist flow can’t be finely adjusted.
- Acmer’s mobile app (MKSLaser on iOS) is basic. LightBurn is the only macOS option; LaserGRBL is free on Windows.

## Who should not buy it

- Anyone without a ventilated space.
- Beginners who want an enclosed machine: look at the Acmer P3 or Creality Falcon A1.

## vs rivals

- **vs Sculpfun SF-A9 40W ($799.99):** more power and proven deep cuts, $210 more. See [P2 vs SF-A9](/en/compare/acmer-p2-vs-sculpfun-sf-a9/).
- **vs Creality Falcon2 22W ($549):** less power, stronger safety sensors.
- **vs Sculpfun S30 Pro Max ($599.99):** 20W with rotary and honeycomb included.

## Final thoughts

The P2 33W is one of the best-value open-frame cutters right now. Add a honeycomb, goggles and an exhaust, and it will cut and engrave almost anything a diode can.

## Sources

- [3DWithUs: Acmer P2 33W review and settings](https://3dwithus.com/acmer-p2-33w-review-laser-engraver-cutter-tests-settings) (4.4)
- [The Gadgeteer: Acmer P2 33W review](https://the-gadgeteer.com/2025/05/09/acmer-p2-33w-laser-engraver-cutting-machine-review-powerful/) (May 2025)
- [Make: review of the Acmer P2](https://makezine.com/article/digital-fabrication/laser-cutting-digital-fabrication/review-acmer-laser-p2/) (2023)
- [Hoffman Engineering: stainless steel colours on the P2](https://www.hoffman.engineering/blog/look-at-these-beautiful-stainless-steel-colors-acmer-p2-33w-laser-engraver-review/)
- [Acmer official store: P2](https://acmerlaser.com/products/acmer-p2-laser-engraver-cutter-machine) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'acmer-p1-s-pro',
      name: 'Acmer P1 S Pro',
      brand: 'Acmer',
      model: 'P1 S Pro',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#5c6bc0',
      released: 2023,
      price_usd: 199,
      image_url: cdn('ACMER_P1_S_pro_Laser_Engraving_Machine-20w.webp?v=1770203948'),
      gallery: [cdn('ACMERP1SproLaserEngravingMachine-1.webp?v=1770203948'), cdn('ACMERP1SproLaserEngravingMachine-3.webp?v=1770203948')],
      affiliate_url: acmer('acmer-p1-s-pro-laser-engraving-machine'),
      affiliate_label: LABEL,
      title: 'Acmer P1 S Pro review: a rigid budget laser from $199',
      summary: 'An all-metal open-frame diode laser from 6 W ($199) to 48 W, with a 380 × 370 mm bed and Wi-Fi. John’s Tech Blog called the 6 W the best budget laser; the lens isn’t user-replaceable.',
      verdict: 'The P1 S Pro is a sturdy budget laser. John’s Tech Blog found the 6W rigid, accurate and easy to get going, and it cut 3 mm birch well. Higher-power versions (10–48W) add cutting ability, but best-lasercutter.com warns of possible quality-control issues on the 20W module and a lens you can’t replace yourself. Buy the 6W or 10W as a cheap engraver.',
      best_for: 'First-time buyers who want a solid, cheap engraver',
      pros: [
        'From $199 (6W)',
        'Rigid frame of 3 mm aluminium plates with four wheels per side',
        'Fine 0.06 × 0.08 mm spot on the 6W',
        'Limit switches on both axes; Wi-Fi app control',
        'Cut 3 mm birch well on the 6W (John’s Tech Blog)',
      ],
      cons: [
        'Lens is not user-replaceable',
        'Possible quality-control issues on the 20W module (best-lasercutter.com)',
        'Open frame, Class 4: needs goggles and ventilation',
        'Minimal cable management; fiddly head connector',
        'Assembly took 45 minutes and a stripped screw in one test',
      ],
      specs: [
        { label: 'Laser', value: '6W, 10W, 20W, 36W or 48W blue diode' },
        { label: 'Spot', value: '0.06 × 0.08 mm (6W)' },
        { label: 'Work area', value: '380 × 370 mm' },
        { label: 'Max speed', value: '10,000 mm/min' },
        { label: 'Connectivity', value: 'Wi-Fi (ESP32), USB, SD card' },
        { label: 'Software', value: 'LightBurn, LaserGRBL, Acmer app' },
        { label: 'Price', value: '6W $199 · 10W $229 · 20W $329 · 36W $599 · 48W $799' },
      ],
      scores: { performance: 6.6, quality: 7.6, ease: 7.4, value: 8.8 },
      body: `## What is it?

The P1 S Pro is Acmer’s budget open-frame laser. Its frame uses 3 mm aluminium plates and is sold with laser modules from 6W to 48W.

On 31 October 2026 prices start at **$199** (6W), with 10W at $229, 20W at $329, 36W at $599 and 48W at $799.

## Hands-on

John’s Tech Blog tested the 6W in April 2024:

- Assembly was advertised at 25 minutes but took just over 45, and one motor screw stripped and had to be replaced.
- The frame is rigid, with four wheels on each Y side and limit switches on both axes.
- A pine sign engraved at 50 mm/s and 75% looked good, with the grain showing through.
- **3 mm birch cut well**; Acmer’s claim of 4 mm in one pass seemed believable.
- The first burn worked first time. The reviewer called it the best budget laser available.

Downsides noted: minimal cable management, a fiddly head connector and no protective lens cap, so keep the lens clean.

## Higher-power versions

We found no detailed independent test of the 20W or larger modules. best-lasercutter.com scores the P1 S Pro 7.5/10, recommends the 6W and 10W for value, and warns that the lens isn’t user-replaceable and the 20W module may have quality-control issues. If you want to cut, the [Acmer P2 33W](/en/review/acmer-p2/) is better proven.

## Who should not buy it

- Anyone who wants an enclosed laser.
- Anyone planning business use: spare parts and the fixed lens are a risk.

## vs rivals

- **vs Creality CR-Laser Falcon 10W ($205):** bigger 400 × 415 mm bed, similar price. See [P1 S Pro vs CR-Laser Falcon 10W](/en/compare/acmer-p1-s-pro-vs-creality-cr-laser-falcon-10w/).
- **vs Acmer P2 33W ($589):** much more power, linear rails and air assist.

## Final thoughts

The 6W P1 S Pro is a sturdy, cheap way to learn engraving. For serious cutting, skip the bigger modules and step up to the P2.

## Sources

- [John’s Tech Blog: best budget laser for 2024, Acmer P1 S Pro](https://hagensieker.com/2024/04/02/best-budget-laser-for-2024-acmer-p1-s-pro/) (unit supplied by Acmer)
- [best-lasercutter.com: Acmer P1 S Pro](https://best-lasercutter.com/en/lasers/acmer-p1-s-pro) (7.5/10)
- [Acmer official store: P1 S Pro](https://acmerlaser.com/products/acmer-p1-s-pro-laser-engraving-machine) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'acmer-p3-vs-creality-falcon2-pro',
      title: 'Acmer P3 vs Creality Falcon2 Pro: enclosed high-power diode lasers',
      products: ['acmer-p3', 'creality-falcon2-pro'],
      intro: 'Two enclosed diode lasers with cameras for small businesses. The P3 has 48W and CoreXY; the Falcon2 Pro has a slightly larger bed.',
      verdict: 'Choose the Acmer P3 ($1,199) for more power, CoreXY speed and the optional conveyor feeder. Choose the Falcon2 Pro 40W ($1,349) for a more established machine with strong safety sensors and a 400 × 415 mm bed.',
      updated_at: DATE,
    },
    {
      slug: 'acmer-p2-vs-sculpfun-sf-a9',
      title: 'Acmer P2 33W vs Sculpfun SF-A9 40W: best open-frame cutter',
      products: ['acmer-p2', 'sculpfun-sf-a9'],
      intro: 'Two strong open-frame diode lasers with air assist, $210 apart.',
      verdict: 'Pick the Acmer P2 ($589) for value, pre-assembly and linear rails. Pick the Sculpfun SF-A9 ($799.99) if you cut thick wood often: it measured 41W and cut 10 mm plywood in one pass.',
      updated_at: DATE,
    },
    {
      slug: 'acmer-p1-s-pro-vs-creality-cr-laser-falcon-10w',
      title: 'Acmer P1 S Pro vs Creality CR-Laser Falcon 10W: budget lasers around $200',
      products: ['acmer-p1-s-pro', 'creality-cr-laser-falcon-10w'],
      intro: 'Two cheap open-frame engravers for beginners.',
      verdict: 'Choose the P1 S Pro ($199–$229) for its rigid frame, limit switches and Wi-Fi. Choose the CR-Laser Falcon 10W ($205) for a bigger 400 × 415 mm bed. Both need goggles and ventilation.',
      updated_at: DATE,
    },
  ],

  guides: [],
};
