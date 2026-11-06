// One-time correction of stale prices, read from each brand's US store on 6 November 2026.
// scripts/apply-price-update.js applies it once per database. An edit is skipped if its text was changed in /admin.
export const priceUpdate = {
 "flag": "prices_2026_11_06",
 "prices": {
  "einstar-vega": 1999,
  "einstar-rockit": 1899,
  "einstar-2": 1249,
  "revopoint-miraco": 1499,
  "revopoint-pop-3-plus": 619,
  "revopoint-pop-4": 839,
  "revopoint-mini-2": 829,
  "revopoint-inspire-2": 494,
  "creality-falcon-t1": 2499,
  "aosu-indoorcam-p1-pro": 49.99,
  "uuna-tek-iauto": 2999,
  "uuna-tek-idraw-h-a3": 599,
  "creality-k2-combo": 549,
  "creality-ender-3-v3-se": 199,
  "snapmaker-u1": 699,
  "snapmaker-artisan-3-in-1": 1799,
  "laserpecker-lx2": 1299,
  "laserpecker-lp2-plus": 759,
  "laserpecker-lp2": 499,
  "laserpecker-lp4": 1039,
  "laserpecker-lp1-plus": 179,
  "sirui-aurora-85mm-f1-4": 404.1,
  "creality-cr-laser-falcon-10w": 189.9,
  "biqu-panda-breath": 89.99,
  "bigtreetech-panda-sense-pro": 85.35
 },
 "edits": [
  {
   "table": "products",
   "slug": "einstar-vega",
   "field": "body",
   "from": "the mesh.\n\nIt sits at **$1,599** on the of",
   "to": "the mesh.\n\nIt sits at **$1,999** on the of"
  },
  {
   "table": "products",
   "slug": "einstar-vega",
   "field": "body",
   "from": "\n## Price and value\n\nAt $1,599 the VEGA is",
   "to": "\n## Price and value\n\nAt $1,999 the VEGA is"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "specs",
   "from": "ndles\",\"value\":\"Scanner $1,519 · + EXModel $1,744 · + Accessories Pro Kit $1,918\"}]",
   "to": "ndles\",\"value\":\"Scanner $1,899 · + EXModel $2,124 · + Accessories Pro Kit $2,298\"}]"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "body",
   "from": "al store sells it for **$1,519** (list $1,",
   "to": "al store sells it for **$1,899** (list $1,"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "body",
   "from": "\n## Price and value\n\nAt $1,519 the Rockit ",
   "to": "\n## Price and value\n\nAt $1,899 the Rockit "
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "verdict",
   "from": "less of a fight, and at $899 it costs fa",
   "to": "less of a fight, and at $1,249 it costs fa"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "specs",
   "from": "ndles\",\"value\":\"Scanner $899 · + EXModel Personal $1,124 · + Accessories Pro Kit $1,298\"},{\"label\":",
   "to": "ndles\",\"value\":\"Scanner $1,249 · + EXModel Personal $1,474 · + Accessories Pro Kit $1,648\"},{\"label\":"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": " official store it is **$899** at the ti",
   "to": " official store it is **$1,249** at the ti"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": "\n## Price and value\n\nAt $899 the EINSTAR",
   "to": "\n## Price and value\n\nAt $1,249 the EINSTAR"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": "he Accessories Pro Kit ($1,298) is worth c",
   "to": "he Accessories Pro Kit ($1,648) is worth c"
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "specs",
   "from": "\"Price\",\"value\":\"MIRACO $1,349 · MIRACO Pro $1,799\"}]",
   "to": "\"Price\",\"value\":\"MIRACO $1,499 · MIRACO Pro $1,999\"}]"
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "body",
   "from": "ptop. It is priced at **$1,349** for the 16 GB version and $1,799 for the 32 ",
   "to": "ptop. It is priced at **$1,499** for the 16 GB version and $1,999 for the 32 "
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "body",
   "from": "C.\n\n## Price and value\n\n$1,349 is fair for",
   "to": "C.\n\n## Price and value\n\n$1,499 is fair for"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-3-plus",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $526 · Advanced $611\"}]",
   "to": "rice\",\"value\":\"Standard $619 · Advanced $719\"}]"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-3-plus",
   "field": "body",
   "from": "oid and iOS. It costs **$526** for the Standard Edition and $611 for the Adv",
   "to": "oid and iOS. It costs **$619** for the Standard Edition and $719 for the Adv"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "title",
   "from": "ser and infrared in one $755 scanner",
   "to": "ser and infrared in one $839 scanner"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $755 · Premium $872\"}]",
   "to": "rice\",\"value\":\"Standard $839 · Premium $969\"}]"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "body",
   "from": "tandard Edition costs **$755** and the Premium Edition **$872** on the of",
   "to": "tandard Edition costs **$839** and the Premium Edition **$969** on the of"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "body",
   "from": "\n## Price and value\n\nAt $755 the POP 4 g",
   "to": "\n## Price and value\n\nAt $839 the POP 4 g"
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $746 · Advanced $836\"}]",
   "to": "rice\",\"value\":\"Standard $829 · Advanced $929\"}]"
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "body",
   "from": "tandard Edition costs **$746** and the Advanced Edition **$836** on the of",
   "to": "tandard Edition costs **$829** and the Advanced Edition **$929** on the of"
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "body",
   "from": "\n## Price and value\n\nAt $746 it is not c",
   "to": "\n## Price and value\n\nAt $829 it is not c"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "title",
   "from": "nner that punches above $439",
   "to": "nner that punches above $494"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $439 · Premium $503\"}]",
   "to": "rice\",\"value\":\"Standard $494 · Premium $566\"}]"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "body",
   "from": " just 190 g. It costs **$439** (Standard) or $503 (Premium) a",
   "to": " just 190 g. It costs **$494** (Standard) or $566 (Premium) a"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "body",
   "from": "\n## Price and value\n\nAt $439 it is very ",
   "to": "\n## Price and value\n\nAt $494 it is very "
  },
  {
   "table": "products",
   "slug": "creality-falcon-t1",
   "field": "summary",
   "from": "les in 15 seconds, from $2,249. Very fast ",
   "to": "les in 15 seconds, from $2,499. Very fast "
  },
  {
   "table": "products",
   "slug": "creality-falcon-t1",
   "field": "specs",
   "from": "ice\",\"value\":\"20W diode $2,249 · 20W fibre $2,429 · 40W diode $2,699 · UV $3,599 · MOPA $3,869\"}]",
   "to": "ice\",\"value\":\"20W diode $2,499 · 20W fibre $2,699 · 40W diode $2,999 · UV $3,999 · MOPA $4,299\"}]"
  },
  {
   "table": "products",
   "slug": "creality-falcon-t1",
   "field": "body",
   "from": "he base machine costs **$2,249** with a 20W diode, $2,429 with 20W fibre, $2,699 with 40W diode, $3,599 with UV and $3,869 with 60W MO",
   "to": "he base machine costs **$2,499** with a 20W diode, $2,699 with 20W fibre, $2,999 with 40W diode, $3,999 with UV and $4,299 with 60W MO"
  },
  {
   "table": "products",
   "slug": "creality-falcon-t1",
   "field": "body",
   "from": "On 31 October 2026",
   "to": "On 6 November 2026"
  },
  {
   "table": "products",
   "slug": "aosu-indoorcam-p1-pro",
   "field": "summary",
   "from": "ll and microSD storage, $41.99. HomeCamCaf",
   "to": "ll and microSD storage, $49.99. HomeCamCaf"
  },
  {
   "table": "products",
   "slug": "aosu-indoorcam-p1-pro",
   "field": "verdict",
   "from": "ry between listings. At $41.99 it is an ea",
   "to": "ry between listings. At $49.99 it is an ea"
  },
  {
   "table": "products",
   "slug": "aosu-indoorcam-p1-pro",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$41.99 · 3-pack $1",
   "to": "label\":\"Price\",\"value\":\"$49.99 · 3-pack $1"
  },
  {
   "table": "products",
   "slug": "aosu-indoorcam-p1-pro",
   "field": "body",
   "from": "croSD card.\n\nIt costs **$41.99** on the of",
   "to": "croSD card.\n\nIt costs **$49.99** on the of"
  },
  {
   "table": "products",
   "slug": "uuna-tek-iauto",
   "field": "verdict",
   "from": "s some learning, and at $2,799 it only mak",
   "to": "s some learning, and at $2,999 it only mak"
  },
  {
   "table": "products",
   "slug": "uuna-tek-iauto",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $2,799 · Advanced $2,939\"}]",
   "to": "rice\",\"value\":\"Standard $2,999 · Advanced $3,149\"}]"
  },
  {
   "table": "products",
   "slug": "uuna-tek-iauto",
   "field": "body",
   "from": " Standard model costs **$2,799** on the of",
   "to": " Standard model costs **$2,999** on the of"
  },
  {
   "table": "products",
   "slug": "uuna-tek-iauto",
   "field": "body",
   "from": "99); the Advanced model $2,939.\n\n## Techni",
   "to": "99); the Advanced model $3,149.\n\n## Techni"
  },
  {
   "table": "products",
   "slug": "uuna-tek-idraw-h-a3",
   "field": "verdict",
   "from": "s still limited, but at $559 it undercut",
   "to": "s still limited, but at $599 it undercut"
  },
  {
   "table": "products",
   "slug": "uuna-tek-idraw-h-a3",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$559 without bas",
   "to": "label\":\"Price\",\"value\":\"$599 without bas"
  },
  {
   "table": "products",
   "slug": "uuna-tek-idraw-h-a3",
   "field": "body",
   "from": "er or wood.\n\nIt costs **$559** on the of",
   "to": "er or wood.\n\nIt costs **$599** on the of"
  },
  {
   "table": "products",
   "slug": "creality-k2-combo",
   "field": "summary",
   "from": "-colour CFS and camera, $521 ($419 without CFS",
   "to": "-colour CFS and camera, $549 ($399 without CFS"
  },
  {
   "table": "products",
   "slug": "creality-k2-combo",
   "field": "verdict",
   "from": "mm enclosed printer for $521. CGMagazine",
   "to": "mm enclosed printer for $549. CGMagazine"
  },
  {
   "table": "products",
   "slug": "creality-k2-combo",
   "field": "specs",
   "from": "rice\",\"value\":\"K2 Combo $521 · K2 without CFS $419\"}]",
   "to": "rice\",\"value\":\"K2 Combo $549 · K2 without CFS $399\"}]"
  },
  {
   "table": "products",
   "slug": "creality-k2-combo",
   "field": "body",
   "from": "ells the K2 Combo for **$521** and the K2 without CFS for **$419**.\n\n## Revi",
   "to": "ells the K2 Combo for **$549** and the K2 without CFS for **$399**.\n\n## Revi"
  },
  {
   "table": "products",
   "slug": "creality-k2-combo",
   "field": "body",
   "from": "On 31 October 2026",
   "to": "On 6 November 2026"
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "title",
   "from": "der-3 V3 SE review: the $179 beginner pr",
   "to": "der-3 V3 SE review: the $199 beginner pr"
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "summary",
   "from": "ing and up to 250 mm/s, $179. Printed a ",
   "to": "ing and up to 250 mm/s, $199. Printed a "
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$179 (list $199)",
   "to": "label\":\"Price\",\"value\":\"$199 (list $199)"
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "body",
   "from": "der Enders.\n\nIt costs **$179** on Creali",
   "to": "der Enders.\n\nIt costs **$199** on Creali"
  },
  {
   "table": "products",
   "slug": "laserpecker-lx2",
   "field": "specs",
   "from": "ice\",\"value\":\"20 W from $1,499 · 40 W from $1,949\"}]",
   "to": "ice\",\"value\":\"20 W from $1,299 · 40 W from $1,799\"}]"
  },
  {
   "table": "products",
   "slug": "laserpecker-lx2",
   "field": "body",
   "from": "Standard Bundle costs **$1,499** on the of",
   "to": "Standard Bundle costs **$1,299** on the of"
  },
  {
   "table": "products",
   "slug": "laserpecker-lx2",
   "field": "body",
   "from": "99) and the 40 W bundle $1,949 at the time",
   "to": "99) and the 40 W bundle $1,799 at the time"
  },
  {
   "table": "products",
   "slug": "laserpecker-lx2",
   "field": "body",
   "from": "b.\n\n## Price and value\n\n$1,499 for a Class",
   "to": "b.\n\n## Price and value\n\n$1,299 for a Class"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2-plus",
   "field": "specs",
   "from": ":\"Price\",\"value\":\"Basic $809 · SpinTrack $999 · All-in-On",
   "to": ":\"Price\",\"value\":\"Basic $759 · SpinTrack $839 · All-in-On"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2-plus",
   "field": "body",
   "from": "he Basic Bundle costs **$809** on the of",
   "to": "he Basic Bundle costs **$759** on the of"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2-plus",
   "field": "body",
   "from": "ndle with the roller is $999.\n\n## Techni",
   "to": "ndle with the roller is $839.\n\n## Techni"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2",
   "field": "summary",
   "from": ", weak cutting, and now $549.",
   "to": ", weak cutting, and now $499."
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $549 · SpinTrack $699 · Deluxe $799\"}]",
   "to": "rice\",\"value\":\"Standard $499 · SpinTrack $639 · Deluxe $759\"}]"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2",
   "field": "body",
   "from": "Standard Bundle costs **$549** on the of",
   "to": "Standard Bundle costs **$499** on the of"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp4",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $1,099 · All-in-One $1,999\"}]",
   "to": "rice\",\"value\":\"Standard $1,039 · All-in-One $1,919\"}]"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp4",
   "field": "body",
   "from": "Standard Bundle costs **$1,099** at the ti",
   "to": "Standard Bundle costs **$1,039** at the ti"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp4",
   "field": "body",
   "from": "p metal engraving.\n- At $1,099 it costs mo",
   "to": "p metal engraving.\n- At $1,039 it costs mo"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "title",
   "from": "ker LP1 Plus preview: a $199 pocket engr",
   "to": "ker LP1 Plus preview: a $179 pocket engr"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "specs",
   "from": "rice\",\"value\":\"Standard $199 · Creator $349\"}]",
   "to": "rice\",\"value\":\"Standard $179 · Creator $269\"}]"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "body",
   "from": "Standard Bundle costs **$199** (list $39",
   "to": "Standard Bundle costs **$179** (list $39"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "body",
   "from": "h an auto-focus stand **$349**.\n\n## An h",
   "to": "h an auto-focus stand **$269**.\n\n## An h"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "body",
   "from": "n to laser engraving at $199. Buy the en",
   "to": "n to laser engraving at $179. Buy the en"
  },
  {
   "table": "products",
   "slug": "sirui-aurora-85mm-f1-4",
   "field": "title",
   "from": "frame portrait lens for $449",
   "to": "frame portrait lens for $404.10"
  },
  {
   "table": "products",
   "slug": "sirui-aurora-85mm-f1-4",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$449 (list $599)",
   "to": "label\":\"Price\",\"value\":\"$404.10 (list $599)"
  },
  {
   "table": "products",
   "slug": "sirui-aurora-85mm-f1-4",
   "field": "body",
   "from": "s as much. SIRUI asks **$449** at the ti",
   "to": "s as much. SIRUI asks **$404.10** at the ti"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "title",
   "from": "ew: a big-bed laser for $205",
   "to": "ew: a big-bed laser for $189.90"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "summary",
   "from": "d 400 × 415 mm bed, now $205. Detailed a",
   "to": "d 400 × 415 mm bed, now $189.90. Detailed a"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "verdict",
   "from": " $489 laser in 2022; at $205 it is one o",
   "to": " $489 laser in 2022; at $189.90 it is one o"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$205 · basic kit",
   "to": "label\":\"Price\",\"value\":\"$189.90 · basic kit"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "body",
   "from": "ra sensors.\n\nIt costs **$205** on the of",
   "to": "ra sensors.\n\nIt costs **$189.90** on the of"
  },
  {
   "table": "products",
   "slug": "biqu-panda-breath",
   "field": "specs",
   "from": "\",\"value\":\"US warehouse $95.85 · with filter pack $105.98\"}]",
   "to": "\",\"value\":\"US warehouse $89.99 · with filter pack $95.58\"}]"
  },
  {
   "table": "products",
   "slug": "biqu-panda-breath",
   "field": "body",
   "from": "October 2026 it costs **$95.85** from BIQU’s US warehouse, or $105.98 with a spar",
   "to": "October 2026 it costs **$89.99** from BIQU’s US warehouse, or $95.58 with a spar"
  },
  {
   "table": "products",
   "slug": "biqu-panda-breath",
   "field": "body",
   "from": "On 31 October 2026",
   "to": "On 6 November 2026"
  },
  {
   "table": "products",
   "slug": "bigtreetech-panda-sense-pro",
   "field": "summary",
   "from": "Home Assistant support, $89.99. Useful tre",
   "to": "Home Assistant support, $85.35. Useful tre"
  },
  {
   "table": "products",
   "slug": "bigtreetech-panda-sense-pro",
   "field": "specs",
   "from": "label\":\"Price\",\"value\":\"$89.99\"}]",
   "to": "label\":\"Price\",\"value\":\"$85.35\"}]"
  },
  {
   "table": "products",
   "slug": "bigtreetech-panda-sense-pro",
   "field": "body",
   "from": "QTT system.\n\nIt costs **$89.99** on BIQU’s",
   "to": "QTT system.\n\nIt costs **$85.35** on BIQU’s"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "body",
   "from": "VEGA ($1,599",
   "to": "VEGA ($1,999"
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "body",
   "from": "VEGA ($1,599",
   "to": "VEGA ($1,999"
  },
  {
   "table": "products",
   "slug": "3dmakerpro-toucan",
   "field": "body",
   "from": "VEGA ($1,599",
   "to": "VEGA ($1,999"
  },
  {
   "table": "products",
   "slug": "einstar-vega",
   "field": "body",
   "from": "Rockit ($1,519",
   "to": "Rockit ($1,899"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": "Rockit ($1,519",
   "to": "Rockit ($1,899"
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "body",
   "from": "Rockit ($1,519",
   "to": "Rockit ($1,899"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "body",
   "from": "Rockit ($1,519",
   "to": "Rockit ($1,899"
  },
  {
   "table": "products",
   "slug": "revopoint-metroy-pro",
   "field": "body",
   "from": "Rockit ($1,519",
   "to": "Rockit ($1,899"
  },
  {
   "table": "products",
   "slug": "einstar-vega",
   "field": "body",
   "from": "EINSTAR 2 ($899",
   "to": "EINSTAR 2 ($1,249"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "body",
   "from": "EINSTAR 2 ($899",
   "to": "EINSTAR 2 ($1,249"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-3-plus",
   "field": "body",
   "from": "EINSTAR 2 ($899",
   "to": "EINSTAR 2 ($1,249"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "body",
   "from": "EINSTAR 2 ($899",
   "to": "EINSTAR 2 ($1,249"
  },
  {
   "table": "products",
   "slug": "nova3d-seal-3d-scanner",
   "field": "body",
   "from": "EINSTAR 2 ($899",
   "to": "EINSTAR 2 ($1,249"
  },
  {
   "table": "products",
   "slug": "einstar-vega",
   "field": "body",
   "from": "MIRACO ($1,349",
   "to": "MIRACO ($1,499"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-3-plus",
   "field": "body",
   "from": "MIRACO ($1,349",
   "to": "MIRACO ($1,499"
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "body",
   "from": "MIRACO ($1,349",
   "to": "MIRACO ($1,499"
  },
  {
   "table": "products",
   "slug": "3dmakerpro-toucan",
   "field": "body",
   "from": "MIRACO ($1,349",
   "to": "MIRACO ($1,499"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": "POP 3 Plus ($526",
   "to": "POP 3 Plus ($619"
  },
  {
   "table": "products",
   "slug": "revopoint-miraco",
   "field": "body",
   "from": "POP 3 Plus ($526",
   "to": "POP 3 Plus ($619"
  },
  {
   "table": "products",
   "slug": "revopoint-inspire-2",
   "field": "body",
   "from": "POP 3 Plus ($526",
   "to": "POP 3 Plus ($619"
  },
  {
   "table": "products",
   "slug": "nova3d-seal-3d-scanner",
   "field": "body",
   "from": "POP 3 Plus ($526",
   "to": "POP 3 Plus ($619"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "body",
   "from": "POP 3 Plus ($526",
   "to": "POP 3 Plus ($619"
  },
  {
   "table": "products",
   "slug": "revopoint-metroy-pro",
   "field": "body",
   "from": "POP 4 ($755",
   "to": "POP 4 ($839"
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "body",
   "from": "POP 4 ($755",
   "to": "POP 4 ($839"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-3-plus",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "nova3d-seal-3d-scanner",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "revopoint-pop-4",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "3dmakerpro-moose",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "3dmakerpro-moose-lite",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "3dmakerpro-seal-lite",
   "field": "body",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "comparisons",
   "slug": "3dmakerpro-seal-lite-vs-revopoint-inspire-2",
   "field": "verdict",
   "from": "INSPIRE 2 ($439",
   "to": "INSPIRE 2 ($494"
  },
  {
   "table": "products",
   "slug": "uuna-tek-idraw-h-a3",
   "field": "body",
   "from": "iAuto ($2,799",
   "to": "iAuto ($2,999"
  },
  {
   "table": "products",
   "slug": "uuna-tek-iauto",
   "field": "body",
   "from": "iDraw H A3 ($559",
   "to": "iDraw H A3 ($599"
  },
  {
   "table": "products",
   "slug": "creality-k2-pro-combo",
   "field": "body",
   "from": "K2 Combo ($521",
   "to": "K2 Combo ($549"
  },
  {
   "table": "products",
   "slug": "elegoo-centauri-carbon-2-combo",
   "field": "body",
   "from": "K2 Combo ($521",
   "to": "K2 Combo ($549"
  },
  {
   "table": "comparisons",
   "slug": "creality-k2-combo-vs-elegoo-centauri-carbon-2-combo",
   "field": "verdict",
   "from": "K2 Combo ($521",
   "to": "K2 Combo ($549"
  },
  {
   "table": "products",
   "slug": "elegoo-centauri-2",
   "field": "body",
   "from": "Ender-3 V3 SE ($179",
   "to": "Ender-3 V3 SE ($199"
  },
  {
   "table": "comparisons",
   "slug": "creality-ender-3-v3-se-vs-bambu-lab-a1-mini",
   "field": "verdict",
   "from": "Ender-3 V3 SE ($179",
   "to": "Ender-3 V3 SE ($199"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp5",
   "field": "body",
   "from": "LX2 ($1,499",
   "to": "LX2 ($1,299"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp4",
   "field": "body",
   "from": "LX2 ($1,499",
   "to": "LX2 ($1,299"
  },
  {
   "table": "products",
   "slug": "creality-falcon2-pro",
   "field": "body",
   "from": "LX2 ($1,499",
   "to": "LX2 ($1,299"
  },
  {
   "table": "products",
   "slug": "creality-falcon-a1-pro",
   "field": "body",
   "from": "LX2 ($1,499",
   "to": "LX2 ($1,299"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2",
   "field": "body",
   "from": "LP2 Plus ($809",
   "to": "LP2 Plus ($759"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "body",
   "from": "LP2 Plus ($809",
   "to": "LP2 Plus ($759"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2-plus",
   "field": "body",
   "from": "LP2 ($549",
   "to": "LP2 ($499"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp1-plus",
   "field": "body",
   "from": "LP2 ($549",
   "to": "LP2 ($499"
  },
  {
   "table": "products",
   "slug": "creality-falcon-a1c",
   "field": "body",
   "from": "LP2 ($549",
   "to": "LP2 ($499"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp5",
   "field": "body",
   "from": "LP4 ($1,099",
   "to": "LP4 ($1,039"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2-plus",
   "field": "body",
   "from": "LP4 ($1,099",
   "to": "LP4 ($1,039"
  },
  {
   "table": "products",
   "slug": "laserpecker-lp2",
   "field": "body",
   "from": "LP1 Plus ($199",
   "to": "LP1 Plus ($179"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-10w",
   "field": "body",
   "from": "LP1 Plus ($199",
   "to": "LP1 Plus ($179"
  },
  {
   "table": "comparisons",
   "slug": "sirui-aurora-85mm-vs-sirui-sniper-56mm",
   "field": "intro",
   "from": "Aurora costs $449",
   "to": "Aurora costs $404.10"
  },
  {
   "table": "products",
   "slug": "creality-falcon2-22w",
   "field": "body",
   "from": "CR-Laser Falcon 10W ($205",
   "to": "CR-Laser Falcon 10W ($189.90"
  },
  {
   "table": "products",
   "slug": "creality-cr-laser-falcon-5w",
   "field": "body",
   "from": "CR-Laser Falcon 10W ($205",
   "to": "CR-Laser Falcon 10W ($189.90"
  },
  {
   "table": "products",
   "slug": "acmer-p1-s-pro",
   "field": "body",
   "from": "CR-Laser Falcon 10W ($205",
   "to": "CR-Laser Falcon 10W ($189.90"
  },
  {
   "table": "comparisons",
   "slug": "acmer-p1-s-pro-vs-creality-cr-laser-falcon-10w",
   "field": "verdict",
   "from": "CR-Laser Falcon 10W ($205",
   "to": "CR-Laser Falcon 10W ($189.90"
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "summary",
   "from": "for under $900.",
   "to": "for $1,249."
  },
  {
   "table": "products",
   "slug": "revopoint-mini-2",
   "field": "verdict",
   "from": "under $800",
   "to": "under $850"
  },
  {
   "table": "products",
   "slug": "einstar-rockit",
   "field": "body",
   "from": " (list $1,899)",
   "to": ""
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "specs",
   "from": " (list $199)",
   "to": ""
  },
  {
   "table": "products",
   "slug": "einstar-2",
   "field": "body",
   "from": ", down from a $1,249 list price",
   "to": ""
  },
  {
   "table": "products",
   "slug": "creality-ender-3-v3-se",
   "field": "body",
   "from": " on 31 October 2026 (list $199)",
   "to": " on 6 November 2026"
  },
  {
   "table": "guides",
   "slug": "best-3d-scanners",
   "field": "items",
   "from": "infrared for under $900:",
   "to": "infrared for $1,249:"
  },
  {
   "table": "guides",
   "slug": "best-3d-scanners",
   "field": "items",
   "from": "190 g, from $439,",
   "to": "190 g, from $494,"
  },
  {
   "table": "guides",
   "slug": "best-budget-portrait-lenses",
   "field": "items",
   "from": "bokeh for $449.",
   "to": "bokeh for $404.10."
  },
  {
   "table": "guides",
   "slug": "best-pen-plotters",
   "field": "items",
   "from": "LightBurn, $559.",
   "to": "LightBurn, $599."
  },
  {
   "table": "guides",
   "slug": "best-3d-scanners-for-small-parts",
   "field": "items",
   "from": "wireless, from $755.",
   "to": "wireless, from $839."
  },
  {
   "table": "guides",
   "slug": "best-portable-laser-engravers",
   "field": "items",
   "from": "real cutting for $809.",
   "to": "real cutting for $759."
  },
  {
   "table": "guides",
   "slug": "best-portable-laser-engravers",
   "field": "items",
   "from": "engraver, now $549.",
   "to": "engraver, now $499."
  },
  {
   "table": "guides",
   "slug": "best-portable-laser-engravers",
   "field": "items",
   "from": "Pocket-sized and $199.",
   "to": "Pocket-sized and $179."
  },
  {
   "table": "guides",
   "slug": "best-budget-3d-scanners",
   "field": "items",
   "from": "Revo Scan software. $439.",
   "to": "Revo Scan software. $494."
  },
  {
   "table": "guides",
   "slug": "best-creality-falcon-laser-engravers",
   "field": "items",
   "from": "fine spot for $205.",
   "to": "fine spot for $189.90."
  },
  {
   "table": "guides",
   "slug": "best-budget-laser-engravers",
   "field": "items",
   "from": "415 mm for $205.",
   "to": "415 mm for $189.90."
  },
  {
   "table": "guides",
   "slug": "best-subscription-free-security-cameras",
   "field": "items",
   "from": "detection for $41.99.",
   "to": "detection for $49.99."
  },
  {
   "table": "guides",
   "slug": "best-multicolor-3d-printers",
   "field": "items",
   "from": "16 colours. $521.",
   "to": "16 colours. $549."
  }
 ]
};
