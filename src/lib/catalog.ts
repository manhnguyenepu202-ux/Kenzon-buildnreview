import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type CategoryId = '3d-printers' | 'tools' | 'home';
type L10n = Record<Lang, string>;

export interface CategoryInfo {
  id: CategoryId;
  name: L10n;
  blurb: L10n;
  /** Nhãn của bốn tiêu chí chấm điểm, đặt theo ngôn ngữ của từng ngành hàng. */
  scoreLabels: Record<ScoreKey, L10n>;
  /** Thứ tự hiển thị thông số. */
  specOrder: string[];
}

export type ScoreKey = 'performance' | 'quality' | 'ease' | 'value';
export const scoreKeys: ScoreKey[] = ['performance', 'quality', 'ease', 'value'];
/** Trọng số điểm tổng. Công khai ở trang "Cách chấm điểm". */
export const scoreWeights: Record<ScoreKey, number> = { performance: 0.35, quality: 0.25, ease: 0.2, value: 0.2 };

export const categories: CategoryInfo[] = [
  {
    id: '3d-printers',
    name: { vi: 'Máy in 3D', en: '3D printers' },
    blurb: {
      vi: 'Máy in FDM cho người mới, xưởng nhỏ và người in nhiều màu.',
      en: 'FDM printers for beginners, small shops and multi-colour printing.',
    },
    scoreLabels: {
      performance: { vi: 'Tốc độ in', en: 'Print speed' },
      quality: { vi: 'Chất lượng bản in', en: 'Print quality' },
      ease: { vi: 'Dễ cài đặt và dùng', en: 'Setup and ease of use' },
      value: { vi: 'Đáng tiền', en: 'Value' },
    },
    specOrder: ['buildVolume', 'maxSpeed', 'nozzleTemp', 'bedTemp', 'enclosure', 'multiColor', 'autoLeveling', 'connectivity', 'weight'],
  },
  {
    id: 'tools',
    name: { vi: 'DIY và dụng cụ', en: 'DIY and tools' },
    blurb: {
      vi: 'Máy khoan, máy đa năng và dụng cụ dùng pin cho nhà và xưởng.',
      en: 'Drills, multi-tools and cordless kit for home and workshop.',
    },
    scoreLabels: {
      performance: { vi: 'Lực và tốc độ', en: 'Power and speed' },
      quality: { vi: 'Độ bền, hoàn thiện', en: 'Build and durability' },
      ease: { vi: 'Cầm nắm, thao tác', en: 'Handling' },
      value: { vi: 'Đáng tiền', en: 'Value' },
    },
    specOrder: ['voltage', 'power', 'maxTorque', 'noLoadSpeed', 'oscillation', 'chuck', 'brushless', 'hammer', 'weight'],
  },
  {
    id: 'home',
    name: { vi: 'Đồ gia dụng', en: 'Home appliances' },
    blurb: {
      vi: 'Nồi chiên không dầu, robot hút bụi và máy hút bụi cầm tay.',
      en: 'Air fryers, robot vacuums and cordless stick vacuums.',
    },
    scoreLabels: {
      performance: { vi: 'Hiệu quả làm việc', en: 'Performance' },
      quality: { vi: 'Độ hoàn thiện', en: 'Build quality' },
      ease: { vi: 'Dễ dùng, dễ vệ sinh', en: 'Ease of use and cleaning' },
      value: { vi: 'Đáng tiền', en: 'Value' },
    },
    specOrder: ['capacity', 'power', 'suction', 'runtime', 'dustbin', 'programs', 'dualZone', 'mopping', 'selfEmpty', 'noise', 'weight'],
  },
];

export const types: Record<string, L10n> = {
  'fdm-enclosed': { vi: 'Máy in FDM có buồng kín', en: 'Enclosed FDM printer' },
  'fdm-open': { vi: 'Máy in FDM khung hở', en: 'Open-frame FDM printer' },
  'drill-driver': { vi: 'Máy khoan vặn vít', en: 'Drill driver' },
  'multi-tool': { vi: 'Máy cắt rung đa năng', en: 'Oscillating multi-tool' },
  'air-fryer': { vi: 'Nồi chiên không dầu', en: 'Air fryer' },
  'robot-vacuum': { vi: 'Robot hút bụi', en: 'Robot vacuum' },
  'stick-vacuum': { vi: 'Máy hút bụi cầm tay', en: 'Stick vacuum' },
};

