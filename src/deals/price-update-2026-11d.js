// 7 November 2026 rescore of two enclosed multicolour printers, from the printer-scorecard method: a value score of 9.0+
// needs measured evidence, so both drop to 8.8. The Centauri Carbon 2 gains on performance and ease from Tom's Hardware's
// timed prints and under-20-minute setup. The Kobra S1 loses on performance because Creative Bloq's first unit failed.
const CC2_VERDICT_FROM = 'and Hackster compared print quality to Bambu Lab.';
const CC2_VERDICT_TO = 'Hackster compared print quality to Bambu Lab, and Tom’s Hardware went from box to first print in under 20 minutes.';
const CC2_BODY_FROM = 'There were no print failures. Hackster';
const CC2_BODY_TO = `There were no print failures.

Tom’s Hardware (February 2026) went from box to first print in under 20 minutes. It printed seven multicolour chameleons in 4 hours 55 minutes with no colour bleed on default purge settings, and TPU down to 95A fed through CANVAS without trouble. The 5-inch screen was easy to use and the camera has AI print-failure detection. It found the spool holders fussy with some third-party spools and the loading routine too cool for high-temperature filaments.

Hackster`;

const S1_VERDICT_FROM = 'Reviewers hit screen freezes and a cancelled print that kept going,';
const S1_VERDICT_TO = 'Creative Bloq’s first unit threw constant errors and died before a replacement worked well, MakerHacks hit screen freezes and a cancelled print that kept going,';
const S1_VALUE_FROM = 'it is exceptional value.';
const S1_VALUE_TO = 'it is strong value if you can live with the reliability reports.';
const S1_BODY_FROM = 'including Bambu Lab machines.\n- **MakerHacks** rated';
const S1_BODY_TO = `including Bambu Lab machines.
- **Creative Bloq** (updated May 2025) had constant errors on its first unit, which it traced to a clogged nozzle and a faulty filament-break sensor, until the printer died. Anycubic sent a replacement that worked well, including eight-colour prints, and the reviewer praised the customer service. Remote printing from the app stayed buggy. With the door closed in quiet mode, the fans were almost silent.
- **MakerHacks** rated`;
const S1_SOURCES_FROM = 'price-point/)\n- [MakerHacks: Anycubic Kobra S1 Combo review]';
const S1_SOURCES_TO = 'price-point/)\n- [Creative Bloq: Kobra S1 Combo review](https://www.creativebloq.com/3d/anycubic-kobra-s1-combo-review-excellent-when-it-works-frustrating-when-it-doesnt)\n- [MakerHacks: Anycubic Kobra S1 Combo review]';

// Each `from` matches only the old text, so the edits are skipped on a fresh database built from the updated packs.
export const rescore = {
  flag: 'scores_2026_11_07',
  prices: {},
  scores: {
    'elegoo-centauri-carbon-2-combo': { performance: 8.7, quality: 8.7, ease: 8.4, value: 8.8 },
    'anycubic-kobra-s1-combo': { performance: 8.3, quality: 8.7, ease: 7.6, value: 8.8 },
  },
  edits: [
    { table: 'products', slug: 'elegoo-centauri-carbon-2-combo', field: 'verdict', from: CC2_VERDICT_FROM, to: CC2_VERDICT_TO },
    { table: 'products', slug: 'elegoo-centauri-carbon-2-combo', field: 'body', from: CC2_BODY_FROM, to: CC2_BODY_TO },
    { table: 'products', slug: 'anycubic-kobra-s1-combo', field: 'verdict', from: S1_VERDICT_FROM, to: S1_VERDICT_TO },
    { table: 'products', slug: 'anycubic-kobra-s1-combo', field: 'verdict', from: S1_VALUE_FROM, to: S1_VALUE_TO },
    { table: 'products', slug: 'anycubic-kobra-s1-combo', field: 'body', from: S1_BODY_FROM, to: S1_BODY_TO },
    { table: 'products', slug: 'anycubic-kobra-s1-combo', field: 'body', from: S1_SOURCES_FROM, to: S1_SOURCES_TO },
  ],
};
