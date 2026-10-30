export interface SearchItem {
  slug: string;
  name: string;
  brand: string;
  model: string;
  type: string;
  category: string;
  score: number;
  price: string;
  url: string;
  /** Chuỗi đã chuẩn hóa (bỏ dấu, chữ thường) để so khớp. */
  k: string;
}

/** Bỏ dấu tiếng Việt và ký tự đặc biệt: "Nồi chiên" -> "noi chien". */
export const normalize = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, ' ').trim();

const cache = new Map<string, Promise<SearchItem[]>>();
export function loadIndex(lang: string) {
  if (!cache.has(lang)) cache.set(lang, fetch(`/${lang}/search.json`).then((r) => r.json()));
  return cache.get(lang)!;
}

export function searchItems(items: SearchItem[], query: string) {
  const terms = normalize(query).split(' ').filter(Boolean);
  if (!terms.length) return [];
  const compact = terms.join('');
  return items
    .map((it) => {
      const words = it.k.split(' ');
      let score = 0;
      for (const t of terms) {
        if (words.includes(t)) score += 3;
        else if (words.some((w) => w.startsWith(t))) score += 2;
        else if (it.k.includes(t)) score += 1;
        else return null; // mọi từ khóa đều phải khớp
      }
      // "p1s", "dcd791": khớp model khi người dùng gõ liền
      if (it.k.replace(/ /g, '').includes(compact)) score += 2;
      return { it, score };
    })
    .filter((x): x is { it: SearchItem; score: number } => !!x)
    .sort((a, b) => b.score - a.score || b.it.score - a.it.score)
    .map((x) => x.it);
}
