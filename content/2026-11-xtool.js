// xTool batch: S1, M2, F2, F1 Ultra, P2S, F2 Ultra. Researched 10 November 2026.
// Prices and images: xtool.com/products.json and /products/<handle>.js, read in a browser on 10 Nov 2026 (US store, USD).
// Affiliate: xTool via Impact (xtool.pxf.io, partner 6833997). Deep links use the ?u= parameter.
// Test results come from the sources listed in each article; nothing here claims our own testing.
const IMPACT = 'https://xtool.pxf.io/c/6833997/1830359/21846';
const xt = (handle) => `${IMPACT}?u=${encodeURIComponent(`https://www.xtool.com/products/${handle}`)}`;
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0467/7985/9095/files/${file}`;
const DATE = '2026-11-10 10:00:00';
const LABEL = 'Check price at xTool';

export default {
  products: [
    {
      slug: 'xtool-s1',
      name: 'xTool S1 40W',
      brand: 'xTool',
      model: 'S1',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#263238',
      released: 2023,
      price_usd: 1448,
      featured: true,
      image_url: cdn('mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452'),
      gallery: [cdn('mk-a-s1_us_pc_en-s1inthebox_5008-4244_a65c6f20-1657-44c0-b52b-750b153983c9.webp?v=1773806566'), cdn('fe6168b058ee64b6bc8d62be793cabca_141d54ee-6b9e-4799-8ed0-47a59889f5ae.jpg?v=1773806566')],
      affiliate_url: xt('xtool-s1-laser-cutter'),
      affiliate_label: LABEL,
      title: 'xTool S1 review: the enclosed 40W diode laser that needs no goggles',
      summary: 'A Class 1 enclosed 40W diode laser with a 498 × 319 mm bed, now $1,448. Tom’s Hardware made it an Editor’s Choice; it has no camera.',
      verdict: 'The S1 puts a 40W diode laser in a Class 1 enclosure, so nobody in the room needs goggles. Tom’s Hardware gave it an Editor’s Choice for easy assembly, a large bed and good software, and The Gadgeteer measured it cutting 3 mm MDF about three times faster than xTool’s M1 while running much quieter. It has no camera for positioning, and the exhaust hose is stiff. At $1,448 for the 40W basic bundle it is a strong, safe home-workshop laser.',
      best_for: 'Home workshops and small businesses that want a safe, enclosed laser cutter',
      pros: [
        'Class 1 enclosure: no goggles needed, lid-open stop, 5-direction flame detection',
        'Large 498 × 319 mm bed (40W) for batches',
        '3 mm MDF cut at 13 mm/s vs 4 mm/s on the xTool M1 (The Gadgeteer)',
        'Swappable 20W, 40W and 2W IR modules',
        'Quiet next to the M1, P2 and Glowforge (The Gadgeteer)',
      ],
      cons: [
        'No camera; you position work with a pointer and the software',
        'Exhaust hose is stiff and fixed to the machine',
        'Air assist, honeycomb, riser and rotary cost extra',
        'Diode can’t cut clear acrylic (a CO2 laser can)',
        'Some smart features don’t work in LightBurn',
      ],
      specs: [
        { label: 'Laser', value: '40W blue diode (455 nm); 20W and 2W 1064 nm IR modules available' },
        { label: 'Work area', value: '498 × 319 mm with the 40W module' },
        { label: 'Max speed', value: '600 mm/s' },
        { label: 'Safety', value: 'Class 1 enclosure, flame detection, lid-open stop, tilt detection, e-stop, key lock' },
        { label: 'Positioning', value: 'Pointer-based edge capture, autofocus probe; no camera' },
        { label: 'Software', value: 'xTool Studio / Creative Space, LightBurn' },
        { label: 'Footprint', value: '765 × 561 × 268 mm' },
        { label: 'Price', value: '$1,448 for 40W Basic (list $2,199); 20W Basic $1,299, 10 Nov 2026' },
      ],
      scores: { performance: 8.6, quality: 8.6, ease: 8.2, value: 8.0 },
      body: `## What is it?

The S1 is xTool’s enclosed diode laser, sitting between its open-frame D1 Pro and the P2S CO2 laser. The enclosure is the point: with the lid shut it is a **Class 1** product, so the beam can’t reach anyone’s eyes and you can run it with people or pets around.

On 10 November 2026 xTool sells the **40W Basic bundle for $1,448** (list $2,199), the 20W Basic for $1,299, and bigger bundles with air assist, a honeycomb panel and a riser from $1,896.

## What reviewers found

- **Tom’s Hardware** (Denise Bertacchi, Editor’s Choice) praised easy assembly, the full enclosure, positioning crosshairs, the large cutting area and xTool’s software. Its two cons: price and no camera.
- **The Gadgeteer** (Mike Dixon) measured 3 mm MDF cutting at 13 mm/s against 4 mm/s on the older xTool M1, about 3.5 times faster, and engraved a slate coaster in 6.5 minutes. He found the S1 extremely quiet compared with the M1, the P2 and a Glowforge.
- **Make:** found the diode cut and engraved consistently and likened the S1 to a base Glowforge at about half the cost.

## Safety and the enclosure

The S1 stacks safety features: five-direction flame detection, a lid that stops the laser when opened, tilt and impact sensing, an emergency stop and a key lock. Our [laser safety guide](/en/blog/laser-engraver-safety-setup/) explains why an enclosed laser is the best choice for indoor use. You still need to vent fumes outside or through a filter.

