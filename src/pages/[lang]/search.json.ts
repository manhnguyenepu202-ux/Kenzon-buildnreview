import type { APIRoute } from 'astro';
import { formatPrice, staticPaths, type Lang } from '../../i18n/ui';
import { getProducts, getCategory, types } from '../../lib/catalog';
import { normalize, type SearchItem } from '../../scripts/search-core';

export const getStaticPaths = staticPaths;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const products = await getProducts();
  const items: SearchItem[] = products.map((p) => {
    const d = p.data;
    const type = types[d.type]?.[lang] ?? d.type;
    const category = getCategory(d.category).name[lang];
    // gồm cả tên loại ở hai ngôn ngữ để "air fryer" vẫn tìm ra ở bản tiếng Việt
    const altType = Object.values(types[d.type] ?? {}).join(' ');
    return {
      slug: p.id,
      name: d.name,
      brand: d.brand,
      model: d.model,
      type,
      category,
      score: p.overall,
      price: formatPrice(lang, d.price),
      url: `/${lang}/review/${p.id}/`,
      k: normalize(`${d.name} ${d.brand} ${d.model} ${altType} ${category}`),
    };
  });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
