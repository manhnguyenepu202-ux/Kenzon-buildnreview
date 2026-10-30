// Camera lenses: SIRUI. Researched October 2026.
// Prices and images: official store (store.sirui.com), 30 Oct 2026.
// Optical findings: the independent reviews listed in each article's Sources section.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const sirui = (handle) => awin(76364, `https://store.sirui.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0449/9344/6037/files/${file}`;
const DATE = '2026-10-30 09:00:00';

export default {
  categories: [
    {
      slug: 'camera-lenses', name: 'Cameras & Lenses', group_name: 'Photography', sort_order: 8, art_type: 'camera-lens', tone: '#fb8c00',
      blurb: 'Affordable autofocus lenses and camera gear for portraits, video and travel, scored on autofocus, image quality, handling and value.',
      score_labels: { performance: 'Autofocus', quality: 'Image quality', ease: 'Handling and build', value: 'Value' },
      sponsor: 'sirui-aurora-85mm-f1-4',
    },
  ],

  products: [
    {
      slug: 'sirui-aurora-85mm-f1-4',
      name: 'SIRUI Aurora 85mm F1.4',
      brand: 'SIRUI',
      model: 'Aurora 85mm F1.4 AF',
      category: 'camera-lenses',
      art_type: 'camera-lens',
      tone: '#fb8c00',
      released: 2024,
      price_usd: 449,
      featured: true,
      image_url: cdn('18_beff05e4-af6d-49e5-926c-0c49c615b2df.jpg?v=1762397174'),
      gallery: [
        cdn('1_a7ef024a-1098-4e06-aa5d-32cc0cffcf41.jpg?v=1762397176'),
        cdn('2_ec7bdd70-c852-44f0-98d4-35964db2b3a6.jpg?v=1762397179'),
      ],
      affiliate_url: sirui('sirui-aurora-series-85mm-full-frame-autofocus-lens'),
      affiliate_label: 'Check price at SIRUI',
      title: 'SIRUI Aurora 85mm F1.4 review: a sharp full-frame portrait lens for $449',
      summary: 'A full-frame f/1.4 autofocus portrait lens for Sony E, Nikon Z, L-mount and Fujifilm X. Sharp centre wide open, beautiful bokeh, autofocus that trails native lenses.',
      verdict: 'For $449, the Aurora 85mm gives portrait shooters f/1.4 depth of field, a sharp centre wide open and smooth, round bokeh from 15 aperture blades. Autofocus is its weakest point: fine for portraits, slower than Sony’s GM II or Sigma’s Art lenses, and one Fujifilm tester needed a free calibration. If you shoot people rather than sport, it is outstanding value.',
      best_for: 'Portrait photographers on a budget',
      pros: [
        'Full-frame f/1.4 for $449 (list $599)',
        'Sharp in the centre wide open; peaks at f/2.8–f/4',
        '15 aperture blades give round, smooth out-of-focus highlights',
        'Solid build with a smooth aperture ring and sturdy hood',
        'Four mounts: Sony E, Nikon Z, L-mount, Fujifilm X',
      ],
      cons: [
        'Stepping-motor autofocus is slower than native and Sigma Art lenses',
        'Corners softer than expected until f/4',
        'Fujifilm compatibility still maturing; one test copy needed calibration',
        'Some flare and ghosting into bright light',
      ],
      specs: [
        { label: 'Format', value: 'Full frame' },
        { label: 'Mounts', value: 'Sony E, Nikon Z, L-mount, Fujifilm X' },
        { label: 'Aperture', value: 'f/1.4–f/16, 15 blades' },
        { label: 'Optics', value: '14 elements in 9 groups' },
        { label: 'Autofocus', value: 'Stepping motor (STM)' },
        { label: 'Minimum focus', value: '0.85 m, 0.12× magnification' },
        { label: 'Filter', value: '67 mm' },
        { label: 'Size / weight', value: '80.3 × 101.7 mm, about 550 g' },
        { label: 'Price', value: '$449 (list $599)' },
      ],
      scores: { performance: 7.6, quality: 8.6, ease: 8.5, value: 9.1 },
      body: `## What is it?

The Aurora is SIRUI’s first full-frame autofocus portrait lens, and it lands in a crowded but expensive category. Native 85mm f/1.4 lenses from Sony, Nikon or Sigma cost two to four times as much. SIRUI asks **$449** at the time of writing (list $599), in Sony E, Nikon Z, L-mount and Fujifilm X versions.

## Technical overview

- 14 elements in 9 groups, 15 aperture blades.
- f/1.4 to f/16 with an aperture ring.
- Minimum focus 0.85 m (0.12×), 67 mm filters.
- About 550 g, 80.3 × 101.7 mm.
- Stepping-motor (STM) autofocus.

## Image quality

Reviewers broadly agree it is sharp for the money:

- **CineD**, on a Sony a1 II, found it sharp even at f/1.4.
- **Fstoppers**, summarising Dylan Goldby’s test on Fujifilm, called the wide-open centre impressive, with sharpness rising by f/2 and peaking at f/2.8–f/4. Corners were softer than expected until f/4.
- **PetaPixel** rated its sharpness highly, comparing its look to Sony’s G Master lenses at a fraction of the price.

Chromatic aberration is present but normal for an f/1.4 lens. Flare and ghosting show up in extreme backlight. The 15-blade aperture keeps highlights round, and testers describe the rendering as less clinical than modern native lenses, with an older, more characterful look.

## Autofocus

This is the honest trade-off:

- PetaPixel describes the motor as a more pedestrian STM design.
- Fstoppers says AF is generally fast and accurate, but does not match native lenses or the Sigma Art series.
- Dustin Abbott notes Sony’s 85mm GM II, with two XD linear motors, is much faster.
- On Fujifilm, the test copy had an **initial accuracy problem**. SIRUI calibrated it for free, after which it focused quickly and reliably. AF slowed when stopped down, and disabling face detection helped. The X-T5 and X-H2S were the most reliable bodies.

For posed portraits and weddings, it is fine. For running kids or sport, a native lens is safer.

## Aurora 85mm vs the rivals

- **vs Sony FE 85mm F1.4 GM II:** much faster autofocus and better corners, at several times the price.
- **vs Sigma 85mm F1.4 DG DN Art:** faster, more consistent AF; also much more expensive.
- **vs SIRUI Sniper 56mm F1.2:** the APS-C option, cheaper again, but softer wide open. See our [Sniper review](/en/review/sirui-sniper-56mm-f1-2/).

## Price and value

At $449, the Aurora is one of the cheapest ways to get full-frame f/1.4 portraits with autofocus. Update the firmware before your first shoot.

## Final thoughts

If you photograph people who stand still long enough to smile, the Aurora 85mm delivers images that look far more expensive than they were. Accept slower AF, and it is a bargain.

## Sources

- [Fstoppers: Sirui Aurora 85mm f/1.4 review, sharp glass with quirks](https://fstoppers.com/reviews/sirui-aurora-85mm-f14-review-sharp-glass-quirks-710996)
- [PetaPixel: Sirui Aurora 85mm f/1.4 review](https://petapixel.com/2025/06/30/sirui-aurora-85mm-f-1-4-review-g-master-vibes-at-a-fraction-of-the-price)
- [CineD: Aurora 85mm on the Sony a1 II](https://www.cined.com/sirui-aurora-85mm-full-frame-autofocus-f1-4-lens-on-the-new-sony-a1-ii-review/)
- [Dustin Abbott: Sirui Aurora 85mm F1.4 review](https://dustinabbott.net/2024/12/sirui-aurora-85mm-f1-4-review/)
- [SIRUI official store: Aurora 85mm](https://store.sirui.com/products/sirui-aurora-series-85mm-full-frame-autofocus-lens) (price and mounts)`,
      published_at: DATE,
      updated_at: DATE,
    },

    {
      slug: 'sirui-sniper-56mm-f1-2',
      name: 'SIRUI Sniper 56mm F1.2',
      brand: 'SIRUI',
      model: 'Sniper 56mm F1.2 APS-C AF',
      category: 'camera-lenses',
      art_type: 'camera-lens',
      tone: '#ffa726',
      released: 2023,
      price_usd: 279,
      image_url: cdn('3_9542a978-e17e-4d32-b4cc-6d62f56c654f.jpg?v=1762398289'),
      gallery: [
        cdn('5_6a6ab3ba-f5ce-4ffc-bde5-d2f28aa0eed2.jpg?v=1762398291'),
        cdn('7_282b16ce-93d8-44eb-9172-7b74f1132162.jpg?v=1762398294'),
      ],
      affiliate_url: sirui('sirui-sniper-series-f1-2-aps-c-autofocus-lens-set'),
      affiliate_label: 'Check price at SIRUI',
      title: 'SIRUI Sniper 56mm F1.2 review: dreamy f/1.2 portraits on a budget',
      summary: 'An APS-C f/1.2 autofocus portrait lens for Sony E, Fujifilm X and Nikon Z at $279. Soft and glowing wide open, sharp by f/2.8, with almost no focus breathing.',
      verdict: 'The Sniper 56mm is a lens with two personalities: at f/1.2 it glows, with halation that one reviewer compared to a built-in diffusion filter; by f/2.8 it is properly sharp. Autofocus is smooth and reliable in daylight with current firmware, focus breathing is almost non-existent for video, and it costs $279. Pixel-peepers should look at Sigma’s 56mm f/1.4 instead.',
      best_for: 'APS-C portrait and video shooters who like a soft, cinematic look',
      pros: [
        'f/1.2 on APS-C (85mm equivalent) for $279 (list $349)',
        'Almost no focus breathing: great for video',
        'Smooth, reliable AF in good light with current firmware',
        'USB-C port for firmware updates on the mount',
        'Carbon fibre and aluminium styling in three colours',
      ],
      cons: [
        'Soft with strong halation at f/1.2; sharp only from about f/2.8',
        'Noticeable chromatic aberration wide open, gone by f/4–f/5.6',
        'AF hunts in low light and on some unsupported bodies',
        'No weather sealing and no aperture ring',
      ],
      specs: [
        { label: 'Format', value: 'APS-C (about 85mm full-frame equivalent)' },
        { label: 'Mounts', value: 'Sony E, Fujifilm X, Nikon Z' },
        { label: 'Aperture', value: 'f/1.2–f/16, 11 blades' },
        { label: 'Optics', value: '12 elements, including ED glass' },
        { label: 'Autofocus', value: 'Stepping motor (STM), eye AF supported' },
        { label: 'Filter', value: '58 mm' },
        { label: 'Weight', value: 'About 420–460 g depending on mount and hood' },
        { label: 'Firmware', value: 'USB-C port on the mount' },
        { label: 'Price', value: '$279 per lens (list $349)' },
      ],
      scores: { performance: 7.4, quality: 7.3, ease: 7.8, value: 9.2 },
      body: `## What is it?

The Sniper series was SIRUI’s first autofocus line: 23mm, 33mm and 56mm lenses, all f/1.2, all the same size, for APS-C cameras. The 56mm is the portrait lens of the set, equivalent to about 85mm on full frame. Each lens costs **$279** on the official store at the time of writing (list $349).

## Technical overview

- f/1.2 to f/16, 11 aperture blades, 58 mm filters.
- 12 elements including ED glass.
- Stepping-motor AF with eye-AF support.
- A USB-C port on the mount for firmware updates.
- No weather sealing and no aperture ring.

## Image quality: two lenses in one

Every review lands in the same place:

- **At f/1.2:** soft, lower contrast, strong halation. Expert Photography found the 56mm the softest of the three Sniper lenses, specifically blurry at f/1.2. CineD described the glow as like a built-in 1/8 Pro-Mist filter.
- **From f/2.8:** sharp. Australian Photography found image quality pretty good from f/5.6 to f/11.
- **Chromatic aberration:** reddish-purple fringing at f/1.2–f/1.4, blue-green at f/1.8, almost gone by f/4–f/5.6.
- **Distortion:** very slight pincushion.
- **Bokeh:** slightly oval highlights, depending on the light source.

If you like a dreamy, cinematic portrait look, f/1.2 is a feature. If you want clinical sharpness wide open, it is a flaw.

## Autofocus and video

- **Expert Photography (Sony FX30):** smooth and reliable in daylight with the latest firmware. Focus breathing almost non-existent. Hunting in darker scenes was put down to the camera.
- **Australian Photography (Fujifilm X-T2):** not the fastest, about on par with older Fujinon lenses; usable in good light, may hunt in low light and struggle with action.
- **CineD:** a mixed bag. Mostly fine on the X-H2, but constantly searching on an X-S20 that was not on SIRUI’s supported list at the time.

Update the firmware before you start. The test unit at Expert Photography shipped on 1.0.7, with 1.1.2 available.

## Sniper 56mm vs the rivals

- **vs Fujifilm XF 56mm F1.2 R WR:** better edges and image quality, weather sealed, but several times the price.
- **vs Sigma 56mm F1.4 DC DN:** exceptionally sharp, though with its own CA and distortion. The better choice for detail.
- **vs Viltrox 56mm F1.4:** cheaper still, but f/1.4 instead of f/1.2.
- **vs SIRUI Aurora 85mm F1.4:** the full-frame option, sharper wide open. [Read the Aurora review](/en/review/sirui-aurora-85mm-f1-4/).

## Price and value

Australian Photography scored it 4/5 for build, 3.5/5 for image quality and 5/5 for value. At $279, we agree with that balance.

## Final thoughts

Buy the Sniper 56mm for its look, its price and its video-friendly lack of breathing. Stop down to f/2.8 when you need sharpness, and keep the firmware current.

## Sources

- [Expert Photography: SIRUI Sniper AF 3-lens set review](https://expertphotography.com/sirui-sniper-af-3-lens-set-review)
- [Australian Photography: Sirui Sniper 56mm f1.2 review](https://www.australianphotography.com/gear/review-sirui-sniper-56mm-f1-2-lens)
- [CineD: SIRUI Sniper review](https://www.cined.com/sirui-sniper-review-budget-friendly-fast-autofocus-lenses-with-reasonable-optical-quality/)
- [SIRUI official store: Sniper series](https://store.sirui.com/products/sirui-sniper-series-f1-2-aps-c-autofocus-lens-set) (price and mounts)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'sirui-aurora-85mm-vs-sirui-sniper-56mm',
      title: 'SIRUI Aurora 85mm F1.4 vs Sniper 56mm F1.2: which budget portrait lens?',
      products: ['sirui-aurora-85mm-f1-4', 'sirui-sniper-56mm-f1-2'],
      intro: 'Both give an 85mm-equivalent portrait view, one on full frame, one on APS-C. The Aurora costs $449; the Sniper $279.',
      verdict: 'Pick the Aurora 85mm if you shoot full frame or want a sharp image wide open. Pick the Sniper 56mm if you shoot APS-C, love a soft, glowing f/1.2 look or film video, where its almost-zero focus breathing shines.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-budget-portrait-lenses',
      title: 'The best budget portrait lenses of 2026',
      category: 'camera-lenses',
      intro: 'Autofocus portrait lenses under $500 that we would recommend, based on published sharpness and autofocus tests. Prices are official store prices on 30 October 2026.',
      items: [
        { slug: 'sirui-aurora-85mm-f1-4', award: 'Best full-frame portrait lens', note: 'Sharp centre at f/1.4 and 15-blade bokeh for $449.' },
        { slug: 'sirui-sniper-56mm-f1-2', award: 'Best APS-C portrait lens', note: 'Dreamy f/1.2 look and no focus breathing for $279.' },
      ],
      updated_at: DATE,
    },
  ],
};