## What reviewers complain about

- **No camera.** You mark the material’s edges with a pointer and the software places your design. It works, but rivals now include cameras.
- **Exhaust hose.** The Gadgeteer found the 3-inch hose stiff, permanently attached and hard to connect to other vents.
- **Extras add up.** Tom’s tested a bundle that cost $2,699 on sale.
- **LightBurn** works, but real-time positioning, material measuring and curved-surface mode only work in xTool’s software.

## Who should not buy it

- Anyone who mainly cuts clear acrylic or wants faster thick cuts: a CO2 laser like the [xTool P2S](/en/review/xtool-p2s/) is the right tool.
- Crafters on a tighter budget: the [xTool M2](/en/review/xtool-m2/) is enclosed too and starts at $499.

## vs rivals

- **vs [xTool M2](/en/review/xtool-m2/) ($499):** smaller and slower, but adds cameras and a colour inkjet. See [S1 vs M2](/en/compare/xtool-s1-vs-xtool-m2/).
- **vs [Creality Falcon A1](/en/review/creality-falcon-a1/) ($549):** cheaper enclosed diode with a smaller bed.
- **vs [Sculpfun iCube Ultra](/en/review/sculpfun-icube-ultra/) ($299):** a compact enclosed diode for small crafts.

## Final thoughts

The S1 is one of the safest ways to run a powerful diode laser at home. The lack of a camera is its only real weakness, and at today’s price it is easier to forgive.

## Sources

