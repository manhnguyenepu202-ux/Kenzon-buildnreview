import { Router } from 'express';
import {
  listCategories, getCategory, listProducts, countProducts, getProduct, getProductsBySlugs,
  addView, addClick, SORT_OPTIONS, SCORE_KEYS, SCORE_WEIGHTS,
} from '../models/catalog.js';
import { listComparisons, getComparison, listGuides, getGuide } from '../models/content.js';
import { getMedia } from '../models/settings.js';
import { markdown, slugify, absUrl, truncate, isoDate } from '../lib/helpers.js';

const r = Router();
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);

/* ---------- redirects that keep old URLs (and SEO) working ---------- */
r.get('/', (req, res) => res.redirect(301, '/en/'));
r.get(/^\/en$/, (req, res) => res.redirect(301, '/en/'));
r.get(/^\/vi(\/.*)?$/, (req, res) => res.redirect(301, `/en${req.params[0] || '/'}`));
// Every /en page ends with a slash, like the original site.
r.use((req, res, next) => {
  if (req.method === 'GET' && req.path.startsWith('/en/') && !req.path.endsWith('/') && !req.path.includes('.')) {
    const q = req.url.slice(req.path.length);
    return res.redirect(301, `${req.path}/${q}`);
  }
  next();
});

/* ---------- home ---------- */
r.get('/en/', wrap(async (req, res) => {
  const [categories, popular, featured, latest, comparisons, guides, total] = await Promise.all([
    listCategories(),
    listProducts({ sort: 'popular', limit: 8 }),
    listProducts({ featured: true, sort: 'score', limit: 4 }),
    listProducts({ sort: 'updated', limit: 6 }),
    listComparisons({ withProducts: true }),
    listGuides({ withProducts: true }),
    countProducts(),
  ]);
  res.render('pages/home', {
    page: { title: 'BuildNReview: 3D printer, DIY tool and home appliance reviews', description: res.locals.settings.site_tagline, canonical: '/en/' },
    categories, popular, featured, latest, comparisons: comparisons.slice(0, 4), comparisonCount: comparisons.length, guides, total,
  });
}));

/* ---------- category ---------- */
r.get('/en/category/:slug/', wrap(async (req, res, next) => {
  const category = await getCategory('slug', req.params.slug);
  if (!category) return next();
  const sort = SORT_OPTIONS.includes(req.query.sort) ? req.query.sort : 'score';
  const [products, guides, comparisons] = await Promise.all([
    listProducts({ categoryId: category.id, sort }),
    listGuides({ withProducts: false }),
    listComparisons({ withProducts: true }),
  ]);
  const catComparisons = comparisons.filter((c) => c.products.some((p) => p.category_id === category.id));
  res.render('pages/category', {
    page: {
      title: `Best ${category.name} reviews and ratings`,
      description: truncate(category.blurb || `${category.name} reviews, scores and comparisons.`),
      canonical: category.url,
    },
    category, products, sort,
    guides: guides.filter((g) => g.category_id === category.id),
    comparisons: catComparisons,
    jsonLd: [breadcrumbs([['Home', '/en/'], [category.name, category.url]]), itemList(products)],
  });
}));

/* ---------- review ---------- */
r.get('/en/review/:slug/', wrap(async (req, res, next) => {
  const product = await getProduct('slug', req.params.slug);
  if (!product) return next();
  addView(product.id).catch(() => {});

  const [related, comparisons, sponsor] = await Promise.all([
    listProducts({ categoryId: product.category_id, excludeId: product.id, sort: 'score', limit: 4 }),
    listComparisons({ withProducts: true }),
    pickSponsor(product),
  ]);
  const { html: bodyHtml, toc } = withAnchors(markdown(product.body));
  const cat = product.category;
  res.render('pages/review', {
    page: {
      title: product.title || `${product.name} review`,
      description: truncate(product.summary || product.verdict),
      canonical: product.url,
      ogType: 'article',
      image: product.image_url,
    },
    product, related, sponsor, bodyHtml, toc,
    comparisons: comparisons.filter((c) => c.product_slugs.includes(product.slug)),
    scoreKeys: SCORE_KEYS,
    jsonLd: [
      productLd(product),
      breadcrumbs([['Home', '/en/'], ...(cat ? [[cat.name, cat.url]] : []), [product.name, product.url]]),
    ],
  });
}));

