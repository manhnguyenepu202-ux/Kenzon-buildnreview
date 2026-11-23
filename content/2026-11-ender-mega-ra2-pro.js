// Preview batch: Creality Ender-3 V3 Mega and xTool RA2 Pro rotary. Researched 23 November 2026.
// Prices and images: store.creality.com and xtool.com/products/xtool-ra2-pro.js, read on 23 Nov 2026 (US stores, USD).
// Affiliate: Creality via Awin (merchant 97013), xTool via Impact (xtool.pxf.io). No independent long-form test found for either product,
// so both are marked "(preview)" and nothing here claims our own testing.
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const creality = (handle) => awin(97013, `https://store.creality.com/products/${handle}`);
const IMPACT = 'https://xtool.pxf.io/c/6833997/1830359/21846';
const xt = (handle) => `${IMPACT}?u=${encodeURIComponent(`https://www.xtool.com/products/${handle}`)}`;
const ccdn = (file) => `https://cdn.shopify.com/s/files/1/0893/0603/8637/files/${file}`;
const xcdn = (file) => `https://cdn.shopify.com/s/files/1/0467/7985/9095/files/${file}`;
const DATE = '2026-11-23 23:00:00';

export default {
  products: [
    {
      slug: 'creality-ender-3-v3-mega',
      name: 'Creality Ender-3 V3 Mega',
      brand: 'Creality',
      model: 'Ender-3 V3 Mega',
      category: '3d-printers',
      art_type: 'fdm-open',
      tone: '#455a64',
      released: 2026,
      price_usd: 519,
      image_url: ccdn('DTC-_1-1600X1600.png?v=1792568964'),
      gallery: [ccdn('DTC-Combo_1-1600X1600.png?v=1792568957')],
      affiliate_url: creality('ender-3-v3-mega-3d-printer'),
      affiliate_label: 'Check price at Creality',
      title: 'Creality Ender-3 V3 Mega review (preview): a 420 mm build cube for $519',
      summary: 'A large open-frame Ender with a 420 × 420 × 420 mm build volume and TPU support down to 85A, $519. Brand new, so we found no independent test yet.',
      verdict: 'The Ender-3 V3 Mega is Creality’s big-bed Ender: a 420 mm cube on an open metal frame, a Sprite 2 extruder aimed at flexible TPU, and a four-colour Combo option. It went on sale in November 2026, and we found no independent long-form test, so this preview rests on Creality’s specs and listings. Its speed claims differ between pages (300 mm/s typical, 500 mm/s peak), so wait for real test prints before treating either figure as proven. If you need one-piece large prints on a budget, it is worth watching.',
      best_for: 'Makers who print large single-piece parts, cosplay props or TPU and want a big bed for $519',
      pros: [
        '420 × 420 × 420 mm build volume, so big parts print in one piece',
        'Sprite 2 extruder aimed at TPU, 85A to 95A (Creality)',
        'High-rigidity metal frame with dual-motor drive',
        '$519 standalone; $619 Combo with four-colour CFS nano',
        'Wi-Fi, USB and Creality Cloud file transfer, 3.2 in colour touchscreen',
      ],
      cons: [
        'No independent long-form test yet (preview)',
        'Speed claims vary: Creality lists 300 mm/s typical and sponsored copy says up to 500 mm/s',
        'Large open-frame bed-slinger: heavy at 21.2 kg and about 590 mm wide',
        'Open frame, so it is not meant for ABS or other warp-prone filaments',
        'Creality does not publish nozzle and bed temperature figures on the store page',
      ],
      specs: [
        { label: 'Type', value: 'Large open-frame FDM bed-slinger' },
        { label: 'Build volume', value: '420 × 420 × 420 mm' },
        { label: 'Typical speed', value: '300 mm/s (Creality product page); up to 500 mm/s in Creality’s promotional copy' },
        { label: 'Extruder', value: 'Sprite 2, TPU 85A to 95A' },
        { label: 'Leveling', value: '81-point auto leveling (Amazon listing)' },
        { label: 'Screen and connectivity', value: '3.2 in colour touchscreen, 2.4 GHz Wi-Fi, USB, Creality Cloud' },
        { label: 'Size and weight', value: '590 × 588 × 697.5 mm; 21.2 kg (23.0 kg Combo)' },
        { label: 'Price', value: '$519 standalone (list $599); $619 Combo, 23 Nov 2026' },
      ],
      scores: { performance: 7.8, quality: 7.6, ease: 7.8, value: 8.4 },
      body: `## What is it?

The Ender-3 V3 Mega is Creality’s large-format Ender. It keeps the open bed-slinger layout of the Ender-3 V3 family but stretches the build volume to a **420 × 420 × 420 mm** cube, roughly 96 percent more bed area than the Ender-3 V3 Plus according to SimplyPrint’s comparison of Creality’s figures.

On 23 November 2026 Creality’s US store lists the standalone printer at **$519** (list $599) and the Combo, which adds the four-colour CFS nano, at **$619**.

## A note on evidence

The Mega only launched in autumn 2026. We found no independent long-form test, so this preview draws on Creality’s specs and store page, a Creality-sponsored article on All3DP and SimplyPrint’s compatibility notes. We haven’t tested it hands-on.

## What the listings say

- **Size:** a 420 mm cube, aimed at cosplay props, large one-piece parts and print farms (Creality).
- **TPU:** a Sprite 2 extruder built to feed flexible filament from 85A to 95A (Creality, SimplyPrint).
- **Frame:** a high-rigidity metal frame with a dual-motor drive; Creality’s promotional copy calls out dual Y motors for stability.
- **Speed:** the product page gives a typical speed of 300 mm/s, while the sponsored All3DP piece says up to 500 mm/s. Treat the 500 mm/s figure as a peak claim.
- **Software:** SimplyPrint notes Creality’s slicer profile uses Klipper G-code, as the Ender-3 V3 Plus does, and that Creality Print can send jobs over the local network without an account.

## Who should not buy it

- Beginners who want the easiest, cheapest start. The [Ender-3 V3 SE](/en/review/creality-ender-3-v3-se/) costs far less.
- Anyone printing ABS or ASA, which prefer an enclosure.
- Anyone short on desk space: it is about 590 mm wide and weighs 21.2 kg.

## vs rivals

- **vs [Creality Ender-3 V3 SE](/en/review/creality-ender-3-v3-se/):** a much smaller, cheaper bed. See [Ender-3 V3 SE vs A1 mini](/en/compare/creality-ender-3-v3-se-vs-bambu-lab-a1-mini/).
- **vs [Bambu Lab A1 mini](/en/review/bambu-lab-a1-mini/):** a smaller bed, but a polished, quiet, easy first printer.
- For other picks, see our [best 3D printers guide](/en/best/best-3d-printers/).

## Final thoughts

If you need to print big parts in one piece without paying enclosed-printer money, the Mega is worth watching. We will update this page when independent tests of print quality and real-world speed appear.

## Sources

- [Creality store: Ender-3 V3 Mega](https://store.creality.com/products/ender-3-v3-mega-3d-printer) (price and features)
- [Creality: Ender-3 V3 Mega product page](https://www.creality.com/products/ender-3-v3-mega) (specs)
- [All3DP: Creality Ender-3 V3 Mega (sponsored content by Creality)](https://all3dp.com/4/creality-ender-3-v3-mega-print-420-mm-single-piece-models-at-500-mm-s-without-gluing/)
- [SimplyPrint: Ender-3 V3 Mega compatibility](https://simplyprint.io/ja/compatibility/creality-ender-3-v3-mega)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'xtool-ra2-pro',
      name: 'xTool RA2 Pro Rotary Attachment',
      brand: 'xTool',
      model: 'RA2 Pro',
      category: 'maker-addons',
      art_type: 'cnc-module',
      tone: '#263238',
      price_usd: 269,
      image_url: xcdn('RA2_Pro.jpg?v=1742947213'),
      gallery: [xcdn('4-in-1_Rotary.jpg?v=1742947213'), xcdn('RA2_Pro_VS_RA2_Pro_Deluxe_1.jpg?v=1742947213')],
      affiliate_url: xt('xtool-ra2-pro'),
      affiliate_label: 'Check price at xTool',
      title: 'xTool RA2 Pro review (preview): one rotary for tumblers, spheres and rings',
      summary: 'A 4-in-1 rotary that engraves cylinders, spheres, rings and odd-shaped objects on most xTool lasers, $269. We found no independent test; riser needed for large items.',
      verdict: 'The RA2 Pro packs four rotary modes (roller, chuck, sphere and ring) into one $269 attachment that xTool says works with its D, M, F, S and P series lasers. That covers tumblers, mugs, balls and rings without buying separate rotaries. Owners on xTool’s store praise the build and the easy plug-in setup, but we found no independent long-form test, and the largest diameters need extra risers. If you own an xTool and engrave drinkware or jewellery, it is the obvious accessory to look at.',
      best_for: 'xTool owners who engrave tumblers, mugs, balls and rings',
      pros: [
        'Four rotary modes in one attachment: roller, chuck, sphere and ring',
        'Roller handles 3 to 198 mm, chuck 0 to 100 mm, sphere 25 to 100 mm, ring 11 to 70 mm (xTool)',
        'Works with many xTool lasers: D1 Pro, S1, P2/P2S, M1, M1 Ultra, F1, F1 Lite, F1 Ultra, F2, F2 Ultra and F2 Ultra UV',
        'Anodised aluminium build; owner reviews on xTool’s store call it sturdy and easy to set up',
        'Works with xTool Creative Space, LightBurn and LightGRBL',
      ],
      cons: [
        'No independent long-form test found (preview)',
        'Largest roller diameters need additional risers, sold separately',
        'Accessory Kit (26° adjust module, positioning module, limit piece) is only in the Deluxe version',
        'Adds clamping and focus work compared with flat engraving',
      ],
      specs: [
        { label: 'Modes', value: 'Roller, chuck, sphere and ring' },
        { label: 'Roller range', value: '3 to 198 mm (additional risers for larger diameters)' },
        { label: 'Chuck range', value: '0 to 100 mm' },
        { label: 'Sphere range', value: '25 to 100 mm' },
        { label: 'Ring range', value: '11 to 70 mm' },
        { label: 'Size and weight', value: '321 × 138 × 105 mm, 1.96 kg (Deluxe 2.61 kg)' },
        { label: 'Software', value: 'xTool Creative Space, LightBurn, LightGRBL' },
        { label: 'Price', value: '$269 on xTool’s US store, 23 Nov 2026 (Deluxe sold separately)' },
      ],
      scores: { performance: 8.0, quality: 8.2, ease: 8.0, value: 8.0 },
      body: `## What is it?

The RA2 Pro is xTool’s rotary attachment. It spins a round object under the laser so you can engrave all the way around a tumbler, mug, ball or ring. xTool calls it the world’s first 4-in-1 rotary, because one unit offers **roller, chuck, sphere and ring** modes, where most rotaries cover only one or two.

It costs **$269** on xTool’s US store on 23 November 2026. A **Deluxe** version adds an Accessory Kit with a 26° adjust module, a laser positioning module and a limit piece.

## A note on evidence

We found no independent long-form test of the RA2 Pro. This preview draws on xTool’s specs, its support FAQ, retailer listings and owner comments on xTool’s store. We haven’t tested it hands-on.

## Which xTool lasers does it fit?

xTool’s support FAQ lists the F2 Ultra series, P series, S1, F1 Ultra, F2, F1, F1 Lite, M1, M1 Ultra and D series. Check your exact model on the product page before you buy. Portable and compact models such as the [xTool F2](/en/review/xtool-f2/) are on that list too.

## What the specs mean

- **Roller (3 to 198 mm):** for tumblers, cans and bottles. The upper range needs additional risers.
- **Chuck (0 to 100 mm):** for objects with a round or non-round base, such as a bottle with a wide base.
- **Sphere (25 to 100 mm):** for balls and spherical gifts.
- **Ring (11 to 70 mm):** for rings and bracelets.

## What owners say

Customers on xTool’s store describe the build as heavy duty and the setup as easy: plug it in and send the job. One uses it with an F1 to engrave rings with good results, another with the F2 Ultra. These are owner comments on the seller’s own site, so weigh them accordingly.

## Who should not buy it

- Anyone who only engraves flat material.
- Owners of non-xTool lasers: xTool lists compatibility only for its own machines.
- Anyone who wants to engrave very large vessels without buying risers.

## vs rivals

- **vs a single-purpose roller rotary:** cheaper at the start, but the RA2 Pro adds chuck, sphere and ring modes.
- For a laser to pair with it, see our [best xTool laser engravers guide](/en/best/best-xtool-laser-engravers/), including the [xTool S1](/en/review/xtool-s1/) and [xTool F1 Ultra](/en/review/xtool-f1-ultra/).

## Final thoughts

For xTool owners who personalise drinkware, balls or jewellery, the RA2 Pro replaces three or four separate rotaries with one attachment. We will update this page when independent tests appear.

## Sources

- [xTool store: RA2 Pro](https://www.xtool.com/products/xtool-ra2-pro) (price, ranges, size)
- [xTool support: RA2 Pro FAQ](https://support.xtool.com/article/3866) (compatible machines)
- [xTool blog: Introducing the RA2 Pro](https://xtool.com/blogs/news/introducing-xtool-ra2-pro)
- [MatterHackers: xTool RA2 Pro](https://www.matterhackers.com/store/l/xtool-ra2-pro-rotary-attachment) (retailer listing)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],
  comparisons: [],
  guides: [],
};