- [Tom’s Hardware: xTool S1 review](https://www.tomshardware.com/3d-printing/xtool-s1-review) (Editor’s Choice)
- [The Gadgeteer: xTool S1 review](https://the-gadgeteer.com/2023/10/18/xtool-s1-laser-engraver-and-cutter-review-worlds-first-40w-enclosed-diode-laser-cutter/)
- [Make: xTool S1 40W review](https://makezine.com/article/maker-news/review-xtool-s1-40watt-laser-cutter)
- [xTool store: S1](https://www.xtool.com/products/xtool-s1-laser-cutter) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-m2',
      name: 'xTool M2 Color Craft',
      brand: 'xTool',
      model: 'M2',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#263238',
      released: 2026,
      price_usd: 499,
      image_url: cdn('mk-m2_us_pc_10w-20wdanji_4582-263_9b492bef-5903-4722-b2d8-a36c8c99b45e.webp?v=1779863675'),
      gallery: [cdn('mk-m2_us_pc_us-gongnengjihe_12634-2304.webp?v=1792666725'), cdn('mk-m2_us_pc_us-chooseyourpower_12634-2314.webp?v=1792666725')],
      affiliate_url: xt('xtool-m2-color-craft-laser-cutter-engraver'),
      affiliate_label: LABEL,
      title: 'xTool M2 review: laser cutter and colour printer in one box from $499',
      summary: 'An enclosed diode laser with swappable CMYK inkjet head, cameras and air assist from $499. Tom’s Hardware Editor’s Choice; $99 non-refillable ink carts sting.',
      verdict: 'The M2 is an enclosed craft machine that prints in CMYK, then cuts around the print with a diode laser. Tom’s Hardware gave it an Editor’s Choice for its low price, twin cameras, built-in air assist and good software. MakerHacks liked it as a beginner or compact studio laser but warned it is no production cutter. Ink is the catch: $99 cartridges that can’t be refilled, and no LightBurn support. For stickers, cards and gifts, it is very good value.',
      best_for: 'Crafters who want printed stickers, cards and gifts cut out in one machine',
      pros: [
        'From $499 (10W standalone); $599 with CMYK print head',
        'Twin positioning cameras and a fire-watch camera',
        'Air assist and extraction fan included',
        'Fully enclosed (Class 1 with lid closed)',
        'Swap laser and print heads in seconds; free xTool Studio',
      ],
      cons: [
        'Non-refillable ink cartridge costs $99; no ink-level indicator (MakerHacks)',
        'No LightBurn support',
        'Flat metal base tray scars; no official honeycomb or riser at launch',
        'No blade or pen modes, and M1 accessories don’t fit',
        'Printing is good, not UV-printer vivid',
      ],
      specs: [
        { label: 'Laser', value: '10W, 20W or 40W blue diode; 3W 1064 nm IR module optional' },
        { label: 'Print head', value: 'CMYK inkjet module (water-based ink)' },
        { label: 'Work area', value: '426 × 320 mm laser; 300 × 294 mm print' },
        { label: 'Cameras', value: '5MP panoramic + 2MP close-range' },
        { label: 'Cutting (xTool)', value: '10W: 8 mm basswood, 3 mm black acrylic; 20W: 10 mm basswood, 8 mm acrylic' },
        { label: 'Size / weight', value: '610 × 569 × 180 mm, 12.3 kg' },
        { label: 'Price', value: '$499 10W standalone; $599 Color Print & Cut; 20W from $899, 10 Nov 2026' },
      ],
      scores: { performance: 7.6, quality: 8.0, ease: 9.0, value: 8.6 },
      body: `## What is it?

The M2 is xTool’s second all-in-one craft machine. It replaces the M1 Ultra’s blade and pen with a cleaner idea: an enclosed laser cutter whose magnetic head can be swapped for a **CMYK inkjet print head**. Print a sticker sheet, swap heads, and the laser cuts around each design.

On 10 November 2026 the 10W standalone is **$499**, the 10W Color Print & Cut bundle is **$599**, and 20W versions start at $899.

## What reviewers found

- **Tom’s Hardware** (Mark Tyson, August 2026, Editor’s Choice) liked the new low price, twin positioning cameras, integrated air assist, the added black ink and xTool Studio. Its cons: extras quickly push the price past $1,000, $99 ink cartridges, a flat metal tray for a cutting base and flimsy magnetic clamps.
- **MakerHacks** (Chris Garrett) recommends it as a beginner or compact studio laser, not a mass-production cutter. Swapping modules took seconds and the machine was quiet enough for a shared room.
- **Geekspin** found the print quality good, but not as rich as a UV printer.

## Printing: what to expect

Adding black ink is a real improvement over the M1’s washed-out CMY. Reviewers still describe the results as craft-good rather than photo-lab good, and the water-based ink needs receptive materials such as sticker paper and cardstock; one reviewer’s attempt to print on a painted model part failed. Turn air assist off while printing and back on for cutting.

## What reviewers complain about

- **Ink costs.** Each 40 ml cartridge includes the print head, can’t be refilled and costs $99. There is no ink-level indicator, and running out of one colour finishes the whole cartridge (MakerHacks).
- **No LightBurn.** You use xTool Studio, which is free and good, but power users lose their favourite tool.
- **Base plate.** It is a flat metal tray that scars with cutting; there was no official honeycomb or riser at review time, and Z height is limited.
- **The 10W laser** cuts 3 mm black acrylic and 8 mm basswood (xTool’s figures). For thicker work, pay for the 20W.

## Who should not buy it

- Anyone running a production business: look at the [xTool S1](/en/review/xtool-s1/) or [P2S](/en/review/xtool-p2s/).
- Anyone who wants to cut vinyl with a blade: the M2 dropped the blade.

## vs rivals

- **vs [xTool S1](/en/review/xtool-s1/) ($1,448 for 40W):** bigger, faster and more powerful, but no cameras or printing. See [S1 vs M2](/en/compare/xtool-s1-vs-xtool-m2/).
- **vs [Creality Falcon A1](/en/review/creality-falcon-a1/) ($549):** an enclosed diode without printing.

## Final thoughts

The M2 does something no other laser at this price does: print in colour and cut out the result. Budget for ink, and it is a superb craft machine.

## Sources

- [Tom’s Hardware: xTool M2 review](https://www.tomshardware.com/maker-stem/xtool-m2-color-craft-laser-and-engraver-review) (Editor’s Choice, August 2026)
- [MakerHacks: xTool M2 review](https://www.makerhacks.com/xtool-m2-colour-craft-review/)
- [Geekspin: xTool M2 review](https://geekspin.co/xtool-m2-review/)
- [3DWithUs: xTool M2 review](https://3dwithus.com/xtool-m2-review-laser-cutting-engraving-inkjet-printing)
- [xTool store: M2](https://www.xtool.com/products/xtool-m2-color-craft-laser-cutter-engraver) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-f2',
      name: 'xTool F2',
      brand: 'xTool',
      model: 'F2',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#263238',
      released: 2025,
      price_usd: 1299,
      image_url: cdn('mk-f2chanpinye_us_pc_f2_2488-2704.webp?v=1762229455'),
      gallery: [cdn('mk-a-f2chanpinye_us_pc_image-1_7502-2724.webp?v=1787021700'), cdn('mk-f2chanpinye_us_pc_image-2_2488-2338_092c523f-c983-4eb7-8bfd-fd14d0dc00ed.webp?v=1769139180')],
      affiliate_url: xt('xtool-f2-5w-ir-15w-diode-portable-dual-laser-engraver'),
      affiliate_label: LABEL,
      title: 'xTool F2 review: the portable dual-laser engraver for craft fairs',
      summary: 'A 15W diode and 5W IR galvo engraver you can carry, for $1,299. Make: called it the new king of portable lasers; it engraves fast but cuts only thin stock.',
      verdict: 'The F2 is a shoebox-sized galvo engraver with two lasers: a 15W diode for wood and leather and a 5W infrared laser for metal and plastic. Make: tested it side by side with the F1 and found the same quality, just faster, and called it the new king of portable lasers. The Gadgeteer engraved a wooden keychain in about a minute and dog tags in a single pass. It is an engraver first: cutting tops out at thin plywood, and F1 owners don’t need to upgrade.',
      best_for: 'Sellers who personalise gifts at markets, events or customers’ premises',
      pros: [
        'Portable: about 4.6 kg with a carry handle',
        '15W diode plus 5W IR covers wood, leather, metal and plastic',
        'Up to 6,000 mm/s galvo engraving; about 50% faster than the F1',
        '50MP camera for live preview and placement',
        'Works with all F1 accessories',
      ],
      cons: [
        'Small engraving field without the slide extension',
        'Cutting is limited: 1.5 mm plywood at 15 mm/s (The Gadgeteer)',
        'IR laser is not fibre-fast or fibre-deep on metal (Make:)',
        'Smoke can escape with the cover up',
        'Not worth upgrading from an F1 (Make:)',
      ],
      specs: [
        { label: 'Lasers', value: '15W blue diode + 5W 1064 nm IR' },
        { label: 'Type', value: 'Galvo, portable, enclosed cover' },
        { label: 'Max speed', value: '6,000 mm/s' },
        { label: 'Camera', value: '50MP' },
        { label: 'Weight', value: 'About 4.6 kg' },
        { label: 'Size', value: '175 × 237 × 334 mm (The Gadgeteer)' },
        { label: 'Price', value: '$1,299; $1,449 with Air Purifier Go; $1,499 with slide extension, 10 Nov 2026' },
      ],
      scores: { performance: 8.0, quality: 8.6, ease: 8.6, value: 7.8 },
      body: `## What is it?

The F2 is the successor to xTool’s F1, a compact **galvo** laser: instead of moving the laser head on a gantry, two fast mirrors steer the beam. That makes it very quick at engraving small items, and small enough to carry to a craft fair. The F2 keeps the F1’s size and boosts both lasers: the blue diode goes from 10W to 15W and the infrared laser from 2W to 5W.

On 10 November 2026 it is **$1,299** on its own, $1,449 with the Air Purifier Go and $1,499 with the slide extension.

## What reviewers found

- **Make:** (Matt Stultz, Vol. 97) ran the F1 and F2 side by side: the quality was great on both, and the F2 simply finished faster. He called it the new king of portable lasers for craft fairs and on-site work, but said F1 owners needn’t rush to upgrade.
- **The Gadgeteer** (Mike Dixon) engraved a solid-wood keychain in 1 min 3 s, marked a pair of headphones in 3 seconds and engraved a metal dog tag in one pass at 700 mm/s. Earrings cut out of thin stock in 25 seconds each, and 1.5 mm plywood cut cleanly at 15 mm/s and full power.

## Engraving vs cutting

Galvo lasers are engravers first. The F2 cuts thin wood, card and leather, and xTool lists thicker cuts with many passes, but anyone who needs to cut sheets regularly should buy a gantry laser like the [xTool S1](/en/review/xtool-s1/). The 5W IR laser is the F2’s secret weapon for jewellery and dog tags, though Make: notes it is still not a fibre laser in speed or depth.

## What reviewers complain about

- **Small field.** The slide extension helps with longer items; The Gadgeteer wanted a locating hold-down to make it easier to align.
- **Smoke.** With the cover up for larger items, The Gadgeteer wasn’t sure how much smoke escaped. Use the purifier or vent it.
- **Upgrade value.** Make: says the extra power isn’t worth replacing an F1.

## Who should not buy it

- Anyone who mainly cuts: get a gantry laser.
- Anyone doing deep metal engraving: the [F1 Ultra](/en/review/xtool-f1-ultra/) has a 20W fibre laser.

## vs rivals

- **vs [xTool F1 Ultra](/en/review/xtool-f1-ultra/) ($2,549):** 20W fibre plus 20W diode, a 220 mm field and a conveyor option, but not portable. See [F2 vs F1 Ultra](/en/compare/xtool-f2-vs-xtool-f1-ultra/).
- **vs [LaserPecker LP5](/en/review/laserpecker-lp5/) ($2,429):** handheld-style 20W fibre for metal.
- See also our [best portable laser engravers](/en/best/best-portable-laser-engravers/).

## Final thoughts

For personalising products in front of customers, the F2 is the one to beat. Just know it is an engraver that can cut a little, not a cutter.

## Sources

- [Make: xTool F2 review](https://makezine.com/article/digital-fabrication/laser-cutting-digital-fabrication/review-xtool-f2-laser-engraver/) (Matt Stultz, Vol. 97)
- [The Gadgeteer: xTool F2 review](https://the-gadgeteer.com/2025/12/26/xtool-f2-portable-laser-engraver-review-so-much-power-in-such-a-small-package/)
- [xTool store: F2](https://www.xtool.com/products/xtool-f2-5w-ir-15w-diode-portable-dual-laser-engraver) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-f1-ultra',
      name: 'xTool F1 Ultra',
      brand: 'xTool',
      model: 'F1 Ultra',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#263238',
      released: 2024,
      price_usd: 2549,
      image_url: cdn('mk-baidituyingyong_au_pc_en-f1ultra-whitebackground_5144-593.webp?v=1747646544'),
      gallery: [cdn('f1-ultra-vs-other-fiber.jpg?v=1765259857'), cdn('483c018d921866a03fe48c2f6dc3db9b.jpg?v=1769139122')],
      affiliate_url: xt('xtool-f1-ultra-20w-fiber-diode-dual-laser-engraver'),
      affiliate_label: LABEL,
      title: 'xTool F1 Ultra review: 20W fibre and 20W diode in one enclosed engraver',
      summary: 'A dual-laser galvo engraver with a 20W fibre and 20W diode, camera and conveyor option, now $2,549. Fast on metal; alignment and batch software have rough edges.',
      verdict: 'The F1 Ultra pairs a 20W fibre laser for metal with a 20W diode for wood, leather and acrylic, inside an enclosed galvo machine with a camera and a 220 × 220 mm field. The Gadgeteer called it his favourite engraving laser and engraved a business card in 30 seconds that took 4.5 minutes on an S1. Make: liked the power but found laser alignment fiddly and missed the F1’s removable base. At $2,549 it is a strong small-business engraver.',
      best_for: 'Small businesses engraving metal and wood products in batches',
      pros: [
        '20W fibre plus 20W diode in one machine',
        'Business card engraved in 30 s vs 4.5 min on an S1 (The Gadgeteer)',
        '220 × 220 mm field; 220 × 500 mm with conveyor',
        'Built-in camera, screen, foot pedal and AI auto-alignment',
        'Now $2,549 (was $2,999)',
      ],
      cons: [
        'Laser alignment uses a hard-to-reach screw (Make:)',
        'Solid base plate makes jigs harder than on the F1 (Make:)',
        'Sliding cover doesn’t always align when closed (The Gadgeteer)',
        'Conveyor batch mode failed on some materials (The Gadgeteer)',
        'Deep metal work is slow: a brass coin took about 4–5 hours',
      ],
      specs: [
        { label: 'Lasers', value: '20W 1064 nm fibre + 20W 455 nm blue diode' },
        { label: 'Type', value: 'Galvo, enclosed' },
        { label: 'Work area', value: '220 × 220 mm; 220 × 500 mm with conveyor' },
        { label: 'Max speed', value: '10,000 mm/s' },
        { label: 'Extras', value: 'Camera, touchscreen, button and foot pedal' },
        { label: 'Weight', value: '14.7 kg' },
        { label: 'Price', value: '$2,549 standalone (was $2,999); $2,999 with conveyor, 10 Nov 2026' },
      ],
      scores: { performance: 8.6, quality: 8.8, ease: 8.0, value: 8.0 },
      body: `## What is it?

The F1 Ultra is a bigger, more powerful cousin of xTool’s portable F1. It is a galvo laser with two sources: a **20W fibre laser** that marks, engraves and even cuts thin metal, and a **20W blue diode** for wood, leather and opaque acrylic. A 220 × 220 mm field, built-in camera and screen make it a bench machine rather than a portable one.

On 10 November 2026 it is **$2,549** standalone (was $2,999), $2,999 with the conveyor.

## What reviewers found

- **The Gadgeteer** (Mike Dixon) called it his favourite laser for engraving. A business card took **30 seconds** against 4.5 minutes on the S1; a keychain took 38 seconds; metal earrings were cut and engraved in 13 seconds each. A slate coaster engraved 3.7 mm deep took about 2.5 hours, and a solid brass coin about four hours.
- **Make:** (Matt Stultz, Vol. 93) found the added power well worth the bench space, praised the camera and AI auto-alignment of designs across scattered objects, and liked the new conveyor, button and foot pedal.

## Fibre or diode?

The Gadgeteer’s stainless dog-tag test shows why two lasers help: the diode kept the glossy finish while the fibre produced an etched look. Neither is “best”; they suit different jobs.

## What reviewers complain about

- **Alignment.** Aligning the two lasers at setup needs a screw that Make: could hardly see.
- **No removable base**, unlike the F1, which makes jigs harder.
- **The sliding cover** was not always aligned when closed, and **conveyor batch software** failed on some coloured cards and foam (The Gadgeteer).
- **Reliability.** One owner on a retailer listing reported laser failures within about a month. That is a single anecdote, not a pattern we could confirm.

## Who should not buy it

- Anyone who needs colour on metal or deeper metal engraving: the [F2 Ultra](/en/review/xtool-f2-ultra/) has a 60W MOPA laser.
- Anyone who wants to cut sheet wood: a gantry laser like the [S1](/en/review/xtool-s1/) is better.

## vs rivals

- **vs [xTool F2 Ultra](/en/review/xtool-f2-ultra/) ($5,299):** a coin engraving that took nearly five hours here took about 1 h 12 min on the F2 Ultra. See [F2 Ultra vs F1 Ultra](/en/compare/xtool-f2-ultra-vs-xtool-f1-ultra/).
- **vs [LaserPecker LP5](/en/review/laserpecker-lp5/) ($2,429):** similar fibre power, no diode. See [F1 Ultra vs LP5](/en/compare/xtool-f1-ultra-vs-laserpecker-lp5/).
- **vs [OMTech Galvo 30W Split](/en/review/omtech-galvo-30w-split/) ($2,199.99):** more fibre power, open design, LightBurn-first workflow.

## Final thoughts

Two lasers, a camera and a conveyor option make the F1 Ultra a very capable engraving business in a box. At its new price it is the sweet spot in xTool’s galvo range.

## Sources

- [The Gadgeteer: xTool F1 Ultra review](https://the-gadgeteer.com/2024/07/08/xtool-f1-ultra-laser-engraver-review-the-worlds-first-20w-fiber-and-20w-diode-galvo-dual-laser-twice-the-fun/)
- [Make: xTool F1 Ultra review](https://makezine.com/article/digital-fabrication/laser-cutting-digital-fabrication/review-xtool-f1-ultra-laser-cutter) (Vol. 93)
- [Creative Bloq: xTool F1 Ultra review](https://www.creativebloq.com/tech/gadgets/xtool-f1-ultra-review-a-high-end-laser-cutter-and-engraver-for-production-use)
- [xTool store: F1 Ultra](https://www.xtool.com/products/xtool-f1-ultra-20w-fiber-diode-dual-laser-engraver) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-p2s',
      name: 'xTool P2S 55W',
      brand: 'xTool',
      model: 'P2S',
      category: 'laser-engravers',
      art_type: 'laser-engraver',
      tone: '#263238',
      released: 2024,
      price_usd: 2999,
      featured: true,
      image_url: cdn('mk-baidituyingyong_us_pc_p-black-standalone_8871-5776.webp?v=1790145559'),
      gallery: [cdn('mk-p2-p2s-v30_us_pc_zhutuduibi_9359-6635.webp?v=1765261068'), cdn('a6c45de613053afb5c6825bb741f1389_ff65b0ec-536b-46fd-a1b7-aaeac41cd0f4.jpg?v=1765261068')],
      affiliate_url: xt('xtool-p2-55w-co2-laser-cutter'),
      affiliate_label: LABEL,
      title: 'xTool P2S review: a 55W desktop CO2 laser, now $2,999',
      summary: 'A 55W CO2 laser with dual cameras, a 600 × 305 mm bed and pass-through, now $2,999. Reviewers call it a dream machine for side businesses.',
      verdict: 'The P2S is a desktop CO2 laser that cuts clear acrylic and thick wood that diode lasers can’t, with dual cameras, autofocus and a pass-through slot for long material. The Gadgeteer called it a dream machine for a side business that simply works, and Make: called it a well thought-out evolution of the desktop laser. It weighs 45 kg, needs mirror cleaning every few hours of use, and the riser is flimsy. At $2,999 (was $4,499) it is excellent value.',
      best_for: 'Side businesses and makerspaces that cut acrylic and wood every week',
      pros: [
        '55W CO2: cuts clear acrylic and thick wood',
        'Now $2,999 (was $4,499; reviewed at $4,199–$4,999)',
        '600 × 305 mm bed plus pass-through for material up to 3 m long',
        'Dual 16MP cameras and autofocus for easy placement',
        'Works with xTool software and LightBurn',
      ],
      cons: [
        'Heavy at 45 kg; needs a sturdy table',
        'Mirrors need cleaning every 2–4 hours of use and alignment at setup',
        'Wide-angle camera image is poor (The Gadgeteer)',
        'Riser base feels flimsy during setup (Make:)',
        'Must be vented or filtered; filters cost $699 and up',
      ],
      specs: [
        { label: 'Laser', value: '55W CO2 glass tube' },
        { label: 'Work area', value: '600 × 305 mm (23.6 × 12 in); pass-through up to 3,000 mm long' },
        { label: 'Max speed', value: '600 mm/s' },
        { label: 'Cameras', value: 'Dual 16MP (wide and close)' },
        { label: 'Focus', value: 'Autofocus' },
        { label: 'Software', value: 'xTool Creative Space / Studio, LightBurn' },
        { label: 'Weight', value: '45 kg' },
        { label: 'Price', value: '$2,999 standalone (was $4,499), 10 Nov 2026' },
      ],
      scores: { performance: 9.0, quality: 8.8, ease: 8.2, value: 8.8 },
      body: `## What is it?

The P2S is xTool’s desktop **CO2 laser**. CO2 light is absorbed by clear acrylic, glass and thick wood in ways a blue diode can’t match, so the P2S cuts materials that diode machines can’t. It is enclosed, has two cameras for placing designs, autofocuses, and has slots front and back so you can feed long boards through.

On 10 November 2026 the standalone P2S is **$2,999**, down from $4,499. Reviewers paid much more: The Gadgeteer $4,199 and Make: $4,999.

## What reviewers found

- **The Gadgeteer** (Michael Strange, January 2025) called it a dream machine for a side business that simply works. A material test array took under 2 minutes; nine personalised names in batch mode took 13 minutes; a 3D engraving on a curved glass took about 8 minutes. With the conveyor it scored a 36-inch name on fibreboard.
- **Make:** (Matt Stultz, Vol. 92) found the 55W tube quickly cut through any reasonable material and called the P2 a well thought-out evolution of the desktop laser cutter.
- **Hey Let’s Make Stuff** highlighted the colours of acrylic it can cut that a diode can’t.

## Ventilation

Any CO2 laser makes smoke and smells. The Gadgeteer ran xTool’s AP2 purifier in a roughly 10 × 10 ft room and saw no noticeable smoke, just a slight odour cutting acrylic, and found the IF2 inline fan venting through a window very powerful. Read our [laser safety setup guide](/en/blog/laser-engraver-safety-setup/) before the first cut.

## What reviewers complain about

- **Maintenance.** xTool recommends cleaning the mirrors every 2–4 hours of use, and The Gadgeteer had to realign a mirror at setup.
- **The wide camera** gives a poor image; the close camera is the one to trust.
- **The riser** is flimsy during setup, though fine afterwards (Make:).
- **Weight.** At 45 kg, plan where it lives before it arrives.

## Who should not buy it

- Anyone engraving mainly metal: a fibre laser like the [F1 Ultra](/en/review/xtool-f1-ultra/) is far better.
- Anyone without a way to vent or filter fumes.
- Hobbyists who laser once a month: the [S1](/en/review/xtool-s1/) is enough.

## vs rivals

- **vs [OMTech Polar Lite 55W](/en/review/omtech-polar-lite-55w/) ($2,199.99):** same tube power for less, but fewer automatic features. See [P2S vs Polar Lite](/en/compare/xtool-p2s-vs-omtech-polar-lite-55w/).
- **vs [xTool S1](/en/review/xtool-s1/) ($1,448):** a safer, cheaper diode that can’t cut clear acrylic.
- **vs Glowforge Pro:** the best-known rival, with subscription software; we haven’t reviewed it.

## Final thoughts

At its new price the P2S is one of the best desktop CO2 lasers you can buy. Budget for ventilation and a little mirror cleaning, and it will run a small business.

## Sources

- [The Gadgeteer: xTool P2S review](https://the-gadgeteer.com/2025/01/05/xtool-p2s-55w-desktop-co2-laser-cutter-review-a-laser-cutting-and-engraving-dream-machine/)
- [Make: xTool P2S review](https://makezine.com/article/digital-fabrication/laser-cutting-digital-fabrication/review-xtool-p2-laser-cutter) (Vol. 92)
- [Hey Let’s Make Stuff: xTool P2S review](https://heyletsmakestuff.com/xtool-p2s-review/)
- [xTool store: P2S](https://www.xtool.com/products/xtool-p2-55w-co2-laser-cutter) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-f2-ultra',
      name: 'xTool F2 Ultra',
      brand: 'xTool',
      model: 'F2 Ultra',
      category: 'laser-engravers',
      art_type: 'laser-module',
      tone: '#263238',
      released: 2025,
      price_usd: 5299,
      image_url: cdn('mk-f2ultra_us_pc_f2ultra_595-25304.webp?v=1751441238'),
      gallery: [cdn('mk-a-f2ultra_us_mo_image-10_6554-252.webp?v=1787021751'), cdn('image_-8_1_f4c1d870-c2f5-407a-b6be-22f9704109df.jpg?v=1751962031')],
      affiliate_url: xt('xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver'),
      affiliate_label: LABEL,
      title: 'xTool F2 Ultra review: 60W MOPA colour marking and 2 mm metal cutting',
      summary: 'A 60W MOPA fibre plus 40W diode galvo laser that colour-marks steel and cuts 2 mm metal, for $5,299. Reviewers love it; the price and 220 mm field are the limits.',
      verdict: 'The F2 Ultra is xTool’s top desktop engraver: a 60W MOPA fibre laser that can colour stainless steel and titanium and cut up to 2 mm of metal, plus a 40W diode for wood. Make: called it a hard laser to beat unless you need a bigger area, and The Gadgeteer engraved a coin 1.6 mm deep in 1 h 12 min, against nearly five hours on the F1 Ultra. It costs $5,299 (or $4,299 MOPA-only), and the 220 × 220 mm field is small.',
      best_for: 'Businesses selling colour-marked metal, jewellery and deep-engraved products',
      pros: [
        '60W MOPA: colour marking on stainless and titanium, deep engraving',
        'Cuts up to 2 mm of steel, aluminium, brass and titanium (Make:)',
        '40W diode cuts plywood up to 23 mm thick (Make:)',
        'Coin engraved 1.6 mm deep in 1 h 12 min vs ~5 h on F1 Ultra (The Gadgeteer)',
        'Dual 48MP cameras; enclosed design',
      ],
      cons: [
        '$5,299 dual-laser; $4,299 MOPA-only',
        'Small 220 × 220 mm field (conveyor helps)',
        'Only xTool’s software; Windows and macOS',
        'Wider beam than xTool’s UV model for fine lines (FauxHammer)',
        'Heavy at 21.6 kg',
      ],
      specs: [
        { label: 'Lasers', value: '60W MOPA fibre (1064 nm) + 40W blue diode' },
        { label: 'Type', value: 'Galvo, enclosed' },
        { label: 'Work area', value: '220 × 220 mm; 220 × 500 mm with conveyor' },
        { label: 'Max speed', value: '15,000 mm/s' },
        { label: 'Cameras', value: 'Dual 48MP' },
        { label: 'Weight', value: '21.6 kg' },
        { label: 'Price', value: '$5,299 dual laser; $4,299 MOPA only, 10 Nov 2026' },
      ],
      scores: { performance: 9.4, quality: 9.0, ease: 8.2, value: 7.6 },
      body: `## What is it?

The F2 Ultra is the most powerful machine in xTool’s galvo line. It pairs a **60W MOPA fibre laser** with a **40W blue diode**. MOPA (master oscillator power amplifier) lasers can vary pulse length as well as power, which lets them grow a thin oxide layer on stainless steel and titanium that shows up as colour. The same control gives deeper engraving and the power to cut thin metal.

On 10 November 2026 the dual-laser version is **$5,299**, and a MOPA-only version is $4,299. Make: tested it at $4,699; The Gadgeteer at $6,499.

## What reviewers found

- **Make:** (Matt Stultz, Vol. 96) says it cuts up to **2 mm** of steel, aluminium, brass and titanium, and its diode cuts plywood up to 23 mm thick. Colour marking doesn’t give every colour of the rainbow, but plenty for projects. His only real limitation was the 220 × 220 mm field.
- **The Gadgeteer** (Mike Dixon) engraved a coin **1.6 mm deep in about 1 h 12 min**, a job that took nearly five hours on the F1 Ultra. A metal business card took 26 seconds; a 10 mm square cut through an aluminium card in under 2 seconds. He couldn’t think of anything he disliked.
- **FauxHammer** and **MakerHacks** praised its colour marking control; FauxHammer noted its beam is wider than xTool’s UV laser, so the finest line work suits the UV model better.

## What reviewers complain about

- **Price.** This is a business tool.
- **Field size.** 220 × 220 mm, extendable with the conveyor.
- **Software.** It works only with xTool’s own software, which reviewers like, on Windows and macOS.

## Who should not buy it

- Hobbyists: the [F1 Ultra](/en/review/xtool-f1-ultra/) does most of the same jobs for half the price.
- Anyone who only works with wood and acrylic: the [P2S](/en/review/xtool-p2s/) CO2 laser is better and cheaper.

## vs rivals

- **vs [xTool F1 Ultra](/en/review/xtool-f1-ultra/) ($2,549):** 20W fibre, no colour marking, much slower deep engraving. See [F2 Ultra vs F1 Ultra](/en/compare/xtool-f2-ultra-vs-xtool-f1-ultra/).
- **vs [LaserPecker LP5](/en/review/laserpecker-lp5/) ($2,429):** a cheaper fibre engraver without MOPA colour.
- **vs [OMTech Galvo 30W Split](/en/review/omtech-galvo-30w-split/) ($2,199.99):** budget fibre, no diode, fewer conveniences.

## Final thoughts

If coloured metal, deep engraving or thin metal cutting is what your customers pay for, the F2 Ultra earns its price quickly. If not, it is more laser than you need.

## Sources

- [Make: xTool F2 Ultra review](https://makezine.com/article/digital-fabrication/laser-cutting-digital-fabrication/review-xtool-f2-ultra-laser-engraver) (Matt Stultz, Vol. 96)
- [The Gadgeteer: xTool F2 Ultra review](https://www.the-gadgeteer.com/2025/10/20/xtool-f2-ultra-laser-engraver-review-even-better-than-ever/)
- [FauxHammer: xTool F2 Ultra review](https://www.fauxhammer.com/?p=36783)
- [MakerHacks: xTool F2 Ultra review](https://www.makerhacks.com/xtool-f2-ultra-review/)
- [xTool store: F2 Ultra](https://www.xtool.com/products/xtool-f2-ultra-60w-mopa-40w-diode-dual-laser-engraver) (price, 10 Nov 2026)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'xtool-s1-vs-xtool-m2',
      title: 'xTool S1 vs xTool M2: which enclosed xTool laser?',
      products: ['xtool-s1', 'xtool-m2'],
      intro: 'Both are enclosed diode lasers. The S1 is a bigger, more powerful cutter; the M2 is a cheaper craft machine with cameras and a CMYK print head.',
      verdict: 'Buy the S1 (from $1,299) for cutting thick wood and batch work on a 498 × 319 mm bed. Buy the M2 (from $499) for printed stickers, cards and gifts, and camera-based placement.',
      updated_at: DATE,
    },
    {
      slug: 'xtool-p2s-vs-omtech-polar-lite-55w',
      title: 'xTool P2S vs OMTech Polar Lite 55W: desktop CO2 lasers compared',
      products: ['xtool-p2s', 'omtech-polar-lite-55w'],
      intro: 'Two 55W desktop CO2 lasers. The P2S adds dual cameras, autofocus and pass-through; the Polar Lite costs less.',
      verdict: 'Choose the P2S ($2,999) for the easiest workflow, camera placement and long-board pass-through. Choose the Polar Lite ($2,199.99) to save $800 if you are happy with a more manual setup.',
      updated_at: DATE,
    },
    {
      slug: 'xtool-f2-ultra-vs-xtool-f1-ultra',
      title: 'xTool F2 Ultra vs F1 Ultra: is 60W MOPA worth double?',
      products: ['xtool-f2-ultra', 'xtool-f1-ultra'],
      intro: 'Both are enclosed dual-laser galvo engravers with a 220 mm field. The F2 Ultra has a 60W MOPA fibre and 40W diode; the F1 Ultra has 20W of each.',
      verdict: 'Pick the F2 Ultra ($5,299) if you sell colour-marked metal or deep engraving: a coin that took nearly five hours on the F1 Ultra took about 1 h 12 min. Otherwise the F1 Ultra ($2,549) does most jobs for half the price.',
      updated_at: DATE,
    },
    {
      slug: 'xtool-f2-vs-xtool-f1-ultra',
      title: 'xTool F2 vs F1 Ultra: portable or powerful?',
      products: ['xtool-f2', 'xtool-f1-ultra'],
      intro: 'Two xTool galvo engravers. The F2 is portable with a 15W diode and 5W IR; the F1 Ultra is a bench machine with 20W fibre and 20W diode.',
      verdict: 'Choose the F2 ($1,299) to engrave at markets and events. Choose the F1 Ultra ($2,549) for faster, deeper metal work and batch production with a conveyor.',
      updated_at: DATE,
    },
    {
      slug: 'xtool-f1-ultra-vs-laserpecker-lp5',
      title: 'xTool F1 Ultra vs LaserPecker LP5: 20W fibre engravers',
      products: ['xtool-f1-ultra', 'laserpecker-lp5'],
      intro: 'Two compact 20W fibre engravers for metal at a similar price.',
      verdict: 'Choose the F1 Ultra ($2,549) for a second 20W diode laser, an enclosed design, a camera and the conveyor option. Choose the LP5 ($2,429) for a lighter, more portable fibre engraver.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-xtool-laser-engravers',
      title: 'The best xTool laser engravers and cutters',
      category: 'laser-engravers',
      intro: 'xTool’s current lasers ranked by job, using independent reviews (Tom’s Hardware, Make:, The Gadgeteer, MakerHacks) and official prices on 10 November 2026.',
      items: [
        { slug: 'xtool-p2s', award: 'Best overall', note: '55W CO2 with cameras and pass-through, now $2,999.' },
        { slug: 'xtool-s1', award: 'Best enclosed diode', note: 'Class 1 safety and a 498 × 319 mm bed. From $1,299.' },
        { slug: 'xtool-m2', award: 'Best for crafters', note: 'Print in colour, then laser-cut. From $499.' },
        { slug: 'xtool-f1-ultra', award: 'Best for metal and wood', note: '20W fibre plus 20W diode for $2,549.' },
        { slug: 'xtool-f2', award: 'Best portable', note: 'Engrave at markets. $1,299.' },
        { slug: 'xtool-f2-ultra', award: 'Best for colour on metal', note: '60W MOPA, cuts 2 mm steel. $5,299.' },
      ],
      updated_at: DATE,
    },
  ],
};
