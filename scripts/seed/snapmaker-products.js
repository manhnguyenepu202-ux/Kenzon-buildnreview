// Snapmaker products. Specs and prices come from the official US store (us.snapmaker.com, October 2026).
// Every product links to its store page with the BuildNReview affiliate code.
const REF = 'ref=tatsuki_mura';
const store = (handle) => `https://us.snapmaker.com/products/${handle}?${REF}`;
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0585/1499/7435/${file}`;

export default [
  {
    slug: 'snapmaker-u1',
    name: 'Snapmaker U1',
    brand: 'Snapmaker',
    model: 'U1',
    category: '3d-printers',
    art_type: 'fdm-enclosed',
    tone: '#3d5afe',
    released: 2025,
    views: 12840,
    price_usd: 749,
    featured: true,
    image_url: cdn('files/SnapmakerU13DPrinter_2.webp?v=1784886329'),
    gallery: [
      cdn('files/MoreSpeed.LessWaste.webp?v=1787367600'),
      cdn('files/TrueMulti-MaterialPrinting_1.webp?v=1787545391'),
      cdn('files/SmartCalibration.webp?v=1787367543'),
      cdn('files/CoreXYSystemwith500mm.webp?v=1787367610'),
    ],
    affiliate_url: store('snapmaker-u1-3d-printer'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'Snapmaker U1 review: a real toolchanger at a hobbyist price',
    summary: 'Four independent toolheads swap in about five seconds, so multi-colour prints waste far less filament than AMS-style printers.',
    verdict: 'The U1 is the most sensible multi-colour printer we have covered this year. Swapping whole toolheads instead of purging one nozzle saves time and filament, and the 270 mm cube build volume is generous. Buy it if you print in several colours or materials every week.',
    best_for: 'Multi-colour and multi-material printing without the waste',
    pros: [
      'SnapSwap 4-toolhead system changes heads in about 5 s',
      'Up to 5× less purge waste than single-nozzle colour changers',
      '270 × 270 × 270 mm build volume for big parts or batches',
      'CoreXY motion: up to 500 mm/s and 20,000 mm/s²',
      'Auto filament loading and backup (runout) mode',
    ],
    cons: [
      'Engineering filaments need the optional top cover',
      'Four hot ends mean more parts to maintain over time',
      'Wider footprint than single-nozzle printers',
    ],
    specs: [
      { label: 'Technology', value: 'FDM, CoreXY toolchanger' },
      { label: 'Toolheads', value: '4 (SnapSwap, ~5 s swap)' },
      { label: 'Build volume', value: '270 × 270 × 270 mm' },
      { label: 'Max print speed', value: '500 mm/s' },
      { label: 'Max acceleration', value: '20,000 mm/s²' },
      { label: 'Multi-colour', value: 'Yes, up to 4 colours or materials' },
      { label: 'Filament diameter', value: '1.75 mm' },
      { label: 'Enclosure', value: 'Optional top cover' },
      { label: 'Screen', value: '3.5-inch touchscreen' },
      { label: 'Camera', value: 'Yes' },
    ],
    scores: { performance: 9.2, quality: 8.9, ease: 8.7, value: 9.0 },
    body: `## Why a toolchanger matters

Most multi-colour printers feed several spools into one nozzle. Every colour change means cutting the filament, pushing the new one through and purging the old colour into a "poop" pile. On a detailed four-colour model that can waste more plastic than the part itself.

The U1 takes the approach that used to cost several thousand dollars: it parks four complete toolheads at the back of the frame and picks up the one it needs. Snapmaker calls it SnapSwap and quotes a swap time of about five seconds. Because each head keeps its own filament loaded, there is very little purging, which is where the claimed "5× less waste" comes from.

## Speed and build volume

The U1 is a CoreXY machine rated at 500 mm/s with 20,000 mm/s² acceleration, so single-colour prints are in the same class as the fastest consumer printers. The 270 mm cube build volume is larger than the usual 256 mm, which helps with helmets, storage boxes and batch printing on one plate.

