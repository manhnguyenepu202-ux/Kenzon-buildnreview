// Creality Falcon batch: 10 laser engravers. Researched 31 October 2026.
// Prices and images: official store (crealityfalcon.com/products.json), 31 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const falcon = (handle) => awin(69964, `https://www.crealityfalcon.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0799/8714/7049/files/${file}`;
const DATE = '2026-10-31 20:00:00';
const LABEL = 'Check price at Creality Falcon';

export default {
  products: [
    {
      slug: 'creality-falcon2-pro',
      name: 'Creality Falcon2 Pro (22W / 40W)',
      brand: 'Creality',
      model: 'Falcon2 Pro',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#37474f',
      released: 2024,
      price_usd: 1349,
      featured: true,
      image_url: cdn('pro_40W_png.png?v=1764731357'),
      gallery: [cdn('pro_png.png?v=1762439482')],
      affiliate_url: falcon('falcon-2-pro-40w-enclosed-laser-engraver-and-cutter'),
      affiliate_label: LABEL,
      title: 'Creality Falcon2 Pro review: the enclosed diode laser most makers should look at first',
      summary: 'A fully enclosed 22 W or 40 W diode laser with a 400 × 415 mm bed, camera, exhaust and safety sensors, from $899. Powerful and safe, but focus is manual and setup takes an evening.',
      verdict: 'The Falcon2 Pro puts a strong diode laser inside a proper Class 1 enclosure with camera, exhaust fan and fire sensor. The Gadgeteer called the 40W the best laser engraver they had owned, and store buyers rate it 4.86/5. Focus is manual, the camera is a few millimetres off, and the exhaust hood is tedious to fit. At $1,349 for 40W it is one of the safest ways to get serious cutting power at home.',
      best_for: 'Home workshops and small businesses that want cutting power with an enclosure',
      pros: [
        'Fully enclosed, FDA Class 1, with lid interlock, fire, tilt and dirty-lens sensors',
        '40W cuts plywood, walnut and acrylic quickly; 22W Precise mode for detail',
        'Large 400 × 415 mm work area',
        'Built-in camera, exhaust fan, air assist and crumb tray',
        'Works with LightBurn as well as Creality’s free software',
      ],
      cons: [
        'No autofocus: you set focus by hand',
        'Camera placement was about 5 mm off in The Gadgeteer’s test',
        'Exhaust hood assembly is tedious; the enclosure leaks a little smoke',
        'Bigger and more complex to set up than open-frame Falcons',
        'Cannot be upgraded to the IR-module versions later',
      ],
      specs: [
        { label: 'Laser', value: '22W or 40W blue diode (40W has a 22W Precise mode)' },
        { label: 'Work area', value: '400 × 415 mm' },
        { label: 'Enclosure', value: 'Fully enclosed, FDA Class 1' },
        { label: 'Camera', value: 'Built-in, for positioning' },
        { label: 'Safety', value: 'Lid interlock, flame, tilt, overheating and dirty-lens sensors' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '22W $899 · 40W $1,349 · with 2W IR: $1,599 / $1,999' },
      ],
      scores: { performance: 8.6, quality: 8.2, ease: 7.6, value: 8.5 },
      body: `## What is it?

The Falcon2 Pro is Creality’s enclosed version of its popular Falcon2 open-frame laser. It adds a full Class 1 enclosure, a camera, an exhaust fan and a crumb tray around the same 400 × 415 mm work area. It comes in 22W, 40W and 60W versions; we review the 60W [separately](/en/review/creality-falcon2-pro-60w/).

On 31 October 2026 the official store sells the 22W for **$899** and the 40W for **$1,349**. Versions with a 2W infrared module (for bare metal and plastics) cost $1,599 and $1,999. You cannot add the IR module later.

## Setting up

The machine arrives mostly built, but the exhaust hood and duct take time. The Gadgeteer found that part tedious, and Tried & True found setup more complex than their previous laser. It is also much larger than the open-frame Falcon2, so measure your bench first.

Focus is manual. There is no autofocus and no crosshair pointer, so you lower the head with the focus block before each job.

## Cutting and engraving

The Gadgeteer used the 40W for several weeks:

- Plexiglass and walnut cut cleanly and quickly.
- Stainless steel took colour engraving.
- It made rubber stamps and coasters with good detail.
- Trying a single-pass cut through 38 mm of wood set the wood alight. The fire sensor stopped the job, which is exactly why the enclosure and sensors matter.

The 40W module also has a 22W Precise mode, so you can trade speed for a finer spot on detailed engraving. Some bundles include a separate 1.6W module for very fine work.

## Camera and software

The camera lets you place designs on the material on screen. The Gadgeteer needed three runs to calibrate it, and placement was still about 5 mm off. Good enough for coasters, not for engraving exactly on a pre-cut part.

It works with Creality’s free Falcon Design Space, LightBurn (about $60 a year) and LaserGRBL. Most reviewers chose LightBurn.

## What owners say

The official store shows 4.86/5 from 49 reviews. Hagensieker’s review found engraving results better than expected. The common complaints are the ones above: manual focus, size, and a slightly leaky enclosure.

## Who should not buy it

- Anyone who mostly marks bare metal: get the IR version or a fibre laser.
- Anyone short on space: the A1 Pro is far more compact.
- Anyone who wants autofocus and a smart workflow: look at the [Falcon A1 Pro](/en/review/creality-falcon-a1-pro/).

## vs rivals

- **vs Falcon2 Pro 60W ($1,899):** about 50% more power for $550 more. Worth it only if you cut thick wood daily.
- **vs Falcon A1 Pro ($1,099):** smaller bed and 20W, but autofocus and a touchscreen. See [Falcon2 Pro vs A1 Pro](/en/compare/creality-falcon2-pro-vs-creality-falcon-a1-pro/).
- **vs LaserPecker LX2 ($1,499):** also enclosed, with a larger 500 × 305 mm bed.

## Final thoughts

If you want to cut real material at home without an open laser beam in the room, the Falcon2 Pro 40W is the sensible pick. Budget an evening for setup and learn to focus by hand.

## Sources

- [The Gadgeteer: Creality Falcon2 Pro 40W review](https://the-gadgeteer.com/2025/01/09/creality-falcon2-pro-40w-laser-engraver-review-a-great-laser-engraver-with-tons-of-features/) (January 2025)
- [Tried & True Creative: beginner’s guide to the Falcon2 Pro](https://www.triedandtrueblog.com/a-beginners-guide-to-the-creality-falcon2-pro-laser-engraver/)
- [John’s Tech Blog: Creality Falcon 2 Pro review](https://hagensieker.com/2024/06/14/creality-falcon-2-pro-review/)
- [TopEngravers: Falcon2 Pro review](https://topengravers.co.uk/creality-falcon2-pro-the-ultimate-enclosed-workhorse-that-just-works/)
- [Creality Falcon official store: Falcon2 Pro](https://www.crealityfalcon.com/products/falcon-2-pro-40w-enclosed-laser-engraver-and-cutter) (price, specs and store rating)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon2-pro-60w',
      name: 'Creality Falcon2 Pro 60W',
      brand: 'Creality',
      model: 'Falcon2 Pro 60W',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#263238',
      released: 2024,
      price_usd: 1899,
      image_url: cdn('Falcon2-pro-60w-laser-engraver-cutter_094a0090-b5d9-4717-87f2-d7e4e83f9f65.png?v=1762439576'),
      gallery: [cdn('60W_png.png?v=1764731357'), cdn('laserengravercutter60whighefficiencycrealityfalcon2pro04.png?v=1757989379')],
      affiliate_url: falcon('falcon2-pro-60w-enclosed-laser-cutter-and-engraver-for-sale-free-gift-kits'),
      affiliate_label: LABEL,
      title: 'Creality Falcon2 Pro 60W review: deep cuts, flimsy details',
      summary: 'The most powerful enclosed Falcon: a 60 W diode laser with 22/40/60 W modes and a 1.6 W fine module, $1,899. Cuts 19 mm plywood in one slow pass; the lid and slats feel cheap.',
      verdict: 'The 60W cuts thick wood that 20–40W lasers need many passes for: MakerHacks cut 3/4-inch (19 mm) plywood in one pass. Tom’s Hardware liked the power but not the thin acrylic top, the wobbly slats or the price. Focus is manual and it is slower at engraving than galvo or CoreXY rivals. Buy it if you cut thick material every week; otherwise the 40W Falcon2 Pro saves $550.',
      best_for: 'Small businesses cutting thick wood and acrylic every week',
      pros: [
        'Three power modes (22 / 40 / 60 W) in one head',
        'MakerHacks cut 19 mm plywood in one pass at 2 mm/s',
        'Bundled 1.6 W module for fine engraving',
        'Fully enclosed with exhaust, air assist, camera and LED lights',
        'Fire, airflow and dirty-lens warnings',
      ],
      cons: [
        'Thin, flexible acrylic top panel and wobbly slats (Tom’s Hardware)',
        'Rolling lid can stick; no pass-through slot',
        'No autofocus',
        'Engraving speed lags rivals like the xTool S1',
        'Thick, dense cuts trigger the smoke and fire sensor',
      ],
      specs: [
        { label: 'Laser', value: '60W blue diode; 22W / 40W / 60W modes' },
        { label: 'Extra module', value: '1.6W fine-engraving module (bundle)' },
        { label: 'Work area', value: '400 × 415 mm' },
        { label: 'Enclosure', value: 'Fully enclosed, Class 1, rolling lid' },
        { label: 'Max speed', value: '25,000 mm/min (claimed)' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn' },
        { label: 'Price', value: '$1,899 with 1.6W module · $1,999 kit · $2,799 with 4W IR' },
      ],
      scores: { performance: 8.8, quality: 7.2, ease: 7.0, value: 7.6 },
      body: `## What is it?

The 60W is the top model of the enclosed Falcon2 Pro range. The laser head switches between Precise (22W), Normal (40W) and Powerful (60W) modes. Bundles add a 1.6W module for fine engraving. The body, bed and 400 × 415 mm work area are shared with the [22W/40W Falcon2 Pro](/en/review/creality-falcon2-pro/).

It costs **$1,899** on the official store with the 1.6W module, or $2,799 with a 4W infrared module.

## Cutting tests

MakerHacks ran the most detailed cutting tests we found:

- 1/4-inch (6 mm) plywood at 100% would not cut in one pass until speed dropped to 10 mm/s or less.
- **3/4-inch (19 mm) plywood cut through in one pass at 2 mm/s**, after careful focusing.
- Their conservative one-pass settings: 1/8-inch basswood at 700 mm/min, 1/2-inch basswood at 150 mm/min, 1/4-inch black acrylic at 180 mm/min.
- Thicker, denser materials set off the smoke and fire detection. That is safe, but it interrupts long cuts.

Tom’s Hardware summed it up as cutting plywood faster than you could draw on it.

## Engraving

At 60W, plywood engraving needed only 10–20% power; 20% looked better but charred a little. MakerHacks found engraving speed at 400 mm/s slower than the xTool S1 and less than half the Ikier K1 Pro Max. For detailed photo engraving, use the 1.6W module.

## Build quality

This is where the 60W disappoints for the price. Tom’s Hardware calls the acrylic top fragile and the material slats wobbly; MakerHacks says small pieces can fall through the slats. Machines for Makers lists a rolling lid that can stick and no pass-through slot for long boards. Focus is manual with a block, and camera calibration is fiddly.

## Who should not buy it

- Hobbyists who mostly engrave: the extra power is wasted.
- Anyone who wants autofocus or a polished machine.
- Anyone who needs to feed long boards through the machine.

## vs rivals

- **vs Falcon2 Pro 40W ($1,349):** same body and bed, less power. Best value for most.
- **vs xTool S1:** larger work area and faster engraving, swappable heads up to 40W, at a higher price.
- **vs Falcon A1 Pro ($1,099):** smarter and more compact, but only 20W.

## Final thoughts

The Falcon2 Pro 60W is a cutting machine first. If one-pass cuts through thick plywood will save you hours each week, it is worth $1,899. If not, the 40W is the better buy.

## Sources

- [Tom’s Hardware: Creality Falcon2 Pro 60W review](https://www.tomshardware.com/maker-stem/creality-falcon2-pro-60-watt-laser-engraver-review)
- [MakerHacks: Creality Falcon 2 Pro 60W review](https://www.makerhacks.com/creality-falcon-2-pro-60w-review/)
- [Machines for Makers: Falcon2 Pro 60W](https://www.machinesformakers.com/products/creality-falcon2-pro-60w)
- [Creality Falcon official store: Falcon2 Pro 60W](https://www.crealityfalcon.com/products/falcon2-pro-60w-enclosed-laser-cutter-and-engraver-for-sale-free-gift-kits) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-t1',
      name: 'Creality Falcon T1',
      brand: 'Creality',
      model: 'Falcon T1',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#1a237e',
      released: 2026,
      price_usd: 2249,
      featured: true,
      image_url: cdn('1600_10ca0c63-5b10-4d52-a704-db96a0327220.png?v=1780466738'),
      gallery: [cdn('1_4bf8e712-9913-4634-8943-9bf3a10d7dc8.jpg?v=1779852059'), cdn('10_0b9e7637-b450-45ad-89b7-8a11920c690c.jpg?v=1779852059')],
      affiliate_url: falcon('creality-falcon-t1-5-in-1-laser-engraver'),
      affiliate_label: LABEL,
      title: 'Creality Falcon T1 review: one galvo laser, five swappable light sources',
      summary: 'An enclosed galvo laser that swaps fibre, diode, MOPA and UV modules in 15 seconds, from $2,249. Very fast and precise; small 175 × 175 mm area and expensive modules.',
      verdict: 'The T1 is a galvo laser for small businesses: very fast marking with fibre on metal, and a 40W diode for wood and acrylic, in one enclosed, camera-equipped machine. TechRadar gave it five stars. Tom’s Hardware warned that only three of five modules shipped at launch, and a complete kit can pass $10,000. Buy it for personalised products at volume, not as a first laser.',
      best_for: 'Small businesses making personalised metal, wood and acrylic products',
      pros: [
        'Swappable fibre, diode, MOPA and UV modules, tool-free in about 15 seconds',
        'Galvo speed: up to 10,000 mm/s line speed',
        'Fibre module marked three aluminium dog tags in 1 min 32 s (CNX Software)',
        'Fully enclosed, AI camera, autofocus, Wi-Fi and USB',
        'Touchscreen and app control; LightBurn supported',
      ],
      cons: [
        'Small 175 × 175 mm work area',
        'Extra modules are expensive ($809–$3,059 each)',
        'Not all modules were available at launch',
        'Cutting acrylic and plywood is slow compared with gantry lasers',
        'Setup and calibration took longer than expected for some owners',
      ],
      specs: [
        { label: 'Type', value: 'Galvo, modular' },
        { label: 'Modules', value: '20W fibre, 20W/40W diode, 60W MOPA, 5W UV' },
        { label: 'Work area', value: '175 × 175 mm' },
        { label: 'Speed', value: 'Up to 10,000 mm/s (line)' },
        { label: 'Repeat accuracy', value: '0.001 mm (claimed)' },
        { label: 'Features', value: 'Enclosed, AI camera, autofocus, touchscreen, Wi-Fi, USB' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn' },
        { label: 'Price', value: '20W diode $2,249 · 20W fibre $2,429 · 40W diode $2,699 · UV $3,599 · MOPA $3,869' },
      ],
      scores: { performance: 9.0, quality: 8.5, ease: 8.0, value: 7.4 },
      body: `## What is it?

Most Falcons are gantry lasers that move the head over the material. The T1 is a **galvo** laser: mirrors steer the beam, so marking is many times faster. What makes it unusual is that the light source is swappable. You can fit a fibre laser for metal, a diode for wood and acrylic, a MOPA for colour on steel, or a UV laser for glass and plastics, without tools in about 15 seconds.

On 31 October 2026 the base machine costs **$2,249** with a 20W diode, $2,429 with 20W fibre, $2,699 with 40W diode, $3,599 with UV and $3,869 with 60W MOPA. CNX Software lists extra modules at $809 (20W diode), $1,259 (40W diode), $2,339 (UV) and $3,059 (MOPA).

## Tests

CNX Software tested the 20W fibre and 40W diode modules:

- **Three aluminium dog tags**, fibre, 4,000 mm/s, 50%, 10 passes: **1 min 32 s**.
- **Aluminium business card**, 40W diode, 1 pass: 29 s.
- **A 2.7 mm coin**, fibre, 10 passes: about 12 minutes. One pass was too pale.
- **3 mm plywood** cut with the 40W in one pass: 1 min 9 s.
- **3 mm red acrylic** cut in 3 slow passes: 5 min 34 s.
- A picture engraved on cardboard at 2,000 mm/s: 6 min 42 s.

TechRadar called the 20W fibre engraving quality the T1’s main strength. Tom’s Hardware found the galvo speed was no contest against gantry machines such as the Falcon A1 Pro.

## Limits

The work area is 175 × 175 mm, typical for galvo lasers but tiny next to a gantry machine. Galvo diode cutting works on thin sheet, but it is slow on acrylic. Tom’s Hardware estimates the machine plus every module, accessory and starter material can pass $10,000, and noted that only three of the five modules were available at launch.

## Software

Falcon Design Space runs on Windows and Android; CNX used both Wi-Fi and USB without problems. There is no Linux version. LightBurn is supported. One owner on Creality’s UK site said setup and calibration took longer than expected.

## Who should not buy it

- Beginners: an A1 or Falcon2 Pro teaches you more for less.
- Anyone who cuts large panels: the area is too small.
- Anyone who only needs metal marking: a single fibre laser costs less.

## vs rivals

- **vs LaserPecker LP5 ($2,429):** also a 20W fibre galvo, but portable and handheld-capable; the T1 is enclosed with swappable modules. See [T1 vs LP5](/en/compare/creality-falcon-t1-vs-laserpecker-lp5/).
- **vs Falcon A1 Pro ($1,099):** bigger bed and better for cutting, far slower at marking.

## Final thoughts

The T1 is a production marking machine with unusual flexibility. Start with the module that matches most of your orders and add others only when the work pays for them.

## Sources

- [CNX Software: Creality Falcon T1 review](https://www.cnx-software.com/2026/08/01/creality-falcon-t1-review-a-5-in-1-modular-laser-engraver-tested-with-20w-fiber-and-40w-diode-laser-modules/) (August 2026)
- [TechRadar: Creality Falcon T1 review](https://www.techradar.com/pro/creality-falcon-t1-5-in-1-laser-engraver-review) (5/5)
- [Tom’s Hardware: Creality Falcon T1 review](https://www.tomshardware.com/maker-stem/creality-falcon-t1-review)
- [Creality Falcon official store: Falcon T1](https://www.crealityfalcon.com/products/creality-falcon-t1-5-in-1-laser-engraver) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-a1-pro',
      name: 'Creality Falcon A1 Pro',
      brand: 'Creality',
      model: 'Falcon A1 Pro',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#455a64',
      released: 2025,
      price_usd: 1099,
      featured: true,
      image_url: cdn('1_1.png?v=1754388094'),
      gallery: [cdn('3_5f39e633-5dec-420e-ac87-95397c1a2fb4.jpg?v=1775094002'), cdn('2_1.jpg?v=1775094002')],
      affiliate_url: falcon('falcon-a1-pro-20w-dual-laser-engraver'),
      affiliate_label: LABEL,
      title: 'Creality Falcon A1 Pro review: a smart, enclosed 20W laser that is easy to live with',
      summary: 'An enclosed 20 W diode laser with autofocus, HD camera, touchscreen and an optional 2 W IR head, $1,099. Easy and safe; thick cuts take many passes.',
      verdict: 'The A1 Pro is the most beginner-friendly enclosed Falcon: autofocus, a camera that places designs on screen, a touchscreen and strong safety sensors. TechRadar cut 6 mm plywood cleanly; CNX Software found it easy, accurate and safe but could not cut 10 mm basswood even in seven passes. If you mostly engrave and cut up to about 6 mm, it is a great buy.',
      best_for: 'Beginners and crafters who want a safe, smart enclosed laser',
      pros: [
        'Autofocus and HD camera with on-screen placement',
        'Fully enclosed with flame detection and tilt/drop stop',
        '20W diode cut 6 mm plywood cleanly (TechRadar)',
        'Swap to a 2W IR head for metal and plastics in under 10 seconds',
        'Compact compared with the Falcon2 Pro',
      ],
      cons: [
        '10 mm basswood did not cut through in 7 passes (CNX Software)',
        'Smaller 358 × 268 mm work area and limited height under the head',
        'The 2W IR head costs extra',
        'Rotary attachment fitting feels improvised (TechRadar)',
        'Aggressive cutting can scorch the machine’s floor',
      ],
      specs: [
        { label: 'Laser', value: '20W blue diode (455 nm); optional 2W IR' },
        { label: 'Work area', value: '358 × 268 mm (measured by CNX Software)' },
        { label: 'Max speed', value: '600 mm/s (claimed)' },
        { label: 'Features', value: 'Autofocus, HD camera, touchscreen, app control' },
        { label: 'Safety', value: 'Enclosed, flame detection, tilt/drop stop' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '$1,099 · dual-laser kit $1,239' },
      ],
      scores: { performance: 7.8, quality: 8.4, ease: 8.9, value: 8.2 },
      body: `## What is it?

The A1 Pro is Creality’s smart enclosed laser. Where the Falcon2 Pro is about raw power, the A1 Pro is about ease: autofocus, an HD camera, a touchscreen and a compact CoreXY body. The 20W blue diode is installed; a 2W infrared head for metal and plastics is optional.

It costs **$1,099** on the official store, or $1,239 for the dual-laser kit.

## Tests

CNX Software spent several weeks with it:

- Power and speed tests on 4 mm basswood found the best engraving at 5,000–6,000 mm/min and 30% power.
- **15 mm basswood dice** engraved in about 15 seconds each, with some charring.
- **3 mm acrylic** cut at 120 mm/min, 60%, in 3 passes: described as excellent.
- **10 mm basswood**: seven passes at 85% with high air assist still did not fully cut through, and the piece had to be pushed out.

TechRadar cut **6 mm plywood** cleanly and found engraving consistent across materials. Other reviewers report 9–10 mm softwood in one pass, so results vary with wood density. Plan on 6 mm as the comfortable limit. TechTimes called cutting adequate rather than exceptional.

## Ease of use

This is where the A1 Pro shines. Autofocus and camera work well once calibrated, and the touchscreen shows job progress. Swapping to the IR head takes under 10 seconds. The Gadgeteer and TechRadar both found it suitable for beginners.

## Problems

- Limited height under the head: a honeycomb bed may not fit with thick stock.
- bgeek’s reviewer had wood ignite during a test and damage the bottom of the unit; CNX also saw marks from aggressive cutting.
- No Linux software.
- TechRadar found the rotary attachment fitting improvised.

## Who should not buy it

- Anyone who cuts 10 mm+ wood regularly: get the Falcon2 Pro 40W or 60W.
- Anyone who needs a big bed.

## vs rivals

- **vs Falcon2 Pro 40W ($1,349):** twice the power and a bigger bed, but manual focus. See [Falcon2 Pro vs A1 Pro](/en/compare/creality-falcon2-pro-vs-creality-falcon-a1-pro/).
- **vs Falcon A1 ($549):** half the price, 10W, no autofocus.
- **vs LaserPecker LX2 ($1,499):** bigger bed, higher price.

## Final thoughts

The A1 Pro is the Falcon to buy if you value a smooth, safe experience over maximum cutting depth.

## Sources

- [CNX Software: Creality Falcon A1 Pro review](https://www.cnx-software.com/2026/02/15/creality-falcon-a1-pro-review-an-easy-to-use-fully-enclosed-20w-laser-engraver-with-a-built-in-hd-camera/) (February 2026)
- [TechRadar: Creality Falcon A1 Pro review](https://www.techradar.com/pro/creality-falcon-a1-pro-laser-engraver-review)
- [The Gadgeteer: Falcon A1 Pro 20W review](https://the-gadgeteer.com/2025/10/13/creality-falcon-a1-pro-20w-laser-engraver-and-cutter-review-fully-enclosed-crafting-with-lasers/)
- [bgeek: Creality A1 Pro review](https://bgeek.eu/reviews/creality-a1-pro-review/)
- [TechTimes: Falcon A1 Pro review](https://www.techtimes.com/articles/312085/20250926/creality-falcon-a1-pro-review-testing-dual-laser-desktop-engraver.htm)
- [Creality Falcon official store: Falcon A1 Pro](https://www.crealityfalcon.com/products/falcon-a1-pro-20w-dual-laser-engraver) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-a1',
      name: 'Creality Falcon A1 (10W)',
      brand: 'Creality',
      model: 'Falcon A1',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#546e7a',
      released: 2025,
      price_usd: 549,
      image_url: cdn('Falcon_A1_png__3.png?v=1762439554'),
      gallery: [cdn('A1_basic_kits.png?v=1768879154'), cdn('Falcon_A1_all_in_ont_kit_acrylic.png?v=1758267211')],
      affiliate_url: falcon('falcon-a1-10w-enclosed-laser-engraver-and-cutter'),
      affiliate_label: LABEL,
      title: 'Creality Falcon A1 review: a safe, enclosed first laser for $549',
      summary: 'A pre-assembled, enclosed 10 W diode laser with camera and a 381 × 305 mm bed. One owner ran it 4–7 hours a day for weeks; 10 W limits speed and metal work.',
      verdict: 'The A1 arrives assembled and enclosed, so beginners can start safely within an hour. Grouchy Farmer ran one 4–7 hours a day for weeks and found it reliable, with tight box-joint kerfs. The 10W laser cannot mark bare metal, rarely reaches the 600 mm/s headline speed, and the camera calibration is weak. A very good learning machine at $549.',
      best_for: 'Beginners who want an enclosed laser for wood, leather and acrylic',
      pros: [
        'Arrives fully assembled; running in under an hour',
        'Enclosed with interlocks on both covers',
        'Generous 381 × 305 mm bed for its size',
        'Cut 1/4-inch plywood cleanly; accurate kerf for box joints',
        'Reliable in heavy daily use; LightBurn compatible',
      ],
      cons: [
        '10W cannot engrave bare metal or cut foil',
        'Rarely reaches its 600 mm/s speed in real jobs',
        'Stops with a beep but no error message',
        'Weak built-in fan with a short hose; no honeycomb bed',
        'Camera calibration is fiddly and inaccurate near the edges',
      ],
      specs: [
        { label: 'Laser', value: '10W blue diode' },
        { label: 'Work area', value: '381 × 305 mm' },
        { label: 'Motion', value: 'CoreXY, up to 600 mm/s (claimed)' },
        { label: 'Features', value: 'Pre-assembled, HD camera, batch processing' },
        { label: 'Enclosure', value: 'Fully enclosed with lid interlocks' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn' },
        { label: 'Price', value: '$549 · basic kit $599 · all-in-one kit $699' },
      ],
      scores: { performance: 6.8, quality: 7.8, ease: 8.6, value: 8.4 },
      body: `## What is it?

The Falcon A1 is Creality’s entry-level enclosed laser: a 10W diode in a closed box with a camera and CoreXY motion. It is the cheaper sibling of the [A1 Pro](/en/review/creality-falcon-a1-pro/), without autofocus or the touchscreen.

It costs **$549** on the official store (list $599).

## Setting up

The A1 ships fully assembled. CGMagazine set aside a whole evening and was running in under an hour. Both covers have safety switches that stop the laser when opened.

## In daily use

Grouchy Farmer bought one at full retail and ran it 4–7 hours a day for several weeks:

- Made 12 key tags per 12 × 12-inch sheet of 1/8-inch plywood.
- Cut dense 1/4-inch plywood cleanly.
- Cut 3/8-inch white oak slowly, sometimes needing two passes.
- Box joints fitted tightly thanks to an accurate kerf.
- Powder-coated steel bottle openers marked well, but bare metal and thin foil were beyond it.

LessFume’s critical guide argues the 10W laser means real jobs rarely reach the 600 mm/s speed, and reported trouble engraving walnut.

## Problems

- The machine sometimes beeped and stopped with no error message; a power cycle fixed it (about four times in Grouchy Farmer’s weeks of use).
- The built-in fan is weak and the hose is only about 4 feet long.
- No honeycomb bed in the base kit.
- Camera calibration is a pain and inaccurate near the edges.

## Who should not buy it

- Anyone who wants to mark bare metal: get an IR or fibre laser.
- Anyone planning production volume: a 20W+ laser saves hours.

## vs rivals

- **vs Falcon A1C ($269–$399):** cheaper and smaller (150 × 150 mm), with an optional IR module. See [A1 vs A1C](/en/compare/creality-falcon-a1-vs-creality-falcon-a1c/).
- **vs Falcon A1 Pro ($1,099):** 20W, autofocus and a touchscreen for twice the price.
- **vs Falcon2 22W ($549):** same price, more power and a bigger bed, but open-frame.

## Final thoughts

The A1 is a safe, reliable place to learn laser work. Add a honeycomb bed and a better exhaust, and it will serve a hobbyist for years.

## Sources

- [Grouchy Farmer: Creality Falcon A1 review](https://grouchyfarmer.com/2025/06/05/laser-engravers-creality-falcon-a1-review/) (June 2025, bought at retail)
- [CGMagazine: Creality Falcon A1 review](https://www.cgmagonline.com/review/hardware/creality-falcon-a1-laser/)
- [3DPrint.com: Creality Falcon A1](https://3dprint.com/317821/creality-falcon-a1-a-productive-consumer-laser/)
- [LessFume: Falcon A1 10W problems to know](https://lessfume.com/creality-falcon-a1-guide/)
- [Creality Falcon official store: Falcon A1](https://www.crealityfalcon.com/products/falcon-a1-10w-enclosed-laser-engraver-and-cutter) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-a1c',
      name: 'Creality Falcon A1C',
      brand: 'Creality',
      model: 'Falcon A1C',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#7e57c2',
      released: 2026,
      price_usd: 369,
      image_url: cdn('4_009754c3-fa72-4811-ad18-8ea8ddd49d58.png?v=1781173628'),
      gallery: [cdn('7_c0c782ca-c563-40d1-81a7-c56f0ac6d8b8.jpg?v=1781173650'), cdn('5_ce14b059-d06e-4e94-a98c-80b6733b411e.jpg?v=1781173653')],
      affiliate_url: falcon('creality-falcon-a1c-laser-engraver-with-ai-camera'),
      affiliate_label: LABEL,
      title: 'Creality Falcon A1C review: a tiny enclosed laser for coasters and gifts',
      summary: 'A compact Class 1 laser with 5 W or 10 W diode, optional AI camera and IR module, from $269. Sharp results and great value; the 150 × 150 mm area is small.',
      verdict: 'The A1C is the cheapest enclosed Falcon and the easiest to fit on a desk. 3DPrinting.com scored it 4.5/5 and got its best results on slate and stainless steel with the IR module; TechRadar was instantly impressed. The 150 × 150 mm area is small, the head doesn’t lift after focusing, and software has rough edges. For coasters, tags and gifts it is excellent value.',
      best_for: 'Beginners and gift makers who want a small, safe laser on a desk',
      pros: [
        'Fully enclosed Class 1 from $269',
        'Lifting platform gives 148 mm of clearance for taller objects',
        '10W cut 5 mm basswood in one pass (3DPrinting.com)',
        'Optional 1.2W IR module marks stainless steel and slate cleanly',
        'Built-in presets make first projects easy',
      ],
      cons: [
        'Small 150 × 150 mm work area',
        'Head doesn’t lift after focusing; it jammed on a bowl',
        'Camera costs extra ($30) and its cable came loose in transit',
        'Time estimates about 25% short on multi-layer jobs; no job history',
        'Wi-Fi needs 2.4 GHz; no air purifier included',
      ],
      specs: [
        { label: 'Laser', value: '5W or 10W blue diode; optional 1.2W IR (1064 nm)' },
        { label: 'Work area', value: '150 × 150 mm, up to 148 mm clearance' },
        { label: 'Speed', value: 'Up to 15,000 mm/min' },
        { label: 'Enclosure', value: 'Class 1, fully enclosed' },
        { label: 'Size and weight', value: '336 × 377 × 341 mm, 9.8 kg' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn' },
        { label: 'Price', value: '5W $269 · 10W $369 · with AI camera $299 / $399' },
      ],
      scores: { performance: 7.0, quality: 7.8, ease: 8.6, value: 9.0 },
      body: `## What is it?

The A1C is Creality’s smallest enclosed laser, launched in mid-2026. It is a Class 1 box that fits on a desk, with a 5W or 10W diode, an optional AI camera, and an optional infrared module for metal. A lifting platform lets you engrave objects up to 148 mm tall.

On 31 October 2026 it costs **$269** (5W) or **$369** (10W). The AI-camera versions cost $299 and $399.

## Tests

3DPrinting.com used the 10W with the camera and the 1.2W IR kit for about a month:

- Cork and bamboo coasters came out well on the built-in presets.
- Denim engraved at 35% and 10,000 mm/min.
- **5 mm basswood cut through in one pass** at 90% and 300 mm/min. The 3 mm preset did not cut 5 mm.
- The IR module gave the best results of the review on **brushed stainless steel** (about 30 minutes) and **slate**, and marked black marble. White marble did not mark.
- The time estimate for a 30-minute job was within 7 seconds, but multi-layer jobs ran about 25% longer than estimated.

The final score was 4.5/5, with value rated 5/5 and software and camera 3.5/5.

## Problems

- **The area is small.** TechRadar notes that 150 × 150 mm is a size usually seen on fibre lasers, not diodes. Fine for coasters and tags, not for multiple parts at once.
- **The head doesn’t lift after focusing.** Anything taller than a coaster must be flat across the bed or sit near the home corner; 3DPrinting.com jammed it on a bowl.
- The camera cable came loose in shipping. The fan stops when the laser stops, there is no job history, and library search is poor.
- Wi-Fi needs 2.4 GHz and pairing via a side button.

## Who should not buy it

- Anyone making signs or larger panels.
- Anyone cutting more than 5 mm wood.

## vs rivals

- **vs Falcon A1 ($549):** much bigger 381 × 305 mm bed, 10W only, no IR option. See [A1 vs A1C](/en/compare/creality-falcon-a1-vs-creality-falcon-a1c/).
- **vs LaserPecker LP2 ($549):** portable and handheld-capable, but open and engraving-only.

## Final thoughts

If you want a small, safe laser for personalised gifts, the A1C 10W with camera ($399) is the version to buy. Add the IR kit if you want to mark metal.

## Sources

- [3DPrinting.com: hands-on review of the Falcon A1C](https://3dprinting.com/reviews/hands-on-review-creality-falcon-a1c-enclosed-laser-engraver/) (4.5/5)
- [TechRadar: Creality Falcon A1C review](https://www.techradar.com/pro/creality-falcon-a1c-laser-engraver-review)
- [Igor’sLAB: Creality Falcon A1C](https://www.igorslab.de/en/creality-falcon-a1c-compact-class-1-laser-interchangeable-modules-ai-camera/)
- [Creality Falcon official store: Falcon A1C with AI camera](https://www.crealityfalcon.com/products/creality-falcon-a1c-laser-engraver-with-ai-camera) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon2-40w',
      name: 'Creality Falcon2 40W',
      brand: 'Creality',
      model: 'Falcon2 40W',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#424242',
      released: 2023,
      price_usd: 639,
      image_url: cdn('Falcon2_40W.png?v=1762439466'),
      gallery: [cdn('falcon2-40w-basic-kits.jpg?v=1757990697'), cdn('falcon_2_40w-laser-engraver2.jpg?v=1762439505')],
      affiliate_url: falcon('laser-engraver-cutter-falcon2-40w-engraving-machine'),
      affiliate_label: LABEL,
      title: 'Creality Falcon2 40W review: big cutting power for $639, but no enclosure',
      summary: 'An open-frame 40 W diode laser with air assist and a 400 × 415 mm bed, now $639. Very strong cutter for the money; needs an enclosure, goggles and ventilation.',
      verdict: 'The open-frame Falcon2 40W gives you the cutting power of a $1,349 enclosed Falcon2 Pro for half the price. Hackster’s reviewer was impressed by the power but would only recommend it with an enclosure; it is heavy and focus is manual. Independent cutting data is thinner than for other Falcons, so treat this as a researched preview. Buy it only if you can set up a safe, ventilated space.',
      best_for: 'Experienced makers with a ventilated workshop who want maximum cutting per dollar',
      pros: [
        '40W diode for $639 (down from $1,319)',
        'Creality rates it for 20 mm cork and 0.15 mm stainless steel in one pass',
        'Large 400 × 415 mm bed with integrated air assist',
        'Works with LightBurn and LaserGRBL, plus TF-card offline jobs',
        'Flame and tilt sensors',
      ],
      cons: [
        'Open frame: needs goggles, an enclosure or a dedicated room',
        'No motorised Z-axis or autofocus',
        'Bulky and heavy (Hackster)',
        'No camera',
        'Few independent cutting tests of this exact model',
      ],
      specs: [
        { label: 'Laser', value: '40W blue diode' },
        { label: 'Work area', value: '400 × 415 mm' },
        { label: 'Max speed', value: '25,000 mm/min' },
        { label: 'Cutting (claimed)', value: '20 mm cork, 0.15 mm stainless steel in one pass' },
        { label: 'Features', value: 'Air assist, flame and tilt sensors, TF card' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '$639 · basic kit $739 · all-in-one $929' },
      ],
      scores: { performance: 8.4, quality: 7.2, ease: 6.6, value: 8.8 },
      body: `## What is it?

The Falcon2 40W is the open-frame version of Creality’s 40W diode laser: the same power as the enclosed [Falcon2 Pro 40W](/en/review/creality-falcon2-pro/), without the box, camera or exhaust. It shares the 400 × 415 mm frame of the [Falcon2 22W](/en/review/creality-falcon2-22w/).

Its price has fallen a long way: **$639** on 31 October 2026, against a $1,319 list price.

## What it can do

Creality rates it for one-pass cuts through 20 mm cork and 0.15 mm stainless steel, at up to 25,000 mm/min. Independent reviews are thinner than for other Falcons:

- **Hackster** found the 40W output impressive and cut aluminium foil well, but called the machine bulky and very heavy, and said it would only recommend it wholeheartedly with an enclosure.
- The Gadgeteer’s test of the enclosed Falcon2 Pro 40W (same laser) found cutting fast and very powerful, with air assist essential to keep cuts free of soot.
- A buyer testimonial on Creality’s store says it cuts 3 mm plywood about five times faster than their 10W laser. That is a vendor-hosted claim, so treat it carefully.

## Safety

A 40W diode with no enclosure is a serious tool. You need laser goggles rated for 445–455 nm for everyone in the room, a fire-safe surface, and ventilation for smoke. Creality sells a protection kit ($1,299 bundle) with an enclosure. Add that cost before comparing with the enclosed Falcon2 Pro.

## Who should not buy it

- Anyone working in a shared room, a flat or near children.
- Beginners: the enclosed A1 or A1 Pro is far safer.

## vs rivals

- **vs Falcon2 22W ($549):** finer detail, less cutting power. See [Falcon2 22W vs 40W](/en/compare/creality-falcon2-22w-vs-creality-falcon2-40w/).
- **vs Falcon2 Pro 40W ($1,349):** same laser, with enclosure, camera and exhaust.

## Final thoughts

The Falcon2 40W is the most cutting power per dollar in the Creality range. Budget for safety gear and ventilation, or spend the extra on the enclosed Pro.

## Sources

- [Hackster.io: review of the Creality Falcon2](https://www.hackster.io/news/review-creality-falcon2-laser-cutter-engraver-45cc79a4c291)
- [The Gadgeteer: Falcon2 Pro 40W review](https://the-gadgeteer.com/2025/01/09/creality-falcon2-pro-40w-laser-engraver-review-a-great-laser-engraver-with-tons-of-features/) (same 40W laser, enclosed)
- [Atomm: Creality Falcon models and real costs](https://www.atomm.com/blog/2679-what-is-creality-falcon)
- [Creality Falcon official store: Falcon2 40W](https://www.crealityfalcon.com/products/laser-engraver-cutter-falcon2-40w-engraving-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon2-22w',
      name: 'Creality Falcon2 22W',
      brand: 'Creality',
      model: 'Falcon2 22W',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#616161',
      released: 2023,
      price_usd: 549,
      image_url: cdn('Falcon2_22W_6.png?v=1774338272'),
      gallery: [cdn('falcon2_22W_basic_kit_1.png?v=1757129075'), cdn('falcon_2_22w-laser-engraver3.jpg?v=1762439489')],
      affiliate_url: falcon('falcon2-22w-laser-engraver-cutter'),
      affiliate_label: LABEL,
      title: 'Creality Falcon2 22W review: the open-frame all-rounder',
      summary: 'A 22 W open-frame diode laser with air assist, safety sensors and a 400 × 415 mm bed, $549. 3DWithUs scored it 4.6/5; it needs goggles, ventilation and a honeycomb bed.',
      verdict: 'The Falcon2 22W balances detail and cutting power: 3DWithUs cut 3 mm basswood and leather in one pass and colour-engraved stainless steel, and scored it 4.6/5. It arrives mostly assembled with flame and tilt sensors and air assist. It is open-frame with manual focus and no honeycomb bed. A strong, proven hobby laser at $549 if you have a safe space.',
      best_for: 'Hobbyists who want detail and solid cutting in an open-frame laser',
      pros: [
        'Four 6W diodes combined into a fine 0.08 × 0.1 mm spot',
        '3 mm basswood and leather cut in one pass at 600 mm/min',
        'Colour engraving on stainless steel',
        'Integrated air assist, flame and tilt sensors, emergency stop',
        'Mostly assembled: feet, air pump and laser head to fit',
      ],
      cons: [
        'Open frame: needs goggles, ventilation and a fire-safe surface',
        'No autofocus',
        'Honeycomb bed not included',
        'Large footprint (about 66 × 56 cm)',
        'Hard to line up work from the side',
      ],
      specs: [
        { label: 'Laser', value: '22W blue diode (4 × 6W, FAC spot compression)' },
        { label: 'Spot size', value: '0.08 × 0.1 mm' },
        { label: 'Work area', value: '400 × 415 mm' },
        { label: 'Max speed', value: '25,000 mm/min' },
        { label: 'Safety', value: 'Flame and tilt sensors, emergency stop, key lock' },
        { label: 'Software', value: 'Falcon Design Space, LightBurn, LaserGRBL' },
        { label: 'Price', value: '$549 · basic kit $589 · all-in-one $789' },
      ],
      scores: { performance: 8.0, quality: 7.8, ease: 7.4, value: 8.7 },
      body: `## What is it?

The Falcon2 22W is Creality’s most popular open-frame laser. It combines four 6W diodes into one compressed beam, with integrated air assist and safety sensors, on a 400 × 415 mm frame.

It costs **$549** on the official store (list $719).

## Tests

3DWithUs, which reviews many lasers, scored it 4.6/5 after these projects:

- Bird and tent shapes cut from basswood at 600 mm/min, 100%, with full air assist: clean edges.
- **3 mm leather** cut in one pass at 600 mm/min and engraved at 3,000 mm/min, 30%.
- A **jewellery box** from six 3 mm basswood pieces, cut and engraved over several hours.
- **Colour engraving on stainless steel**.
- A glass jar on the rotary at 6,000 mm/min, 40%. One glass cracked, a reminder that glass needs care.

GeekExtreme reports it cut 10 mm black acrylic in one pass, and argues the 22W’s finer spot suits detailed artwork better than the 40W.

## Setting up and safety

Go Laser Go found it arrives prebuilt; you fit the feet, air pump and laser head. Safety features include flame and tilt sensors, an emergency stop and a key lock. It is still open-frame, so wear 455 nm goggles and ventilate the room.

## Problems

- No autofocus; Creality’s own blog lists this as a drawback.
- No honeycomb bed in the base kit.
- Lining up work from the side is awkward.
- The footprint is large, about 66 × 56 cm.

## Who should not buy it

- Anyone without a ventilated space.
- Anyone who wants push-button simplicity: the enclosed A1 is easier.

## vs rivals

- **vs Falcon2 40W ($639):** $90 more for much faster cutting, coarser spot. See [Falcon2 22W vs 40W](/en/compare/creality-falcon2-22w-vs-creality-falcon2-40w/).
- **vs Falcon A1 ($549):** same price, enclosed and pre-assembled, but only 10W.
- **vs CR-Laser Falcon 10W ($205):** much cheaper, slower, no air assist built in.

## Final thoughts

The Falcon2 22W is a proven, well-documented hobby laser. Add a honeycomb bed and an exhaust, and it handles almost any craft project.

## Sources

- [3DWithUs: Creality Falcon2 22W review and settings](https://3dwithus.com/creality-falcon2-review-22w-laser-cutter-engraver-settings) (4.6/5)
- [Make Tech Easier: Falcon2 22W review](https://maketecheasier.com/review/creality-falcon2-laser-engraver-cutter/)
- [Go Laser Go: Creality Falcon2 22W review, part 1](https://golasergo.com/creality-falcon2-22w-review-part-1/)
- [GeekExtreme: Falcon2 22W review](https://www.geekextreme.com/creality-falcon2-pro-22w-laser-engraver-cutter-review-crealitycom/)
- [Creality Falcon official store: Falcon2 22W](https://www.crealityfalcon.com/products/falcon2-22w-laser-engraver-cutter) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-cr-laser-falcon-10w',
      name: 'Creality CR-Laser Falcon 10W',
      brand: 'Creality',
      model: 'CR-Laser Falcon 10W',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#757575',
      released: 2022,
      price_usd: 205,
      image_url: cdn('10W_png.png?v=1762439467'),
      gallery: [cdn('10w-engraver-basic.jpg?v=1757990621'), cdn('10w-engraver-protection.jpg?v=1757990621')],
      affiliate_url: falcon('low-wattage-laser-engraver-cutter-cr-falcon-10w-machine'),
      affiliate_label: LABEL,
      title: 'Creality CR-Laser Falcon 10W review: a big-bed laser for $205',
      summary: 'An open-frame 10 W diode laser with a 0.06 × 0.08 mm spot and 400 × 415 mm bed, now $205. Detailed and quiet; 8 mm wood took two passes and safety is basic.',
      verdict: 'The CR-Laser Falcon 10W was a $489 laser in 2022; at $205 it is one of the cheapest ways to get a big-bed, detailed engraver. Make Tech Easier found it quiet and detailed, cutting 8 mm wood in two passes. Safety features are minimal, instructions are tiny, and it lacks the air assist and sensors of the Falcon2. Great value for careful hobbyists.',
      best_for: 'Budget hobbyists engraving wood, leather and paper',
      pros: [
        '$205, down from $489 at launch',
        'Fine 0.06 × 0.08 mm spot for detailed engraving',
        'Large 400 × 415 mm work area',
        'Quiet and quick to assemble (15–30 minutes)',
        'Works with LightBurn and LaserGRBL',
      ],
      cons: [
        '8 mm wood needed two passes (Make Tech Easier)',
        'Minimal safety features; open frame',
        'Tiny printed instructions; use the setup video',
        'No engraving mat or honeycomb included',
        'Older 2022 design without the Falcon2’s sensors',
      ],
      specs: [
        { label: 'Laser', value: '10W blue diode' },
        { label: 'Spot size', value: '0.06 × 0.08 mm' },
        { label: 'Work area', value: '400 × 415 mm' },
        { label: 'Max speed', value: '10,000 mm/min' },
        { label: 'Cutting (claimed)', value: 'Up to 12 mm wood in one pass' },
        { label: 'Software', value: 'LaserGRBL, LightBurn, Falcon Design Space' },
        { label: 'Price', value: '$205 · basic kit $299 · all-in-one $399' },
      ],
      scores: { performance: 6.8, quality: 7.2, ease: 7.2, value: 9.0 },
      body: `## What is it?

The CR-Laser Falcon 10W is Creality’s original open-frame laser from 2022, updated with a 10W module. It has a large 400 × 415 mm frame and a very fine spot, but none of the Falcon2’s air assist or extra sensors.

It costs **$205** on the official store on 31 October 2026. Make Tech Easier paid $489 for it in 2022.

## Tests

Make Tech Easier used it for its 2022 review:

- An eagle engraved on about 4 mm scrap wood: about 3 minutes.
- A cat head from a JPEG: 6–7 minutes.
- A heart cut from about 8 mm wood: one pass left gaps; a second pass cleared it. 10–15 minutes total.

Creality claims one-pass cuts up to 12 mm. Reviewer results vary widely, so plan on several passes for anything over about 5 mm. Clever Creations scored the 10W 3.5/5 and called it very good at what it is supposed to do.

## Setting up

Assembly takes 15–30 minutes. The printed instructions are tiny, so most reviewers recommend the setup video. 3D Printing Industry praised the build quality but noted Creality cut safety features to reach a low price.

## Safety

There is no enclosure. You need laser goggles for everyone in the room, a fire-safe surface and ventilation. Never leave it running unattended.

## Who should not buy it

- Anyone who wants to cut thicker wood quickly: the Falcon2 22W is far stronger.
- Anyone in a shared living space without ventilation.

## vs rivals

- **vs CR-Laser Falcon 5W ($119):** half the power, less than $100 cheaper. See [5W vs 10W](/en/compare/creality-cr-laser-falcon-5w-vs-creality-cr-laser-falcon-10w/).
- **vs Falcon2 22W ($549):** twice the power, air assist and safety sensors.
- **vs LaserPecker LP1 Plus ($199):** portable and tiny, but engraving-only.

## Final thoughts

At $205, the CR-Laser Falcon 10W is a lot of engraver for the money. Treat it as an engraver that can cut thin wood, and invest in safety gear.

## Sources

- [Make Tech Easier: CR-Laser Falcon 10W review](https://maketecheasier.com/review/creality-cr-laser-falcon-engraver/) (2022)
- [3D Printing Industry: CR-Laser Falcon review](https://3dprintingindustry.com/news/review-creality-cr-laser-falcon-engraver-217640/)
- [Clever Creations: CR-Laser Falcon review](https://clevercreations.org/creality-cr-laser-falcon-review-specs/) (3.5/5)
- [Creality Falcon official store: CR-Laser Falcon 10W](https://www.crealityfalcon.com/products/low-wattage-laser-engraver-cutter-cr-falcon-10w-machine) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'creality-cr-laser-falcon-5w',
      name: 'Creality CR-Laser Falcon 5W',
      brand: 'Creality',
      model: 'CR-Laser Falcon 5W',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#9e9e9e',
      released: 2022,
      price_usd: 119,
      image_url: cdn('5W_png.png?v=1762439474'),
      gallery: [cdn('5w-laser-engraving-with-high-precision.jpg?v=1757129291'), cdn('5w-higher-productivity-at-high-speed.jpg?v=1757129291')],
      affiliate_url: falcon('low-wattage-laser-engraver-cutter-cr-falcon-5w'),
      affiliate_label: LABEL,
      title: 'Creality CR-Laser Falcon 5W review: the $119 way to try laser engraving',
      summary: 'Creality’s cheapest laser: a 5 W open-frame diode with a fine 0.06 mm spot, $119. Good beginner engraver; cuts only about 5 mm wood and has minimal safety features.',
      verdict: 'The CR-Laser Falcon 5W is the cheapest way into Creality lasers. Tom’s Hardware called it a good beginner laser with minimal safety features; it cuts wood up to about 5 mm and needs several slow passes for more. The Gadgeteer found it easy to assemble with great engraving output. At $119 it is a fine way to learn, as long as you buy goggles too.',
      best_for: 'First-time users who want to learn laser engraving cheaply',
      pros: [
        'Only $119 on the official store',
        'Fine 0.06 mm spot for detailed engraving',
        'Easy assembly, about 30 minutes, tools included',
        'Large frame for its price',
        'Works with LightBurn and LaserGRBL',
      ],
      cons: [
        'Cuts wood only up to about 5 mm (Tom’s Hardware)',
        'Minimal safety features; open frame',
        'Darker engravings need several passes',
        'Can burn through into the surface beneath; use a backstop',
        'Old 2022 design; reviews are a few years old',
      ],
      specs: [
        { label: 'Laser', value: '5W blue diode' },
        { label: 'Spot size', value: '0.06 mm' },
        { label: 'Cutting', value: 'Wood up to about 5 mm (Tom’s Hardware)' },
        { label: 'Machine size', value: '568 × 632 × 198 mm' },
        { label: 'Software', value: 'LaserGRBL, LightBurn, Falcon Design Space' },
        { label: 'Price', value: '$119 · basic kit $199 · all-in-one $329' },
      ],
      scores: { performance: 5.8, quality: 7.0, ease: 7.4, value: 8.8 },
      body: `## What is it?

The CR-Laser Falcon 5W was Creality’s first laser engraver. It is a simple open-frame machine with a 5W diode and a very fine 0.06 mm spot. It is now the cheapest machine in the range at **$119** on the official store (The Gadgeteer paid $349 in 2022).

## Reviews

- **Tom’s Hardware** called it a good beginner laser with only minimal safety features. It cut wood up to about 5 mm; thicker material needed several slow passes at 100%.
- **The Gadgeteer** assembled it in about 30 minutes with the included tools, and found 5W plenty for fun projects. Lighthouse and portrait engravings looked great after several passes for darker tones. A plaque cut burned straight through into the cardboard beneath, so put a backstop or honeycomb under your work.
- Creality’s store page shows a handful of mostly positive buyer reviews; one buyer wanted a clearer manual for laser settings.

All of these reviews date from 2022, so firmware and software have moved on since.

## Safety

There is no enclosure and few safety features. Wear 455 nm laser goggles, work on a fire-safe surface, ventilate the room and never leave it running.

## Who should not buy it

- Anyone who wants to cut wood or acrylic regularly.
- Anyone who wants an enclosed laser: the Falcon A1C starts at $269.

## vs rivals

- **vs CR-Laser Falcon 10W ($205):** twice the power for $86 more, the better buy if you plan to cut. See [5W vs 10W](/en/compare/creality-cr-laser-falcon-5w-vs-creality-cr-laser-falcon-10w/).
- **vs Falcon A1C 5W ($269):** enclosed and much safer, with a smaller area.

## Final thoughts

The 5W is a cheap trial of laser engraving. If you think you will stick with the hobby, the 10W or the enclosed A1C is money better spent.

## Sources

- [Tom’s Hardware: Creality CR-Laser Falcon review](https://www.tomshardware.com/reviews/creality-cr-laser-falcon)
- [The Gadgeteer: CR-Laser Falcon review](https://the-gadgeteer.com/2022/05/30/creality-cr-laser-falcon-engraver-review-not-the-pew-pew-kind-of-laser-but-the-kind-of-laser-that-makes-cool-stuff/) (May 2022)
- [Creality Falcon official store: CR-Laser Falcon 5W](https://www.crealityfalcon.com/products/low-wattage-laser-engraver-cutter-cr-falcon-5w) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'creality-falcon2-pro-vs-creality-falcon-a1-pro',
      title: 'Creality Falcon2 Pro vs Falcon A1 Pro: power or convenience?',
      products: ['creality-falcon2-pro', 'creality-falcon-a1-pro'],
      intro: 'Both are enclosed Creality lasers with cameras. The Falcon2 Pro offers up to 40W and a 400 × 415 mm bed; the A1 Pro offers autofocus, a touchscreen and a compact body.',
      verdict: 'Choose the Falcon2 Pro 40W ($1,349) if you cut wood thicker than 6 mm or need the bigger bed. Choose the A1 Pro ($1,099) if you mostly engrave and want autofocus, a smoother workflow and the option of a 2W IR head for metal.',
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-a1-vs-creality-falcon-a1c',
      title: 'Creality Falcon A1 vs A1C: which small enclosed laser?',
      products: ['creality-falcon-a1', 'creality-falcon-a1c'],
      intro: 'Two entry-level enclosed Falcons. The A1 has a 381 × 305 mm bed; the A1C is smaller, cheaper and adds an optional IR module.',
      verdict: 'Pick the A1 ($549) for bigger projects like signs and box kits. Pick the A1C 10W with camera ($399) for coasters, tags and gifts, especially if you want to add IR for stainless steel and slate.',
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon2-22w-vs-creality-falcon2-40w',
      title: 'Creality Falcon2 22W vs 40W: detail or cutting speed?',
      products: ['creality-falcon2-22w', 'creality-falcon2-40w'],
      intro: 'The same open-frame machine with two laser heads, $90 apart.',
      verdict: 'Buy the 22W ($549) for detailed engraving and occasional cuts up to about 3–5 mm. Buy the 40W ($639) if cutting is your main job: it cuts thick material much faster. Both need goggles and ventilation.',
      updated_at: DATE,
    },
    {
      slug: 'creality-cr-laser-falcon-5w-vs-creality-cr-laser-falcon-10w',
      title: 'CR-Laser Falcon 5W vs 10W: Creality’s budget lasers compared',
      products: ['creality-cr-laser-falcon-5w', 'creality-cr-laser-falcon-10w'],
      intro: 'Creality’s two cheapest open-frame lasers, $86 apart.',
      verdict: 'Choose the 5W ($119) only to try engraving on a tiny budget. Choose the 10W ($205) if you also want to cut thin wood and leather: twice the power is worth the small difference.',
      updated_at: DATE,
    },
    {
      slug: 'creality-falcon-t1-vs-laserpecker-lp5',
      title: 'Creality Falcon T1 vs LaserPecker LP5: galvo lasers for small businesses',
      products: ['creality-falcon-t1', 'laserpecker-lp5'],
      intro: 'Two 20W fibre galvo lasers for metal marking at a similar price. The T1 is an enclosed modular workstation; the LP5 is portable.',
      verdict: 'Choose the Falcon T1 if you want an enclosed machine with swappable diode, MOPA and UV modules for wood, colour and glass work as well as metal. Choose the LaserPecker LP5 if you need portability for markets and on-site engraving.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-creality-falcon-laser-engravers',
      title: 'The best Creality Falcon laser engravers in 2026',
      category: 'laser-engravers',
      intro: 'All ten current Creality Falcon lasers ranked by use case, using independent tests and official prices on 31 October 2026.',
      items: [
        { slug: 'creality-falcon2-pro', award: 'Best overall', note: 'Enclosed 40W with a 400 × 415 mm bed for $1,349.' },
        { slug: 'creality-falcon-a1-pro', award: 'Easiest to use', note: 'Autofocus, camera and touchscreen; cuts up to about 6 mm.' },
        { slug: 'creality-falcon-a1c', award: 'Best for beginners', note: 'Enclosed from $269; ideal for coasters and gifts.' },
        { slug: 'creality-falcon2-pro-60w', award: 'Best for thick cuts', note: '19 mm plywood in one slow pass.' },
        { slug: 'creality-falcon-t1', award: 'Best for metal and production', note: 'Modular galvo with fibre, diode, MOPA and UV.' },
        { slug: 'creality-falcon2-22w', award: 'Best open-frame', note: '4.6/5 from 3DWithUs, $549.' },
        { slug: 'creality-falcon-a1', award: 'Best enclosed bed under $600', note: '381 × 305 mm, arrives assembled.' },
        { slug: 'creality-falcon2-40w', award: 'Most power per dollar', note: '40W for $639, but open-frame.' },
        { slug: 'creality-cr-laser-falcon-10w', award: 'Best budget', note: 'Big bed and fine spot for $205.' },
        { slug: 'creality-cr-laser-falcon-5w', award: 'Cheapest', note: '$119 to learn engraving.' },
      ],
      updated_at: DATE,
    },
  ],
};