/* ---------- compare ---------- */
r.get('/en/compare/', wrap(async (req, res) => {
  // ?items=a,b (compare tray links) or ?slot=a&slot=b (the builder form)
  const raw = req.query.items || [].concat(req.query.slot || []).join(',');
  const slugs = String(raw).split(',').map((s) => s.trim()).filter(Boolean).slice(0, 4);
  const [comparisons, all, categories] = await Promise.all([
    listComparisons({ withProducts: true }),
    listProducts({ sort: 'name' }),
    listCategories(),
  ]);
  const picked = slugs.length ? await getProductsBySlugs([...new Set(slugs)]) : [];
  res.render('pages/compare-index', {
    page: {
      title: picked.length >= 2 ? `${picked.map((p) => p.name).join(' vs ')}: side-by-side` : 'Compare products side by side',
      description: 'Put up to four 3D printers, tools or appliances side by side: scores, specs, pros, cons and prices.',
      canonical: '/en/compare/',
      noindex: slugs.length > 0,
    },
    comparisons, all, categories, picked, scoreKeys: SCORE_KEYS,
  });
}));

r.get('/en/compare/:slug/', wrap(async (req, res, next) => {
  const comparison = await getComparison('slug', req.params.slug);
  if (!comparison || comparison.products.length < 2) return next();
  const others = (await listComparisons({ withProducts: true })).filter((c) => c.id !== comparison.id).slice(0, 3);
  res.render('pages/compare', {
    page: { title: comparison.title, description: truncate(comparison.intro), canonical: comparison.url, ogType: 'article' },
    comparison, others, scoreKeys: SCORE_KEYS,
    jsonLd: [breadcrumbs([['Home', '/en/'], ['Compare', '/en/compare/'], [comparison.title, comparison.url]])],
  });
}));

/* ---------- best-of guides ---------- */
r.get('/en/best/', wrap(async (req, res) => {
  const guides = await listGuides({ withProducts: true });
  res.render('pages/guides', {
    page: { title: 'Best-of buying guides', description: 'Our top picks in every category, ranked by test score and value.', canonical: '/en/best/' },
    guides,
  });
}));

r.get('/en/best/:slug/', wrap(async (req, res, next) => {
  const guide = await getGuide('slug', req.params.slug);
  if (!guide) return next();
  const category = guide.category_id ? await getCategory('id', guide.category_id) : null;
  res.render('pages/guide', {
    page: { title: guide.title, description: truncate(guide.intro), canonical: guide.url, ogType: 'article', image: guide.entries[0]?.product.image_url },
    guide, category,
    jsonLd: [
      breadcrumbs([['Home', '/en/'], ['Best of', '/en/best/'], [guide.title, guide.url]]),
      itemList(guide.entries.map((e) => e.product)),
    ],
  });
}));

/* ---------- search ---------- */
r.get('/en/search/', wrap(async (req, res) => {
  const q = String(req.query.q || '').trim().slice(0, 80);
  const results = await listProducts(q ? { q, sort: 'score', limit: 48 } : { sort: 'score' });
  const categories = await listCategories();
  res.render('pages/search', {
    page: { title: q ? `Search results for “${q}”` : 'Search reviews', description: 'Search all BuildNReview reviews.', canonical: '/en/search/', noindex: true },
    q, results, categories,
  });
}));

r.get('/api/search', wrap(async (req, res) => {
  const q = String(req.query.q || '').trim().slice(0, 80);
  if (q.length < 2) return res.json({ results: [] });
  const items = await listProducts({ q, sort: 'score', limit: 8 });
  res.set('Cache-Control', 'public, max-age=60');
  res.json({
    results: items.map((p) => ({ name: p.name, brand: p.brand, url: p.url, score: p.overall, category: p.category?.name || '' })),
  });
}));

/* ---------- static pages ---------- */
const staticPages = {
  'how-we-test': { title: 'How we test and score', description: 'Our review process, the four scoring criteria and how the overall score is weighted.' },
  disclosure: { title: 'Affiliate disclosure', description: 'How BuildNReview earns money and why it never changes our verdicts.' },
  about: { title: 'About BuildNReview', description: 'Who we are and why we review 3D printers, DIY tools and home appliances.' },
  privacy: { title: 'Privacy policy', description: 'What data BuildNReview collects and how it is used.' },
};
for (const [slug, meta] of Object.entries(staticPages)) {
  r.get(`/en/${slug}/`, (req, res) => {
    res.render(`pages/${slug}`, { page: { ...meta, canonical: `/en/${slug}/` }, scoreKeys: SCORE_KEYS, weights: SCORE_WEIGHTS });
  });
}