## Everyday use

- **Calibration:** automatic calibration and compensation run before printing, so you rarely touch the bed.
- **Filament handling:** filament loads itself, and backup mode can switch to another spool of the same material when one runs out.
- **Materials:** PLA, PETG and TPU work open-frame. For ABS, ASA or carbon-fibre blends, Snapmaker sells a top cover that keeps heat in.

## What to know before buying

Four hot ends give you more flexibility, and more parts to look after. Snapmaker sells every spare separately (hot ends, nozzle wipers, fans), which is reassuring for a long-term machine. Plan for a little more desk width than a single-nozzle printer.

## Should you buy it?

If you print mostly single-colour PLA, a cheaper printer will do. If you want multi-colour signs, cosplay parts, or prints that combine a rigid and a flexible material, the U1 does it faster and with far less waste than purge-based systems at a similar price.`,
  },
  {
    slug: 'snapmaker-artisan-3-in-1',
    name: 'Snapmaker Artisan 3-in-1',
    brand: 'Snapmaker',
    model: 'Artisan',
    category: '3d-printers',
    art_type: 'fdm-enclosed',
    tone: '#ff7a45',
    released: 2023,
    views: 8120,
    price_usd: 1849,
    featured: true,
    image_url: cdn('files/Artisan-3-in-1-3D-Printer_1.jpg?v=1775138101'),
    gallery: [
      cdn('files/3-in-1_-60s-Quick-Swap_60d100a7-cac2-4125-b719-87c08a9889e5.jpg?v=1775138101'),
      cdn('files/40W-Powerful-Laser-Module.jpg?v=1775138101'),
      cdn('files/200W-CNC-Module_7781b306-a97e-49cf-b952-02797765635a.jpg?v=1775138101'),
      cdn('files/400mm-x-400mm-x-400mm.jpg?v=1775138101'),
    ],
    affiliate_url: store('snapmaker-artisan-3-in-1-3d-printer'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'Snapmaker Artisan review: 3D printer, laser and CNC in one enclosure',
    summary: 'A large 400 mm 3-in-1 machine that swaps between dual-extrusion printing, a 40W laser and a 200W CNC spindle in about a minute.',
    verdict: 'The Artisan is for makers who would otherwise buy three machines. It is expensive and slower to switch than owning separate tools, but no other machine gives you a 400 mm printing, laser and CNC workspace in one enclosed footprint.',
    best_for: 'Small workshops that want printing, laser cutting and CNC in one footprint',
    pros: [
      'Three tools: dual-extrusion 3D printing, 40W laser, 200W CNC',
      'Huge 400 × 400 × 400 mm work area',
      'Quick-swap toolheads change in about 60 seconds',
      'Ships with an enclosure for safer laser work',
    ],
    cons: [
      'High price, even if it replaces three machines',
      'Large and heavy: needs a dedicated bench',
      'Each mode is good, not best-in-class',
    ],
    specs: [
      { label: 'Functions', value: '3D printing, laser engraving/cutting, CNC carving' },
      { label: 'Work area', value: '400 × 400 × 400 mm' },
      { label: '3D printing', value: 'Dual-extrusion module' },
      { label: 'Laser', value: '40W laser module' },
      { label: 'CNC', value: '200W spindle module' },
      { label: 'Tool change', value: 'Quick swap, ~60 s' },
      { label: 'Enclosure', value: 'Included' },
      { label: 'Versions', value: 'Artisan from $1,849, Artisan Premium from $2,249' },
    ],
    scores: { performance: 9.0, quality: 9.1, ease: 8.2, value: 8.0 },
    body: `## One machine, three workshops

The Artisan is built around a rigid 400 mm frame and a quick-swap toolhead plate. In about a minute you can change from the dual-extrusion print head to the 40W laser or the 200W CNC spindle. The software (Snapmaker Luban) handles slicing, laser jobs and CNC toolpaths in one place.