export const specLabels: Record<string, L10n> = {
  buildVolume: { vi: 'Kích thước in', en: 'Build volume' },
  maxSpeed: { vi: 'Tốc độ in tối đa', en: 'Max print speed' },
  nozzleTemp: { vi: 'Nhiệt độ đầu phun', en: 'Max nozzle temp' },
  bedTemp: { vi: 'Nhiệt độ bàn in', en: 'Max bed temp' },
  enclosure: { vi: 'Buồng kín', en: 'Enclosure' },
  multiColor: { vi: 'In nhiều màu', en: 'Multi-colour' },
  autoLeveling: { vi: 'Tự cân bàn', en: 'Auto bed levelling' },
  connectivity: { vi: 'Kết nối', en: 'Connectivity' },
  weight: { vi: 'Trọng lượng', en: 'Weight' },
  voltage: { vi: 'Điện áp pin', en: 'Battery voltage' },
  power: { vi: 'Công suất', en: 'Power' },
  maxTorque: { vi: 'Mô-men xoắn tối đa', en: 'Max torque' },
  noLoadSpeed: { vi: 'Tốc độ không tải', en: 'No-load speed' },
  oscillation: { vi: 'Tần số dao động', en: 'Oscillation rate' },
  chuck: { vi: 'Đầu kẹp', en: 'Chuck' },
  brushless: { vi: 'Động cơ không chổi than', en: 'Brushless motor' },
  hammer: { vi: 'Chế độ khoan búa', en: 'Hammer mode' },
  capacity: { vi: 'Dung tích', en: 'Capacity' },
  suction: { vi: 'Lực hút', en: 'Suction' },
  runtime: { vi: 'Thời gian chạy', en: 'Runtime' },
  dustbin: { vi: 'Hộp chứa bụi', en: 'Dust bin' },
  programs: { vi: 'Chương trình nấu', en: 'Cooking presets' },
  dualZone: { vi: 'Hai ngăn nấu', en: 'Dual zone' },
  mopping: { vi: 'Lau nhà', en: 'Mopping' },
  selfEmpty: { vi: 'Trạm tự đổ rác', en: 'Self-empty dock' },
  noise: { vi: 'Độ ồn', en: 'Noise' },
};

export type Product = CollectionEntry<'products'> & { overall: number };
export type Review = CollectionEntry<'reviews'>;

export const overallScore = (s: Record<ScoreKey, number>) =>
  Math.round(scoreKeys.reduce((sum, k) => sum + s[k] * scoreWeights[k], 0) * 10) / 10;

export const getCategory = (id: string) => categories.find((c) => c.id === id)!;

export async function getProducts(): Promise<Product[]> {
  const items = await getCollection('products');
  return items
    .map((p) => ({ ...p, overall: overallScore(p.data.scores) }))
    .sort((a, b) => b.overall - a.overall);
}

export async function getReview(lang: Lang, slug: string) {
  const all = await getCollection('reviews');
  return all.find((r) => r.id === `${lang}/${slug}`);
}

export async function getReviewMap(lang: Lang) {
  const all = await getCollection('reviews');
  return new Map(all.filter((r) => r.id.startsWith(`${lang}/`)).map((r) => [r.id.slice(lang.length + 1), r]));
}

/** Giá trị thông số đã dịch (true/false -> Có/Không). */
export function specValue(v: string | number | boolean, yes: string, no: string) {
  if (typeof v === 'boolean') return v ? yes : no;
  return String(v);
}

/** Các cặp đối đầu có trang riêng (tốt cho SEO). */
export const matchups: [string, string][] = [
  ['bambu-lab-p1s', 'creality-k1c'],
  ['bambu-lab-a1-mini', 'elegoo-neptune-4-pro'],
  ['dewalt-dcd791', 'makita-dhp485'],
  ['philips-airfryer-xxl', 'ninja-foodi-af300'],
  ['roborock-s8', 'roborock-q7-max'],
];

export const matchupSlug = ([a, b]: [string, string]) => `${a}-vs-${b}`;
