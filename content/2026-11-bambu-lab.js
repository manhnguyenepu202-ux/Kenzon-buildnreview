// Bambu Lab batch: A1 mini, A1, A2L, P1S, P2S, X2D, H2S, H2D, H3C. Researched 11 November 2026.
// Prices: official US store prices as logged by BambuHub's daily tracker on 3 Nov 2026 (the US store redirects
// non-US visitors, so we could not read it directly). Images: store.bblcdn.com, Bambu Lab's own store CDN.
// Links: plain links to the Bambu Lab US store for now. There is no affiliate link yet; when the user sends one,
// swap affiliate_url in /admin or with a one-off update (content-sync never overwrites existing rows).
// bambu-lab-a1-mini and bambu-lab-p1s already existed as short starter drafts; `replace` upgrades them once.
// Test results come from the sources listed in each article; nothing here claims our own testing.
const bb = (handle) => `https://us.store.bambulab.com/products/${handle}`;
const img = (path) => `https://store.bblcdn.com/s6/${path}`;
const DATE = '2026-11-11 09:00:00';
const LABEL = 'Check price at Bambu Lab';
const TONE = '#00ae42';
const REPLACE = 'bambu-2026-11';
const PRICES = 'official US store price on 3 Nov 2026, via BambuHub’s tracker';

