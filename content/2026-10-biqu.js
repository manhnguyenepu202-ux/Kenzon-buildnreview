// BIQU batch: Bambu Lab add-ons. Researched 31 October 2026.
// Prices and images: official store (biqu.equipment/products.json), 31 Oct 2026, US warehouse where offered.
// Test results: the independent reviews listed in each article's Sources section.
// Skipped for now: Panda Juicer hotends, Panda Lungs, ViViD (no readable independent tests).
const awin = (mid, url) => `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=2782134&ued=${encodeURIComponent(url)}`;
const biqu = (handle) => awin(95665, `https://www.biqu.equipment/products/${handle}`);
const cdn = (file) => `https://cdn.shopify.com/s/files/1/1619/4791/files/${file}`;
const DATE = '2026-11-01 01:00:00';
const LABEL = 'Check price at BIQU';

export default {
  products: [
    {
      slug: 'biqu-panda-breath',
      name: 'BIQU Panda Breath',
      brand: 'BIQU',
      model: 'Panda Breath',
      category: 'maker-addons',
      art_type: 'air-purifier',
      tone: '#2e7d32',
      released: 2025,
      price_usd: 95.85,
      image_url: cdn('1060000855-PandaBreath_1000_7.png?v=1765359761'),
      gallery: [cdn('1060000855-PandaBreath_1000_4.png?v=1765359761'), cdn('1060000855-PandaBreath_1000_6.png?v=1765359761')],
      affiliate_url: biqu('biqu-panda-breath-smart-chamber-heater'),
      affiliate_label: LABEL,
      title: 'BIQU Panda Breath review (preview): an active chamber heater for Bambu Lab printers',
      summary: 'A 300 W chamber heater with HEPA and carbon filtration for Bambu Lab P1S, X1C and others, about $96 from BIQU’s US warehouse. Heats quickly; its temperature reading may need offsetting.',
      verdict: 'The Panda Breath adds what Bambu’s P1S lacks: active chamber heating up to 60°C for ABS, ASA and nylon, plus recirculating HEPA and carbon filtration. ModBot found it heats a P1S chamber quickly; one owner had to set it to 67°C to hold 60°C. Hands-on reviews are few, so this is a preview. At about $96 it is a cheap way to make engineering filaments warp less.',
      best_for: 'Bambu Lab P1S and X1C owners printing ABS, ASA, nylon or PC',
      pros: [
        '300W PTC heater for chamber temperatures up to 60°C',
        'HEPA and activated-carbon filtration in one unit',
        'Also works as a filament dryer',
        'About $96 from BIQU’s US warehouse',
        'Cheap replacement filters (2-pack about $10)',
      ],
      cons: [
        'Few in-depth independent reviews (preview)',
        'One owner had to set 67°C to reach 60°C: no temperature calibration',
        'Cable routing can limit head travel if installed carelessly (ModBot)',
        'Recirculating filtration does not replace ventilation',
        'Check hardware revision: the P2S needs the thinner V1.1',
      ],
      specs: [
        { label: 'Heater', value: '300W PTC' },
        { label: 'Max chamber temperature', value: '60°C' },
        { label: 'Filtration', value: 'HEPA + activated carbon' },
        { label: 'Compatible', value: 'Bambu Lab X1C, P1S, P1P, A1, A1 mini (with enclosure); Klipper printers' },
        { label: 'Extra mode', value: 'Filament drying' },
        { label: 'Price', value: 'US warehouse $95.85 · with filter pack $105.98' },
      ],
      scores: { performance: 7.8, quality: 7.4, ease: 7.6, value: 8.6 },
      body: `## What is it?

The Panda Breath is a small box that sits inside an enclosed 3D printer and heats the chamber with a 300W PTC heater, while fans pull air through HEPA and activated-carbon filters. It was designed for Bambu Lab printers, especially the P1S, which has an enclosure but no active chamber heating.

On 31 October 2026 it costs **$95.85** from BIQU’s US warehouse, or $105.98 with a spare filter pack.

## Why chamber heating matters

ABS, ASA, nylon and polycarbonate shrink as they cool, which causes warping and layer splits on big parts. A chamber held at 45–60°C keeps them stable. Bambu’s X1C reaches higher chamber temperatures passively than the P1S; the Panda Breath closes that gap.

## A note on evidence

We found few in-depth reviews. All3DP and Hackster covered the launch; ModBot tested it on a P1S; retail pages carry a handful of owner reviews. Treat this as a preview.

## What testers and owners report

- **ModBot** found it brings a P1S chamber up to temperature quickly, with the expected print benefits. Its cable routing needed care so it didn’t limit the print head’s travel.
- **An owner on 3DJake** gave it 3/5 because the temperature isn’t calibrated: they had to set 67°C on the Panda Breath to hold 60°C in an X1C.
- **Good Prints 3D** notes the hardware revision matters (the store now sells V1.1.2), that the P2S needs the thinner V1.1, and that recirculating filtration is not a substitute for venting fumes.

## Who should not buy it

- PLA and PETG-only users: they don’t need a hot chamber.
- Anyone with an open-frame printer.

## Final thoughts

The Panda Breath is a cheap, sensible upgrade for P1S owners who want to print engineering filaments. Expect to offset the set temperature a little.

## Sources

- [All3DP: active chamber heating for Bambu Lab with the Panda Breath](https://all3dp.com/4/finally-active-chamber-heating-for-bambu-lab-p-series-and-x1c-with-biqu-panda-breath/)
- [Hackster.io: Panda Breath chamber heater add-on](https://www.hackster.io/news/panda-breath-is-an-affordable-3d-printer-chamber-heater-add-on-6f33c7605f87)
- [Good Prints 3D: Panda Breath V1.1.2 review](https://www.goodprints3d.com/blogs/reviews/biqu-panda-breath-review-a-smarter-chamber-heat-and-air-filter-upgrade-for-bambu-and-klipper-print-benches)
- [3DJake: Panda Breath customer reviews](https://www.3djake.com/biqu/panda-breath-v10)
- [BIQU official store: Panda Breath](https://www.biqu.equipment/products/biqu-panda-breath-smart-chamber-heater) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'biqu-bmcu-370',
      name: 'BIQU BMCU-370',
      brand: 'BIQU',
      model: 'BMCU-370',
      category: 'maker-addons',
      art_type: 'filament-dryer',
      tone: '#388e3c',
      released: 2025,
      price_usd: 125.99,
      image_url: cdn('1060000874-BMCU-370_1000_1.jpg?v=1772587787'),
      gallery: [cdn('1060000876-BMCU-370_1000_1.jpg?v=1772587812'), cdn('1060000876-BMCU-370_1000_2.jpg?v=1772587829')],
      affiliate_url: biqu('biqu-bmcu-370-full-multi-color-feeding-system'),
      affiliate_label: LABEL,
      title: 'BIQU BMCU-370 review (preview): open-source four-colour printing for Bambu A1 and P1',
      summary: 'An open-source, four-channel AMS Lite alternative for Bambu Lab A1, A1 mini and P1, $125.99 assembled. Cheap and capable, but firmware updates could break it and there is no RFID.',
      verdict: 'The BMCU-370 brings four-colour printing to Bambu A1 and P1 printers for less than an AMS Lite, using a stronger 370 motor and Hall-effect sensing. Owners mostly report it works, but some had to make the printer think it was a full AMS, one saw random disconnects, and 3DBite warns a Bambu firmware update could block it. Buy it if you enjoy tinkering and accept that risk.',
      best_for: 'Tinkerers with a Bambu A1 or P1 who want multicolour on a budget',
      pros: [
        'Four-filament automatic switching for A1, A1 mini, P1P and P1S',
        '370 motor with Hall sensor: more torque, quieter, better filament detection',
        'Open source and repairable',
        'Cheaper than official AMS units; DIY kit $88.99',
        'Detects transparent filament (photoelectric sensing)',
      ],
      cons: [
        'A Bambu firmware update could stop it working; community support only',
        'No RFID: filament details entered by hand in Bambu Studio',
        'Some owners had to set the printer to “AMS” instead of “AMS Lite”',
        'Reports of random disconnects and getting stuck at 99%',
        'May affect your Bambu warranty',
      ],
      specs: [
        { label: 'Channels', value: '4' },
        { label: 'Motor', value: '370 motor, Hall-effect version' },
        { label: 'Compatible', value: 'Bambu Lab A1, A1 mini, P1P, P1S' },
        { label: 'Filament detection', value: 'Photoelectric (works with transparent filament)' },
        { label: 'RFID', value: 'No' },
        { label: 'Price', value: 'Assembled $125.99 · DIY kit $88.99' },
      ],
      scores: { performance: 7.2, quality: 7.0, ease: 6.4, value: 8.4 },
      body: `## What is it?

The BMCU (Bambu Multi-Color Unit) started as a community open-source project to feed up to four filaments into Bambu Lab printers that lack an AMS. BIQU’s BMCU-370 is a commercial version with a stronger 370 motor and Hall-effect sensors.

It costs **$125.99** assembled or **$88.99** as a DIY kit on BIQU’s store.

## A note on evidence

We found no long-form independent print test. This preview draws on 3DBite’s detailed comparison and risk analysis, 3Druck’s coverage, and owner reports. Treat it accordingly.

## What it does well

- Four channels with automatic filament changes during a print.
- The 370 motor gives more torque and quieter feeding than smaller-motor BMCU builds.
- Photoelectric detection senses transparent filament, which microswitch sensors can miss.
- It’s open source, so parts can be repaired or replaced.

## Problems owners report

From 3DBite and BIQU’s product page:

- Some A1 owners had to tell the printer it was connected to a full AMS rather than an AMS Lite.
- One channel can be noisier than the others; a channel can show filament when there is none; and a print can stick at 99% because the unit can’t retract.
- One builder saw the printer randomly lose connection to the unit, needing a power cycle.
- No RFID, so you enter filament types and colours by hand.

## The firmware risk

This is the big one. The BMCU has survived two Bambu firmware updates, but 3DBite notes the community warns Bambu could block it, and its main firmware maintainer is moving to Klipper printers. Some owners freeze their printer firmware to stay safe. It may also affect warranty claims.

## Who should not buy it

- Anyone who wants plug-and-play reliability: buy an AMS Lite or AMS 2 Pro.
- Anyone who keeps firmware updated automatically.

## Final thoughts

The BMCU-370 is a clever, cheap way into multicolour on Bambu printers, but you’re buying into a community project with real risks.

## Sources

- [3DBite: BMCU vs AMS, is the DIY alternative worth the risk?](https://3dbite.com/bmcu-vs-bambu-ams-diy-multi-colour-alternative/) (May 2026)
- [3Druck: BIQU BMCU-370 for Bambu Lab A1 and P1](https://3druck.com/en/printers-and-products/biqu-bmcu-370-open-source-multicolor-unit-for-bambu-lab-a1-and-p1-as-a-cheap-ams-lite-alternative-00155866/)
- [Makers101: best Bambu Lab AMS alternatives](https://makers101.com/bambu-lab-ams-alternative/)
- [BIQU official store: BMCU-370](https://www.biqu.equipment/products/biqu-bmcu-370-full-multi-color-feeding-system) (price and owner reviews)`,
      published_at: DATE,
      updated_at: DATE,
    },
    {
      slug: 'bigtreetech-panda-sense-pro',
      name: 'BIGTREETECH Panda Sense Pro',
      brand: 'BIQU',
      model: 'Panda Sense Pro',
      category: 'maker-addons',
      art_type: 'air-purifier',
      tone: '#43a047',
      released: 2026,
      price_usd: 89.99,
      image_url: cdn('1030000193-Panda_Sense_Pro_1600_5.jpg?v=1783497649'),
      gallery: [cdn('1030000193-Panda_Sense_Pro_1600_7.jpg?v=1783501808'), cdn('1030000193-PandaSensePro_800_9.jpg?v=1782468999')],
      affiliate_url: biqu('bigtreetech-panda-sense-pro'),
      affiliate_label: LABEL,
      title: 'BIGTREETECH Panda Sense Pro review: an 8-in-1 air monitor for your print room',
      summary: 'An 8-in-1 air quality monitor (PM2.5, PM10, CO₂, formaldehyde, VOCs and more) with screen, Wi-Fi and Home Assistant support, $89.99. Useful trends; you must print its case.',
      verdict: 'The Panda Sense Pro tracks eight air-quality values on a colour screen and sends them to Home Assistant or Moonraker. The DIY Life used it overnight next to three printers and in a closed room, where CO₂ climbed past 1,000 ppm. It ships without an enclosure, the app isn’t ready, and accuracy isn’t published, so treat it as a trend monitor. At $89.99, a useful safety gadget for a print room.',
      best_for: 'Makers who want to watch fumes and CO₂ in a room with 3D printers',
      pros: [
        'Eight readings: PM2.5, PM10, CO₂ (NDIR), formaldehyde, eTVOC, AQI, temperature, humidity',
        'Always-on 3.5-inch colour screen',
        'Home Assistant, Moonraker and MQTT integration',
        '24-hour and 30-day history in a web dashboard',
        'Compact and inexpensive for the sensor count',
      ],
      cons: [
        'No enclosure in the box: you print the open-source case (~100 g)',
        'Mobile app and cloud features not yet available',
        'Sensor accuracy and calibration not published',
        'eTVOC shows “-” for a few minutes after power-on',
        'Review unit supplied by BIGTREETECH',
      ],
      specs: [
        { label: 'Sensors', value: 'PM2.5, PM10, CO₂ (NDIR), HCHO, eTVOC, AQI, temperature, humidity' },
        { label: 'Display', value: '3.5-inch 480 × 320 colour TFT' },
        { label: 'Connectivity', value: '2.4 GHz Wi-Fi (ESP32-S3), MQTT' },
        { label: 'Integrations', value: 'Home Assistant, Moonraker/Klipper' },
        { label: 'Power', value: 'USB-C, 5V 1A' },
        { label: 'Price', value: '$89.99' },
      ],
      scores: { performance: 7.6, quality: 7.2, ease: 7.4, value: 8.4 },
      body: `## What is it?

The Panda Sense Pro is an air-quality monitor made for rooms with 3D printers and lasers. It measures eight values, shows them on a colour screen, and shares them over Wi-Fi with Home Assistant, Moonraker (Klipper) or any MQTT system.

It costs **$89.99** on BIQU’s store.

## Tests

The DIY Life (September 2026, unit supplied by BIGTREETECH) ran it in a real workshop:

- **Baseline**: PM2.5 3, CO₂ 427 ppm, eTVOC 0.1 mg/m³, formaldehyde 0.01 mg/m³.
- **Overnight, about 11 hours of PLA and PETG on three enclosed printers**: PM2.5 rose to 8 and PM10 to 10; CO₂ 445 ppm. VOCs barely moved, as you’d expect with those filaments and enclosures.
- **Two hours in a closed, occupied room**: CO₂ climbed to 1,032 ppm, showing the room needed ventilation more than the printers did.

The reviewer saw it as a useful relative monitor rather than lab-grade equipment.

## Limits

- No enclosure in the box. You print BIGTREETECH’s open-source case, about 100 g of filament.
- The app and cloud features were “coming soon”.
- Accuracy and calibration aren’t published, so compare trends, not absolute numbers.
- eTVOC reads “-” for a few minutes after power-on.

Fabbaloo questioned whether it is meaningfully different from generic air monitors, without testing it.

## Who should not buy it

- Anyone needing certified measurements for health or workplace compliance.
- Anyone without a 3D printer to print the case.

## Final thoughts

For under $90, the Panda Sense Pro gives makers a clear view of what their machines put into the air, and a nudge to open a window.

## Sources

- [The DIY Life: BIGTREETECH Panda Sense Pro review](https://the-diy-life.com/bigtreetech-panda-sense-pro-air-quality-monitoring-for-your-3d-printer/) (September 2026)
- [Fabbaloo: does the Panda Sense Pro really work?](https://www.fabbaloo.com/news/biqu-introduces-panda-sense-pro-but-does-it-really-work)
- [All3DP: Panda Sense Pro launch](https://all3dp.com/4/biqus-panda-sense-pro-tracks-bambu-lab-print-air-and-works-with-klipper-too/)
- [BIQU official store: Panda Sense Pro](https://www.biqu.equipment/products/bigtreetech-panda-sense-pro) (price and specs)`,
      published_at: DATE,
      updated_at: DATE,
    },
  ],
  comparisons: [],
  guides: [],
};