## 3D printing

The dual-extrusion module prints two materials or two colours, which is useful for soluble supports and simple two-colour parts. The 400 mm cube build volume is the real headline: it fits full-size helmets, long brackets and large enclosures that a 256 mm printer has to split.

## Laser

The 40W laser cuts plywood, basswood and acrylic, and engraves wood, leather and coated metal. Because the Artisan ships with an enclosure, laser work is safer and smoke is contained. Pair it with the Snapmaker Air Purifier if you work indoors.

## CNC

The 200W spindle turns at up to 18,000 RPM and takes an ER11 collet, so you can use a wide range of bits for hardwood signs, PCB isolation milling or acrylic parts.

## Who should buy it

- Makers starting a small Etsy or craft business who need prototypes, laser-cut products and carved signs.
- Schools and makerspaces that want three processes in one footprint.
- Hobbyists who already know they will use more than 3D printing.

## Should you buy it?

If you only want a 3D printer, buy a dedicated one and save a lot of money. If you want all three processes and have the space, the Artisan is the most polished all-in-one available, and the large enclosed work area is hard to match.`,
  },
  {
    slug: 'snapmaker-40w-laser-module',
    name: 'Snapmaker 40W Laser Module',
    brand: 'Snapmaker',
    model: '40W Laser with Air Assist',
    category: 'maker-addons',
    art_type: 'laser-module',
    tone: '#ff5252',
    released: 2023,
    views: 6210,
    price_usd: 429,
    featured: true,
    image_url: cdn('files/Snapmaker_40W_Laser_Module_with_Air_Assist.jpg?v=1775137972'),
    gallery: [
      cdn('files/Frame-913.jpg?v=1775137972'),
      cdn('files/Frame-909.jpg?v=1775137972'),
      cdn('files/40W-2.0.jpg?v=1775137972'),
    ],
    affiliate_url: store('snapmaker-20w-and-40w-laser-module-with-air-assist'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'Snapmaker 40W Laser Module review: the upgrade that makes cutting practical',
    summary: 'A 40W diode laser with built-in air assist for Snapmaker 2.0, Artisan and Ray. It cuts thicker wood and acrylic in fewer passes.',
    verdict: 'If you own a compatible Snapmaker, the 40W module is the upgrade that turns occasional engraving into real cutting work. Air assist is controlled from Luban, so cuts are cleaner without extra setup. Treat it as a Class 4 laser: use an enclosure and goggles.',
    best_for: 'Snapmaker owners who want to cut wood and acrylic, not just engrave',
    pros: [
      'Big step up in cutting power over 10W modules',
      'Air assist pump included and controlled from Luban',
      'Works with Snapmaker 2.0, Artisan and Ray',
      'Laser safety shield included',
    ],
    cons: [
      'Class 4 laser: enclosure and goggles are a must',
      'Only useful if you own a compatible Snapmaker machine',
      'A150 supports only the 20W version',
    ],
    specs: [
      { label: 'Laser power', value: '40W (20W version also available)' },
      { label: 'Air assist', value: 'Included, controlled via Luban' },
      { label: 'Laser class', value: 'Class 4' },
      { label: 'Safety', value: 'Laser safety shield included' },
      { label: 'Compatible with', value: 'Snapmaker 2.0 A350T/A350/A250T/A250/F350/F250, Artisan, Ray' },
      { label: 'Software', value: 'Snapmaker Luban' },
    ],
    scores: { performance: 9.1, quality: 8.8, ease: 8.0, value: 8.6 },
    body: `## What it is

The 40W Laser Module is an add-on toolhead for Snapmaker's modular machines. It fits the Snapmaker 2.0 series (A350T, A350, A250T, A250, F350, F250), the Artisan and the Ray laser. The smaller A150 only takes the 20W version.