export default {
  products: [
    {
      slug: 'bambu-lab-a1-mini',
      replace: REPLACE,
      name: 'Bambu Lab A1 mini',
      brand: 'Bambu Lab',
      model: 'A1 mini',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: TONE,
      released: 2023,
      price_usd: 199,
      featured: true,
      image_url: img('default/f6bf2b80f14e479cb8000531b69e69be/A1_mini-compressed.jpg'),
      gallery: [img('default/6bc529d0aaf44222b37af87dc414a966/A1_mini_C-compressed.jpg'), img('default/65b8309896434450a9f8c4b031f6f3fc/A1_mini_C2-compressed.jpg')],
      affiliate_url: bb('a1-mini'),
      affiliate_label: LABEL,
      title: 'Bambu Lab A1 mini review: still the easiest first 3D printer, now $199',
      summary: 'A small, quiet, fully automatic bed-slinger with an optional four-colour AMS Lite. The 180 mm bed is the main limit; $199 makes it the default first printer.',
      verdict: 'Three years on, the A1 mini is still the printer we would hand a complete beginner. Tom’s Hardware measured a 19-minute speed Benchy and called it fast, quiet and easy to use, and the price has fallen from $299 at launch to $199. The trade-offs are the 180 × 180 × 180 mm build volume, an 80°C bed that limits it to PLA, PETG and TPU, and an AMS Lite that wastes a lot of filament on colour changes and takes up desk space. If you know you want large prints, buy the A1 or A2L instead.',
      best_for: 'First-time buyers, kids and classrooms who want small PLA prints with no tuning',
      pros: [
        '$199 (typical $219) for a fully automatic, polished printer',
        '19 min 15 s speed Benchy in Tom’s Hardware’s test',
        'Quiet enough to sit on a desk',
        'Tool-free quick-swap nozzle',
        'Optional AMS Lite adds four colours for about $110 more',
      ],
      cons: [
        'Small 180 × 180 × 180 mm build volume',
        'AMS Lite wastes a lot of filament: 166 g of purge on Tom’s two fire trucks',
        'Colour prints are slow: those trucks took 22 h 25 min in four colours vs 4 h 19 min in one',
        'Open frame and 80°C bed: no ABS or ASA',
        'Camera can’t detect failed prints',
      ],
      specs: [
        { label: 'Type', value: 'Open-frame bed-slinger (Cartesian)' },
        { label: 'Build volume', value: '180 × 180 × 180 mm' },
        { label: 'Max speed / acceleration', value: '500 mm/s, 10,000 mm/s² (Bambu Lab)' },
        { label: 'Hotend', value: 'Direct drive, quick-swap 0.4 mm nozzle, up to 300°C' },
        { label: 'Bed', value: 'PEI spring steel, up to 80°C' },
        { label: 'Levelling', value: 'Fully automatic, plus vibration and flow calibration' },
        { label: 'Multicolour', value: 'Optional AMS Lite (4 spools)' },
        { label: 'Connectivity', value: 'Wi-Fi, microSD, Bambu Handy app' },
        { label: 'Price', value: '$199 (typical $219); Combo with AMS Lite typical $329' },
      ],
      scores: { performance: 7.6, quality: 8.6, ease: 9.4, value: 9.4 },
      body: `## What is it?

The A1 mini is Bambu Lab’s smallest printer: an open-frame bed-slinger with a 180 mm cube of build space, an automatic calibration routine that handles levelling, vibration compensation and flow, and a magnetic, tool-free nozzle. Add the AMS Lite and it becomes a four-colour printer.

It launched in 2023 at $299, or $459 with the AMS Lite. On 3 November 2026 the official US store sold it for **$199**, against a typical price of $219, and the Combo’s typical price was $329.

## Setting up

The A1 mini arrives almost fully assembled. Tom’s Hardware found setup quick, and the first boot runs every calibration on its own. There is no paper-under-the-nozzle levelling and no Z offset to set. For a beginner, that alone removes the most common reason a first print fails.

## Print quality and speed

In Tom’s Hardware’s test the A1 mini printed a speed-rules Benchy in **19 minutes 15 seconds**, with smooth layers and no ringing; only the overhangs at the bow got slightly messy. A detailed PLA figure took 9 h 20 min at default settings and came out smooth, though it had to be shrunk to 85% to fit the bed. A PETG figure took 1 h 16 min, about a third of the time Tom’s estimated for a conventional printer like the Neptune 3 Pro.

TPU works from the spool holder on the frame (the AMS Lite can’t feed it). Tom’s saw a little stringing on a TPU print that took 5 h 6 min.

## The AMS Lite: fun, but costly in filament

Four colours for about $110 extra is the A1 mini’s party trick, and it is why so many people buy the Combo. The cost is waste and time. Every colour change flushes the nozzle: Tom’s pair of four-colour fire trucks used **166 g** of filament on purges and took **22 h 25 min**, against 4 h 19 min in one colour. Read our guide to [cutting multicolour purge waste](/en/blog/multicolor-3d-printing-purge-waste/) before planning big colourful prints.

The AMS Lite also needs room beside the printer. On the plus side it holds spools by their centre, so it copes with cardboard and odd-sized spools better than Bambu’s older AMS.

## What owners complain about

- **The build volume.** 180 mm is fine for figures, gadgets and toys, but helmets and storage boxes need splitting.
- **Purge waste** in colour mode, flung off the side of the printer.
- **No enclosure**, and the bed only reaches 80°C, so ABS and ASA are off the table.
- **Bambu’s closed ecosystem.** Bambu Studio and the Handy app are excellent, but you are tied to them more than with open printers.

## Who should not buy it

- Anyone who wants to print large single parts: the [A1](/en/review/bambu-lab-a1/) or [A2L](/en/review/bambu-lab-a2l/) cost a little more.
- Anyone who wants to print ABS, ASA or nylon: look at an enclosed printer like the [P1S](/en/review/bambu-lab-p1s/).

## vs rivals

- **vs [Creality Ender-3 V3 SE](/en/review/creality-ender-3-v3-se/) ($199):** same price, bigger 220 mm bed, but more hands-on and no easy route to colour. See [Ender-3 V3 SE vs A1 mini](/en/compare/creality-ender-3-v3-se-vs-bambu-lab-a1-mini/).
- **vs [Bambu Lab A1](/en/review/bambu-lab-a1/) ($259):** the same experience with a 256 mm bed for $60 more. See [A1 mini vs A1](/en/compare/bambu-lab-a1-mini-vs-bambu-lab-a1/).
- **vs [Anycubic Kobra 4 Combo](/en/review/anycubic-kobra-4-combo/) ($299):** four colours and filament drying included, on a bigger bed.

## Final thoughts

The A1 mini is not exciting any more, and that is the point. It works, it is quiet, and at $199 it costs less than many people spend on filament in a year. Buy it if small prints are enough; otherwise spend the extra $60 on the A1.

## Sources

- [Tom’s Hardware: Bambu Lab A1 Mini review](https://www.tomshardware.com/reviews/bambu-lab-a1-mini) (Denise Bertacchi, October 2023)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)
- [Bambu Lab store: A1 mini](https://us.store.bambulab.com/products/a1-mini)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-a1',
      name: 'Bambu Lab A1',
      brand: 'Bambu Lab',
      model: 'A1',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: TONE,
      released: 2023,
      price_usd: 259,
      image_url: img('default/7e6a1a99e1cf422e8028e4794fafdc44/A1-compressed.jpg'),
      gallery: [img('default/dc9f5ba5282b41a48629c371eae139a4/A1C-compressed.jpg'), img('default/7a2e31f4a8974c5c9f06655f1e105d30/A1C2-compressed.jpg')],
      affiliate_url: bb('a1'),
      affiliate_label: LABEL,
      title: 'Bambu Lab A1 review: the full-size beginner printer, now $259',
      summary: 'The A1 mini’s ease of use on a 256 mm bed. Fast, quiet and fully automatic; the AMS Lite is wasteful and the open frame rules out ABS.',
      verdict: 'The A1 is the A1 mini with room to grow: the same automatic calibration and quick-swap nozzle on a 256 × 256 × 256 mm bed, for $259 in the US store. Tom’s Hardware called it the fastest Cartesian printer it had reviewed at the time, measured the same 19-minute Benchy as the mini, and found it noticeably quieter than most speed printers. The catches are the open frame, the space the AMS Lite takes up and the filament it flings off the side. For most beginners who want bigger prints, this is the one to buy.',
      best_for: 'Beginners and families who want full-size PLA, PETG and TPU prints with no tuning',
      pros: [
        '256 × 256 × 256 mm bed, same as Bambu’s CoreXY P-series',
        '19 min 15 s speed Benchy (Tom’s Hardware)',
        'Quieter than most high-speed printers',
        'Automatic levelling, vibration and flow calibration',
        'Tool-free quick-swap nozzle',
      ],
      cons: [
        'AMS Lite takes a lot of desk space and flings purge waste',
        'Colour slows prints badly: a panda took 2 h 40 min in one colour, 6 h 46 min in three',
        'Open frame: no ABS or ASA',
        'Some assembly required (unlike the mini)',
        'Camera has a fisheye view and no failure detection',
      ],
      specs: [
        { label: 'Type', value: 'Open-frame bed-slinger (Cartesian)' },
        { label: 'Build volume', value: '256 × 256 × 256 mm' },
        { label: 'Max speed / acceleration', value: '500 mm/s, 10,000 mm/s² (Bambu Lab)' },
        { label: 'Hotend', value: 'Direct drive, quick-swap 0.4 mm nozzle, up to 300°C' },
        { label: 'Bed', value: 'PEI spring steel, heated' },
        { label: 'Levelling', value: 'Fully automatic, with eddy-current flow calibration' },
        { label: 'Multicolour', value: 'Optional AMS Lite (4 spools)' },
        { label: 'Price', value: '$259 (typical $299), 3 Nov 2026' },
      ],
      scores: { performance: 8.0, quality: 8.6, ease: 9.0, value: 9.2 },
      body: `## What is it?

The A1 is Bambu Lab’s full-size bed-slinger. It has the same 256 mm cube of build space as the CoreXY P1S and P2S, but the cheaper open design where the bed moves back and forth. Like the [A1 mini](/en/review/bambu-lab-a1-mini/) it calibrates itself, uses a magnetic tool-free nozzle and works with the four-spool AMS Lite.

It launched at $399, or $559 with the AMS Lite. On 3 November 2026 the US store listed it at **$259**, with a typical price of $299.

## Setting up

Unlike the mini, the A1 needs some assembly: Tom’s Hardware found it about 95% pre-assembled, with a handful of screws to fix the gantry to the base and a few more for the wiper and spool holder. After that, the automatic calibration takes over.

## Print quality and speed

Tom’s Hardware printed a speed-rules Benchy in **19 minutes 15 seconds**, “a hair quicker” than the A1 mini, with a crisp bow that shows off the cooling. A large multicolour dragon took 11 h 5 min at default settings. A PETG playhouse took 6 h 31 min and came out smooth with no stringing. TPU was mostly good; the overhangs on a vase were the weak spot.

The A1 has half the acceleration of Bambu’s CoreXY machines (10,000 vs 20,000 mm/s²), but Tom’s points out that the CoreXY printers don’t use their full acceleration in normal printing, so the real difference is small. It also found the A1 noticeably quieter than the current crop of Klipper speed printers, quiet enough to sit next to a desk.

## Colour printing

The AMS Lite works the same way as on the mini, with the same trade-offs. The printer stops to purge and wipe at every colour change, so time and waste climb quickly: a flexi panda took **2 h 40 min** in one colour and **6 h 46 min** in three. The purge pieces land in a little tray on the gantry and are flung off the side, so keep a box next to the printer. Our guide to [cutting purge waste](/en/blog/multicolor-3d-printing-purge-waste/) covers the slicer settings that help.

## What owners complain about

- **Desk space.** With the AMS Lite on its stand beside it, the A1 takes up much more room than its frame suggests.
- **Flung purge waste.**
- **No enclosure**, so ABS and ASA warp and smell.
- **A fisheye camera** that sees much of your room. There is a manual privacy shutter.

## Who should not buy it

- Anyone who wants to print ABS, ASA or nylon: an enclosed printer like the [P1S](/en/review/bambu-lab-p1s/) costs $90 more.
- Anyone who prints lots of multicolour parts: the waste and time add up; consider a dual-nozzle [X2D](/en/review/bambu-lab-x2d/).
- Anyone short of desk space.

## vs rivals

- **vs [A1 mini](/en/review/bambu-lab-a1-mini/) ($199):** same experience, smaller bed. See [A1 mini vs A1](/en/compare/bambu-lab-a1-mini-vs-bambu-lab-a1/).
- **vs [A2L](/en/review/bambu-lab-a2l/) ($439):** a much bigger 330 × 320 × 325 mm bed and a stronger extruder for $180 more.
- **vs [Anycubic Kobra 4 Combo](/en/review/anycubic-kobra-4-combo/) ($299):** includes four colours and a filament dryer for about the same money.

## Final thoughts

At $259 the A1 is hard to argue with. It is the easiest full-size printer you can buy, and it doesn’t ask you to learn anything before your first good print.

## Sources

- [Tom’s Hardware: Bambu Lab A1 review](https://www.tomshardware.com/3d-printing/bambu-lab-a1-review) (Denise Bertacchi, December 2023)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)
- [Bambu Lab store: A1](https://us.store.bambulab.com/products/a1)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-a2l',
      name: 'Bambu Lab A2L',
      brand: 'Bambu Lab',
      model: 'A2L',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: TONE,
      released: 2026,
      price_usd: 439,
      featured: true,
      image_url: img('default/47b498beabbf48b69a3b568ea229c8df/A2L.jpg'),
      gallery: [img('mqxkp/becd65c22f91405e9e59365bc9b78963/2.jpg'), img('mqxkp/39979651f1d44c0787ee06464d218d4c/4.jpg'), img('mqxkp/6fcd57f4f2054f5aa88ce6a63d042c64/AMS.jpg')],
      affiliate_url: bb('a2l'),
      affiliate_label: LABEL,
      title: 'Bambu Lab A2L review: H2-sized prints for $439, if your table can take it',
      summary: 'A 330 × 320 × 325 mm bed-slinger with Bambu’s ease of use and an optional cutting kit. Reviewers love the quality; the shaking is the catch.',
      verdict: 'The A2L gives you nearly the build volume of Bambu’s $1,000-plus H2 printers for $439 ($569 with AMS Lite). How-To Geek gave it 9/10, Tom’s Hardware called it one of the best printers it had seen this year, and CNC Kitchen praised the print quality after 400 hours. Every reviewer warns about the vibration: the heavy bed shakes cheap tables and knocked tools off CNC Kitchen’s bench. The open frame and 80°C bed keep it to PLA, PETG and TPU. For big cosplay pieces and functional parts on a budget, it is the best value in the range.',
      best_for: 'Cosplayers, makers and families who want large PLA, PETG and TPU prints on a budget',
      pros: [
        '330 × 320 × 325 mm build volume for $439',
        'Excellent print quality (Tom’s Hardware, How-To Geek 9/10, CNC Kitchen)',
        'Servo extruder detects grinding, clogs and air printing',
        'Optional cutting and pen-plotting kit (about $60–69)',
        'Works with AMS Lite, AMS 2 Pro and AMS HT: up to 19 colours',
      ],
      cons: [
        'Violent vibration at speed; needs a heavy, sturdy table',
        'Bed tops out at 80°C and the frame is open: no ABS, ASA or nylon',
        'Tall, slim parts get wobbly on the moving bed (CNC Kitchen)',
        'About 10–20% slower than Bambu’s CoreXY H2 printers (CNC Kitchen)',
        'Weak camera with no spaghetti detection; needs about 800 mm of width with the AMS Lite',
      ],
      specs: [
        { label: 'Type', value: 'Open-frame bed-slinger (Cartesian)' },
        { label: 'Build volume', value: '330 × 320 × 325 mm' },
        { label: 'Max speed / flow', value: '500 mm/s, 28 mm³/s (Bambu Lab)' },
        { label: 'Hotend', value: 'Direct drive with PMSM servo, quick-swap 0.4 mm nozzle, up to 300°C' },
        { label: 'Bed', value: 'PEI spring steel, up to 80°C' },
        { label: 'Footprint / weight', value: '544 × 529 × 505 mm, 12.8 kg' },
        { label: 'Noise', value: 'About 50 dB while printing (CNC Kitchen)' },
        { label: 'Options', value: 'Cutting/pen kit about $60–69; AMS 2 Pro, AMS HT' },
        { label: 'Price', value: '$439 (typical $469); AMS Lite Combo $569 at launch' },
      ],
      scores: { performance: 8.2, quality: 8.8, ease: 8.6, value: 9.2 },
      body: `## What is it?

The A2L is the big brother of the [A1](/en/review/bambu-lab-a1/): a bed-slinger with a **330 × 320 × 325 mm** build volume, roughly twice the A1’s, and close to what Bambu’s H2 printers offer. It launched in 2026 at $469, or $569 with the four-spool AMS Lite. On 3 November 2026 the US store sold the printer alone for **$439**.

New parts over the A1 include a closed-loop servo (PMSM) extruder that can detect grinding, clogs and “air printing”, a nozzle-clump detector, and adaptive vibration compensation that retunes itself as the print gets taller and heavier. An optional kit adds a blade cutter and pen plotter.

## Setting up

There is a little assembly: Tom’s Hardware bolted the heated bed to the Y carriage and dropped the base into a beefy triangular gantry frame, with clear instructions. CNC Kitchen had it together in under 30 minutes, followed by about 45 minutes of automatic calibration. Tom’s had no first-layer problems and didn’t need to adjust anything.

## Print quality and speed

Reviewers agree the quality is excellent. CNC Kitchen printed a PLA Benchy in **38 minutes** on the standard profile and a 90A TPU Benchy in 1 h 13 min, and measured skew at just 0.04°. Tom’s printed three multicolour narwhals in 10 h 44 min and a TPU phone bag in 7 h 9 min with smooth layers. How-To Geek called it one of the better budget large-format printers and scored it 9/10.

It is not as quick as the CoreXY H2 machines: CNC Kitchen puts it 10–20% slower, partly because the hotend’s melt zone is shorter.

## The deep dive: vibration

This is the A2L’s one real flaw, and every review mentions it. A heavy bed moving at speed shakes whatever it sits on. Tom’s found most cheap tables couldn’t hold it, How-To Geek said it shook a sturdy desk “like a leaf”, and CNC Kitchen had tools fall off the bench during long prints. Bambu fills the frame with vibration-absorbing granules, which is why the prints stay clean, but you need a heavy, rigid surface. Plan on a workbench, not an IKEA side table.

Tall, thin parts are the other casualty of a moving bed: CNC Kitchen recommends orienting them carefully and using the “slow down at height” option.

## What owners complain about

- **Shaking** (see above).
- **Material limits.** The bed stops at 80°C (the A1 reaches 100°C) and there is no enclosure, so engineering filaments are out. Large PETG parts warped for CNC Kitchen without glue and a brim.
- **Early firmware bugs** caused pauses on long prints; CNC Kitchen’s first two attempts at a 30-hour print failed before updates fixed it.
- **Cancel object** only works from the Handy app, and fails with more than 64 objects.
- **Space.** CNC Kitchen measured about 600 × 650 mm of desk for the printer, and around 800 mm of width with the AMS Lite.

## Who should not buy it

- Anyone printing ABS, ASA, nylon or carbon-fibre blends: look at the enclosed [H2S](/en/review/bambu-lab-h2s/).
- Anyone without a sturdy table.
- Anyone who prefers open firmware and slicers: CNC Kitchen is critical of Bambu’s closed approach.

## vs rivals

- **vs [Bambu Lab A1](/en/review/bambu-lab-a1/) ($259):** the A1 is enough if your prints fit in a 256 mm cube.
- **vs [Bambu Lab H2S](/en/review/bambu-lab-h2s/) ($1,049):** enclosed, faster and ready for engineering materials, for well over twice the price. See [A2L vs H2S](/en/compare/bambu-lab-a2l-vs-bambu-lab-h2s/).
- **vs [Anycubic Kobra S1 Max](/en/review/anycubic-kobra-s1-max/) ($599):** a large enclosed CoreXY if you need ABS.

## Final thoughts

CNC Kitchen sums it up as a very good, large A1, and that is exactly what most people want from it. Big helmets, storage bins and props at A-series prices, with Bambu’s easy setup. Just give it a solid table.

## Sources

- [Tom’s Hardware: Bambu Lab A2L review](https://www.tomshardware.com/3d-printing/bambu-lab-a2l-3d-printer-review) (Denise Bertacchi, June 2026)
- [How-To Geek: Bambu Lab A2L review](https://www.howtogeek.com/bambu-lab-a2l-review/) (August 2026, 9/10)
- [CNC Kitchen: Bambu A2L, my honest review after 400 hours](https://www.cnckitchen.com/blog/bambu-a2l-my-honest-review-after-400-hours) (Stefan Hermann, June 2026)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-p1s',
      replace: REPLACE,
      name: 'Bambu Lab P1S',
      brand: 'Bambu Lab',
      model: 'P1S',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2023,
      price_usd: 349,
      image_url: img('default/0ef25077ee1c4152ab4bf18bb78a4ff4/P1SC2-compressed.jpg'),
      gallery: [img('default/b8bb13800a4641d094c161f8ee558a1b/6.jpg'), img('default/5a64655dcdb14a18bce1b932a166b4be/2_bb5ca5ee-11f8-466c-8c39-ace73c014be3.jpg'), img('default/928f3f904ed741aca89d867677f39b88/5.jpg')],
      affiliate_url: bb('p1s'),
      affiliate_label: LABEL,
      title: 'Bambu Lab P1S review: the old favourite at half its launch price',
      summary: 'Enclosed CoreXY speed and AMS colour for $349. The P2S is better in every way, but the P1S is still a bargain for ABS and ASA on a budget.',
      verdict: 'The P1S was the printer most reviewers recommended in 2023 and 2024, and it is now $349 in the US store, half its $699 launch price. Tom’s Hardware called it a sweet spot of fast CoreXY printing, an enclosure for ABS and ASA, and up to 16 colours with the AMS. It shows its age next to the [P2S](/en/review/bambu-lab-p2s/): it is noisy, the nozzle is part of a screwed-in hotend rather than a quick-swap part, the camera is basic and there is no touchscreen. If $100 is the difference, buy the P2S; if it isn’t, the P1S is still excellent value.',
      best_for: 'Budget buyers who want an enclosed printer for ABS and ASA, and AMS colour later',
      pros: [
        '$349 (typical $399) for an enclosed CoreXY',
        'Enclosure handles ABS and ASA; Tom’s printed ASA with no warping',
        '18-minute Benchy at 500 mm/s (Tom’s Hardware)',
        'Works with the four-spool AMS, up to 16 colours',
        'Huge community and accessory support',
      ],
      cons: [
        'Noisy (Tom’s Hardware)',
        'Nozzle isn’t a quick-swap part: you replace the whole hotend with screws and fine wires',
        'AMS wastes filament on colour changes',
        'Basic camera and button-and-dial screen; no AI failure detection',
        'Superseded by the P2S, which costs $100 more',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY' },
        { label: 'Build volume', value: '256 × 256 × 256 mm' },
        { label: 'Max speed / acceleration', value: '500 mm/s, 20,000 mm/s² (Bambu Lab)' },
        { label: 'Hotend', value: 'All-metal, 0.4 mm stainless steel nozzle, up to 300°C' },
        { label: 'Bed', value: 'Textured PEI, heated' },
        { label: 'Levelling', value: 'Automatic (about 6 minutes before each print, optional)' },
        { label: 'Multicolour', value: 'Optional AMS (4 spools, up to 16 colours with 4 units)' },
        { label: 'Price', value: '$349 (typical $399); AMS Combo typical $549' },
      ],
      scores: { performance: 8.2, quality: 8.4, ease: 8.4, value: 9.0 },
      body: `## What is it?

The P1S is the enclosed version of Bambu Lab’s P1P: a CoreXY printer with a 256 mm cube of build space, a glass door and lid, and a carbon filter. When Tom’s Hardware reviewed it in 2023 it cost $699, $500 less than the X1 Carbon. It has since been replaced as Bambu’s mid-range printer by the [P2S](/en/review/bambu-lab-p2s/), but it is still on sale, and the price has collapsed: **$349** on 3 November 2026, with the AMS Combo at a typical $549.

## Setting up

The P1S comes almost fully assembled. Remove the transport screws, plug in the AMS if you have one, and it runs its own levelling, vibration compensation and motor calibration. Before each print it rechecks the bed, which takes about six minutes; you can switch that off.

## Print quality and speed

Tom’s Hardware printed a speed-rules Benchy in **18 minutes** at 500 mm/s, and called the overall quality excellent. Recycled PETG printed smoothly in 1 h 52 min, an ASA tape dispenser came out without warping in 1 h 17 min with a little glue stick, and nylon looked good but needed slower walls (75 mm/s) for strong layer bonds. The perfect first layer also made HueForge “filament painting” possible with the stock 0.4 mm nozzle.

## The enclosure is the point

What the P1S offers over an A1 is a closed box. ABS and ASA need warm, still air to stop warping and cracking, and an enclosure keeps the fumes contained while a filter takes the edge off the smell. If you want to print car parts, outdoor brackets or anything that sits in the sun, this matters more than speed. Read our [filament drying guide](/en/blog/how-to-dry-3d-printer-filament/) too: ABS and ASA print much better dry.

## What owners complain about

- **Noise.** Tom’s Hardware lists it as a con; the cooling fans are loud at speed.
- **The hotend.** The nozzle isn’t separately replaceable. You swap the whole hotend, which means several screws, plugs and delicate thermistor wires. The P2S and A-series use a tool-free nozzle.
- **The AMS wastes filament** on colour changes, and the rear spool holder is awkward to reach.
- **The basics are dated.** A small button-and-dial screen, a low-frame-rate camera, microSD only.

## Who should not buy it

- Anyone who can stretch to $449: the [P2S](/en/review/bambu-lab-p2s/) fixes almost every complaint above. See [P1S vs P2S](/en/compare/bambu-lab-p1s-vs-bambu-lab-p2s/).
- Anyone who mainly wants multicolour: the waste adds up, and a dual-nozzle [X2D](/en/review/bambu-lab-x2d/) or a toolchanger wastes less.
- Anyone who needs quiet.

## vs rivals

- **vs [ELEGOO Centauri Carbon 2 Combo](/en/review/elegoo-centauri-carbon-2-combo/) ($449):** enclosed, four colours included, 350°C nozzle.
- **vs [Anycubic Kobra S1 Combo](/en/review/anycubic-kobra-s1-combo/) ($429):** enclosed, four colours plus filament drying included.
- **vs [Bambu Lab A1](/en/review/bambu-lab-a1/) ($259):** cheaper and quieter, but no enclosure.

## Final thoughts

At $699 the P1S was the safe recommendation. At $349 it is a bargain enclosed printer that happens to be a generation old. Buy it for the price; buy the P2S if you want the better day-to-day experience.

## Sources

- [Tom’s Hardware: Bambu Lab P1S review](https://www.tomshardware.com/reviews/bambu-lab-p1s) (Denise Bertacchi, July 2023)
- [Tom’s Hardware: Bambu Lab P2S review](https://www.tomshardware.com/3d-printing/bambu-lab-p2s-review) (October 2025, for the comparison)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-p2s',
      name: 'Bambu Lab P2S',
      brand: 'Bambu Lab',
      model: 'P2S',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2025,
      price_usd: 449,
      featured: true,
      image_url: img('default/563f9bc5c51f4821b7317a13a0854ad3/P2S-compressed.jpg'),
      gallery: [img('default/256fe808371749098e0d872bcc3212dd/P2S_Combo-compressed.jpg'), img('default/8bac0b2dcf684bd5a9342b079b4c821c/b132375525426369d3a875da2cbbdf45.jpg')],
      affiliate_url: bb('p2s'),
      affiliate_label: LABEL,
      title: 'Bambu Lab P2S review: the enclosed all-rounder most people should buy',
      summary: 'Bambu’s mid-range CoreXY gets a touchscreen, quick-swap nozzle, 1080p AI camera and a stronger extruder. Tom’s Editor’s Choice; $449.',
      verdict: 'The P2S fixes almost everything people disliked about the P1S: a colour touchscreen, a tool-free nozzle, a 1080p camera that watches for spaghetti, a USB port, active airflow that lets you keep the door closed for PLA, and an extruder with about 70% more force. Tom’s Hardware made it the first P-series printer to get its Editor’s Choice. It still wastes filament on colour changes and has no active chamber heater, and CNC Kitchen thinks the dual-nozzle X2D makes it hard to justify. At $449 it is the safest enclosed printer to recommend.',
      best_for: 'Anyone who wants one enclosed printer for PLA, PETG, ABS and occasional colour',
      pros: [
        'Tom’s Hardware Editor’s Choice',
        'Enclosed CoreXY for $449 (typical $549)',
        'Tool-free quick-swap hardened-steel nozzle',
        '1080p camera with AI spaghetti and plate checks; USB port for files',
        'Active airflow: print PLA with the door closed',
      ],
      cons: [
        'AMS colour changes still waste a lot of filament',
        'No active chamber heater (the X2D and H2 series have one)',
        'Ties you to Bambu Studio and Bambu’s cloud more than open printers do',
        'Tom’s ABS test showed a small layer gap on one side',
        'The $140-more X2D adds a second nozzle and chamber heating',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY' },
        { label: 'Build volume', value: '256 × 256 × 256 mm' },
        { label: 'Hotend', value: 'Quick-swap 0.4 mm hardened steel nozzle; PMSM servo extruder, 8.5 kg force' },
        { label: 'Camera', value: '1080p, AI spaghetti, blob and plate detection' },
        { label: 'Screen / ports', value: 'Colour touchscreen; USB, Wi-Fi, Bluetooth' },
        { label: 'Footprint', value: '392 × 406 × 478 mm' },
        { label: 'Multicolour', value: 'AMS 2 Pro in the Combo (4 spools, dries filament)' },
        { label: 'Price', value: '$449 (typical $549); Combo $799 at launch' },
      ],
      scores: { performance: 8.8, quality: 8.8, ease: 9.0, value: 9.2 },
      body: `## What is it?

The P2S replaced the [P1S](/en/review/bambu-lab-p1s/) as Bambu Lab’s mid-range printer in October 2025. It keeps the familiar 256 mm cube and enclosed CoreXY frame, then borrows the best parts of its siblings: the H2-style touchscreen and quick-swap nozzle, a 1080p camera with AI monitoring, a USB port, and a new servo extruder.

Tom’s Hardware reviewed it at $549 alone and $799 as a Combo with the AMS 2 Pro. On 3 November 2026 the US store sold the printer for **$449**.

## Setting up

The P2S ships almost fully assembled with tools, spare wiping pads and a half-kilo refillable spool of white PLA. The first boot handles levelling, vibration compensation and flow calibration automatically.

## Print quality and speed

Tom’s Hardware found Bambu’s usual speed, quality and ease of use, and gave it an Editor’s Choice, the first for a P-series printer. A 20-hour PETG carbon-fibre game board came out “absolutely perfect”, ABS spinning tops printed without the door-open fuss of the P1S (with one tiny layer gap on one side), and a TPU bag printed through a 0.8 mm nozzle has served as an everyday bag for a month.

The new PMSM servo extruder pushes 8.5 kg, about 70% more than the old one, and an eddy-current sensor measures nozzle pressure to tune flow automatically. Together with a tangle sensor in the filament hub and AI camera monitoring, the P2S catches more problems before they turn into spaghetti.

## The deep dive: airflow and the closed door

The P1S made you open the door for PLA, or the chamber got hot enough to soften parts and clog the nozzle. The P2S’s **active airflow** system pulls cooler room air across the part-cooling fan instead, so you can leave it closed for every material. That sounds minor, but it means fewer clogs, less noise and less dust.

What it doesn’t have is an active **chamber heater**. ABS works, as Tom’s showed, but for nylon and big ABS parts the heated chamber on the [X2D](/en/review/bambu-lab-x2d/) or [H2S](/en/review/bambu-lab-h2s/) is better.

## What owners complain about

- **Purge waste.** The single nozzle flushes on every colour change; Tom’s lists it as the main con. See our [purge waste guide](/en/blog/multicolor-3d-printing-purge-waste/).
- **No chamber heater**, so nylon and big ABS parts are harder than on the X2D.
- **Bambu’s ecosystem.** Like every Bambu printer, it works best with Bambu Studio and the cloud.

## Who should not buy it

- Multicolour fans: the [X2D](/en/review/bambu-lab-x2d/) wastes far less for $140 more. See [P2S vs X2D](/en/compare/bambu-lab-p2s-vs-bambu-lab-x2d/).
- People printing nylon or large ABS parts often: get a heated chamber.
- Buyers who only print PLA and are short of money: the [A1](/en/review/bambu-lab-a1/) is $190 less.

## vs rivals

- **vs [P1S](/en/review/bambu-lab-p1s/) ($349):** $100 less and still enclosed, but noisier and older. See [P1S vs P2S](/en/compare/bambu-lab-p1s-vs-bambu-lab-p2s/).
- **vs [Creality K2 Combo](/en/review/creality-k2-combo/) ($549):** includes four colours and a bigger 260 mm bed; Bambu’s software is more polished. See [P2S vs K2 Combo](/en/compare/bambu-lab-p2s-vs-creality-k2-combo/).
- **vs [ELEGOO Centauri Carbon 2 Combo](/en/review/elegoo-centauri-carbon-2-combo/) ($449):** four colours included for the price of a bare P2S.

## Final thoughts

The P2S is the printer we would point most people to: enclosed, fast, easy and polished. Only the dual-nozzle X2D, $140 more, makes us hesitate.

## Sources

- [Tom’s Hardware: Bambu Lab P2S review](https://www.tomshardware.com/3d-printing/bambu-lab-p2s-review) (Denise Bertacchi, October 2025, Editor’s Choice)
- [CNC Kitchen: Bambu Lab X2D review](https://www.cnckitchen.com/blog/bambu-lab-x2d-review-affordable-dual-nozzle-printing-with-a-catch) (P2S vs X2D)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-x2d',
      name: 'Bambu Lab X2D',
      brand: 'Bambu Lab',
      model: 'X2D',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2026,
      price_usd: 589,
      featured: true,
      image_url: img('default/efc96cd40b5a4c9d9562f7d693f95082/3.jpg'),
      gallery: [img('default/66f7c61a74b34ba690ee9b3028b24eba/compressed_8.jpg'), img('default/69761eea681d4b5f848e451b5525819d/6.jpg'), img('default/5f7fb4ff0af44c79818d347a9ab87c04/1.jpg')],
      affiliate_url: bb('x2d'),
      affiliate_label: LABEL,
      title: 'Bambu Lab X2D review: dual nozzles and a heated chamber for $589',
      summary: 'The X1 Carbon’s replacement adds a second nozzle, a 65°C heated chamber and better filtration. The Bowden-fed second nozzle is the catch.',
      verdict: 'The X2D is the best-value printer in Bambu’s range. For $589 ($899 as a Combo at launch) you get an enclosed CoreXY with an actively heated chamber, three-stage filtration and a second nozzle that saves filament and makes supports easy to peel off. Tom’s Hardware gave it an Editor’s Choice, How-To Geek called it the best 3D printer on the market, and CNC Kitchen says it makes the P2S hard to justify. The compromise is the auxiliary nozzle: it is Bowden-fed, prints some parts at half speed, can’t run TPU, and costs about 20 mm of bed width.',
      best_for: 'Enthusiasts who want one enclosed printer for every common material, with less colour waste',
      pros: [
        'Second nozzle saves filament: 101 g saved on one Tom’s print',
        'Active chamber heating to 65°C (CNC Kitchen) for ABS, ASA and nylon',
        'HEPA plus activated-carbon filtration',
        'Editor’s Choice (Tom’s Hardware); How-To Geek’s best printer on the market',
        'About 55 dBA while printing at 1 m (CNC Kitchen)',
      ],
      cons: [
        'Auxiliary nozzle is Bowden-fed: a test cube took 42 min vs 21 min on the main nozzle',
        'Auxiliary nozzle can’t print TPU and loses about 20 mm of bed width',
        'Hotends top out at 300°C (the H2 series reach 350°C)',
        'No USB stick in the box; AMS 2 Pro needs an extra cable to dry while printing',
        'Filtration reduces smell but doesn’t remove it (CNC Kitchen, Notebookcheck)',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY, dual nozzle (direct drive + Bowden auxiliary)' },
        { label: 'Build volume', value: '256 × 256 × 256 mm (aux nozzle about 20 mm narrower)' },
        { label: 'Speed', value: '1,000 mm/s travel, 20,000 mm/s² (Bambu Lab)' },
        { label: 'Hotends / bed', value: 'Up to 300°C / up to 120°C' },
        { label: 'Chamber', value: 'Active heating, 65°C in about 20 minutes (CNC Kitchen)' },
        { label: 'Filtration', value: 'Three-stage, HEPA + activated carbon' },
        { label: 'Footprint / weight', value: '392 × 406 × 478 mm, 16.25 kg' },
        { label: 'Power', value: 'About 160 W average for PLA, 330 W for ASA (CNC Kitchen)' },
        { label: 'Price', value: '$589 (typical $649); Combo with AMS 2 Pro $899 at launch' },
      ],
      scores: { performance: 9.0, quality: 9.0, ease: 8.8, value: 9.2 },
      body: `## What is it?

The X2D replaced the X1 Carbon, the printer that started the fast multicolour craze, in April 2026. It keeps the 256 mm cube but rebuilds almost everything else: steel rods instead of carbon-fibre ones, a heated and cooled chamber, a three-stage HEPA and carbon filter, a 1080p AI camera, the tool-free nozzles from the A, P2 and H2 series, and, most importantly, **a second nozzle**.

It launched at $649, or $899 with the AMS 2 Pro, which Tom’s Hardware noted is $550 less than the X1 Carbon’s Kickstarter price. On 3 November 2026 the US store sold it for **$589**.

## Setting up

The X2D comes mostly assembled. Tom’s Hardware spent more time removing packing screws and zip ties than assembling; you mount a few parts on the back and plug in the screen. Notebookcheck needed about 45 minutes with two people. There is no USB stick in the box, and you need one for timelapses.

## The deep dive: how the second nozzle works

Unlike the H2D, where both nozzles are direct drive, the X2D’s right-hand **auxiliary nozzle is fed by a Bowden extruder mounted on the back of the machine**. That keeps the toolhead light and fast, and nozzle switching is mechanical, with no extra motor in the head.

It works well for its intended jobs. Bambu suggests using it for support material that doesn’t stick to the part, so supports peel off cleanly. It also cuts colour waste: on a herd of 15 two-colour minis, Tom’s saved **101 g** of filament and wasted only 11.5 g in the prime tower, in 13 h 54 min. On a larger print the slicer claimed 111 g saved, but 143 g still went to purges.

The compromise is speed. Tom’s main nozzle printed a test cube in **20 min 35 s**; the auxiliary took **41 min 59 s**, with slightly wavy walls. CNC Kitchen also saw more stringing and no clog detection on that side, and the auxiliary nozzle can’t print TPU.

## Print quality and materials

The main nozzle is excellent. CNC Kitchen printed a Benchy in 37 minutes on the standard profile, and Notebookcheck got usable M3 threads at 0.2 mm layers. The active chamber heater switches on by itself for hot filaments: CNC Kitchen measured a real **65°C in about 20 minutes**, and PLA prints with the door closed at around 32°C. CNC Kitchen measured about **55 dBA** at 1 m in normal printing and just over 60 dBA on fast travel moves.

## What owners complain about

- **The Bowden auxiliary nozzle** (see above).
- **One AMS output.** The AMS 2 Pro only feeds one nozzle automatically; the other needs an external spool, an AMS HT or a second AMS.
- **300°C hotends**, against 350°C on the H2 series.
- **Smell.** The filter helps a lot, but Notebookcheck says you’d need an enclosure tent for near-complete odour control.
- **First layers** on the textured plate were uneven in one corner for CNC Kitchen; the smooth plate fixed it.

## Who should not buy it

- Beginners: The Technology Man notes the extra features add complexity; an [A1](/en/review/bambu-lab-a1/) or [P2S](/en/review/bambu-lab-p2s/) is simpler.
- Anyone who needs a bigger bed, a laser or 350°C: look at the [H2D](/en/review/bambu-lab-h2d/).
- Heavy TPU users: the [H3C](/en/review/bambu-lab-h3c/) is built for it.

## vs rivals

- **vs [P2S](/en/review/bambu-lab-p2s/) ($449):** $140 less, single nozzle, no chamber heater. See [P2S vs X2D](/en/compare/bambu-lab-p2s-vs-bambu-lab-x2d/).
- **vs [Flashforge Creator 5 Pro](/en/review/flashforge-creator-5-pro/) ($849):** four independent toolheads waste even less in colour work.
- **vs [Snapmaker U1](/en/review/snapmaker-u1/) ($699):** a four-head toolchanger for multicolour, without the heated chamber.

## Final thoughts

For $589 the X2D does nearly everything the $1,000-plus H2 machines do, minus the laser and the extra size. If you are buying one enclosed Bambu printer in late 2026, this is the one we would pick.

## Sources

- [Tom’s Hardware: Bambu Lab X2D review](https://www.tomshardware.com/3d-printing/bambu-lab-x2d-review) (Denise Bertacchi, April 2026, Editor’s Choice)
- [CNC Kitchen: Bambu Lab X2D review](https://www.cnckitchen.com/blog/bambu-lab-x2d-review-affordable-dual-nozzle-printing-with-a-catch) (Stefan Hermann, April 2026)
- [Notebookcheck: Bambu Lab X2D Combo review](https://www.notebookcheck.net/Bambu-Lab-X2D-Combo-review-Dual-nozzle-3D-printer-tested.1311491.0.html) (May 2026)
- [How-To Geek: Bambu Lab X2D review](https://www.howtogeek.com/bambu-lab-x2d-review/)
- [The Technology Man: Bambu X2D review](https://thetechnologyman.com/bambu-x2d-review-it-made-me-want-to-review-3d-printers-again/)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-h2s',
      name: 'Bambu Lab H2S',
      brand: 'Bambu Lab',
      model: 'H2S',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2025,
      price_usd: 1049,
      image_url: img('default/6564e65d646944a1953fe8ea01396078/H2S-compressed.jpg'),
      gallery: [img('default/2408ba92d2f74761b5e3c0bca8163962/H2SC-compressed.jpg'), img('default/2a3bf37d54e840f5b4fe97c6a166ae21/H2SL-compressed.jpg'), img('default/4df3d468c6e949f39f343cebc7d60db6/H2S-9.jpg')],
      affiliate_url: bb('h2s'),
      affiliate_label: LABEL,
      title: 'Bambu Lab H2S review: Bambu’s biggest bed, one nozzle, $1,049',
      summary: 'A 340 mm-wide enclosed CoreXY with a 350°C nozzle and heated chamber. Tom’s Editor’s Choice; expensive next to the A2L and X2D.',
      verdict: 'The H2S is the single-nozzle version of the H2D, and Tom’s Hardware called it the one makers had been asking for: a practically plug-and-play enclosed printer with a 340 mm-wide plate, Bambu’s largest. It handles ABS, ASA and nylon in a heated chamber, and FauxHammer calls it the easiest recommendation in the H2 line. The problem is price. At $1,049 it costs more than twice an A2L of nearly the same size, and the dual-nozzle X2D does most jobs for $460 less. Buy it if you need large parts in engineering materials.',
      best_for: 'Makers who need large ABS, ASA, nylon or carbon-fibre parts in one piece',
      pros: [
        'Largest bed in Bambu’s range: 340 × 320 × 340 mm',
        'Heated chamber and 350°C nozzle for engineering filaments',
        'Editor’s Choice (Tom’s Hardware)',
        'Lighter single-nozzle head; some owners see slightly faster prints than the H2D',
        'Optional 10W laser version; works with existing AMS units',
      ],
      cons: [
        '$1,049 is more than twice the price of the similar-size A2L',
        'Proprietary replacement parts (Tom’s Hardware)',
        'First calibration takes about 45 minutes',
        'Single nozzle: colour work wastes filament',
        'The X2D does most jobs for $460 less',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY, single nozzle' },
        { label: 'Build volume', value: '340 × 320 × 340 mm' },
        { label: 'Hotend', value: 'Up to 350°C, quick-swap hardened steel nozzle' },
        { label: 'Chamber', value: 'Active heating' },
        { label: 'Speed Benchy', value: '25 min 28 s (Tom’s Hardware)' },
        { label: 'Versions', value: 'Base, AMS Combo, Laser Full Combo (10W)' },
        { label: 'Price', value: '$1,049 (typical $1,199); launch prices $1,249 base, $1,499 Combo, $2,099 laser' },
      ],
      scores: { performance: 9.0, quality: 9.0, ease: 8.8, value: 8.0 },
      body: `## What is it?

The H2S, launched in August 2025, is the H2D without the second nozzle. You get the H2 series’ large enclosed frame, a heated chamber and a 350°C hotend, and the plate grows to **340 mm** wide because there is no second nozzle to park. Tom’s Hardware called it the largest machine Bambu Lab had made.

At launch it cost $1,249 alone, $1,499 with the AMS 2 Pro and $2,099 with a 10W laser. On 3 November 2026 the US store sold the base printer for **$1,049**.

## Setting up

Setup is Bambu-easy: unpack, remove the transport screws and let it calibrate. The first self-check and levelling takes a good 45 minutes, as on the H2D. CGMagazine found it remarkably easy to set up.

## Print quality and speed

Tom’s Hardware printed a speed-rules Benchy in **25 min 28 s** at default settings. Six four-colour glitter owls took 15 h 29 min with no colour bleed, a two-plate PETG Gridfinity storage unit took 26 h 17 min at about 150 mm/s with even lines, and a TPU collapsible water bottle came out watertight in 10 h 2 min. CGMagazine found it handled ABS, ASA and nylon well. A Bambu forum owner with 250 hours on the machine reports that the lighter single-nozzle head sometimes finishes slightly faster than an H2D.

## The deep dive: why size and heat matter

The H2S exists for parts that don’t fit a 256 mm cube and need tougher plastics than PLA: drone frames, car parts, full-size cosplay helmets in ASA, jigs in carbon-fibre nylon. The A2L can match the size in PLA, but it has no enclosure and an 80°C bed. The H2S has a heated chamber, a 350°C nozzle and a sealed enclosure, so those materials print without warping.

## What owners complain about

- **Price.** Tom’s lists it as the main con; prices have fallen, but it is still the costliest single-nozzle Bambu.
- **Proprietary parts.** Hotends and many spares only come from Bambu.
- **Colour waste.** One nozzle means a purge at every colour change. The [H2D](/en/review/bambu-lab-h2d/) or [H3C](/en/review/bambu-lab-h3c/) waste less.

## Who should not buy it

- PLA and PETG users who just want big prints: the [A2L](/en/review/bambu-lab-a2l/) is $610 cheaper. See [A2L vs H2S](/en/compare/bambu-lab-a2l-vs-bambu-lab-h2s/).
- Anyone whose parts fit in 256 mm: the [X2D](/en/review/bambu-lab-x2d/) has a heated chamber and two nozzles for $589.
- Multicolour fans.

## vs rivals

- **vs [H2D](/en/review/bambu-lab-h2d/) ($1,399):** two nozzles, less waste, slightly narrower plate, $350 more.
- **vs [Creality K2 Plus Combo](/en/review/creality-k2-plus-combo/) ($1,199):** a 350 mm cube and four colours included.
- **vs [A2L](/en/review/bambu-lab-a2l/) ($439):** similar size, open frame, PLA and PETG only.

## Final thoughts

The H2S is a superb, easy large-format printer for engineering materials. Just be honest about whether you need the size and the heat at the same time, because cheaper Bambus cover either one.

## Sources

- [Tom’s Hardware: Bambu Lab H2S review](https://www.tomshardware.com/3d-printing/bambu-lab-h2s-review-the-one-we-wanted) (Denise Bertacchi, August 2025, Editor’s Choice)
- [CGMagazine: Bambu Lab H2S review](https://www.cgmagonline.com/review/hardware/bambu-lab-h2s-3d-printer)
- [FauxHammer: H2S vs H2D vs H2C](https://www.fauxhammer.com/reviews/bambu-h2s-vs-h2d-vs-h2c-review-why-spending-more-can-actually-get-you-less/)
- [Bambu Lab forum: H2S, 250 hours and counting](https://forum.bambulab.com/t/bambu-labs-h2s-250-hours-and-counting/224475) (owner report)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-h2d',
      name: 'Bambu Lab H2D',
      brand: 'Bambu Lab',
      model: 'H2D',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2025,
      price_usd: 1399,
      image_url: img('default/0154a55216304725b7b104ff52f3f74e/H2D-compressed_930bcf04-0b07-4c4c-88c4-c5adf53204f5.jpg'),
      gallery: [img('default/8826fb2e60dc4446b5f36afea7e2a2a9/H2DC-compressed_0e2637a6-cb5c-4888-9b2c-2410433cb029.jpg'), img('default/bff42dc4c7ec4b3b8ec948a6c5cf0ae2/H2DL-10w-compressed.jpg'), img('default/272e1bbf34ca419db56a579d4f69872c/H2DMain_800_09_DC_DL.jpg')],
      affiliate_url: bb('h2d'),
      affiliate_label: LABEL,
      title: 'Bambu Lab H2D review: dual nozzles, a big chamber and an optional laser',
      summary: 'Two direct-drive 350°C nozzles, a 350 mm-wide heated chamber and laser, cutter and pen options. Brilliant, but extras get expensive.',
      verdict: 'The H2D is Bambu’s two-nozzle workshop machine: two direct-drive 350°C nozzles, a heated chamber, a 350 × 320 × 325 mm build volume and optional 10W or 40W lasers, a blade cutter and a pen plotter. Tom’s Hardware called it a worthy successor to the X1 Carbon, with the dual nozzles its favourite improvement. CNC Kitchen considers it the better buy than the H3C if you only need two materials at once. It is still expensive ($1,399), the laser bundles are much more, and replacement parts are proprietary. The X2D now covers much of the same ground for less than half the price.',
      best_for: 'Crafters and small businesses who want two-material printing plus laser engraving in one machine',
      pros: [
        'Two direct-drive nozzles to 350°C: less waste, two materials per print',
        'Large 350 × 320 × 325 mm volume and a heated chamber',
        'Optional 10W/40W laser, blade cutter and pen plotter',
        '21 min 30 s speed Benchy (Tom’s Hardware)',
        'Backwards compatible with older AMS units',
      ],
      cons: [
        'Expensive: $1,399, and laser bundles launched at $2,799–3,499',
        'Proprietary replacement parts',
        'First self-check and levelling takes about 45 minutes',
        'Lower acceleration than the P1P: 6 test tails printed 10 minutes slower on the H2D',
        'Dual-nozzle volume shrinks to 300 mm wide',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY, two direct-drive nozzles' },
        { label: 'Build volume', value: '350 × 320 × 325 mm total; 325 mm wide single nozzle, 300 mm dual' },
        { label: 'Hotends', value: 'Two, up to 350°C' },
        { label: 'Acceleration', value: '8,000 mm/s² (Tom’s Hardware)' },
        { label: 'Footprint', value: '492 × 514 × 626 mm' },
        { label: 'Options', value: '10W or 40W laser, blade cutter, pen plotter' },
        { label: 'Price', value: '$1,399 (typical $1,549); launch: $1,899 base, $2,199 Combo, $2,799/$3,499 laser' },
      ],
      scores: { performance: 9.2, quality: 9.0, ease: 8.4, value: 7.6 },
      body: `## What is it?

The H2D, launched in March 2025, was Bambu Lab’s new flagship and the first of the H2 series. It is a large enclosed CoreXY with **two direct-drive nozzles** on one toolhead, a heated chamber, 350°C hotends, and an optional laser module (10W or 40W), blade cutter and pen plotter that turn it into a craft workshop.

At launch it cost $1,899 alone, $2,199 with the AMS 2 Pro, and $2,799 or $3,499 with the 10W or 40W laser kits. On 3 November 2026 the US store sold the base printer for **$1,399**.

## Setting up

The H2D ships with tools, a spare hotend, spare wiping pads and a USB stick. Because both nozzles need calibrating, the first self-check and levelling takes about **45 minutes**; an eddy-current sensor aligns the two nozzles automatically.

## Print quality and speed

Tom’s Hardware printed a speed-rules Benchy in **21 min 30 s**. A five-colour dragon book nook in CoPE took 36 h 50 min, a scaled-up PETG box took 9 h 14 min with no stringing, a carbon-fibre hammer took 1 h 51 min with supports that came off easily, and a TPU bag in vase mode took 1 h 23 min.

The H2D isn’t the fastest Bambu. With 8,000 mm/s² acceleration it trails the older P1P (10,000 mm/s²): when Tom’s printed six “mermaid tails”, the P1P finished ten minutes sooner but wasted 6.54 g on purges, where the H2D’s second nozzle saved most of that.

## The deep dive: two nozzles and a laser

Two nozzles mean two materials or colours without purging between them: PLA with a non-stick support material, or a rigid body with flexible TPU parts. With an AMS on each side you can still print many colours, but the waste only applies within each nozzle.

The laser is the H2D’s other headline. Tom’s found it well thought out rather than a bolt-on: a camera places the job, safety glass and an emergency stop are included in the laser bundles, and the pen plotter drew clip-art in 30–45 seconds. Tom’s saw Bambu aiming at xTool, Glowforge and Cricut, not just printer buyers. If you only want a laser, a dedicated [xTool S1](/en/review/xtool-s1/) has a bigger bed.

## What owners complain about

- **Price**, especially the laser bundles.
- **Proprietary parts.** Hotends, nozzles and many spares only come from Bambu.
- **Slightly slower** than the X1 Carbon it replaced, because the bigger frame accelerates more gently.
- **Complexity.** Tom’s calls the H2 dual-nozzle head more complex to maintain than the X2D’s.

## Who should not buy it

- Anyone whose parts fit in a 256 mm cube: the [X2D](/en/review/bambu-lab-x2d/) gives you two nozzles and a heated chamber for $589.
- Anyone who doesn’t need two materials at once: the [H2S](/en/review/bambu-lab-h2s/) is cheaper and wider.
- Anyone who wants many colours with almost no waste: the [H3C](/en/review/bambu-lab-h3c/) toolchanger. See [H2D vs H3C](/en/compare/bambu-lab-h2d-vs-bambu-lab-h3c/).

## Final thoughts

The H2D is a superb machine and the only Bambu that prints and lasers in one box. But the X2D and the falling price of the H2S have squeezed it. Buy it for two-material printing at large size, or for the laser.

## Sources

- [Tom’s Hardware: Bambu Lab H2D review](https://www.tomshardware.com/3d-printing/bambu-lab-h2d-review) (Denise Bertacchi, March 2025)
- [CNC Kitchen: Bambu Lab H3C review](https://www.cnckitchen.com/blog/bambu-lab-h3c-review) (H2D vs H3C advice)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-h3c',
      name: 'Bambu Lab H3C',
      brand: 'Bambu Lab',
      model: 'H3C',
      category: '3d-printers',
      art_type: 'fdm-enclosed',
      tone: TONE,
      released: 2026,
      price_usd: 2499,
      image_url: img('qmpte/d83bacc0d22f44d7a945c68baa99035d/1-1-compressed.jpg'),
      gallery: [img('qmpte/71ee545c7039407f8db584749230ec6a/1-2-compressed.jpg'), img('qmpte/10d89eeff829478b9c0d7386e4d52e87/1-3-compressed.jpg'), img('qmpte/52ffaceb1d144378bca96e218ebfefbe/1-4-compressed.jpg')],
      affiliate_url: bb('h3c'),
      affiliate_label: LABEL,
      title: 'Bambu Lab H3C review: nine tools, six-second swaps and soft TPU',
      summary: 'Bambu’s first true toolchanger: nine tools, 6–7 s swaps and a 2.85 mm tool for very soft TPU. $2,499 and over a metre tall.',
      verdict: 'The H3C is the toolchanger Bambu fans asked for. Nine tools swap in about 6–7 seconds, so an eight-colour dragon that took 37 hours and wasted 267 g on a single-nozzle printer finished in under 24 hours with 68 g of waste in Tom’s Hardware’s test. A 2.85 mm tool prints very soft TPU, and CNC Kitchen calls it probably the best option for heavy TPU use. It costs $2,499, stands over a metre tall, still wastes filament on its prime tower, and needs you to unload each spool on the printer before swapping it. Buy it only if you constantly print many colours or materials.',
      best_for: 'Heavy multicolour and multi-material users, especially soft TPU',
      pros: [
        'Nine tools with 6–7 second swaps (CNC Kitchen)',
        'Far less waste than single-nozzle colour: 68 g vs 267 g on Tom’s eight-colour dragon',
        '2.85 mm tool prints TPU as soft as 60A–75A',
        'Mix nozzle sizes and materials in one print; hardened steel nozzles',
        'Two-spool dryer runs at up to 85°C while printing',
      ],
      cons: [
        '$2,499, and only sold as the nine-tool version',
        'About 1,016 mm tall; Tom’s couldn’t fit it under a kitchen cabinet',
        'Prime tower still wastes filament: about 200 g on CNC Kitchen’s 4,000-change mask',
        'Each spool must be unloaded at the printer before you swap it',
        'Review unit had beta firmware glitches: a clicking motor and a tool catching its tube',
      ],
      specs: [
        { label: 'Type', value: 'Enclosed CoreXY toolchanger, 9 Swaptek tools' },
        { label: 'Build volume', value: '330 × 320 × 325 mm' },
        { label: 'Tools', value: '8 × 1.75 mm + 1 × 2.85 mm, all 0.4 mm hardened steel' },
        { label: 'Tool change', value: 'About 6–7 s (H2C about 40 s), per CNC Kitchen' },
        { label: 'Hotend / bed / chamber', value: '350°C / 120°C / 65°C' },
        { label: 'Filament system', value: 'AMS 3H: 9 spools, 2-spool dryer up to 85°C' },
        { label: 'Size / weight', value: '493 × 571 × 1,016 mm, 36.3 kg' },
        { label: 'Price', value: '$2,499; with Bambu Station cart $2,799' },
      ],
      scores: { performance: 9.4, quality: 9.0, ease: 8.0, value: 7.6 },
      body: `## What is it?

Launched on 3 November 2026, the H3C is Bambu Lab’s first true toolchanger. Instead of one or two nozzles fed by an AMS, it has **nine “Swaptek” tools**, each with its own nozzle and filament path, built into the bottom of a nine-spool **AMS 3H** that sits on top of the printer. One of the nine is a 2.85 mm tool for very soft TPU. It costs **$2,499** in the US, or $2,799 with the Bambu Station rolling cart. There is no smaller version.

Tom’s Hardware notes that is only $100 more than the H2C’s launch price; CNC Kitchen puts the gap at $300, but points out that an H2C with enough AMS units to match would cost more.

## Setting up

The first challenge is space. With the AMS 3H on top the H3C is **1,016 mm tall** and weighs 36 kg. Tom’s Hardware couldn’t fit it on a standard kitchen counter under a shelf, and CNC Kitchen needs a ladder to reach the spools; Bambu sells a pedestal and a rolling cart.

## The deep dive: how much a toolchanger saves

Tool changes take about **6–7 seconds** in CNC Kitchen’s measurements, against about 40 seconds on the H2C’s nozzle-swapping system. Each change still primes about 50 mg of filament onto a small tower, so waste falls a lot but doesn’t vanish.

The numbers are striking. Tom’s Hardware reprinted an eight-colour steampunk dragon that had taken 37 h 28 min and wasted **267 g** on an Anycubic Kobra 3 Max. On the H3C it took just under 24 hours and wasted **68 g**. Another model took 15 h 12 min with a 152.6 g prime tower; the same file in five colours on the H2C took 24 h 44 min. Prusa’s eight-tool CORE One INDX took a similar 15 h 38 min. CNC Kitchen’s Majora’s Mask, with over 4,000 tool changes, took about 32 hours and wasted almost 200 g.

## Soft TPU and engineering materials

The **2.85 mm tool** lets the H3C print very soft TPU that 1.75 mm extruders struggle with: Tom’s printed squishy 75A TPU wrist rests and RC tyres, and CNC Kitchen ran 60A TPU. Seven slots have a TPU bypass, and two sit inside an 85°C dryer that works while printing. In the 65°C chamber, a PA6 glass-fibre canister came out nearly indestructible for Tom’s.

## What owners complain about

- **Swapping spools.** Each spool must be unloaded on the printer first; CNC Kitchen’s biggest annoyance.
- **Height and weight.**
- **The AMS 3H** has no active dehumidifying, and its desiccant saturates quickly.
- **Speed artifacts** on some test prints (CNC Kitchen); real-world speed is only about 10% faster than the H2C or H2D.
- **Beta firmware** on review units caused a clicking motor and a tool catching other tubes (Tom’s Hardware).

## Who should not buy it

- First-time buyers: The Gadgeteer suggests a printer a third of the price.
- Anyone who only needs two materials at once: CNC Kitchen recommends the [H2D](/en/review/bambu-lab-h2d/). See [H2D vs H3C](/en/compare/bambu-lab-h2d-vs-bambu-lab-h3c/).
- Occasional colour printers: Yahoo Tech’s reviewer says most people will be happy with a [P2S](/en/review/bambu-lab-p2s/) or [X2D](/en/review/bambu-lab-x2d/).

## vs rivals

- **vs Prusa CORE One INDX ($2,369 eight-tool):** similar speed on Tom’s test, less purge per change, smaller.
- **vs [Snapmaker U1](/en/review/snapmaker-u1/) ($699):** four toolheads for a third of the price. See [H3C vs U1](/en/compare/bambu-lab-h3c-vs-snapmaker-u1/).
- **vs [Flashforge Creator 5 Pro](/en/review/flashforge-creator-5-pro/) ($849):** four tools, heated chamber, much cheaper.

## Final thoughts

The H3C is the most versatile printer Bambu has made, and the best toolchanger for soft TPU we know of. It is also a $2,499 tower that only makes sense if you live in multicolour.

## Sources

- [Tom’s Hardware: Bambu Lab H3C review](https://www.tomshardware.com/3d-printing/bambu-lab-h3c-3d-printer-review) (Denise Bertacchi, November 2026)
- [CNC Kitchen: Bambu Lab H3C review](https://www.cnckitchen.com/blog/bambu-lab-h3c-review) (Stefan Hermann, November 2026)
- [The Gadgeteer: Bambu’s H3C puts nine materials into one print](https://the-gadgeteer.com/2026/11/03/bambu-lab-h3c-toolchanger-3d-printer/)
- [Yahoo Tech: Bambu Lab H3C review](https://tech.yahoo.com/cameras/articles/bambu-lab-h3c-review-nine-141006301.html)
- [BambuHub: Bambu Lab price tracker](https://bambuhub.net/bambu-price-tracking) (US store prices, 3 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'bambu-lab-a1-mini-vs-bambu-lab-a1',
      title: 'Bambu Lab A1 mini vs A1: is the bigger bed worth $60?',
      products: ['bambu-lab-a1-mini', 'bambu-lab-a1'],
      intro: 'The same automatic, quiet bed-slinger in two sizes: a 180 mm cube for $199 or a 256 mm cube for $259.',
      verdict: 'Buy the A1 mini for small prints, small desks and the lowest price. Buy the A1 if you will ever print helmets, boxes or anything over 18 cm: the bigger bed is worth $60 for most people.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-p1s-vs-bambu-lab-p2s',
      title: 'Bambu Lab P1S vs P2S: save $100 or upgrade?',
      products: ['bambu-lab-p1s', 'bambu-lab-p2s'],
      intro: 'Same 256 mm enclosed CoreXY frame. The P2S adds a touchscreen, quick-swap nozzle, 1080p AI camera, stronger extruder and active airflow for $100 more.',
      verdict: 'Buy the P2S ($449) if you can: it is quieter, easier to maintain and catches failures with its camera. Buy the P1S ($349) only if the $100 matters more than those comforts; it prints just as well.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-p2s-vs-bambu-lab-x2d',
      title: 'Bambu Lab P2S vs X2D: one nozzle or two?',
      products: ['bambu-lab-p2s', 'bambu-lab-x2d'],
      intro: 'Two enclosed 256 mm CoreXY printers $140 apart. The X2D adds a second nozzle, a 65°C heated chamber and better filtration.',
      verdict: 'Choose the X2D ($589) if you print in colour, use supports a lot or want nylon and big ABS parts: the second nozzle and heated chamber are worth the money. Choose the P2S ($449) for simpler single-colour printing.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-a2l-vs-bambu-lab-h2s',
      title: 'Bambu Lab A2L vs H2S: big prints for $439 or $1,049?',
      products: ['bambu-lab-a2l', 'bambu-lab-h2s'],
      intro: 'Both print parts over 320 mm. The A2L is an open bed-slinger; the H2S is an enclosed CoreXY with a heated chamber and 350°C nozzle.',
      verdict: 'Choose the A2L for large PLA, PETG and TPU parts at a fraction of the price, if you have a sturdy table. Choose the H2S if those large parts must be ABS, ASA, nylon or carbon-fibre blends.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-h2d-vs-bambu-lab-h3c',
      title: 'Bambu Lab H2D vs H3C: dual nozzle or nine-tool toolchanger?',
      products: ['bambu-lab-h2d', 'bambu-lab-h3c'],
      intro: 'Bambu’s two large multi-material printers. The H2D has two direct-drive nozzles and laser options; the H3C has nine tools that swap in about 6–7 seconds.',
      verdict: 'Choose the H2D ($1,399) for two materials at once, laser engraving, or to save $1,100; CNC Kitchen recommends it if two materials are enough. Choose the H3C ($2,499) for many colours with less waste and for very soft TPU.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-p2s-vs-creality-k2-combo',
      title: 'Bambu Lab P2S vs Creality K2 Combo',
      products: ['bambu-lab-p2s', 'creality-k2-combo'],
      intro: 'Two enclosed CoreXY printers around $500. The K2 Combo includes four-colour CFS; the P2S price is for the printer alone.',
      verdict: 'Choose the K2 Combo ($549) for four colours in the box and a slightly larger bed. Choose the P2S ($449) for Bambu’s more polished software, AI camera and the easiest day-to-day experience, and add an AMS later.',
      updated_at: DATE,
    },
    {
      slug: 'bambu-lab-h3c-vs-snapmaker-u1',
      title: 'Bambu Lab H3C vs Snapmaker U1: toolchangers at $2,499 and $699',
      products: ['bambu-lab-h3c', 'snapmaker-u1'],
      intro: 'Both swap whole toolheads instead of purging one nozzle. The H3C has nine tools, a larger heated chamber and a 2.85 mm TPU tool; the U1 has four tools.',
      verdict: 'Choose the Snapmaker U1 for low-waste four-colour PLA and PETG at a third of the price. Choose the H3C for more than four colours or materials, soft TPU, a heated chamber and a larger 330 mm bed.',
      updated_at: DATE,
    },
    // Older comparisons that waited for the P1S and A1 mini reviews: republished with current prices.
    {
      slug: 'creality-ender-3-v3-se-vs-bambu-lab-a1-mini',
      replace: REPLACE,
      title: 'Creality Ender-3 V3 SE vs Bambu Lab A1 mini: best cheap first printer',
      products: ['creality-ender-3-v3-se', 'bambu-lab-a1-mini'],
      intro: 'Two popular $199 printers for beginners: a bigger bed against a more automatic, more polished experience.',
      verdict: 'Buy the Ender-3 V3 SE for the larger 220 mm bed. Buy the Bambu Lab A1 mini for automatic calibration, a quieter, faster machine and an easy path to four colours with the AMS Lite.',
      updated_at: DATE,
    },
    {
      slug: 'elegoo-centauri-carbon-2-combo-vs-bambu-lab-p1s',
      replace: REPLACE,
      title: 'ELEGOO Centauri Carbon 2 Combo vs Bambu Lab P1S',
      products: ['elegoo-centauri-carbon-2-combo', 'bambu-lab-p1s'],
      intro: 'Two enclosed CoreXY printers. The Centauri Carbon 2 Combo includes four-colour CANVAS for $449; the P1S is $349 alone and $549 with an AMS.',
      verdict: 'Choose the Centauri Carbon 2 Combo for multicolour on a budget and a hotter 350°C nozzle. Choose the Bambu Lab P1S for single-colour printing at the lowest price and Bambu’s mature software, and add an AMS later if you need colour.',
      updated_at: DATE,
    },
    {
      slug: 'anycubic-kobra-s1-combo-vs-bambu-lab-p1s',
      replace: REPLACE,
      title: 'Anycubic Kobra S1 Combo vs Bambu Lab P1S',
      products: ['anycubic-kobra-s1-combo', 'bambu-lab-p1s'],
      intro: 'Two enclosed CoreXY printers. The Kobra S1 Combo includes four-colour ACE 2 Pro with drying for $429; the P1S is $349 alone and $549 with an AMS.',
      verdict: 'Choose the Kobra S1 Combo for multicolour and filament drying for less money. Choose the Bambu Lab P1S for the cheapest enclosed single-colour printing and Bambu’s reliable software and accessory ecosystem.',
      updated_at: DATE,
    },
    {
      slug: 'snapmaker-u1-vs-bambu-lab-p1s',
      replace: REPLACE,
      title: 'Snapmaker U1 vs Bambu Lab P1S: toolchanger or AMS?',
      products: ['snapmaker-u1', 'bambu-lab-p1s'],
      intro: 'They solve colour changes in opposite ways. The U1 swaps four complete toolheads; the P1S feeds four spools into one nozzle through the AMS ($549 as a Combo).',
      verdict: 'Pick the Snapmaker U1 if you print multicolour or multi-material parts often: toolhead swaps waste far less filament and finish sooner. Pick the Bambu Lab P1S if you print mostly single-colour, want an enclosure for ABS at $349, and like Bambu’s polished ecosystem.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-bambu-lab-3d-printers',
      title: 'The best Bambu Lab 3D printers',
      category: '3d-printers',
      intro: 'Every current Bambu Lab printer ranked using independent reviews (Tom’s Hardware, CNC Kitchen, How-To Geek, Notebookcheck, The Gadgeteer) and US store prices on 3 November 2026.',
      items: [
        { slug: 'bambu-lab-x2d', award: 'Best overall', note: 'Dual nozzles, 65°C heated chamber, filtration. $589.' },
        { slug: 'bambu-lab-p2s', award: 'Best for most people', note: 'Enclosed, easy, Editor’s Choice. $449.' },
        { slug: 'bambu-lab-a1', award: 'Best for beginners', note: 'Full-size, automatic and quiet. $259.' },
        { slug: 'bambu-lab-a2l', award: 'Best large-format value', note: '330 mm bed for $439; needs a sturdy table.' },
        { slug: 'bambu-lab-a1-mini', award: 'Cheapest', note: 'Small, simple and $199.' },
        { slug: 'bambu-lab-p1s', award: 'Cheapest enclosed', note: 'ABS and ASA for $349; older and noisier.' },
        { slug: 'bambu-lab-h2s', award: 'Best for large engineering parts', note: '340 mm wide, 350°C, heated chamber. $1,049.' },
        { slug: 'bambu-lab-h2d', award: 'Best with a laser', note: 'Two nozzles plus 10W/40W laser options. $1,399.' },
        { slug: 'bambu-lab-h3c', award: 'Best multicolour and TPU', note: 'Nine tools, 6-second swaps. $2,499.' },
      ],
      updated_at: DATE,
    },
  ],
};
