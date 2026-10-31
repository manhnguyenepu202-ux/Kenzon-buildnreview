// SainSmart (Genmitsu) batch: Cubiko, 4040-PRO MAX, PROVerXL 4030 V2. Researched 1 November 2026.
// Prices and images: official store (sainsmart.com products.json and product pages), 1 Nov 2026.
// Test results: the reviews listed in each article's Sources section. Many Genmitsu reviews are published or
// sponsored by SainSmart itself; the articles say so where that applies.
// Skipped: 3018-PROVer V2 and Kiosk laser (no longer sold new on the store), 3018 REX (pre-order), 4030S (no review).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const sainsmart = (handle) => awin(59085, `https://www.sainsmart.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/1978/9859/files/${file}`;
const DATE = '2026-11-01 03:00:00';
const LABEL = 'Check price at SainSmart';

export default {
  categories: [
    {
      slug: 'cnc-routers', name: 'Desktop CNC Routers', group_name: 'DIY', sort_order: 11, art_type: 'cnc-module', tone: '#5d4037',
      blurb: 'Desktop CNC routers and mills for wood, plastics, PCBs and light aluminium, scored on rigidity, spindle power, ease of setup and value.',
      score_labels: { performance: 'Cutting power and speed', quality: 'Rigidity and accuracy', ease: 'Setup and software', value: 'Value' },
      sponsor: 'genmitsu-4040-pro-max',
    },
  ],

  products: [
    {
      slug: 'genmitsu-cubiko',
      name: 'Genmitsu Cubiko',
      brand: 'SainSmart',
      model: 'Cubiko',
      category: 'cnc-routers',
      art_type: 'cnc-module',
      tone: '#6d4c41',
      released: 2025,
      price_usd: 499,
      featured: true,
      image_url: cdn('IDEA1080_10801_8f5b393b-eccf-442e-8d0f-b8b08b7ab82b.webp?v=1789628553'),
      gallery: [cdn('Cubiko-12002.png?v=1741315636'), cdn('Cubiko-metal-01.jpg?v=1759980054')],
      affiliate_url: sainsmart('cubiko'),
      affiliate_label: LABEL,
      title: 'Genmitsu Cubiko review: an enclosed, plug-and-play desktop CNC for PCBs and small parts',
      summary: 'A fully assembled, enclosed mini CNC with auto Z-probing, Wi-Fi and a 150 × 110 × 40 mm work area, $499. Quiet and tidy; tiny work area and a light spindle.',
      verdict: 'The Cubiko is the most beginner-friendly CNC we cover: it arrives assembled, the enclosure keeps dust and noise in, and auto-probing with surface mapping makes PCB milling practical. Accuracy started at 0.2 mm over 50 mm and could be tuned below 0.09 mm. The work area is tiny and the spindle is only good for light cuts in hardwood or aluminium. For PCBs, engraving and small parts on a desk, it is a neat machine.',
      best_for: 'Beginners and electronics makers who want a clean, quiet desktop CNC',
      pros: [
        'Arrives fully assembled: attach the feet and go',
        'Enclosed: quieter (about 60 dB claimed), less dust, safer if a bit breaks',
        'Auto Z-probe and surface mapping for warped PCBs',
        'Control from the front panel, Wi-Fi app or USB',
        'Add-ons: 4th axis ($149), diode laser and pen modules',
      ],
      cons: [
        'Very small 150 × 110 × 40 mm work area',
        'Light spindle (75–96W reported): shallow passes only in hardwood and aluminium',
        'Out-of-box accuracy 0.2 mm over 50 mm until calibrated',
        'One reviewer saw zeroing fail between roughing and finishing passes',
        'Pricier than open-frame machines with far bigger beds',
      ],
      specs: [
        { label: 'Work area', value: '150 × 110 × 40 mm' },
        { label: 'Spindle', value: '75W (launch spec; 96W in later listings), up to ~10,000 RPM' },
        { label: 'Accuracy', value: '±0.1 mm claimed' },
        { label: 'Enclosure', value: 'Fully enclosed, ~60 dB claimed' },
        { label: 'Control', value: 'Front controller, Wi-Fi app, USB' },
        { label: 'Machine size', value: '300 × 335 × 318 mm' },
        { label: 'Price', value: '$499' },
      ],
      scores: { performance: 6.4, quality: 7.6, ease: 9.0, value: 7.8 },
      body: `## What is it?

The Cubiko is Genmitsu’s enclosed mini CNC. It started on Kickstarter in early 2025 and is now sold on SainSmart’s store for **$499**. It arrives fully assembled inside a box with a window, and is aimed at desks, classrooms and electronics benches rather than garages.

## Setup and control

Setup means attaching four foam feet. You can run jobs from the front-panel controller, from a phone over Wi-Fi, or from a PC over USB. An automatic Z-probe sets tool height, and surface mapping measures a warped PCB so the machine can follow it.

## How it performs

- **Explore & Renovate** used it for weeks on maple engraving, FR4 PCB milling with surface mapping on a warped board, and light aluminium engraving. Auto-probing saved 5–10 minutes per job. Score: 4.5/5, though the review is affiliate-linked and gives few measurements.
- **SainSmart’s own review series** measured 0.2 mm deviation over 50 mm in X and Y out of the box, reduced to under 0.09 mm after calibration. It also hit a case where the machine didn’t zero correctly when switching from roughing to finishing.
- A maker’s PCB-milling review (published on SainSmart’s blog) concluded it can be a capable home PCB mill if you treat CNC as a skill to learn, not a push-button gadget.

## Limits

The 150 × 110 × 40 mm work area fits PCBs, coasters, name plates and small parts, not signs. The spindle is light: launch specs said 75W at up to 10,000 RPM, while a later review lists 96W at 9,000 RPM. Either way, plan shallow passes in hardwood and aluminium.

## Who should not buy it

- Woodworkers who want signs or furniture parts: the 4040-PRO MAX is far bigger.
- Anyone milling aluminium regularly.

## vs rivals

- **vs Genmitsu 4040-PRO MAX ($949):** 400 × 400 mm bed and a 710W trim router, open frame and much louder. See [Cubiko vs 4040-PRO MAX](/en/compare/genmitsu-cubiko-vs-genmitsu-4040-pro-max/).
- **vs open 3018-class kits:** bigger area for less money, but you assemble them and they make a mess.

## Final thoughts

The Cubiko trades size for convenience. If your projects fit in a 15 × 11 cm area, it is the easiest way to start with CNC.

## Sources

- [Explore & Renovate: Genmitsu Cubiko hands-on verdict](https://exploreandrenovate.com/genmitsu-cubiko-cnc-worth-buying/) (4.5/5, affiliate links)
- [SainSmart blog: Cubiko full review, part 1](https://www.sainsmart.com/blogs/news/part-1-genmitsu-cubiko-full-review-from-unboxing-to-projects-the-new-benchmark-for-desktop-cnc) (published by the manufacturer)
- [SainSmart blog: milling PCBs at home with the Cubiko](https://www.sainsmart.com/blogs/news/milling-pcbs-at-home-with-genmitsu-cubiko-a-makers-honest-review) (published by the manufacturer)
- [Notebookcheck: Cubiko launch and specs](https://www.notebookcheck.net/Genmitsu-Cubiko-Desktop-CNC-machine-available-with-early-bird-discount-supports-mill-bits-and-laser.958634.0.html)
- [SainSmart official store: Cubiko](https://www.sainsmart.com/products/cubiko) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'genmitsu-4040-pro-max',
      name: 'Genmitsu 4040-PRO MAX',
      brand: 'SainSmart',
      model: '4040-PRO MAX',
      category: 'cnc-routers',
      art_type: 'cnc-module',
      tone: '#795548',
      released: 2024,
      price_usd: 949,
      featured: true,
      image_url: cdn('4040-PROMAX202601.webp?v=1768802204'),
      gallery: [cdn('4040PM-2026-021.webp?v=1768802204'), cdn('4040PM-2026-031.webp?v=1768802204')],
      affiliate_url: sainsmart('4040-pro-max'),
      affiliate_label: LABEL,
      title: 'Genmitsu 4040-PRO MAX review (preview): a 400 mm desktop CNC with a 710W router',
      summary: 'An open-frame desktop CNC with 400 × 400 mm bed, linear rails on X and Z and a 710 W trim router, $949. Plenty of power for wood; metal-cutting claims are unproven.',
      verdict: 'The 4040-PRO MAX upgrades Genmitsu’s popular 4040-PRO with linear rails and a 710W trim router, giving a 400 × 400 mm bed with real power for wood, signs and inlays. Woodworking Insights found it powerful enough for the job, but the perforated spoilboard was awkward with clamps. Most coverage is vendor-published or sponsored and drive type isn’t stated, so treat this as a preview. Good value for hobby woodworkers.',
      best_for: 'Hobby woodworkers making signs, inlays and small parts',
      pros: [
        '400 × 400 mm work area',
        '710W trim router, 6,500–30,000 RPM, 65 mm mount',
        'Linear rails on X and Z for better stability',
        'Optional offline controller and wireless probe',
        'Bundle with Vectric VCarve Desktop available ($1,249)',
      ],
      cons: [
        'Mostly vendor-published or sponsored reviews (preview)',
        'Perforated spoilboard holes don’t always line up with clamps',
        'Trim router: no spindle-speed control from G-code',
        'Only 78 mm of Z travel',
        'Drive type (open or closed loop) not stated; aluminium cutting unproven',
      ],
      specs: [
        { label: 'Work area', value: '400 × 400 × 78 mm' },
        { label: 'Spindle', value: '710W trim router, 6,500–30,000 RPM' },
        { label: 'Motion', value: 'Linear rails on X and Z' },
        { label: 'Frame', value: 'Aluminium, open' },
        { label: 'Price', value: 'Machine $949 · with Vectric VCarve Desktop $1,249' },
      ],
      scores: { performance: 8.0, quality: 7.4, ease: 7.2, value: 8.4 },
      body: `## What is it?

The 4040-PRO MAX is the upgraded version of Genmitsu’s 4040-PRO. It keeps the 400 × 400 mm bed but adds linear rails on the X and Z axes and replaces the small 775 spindle with a 710W trim router.

It costs **$949** on SainSmart’s store, or $1,249 with Vectric VCarve Desktop.

## A note on evidence

Independent hands-on reviews are scarce. SainSmart publishes its own review posts, and at least one video review is labelled as sponsored. Woodworking Insights tested it, and Fabrication Machines scored it from specs. Treat this as a preview.

## What reviewers report

- **Woodworking Insights** found it a nice size with more than enough power for its jobs, and noted the perforated spoilboard’s holes didn’t always fall where the clamps were needed.
- **Fabrication Machines** points out the bed suits small parts, signs, inlays and jewellery-scale work, that Genmitsu doesn’t say whether the steppers are closed loop, and that aluminium cutting is unproven from the specs. Because the spindle is a trim router, there’s no speed feedback or G-code speed control.
- The linear rails are the main upgrade; reviewers say they noticeably improve stability over the base 4040-PRO.

## Lessons from the 4040-PRO

MakerHacks’ review of the cheaper 4040-PRO is useful background: the Y axis could drift out of square because only one side had end stops, the Z wasn’t rigid enough to stay trammed, and the stock software wasn’t pre-configured. The MAX’s linear rails target the rigidity issue; check squareness during setup anyway.

## Who should not buy it

- Anyone who mainly cuts aluminium: look for a closed-loop, ball-screw machine like the PROVerXL 4030 V2.
- Anyone without space or dust extraction: an open router makes a lot of noise and chips.

## vs rivals

- **vs PROVerXL 4030 V2 ($1,399):** closed-loop motors and ball screws, smaller 400 × 300 bed. See [4040-PRO MAX vs 4030 V2](/en/compare/genmitsu-4040-pro-max-vs-genmitsu-proverxl-4030-v2/).
- **vs Sienci LongMill:** bigger and more capable for the money, but hours of assembly (MakerHacks).
- **vs Genmitsu Cubiko ($499):** enclosed and tiny.

## Final thoughts

For hobby woodworking at desktop scale, the 4040-PRO MAX looks like strong value. We’ll update this review when more independent tests appear.

## Sources

- [Woodworking Insights: Genmitsu 4040-PRO MAX tested](https://woodworkinginsights.com/sainsmart-genmitsu-4040-pro-max-cnc-router-tested-and-reviewed/)
- [Fabrication Machines: 4040-PRO MAX specs and analysis](https://fabricationmachines.com/machines/genmitsu-4040-pro-max)
- [MakerHacks: Genmitsu 4040 Pro review](https://www.makerhacks.com/genmitsu4040-review/) (base model; unit supplied)
- [SainSmart blog: from zero to CNC with the 4040-PRO MAX](https://www.sainsmart.com/blogs/news/from-zero-to-cnc-our-adventure-with-the-genmitsu-4040-pro-max) (published by the manufacturer)
- [SainSmart official store: 4040-PRO MAX](https://www.sainsmart.com/products/4040-pro-max) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'genmitsu-proverxl-4030-v2',
      name: 'Genmitsu PROVerXL 4030 V2',
      brand: 'SainSmart',
      model: 'PROVerXL 4030 V2',
      category: 'cnc-routers',
      art_type: 'cnc-module',
      tone: '#4e342e',
      released: 2023,
      price_usd: 1399,
      image_url: cdn('03-1_f0c69f20-54f5-4537-b035-115e339da2d0.jpg?v=1686894714'),
      gallery: [],
      affiliate_url: sainsmart('proverxl-4030-v2'),
      affiliate_label: LABEL,
      title: 'Genmitsu PROVerXL 4030 V2 review (preview): closed-loop ball-screw CNC for serious hobbyists',
      summary: 'A rigid desktop CNC with closed-loop NEMA 23 motors, 1204 ball screws and a 400 × 300 × 110 mm work area, $1,399. Precise in hardwood; the 400 W spindle limits deep cuts.',
      verdict: 'The PROVerXL 4030 V2 is Genmitsu’s precision desktop router: closed-loop motors that catch lost steps, ball screws with no backlash and a stiff frame. It cut hardwood consistently in SainSmart’s tests, with some edge chatter, and rapids were raised from 5,000 to 6,000 mm/min. The 400W spindle is the bottleneck for deep oak slots or aluminium. Most hands-on coverage is from SainSmart, so this is a preview.',
      best_for: 'Hobbyists upgrading from a 3018 who want precision and rigidity',
      pros: [
        'Closed-loop NEMA 23 steppers detect lost steps',
        '1204 ball screws: no backlash',
        'Rigid metal frame and 110 mm Z travel',
        '400 × 300 mm work area',
        'Assembly reported as straightforward',
      ],
      cons: [
        'Most hands-on reviews are published by SainSmart (preview)',
        '400W spindle limits deep hardwood slots and aluminium',
        'Some chatter marks on edges in hardwood',
        'Stalled at 7,000 mm/min rapids; 6,000 is the practical limit',
        '$1,399 list price; value depends on discounts',
      ],
      specs: [
        { label: 'Work area', value: '400 × 300 × 110 mm' },
        { label: 'Spindle', value: '400W, up to 10,000 RPM' },
        { label: 'Motors', value: 'NEMA 23 closed-loop steppers' },
        { label: 'Drive', value: '1204 ball screws' },
        { label: 'Controller', value: 'GRBL 1.1h' },
        { label: 'Price', value: '$1,399 (machine only)' },
      ],
      scores: { performance: 7.6, quality: 8.8, ease: 7.6, value: 7.4 },
      body: `## What is it?

The PROVerXL 4030 V2 is Genmitsu’s precision desktop CNC. Where the 4040 series uses lead screws and open-loop motors, the 4030 V2 has ball screws and closed-loop NEMA 23 steppers that detect missed steps. It has a 400 × 300 mm work area with 110 mm of Z travel and a 400W spindle.

It costs **$1,399** (machine only) on SainSmart’s store on 1 November 2026. SainSmart also sells a newer PROVerXL 4030S with a 710W spindle for $999; we haven’t found an independent review of it yet.

## A note on evidence

Most hands-on reviews of the V2 are published by SainSmart. Fabrication Machines analyses it from specs, and CNX Software’s long-term review covers the original V1. Treat this as a preview.

## What testers report

- **SainSmart’s review series**: assembly was straightforward and the frame solid. In hardwood it cut consistently, with some chatter on edges. The machine shipped with conservative 5,000 mm/min rapids; the reviewer found the steppers stalled at 7,000 and settled on 6,000.
- **Fabrication Machines** scores it 67/100, with top marks for rigidity and motors, but calls the 400W spindle limiting as soon as you hog a deep slot in oak or push into aluminium. It also notes clamps eat about 20 mm of usable travel per axis.
- **CNX Software** (V1, 2021) found build quality good, but dry aluminium milling slow and tramming worth improving.

## Who should not buy it

- Beginners on a budget: the Cubiko or a 4040 is cheaper.
- Anyone wanting more power: consider the 4030S with its 710W spindle, or fit a trim router.

## vs rivals

- **vs Genmitsu 4040-PRO MAX ($949):** bigger bed and 710W router for less, without ball screws or closed loop. See [4040-PRO MAX vs 4030 V2](/en/compare/genmitsu-4040-pro-max-vs-genmitsu-proverxl-4030-v2/).
- **vs Onefinity Apprentice:** a rival in the same class (Fabrication Machines).

## Final thoughts

The 4030 V2’s mechanics are its strength. If precision matters more than raw cutting power, it is a solid step up from a 3018.

## Sources

- [SainSmart blog: PROVerXL 4030 V2 review, part 2](https://www.sainsmart.com/blogs/news/4030-v2-review-part-2) (published by the manufacturer)
- [Fabrication Machines: PROVerXL 4030 V2](https://fabricationmachines.com/machines/genmitsu-proverxl-4030-v2) (67/100, spec-based)
- [CNX Software: PROVerXL 4030 review, mods and projects](https://www.cnx-software.com/2021/05/10/genmitsu-proverxl-4030-cnc-router-review-mods-projects/) (original V1)
- [SainSmart official store: PROVerXL 4030 V2](https://www.sainsmart.com/products/proverxl-4030-v2) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'genmitsu-cubiko-vs-genmitsu-4040-pro-max',
      title: 'Genmitsu Cubiko vs 4040-PRO MAX: enclosed mini or big open router?',
      products: ['genmitsu-cubiko', 'genmitsu-4040-pro-max'],
      intro: 'Two very different Genmitsu CNCs. The Cubiko is enclosed and tiny; the 4040-PRO MAX is open with a 400 mm bed and a 710W router.',
      verdict: 'Choose the Cubiko ($499) for PCBs, engraving and small parts on a desk with little noise or mess. Choose the 4040-PRO MAX ($949) for woodworking: signs, inlays and parts up to 400 mm.',
      updated_at: DATE,
    },
    {
      slug: 'genmitsu-4040-pro-max-vs-genmitsu-proverxl-4030-v2',
      title: 'Genmitsu 4040-PRO MAX vs PROVerXL 4030 V2: power or precision?',
      products: ['genmitsu-4040-pro-max', 'genmitsu-proverxl-4030-v2'],
      intro: 'Genmitsu’s two main mid-size desktop routers.',
      verdict: 'Pick the 4040-PRO MAX ($949) for a bigger bed and a stronger 710W router at a lower price. Pick the PROVerXL 4030 V2 ($1,399) for closed-loop motors and ball screws when precision and repeatability matter most.',
      updated_at: DATE,
    },
  ],

  guides: [],
};
