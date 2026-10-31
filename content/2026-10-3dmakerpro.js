// 3DMakerpro batch: Moose, Moose Lite, Seal Lite, Toucan. Researched 31 October 2026.
// Prices and images: official store (store.3dmakerpro.com/products.json), 31 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
// The full Seal is already covered as nova3d-seal-3d-scanner (NOVA3D resells it).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const makerpro = (handle) => awin(48247, `https://store.3dmakerpro.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0563/9290/8869/files/${file}`;
const DATE = '2026-10-31 18:00:00';

export default {
  products: [
    {
      slug: '3dmakerpro-moose',
      name: '3DMakerpro Moose',
      brand: '3DMakerpro',
      model: 'Moose',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#5d4037',
      released: 2024,
      price_usd: 489,
      featured: true,
      image_url: cdn('Moose_627f8cd8-9952-4c17-b627-52bf65bdb019.webp?v=1775201860'),
      gallery: [
        cdn('1000x1000-1_-2.png?v=1775201860'),
        cdn('1000x1000-1_-3.png?v=1775201860'),
      ],
      affiliate_url: makerpro('moose'),
      affiliate_label: 'Check price at 3DMakerpro',
      title: '3DMakerpro Moose review: colour scans with real accuracy for $489',
      summary: 'A 280 g colour 3D scanner with 0.03 mm claimed accuracy. Testers measured parts within 0.04–0.13 mm of calipers, but the field of view is small and JMStudio takes practice.',
      verdict: 'The Moose makes detailed, accurate colour meshes of objects from shoe size to helmet size, and two independent testers matched its measurements to calipers within a fraction of a millimetre. It is slower than rivals at about 10 fps, its field of view is small, and the software is not intuitive. At the current $489 it is good value for makers who want colour texture; buy the Moose Lite if you only need geometry.',
      best_for: 'Makers and artists who want accurate, full-colour scans of small to medium objects',
      pros: [
        'Claimed 0.03 mm accuracy, and testers measured within 0.04–0.13 mm of calipers',
        'Full-colour (24-bit) texture, unlike the Moose Lite and Seal Lite',
        'Captured sub-millimetre engravings and hairline cracks in an antler',
        'No markers needed: AI visual tracking follows the object’s own features',
        'Compact and light at 280 g',
      ],
      cons: [
        'About 10 fps, roughly half the speed of similarly priced rivals',
        'Small field of view and narrow working distance (about 250–350 mm in practice)',
        'No start/stop button on the scanner, separate power supply, short USB-C cable',
        'JMStudio is powerful but not intuitive for beginners',
        'No marker mode for featureless objects',
      ],
      specs: [
        { label: 'Technology', value: 'Structured light, AI visual tracking' },
        { label: 'Accuracy', value: 'Up to 0.03 mm (single frame)' },
        { label: 'Resolution', value: '0.07 mm' },
        { label: 'Speed', value: 'About 10 fps' },
        { label: 'Object size', value: '15–1,500 mm (claimed)' },
        { label: 'Colour', value: 'Full-colour texture' },
        { label: 'Size and weight', value: '120 × 60 × 35 mm, 280 g' },
        { label: 'Software', value: 'JMStudio (Windows, macOS)' },
        { label: 'Exports', value: 'OBJ, PLY, STL, ASC' },
        { label: 'Price', value: 'Standard $489 · Premium $531 · Luxury $699' },
      ],
      scores: { performance: 8.0, quality: 8.3, ease: 7.0, value: 8.6 },
      body: `## What is it?

The Moose is 3DMakerpro’s mid-size structured-light scanner. It sits between the tiny Seal (for objects that fit in a hand) and the standalone Toucan. It is made for objects from about a computer mouse to a motorbike helmet. It follows the object’s own shape and texture with “AI visual tracking”, so you don’t need to stick markers on.

It launched at $699. On 31 October 2026 the official store sells the Standard kit for **$489**, which changes how it compares with rivals.

## Technical overview

| | |
|---|---|
| Accuracy | up to 0.03 mm (single frame) |
| Resolution | 0.07 mm |
| Speed | about 10 fps |
| Object size | 15–1,500 mm (claimed) |
| Texture | full colour |
| Weight | 280 g |
| Software | JMStudio, Windows and macOS |

The accuracy figure is for a single frame. Whole-model accuracy over a larger object is always lower, which is true of every scanner in this price range.

## Setting up

The scanner connects to a computer by USB-C. It also needs a separate power supply. The Technology Man found the bundled USB-C cable short and missed a start/stop button on the scanner itself, so every scan begins and ends at the keyboard. On a Mac you need a USB adapter that is not in the box.

JMStudio installs on Windows and macOS. Reviewers ran it on an M3 Pro MacBook Pro and a high-end desktop without complaint, but a dense colour mesh still benefits from a strong GPU.

## Accuracy: what testers measured

This is where the Moose earns its price:

- **The Technology Man** scanned the back of a Milwaukee drill driver. JMStudio measured 60.13 mm; calipers read 60.00 mm. A scan of a DJI Neo drone was accurate to within about 0.5 mm overall.
- **Lidar News** scanned a Raspberry Pi and found a 0.04 mm difference from calipers, while noting the measurement may not have been perfectly square. The same tester scanned a deer antler and the mesh showed small cracks that are hard to see by eye.

Neither test is lab metrology, but both suggest the Moose is accurate enough to model replacement parts and print fitting accessories.

## Scanning in practice

The weak points are speed and field of view. At just over 10 fps, The Technology Man calls it about half the speed of similarly priced scanners. The capture window is small, so large objects take many passes. Lidar News puts the comfortable working distance at about 250–350 mm, and JMStudio shows a distance graph you have to watch while scanning. The claimed 1.5 m maximum object size is optimistic in practice.

Like most structured-light scanners, it struggles with reflective surfaces, deep recesses and high contrast. On the Raspberry Pi, detail softened around the shiny metal ports. JMStudio also tends to close through-holes automatically, so check holes on mechanical parts before exporting.

There is no marker mode, so smooth featureless objects (a plain box, a car door panel) are harder than on rivals like the Creality Ferret Pro.

## Software

JMStudio is more capable than it first looks. It can re-orient a model on three points, measure, transform and repair gaps to make a watertight mesh for printing. It exports OBJ, PLY, STL and ASC. Both The Technology Man and Lidar News say it takes practice. Plan an evening to learn it before your first important scan.

## Who should not buy it

- Anyone scanning cars, furniture or people regularly: get a faster scanner with a wider view, such as the EINSTAR 2.
- Beginners who want one-button simplicity.
- Anyone who only needs geometry for printing: the Moose Lite does that for half the price.

## vs rivals

- **vs Moose Lite ($239):** the Lite uses infrared light, has grayscale texture only and slightly lower accuracy (0.05 mm). Buy the full Moose for colour and finer detail. See [Moose vs Moose Lite](/en/compare/3dmakerpro-moose-vs-3dmakerpro-moose-lite/).
- **vs Revopoint INSPIRE 2 ($439):** similar price and target. The INSPIRE 2 is lighter and has more mature software. The Moose looked sharper on fine detail in the tests above.
- **vs Creality Ferret Pro:** The Technology Man found the Moose scan “way better”, at a higher price.

## Price and value

At $699 the Moose was a fair buy; at $489 it is a strong one. The Premium ($531) and Luxury ($699) kits add a turntable, tripod and grip. The Technology Man thought the Luxury extras were not worth it, so start with Standard.

## Final thoughts

The Moose is a slow, careful scanner that rewards patience with accurate, detailed colour meshes. If you scan small and medium objects for 3D printing or digital art, it is one of the best-value colour scanners right now.

## Sources

- [The Technology Man: Moose 3D scanner review](https://thetechnologyman.com/moose-3d-scanner-review-accurate-detailed-and-a-bit-frustrating/) (July 2025)
- [Lidar News: 3DMakerPro Moose review](https://lidarnews.com/3dmakerpro-moose-3d-scanner-review/) (scanner supplied free, unpaid review)
- [Creative Bloq: 3DMakerPro Moose review](https://www.creativebloq.com/3d/3dmakerpro-moose-3d-scanner-review-compact-device-with-great-results) (4.25/5)
- [3D Printing Industry: 3DMakerpro Moose review](https://3dprintingindustry.com/news/3dmakerpro-moose-a-high-quality-user-friendly-full-color-3d-scanner-232399/)
- [3DMakerpro official store: Moose](https://store.3dmakerpro.com/products/moose) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: '3dmakerpro-moose-lite',
      name: '3DMakerpro Moose Lite',
      brand: '3DMakerpro',
      model: 'Moose Lite',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#6d4c41',
      released: 2024,
      price_usd: 239,
      image_url: cdn('Moose_Lite_2560x2560_8210c8fa-bd21-4129-aff2-b33acfda806d.png?v=1720517170'),
      gallery: [
        cdn('1000x1000-2-2.png?v=1720518686'),
        cdn('1000x1000-2-3_4fd948eb-e104-455f-a1b7-e10193c6672f.png?v=1720518686'),
      ],
      affiliate_url: makerpro('moose-lite'),
      affiliate_label: 'Check price at 3DMakerpro',
      title: '3DMakerpro Moose Lite review: a $239 scanner for geometry, not colour',
      summary: 'An infrared 3D scanner for objects from 15 mm to 1.5 m with 0.05 mm claimed accuracy, grayscale texture only, and a $239 price. Good geometry for printing; some buyers had connection problems.',
      verdict: 'The Moose Lite is one of the cheapest scanners that still makes useful meshes for 3D printing. Fabbaloo called it extremely good for the price and was surprised it captured a metal drink can. It has no colour texture, accuracy is a step below the full Moose, and a few Best Buy buyers had connection trouble. If you want geometry on a tight budget, it is a sensible first scanner.',
      best_for: 'Beginners who want printable geometry of small and medium objects on a tight budget',
      pros: [
        '$239 on the official store, often less than half its launch price',
        'Claimed 0.05 mm accuracy and 0.10 mm resolution',
        'Wide range: 150–400 mm working distance, 200 × 100 mm capture window',
        'Infrared light is comfortable for scanning faces and copes with some shiny objects',
        'No markers or lengthy calibration needed',
      ],
      cons: [
        'Grayscale texture only; no colour',
        'About 10 fps, slow for large objects',
        'Some Best Buy buyers reported unreliable PC connection or a unit that did not work out of the box',
        'Dark, transparent and very shiny objects still need scanning spray',
        'Dense meshes need a reasonably strong PC (16 GB RAM minimum)',
      ],
      specs: [
        { label: 'Technology', value: 'Near-infrared (NIR) structured light, AI visual tracking' },
        { label: 'Accuracy', value: '0.05 mm' },
        { label: 'Resolution', value: '0.10 mm' },
        { label: 'Speed', value: '10 fps' },
        { label: 'Working distance', value: '150–400 mm' },
        { label: 'Single capture', value: '200 × 100 mm' },
        { label: 'Object size', value: '15–1,500 mm' },
        { label: 'Texture', value: 'Mono (grayscale)' },
        { label: 'Size and weight', value: '115 × 70 × 35 mm, 250 g' },
        { label: 'PC', value: 'Minimum i5 8th gen, 16 GB RAM, MX250 2 GB; recommended RTX 3060' },
        { label: 'Price', value: 'Standard $239 · Premium $275 · Luxury $413' },
      ],
      scores: { performance: 7.2, quality: 7.0, ease: 7.4, value: 8.8 },
      body: `## What is it?

The Moose Lite is the budget version of the 3DMakerpro Moose. It keeps the same idea of a small handheld scanner with AI visual tracking for objects from 15 mm to 1.5 m. It changes the light from visible structured light to near-infrared (NIR), drops colour texture, and lowers the accuracy claim from 0.03 mm to 0.05 mm.

The trade is price. On 31 October 2026 it costs **$239** on the official store, down from a $399 list price.

## Technical overview

| | |
|---|---|
| Light source | near-infrared |
| Accuracy | 0.05 mm |
| Resolution | 0.10 mm |
| Working distance | 150–400 mm |
| Single capture | 200 × 100 mm |
| Speed | 10 fps |
| Texture | grayscale only |
| Weight | 250 g |

Some reseller articles describe it as a blue-light scanner. The official spec sheet lists NIR, and Fabbaloo’s hands-on agrees.

## Setting up

Fabbaloo noted that the Moose Lite needs no special target accessories and no long calibration session, unlike some older budget scanners. You plug it into a computer, open JMStudio and start scanning.

The PC requirements are not trivial for a $239 scanner: 3DMakerpro asks for at least an 8th-gen Core i5, 16 GB of RAM and a 2 GB GPU, and recommends an RTX 3060-class card. On a weak laptop, meshing at 0.1 mm will be slow.

## Scan quality

Fabbaloo’s three-part hands-on is the most thorough independent test we could find. Its main findings:

- Detail resolves down to about 0.1 mm, which the reviewer called remarkable for such an inexpensive scanner.
- A metal drink can scanned better than expected; the reviewer said many other scanners would not have seen it at all.
- It works in turntable mode for small objects and handheld for medium ones.

The wider 150–400 mm working distance and 200 × 100 mm capture window make it more forgiving than the Seal Lite, and better for bigger things like a shoe or a bust.

The texture is grayscale. That doesn’t matter for 3D printing, but it rules the Moose Lite out for colour game assets or AR.

## What owners complain about

The official store shows 4.79/5 from 19 reviews. Best Buy reviews are more mixed: one buyer gave it 1/5 because the connection to the computer kept failing, and others reported a unit that did not work out of the box. Best Buy also flags that at least one review there was written in exchange for promotional consideration. Buy from a seller with an easy return policy, and test the scanner in the first week.

## Who should not buy it

- Anyone who needs colour scans.
- Anyone scanning tiny parts like coins or jewellery: the Seal Lite or a Revopoint MINI 2 resolves finer detail.
- Anyone with an older laptop without a dedicated GPU.

## vs rivals

- **vs Moose ($489):** about twice the price for colour texture, 0.03 mm accuracy and a metal body. See [Moose vs Moose Lite](/en/compare/3dmakerpro-moose-vs-3dmakerpro-moose-lite/).
- **vs Seal Lite ($215):** the Seal Lite uses blue light and resolves smaller detail (0.02 mm claimed accuracy) but its capture window is only 100 × 75 mm. The Moose Lite is better for objects bigger than your hand.
- **vs Revopoint INSPIRE 2 ($439):** the INSPIRE 2 adds colour and more mature software for almost twice the price.

## Price and value

At $239 the Moose Lite is one of the cheapest scanners that still produces meshes good enough to print. The Premium kit ($275) adds a turntable, which is worth it for small objects.

## Final thoughts

The Moose Lite does one job well: it turns real objects into printable grayscale meshes for very little money. Accept the slow speed and no colour, buy from a seller with good returns, and it is a good first scanner.

## Sources

- [Fabbaloo: Hands on with the 3DMakerPro Moose Lite, part 1](https://www.fabbaloo.com/news/hands-on-with-the-3dmakerpro-moose-lite-3d-scanner-part-1) and [part 3](https://www.fabbaloo.com/news/hands-on-with-the-3dmakerpro-moose-lite-3d-scanner-part-3)
- [3Druck: 3DMakerpro Moose Lite put to the test](https://3druck.com/en/reviews/3dmakerpro-moose-lite-test-01137485/)
- [Best Buy: Moose Lite customer reviews](https://www.bestbuy.com/site/reviews/3dmakerpro-moose-lite-handheld-3d-scanner-for-3d-printing-anti-shake-lenses-0-05mm-accuracy-0-1mm-resolution-premium-gray/6607960)
- [3DMakerpro official store: Moose Lite](https://store.3dmakerpro.com/products/moose-lite) (price, specs and store rating)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: '3dmakerpro-seal-lite',
      name: '3DMakerpro Seal Lite',
      brand: '3DMakerpro',
      model: 'Seal Lite',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#455a64',
      released: 2023,
      price_usd: 215,
      image_url: cdn('Seal_Lite_2560x2560_1a6670b2-e8a4-4499-9195-0eeb07f653fc.png?v=1720517175'),
      gallery: [
        cdn('1000x1000-2-1.png?v=1720517761'),
        cdn('1000x1000-2-2_07b6f7e3-5e16-45db-b719-b95be627f5a5.png?v=1720517761'),
      ],
      affiliate_url: makerpro('seal-lite'),
      affiliate_label: 'Check price at 3DMakerpro',
      title: '3DMakerpro Seal Lite review: blue-light detail for $215',
      summary: 'The cheapest blue-light scanner we cover: 0.02 mm claimed accuracy for objects 10–300 mm, grayscale only. Excellent detail on small matte parts; tracking takes practice.',
      verdict: 'The Seal Lite brings blue structured light, the technology behind sharper small-object scans, down to $215. Fabbaloo found its scans excellent but tracking harder than on the full Seal. The capture window is tiny, there is no colour, and dark or shiny parts need spray. For figurines, small brackets and replacement knobs on a budget, it is hard to beat.',
      best_for: 'Hobbyists scanning small matte objects (figurines, knobs, brackets) for 3D printing',
      pros: [
        'Blue structured light for fine detail at $215',
        '0.02 mm claimed accuracy, 0.07 mm resolution',
        'Light at 226 g, easy to use on a turntable',
        'Store rating 4.66/5 from 62 reviews',
        'Same JMStudio software as the rest of the range',
      ],
      cons: [
        'Small 100 × 75 mm capture window; objects over 300 mm are impractical',
        'Grayscale texture only',
        'Tracking is less forgiving than the full Seal; buyers say it takes practice',
        'Dark, shiny or intricate parts may need spray and cleanup before printing',
        'USB 2.0 and a plastic body',
      ],
      specs: [
        { label: 'Technology', value: 'Blue structured light, visual tracking' },
        { label: 'Accuracy', value: '0.02 mm' },
        { label: 'Resolution', value: '0.07 mm' },
        { label: 'Speed', value: '10 fps' },
        { label: 'Working distance', value: '180–280 mm' },
        { label: 'Single capture', value: '100 × 75 mm' },
        { label: 'Object size', value: '10–300 mm' },
        { label: 'Texture', value: 'Mono (grayscale)' },
        { label: 'Size and weight', value: '110 × 60 × 35 mm, 226 g' },
        { label: 'PC', value: 'Minimum i5 8th gen, 16 GB RAM, MX250 2 GB' },
        { label: 'Price', value: '$215 (list $359)' },
      ],
      scores: { performance: 7.4, quality: 7.2, ease: 7.0, value: 9.0 },
      body: `## What is it?

The Seal Lite is the cheaper sibling of the 3DMakerpro Seal, which we reviewed as the [NOVA3D Seal](/en/review/nova3d-seal-3d-scanner/). Both use blue structured light, which makes sharper meshes of small objects than infrared. The Lite drops colour texture, uses a plastic body instead of metal, and claims 0.02 mm accuracy instead of 0.01 mm.

On 31 October 2026 it costs **$215** on the official store (list price $359).

## Technical overview

| | |
|---|---|
| Light source | blue structured light |
| Accuracy | 0.02 mm |
| Resolution | 0.07 mm |
| Working distance | 180–280 mm |
| Single capture | 100 × 75 mm |
| Object size | 10–300 mm |
| Texture | grayscale |
| Weight | 226 g |
| Interface | USB 2.0 |

## What it is good at

The Seal Lite is built for small things: a chess piece, a broken appliance knob, a figurine, a small bracket. The 100 × 75 mm capture window and 180–280 mm working distance mean you hold it close, ideally with the object on a turntable.

Fabbaloo’s hands-on found the scans excellent overall. The detail from blue light is the reason to buy this over the Moose Lite, which has a bigger capture area but coarser resolution.

## What owners complain about

- **Tracking.** Fabbaloo found tracking harder than on the full Seal, and store reviewers say it takes practice not to lose tracking. Slow, steady movement and a textured background or turntable mat help.
- **Difficult surfaces.** One B&H buyer gave it 2/5 because scans of dark, shiny or intricate parts were not ready to print. That matches the official advice: spray transparent, reflective or hairy surfaces.
- **No colour.** If you want textured models for games or AR, buy the full Seal or the Moose.

The official store shows 4.66/5 from 62 reviews, the largest review count of any scanner in this batch.

## Setting up and software

Plug in by USB, install JMStudio (Windows 10/11 or macOS 12/13) and scan. JMStudio also has phone support for some features. A dedicated GPU helps: 3DMakerpro’s minimum is an 8th-gen Core i5, 16 GB of RAM and a 2 GB MX250.

## Who should not buy it

- Anyone scanning objects larger than about a shoe.
- Anyone who needs colour texture.
- Anyone who wants a scanner that works on shiny metal without spray: look at a blue-laser scanner such as the Revopoint MetroY Pro.

## vs rivals

- **vs Seal (full):** about twice the price for colour, metal body and 0.01 mm claimed accuracy. Worth it if you also want textured models.
- **vs Moose Lite ($239):** the Moose Lite covers bigger objects (up to 1.5 m) with infrared, at lower detail. Pick by object size.
- **vs Revopoint INSPIRE 2 ($439):** the INSPIRE 2 has colour, more mature software and a bigger range, for about twice the money. See [Seal Lite vs INSPIRE 2](/en/compare/3dmakerpro-seal-lite-vs-revopoint-inspire-2/).

## Price and value

At $215, the Seal Lite is the cheapest blue-light scanner we cover. It is good value if your objects are small and matte.

## Final thoughts

Think of the Seal Lite as a detail scanner for small parts, not an all-rounder. Within that niche it delivers far more than its price suggests. Add a turntable and a can of scanning spray to your budget.

## Sources

- [Fabbaloo: Hands on with the 3DMakerpro Seal, part 3](https://www.fabbaloo.com/news/hands-on-with-the-3dmakerpro-seal-3d-scanner-part-3) (covers Seal and Seal Lite)
- [3Druck: the SEAL 3D scanner from 3DMakerpro](https://3druck.com/en/reviews/3dmakerpro-seal-3d-scanner-2-34122822/)
- [B&H: 3DMakerPro Seal Lite customer reviews](https://www.bhphotovideo.com/c/product/1959167-REG/3dmakerpro_seal_lite_3d_scanner.html)
- [3DMakerpro official store: Seal Lite](https://store.3dmakerpro.com/products/seal-lite) (price, specs and store rating)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: '3dmakerpro-toucan',
      name: '3DMakerpro Toucan',
      brand: '3DMakerpro',
      model: 'Toucan',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#f57c00',
      released: 2025,
      price_usd: 1199,
      featured: true,
      image_url: cdn('2560x2560-1_76c664f1-246b-44fb-af54-bac8d6257198.png?v=1758604508'),
      gallery: [
        cdn('8823e44869922d2f001267bbbd5e9588.png?v=1758604508'),
        cdn('1000x1000-3_9c6139c0-de2f-4fe6-b36b-7d845093c4b7.png?v=1758604622'),
      ],
      affiliate_url: makerpro('toucan'),
      affiliate_label: 'Check price at 3DMakerpro',
      title: '3DMakerpro Toucan review: a standalone scanner that needs no PC',
      summary: 'A camera-like 3D scanner with its own processor, screen and battery: scan, process and export without a computer. 0.03 mm claimed accuracy, from $1,199. Tracking and Wi-Fi transfers are its weak spots.',
      verdict: 'The Toucan is the cheapest way to get a true all-in-one 3D scanner: it scans, processes and exports on the device, and lasted over two hours per charge in testing. 3DWithUs rated it 4.7. Tom’s Hardware liked it but saw tracking drop out at times and found file transfer to a PC awkward. If you scan away from a desk, it beats the far pricier standalone rivals on price; if you always scan at a desk, a cheaper tethered scanner does more for the money.',
      best_for: 'Field scanning, classrooms and anyone without a powerful PC',
      pros: [
        'Fully standalone: on-device processing, 32 GB RAM, 256 GB storage',
        'Over two hours of scanning and processing per charge; 80% in about 30 min',
        'Near and Far modes: 0.03 mm accuracy close up, objects from 10 mm to 4 m',
        '48 MP colour camera plus four scanning cameras',
        'From $1,199, well below EINSTAR VEGA and Revopoint MIRACO',
      ],
      cons: [
        'Tracking can drop even in good conditions (Tom’s Hardware)',
        'No USB data transfer; large Wi-Fi exports are slow',
        'Heavy at 735 g for long sessions',
        'Scans must be processed on the device before saving; raw data is not kept',
        'Dark, transparent and shiny objects still need spray',
      ],
      specs: [
        { label: 'Technology', value: 'Phase-shifting structured light, MEMS optics' },
        { label: 'Accuracy', value: 'Up to 0.03 mm (Near), 0.1 mm (Far)' },
        { label: 'Resolution', value: '0.05 mm (Near), 0.1 mm (Far)' },
        { label: 'Speed', value: 'Up to 15 fps' },
        { label: 'Object size', value: '10–4,000 mm' },
        { label: 'Working distance', value: '200–1,000 mm' },
        { label: 'Cameras', value: '4 scanning cameras + 48 MP RGB' },
        { label: 'Computer', value: '8-core 2.4 GHz CPU, 32 GB RAM, 256 GB storage' },
        { label: 'Battery', value: '6,600 mAh, 80% in about 30 min' },
        { label: 'Weight', value: '735 g' },
        { label: 'Connectivity', value: 'Wi-Fi 6, Bluetooth, USB-C (charging only)' },
        { label: 'Price', value: 'Standard $1,199 · Premium $1,319' },
      ],
      scores: { performance: 8.0, quality: 8.2, ease: 8.0, value: 8.3 },
      body: `## What is it?

The Toucan is 3DMakerpro’s answer to the EINSTAR VEGA and Revopoint MIRACO: a 3D scanner with its own computer, screen and battery. Tom’s Hardware describes it as looking and feeling more like a digital camera than a scanner. You scan, process and export the mesh on the device, then send it to your PC over Wi-Fi.

On 31 October 2026 it costs **$1,199** (Standard) or **$1,319** (Premium) on the official store. It launched at $1,999.

## Technical overview

| | |
|---|---|
| Accuracy | up to 0.03 mm Near, 0.1 mm Far |
| Resolution | 0.05 mm Near, 0.1 mm Far |
| Speed | up to 15 fps |
| Object size | 10 mm to 4 m |
| Working distance | 200–1,000 mm |
| Cameras | 4 scanning + 48 MP colour |
| Onboard computer | 8 cores, 32 GB RAM, 256 GB |
| Battery | 6,600 mAh |
| Weight | 735 g |

## Out of the box

The body is metal and feels solid. The battery charges to 80% in about 30 minutes, and Hoffman Engineering got over two hours of scanning and processing per charge, matching 3DMakerpro’s claim. At 735 g it is heavy enough that 3DWithUs felt it during long sessions.

## Scanning tests

3DWithUs’s Max Funkner, who has tested most scanners on the market, tried several objects:

- **A travel mug**, scanned and then printed on a Creality K2 Pro. Geometry and surface details came out well.
- **A dog bed** in Texture Far mode, showing the Toucan can handle large soft objects.
- **A Charging Bull statue** in Single Shot Near mode, about 120 shots, with a few small gaps underneath.

Hoffman Engineering called it a good mesh producer for the price, but said a face scan had less detail than a dedicated face scanner.

Tracking is the main disagreement between reviewers. Tom’s Hardware saw it drop tracking at times even under ideal conditions. Weirdestgifts found it tracked a chair surprisingly well but lost a shiny black helmet immediately. Expect to spray shiny or dark objects.

## Getting files off the scanner

This is the Toucan’s weakest point. The USB-C port only charges. Files move over Wi-Fi to JMStudio on your PC using “Import from Device”. Tom’s Hardware found this challenging, and 3DWithUs found big exports slow. The scanner also processes scans before saving and does not keep raw data, so you cannot reprocess later with different settings.

## Who should not buy it

- Anyone who always scans at a desk with a capable PC: a $500 tethered scanner such as the Moose does similar work.
- Anyone who needs metrology-grade accuracy on large parts: look at blue-laser scanners with markers.
- Anyone who needs quick file transfer: the Wi-Fi-only workflow is slow.

## vs rivals

- **vs EINSTAR VEGA ($1,599):** the VEGA reaches further in Fast mode and has a more refined screen workflow. The Toucan costs $400 less. See [Toucan vs VEGA](/en/compare/3dmakerpro-toucan-vs-einstar-vega/).
- **vs Revopoint MIRACO ($1,349):** the MIRACO has a bigger 6-inch screen; the Toucan has more RAM and a 48 MP colour camera.
- **vs Moose ($489):** the Moose matches the Toucan’s close-up accuracy for less than half the price, but needs a computer and a cable.

## Price and value

At $1,199 the Toucan is the cheapest full standalone scanner we have covered. That makes it good value for field work, education and anyone without a strong PC.

## Final thoughts

The Toucan makes standalone scanning affordable. Accept occasional tracking drops and slow Wi-Fi transfers, and it gives you a scanner you can take anywhere.

## Sources

- [3DWithUs: 3DMakerpro Toucan hands-on](https://3dwithus.com/3dmakerpro-toucan-review-standalone-3d-scanning-examples) (January 2026, updated July 2026)
- [Tom’s Hardware: 3DMakerPro Toucan review](https://www.tomshardware.com/3d-printing/3d-scanning/3dmakerpro-toucan-3d-scanner-review)
- [Hoffman Engineering: 3DMakerPro Toucan](https://www.hoffman.engineering/uncategorised/3dmakerpro-toucan-best-portable-3d-scanner/)
- [Weirdestgifts: Toucan 3D scanner review](https://weirdestgifts.com/3dmakerpro-toucan-3d-scanner-review/)
- [3DMakerpro official store: Toucan](https://store.3dmakerpro.com/products/toucan) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: '3dmakerpro-moose-vs-3dmakerpro-moose-lite',
      title: '3DMakerpro Moose vs Moose Lite: is colour worth $250 more?',
      products: ['3dmakerpro-moose', '3dmakerpro-moose-lite'],
      intro: 'Same size, same software, same 15 mm to 1.5 m object range. The Moose adds full-colour texture and 0.03 mm accuracy; the Lite uses infrared and costs half as much.',
      verdict: 'Buy the Moose ($489) if you want colour models for art, games or AR, or the finest detail. Buy the Moose Lite ($239) if you only print what you scan: grayscale geometry is all a printer needs, and the Lite’s wider 150–400 mm working distance is easier to use.',
      updated_at: DATE,
    },
    {
      slug: '3dmakerpro-toucan-vs-einstar-vega',
      title: '3DMakerpro Toucan vs EINSTAR VEGA: best standalone 3D scanner',
      products: ['3dmakerpro-toucan', 'einstar-vega'],
      intro: 'Both scan, process and export without a computer. The Toucan costs $400 less; the VEGA is the more established tool.',
      verdict: 'Pick the Toucan for the lowest price on a true standalone scanner, a 48 MP colour camera and fast charging. Pick the EINSTAR VEGA if you scan large objects often and want the more polished on-screen workflow and longer reach.',
      updated_at: DATE,
    },
    {
      slug: '3dmakerpro-seal-lite-vs-revopoint-inspire-2',
      title: '3DMakerpro Seal Lite vs Revopoint INSPIRE 2: best budget scanner',
      products: ['3dmakerpro-seal-lite', 'revopoint-inspire-2'],
      intro: 'Two popular budget scanners. The Seal Lite costs about half as much; the INSPIRE 2 does more.',
      verdict: 'Choose the Seal Lite ($215) for small, matte objects where blue-light detail matters and colour does not. Choose the INSPIRE 2 ($439) for colour texture, larger objects and Revopoint’s more mature software.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-budget-3d-scanners',
      title: 'The best budget 3D scanners under $500',
      category: '3d-scanners',
      intro: 'Affordable scanners that still make printable meshes, compared using independent tests and official specs. Prices are official store prices on 31 October 2026.',
      items: [
        { slug: '3dmakerpro-moose', award: 'Best overall under $500', note: 'Colour texture, and testers measured within 0.04–0.13 mm of calipers. $489.' },
        { slug: '3dmakerpro-seal-lite', award: 'Best for small parts', note: 'Blue-light detail for $215; small capture window.' },
        { slug: '3dmakerpro-moose-lite', award: 'Cheapest for bigger objects', note: 'Infrared, 15 mm to 1.5 m, grayscale only. $239.' },
        { slug: 'revopoint-inspire-2', award: 'Best software', note: 'Colour, 190 g and mature Revo Scan software. $439.' },
      ],
      updated_at: DATE,
    },
  ],
};
