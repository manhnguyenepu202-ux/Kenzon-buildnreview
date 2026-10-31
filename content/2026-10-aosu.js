// AOSU batch: security cameras and a doorbell. Researched 31 October 2026.
// Prices and images: official store (aosulife.com/products.json), 31 Oct 2026.
// Test results: the independent reviews listed in each article's Sources section.
// Skipped for now: Floodlight Cam Pro, Video Doorbell SE, T2 Pro (no independent reviews found).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const aosu = (handle) => awin(84037, `https://www.aosulife.com/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/0610/8830/1292/files/${file}`;
const DATE = '2026-10-31 23:00:00';
const LABEL = 'Check price at AOSU';

export default {
  categories: [
    {
      slug: 'security-cameras', name: 'Security Cameras & Doorbells', group_name: 'Smart home', sort_order: 10, art_type: 'security-camera', tone: '#00897b',
      blurb: 'Solar, battery and wired home security cameras and video doorbells, scored on image quality, detection, app, subscription costs and value.',
      score_labels: { performance: 'Detection and alerts', quality: 'Image and night vision', ease: 'App and setup', value: 'Value (incl. subscription)' },
      sponsor: 'aosu-solarcam-t2-ultra',
    },
  ],

  products: [
    {
      slug: 'aosu-solarcam-t2-ultra',
      name: 'AOSU SolarCam T2 Ultra',
      brand: 'AOSU',
      model: 'SolarCam T2 Ultra',
      category: 'security-cameras',
      art_type: 'security-camera',
      tone: '#00695c',
      released: 2025,
      price_usd: 399.99,
      featured: true,
      image_url: cdn('C9X-2_24d2e5bb-8da4-4130-8255-56923c56a54a.png?v=1785999773'),
      gallery: [cdn('C9X-4_e2414d50-0608-4a4b-877b-dd9f8e2a1e56.png?v=1785999787'), cdn('2_2009d2b0-c022-483c-9f5f-9eadea3217d9.jpg?v=1762926732')],
      affiliate_url: aosu('aosu-t2-ultra'),
      affiliate_label: LABEL,
      title: 'AOSU SolarCam T2 Ultra review: 4K solar pan-tilt cameras with no required subscription',
      summary: '4K solar pan-tilt cameras with colour night vision, radar + PIR + AI detection and local storage; 2-cam kit $399.99. Batteries held 78–94% in late autumn, but alerts lag 8–12 s.',
      verdict: 'The T2 Ultra is AOSU’s best solar camera: sharp 4K, useful colour night vision, 360° pan-tilt and local storage with no subscription needed. In a four-week autumn test the batteries stayed between 78% and 94%. The catch is speed: push alerts arrived 8–12 seconds late, and tracking lags a little. Great for recording what happened; less good as a real-time alarm.',
      best_for: 'Homeowners who want subscription-free 4K solar cameras around a large yard',
      pros: [
        '4K sensor with colour night vision; faces identifiable at 15 ft in total darkness',
        'Detachable 3W solar panel kept batteries at 78–94% in late autumn',
        'PIR, radar and AI detection for people, vehicles and pets',
        '360° pan-tilt with auto-tracking and multi-camera event tracking',
        'Local storage on the aosuBase; no subscription required',
      ],
      cons: [
        'Push alerts arrived 8–12 seconds after events (The Backyard Mag)',
        'Tracking lags about half a second and has a blind spot directly below',
        'Cameras depend on the base station',
        'AI sensitivity setting is buried deep in the app',
        'Faces not identifiable at 25 ft at night',
      ],
      specs: [
        { label: 'Resolution', value: '4K (8 MP)' },
        { label: 'Coverage', value: '360° pan-tilt, auto-tracking, auto patrol' },
        { label: 'Detection', value: 'PIR + radar + AI (people, vehicles, pets)' },
        { label: 'Power', value: '9,200 mAh battery, detachable 3W solar panel' },
        { label: 'Night vision', value: 'Colour (LED) and infrared' },
        { label: 'Storage', value: 'aosuBase 2.0 with 32 GB, expandable to 1 TB' },
        { label: 'Cloud (optional)', value: 'AosuProtect+ Basic from €5.99/month' },
        { label: 'Price', value: '1 cam $159.99 · 2-cam kit $399.99 · 4-cam $519.99 · 6-cam $719.99' },
      ],
      scores: { performance: 7.2, quality: 8.6, ease: 7.6, value: 8.6 },
      body: `## What is it?

The T2 Ultra is AOSU’s top solar security camera. Each camera has a 4K sensor, a pan-tilt head that turns 360°, colour night vision with LEDs, a siren and a 9,200 mAh battery charged by a detachable 3W solar panel. Kits connect to an aosuBase hub that stores video locally.

On 31 October 2026 the official store sells a single camera for **$159.99** (needs a base), the 2-camera kit for **$399.99**, the 4-camera kit for $519.99 and the 6-camera kit for $719.99.

## Solar and battery

The Backyard Mag ran a six-camera kit for four weeks in late autumn. Batteries held between **78% and 94%**, and they got through three overcast days in a row. Panels need to point within about 20° of the best angle, and dust and pollen needed wiping twice. The Irish Examiner saw batteries near 100% most days in a sunny few weeks; both expect winter top-ups in shady spots.

## Image and night vision

Reviewers agree the 4K footage is sharp. In The Backyard Mag’s zero-light test, faces were identifiable at **15 feet but not 25 feet**. Colour at night was better than expected but not vivid, and it beat the black-and-white night video of a Reolink kit where there was some ambient light.

## Detection and alerts

Detection combines PIR, radar and AI to tell people, vehicles and pets apart and ignore moving trees. The weak point is speed: push alerts arrived **8–12 seconds** after events, and tracking lagged about half a second. The camera can’t track directly beneath its mount. Multi-camera tracking merged clips from two of three cameras in one test.

## App and subscription

Setting up six cameras took about 47 minutes. Live view sometimes needs a second tap, two-way audio has a slight delay, and the AI sensitivity setting is three menus deep.

You don’t need a subscription. Video is stored on the aosuBase (32 GB card included, expandable). AosuProtect+ adds cloud storage: the Irish Examiner lists Basic at €5.99/month (14 days of cloud) and Pro at €9.49/month (30 days, extra AI alerts).

## Who should not buy it

- Anyone who needs instant alerts to respond to intruders: a wired PoE system is faster.
- Homes with heavily shaded walls.

## vs rivals

- **vs Reolink RLK8-1200D4-A (~$550):** wired PoE, faster notifications, black-and-white night vision, more installation work.
- **vs Arlo Pro 5S 2-cam (~$500):** needs a subscription for full features.
- **vs AOSU SolarCam D1 Classic:** cheaper 2K/3K version. See [T2 Ultra vs D1 Classic](/en/compare/aosu-solarcam-t2-ultra-vs-aosu-solarcam-d1-classic/).

## Final thoughts

The T2 Ultra is one of the best subscription-free solar camera systems. Treat it as an excellent recorder, not a split-second alarm.

## Sources

- [The Backyard Mag: AOSU T2 Ultra review](https://thebackyardmag.com/aosu-t2-ultra-review/) (four-week test, June 2026)
- [Irish Examiner: AOSU SolarCam T2 Ultra review](https://www.irishexaminer.com/business/technology/arid-41877266.html) (July 2026)
- [CCTV Manuals: AOSU SolarCam T2 Ultra review](https://www.cctvmanuals.com/2026/07/12/aosu-solarcam-t2-ultra-review/)
- [AOSU official store: T2 Ultra](https://www.aosulife.com/products/aosu-t2-ultra) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'aosu-solarcam-d1-classic',
      name: 'AOSU SolarCam D1 Classic',
      brand: 'AOSU',
      model: 'SolarCam D1 Classic',
      category: 'security-cameras',
      art_type: 'security-camera',
      tone: '#00796b',
      released: 2024,
      price_usd: 299.99,
      image_url: cdn('C9C-2_954c912a-fb8d-442e-a780-d2a7029451dc.png?v=1785998598'),
      gallery: [cdn('C9C-1.png?v=1783409572'), cdn('2-360_34dc8c20-8b32-4e65-8a53-a8722852a5a7.jpg?v=1787210321')],
      affiliate_url: aosu('solarcam-d1-classic-kit'),
      affiliate_label: LABEL,
      title: 'AOSU SolarCam D1 Classic review: great-value solar cameras, uneven app',
      summary: 'Solar pan-tilt cameras with built-in panels, 360° coverage and a 32 GB base; 2-cam kit $299.99. Batteries stayed above 90% in summer, but one reviewer found the app laggy and alerts missed.',
      verdict: 'The D1 Classic is AOSU’s best seller: neat cameras with the solar panel built in, 360° pan-tilt, colour night vision and local storage. Mighty Gadget’s six-camera test saw batteries stay above 90% for weeks and scored it 80%; the Irish Examiner called it highly recommended. HomeCamCafe, though, found the app laggy and motion detection unreliable (3.5/5). Good value if you mainly want recordings, not instant alerts.',
      best_for: 'Budget buyers who want several solar cameras with local storage',
      pros: [
        'Solar panel built into each camera; batteries stayed above 90% in summer',
        '360° pan-tilt with human tracking and cross-camera tracking',
        'Colour night vision with LED spotlights',
        'aosuBase with 32 GB built in; no subscription needed',
        'Alexa and Google Assistant support',
      ],
      cons: [
        'App can be laggy for live view and pan-tilt (HomeCamCafe)',
        'Motion detection missed events in one review; cats flagged as people in another',
        'Built-in panel needs 2–3 hours of direct sun; struggles on shaded walls in winter',
        'Slow microSD playback',
        'Event-based recording, not continuous',
      ],
      specs: [
        { label: 'Resolution', value: '2K (3 MP); newer 6-cam kit 3K (5 MP)' },
        { label: 'Coverage', value: '347–360° pan, 90° tilt' },
        { label: 'Power', value: 'Battery with built-in solar panel' },
        { label: 'Night vision', value: 'Colour (4 LEDs) and infrared' },
        { label: 'Weatherproofing', value: 'IP65' },
        { label: 'Storage', value: 'aosuBase 1.0 with 32 GB' },
        { label: 'Cloud (optional)', value: 'AosuProtect+ €12.99/month for two cameras (Irish Examiner)' },
        { label: 'Price', value: '1 cam $79.99 · 2-cam kit $299.99 · 4-cam $369.99 · 6-cam $499.99' },
      ],
      scores: { performance: 6.8, quality: 7.8, ease: 7.0, value: 8.8 },
      body: `## What is it?

The SolarCam D1 Classic is AOSU’s most popular camera. Each unit is a compact pan-tilt camera with the solar panel built into its top, so there is no separate panel to mount. Kits include an aosuBase hub with 32 GB of storage.

On 31 October 2026 the 2-camera kit costs **$299.99**, the 4-camera kit $369.99 and the 6-camera kit $499.99. A single add-on camera is $79.99.

## Battery and solar

- **Mighty Gadget** tested an updated six-camera kit in July and August. Batteries rose from about 75% to 95% by day two and **stayed above 90% for weeks**.
- **The Irish Examiner** saw batteries stay full through an overcast week.
- **HomeCamCafe** warns the built-in panel needs 2–3 hours of direct sun daily; shaded and north-facing walls struggle, especially in winter.

## Image and night vision

The original D1 Classic records 2K (2304 × 1296); the newer kit Mighty Gadget tested records 3K (5 MP). Reviewers found daytime footage crisp and colour night vision solid, with faces identifiable at close range and some blur on fast movement.

## Detection and app: where reviews split

- **Mighty Gadget** found AI detection performed well, with notification delays rare except on weak Wi-Fi, though cats were sometimes flagged as people. The app was stable with up to four live streams at once. Score: 80%.
- **HomeCamCafe** found the opposite: live view and pan-tilt were noticeably laggy, detection missed events, and it lacked motion zones. Score: 3.5/5. It recommends the camera for occasional monitoring, not for people who rely on real-time alerts.

The difference may come from firmware, kit version and Wi-Fi strength. Place the base close to the cameras.

## Subscription

Local storage works without a subscription. AosuProtect+ adds cloud recording; the Irish Examiner lists €12.99/month or €129.99/year for two cameras.

## Who should not buy it

- Anyone relying on instant alerts.
- Homes with shaded walls: the built-in panel can’t be repositioned.

## vs rivals

- **vs AOSU SolarCam T2 Ultra ($399.99 for 2):** 4K, detachable panel, radar detection. See [T2 Ultra vs D1 Classic](/en/compare/aosu-solarcam-t2-ultra-vs-aosu-solarcam-d1-classic/).
- **vs Tapo and Eufy solar cameras:** HomeCamCafe found their outdoor motion detection more consistent.

## Final thoughts

The D1 Classic is excellent value for a multi-camera solar system. Mount it in good sun, keep the base close, and accept that alerts may not be instant.

## Sources

- [Mighty Gadget: AOSU SolarCam D1 Classic review with upgraded HomeBase](https://mightygadget.com/aosu-solarcam-d1-classic-review-with-upgraded-homebase/) (80%)
- [HomeCamCafe: AOSU SolarCam D1 Classic review](https://www.homecamcafe.com/aosu-solarcam-d1-classic-review/) (3.5/5)
- [Irish Examiner: AOSU SolarCam D1 Classic review](https://www.irishexaminer.com/business/technology/arid-41832236.html) (April 2026)
- [AOSU official store: SolarCam D1 Classic kit](https://www.aosulife.com/products/solarcam-d1-classic-kit) (prices)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'aosu-solarcam-p1-max',
      name: 'AOSU SolarCam P1 Max',
      brand: 'AOSU',
      model: 'SolarCam P1 Max',
      category: 'security-cameras',
      art_type: 'security-camera',
      tone: '#26a69a',
      released: 2025,
      price_usd: 129.99,
      image_url: cdn('SolarCamP1Max.png?v=1757680855'),
      gallery: [cdn('1-4K.jpg?v=1757680855'), cdn('2_64c4ee16-b9fe-4571-b782-80607ff3d877.jpg?v=1757680855')],
      affiliate_url: aosu('solarcam-p1-max'),
      affiliate_label: LABEL,
      title: 'AOSU SolarCam P1 Max review: a fixed 4K solar camera with strong night vision',
      summary: 'A fixed 4K solar camera with spotlight, colour night vision and local storage, $129.99. PCWorld and Bob Vila praised the image; AI descriptions are beta and the app shows upgrade ads.',
      verdict: 'The P1 Max is a simple, sharp 4K solar camera. PCWorld and Bob Vila both praised the image and night vision, and it needs only about two hours of direct sun a day. The AI event descriptions were hit-and-miss in beta, some features need a subscription, and Techaeris found the app’s upgrade ads annoying. At $129.99 it is a good-value fixed 4K camera.',
      best_for: 'Watching a driveway or gate in 4K without wiring',
      pros: [
        '4K (3840 × 2160) with 6× digital zoom for faces and plates',
        'Bright spotlight; colour and infrared night vision both performed well',
        'Built-in solar needs about 2 hours of direct sun a day',
        'Local storage; no subscription required',
        'Works with Alexa and Google Assistant',
      ],
      cons: [
        'AI event descriptions in beta were inconsistent (PCWorld)',
        'Several AI features need a subscription; app shows upgrade ads (Techaeris)',
        'Fixed lens: no pan-tilt',
        'Mounting hardware feels flimsy and has no anti-theft lock (Bob Vila)',
        'Needs a USB-C charge before setup and in poor sun',
      ],
      specs: [
        { label: 'Resolution', value: '4K (3840 × 2160), 6× digital zoom' },
        { label: 'Power', value: 'Battery with integrated solar panel; USB-C' },
        { label: 'Night vision', value: 'Colour (spotlight) and infrared' },
        { label: 'Detection', value: 'AI people, vehicle and pet detection' },
        { label: 'Storage', value: 'Local (microSD or aosuBase/HomeCortex hub)' },
        { label: 'Cloud (optional)', value: 'From $4.99/month (PCWorld)' },
        { label: 'Price', value: '$129.99 (single camera); 4-cam system $469.99' },
      ],
      scores: { performance: 7.4, quality: 8.6, ease: 7.6, value: 8.6 },
      body: `## What is it?

The SolarCam P1 Max is a fixed (non-rotating) 4K camera with a built-in solar panel, spotlight and siren. It works alone with local storage or as part of a system with an aosuBase or HomeCortex hub.

It costs **$129.99** on the official store (list $167.99). A 4-camera system costs $469.99.

## Image and night vision

- **PCWorld** found the 4K image sharp enough to zoom in on faces and licence plates, with both colour (spotlight) and infrared night modes performing well.
- **Bob Vila** called the 4K video quality a standout and night footage crisp and detailed.
- **Techaeris** described the 4K as outstanding.

## Solar

Bob Vila says it needs about two hours of direct sunlight a day to stay charged. Techaeris notes you must charge it by USB-C before first setup and that it works less well in shade; AOSU sells an extension panel.

## Detection and AI

Bob Vila saw fewer false alarms from cars and leaves than expected. PCWorld tested the HomeCortex system’s “TrueSight” AI, which describes events in words. In beta it was inconsistent: it described one black shirt as black, blue and purple, and imagined an escalator. Its sentence search worked.

## App and subscription

Setup took minutes. Local storage works without paying. Techaeris found the app busy, with annoying ads prompting upgrades, and several AI features locked behind the optional cloud plan (from $4.99/month per PCWorld). With a HomeCortex hub, storage expands up to 16 TB with an internal drive.

## Who should not buy it

- Anyone who wants one camera to cover a whole yard: get a pan-tilt model.
- Anyone who dislikes in-app upsells.

## vs rivals

- **vs AOSU SolarCam T2 Ultra:** pan-tilt 4K with radar, at a higher price per camera. See [T2 Ultra vs P1 Max](/en/compare/aosu-solarcam-t2-ultra-vs-aosu-solarcam-p1-max/).
- **vs Eufy SoloCam S3 / EufyCam S3 Pro:** PCWorld mentions Eufy as a strong local-processing rival.

## Final thoughts

For a single sharp view of a driveway or gate, the P1 Max is a good, cheap 4K camera. Ignore the upsells; the free features cover most needs.

## Sources

- [PCWorld: AOSU 4K SolarCam P1 Max with HomeCortex review](https://www.pcworld.com/article/2787682/aosu-4k-solarcam-p1-max-with-homecortex-review.html) (May 2025)
- [Bob Vila: AOSU solar camera review](https://www.bobvila.com/reviews/aosu-solar-camera-review/) (April 2025)
- [Techaeris: AOSU SolarCam P1 Max review](https://techaeris.com/2025/07/22/aosu-solarcam-p1-max-review/) (July 2025)
- [AOSU official store: SolarCam P1 Max](https://www.aosulife.com/products/solarcam-p1-max) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'aosu-video-doorbell-pro',
      name: 'AOSU Video Doorbell Pro',
      brand: 'AOSU',
      model: 'Video Doorbell Pro',
      category: 'security-cameras',
      art_type: 'security-camera',
      tone: '#4db6ac',
      released: 2022,
      price_usd: 95.99,
      image_url: cdn('v8p_b200bc42-ac04-4607-aa94-e2a76f9871b9.png?v=1783057101'),
      gallery: [cdn('1._psd.jpg?v=1768552235'), cdn('2.166_4_3_1.jpg?v=1768552235')],
      affiliate_url: aosu('video-doorbell-pro'),
      affiliate_label: LABEL,
      title: 'AOSU Video Doorbell Pro review (preview): a $96 battery doorbell with no monthly fee',
      summary: 'A 2K battery video doorbell with 166° view, aosuBase Mini and claimed 180-day battery, $95.99. Owners like the night video and local storage; 2.4 GHz only, no HomeKit, tinny audio.',
      verdict: 'The Video Doorbell Pro is a cheap, subscription-free battery doorbell that owners rate highly (4.85/5 on AOSU’s own review page, a source we weigh carefully). Owners praise night video and stable connection; buyer guides note tinny audio, a short wake delay and 2.4 GHz-only Wi-Fi. We found no independent lab test, so treat this as a preview.',
      best_for: 'Renters and budget buyers who want a doorbell camera without monthly fees',
      pros: [
        '2K video with a tall 166° view',
        'Battery powered: no doorbell wiring needed',
        'aosuBase Mini included for local storage and signal boost',
        'No subscription required',
        'Works with Alexa and Google Assistant',
      ],
      cons: [
        'No independent lab review found (preview)',
        'Owners report tinny audio and a short delay when it wakes',
        '2.4 GHz Wi-Fi only',
        'No Apple HomeKit',
        '180-day battery is a best-case claim',
      ],
      specs: [
        { label: 'Resolution', value: '2K' },
        { label: 'Field of view', value: '166°' },
        { label: 'Power', value: 'Battery (up to 180 days claimed)' },
        { label: 'Hub', value: 'aosuBase Mini included' },
        { label: 'Wi-Fi', value: '2.4 GHz' },
        { label: 'Smart home', value: 'Alexa, Google Assistant' },
        { label: 'Price', value: '$95.99' },
      ],
      scores: { performance: 7.2, quality: 7.6, ease: 8.0, value: 8.8 },
      body: `## What is it?

The Video Doorbell Pro is AOSU’s battery-powered 2K doorbell. It comes with a small aosuBase Mini that plugs in indoors, stores clips locally and relays the doorbell’s signal. There is no required subscription.

It costs **$95.99** on the official store (list $139.99).

## A note on evidence

We could not find an independent lab review of this doorbell. This preview draws on owner reviews, AOSU’s community forum and buyer guides. AOSU’s own review page shows 4.85/5 from 102 reviews, but those reviews are collected by the brand, so we treat them carefully.

## What owners report

- **Video**: owners on AOSU’s community forum praise night video and say the connection is stable. A Reddit user found video and audio better than expected.
- **Alerts**: some owners say motion alerts are quick; buyer guides mention a short delay while the doorbell wakes from sleep, typical of battery doorbells.
- **Audio**: several users describe the speaker as tinny.
- **Wi-Fi**: 2.4 GHz only. The aosuBase Mini boosts the doorbell’s own connection, not your home Wi-Fi.

## Smart home and subscription

It works with Alexa and Google Assistant (live view on Echo Show or Nest Hub), but not Apple HomeKit. The optional AosuProtect+ plan adds cloud storage and extra AI features; owners say it isn’t needed.

## Who should not buy it

- Apple Home users.
- Anyone who wants 24/7 recording: battery doorbells record events only.

## vs rivals

- **vs Ring Battery Doorbell:** better app ecosystem, but most features need Ring Protect.
- **vs Eufy Video Doorbell (battery):** similar no-fee model with HomeBase storage.

## Final thoughts

For under $100 with no monthly fees, the Video Doorbell Pro is a sensible choice if you live in the Alexa or Google world. We will update this review when independent tests appear.

## Sources

- [AOSU community: honest review of our AOSU doorbell](https://community.aosulife.com/t/honest-review-of-our-aosu-doorbell/5845)
- [Judge.me: AOSU Video Doorbell Pro reviews](https://judge.me/reviews/stores/www.aosulife.com/products/video-doorbell-pro) (brand-collected)
- [pipl.systems: AOSU security systems buyer’s guide](https://pipl.systems/guides/aosu-security-cameras-and-doorbells/)
- [Focused Insight: AOSU video doorbell and Wi-Fi](https://focusedinsight.net/aosu-video-doorbell/)
- [AOSU official store: Video Doorbell Pro](https://www.aosulife.com/products/video-doorbell-pro) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'aosu-indoorcam-p1-pro',
      name: 'AOSU IndoorCam P1 Pro',
      brand: 'AOSU',
      model: 'IndoorCam P1 Pro',
      category: 'security-cameras',
      art_type: 'security-camera',
      tone: '#80cbc4',
      released: 2024,
      price_usd: 41.99,
      image_url: cdn('C2P_f7323620-ba09-4465-8b23-6ba1de1b1389.png?v=1786001288'),
      gallery: [cdn('IndoorCam.png?v=1767582835'), cdn('7_93caa6c8-f96a-4321-9948-2fa81e39a2db.jpg?v=1767583264')],
      affiliate_url: aosu('indoorcam-p1-pro'),
      affiliate_label: LABEL,
      title: 'AOSU IndoorCam P1 Pro review: a $42 pan-tilt indoor camera that gets detection right',
      summary: 'A 4 MP indoor pan-tilt camera with motion tracking, one-touch call and microSD storage, $41.99. HomeCamCafe found people detection and zones accurate; the app can lag.',
      verdict: 'The IndoorCam P1 Pro is a cheap pan-tilt indoor camera for pets, kids and front rooms. HomeCamCafe found its people detection and activity zones accurate, the exception to the detection problems it saw on AOSU’s outdoor solar cameras. The app can be laggy and specs vary between listings. At $41.99 it is an easy recommendation for indoor use.',
      best_for: 'Watching pets, kids or a front room on a small budget',
      pros: [
        'Accurate people detection and working activity zones (HomeCamCafe)',
        '360° pan with smart motion tracking',
        'microSD storage up to 256 GB; no subscription',
        'One-touch call button for family members',
        'On-device face recognition, per AOSU',
      ],
      cons: [
        'App can be laggy',
        'Specs differ between listings (2K vs 4 MP)',
        'Indoor only',
        'Needs a microSD card for local recording (not included)',
        'Only one independent review found',
      ],
      specs: [
        { label: 'Resolution', value: '4 MP (2K+)' },
        { label: 'Coverage', value: '360° pan with motion tracking' },
        { label: 'Night vision', value: 'Infrared' },
        { label: 'Wi-Fi', value: 'Dual-band modes' },
        { label: 'Storage', value: 'microSD up to 256 GB' },
        { label: 'Smart home', value: 'Alexa' },
        { label: 'Price', value: '$41.99 · 3-pack $113.99' },
      ],
      scores: { performance: 8.0, quality: 7.4, ease: 7.4, value: 9.2 },
      body: `## What is it?

The IndoorCam P1 Pro is AOSU’s pan-tilt indoor camera. It turns a full 360° to follow movement, has a one-touch call button, night vision and two-way audio, and records to a microSD card.

It costs **$41.99** on the official store, or $113.99 for a 3-pack.

## Detection

HomeCamCafe, which tests many AOSU cameras, found the P1 Pro’s **people detection accurate and its activity zones working as intended**. It singles the indoor model out as an exception to the motion-detection problems it found on AOSU’s outdoor solar cameras.

## App

HomeCamCafe notes the AOSU app can be laggy for owners, which matches its findings on other AOSU cameras.

## Storage and privacy

Video records to a microSD card up to 256 GB, with no subscription required. AOSU says face recognition runs on the camera and face data isn’t sent to its servers. That is the company’s claim; we have not verified it.

## Specs vary

AOSU’s own pages describe it as 4 MP and as 2K, and listings disagree on field of view. Expect a sharp 2K-class picture rather than true 4K.

## Who should not buy it

- Anyone who needs Apple HomeKit.
- Anyone who wants cloud backup without a subscription.

## vs rivals

- **vs Tapo C210/C220:** similar price and features, with a more established app.
- **vs Eufy Indoor Cam E220:** similar pan-tilt design, a little pricier.

## Final thoughts

The P1 Pro does the important job well: it notices people and follows them. For $42, that makes it a strong budget indoor camera.

## Sources

- [HomeCamCafe: AOSU security camera reviews](https://www.homecamcafe.com/aosu-security-camera-reviews/) (includes IndoorCam P1 Pro findings)
- [AOSU: best indoor cameras with continuous recording](https://www.aosulife.com/blogs/buying-guides/best-indoor-cameras-with-continuous-recording-in-2026) (manufacturer specs)
- [AOSU official store: IndoorCam P1 Pro](https://www.aosulife.com/products/indoorcam-p1-pro) (price)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],

  comparisons: [
    {
      slug: 'aosu-solarcam-t2-ultra-vs-aosu-solarcam-d1-classic',
      title: 'AOSU SolarCam T2 Ultra vs D1 Classic: 4K or budget solar?',
      products: ['aosu-solarcam-t2-ultra', 'aosu-solarcam-d1-classic'],
      intro: 'AOSU’s two most popular solar pan-tilt systems. The T2 Ultra adds 4K, radar detection and a detachable panel; the D1 Classic costs less.',
      verdict: 'Choose the T2 Ultra ($399.99 for 2) for 4K detail, radar-assisted detection and a panel you can place in the sun. Choose the D1 Classic ($299.99 for 2, $369.99 for 4) to cover more of your home for less, if your walls get good sun.',
      updated_at: DATE,
    },
    {
      slug: 'aosu-solarcam-t2-ultra-vs-aosu-solarcam-p1-max',
      title: 'AOSU SolarCam T2 Ultra vs P1 Max: pan-tilt or fixed 4K?',
      products: ['aosu-solarcam-t2-ultra', 'aosu-solarcam-p1-max'],
      intro: 'Both record 4K on solar power. The T2 Ultra rotates 360°; the P1 Max has a fixed view.',
      verdict: 'Pick the T2 Ultra to cover a wide yard with one camera that tracks people. Pick the P1 Max ($129.99) for a single sharp view of a driveway, gate or door at the lowest price.',
      updated_at: DATE,
    },
  ],

  guides: [
    {
      slug: 'best-subscription-free-security-cameras',
      title: 'The best subscription-free security cameras',
      category: 'security-cameras',
      intro: 'Cameras and doorbells that store video locally, so you never have to pay a monthly fee, compared using independent reviews and official prices on 31 October 2026.',
      items: [
        { slug: 'aosu-solarcam-t2-ultra', award: 'Best overall', note: '4K solar pan-tilt; batteries held 78–94% in autumn.' },
        { slug: 'aosu-solarcam-d1-classic', award: 'Best value system', note: 'Four solar cameras for $369.99.' },
        { slug: 'aosu-solarcam-p1-max', award: 'Best fixed 4K', note: 'Sharp 4K and good night vision for $129.99.' },
        { slug: 'aosu-indoorcam-p1-pro', award: 'Best indoor', note: 'Accurate people detection for $41.99.' },
        { slug: 'aosu-video-doorbell-pro', award: 'Best budget doorbell', note: 'Battery doorbell with local storage, $95.99.' },
      ],
      updated_at: DATE,
    },
  ],
};
