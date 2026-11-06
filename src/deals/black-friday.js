// Black Friday deals. Every price was read from the brand's own US store on `checkedAt`, in USD.
// price: current price. list: the store's struck-through price. prev: the price we recorded on 31 Oct 2026, set
// only when the store has since lowered it. pick: label for the top picks row. variant: the option the price is for.
// To refresh: re-check the stores, edit this file, update checkedAt. Products that are not published are skipped.
export const blackFriday = {
  year: 2026,
  checkedAt: '2026-11-06',
  previousCheck: 'October 31',
  startsAt: '2026-11-27T05:00:00Z', // midnight US Eastern
  cyberMonday: '2026-11-30',
  endsAt: '2026-12-02T08:00:00Z', // the nav link and home banner disappear after this
  deals: [
    { slug: 'snapmaker-u1', price: 699, list: 999, prev: 749, pick: 'Best 3D printer deal', why: 'Our top-rated printer. Four independent toolheads make colour prints with far less waste than filament swapping.' },
    { slug: 'laserpecker-lx2', price: 1299, list: 1999, prev: 1499, variant: '20W Standard Bundle', pick: 'Biggest price drop', why: 'Enclosed laser cutter with a 500 × 305 mm bed, now $200 below what it cost a week ago.' },
    { slug: 'creality-k2-pro-combo', price: 799, list: 1099, variant: 'K2 Pro + CFS', pick: 'Best multicolour deal', why: 'Quiet, heated-chamber printer with a long run of perfect prints in testing. Reviewed at $999.' },
    { slug: 'anycubic-photon-mono-m7-pro', price: 459, list: 669, pick: 'Best resin deal', why: 'Fast 14K resin printer with a heated vat and automatic refill. Reviewed at $669, on sale at $549.' },
    { slug: 'snapmaker-10w-laser-module', price: 149, list: 459, pick: 'Best cheap upgrade', why: 'Ran jobs 5–6× faster than the stock 1.6W laser in DIY Machines’ tests.' },
    { slug: 'sculpfun-sf-a9', price: 799.99, list: 1699.99, variant: 'A9 40W, US warehouse', pick: 'Best laser cutter value', why: 'Measured 41W and cut 10 mm plywood in one pass. Open frame, so budget for safety gear.' },

    { slug: 'creality-k2-plus-combo', price: 1199, list: 1499, variant: 'K2 Plus + 1 CFS', why: 'A 350 mm build volume and up to 16 colours. One tester hit repeated filament feed errors.' },
    { slug: 'anycubic-kobra-x-combo', price: 469, list: 599, variant: '7-colour combo', why: 'Compact bed-slinger that Tom’s Hardware and TechRadar both prefer to the Kobra 4.' },
    { slug: 'anycubic-kobra-4-combo', price: 299, list: 499, why: 'Very quiet four-colour printer with a filament dryer built into the ACE 2 Pro.' },
    { slug: 'anycubic-kobra-s1-max', price: 599, list: 899, why: '350 mm cube and a 65°C chamber for the money. Long-term test data is still thin.' },
    { slug: 'anycubic-photon-mono-4', price: 159, list: 219, why: 'A cheap first resin printer with fine 10K detail. No app, camera or heated vat.' },
    { slug: 'snapmaker-artisan-3-in-1', price: 1799, list: 2999, prev: 1849, variant: 'Artisan Standard', why: '3D printer, laser and CNC in one enclosed machine, down $50 this week.' },

    { slug: 'laserpecker-lp2-plus', price: 759, list: 1099, prev: 809, variant: 'Basic Bundle', why: 'Portable 10W laser that cuts 3 mm wood in one pass.' },
    { slug: 'laserpecker-lp4', price: 1039, list: 1999, prev: 1099, variant: 'Standard Bundle', why: 'Dual-laser portable with a touchscreen, good for craft fairs.' },
    { slug: 'laserpecker-lp2', price: 499, list: 999, prev: 549, variant: 'Standard Bundle', why: 'Engraves glass, leather and wood well, but barely cuts.' },
    { slug: 'laserpecker-lp1-plus', price: 179, list: 399, prev: 199, variant: 'Standard Bundle', why: 'Pocket-sized engraver for beginners. Engraves only.' },
    { slug: 'creality-falcon2-pro', price: 1349, list: 1499, variant: '40W', why: 'Enclosed 40W laser with a large 400 × 415 mm bed. Focus is manual.' },
    { slug: 'creality-falcon2-40w', price: 639, list: 1319, why: 'The most cutting power per dollar in the Falcon range, on an open frame.' },
    { slug: 'creality-falcon2-22w', price: 549, list: 719, why: 'Proven open-frame all-rounder, scored 4.6/5 by 3DWithUs.' },
    { slug: 'creality-cr-laser-falcon-10w', price: 189.9, list: 379, prev: 205, why: 'A big bed and fine spot for under $200. Safety features are basic.' },
    { slug: 'sculpfun-icube-ultra', price: 299, list: 599, variant: '12W', why: 'Compact enclosed laser with autofocus and a built-in smoke filter.' },
    { slug: 'sculpfun-s30-pro-max', price: 599.99, list: 899.99, variant: 'With rotary and honeycomb', why: 'Cleaner cuts than the Atomstack A20 Pro, and the bundle adds a rotary.' },
    { slug: 'sculpfun-s70-max', price: 1599, list: 2299, why: '70W on an 830 × 800 mm bed. Needs an enclosure and extraction.' },

    { slug: '3dmakerpro-moose', price: 489, list: 699, variant: 'Standard', why: 'Colour 3D scanner that testers measured within 0.04–0.13 mm of calipers.' },
    { slug: '3dmakerpro-toucan', price: 1199, list: 1999, variant: 'Standard', why: 'Standalone scanner that needs no PC. Tracking and Wi-Fi transfers are its weak spots.' },
    { slug: '3dmakerpro-seal-lite', price: 215, list: 359, why: 'The cheapest blue-light scanner we cover, for small matte objects.' },
    { slug: 'revopoint-metroy-pro', price: 1319, list: 1759, why: 'Blue-laser scanner that handled shiny steel without spray.' },

    { slug: 'snapmaker-40w-laser-module', price: 429, list: 999, why: 'The serious cutting upgrade for a Snapmaker 2.0 or Artisan.' },
    { slug: 'snapmaker-200w-cnc-module', price: 159, list: 299, why: 'More power for wood and aluminium on a Snapmaker 2.0.' },
    { slug: 'snapmaker-air-purifier', price: 369, list: 499, why: 'Clears laser and CNC fumes from an enclosed machine.' },
    { slug: 'snapdryer-bundle', price: 119, list: 169, why: 'Dries and stores four spools to prevent stringing.' },
    { slug: 'biqu-panda-breath', price: 89.99, list: 115, prev: 95.85, variant: 'US warehouse', why: 'Active chamber heating for a Bambu Lab P1S. Hands-on data is limited.' },
    { slug: 'bigtreetech-panda-sense-pro', price: 85.35, list: 99.99, prev: 89.99, why: 'Eight-in-one air monitor for a room with printers.' },

    { slug: 'sirui-aurora-85mm-f1-4', price: 404.1, list: 599, prev: 449, why: 'Sharp f/1.4 portrait lens with smooth bokeh, $45 cheaper than last week.' },
    { slug: 'aosu-solarcam-t2-ultra', price: 399.99, list: 559.99, variant: '2-camera kit', why: '4K solar cameras with no required subscription. Alerts lag 8–12 seconds.' },
    { slug: 'aosu-solarcam-p1-max', price: 129.99, list: 167.99, why: 'Sharp fixed 4K solar camera with good night vision.' },
    { slug: 'gmktec-k8-plus', price: 919.99, list: 1099.99, variant: '32GB RAM + 1TB SSD', why: 'Ryzen 7 mini PC with an OCuLink port for an external GPU.' },
  ],
  // Sales the stores announce that we could not price deal by deal yet.
  storeSales: [
    { brand: 'ELEGOO', slug: 'elegoo-centauri-carbon-2-combo', note: 'Store banner says Black Friday deals are live, up to 54% off. We have not confirmed model prices yet, so they are not listed above.' },
    { brand: 'Anycubic', slug: 'anycubic-kobra-x-combo', note: 'Makers101 reports the US store sale runs to November 29, with a Cyber Monday extension to December 7.' },
  ],
};
