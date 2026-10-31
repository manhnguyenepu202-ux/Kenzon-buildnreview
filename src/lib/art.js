/**
 * Technical-drawing illustrations used when a product has no photo yet.
 * Manufacturer photos are usually copyrighted, so the drawing is a safe placeholder.
 * Colours come from CSS (.art-svg classes in site.css) and the per-product --tone variable.
 */
const ART = {
  'fdm-enclosed': `
    <rect x="58" y="22" width="124" height="138" rx="8" class="b"/>
    <rect x="68" y="34" width="104" height="96" rx="3" class="glass"/>
    <path d="M68 52h104" class="l"/>
    <rect x="106" y="46" width="28" height="16" rx="3" class="t"/>
    <path d="M120 62v6" class="l"/>
    <path d="M118 68h4" class="a"/>
    <path d="M78 116h84" class="l"/>
    <path d="M104 116v-22l8-8h16l8 8v22" class="t"/>
    <rect x="68" y="138" width="104" height="12" rx="2" class="b2"/>
    <circle cx="164" cy="144" r="2.5" class="ad"/>`,
  'fdm-open': `
    <rect x="46" y="140" width="148" height="18" rx="4" class="b"/>
    <path d="M62 140V26M178 140V26M58 26h124" class="l w"/>
    <path d="M62 60h116" class="l"/>
    <rect x="108" y="52" width="26" height="22" rx="3" class="t"/>
    <path d="M121 74v6" class="l"/>
    <path d="M119 80h4" class="a"/>
    <rect x="74" y="122" width="92" height="7" rx="2" class="b2"/>
    <path d="M106 122c0-14 6-20 15-20s15 6 15 20" class="t"/>
    <circle cx="182" cy="149" r="2.5" class="ad"/>`,
  'drill-driver': `
    <path d="M58 58h96a10 10 0 0 1 10 10v12a10 10 0 0 1-10 10H58z" class="t"/>
    <rect x="40" y="62" width="20" height="24" rx="3" class="b2"/>
    <path d="M40 74H14" class="l w"/>
    <path d="M96 90l-8 50h28l2-50" class="b"/>
    <rect x="78" y="140" width="56" height="22" rx="4" class="b2"/>
    <path d="M100 96h8" class="a"/>
    <path d="M150 64v20" class="l"/>`,
  'multi-tool': `
    <path d="M70 66h104a14 14 0 0 1 0 28H70z" class="t"/>
    <rect x="40" y="64" width="34" height="32" rx="5" class="b2"/>
    <path d="M40 80H24l-6 -10h-8M24 80l-6 10h-8" class="l w"/>
    <path d="M186 80h14" class="l"/>
    <path d="M110 66v28M126 66v28" class="l"/>
    <rect x="140" y="74" width="20" height="12" rx="2" class="a"/>
    <path d="M76 116c20 16 64 16 96 0" class="dim"/>`,
  'air-fryer': `
    <path d="M70 34h100a12 12 0 0 1 12 12v104a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8V46a12 12 0 0 1 12-12z" class="t"/>
    <rect x="78" y="44" width="84" height="22" rx="4" class="b2"/>
    <circle cx="120" cy="55" r="5" class="ad"/>
    <rect x="68" y="88" width="104" height="58" rx="5" class="b"/>
    <path d="M100 112h40" class="l w"/>
    <path d="M100 112v12h40v-12" class="l"/>`,
  'robot-vacuum': `
    <ellipse cx="120" cy="112" rx="84" ry="34" class="t"/>
    <path d="M36 112v10c0 19 38 34 84 34s84-15 84-34v-10" class="b"/>
    <ellipse cx="120" cy="104" rx="18" ry="8" class="b2"/>
    <path d="M102 104v-6c0-5 8-8 18-8s18 3 18 8v6" class="b2"/>
    <path d="M70 120c14 8 86 8 100 0" class="dim"/>
    <circle cx="160" cy="112" r="3" class="ad"/>`,
  'stick-vacuum': `
    <path d="M62 150l70-110" class="l w"/>
    <rect x="124" y="20" width="44" height="44" rx="10" transform="rotate(32 146 42)" class="t"/>
    <circle cx="146" cy="42" r="10" class="b2"/>
    <path d="M118 66l-14 22" class="l w"/>
    <path d="M30 150h70a6 6 0 0 1 6 6v4H24v-4a6 6 0 0 1 6-6z" class="b"/>
    <path d="M40 162h56" class="a"/>`,
  'laser-module': `
    <rect x="84" y="24" width="72" height="84" rx="8" class="t"/>
    <path d="M96 40h48M96 52h48" class="l"/>
    <rect x="104" y="108" width="32" height="18" rx="3" class="b2"/>
    <path d="M120 126v22" class="a"/>
    <rect x="40" y="150" width="160" height="10" rx="2" class="b"/>
    <path d="M60 150l20-6h80l20 6" class="dim"/>`,
  'cnc-module': `
    <rect x="88" y="20" width="64" height="70" rx="10" class="t"/>
    <path d="M100 36h40" class="l"/>
    <rect x="108" y="90" width="24" height="18" rx="2" class="b2"/>
    <path d="M120 108v28" class="l w"/>
    <path d="M116 136h8" class="a"/>
    <rect x="40" y="148" width="160" height="12" rx="2" class="b"/>
    <path d="M70 148c10-8 20-8 30 0" class="dim"/>`,
  'air-purifier': `
    <rect x="70" y="26" width="100" height="132" rx="12" class="t"/>
    <rect x="84" y="44" width="72" height="60" rx="6" class="b"/>
    <path d="M92 58h56M92 70h56M92 82h56M92 94h56" class="dim"/>
    <circle cx="120" cy="128" r="12" class="b2"/>
    <circle cx="150" cy="140" r="3" class="ad"/>`,
  'filament-dryer': `
    <rect x="38" y="100" width="164" height="26" rx="6" class="b2"/>
    <rect x="48" y="40" width="64" height="60" rx="8" class="t"/>
    <rect x="128" y="40" width="64" height="60" rx="8" class="t"/>
    <circle cx="80" cy="70" r="18" class="b"/><circle cx="80" cy="70" r="6" class="l"/>
    <circle cx="160" cy="70" r="18" class="b"/><circle cx="160" cy="70" r="6" class="l"/>
    <circle cx="186" cy="113" r="3" class="ad"/>`,
  '3d-scanner': `
    <rect x="96" y="28" width="48" height="104" rx="12" class="t"/>
    <circle cx="120" cy="50" r="8" class="b2"/>
    <circle cx="120" cy="76" r="5" class="ad"/>
    <circle cx="120" cy="100" r="8" class="b2"/>
    <rect x="108" y="132" width="24" height="30" rx="6" class="b"/>
    <path d="M144 60l46-26M144 76h50M144 92l46 26" class="dim"/>
    <path d="M196 40v80" class="a"/>`,
  'laser-engraver': `
    <rect x="34" y="40" width="172" height="110" rx="8" class="b"/>
    <rect x="46" y="52" width="148" height="62" rx="4" class="glass"/>
    <path d="M46 70h148" class="l"/>
    <rect x="106" y="64" width="28" height="14" rx="3" class="t"/>
    <path d="M120 78v24" class="a"/>
    <path d="M70 108h100" class="dim"/>
    <rect x="46" y="124" width="148" height="14" rx="2" class="b2"/>
    <circle cx="186" cy="131" r="3" class="ad"/>`,
  'mini-pc': `
    <rect x="52" y="58" width="136" height="90" rx="14" class="t"/>
    <path d="M52 124h136" class="l"/>
    <rect x="66" y="132" width="14" height="6" rx="1" class="b2"/>
    <rect x="86" y="132" width="14" height="6" rx="1" class="b2"/>
    <circle cx="170" cy="135" r="3" class="ad"/>
    <path d="M84 78h72M84 90h72M84 102h72" class="dim"/>
    <path d="M60 150h120" class="a"/>`,
  'pen-plotter': `
    <rect x="30" y="132" width="180" height="22" rx="4" class="b"/>
    <rect x="48" y="112" width="144" height="20" rx="2" class="glass"/>
    <path d="M40 56h160" class="l w"/>
    <path d="M44 56v76M196 56v76" class="l"/>
    <rect x="104" y="46" width="32" height="26" rx="4" class="t"/>
    <path d="M120 72v30" class="l w"/>
    <path d="M117 102l3 8 3-8" class="a"/>
    <path d="M62 122c18-10 30 6 48-2s28-8 40 0" class="dim"/>`,
  'security-camera': `
    <path d="M120 22v22" class="l w"/>
    <rect x="96" y="14" width="48" height="10" rx="3" class="b2"/>
    <rect x="70" y="44" width="100" height="78" rx="20" class="t"/>
    <circle cx="120" cy="82" r="24" class="b"/>
    <circle cx="120" cy="82" r="12" class="glass"/>
    <circle cx="120" cy="82" r="4" class="ad"/>
    <rect x="58" y="134" width="124" height="26" rx="4" class="b2"/>
    <path d="M70 140l20 14M94 140l20 14M118 140l20 14M142 140l20 14" class="dim"/>
    <circle cx="156" cy="58" r="3" class="a"/>`,
  'camera-lens': `
    <rect x="58" y="44" width="124" height="96" rx="10" class="t"/>
    <path d="M58 64h124M58 120h124" class="l"/>
    <path d="M86 44v96M154 44v96" class="dim"/>
    <rect x="182" y="58" width="16" height="68" rx="3" class="b2"/>
    <rect x="42" y="52" width="16" height="80" rx="3" class="b"/>
    <path d="M110 92h20" class="a"/>
    <circle cx="170" cy="54" r="3" class="ad"/>`,
};

export const ART_TYPES = Object.keys(ART);

export function artSvg(type, label = '') {
  const body = ART[type] || ART['fdm-open'];
  const safe = String(label).replace(/[<>&"]/g, '');
  return `<svg class="art-svg" viewBox="0 0 240 180" role="img" aria-label="${safe}">${body}</svg>`;
}