/* ---------- affiliate redirect ---------- */
r.get(['/go', '/go/', '/go/:slug'], wrap(async (req, res) => {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  const fallback = res.locals.settings.affiliate_default_url;
  if (!req.params.slug) return res.redirect(302, fallback);
  const product = await getProduct('slug', req.params.slug);
  if (!product) return res.redirect(302, fallback);
  addClick(product.id).catch(() => {});
  res.redirect(302, product.affiliate_url || fallback);
}));

/* ---------- uploaded images ---------- */
r.get('/media/:id', wrap(async (req, res, next) => {
  const m = await getMedia(req.params.id);
  if (!m) return next();
  res.set('Content-Type', m.mime);
  res.set('Cache-Control', 'public, max-age=31536000, immutable');
  res.send(Buffer.from(m.data));
}));

/* ---------- SEO files ---------- */
r.get('/robots.txt', (req, res) => {
  res.type('text/plain').send(`User-agent: *\nDisallow: /admin\nDisallow: /go/\nDisallow: /api/\nDisallow: /en/search/\n\nSitemap: ${absUrl('/sitemap.xml')}\n`);
});

// The old Astro site published /sitemap-index.xml; keep it working for Search Console.
r.get(['/sitemap-index.xml', '/sitemap-0.xml'], (req, res) => res.redirect(301, '/sitemap.xml'));

r.get('/sitemap.xml', wrap(async (req, res) => {
  const [cats, products, comps, guides] = await Promise.all([listCategories(), listProducts({}), listComparisons(), listGuides()]);
  const urls = [
    { loc: '/en/', pri: '1.0' },
    ...cats.map((c) => ({ loc: c.url, pri: '0.8' })),
    ...products.map((p) => ({ loc: p.url, lastmod: isoDate(p.updated_at), pri: '0.9' })),
    { loc: '/en/compare/', pri: '0.6' },
    ...comps.map((c) => ({ loc: c.url, lastmod: isoDate(c.updated_at), pri: '0.7' })),
    { loc: '/en/best/', pri: '0.6' },
    ...guides.map((g) => ({ loc: g.url, lastmod: isoDate(g.updated_at), pri: '0.8' })),
    ...Object.keys(staticPages).map((s) => ({ loc: `/en/${s}/`, pri: '0.3' })),
  ];
  const body = urls.map((u) =>
    `  <url><loc>${absUrl(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<priority>${u.pri}</priority></url>`).join('\n');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
}));

export default r;

/* ================= helpers ================= */

/**
 * The "Maker pick" box shown on every review. It promotes the category's sponsor product
 * (set in Admin > Categories), or the best-scoring product that has an affiliate link.
 */
async function pickSponsor(product) {
  const cat = product.category;
  if (cat?.sponsor_product_id && cat.sponsor_product_id !== product.id) {
    const p = await getProduct('id', cat.sponsor_product_id);
    if (p) return p;
  }
  const candidates = await listProducts({ sort: 'score', excludeId: product.id });
  return candidates.find((p) => p.affiliate_url) || null;
}

/** Adds id anchors to <h2> headings and returns a table of contents. */
function withAnchors(html) {
  const toc = [];
  const used = new Set();
  const out = html.replace(/<h2>(.*?)<\/h2>/g, (m, inner) => {
    const text = inner.replace(/<[^>]+>/g, '');
    let id = slugify(text) || 'section';
    while (used.has(id)) id += '-2';
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

function breadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: absUrl(path) })),
  };
}

function itemList(products) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: absUrl(p.url), name: p.name })),
  };
}

function productLd(p) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: p.brand },
    model: p.model,
    description: p.summary,
    review: {
      '@type': 'Review',
      name: p.title,
      author: { '@type': 'Organization', name: 'BuildNReview' },
      publisher: { '@type': 'Organization', name: 'BuildNReview' },
      datePublished: isoDate(p.published_at),
      dateModified: isoDate(p.updated_at),
      reviewBody: p.verdict,
      reviewRating: { '@type': 'Rating', ratingValue: p.overall, bestRating: 10, worstRating: 0 },
      positiveNotes: { '@type': 'ItemList', itemListElement: p.pros.map((name, i) => ({ '@type': 'ListItem', position: i + 1, name })) },
      negativeNotes: { '@type': 'ItemList', itemListElement: p.cons.map((name, i) => ({ '@type': 'ListItem', position: i + 1, name })) },
    },
  };
  if (p.image_url) ld.image = p.image_url.startsWith('http') ? p.image_url : absUrl(p.image_url);
  if (p.price_usd) ld.offers = { '@type': 'Offer', priceCurrency: 'USD', price: p.price_usd, url: absUrl(p.url), availability: 'https://schema.org/InStock' };
  return ld;
}