## Why 40W matters

Lower-power diode lasers engrave well but cut slowly, needing many passes for 3 mm plywood. More optical power means fewer passes, less charring and the ability to cut thicker sheets. For anyone making laser-cut boxes, signs, puzzles or jewellery, that is the difference between a toy and a production tool.

## Air assist built in

Air assist blows a jet of air at the cutting point. It clears smoke and debris, reduces flare-ups and gives a cleaner edge. Snapmaker includes the pump and lets you switch it from Luban, so there is no separate controller to wire up.

## Safety first

This is a Class 4 laser product. Snapmaker recommends using it inside an enclosure **and** wearing laser safety goggles (190–540 nm OD6+ and 900–1700 nm OD4+). The Artisan ships with an enclosure; for the 2.0 and Ray, buy the matching enclosure before your first cut.

## Use cases

- Laser-cut plywood boxes, organisers and shop jigs
- Engraved cutting boards, coasters and leather patches
- Acrylic signs and name plates
- Small-batch products for craft markets

## Should you buy it?

If you already own a compatible Snapmaker, yes: this is the module that makes the laser function genuinely productive. If you don't, look at the Artisan bundle, which already includes it.`,
  },
  {
    slug: 'snapmaker-200w-cnc-module',
    name: 'Snapmaker 200W CNC Module',
    brand: 'Snapmaker',
    model: '200W CNC Module Bundle',
    category: 'maker-addons',
    art_type: 'cnc-module',
    tone: '#2e7d32',
    released: 2023,
    views: 4380,
    price_usd: 159,
    featured: false,
    image_url: cdn('files/A350T_200W_CNC_Module_Bundle.png?v=1747214025'),
    gallery: [cdn('files/Frame1043.png?v=1747214025'), cdn('files/Frame1044.png?v=1747214025')],
    affiliate_url: store('snapmaker-200w-cnc-module-bundle'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'Snapmaker 200W CNC Module review: real carving power for 2.0 and Artisan',
    summary: 'Four times the power of the 50W module, an 18,000 RPM spindle and an ER11 collet that takes over 100 different bits.',
    verdict: 'For Snapmaker 2.0 and Artisan owners, the 200W CNC module is the best value upgrade in the range. It carves hardwood properly, accepts standard ER11 bits and costs less than most entry-level CNC routers.',
    best_for: 'Carving hardwood signs, acrylic parts and PCBs on a Snapmaker',
    pros: [
      '300% more power than the 50W module',
      '18,000 RPM spindle, 50% faster than before',
      'ER11 collet supports 100+ standard CNC bits',
      'Strong value for the price',
    ],
    cons: [
      'Only fits Snapmaker 2.0 (A250/A350/F250/F350) and Artisan',
      'CNC is loud and dusty: plan for dust collection',
      'Hard materials still need slow, shallow passes',
    ],
    specs: [
      { label: 'Spindle power', value: '200W' },
      { label: 'Max spindle speed', value: '18,000 RPM' },
      { label: 'Collet', value: 'ER11 (100+ bits supported)' },
      { label: 'Materials', value: 'Hardwood, acrylic, jade and other hard materials' },
      { label: 'Compatible with', value: 'Snapmaker 2.0 A250/A250T/A350/A350T/F250/F350, Artisan, Quick Swap Kit' },
      { label: 'Bundle price', value: 'From $159 (A-series/Artisan), $169 F250, $179 F350' },
    ],
    scores: { performance: 8.6, quality: 8.7, ease: 7.8, value: 9.0 },
    body: `## A big jump over the 50W module

Snapmaker's original CNC module was fine for soft wood and foam but struggled with hardwood. The 200W module has 300% more power and a 50% higher top speed (18,000 RPM), plus strengthened X/Y/Z mounting. In practice that means deeper passes, cleaner edges and much less chatter in oak, walnut or acrylic.

## ER11 collet

The switch to a standard ER11 collet is as important as the power. You are no longer limited to Snapmaker-branded bits: flat end mills, ball noses, V-bits and engraving cutters from any supplier fit, as long as they match the collet size.

## Use cases

- Carved hardwood signs and house numbers
- Inlays and engraved serving boards
- Acrylic and aluminium-composite parts
- PCB isolation milling for electronics projects
- Relief carving combined with the rotary module

## Before you buy

CNC carving makes noise and fine dust. Use the enclosure, wear hearing protection and connect a shop vacuum or dust shoe if you can. Hard materials like jade work, but need patience: slow feed, shallow depth.

## Should you buy it?

If you own a Snapmaker 2.0 or Artisan and want to carve anything harder than pine, this is an easy recommendation. The bundle pricing (from $159) is lower than most standalone spindles of similar power.`,
  },
  {
    slug: 'snapmaker-air-purifier',
    name: 'Snapmaker Air Purifier',
    brand: 'Snapmaker',
    model: 'Air Purifier',
    category: 'maker-addons',
    art_type: 'air-purifier',
    tone: '#00897b',
    released: 2022,
    views: 3390,
    price_usd: 369,
    featured: false,
    image_url: cdn('products/Snapmaker_Air_Purifier.png?v=1723365571'),
    gallery: [cdn('products/1.png?v=1688109389'), cdn('products/3.png?v=1688109389')],
    affiliate_url: store('snapmaker-2-0-air-purifier'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'Snapmaker Air Purifier review: cleaner air for indoor laser and printing',
    summary: 'A five-layer filter cartridge that captures 95.9% of PM0.3 particles and VOCs from Snapmaker enclosures, with filter-life monitoring.',
    verdict: 'If you laser engrave or print ABS indoors without a window vent, the Snapmaker Air Purifier is worth the money. It is designed for the 2.0, Artisan and Ray enclosures, shows filter status in real time, and keeps fumes inside the box.',
    best_for: 'Indoor laser and ABS/ASA work where you cannot vent outside',
    pros: [
      '95.9% filtration efficiency for PM0.3',
      'Five filter layers combined in one cartridge',
      'Real-time filter status and lifespan monitoring',
      'Designed for Snapmaker enclosures',
    ],
    cons: [
      'Needs a Snapmaker enclosure to work',
      'Replacement cartridges are expensive ($199 for two)',
      'Heavy laser cutting uses filters faster',
    ],
    specs: [
      { label: 'Filtration', value: '95.9% for PM0.3 particles, plus VOCs' },
      { label: 'Filter cartridge', value: '5 layers in one cartridge' },
      { label: 'Monitoring', value: 'Real-time cartridge status and lifespan' },
      { label: 'Requires', value: 'Enclosure for Snapmaker 2.0, Artisan or Ray' },
      { label: 'Compatible with', value: 'Snapmaker 2.0, Artisan, Ray' },
      { label: 'Replacement filters', value: '2-pack, $199' },
    ],
    scores: { performance: 8.6, quality: 8.5, ease: 9.0, value: 7.6 },
    body: `## Why you need one

Laser engraving wood, leather or acrylic produces smoke, fine particles and volatile organic compounds (VOCs). Printing ABS or ASA releases styrene. A sealed enclosure contains the fumes, but they still need to go somewhere. If you cannot run a duct out of a window, a filter unit is the safer choice.

## How it works

The purifier connects to a Snapmaker enclosure (2.0, Artisan or Ray) and pulls air through a single cartridge that combines five filter layers. Snapmaker quotes 95.9% filtration efficiency for PM0.3, the particle size that is hardest to catch. The unit monitors the cartridge and shows its remaining lifespan, so you replace it when needed, not on a guess.

## Running costs

Filters are consumables. A two-pack of replacement cartridges costs $199 on the Snapmaker store. Heavy laser cutting of plywood loads the filter faster than occasional engraving or ABS printing, so factor that into your budget.

## Who it's for

- Apartment and spare-room makers without an exhaust route
- Classrooms and libraries running laser jobs
- Anyone printing ABS/ASA regularly in a living space

## Should you buy it?

If you can vent outdoors, a duct and inline fan is cheaper. If you can't, the Snapmaker Air Purifier is a tidy, well-integrated way to keep your workspace breathable.`,
  },
  {
    slug: 'snapdryer-bundle',
    name: 'SnapDryer Bundle',
    brand: 'Snapmaker',
    model: 'SnapDryer (1 dock + 4 boxes)',
    category: 'maker-addons',
    art_type: 'filament-dryer',
    tone: '#7e57c2',
    released: 2025,
    views: 5120,
    price_usd: 119,
    featured: false,
    image_url: cdn('files/2_070cb825-1a32-4dff-a15e-91028674c42f.png?v=1760443000'),
    gallery: [cdn('files/SnapDryer1.png?v=1763526281'), cdn('files/SnapDryer2.png?v=1763526281'), cdn('files/SnapDryer3.png?v=1763526281')],
    affiliate_url: store('snapdryer-bundle'),
    affiliate_label: 'Check price at Snapmaker',
    title: 'SnapDryer review: dry and store four spools with one dock',
    summary: 'A modular filament dryer co-developed with Polymaker: one heated dock serves multiple sealed boxes for drying and storage.',
    verdict: 'The SnapDryer bundle is the smartest filament-drying setup at this price. One dock dries, four sealed boxes store, and it handles everything from PLA to nylon and PVA. Any 3D printer owner who prints PETG, TPU or nylon should have one.',
    best_for: 'Keeping PETG, TPU, nylon and PVA dry between prints',
    pros: [
      'Dries and stores filament in the same box',
      'Modular: one dock handles several dry boxes',
      'Supports PLA, PETG, ABS, ASA, TPU, PA, PC and PVA',
      'Fits 1.75 mm and 2.85 mm spools',
    ],
    cons: [
      'Dries one box at a time on a single dock',
      'Boxes take shelf space when storing four spools',
    ],
    specs: [
      { label: 'In the box', value: '1 dryer dock + 4 SnapDryer boxes' },
      { label: 'Co-developed by', value: 'Polymaker and FabNotion' },
      { label: 'Materials', value: 'PLA, PETG, ABS, ASA, TPU, PA, PC, PVA, breakaway support' },
      { label: 'Filament diameter', value: '1.75 mm and 2.85 mm' },
      { label: 'Design', value: 'Modular, moisture-proof seal' },
    ],
    scores: { performance: 8.4, quality: 8.3, ease: 8.9, value: 8.8 },
    body: `## Wet filament ruins prints

Most filaments absorb moisture from the air. Wet PETG strings, wet TPU bubbles and wet nylon prints weak and fuzzy. Drying fixes it, but most dryers hold one spool and you still need somewhere airtight to store it afterwards.

## Dock plus boxes

The SnapDryer, designed with Polymaker and FabNotion, splits the job in two: a heated dock and sealed dry boxes. Put a box on the dock to dry it, then lift it off and the moisture-proof seal keeps the spool dry on the shelf or next to the printer. The bundle includes four boxes, so a whole set of colours stays ready.

## Materials

Snapmaker lists support for PLA, PETG, ABS, ASA, TPU, nylon (PA), polycarbonate (PC), PVA and breakaway support. It fits both 1.75 mm and 2.85 mm spools, although Snapmaker printers use 1.75 mm.

## Use cases

- Four-colour sets for a toolchanger like the Snapmaker U1
- Keeping PVA support dry (it absorbs water fast)
- Long-term storage of engineering filaments

## Should you buy it?

Yes, if you print anything besides PLA. At $119 for a dock and four boxes it costs about the same as two single-spool dryers, and it solves storage at the same time.`,
  },
];
