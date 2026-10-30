// 3D scanners: EINSTAR (Shining 3D) and Revopoint. Researched October 2026.
// Prices and images: official US stores (us.einstar.com, global.revopoint3d.com), 30 Oct 2026.
// Performance claims: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const einstar = (handle) => awin(105805, `https://us.einstar.com/products/${handle}`);
const revopoint = (handle) => awin(73435, `https://global.revopoint3d.com/products/${handle}`);
const ecdn = (file) => `https://cdn.shopify.com/s/files/1/0677/2323/1387/files/${file}`;
const rcdn = (file) => `https://cdn.shopify.com/s/files/1/0538/9533/2027/files/${file}`;
const DATE = '2026-10-30 09:00:00';

export default {
  categories: [
    {
      slug: '3d-scanners', name: '3D Scanners', group_name: '3D printing', sort_order: 5, art_type: '3d-scanner', tone: '#7c4dff',
      blurb: 'Handheld and standalone 3D scanners for reverse engineering, replacement parts, cosplay and 3D printing, scored on tracking, accuracy, software and value.',
      score_labels: { performance: 'Speed and tracking', quality: 'Accuracy and detail', ease: 'Software and ease of use', value: 'Value' },
      sponsor: 'einstar-vega',
    },
  ],

  products: [
    {
      slug: 'einstar-vega',
      name: 'EINSTAR VEGA',
      brand: 'EINSTAR',
      model: 'VEGA',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#7c4dff',
      released: 2024,
      price_usd: 1599,
      featured: true,
      image_url: ecdn('Titanium_Gray_1_cf703fd3-4d3f-4f74-999c-79d99878d1c0.png?v=1765775698'),
      gallery: [
        ecdn('9-inbox-new_5ab08b4d-fe42-4c31-b851-13fe6bb527bf.jpg?v=1765775698'),
        ecdn('2_car_b1e98314-a1be-44a0-a0f6-022eaa836f7a.jpg?v=1765775698'),
        ecdn('3_motor_9f37c7d4-5f6f-4c4f-aa5e-826e0e70a3ed.jpg?v=1765775698'),
      ],
      affiliate_url: einstar('einstar-vega'),
      affiliate_label: 'Check price at EINSTAR',
      title: 'EINSTAR VEGA review: the cable-free scanner that goes where your PC can’t',
      summary: 'A battery-powered 3D scanner with its own screen and processor: scan a car or a hand outdoors, check the result on the device, finish on a PC later.',
      verdict: 'The VEGA is the scanner to buy if you scan away from a desk: engine bays, furniture, people, sculptures in a garden. Two light sources cover small parts and big objects, and the onboard screen means no laptop on a cart. It is not the cheapest way into scanning, and the grip is small for big hands, but nothing else at this price is this self-contained.',
      best_for: 'Scanning large or immovable objects away from a desk',
      pros: [
        'Fully standalone: 5,000 mAh battery, built-in screen, Wi-Fi 6',
        'Two modes: HD (0.05 mm point distance) for parts, Fast (up to 1.5 m away) for big objects',
        'Testers captured a Jeep engine bay in under five minutes',
        'Handles hands and bodies without losing tracking in testing',
        'Generous box: tripod, calibration board, markers, carry case, 65 W charger',
      ],
      cons: [
        'Grip is small for large hands',
        'Tracking dropped a couple of times outdoors in independent testing',
        'Needs calibrating about every seven days for best accuracy',
        'At $1,599 it costs nearly twice an EINSTAR 2',
      ],
      specs: [
        { label: 'Technology', value: 'Infrared structured light (MEMS + VCSEL), two modes' },
        { label: 'HD mode', value: '0.05–3 mm point distance, 15 fps, 100–350 mm working distance' },
        { label: 'Fast mode', value: '0.5–10 mm point distance, 20 fps, 270–1,500 mm working distance' },
        { label: 'Standalone', value: 'Yes: onboard screen and processing, no PC required to scan' },
        { label: 'Connectivity', value: 'Wi-Fi 6, USB-C' },
        { label: 'Battery', value: '5,000 mAh' },
        { label: 'Weight', value: '535 g' },
        { label: 'Software', value: 'EINSTAR StarVision (Windows 10/11 64-bit, macOS 11+)' },
        { label: 'In the box', value: 'Scanner, case, tripod, calibration board, markers, 65 W charger, wrist and shoulder straps' },
      ],
      scores: { performance: 8.8, quality: 8.7, ease: 8.9, value: 8.0 },
      body: `## What is it?

The EINSTAR VEGA is Shining 3D’s answer to a problem every scanner owner hits sooner or later: the object you want to scan is not on your desk. It is a car, a motorbike tank, a statue in a garden or a friend who will not sit still next to a gaming PC. The VEGA puts the cameras, a processor, a touchscreen and a 5,000 mAh battery in one handheld body, so you scan, check coverage on the screen and only touch a computer when you want to clean up the mesh.

It sits at **$1,599** on the official store at the time of writing (list price $1,999), with refurbished units at $999.

## Technical overview

The VEGA has two infrared light systems instead of one:

| Mode | Point distance | Speed | Working distance | Use it for |
|---|---|---|---|---|
| HD | 0.05–3 mm | 15 fps | 100–350 mm | Brackets, figurines, faces |
| Fast | 0.5–10 mm | 20 fps | 270–1,500 mm | Car panels, furniture, bodies |

Infrared light is the reason it copes with people and outdoor light better than older white-light scanners: it is invisible, so nobody squints, and it is less affected by daylight than visible structured light.

## Unboxing and setup

The box is generous. 3DWithUs lists a carry case, tripod, calibration board and stand, two sizes of markers, a 65 W charger, wrist and shoulder straps and a sample figure. Calibration with the supplied board takes a few minutes, and the reviewer recommends repeating it about once a week to keep accuracy at its best.

## Real-world scanning

The most useful test result we found is a big, awkward one: the 3DWithUs reviewer scanned a **Jeep engine bay in under five minutes** using Fast mode, then switched to HD mode for small parts. Hands and wrists, which are notoriously difficult because they move and have few features, scanned without tracking problems. A printed copy of a scanned figurine came out effectively identical to the original.

Outdoors, the VEGA lost tracking “a couple of times” on the Jeep, but picked up again when the reviewer moved back to an area it had already captured. That is normal behaviour for a markerless handheld scanner, and much better than structured-light scanners that simply give up in daylight.

## What testers complain about

- **Grip size.** The handle is slim, and reviewers with large hands found it cramped over a long session.
- **Hair.** Facial and head hair caused minor gaps, as it does on almost every scanner. It did not ruin head scans, but expect some hole filling.
- **Weekly calibration.** Not a big job, but one more step than plug-and-scan.

## VEGA vs the rivals

- **vs Revopoint MIRACO ($1,349):** the closest rival and also standalone with a screen. 3DWithUs calls the two comparable. The VEGA’s Fast mode reaches further (up to 1.5 m working distance), which matters for cars and furniture; the MIRACO is a little cheaper and has a bigger 6-inch screen. See our [VEGA vs MIRACO comparison](/en/compare/einstar-vega-vs-revopoint-miraco/).
- **vs EINSTAR Rockit ($1,519):** the Rockit adds blue lasers for crisper detail on small mechanical parts and is even lighter, but leans on a powerful PC. The VEGA is the better “take it anywhere” tool.
- **vs EINSTAR 2 ($899):** if you scan at a desk next to your PC, the EINSTAR 2 does the job for far less.

## Price and value

At $1,599 the VEGA is a mid-range purchase, not an impulse buy. You pay for independence from a computer: if that is the problem you have, it is good value; if your objects all fit on a turntable, buy a cheaper scanner and spend the difference on a better GPU.

## Final thoughts

The VEGA is the most practical scanner we have researched for people who scan out in the world. Two modes cover a small bracket and a car door with the same tool, setup is quick, and the screen shows you missed spots while you can still fix them. Check the grip in person if you have large hands, and plan on weekly calibration.

## Sources

- [3DWithUs: EINSTAR VEGA review, testing, tips and settings](https://3dwithus.com/einstar-vega-review-3d-scanner-testing-tips-settings)
- [3DWithUs: Best budget 3D scanners (Oct 2026)](https://3dwithus.com/best-budget-3d-scanners)
- [EINSTAR official store: VEGA](https://us.einstar.com/products/einstar-vega) (price and box contents)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'einstar-rockit',
      name: 'EINSTAR Rockit',
      brand: 'EINSTAR',
      model: 'Rockit',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#5e35b1',
      released: 2025,
      price_usd: 1519,
      image_url: ecdn('rockit-_1.jpg?v=1775012863'),
      gallery: [
        ecdn('rockit-_2.jpg?v=1775012863'),
        ecdn('rockit-_3.jpg?v=1775012863'),
        ecdn('rockit_inbox_fd3e3137-ea13-4c08-9c3a-3c205b800682.jpg?v=1775012863'),
      ],
      affiliate_url: einstar('einstar-rockit'),
      affiliate_label: 'Check price at EINSTAR',
      title: 'EINSTAR Rockit review: blue-laser detail in a pocket-sized wireless scanner',
      summary: 'A 425 g hybrid scanner with blue lasers for sharp mechanical detail and infrared for big objects. Wireless and battery-powered, but it wants a strong PC.',
      verdict: 'The Rockit is the most capable EINSTAR for people who scan mechanical parts: blue lasers give cleaner edges than infrared alone, and a swappable battery means no cable. The catch is the computer behind it: plan on an RTX 3060-class GPU and 32 GB of RAM. If your PC is up to it, this is excellent value next to professional laser scanners.',
      best_for: 'Reverse engineering mechanical and automotive parts',
      pros: [
        'Hybrid light: crossed and parallel blue lasers plus infrared VCSEL',
        'Only about 425 g with the battery, pocket-sized body',
        'Wireless over Wi-Fi 6 with a swappable battery (about 3 h quoted)',
        'Testers scanned dark and chrome parts without spray in laser mode',
        'Large discount on the store: $1,519 vs $1,899 list',
      ],
      cons: [
        'Needs a strong PC: 32 GB RAM and an RTX 3060 or better quoted',
        'Mirror-polished and velvet-black surfaces still need scanning spray',
        'Objects under about 50 mm are hard work; the EINSTAR 2 may suit tiny parts',
        'Many published accuracy figures are the manufacturer’s, not independent',
      ],
      specs: [
        { label: 'Technology', value: 'Blue laser (crossed + parallel lines) and infrared VCSEL' },
        { label: 'Accuracy (claimed)', value: 'Up to 0.05 mm; volumetric 0.1 mm/m' },
        { label: 'Speed (claimed)', value: 'Up to 90 fps' },
        { label: 'Connectivity', value: 'Wi-Fi 6, USB-C' },
        { label: 'Battery', value: 'Swappable 5,500 mAh, about 3 hours (claimed)' },
        { label: 'Weight', value: 'About 425 g with battery' },
        { label: 'Size', value: '130 × 37 × 61 mm' },
        { label: 'PC requirement', value: '32 GB RAM (64 GB recommended), RTX 3060 or better' },
        { label: 'Bundles', value: 'Scanner $1,519 · + EXModel $1,744 · + Accessories Pro Kit $1,918' },
      ],
      scores: { performance: 9.0, quality: 8.8, ease: 7.9, value: 8.3 },
      body: `## What is it?

The Rockit is EINSTAR’s attempt to bring the blue-laser scanning used in professional metrology down to a hobbyist budget, and to make it wireless while doing so. Inside a body about the size of a TV remote are crossed and parallel blue laser lines for fine detail, an infrared projector for larger objects and a swappable battery. It streams to your PC over Wi-Fi 6, so you can walk around a car without dragging a cable.

The official store sells it for **$1,519** (list $1,899) at the time of writing. Refurbished units are $1,399.

## Technical overview

Shining 3D quotes accuracy of up to 0.05 mm, volumetric accuracy of 0.1 mm per metre and up to 90 frames per second. Treat those as manufacturer figures: the independent reviews we read report the same numbers rather than measuring them. Weight is about 425 g with the battery, and the battery is swappable, with roughly three hours of scanning quoted per pack.

Why blue lasers? Laser lines are bright and narrow, so the cameras can find them on dark or shiny surfaces that wash out infrared patterns. That is why reviewers report scanning dark plastics and chrome trim without spray, which is a real time saver on automotive jobs.

## Setup and the PC question

This is the part to read before buying. 3DTechValley lists **32 GB of RAM as the minimum (64 GB recommended) and an RTX 3060 or better**. Laser scanning produces dense point clouds, and the processing happens on your computer, not in the scanner. On a mid-range laptop, expect sluggish previews and long meshing times.

## Real-world scanning

Reviewers highlight three strengths:

1. **Wireless freedom.** No cable snagging on a wheel arch is a bigger deal in practice than it sounds.
2. **Hard surfaces.** Dark and chrome parts scanned without spray in laser mode. Only true mirror finishes and deep velvet-black materials still needed it.
3. **Outdoor tracking.** The scanner is rated for strong sunlight, and testers report it held tracking outdoors.

The weak spot is small objects. Parts under about 50 mm were described as challenging, and the same review suggests the cheaper EINSTAR 2 is a better fit for tiny items and casual scanning.

## What testers complain about

- The PC requirement, above all.
- Some surfaces still need spray.
- Several review sites mix real testing with promotional copy, so we only repeat claims that come with a method or a clear source.

## Rockit vs the rivals

- **vs EINSTAR VEGA ($1,599):** the VEGA works without a PC and has a screen; the Rockit gives cleaner mechanical detail but needs a powerful computer. Our [Rockit vs VEGA comparison](/en/compare/einstar-rockit-vs-einstar-vega/) goes deeper.
- **vs EINSTAR 2 ($899):** the EINSTAR 2 also has blue lasers (17 parallel lines) but no crossed-laser mode, a lower-resolution texture camera and no battery. For desk work on a budget it is the smarter buy.
- **vs Revopoint MetroY:** Revopoint’s blue-laser line competes directly. We have not covered it yet.

## Price and value

At $1,519 the Rockit undercuts professional blue-laser scanners by thousands. If you already own a capable gaming PC, it is a strong deal. If you would have to buy the PC too, budget around $2,500 in total and compare it against a standalone scanner like the VEGA.

## Final thoughts

For reverse engineering brackets, engine covers and car parts, the Rockit is the most capable EINSTAR you can buy without a pro budget. Make sure your computer is ready for it, and keep a can of scanning spray for the shiniest jobs.

## Sources

- [3DTechValley: EINSTAR Rockit review (2026)](https://www.3dtechvalley.com/einstar-rockit-review/) (specs, PC requirements, limitations)
- [3DWithUs: Best budget 3D scanners](https://3dwithus.com/best-budget-3d-scanners)
- [EINSTAR official store: Rockit](https://us.einstar.com/products/einstar-rockit) (price and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'einstar-2',
      name: 'EINSTAR 2',
      brand: 'EINSTAR',
      model: 'EINSTAR 2',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#9575cd',
      released: 2025,
      price_usd: 899,
      featured: true,
      image_url: ecdn('einstar2_1_fc16b46d-900b-448a-af58-0a7ffee3f657.jpg?v=1775012881'),
      gallery: [
        ecdn('einstar2_2.jpg?v=1775012881'),
        ecdn('einstar2_3_0e42f2d0-4bc1-4720-8802-0a994410c3f6.jpg?v=1775012881'),
        ecdn('einstar2_inbox.jpg?v=1775012881'),
      ],
      affiliate_url: einstar('einstar-2'),
      affiliate_label: 'Check price at EINSTAR',
      title: 'EINSTAR 2 review: the sensible first “serious” 3D scanner',
      summary: 'Blue laser lines plus infrared for under $900. A desk-bound all-rounder that copes with dark and shiny parts better than most budget scanners.',
      verdict: 'The EINSTAR 2 is the scanner we would point most 3D-printing hobbyists to first. It adds blue lasers to the infrared scanning of the original EINSTAR, so dark and shiny parts are less of a fight, and at $899 it costs far less than the VEGA or Rockit. It is not the tool for very fine detail on tiny objects, and independent accuracy measurements are still scarce.',
      best_for: 'Hobbyists scanning replacement parts and props at a desk',
      pros: [
        '17 parallel blue laser lines plus an infrared projector',
        'Big store discount: $899 vs $1,249 list',
        'Manufacturer says black and reflective parts scan without spray',
        'Same StarVision software as the rest of the EINSTAR family',
        'Refurbished units available from $799',
      ],
      cons: [
        'Better at general-purpose scanning than ultra-fine detail on small parts',
        'Few independent accuracy measurements published so far',
        'No crossed-laser mode, unlike the Rockit',
        'Lower-resolution texture camera than the Rockit',
      ],
      specs: [
        { label: 'Technology', value: '17 parallel blue laser lines + infrared projector' },
        { label: 'Use cases', value: 'Small to large objects, people (infrared mode)' },
        { label: 'Texture camera', value: 'Colour, lower resolution than Rockit' },
        { label: 'Software', value: 'EINSTAR StarVision' },
        { label: 'Bundles', value: 'Scanner $899 · + EXModel Personal $1,124 · + Accessories Pro Kit $1,298' },
        { label: 'Refurbished', value: '$799 on the official store' },
      ],
      scores: { performance: 8.2, quality: 8.2, ease: 8.3, value: 9.1 },
      body: `## What is it?

The original EINSTAR earned a reputation as the best handheld scanner under $1,000: infrared, easy software, good with people. The EINSTAR 2 keeps that infrared mode for large objects and bodies, and adds **17 parallel blue laser lines** for parts that infrared struggles with: dark plastics, machined metal and anything with sharp edges.

On the official store it is **$899** at the time of writing, down from a $1,249 list price.

## Who it is for

Think of the person who prints replacement parts, cosplay armour and car interior clips. They scan at a desk next to their PC, they want clean edges for CAD, and they do not want to coat everything in scanning spray. That person is exactly who the EINSTAR 2 is built for.

## Technical overview

- **Laser mode:** 17 parallel blue lines for detail and difficult surfaces.
- **Infrared mode:** a projector for larger objects and people.
- **Software:** EINSTAR StarVision, shared with the VEGA and Rockit, so tutorials carry over.

Shining 3D says it scans black and reflective objects directly, without spray. One independent comparison describes it as optimised for broad, general-purpose scanning rather than ultra-detailed digitising of very small objects, which matches what we would expect from parallel lines rather than a dense crossed pattern.

## What we could and could not verify

We want to be clear here: there are fewer hands-on EINSTAR 2 reviews with measured results than for the VEGA, the Revopoint POP 3 Plus or the original EINSTAR. Most published accuracy claims come from Shining 3D or resellers. We have marked this as a preview review and will update the scores as more test data appears.

## EINSTAR 2 vs the rivals

- **vs Revopoint POP 3 Plus ($526):** cheaper and great for colour scans of medium objects, but it is infrared-only and reviewers found its colour texture washed out. The EINSTAR 2’s blue lasers handle dark, shiny and mechanical parts better. See [EINSTAR 2 vs POP 3 Plus](/en/compare/einstar-2-vs-revopoint-pop-3-plus/).
- **vs Revopoint INSPIRE 2 ($439):** the INSPIRE 2 uses infrared laser lines and can run from a phone, but needs a capable PC for laser mode. Cheaper, lighter, a bit fussier with tracking.
- **vs EINSTAR Rockit ($1,519):** the Rockit adds crossed lasers, a battery and Wi-Fi. Worth it for mechanical work away from a desk; overkill for most hobbyists.

## Price and value

At $899 the EINSTAR 2 is where scanning stops feeling like a toy without becoming a professional expense. The bundle with the Accessories Pro Kit ($1,298) is worth considering if you will scan small parts on a turntable often.

## Final thoughts

If you want one scanner to digitise parts for 3D printing and you work at a desk, the EINSTAR 2 is the safest recommendation in this guide. Buy the VEGA instead if you scan outdoors or away from a computer.

## Sources

- [UMAX: EINSTAR 2 vs EINSTAR Rockit comparison](https://umax.com/blog/einstar-2-vs-einstar-rockit-which-is-the-best-budget-pick/)
- [3DTechValley: Rockit review with EINSTAR 2 comparison](https://www.3dtechvalley.com/einstar-rockit-review/)
- [Aniwaa: original EINSTAR review](https://www.aniwaa.com/review/3d-scanners/shining-3d-einstar-review-a-solid-and-all-around-impressive-handheld-3d-scanner-under-1k/)
- [EINSTAR official store: EINSTAR 2](https://us.einstar.com/products/einstar-2) (price and bundles)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'revopoint-miraco',
      name: 'Revopoint MIRACO',
      brand: 'Revopoint',
      model: 'MIRACO',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#00897b',
      released: 2024,
      price_usd: 1349,
      image_url: rcdn('MIRACO3DScanner_d473edc0-ccfa-46c8-a0b7-733d3dbf8393.jpg?v=1792656191'),
      gallery: [
        rcdn('MIRACOmain1.jpg?v=1775547464'),
        rcdn('2_03148598-bd17-403b-9cbe-6ccd41e1b3b3.jpg?v=1775547464'),
        rcdn('3_359c2c42-0187-45a0-818f-102a64842e3f.jpg?v=1775547464'),
      ],
      affiliate_url: revopoint('standalone-3d-scanner-miraco'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint MIRACO review: a 3D scanner with a big screen and no strings',
      summary: 'A standalone scanner with a 6-inch 2K touchscreen, onboard processing and two hours of battery. Great in the field, weaker on colour.',
      verdict: 'The MIRACO is the friendliest standalone scanner we have researched: the 6-inch screen makes it obvious what you have captured, and it can process and export a printable STL without a computer. Colour texture is its weak spot, and fine details come out softer than on laser scanners. Buy it for geometry in the field, not for photoreal colour.',
      best_for: 'Field scanning without a laptop, from small parts to furniture',
      pros: [
        '6-inch 2K touchscreen and onboard processing: no PC or phone needed',
        'Near and Far modes: objects from 10 mm up to 4 m',
        'Up to two hours of continuous scanning per charge',
        'Testers exported a manifold STL and printed it straight from the device',
        'Cheaper than the EINSTAR VEGA ($1,349 vs $1,599)',
      ],
      cons: [
        'Colour texture rated “subpar”; reflective items show seams',
        'Fine details soften after meshing',
        'Onboard processing is slower than a fast desktop',
        'Some Mac owners report the scanner not mounting over USB',
      ],
      specs: [
        { label: 'Technology', value: 'Quad-camera infrared structured light' },
        { label: 'Accuracy', value: 'Single-frame up to 0.05 mm; 0.05 mm point distance' },
        { label: 'Speed', value: 'Up to 15 fps' },
        { label: 'Object size', value: '10 × 10 × 10 mm to 4 × 4 × 4 m' },
        { label: 'Screen', value: '6-inch 2K touchscreen' },
        { label: 'Memory', value: '16 GB (MIRACO) / 32 GB (MIRACO Pro)' },
        { label: 'Battery', value: 'Up to 2 hours continuous scanning; 65 W charging' },
        { label: 'Software', value: 'On-device editing, or Revo Scan 5 on PC/Mac' },
        { label: 'Price', value: 'MIRACO $1,349 · MIRACO Pro $1,799' },
      ],
      scores: { performance: 8.4, quality: 8.1, ease: 8.7, value: 7.9 },
      body: `## What is it?

Revopoint built its name on cheap, wired scanners like the POP series. The MIRACO is the opposite: a self-contained scanner with four cameras, a 6-inch 2K touchscreen, a battery good for up to two hours and enough onboard computing to fuse, mesh and export a model without a laptop. It is priced at **$1,349** for the 16 GB version and $1,799 for the 32 GB MIRACO Pro.

## Technical overview

- **Light source:** infrared structured light, four cameras.
- **Accuracy:** up to 0.05 mm single-frame, 0.05 mm point distance.
- **Range:** objects from a 10 mm cube to 4 m, using Near and Far modes.
- **Speed:** up to 15 fps.

## Setup and first scans

There is almost nothing to set up, which is the point. 3DWithUs scanned a demo bust on a turntable in **three passes**, cleaned turntable noise directly on the screen and exported a 20 MB manifold STL that printed on a Bambu Lab X1-Carbon at 0.2 mm layers. Processing on the device “only took a few minutes”; a 2021 MacBook Pro M1 Max did it faster, but the device does not need one.

The same reviewer used Far mode on a chair and a stone wall, capturing both colour and geometry, and Near mode on part of a toy blaster.

## What testers and owners complain about

- **Colour.** 3DWithUs rates colour texture as “subpar”. Matte objects (a felt avocado) looked clean; reflective items showed seams and tears in the texture.
- **Soft fine detail.** Sharp edges on the blaster softened during meshing, and small details on the printed bust were soft.
- **Mac USB.** Several owner reviews say the MIRACO Plus did not show up on a MacBook Pro for file transfer. Wi-Fi transfer is the workaround.
- **Speed on device.** Owners mention onboard processing is slow for big scans; offloading to a PC helps.

## MIRACO vs the rivals

- **vs EINSTAR VEGA ($1,599):** the most direct rival. The VEGA reaches further in Fast mode and testers liked its handling on people and cars; the MIRACO has the bigger screen and costs $250 less. Full breakdown: [VEGA vs MIRACO](/en/compare/einstar-vega-vs-revopoint-miraco/).
- **vs Revopoint POP 3 Plus ($526):** a third of the price, but needs a computer or phone. Reviewers recommend the MIRACO over the POP 3 Plus specifically for mobile use.
- **vs EINSTAR Rockit ($1,519):** better detail on mechanical parts thanks to blue lasers, but needs a strong PC.

## Price and value

$1,349 is fair for a standalone scanner with a screen this good. The Pro’s extra memory helps with large scans, but most hobbyists will be fine with the base model. If you always scan next to a PC, a POP 3 Plus or EINSTAR 2 is better value.

## Final thoughts

The MIRACO is the scanner that feels most like a camera: pick it up, scan, look at the screen, done. Its geometry is good enough for printing and reverse engineering, but do not buy it for colour. 3DWithUs scores it 4.5/5, and we agree it is one of the best ways to scan without a computer.

## Sources

- [3DWithUs: Revopoint MIRACO review, portable 3D scanning](https://3dwithus.com/revopoint-miraco-3d-scanner-review-portable-3d-scanning)
- [Pix-Pro: MIRACO Plus first impressions](https://www.pix-pro.com/blog/miraco-initial)
- [Revopoint official store: MIRACO](https://global.revopoint3d.com/products/standalone-3d-scanner-miraco) (price and battery specs)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'revopoint-pop-3-plus',
      name: 'Revopoint POP 3 Plus',
      brand: 'Revopoint',
      model: 'POP 3 Plus',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#26a69a',
      released: 2024,
      price_usd: 526,
      image_url: rcdn('POP3Plus3DScanner_cac5cf06-4573-4b7d-803a-d2605ff2b845.jpg?v=1792656228'),
      gallery: [
        rcdn('POP3plusmain3.png?v=1775547492'),
        rcdn('4_3e4ffc87-2dab-46d2-9c2b-942ba7da6ee3.png?v=1775547492'),
        rcdn('2_f6281d63-7e34-46d6-958e-c5f9ce12b38e.png?v=1775547492'),
      ],
      affiliate_url: revopoint('portable-3d-scanner-pop3'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint POP 3 Plus review: strong geometry for the price, muddy colour',
      summary: 'An infrared scanner around $500 that captures printable models of busts, toys and coins in minutes. Colour is its weak point.',
      verdict: 'The POP 3 Plus is the cheapest scanner here that we would trust for 3D-printing work. Geometry is detailed, One-click Edit turns a scan into a printable model with almost no effort, and the optical zoom helps on small objects. Colour texture looks washed out, and you will want the optional turntable. For desk scanning on a budget, it is excellent value.',
      best_for: 'Budget desk scanning of busts, toys and medium-sized parts',
      pros: [
        'Detailed geometry: 0.08 mm single-frame accuracy, 0.05 mm point distance',
        'One-click Edit produces a printable model quickly',
        '1.5× and 2× zoom for small objects like coins',
        'Works over USB or Wi-Fi, with a phone or a computer',
        '$526 for the Standard Edition',
      ],
      cons: [
        'Colour texture looks washed out or muddy',
        'Small text on a 34 mm coin did not fully resolve',
        'Optional dual-axis turntable needs manual repositioning; models can fall at full tilt',
        'Phone use needs a power bank and grip',
      ],
      specs: [
        { label: 'Technology', value: 'Dual-camera infrared structured light' },
        { label: 'Accuracy', value: 'Single-frame up to 0.08 mm; 0.05 mm point distance' },
        { label: 'Speed', value: 'Up to 18 fps' },
        { label: 'Object size', value: '20 × 20 × 20 mm to 2 × 2 × 2 m' },
        { label: 'Working distance', value: '150–400 mm' },
        { label: 'Connectivity', value: 'USB, Wi-Fi' },
        { label: 'Export', value: 'PLY, OBJ, STL, ASC, 3MF, GLTF, FBX' },
        { label: 'Software', value: 'Revo Scan 5' },
        { label: 'Price', value: 'Standard $526 · Advanced $611' },
      ],
      scores: { performance: 7.9, quality: 8.0, ease: 8.5, value: 8.8 },
      body: `## What is it?

The POP 3 Plus is Revopoint’s mid-priced handheld scanner: dual infrared cameras, a colour camera with a flash, and Revo Scan 5 software that runs on Windows, macOS, Android and iOS. It costs **$526** for the Standard Edition and $611 for the Advanced Edition at the time of writing.

Revopoint says it is about 20% more accurate than the POP 3, with better colour from a larger RGB aperture and two white LEDs.

## Technical overview

- **Accuracy:** up to 0.08 mm single-frame, 0.05 mm fused point distance.
- **Speed:** up to 18 fps.
- **Object size:** from a 20 mm cube to 2 m.
- **Working distance:** 150–400 mm.
- **Zoom:** 1.5× and 2× modes for small objects.

## Real-world scanning

3DWithUs ran the most complete test we found:

- **Demo bust** (High Accuracy, Feature Tracking): captured in a few minutes. One-click Edit produced a printable 32 MB model.
- **34 mm coin** with 1.5× zoom and markers: fine relief came through; small lettering did not fully resolve.
- **Fabric bird toy:** clean fabric detail, but the bright flash gave a slightly washed-out texture.
- **3D-printed frog:** layer lines were visible in the scan, a good sign for resolution.

Processing large point clouds was quick on an M1 Max MacBook Pro.

## What testers complain about

- **Colour.** The review’s cons list calls the texture “muddy”. Revopoint improved it over the POP 3, whose colour was described as chalky and uneven, but it is still not great.
- **Turntable.** The optional $99 dual-axis turntable tilts ±30°, but needs manual repositioning, and models could fall at the extremes.
- **Mobile scanning.** It works, but you need a power bank, a grip and a point-to-point Wi-Fi connection.

## POP 3 Plus vs the rivals

- **vs EINSTAR 2 ($899):** the EINSTAR 2’s blue lasers handle dark, shiny and mechanical parts better. The POP 3 Plus is cheaper and great for organic shapes. See [EINSTAR 2 vs POP 3 Plus](/en/compare/einstar-2-vs-revopoint-pop-3-plus/).
- **vs Revopoint INSPIRE 2 ($439):** cheaper and lighter, with an infrared laser mode. Laser mode needs a PC with an RTX 3060, though.
- **vs Revopoint MIRACO ($1,349):** standalone with a screen. Reviewers recommend it over the POP 3 Plus for mobile work.

## Price and value

At $526, the POP 3 Plus gives you printable scans of medium objects for less than many 3D printers. Spend the extra $99 on the turntable if you scan small items often.

## Final thoughts

The POP 3 Plus does the main job, accurate geometry for printing, very well for the money. Ignore the colour, scan at a desk, and it will earn its place. 3DWithUs scores it 4.6/5.

## Sources

- [3DWithUs: Revopoint POP 3 Plus review, zoom in on the detail](https://3dwithus.com/revopoint-pop-3-plus-3d-scanner-review-zoom-in-on-the-detail)
- [3DWithUs: Revopoint POP 3 review](https://3dwithus.com/revopoint-pop-3-3d-scanner-review-capture-reality-in-3d) (colour comparison with the previous model)
- [Revopoint official store: POP 3 Plus](https://global.revopoint3d.com/products/portable-3d-scanner-pop3) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'revopoint-inspire-2',
      name: 'Revopoint INSPIRE 2',
      brand: 'Revopoint',
      model: 'INSPIRE 2',
      category: '3d-scanners',
      art_type: '3d-scanner',
      tone: '#4db6ac',
      released: 2025,
      price_usd: 439,
      image_url: rcdn('INSPIRE23DScanner_c9b38b48-c11f-41a3-b4b0-87c3907fac59.jpg?v=1792655963'),
      gallery: [
        rcdn('Frame2_85bbd4fe-2a80-42fb-ad9e-f6b7c10e31b7.png?v=1777025627'),
      ],
      affiliate_url: revopoint('infrared-laser-3d-scanner-inspire2'),
      affiliate_label: 'Check price at Revopoint',
      title: 'Revopoint INSPIRE 2 review: a 190 g scanner that punches above $439',
      summary: 'Infrared laser lines plus structured light in a tiny wireless body. Brilliant value, but laser mode needs a gaming-class PC and marker discipline.',
      verdict: 'The INSPIRE 2 is the cheapest scanner here and the one that surprised testers most: 3DPrinting.com called it the best scanner its reviewer had tried in this price range. You get infrared laser lines for detail, structured light for quick scans from a phone, and a 190 g body. The catch: laser mode needs a PC with an RTX 3060, and featureless objects eat markers.',
      best_for: 'Beginners and makers who want a first scanner under $500',
      pros: [
        'Hybrid: 11-line infrared laser plus infrared structured light',
        'Only 190 g, with Wi-Fi 6 and phone scanning in full-field mode',
        'Usable outdoors (up to 20,000 lux) unlike the original INSPIRE',
        'Testers merged six turntable scans of a model plane without trouble',
        'From $439 on the official store',
      ],
      cons: [
        'Laser mode needs a PC: RTX 3060 8 GB and 16 GB RAM minimum',
        'Handheld scanning felt jittery, with tracking loss on plain objects',
        'Feature-poor objects need lots of markers; removing them left holes in one test',
        'Laser mode uses Revo Metro, a different app from Revo Scan',
      ],
      specs: [
        { label: 'Technology', value: '11-line infrared laser + infrared structured light (Class 1)' },
        { label: 'Accuracy', value: 'Single-frame up to 0.05 mm; precision up to 0.03 mm' },
        { label: 'Speed', value: 'Structured light 18 fps; laser up to 90 fps (GPU) / 40 fps (CPU)' },
        { label: 'Object size', value: '20 × 20 × 20 mm to 2 × 2 × 2 m' },
        { label: 'Working distance', value: '200–400 mm indoors, 150–250 mm outdoors' },
        { label: 'Connectivity', value: 'USB-C, Wi-Fi 6, Bluetooth' },
        { label: 'Weight', value: '190 g' },
        { label: 'PC minimum (laser)', value: 'Core i7 13th gen / Ryzen 7 5800, 16 GB RAM, RTX 3060 8 GB' },
        { label: 'Price', value: 'Standard $439 · Premium $503' },
      ],
      scores: { performance: 7.9, quality: 7.9, ease: 7.8, value: 9.3 },
      body: `## What is it?

The INSPIRE 2 is Revopoint’s entry-level scanner, rebuilt. The first INSPIRE used infrared structured light only and was rated at 0.2 mm single-frame accuracy. The INSPIRE 2 adds an **11-line infrared laser** and claims up to 0.05 mm, while weighing just 190 g. It costs **$439** (Standard) or $503 (Premium) at the time of writing.

## Two scanners in one

- **Full-field (structured light) mode** works straight from a phone with the Revo Scan app. No cables, no PC. Ideal for quick scans of a sleeping cat or a vase.
- **Laser mode** gives sharper detail but needs Revo Metro on a PC, with the phone used as a remote viewer.

That split is the most important thing to understand before buying.

## Real-world scanning

3DPrinting.com’s reviewer was scanning within minutes of unboxing. Highlights:

- **Model aircraft on a turntable:** six scans merged in Revo Metro without trouble, with orange paint captured accurately, something the reviewer said scanners four times the price had missed.
- **Mobile full-field scan of a sleeping cat:** no cables, using snapshot mode for a subject that would not hold still.
- **Video-game controller case in laser mode:** this is where it struggled. The plain case was “marker hungry”, and removing the markers left large holes that made the scan unusable. The fix is a larger turntable or a marker block.

Handheld, the reviewer found tracking “a little jittery”, losing its place on objects with few features until markers were added.

## What to plan for

- **A capable PC.** Minimum for laser mode: Core i7 13th gen or Ryzen 7 5800, 16 GB RAM and an RTX 3060 8 GB. On a Mac, an M1 Pro or better.
- **Markers.** Plain, symmetrical objects need them.
- **Two apps.** Revo Scan for full-field, Revo Metro for laser.

## INSPIRE 2 vs the rivals

- **vs Revopoint POP 3 Plus ($526):** the POP 3 Plus is simpler (one mode, one app) and has optical zoom for small objects. The INSPIRE 2 is lighter, cheaper and has a laser mode for sharper detail.
- **vs EINSTAR 2 ($899):** twice the price, with blue lasers for dark and shiny parts and more mature tracking.
- **vs original INSPIRE:** the INSPIRE 2 can be used outdoors, under certain conditions, while the first one could not.

## Price and value

At $439 it is very hard to argue with. If you already own a gaming PC, it is the best-value scanner in this guide. If you do not, the structured-light mode alone is still a decent phone scanner.

## Final thoughts

The INSPIRE 2 is a great first scanner for makers who are happy to learn a little technique: markers, turntable, the right mode for the job. 3DPrinting.com gave it its “Approved” badge, and the price makes it an easy recommendation.

## Sources

- [3DPrinting.com: Revopoint INSPIRE 2 review](https://3dprinting.com/reviews/revopoint-inspire-2-review/)
- [3DTechValley: Revopoint INSPIRE 2 review](https://www.3dtechvalley.com/revopoint-inspire-2-review/) (comparison with the first INSPIRE)
- [3DVF: INSPIRE 2 hands-on](https://3dvf.com/en/redaction/an-affordable-3d-scanner-in-your-pocket-here-is-what-we-achieved-with-the-new-revopoint-inspire-2-3d-scanner/)
- [Revopoint official store: INSPIRE 2](https://global.revopoint3d.com/products/infrared-laser-3d-scanner-inspire2) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'einstar-vega-vs-revopoint-miraco',
      title: 'EINSTAR VEGA vs Revopoint MIRACO: which standalone 3D scanner?',
      products: ['einstar-vega', 'revopoint-miraco'],
      intro: 'The only two scanners in this guide that work with no PC at all. Both have a screen, a battery and onboard processing; they differ in reach, screen size and price.',
      verdict: 'Pick the EINSTAR VEGA if you scan cars, furniture or people: its Fast mode works up to 1.5 m away and testers praised its tracking on hands and engine bays. Pick the Revopoint MIRACO if you want the bigger 6-inch screen and to save $250, and you mostly scan objects from a small part to chair size. Neither is great at colour.',
      updated_at: DATE,
    },
    {
      slug: 'einstar-2-vs-revopoint-pop-3-plus',
      title: 'EINSTAR 2 vs Revopoint POP 3 Plus: best desk scanner for 3D printing',
      products: ['einstar-2', 'revopoint-pop-3-plus'],
      intro: 'Two popular desk scanners for printing replacement parts and props. The EINSTAR 2 adds blue lasers; the POP 3 Plus is infrared-only and costs about $370 less.',
      verdict: 'Choose the EINSTAR 2 if you scan mechanical parts, dark plastics or shiny metal: blue laser lines cope with them far better. Choose the POP 3 Plus if your budget is tight and you scan organic shapes like busts, toys and figurines, where its geometry is excellent for the price.',
      updated_at: DATE,
    },
    {
      slug: 'einstar-rockit-vs-einstar-vega',
      title: 'EINSTAR Rockit vs EINSTAR VEGA: laser detail or total freedom?',
      products: ['einstar-rockit', 'einstar-vega'],
      intro: 'EINSTAR’s two premium handhelds cost about the same. The Rockit adds blue lasers; the VEGA adds a screen and onboard processing.',
      verdict: 'The Rockit is the better scanner for mechanical and automotive parts if you own a strong PC (32 GB RAM, RTX 3060 or better). The VEGA is the better tool if you scan away from a desk or do not want to upgrade your computer.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-3d-scanners',
      title: 'The best 3D scanners of 2026',
      category: '3d-scanners',
      intro: 'We compared the most popular EINSTAR and Revopoint scanners using published test results, owner feedback and official specs, then picked the best one for each kind of maker. Prices are official US store prices on 30 October 2026.',
      items: [
        { slug: 'einstar-2', award: 'Best overall', note: 'Blue lasers plus infrared for under $900: the safest first serious scanner.' },
        { slug: 'einstar-vega', award: 'Best standalone', note: 'Screen, battery and onboard processing; reaches 1.5 m in Fast mode.' },
        { slug: 'einstar-rockit', award: 'Best for mechanical parts', note: 'Blue-laser detail, wireless, but needs a strong PC.' },
        { slug: 'revopoint-inspire-2', award: 'Best budget pick', note: '190 g, from $439, and testers loved it for the price.' },
        { slug: 'revopoint-pop-3-plus', award: 'Best for organic shapes', note: 'Detailed geometry and One-click Edit for busts and toys.' },
        { slug: 'revopoint-miraco', award: 'Biggest screen', note: 'A 6-inch 2K touchscreen makes field scanning easy.' },
      ],
      updated_at: DATE,
    },
  ],
};
