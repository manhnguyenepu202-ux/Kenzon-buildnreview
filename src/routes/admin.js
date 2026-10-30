import { Router } from 'express';
import multer from 'multer';
import {
  listCategories, getCategory, saveCategory, listProducts, getProduct, saveProduct, deleteProduct,
  slugTaken, countProducts, SCORE_KEYS,
} from '../models/catalog.js';
import {
  listComparisons, getComparison, saveComparison, deleteComparison,
  listGuides, getGuide, saveGuide, deleteGuide,
} from '../models/content.js';
import { getSettings, saveSettings, DEFAULT_SETTINGS, saveMedia, listMedia, deleteMedia } from '../models/settings.js';
import { checkCredentials, ensureCsrf, verifyCsrf, requireAdmin, loginLocked, recordLogin } from '../lib/auth.js';
import { slugify, lines, parseSpecs, specsToText } from '../lib/helpers.js';
import { ART_TYPES } from '../lib/art.js';
import { now } from '../db/index.js';

const r = Router();
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, /^image\/(png|jpe?g|webp|gif|svg\+xml|avif)$/.test(file.mimetype)),
});

r.use((req, res, next) => {
  res.set('X-Robots-Tag', 'noindex, nofollow');
  res.set('Cache-Control', 'no-store');
  res.locals.csrf = ensureCsrf(req);
  res.locals.adminPath = req.path;
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

const flash = (req, type, text) => { req.session.flash = { type, text }; };
const okUrl = (u) => !u || /^https?:\/\/\S+$/i.test(u) || /^\/media\/\d+$/.test(u);

/* ---------------- login ---------------- */
r.get('/login', (req, res) => {
  if (req.session.admin) return res.redirect('/admin');
  res.render('admin/login', { title: 'Sign in', error: null, email: '', next: req.query.next || '/admin' });
});

r.post('/login', verifyCsrf, (req, res) => {
  const ip = req.ip;
  const next = /^\/admin(\/|$)/.test(req.body.next || '') ? req.body.next : '/admin';
  if (loginLocked(ip)) {
    return res.status(429).render('admin/login', { title: 'Sign in', error: 'Too many attempts. Try again in 15 minutes.', email: req.body.email, next });
  }
  const ok = checkCredentials(req.body.email, req.body.password);
  recordLogin(ip, ok);
  if (!ok) return res.status(401).render('admin/login', { title: 'Sign in', error: 'Wrong email or password.', email: req.body.email, next });
  req.session.admin = { email: req.body.email, at: Date.now() };
  res.redirect(next);
});

r.post('/logout', verifyCsrf, (req, res) => {
  req.session = null;
  res.redirect('/admin/login');
});

r.use(requireAdmin);
r.post('*', (req, res, next) => (req.is('multipart/form-data') ? next() : verifyCsrf(req, res, next)));

/* ---------------- dashboard ---------------- */
r.get('/', wrap(async (req, res) => {
  const [products, categories, comparisons, guides, drafts] = await Promise.all([
    listProducts({ status: 'all', sort: 'popular' }),
    listCategories(),
    listComparisons({ status: 'all' }),
    listGuides({ status: 'all' }),
    countProducts({ status: 'draft' }),
  ]);
  const totals = products.reduce((t, p) => ({ views: t.views + p.views, clicks: t.clicks + p.clicks }), { views: 0, clicks: 0 });
  res.render('admin/dashboard', {
    title: 'Dashboard',
    products, categories, comparisons, guides, drafts, totals,
    topClicks: [...products].sort((a, b) => b.clicks - a.clicks).slice(0, 6),
    missingAffiliate: products.filter((p) => !p.affiliate_url).length,
    samples: products.filter((p) => p.is_sample).length,
  });
}));

/* ---------------- products ---------------- */
r.get('/products', wrap(async (req, res) => {
  const categories = await listCategories();
  const products = await listProducts({
    status: 'all', q: req.query.q, categoryId: req.query.category || undefined, sort: req.query.sort || 'updated',
  });
  res.render('admin/products', { title: 'Reviews', products, categories, query: req.query });
}));

const blankProduct = () => ({
  status: 'published', scores: Object.fromEntries(SCORE_KEYS.map((k) => [k, 8])), pros: [], cons: [], specs: [], gallery: [],
  art_type: 'fdm-open', tone: '#7a8b5c', is_sample: false, featured: false,
});

async function productForm(res, product, errors = []) {
  const categories = await listCategories();
  res.render('admin/product-form', {
    title: product.id ? `Edit: ${product.name}` : 'New review',
    product, categories, errors, artTypes: ART_TYPES, scoreKeys: SCORE_KEYS, specsToText,
  });
}

r.get('/products/new', wrap(async (req, res) => productForm(res, blankProduct())));

r.get('/products/:id', wrap(async (req, res, next) => {
  const product = await getProduct('id', req.params.id, { includeDraft: true });
  if (!product) return next();
  await productForm(res, product);
}));

r.post('/products/save', wrap(async (req, res) => {
  const b = req.body;
  const id = b.id ? Number(b.id) : null;
  const data = {
    id,
    name: (b.name || '').trim(),
    slug: slugify(b.slug || b.name),
    status: b.status,
    brand: b.brand?.trim(),
    model: b.model?.trim(),
    category_id: b.category_id,
    art_type: b.art_type,
    tone: /^#[0-9a-f]{6}$/i.test(b.tone || '') ? b.tone : null,
    image_url: (b.image_url || '').trim(),
    gallery: lines(b.gallery),
    price_usd: b.price_usd,
    released: b.released,
    title: b.title?.trim(),
    summary: b.summary?.trim(),
    verdict: b.verdict?.trim(),
    best_for: b.best_for?.trim(),
    body: b.body || '',
    pros: lines(b.pros),
    cons: lines(b.cons),
    specs: parseSpecs(b.specs),
    scores: b.scores || {},
    retail_rating: b.retail_rating,
    retail_count: b.retail_count,
    affiliate_url: (b.affiliate_url || '').trim(),
    affiliate_label: b.affiliate_label?.trim(),
    featured: Boolean(b.featured),
    is_sample: Boolean(b.is_sample),
  };
  const errors = [];
  if (!data.name) errors.push('Product name is required.');
  if (!data.slug) errors.push('URL slug is required.');
  else if (await slugTaken('products', data.slug, id)) errors.push(`The URL slug “${data.slug}” is already used by another review.`);
  if (!okUrl(data.image_url)) errors.push('Main image must be a full https:// URL or an uploaded /media/ image.');
  if (data.gallery.some((u) => !okUrl(u))) errors.push('Every gallery line must be an image URL.');
  if (data.affiliate_url && !/^https?:\/\//i.test(data.affiliate_url)) errors.push('Affiliate link must start with https://');
  if (errors.length) return productForm(res, { ...blankProduct(), ...data }, errors);

  if (id) {
    const old = await getProduct('id', id, { includeDraft: true });
    data.published_at = old?.published_at;
    data.updated_at = now();
  }
  const savedId = await saveProduct(data, id);
  flash(req, 'ok', `Saved “${data.name}”.`);
  res.redirect(`/admin/products/${savedId}`);
}));

r.post('/products/:id/delete', wrap(async (req, res) => {
  await deleteProduct(req.params.id);
  flash(req, 'ok', 'Review deleted.');
  res.redirect('/admin/products');
}));

/* ---------------- categories ---------------- */
r.get('/categories', wrap(async (req, res) => {
  res.render('admin/categories', { title: 'Categories', categories: await listCategories() });
}));

async function categoryForm(res, category, errors = []) {
  const products = await listProducts({ status: 'all', sort: 'name' });
  res.render('admin/category-form', {
    title: category.id ? `Edit: ${category.name}` : 'New category', category, products, errors, artTypes: ART_TYPES, scoreKeys: SCORE_KEYS,
  });
}

r.get('/categories/new', wrap(async (req, res) => categoryForm(res, { score_labels: {}, sort_order: 10 })));
r.get('/categories/:id', wrap(async (req, res, next) => {
  const category = await getCategory('id', req.params.id);
  if (!category) return next();
  await categoryForm(res, category);
}));

r.post('/categories/save', wrap(async (req, res) => {
  const b = req.body;
  const id = b.id ? Number(b.id) : null;
  const data = { ...b, id, name: (b.name || '').trim(), slug: slugify(b.slug || b.name), score_labels: b.score_labels || {} };
  const errors = [];
  if (!data.name) errors.push('Name is required.');
  if (await slugTaken('categories', data.slug, id)) errors.push('That URL slug is already used.');
  if (!okUrl((data.image_url || '').trim())) errors.push('Image must be a full https:// URL.');
  if (errors.length) return categoryForm(res, data, errors);
  await saveCategory(data, id);
  flash(req, 'ok', `Saved category “${data.name}”.`);
  res.redirect('/admin/categories');
}));

/* ---------------- comparisons ---------------- */
r.get('/comparisons', wrap(async (req, res) => {
  res.render('admin/comparisons', { title: 'Comparisons', comparisons: await listComparisons({ status: 'all', withProducts: true }) });
}));

async function comparisonForm(res, comparison, errors = []) {
  const products = await listProducts({ status: 'all', sort: 'name' });
  res.render('admin/comparison-form', { title: comparison.id ? 'Edit comparison' : 'New comparison', comparison, products, errors });
}

r.get('/comparisons/new', wrap(async (req, res) => comparisonForm(res, { status: 'published', product_slugs: [] })));
r.get('/comparisons/:id', wrap(async (req, res, next) => {
  const c = await getComparison('id', req.params.id, { includeDraft: true });
  if (!c) return next();
  await comparisonForm(res, c);
}));

r.post('/comparisons/save', wrap(async (req, res) => {
  const b = req.body;
  const id = b.id ? Number(b.id) : null;
  const product_slugs = [...new Set([b.p1, b.p2, b.p3, b.p4].filter(Boolean))];
  const data = { ...b, id, product_slugs, title: (b.title || '').trim(), slug: slugify(b.slug || product_slugs.join('-vs-')), updated_at: now() };
  const errors = [];
  if (!data.title) errors.push('Title is required.');
  if (product_slugs.length < 2) errors.push('Pick at least two different products.');
  if (await slugTaken('comparisons', data.slug, id)) errors.push('That URL slug is already used.');
  if (errors.length) return comparisonForm(res, data, errors);
  await saveComparison(data, id);
  flash(req, 'ok', 'Comparison saved.');
  res.redirect('/admin/comparisons');
}));

r.post('/comparisons/:id/delete', wrap(async (req, res) => {
  await deleteComparison(req.params.id);
  flash(req, 'ok', 'Comparison deleted.');
  res.redirect('/admin/comparisons');
}));

/* ---------------- guides ---------------- */
r.get('/guides', wrap(async (req, res) => {
  res.render('admin/guides', { title: 'Best-of guides', guides: await listGuides({ status: 'all' }) });
}));

async function guideForm(res, guide, errors = []) {
  const [products, categories] = await Promise.all([listProducts({ status: 'all', sort: 'name' }), listCategories()]);
  res.render('admin/guide-form', { title: guide.id ? 'Edit guide' : 'New guide', guide, products, categories, errors });
}

r.get('/guides/new', wrap(async (req, res) => guideForm(res, { status: 'published', items: [] })));
r.get('/guides/:id', wrap(async (req, res, next) => {
  const g = await getGuide('id', req.params.id, { includeDraft: true });
  if (!g) return next();
  await guideForm(res, g);
}));

r.post('/guides/save', wrap(async (req, res) => {
  const b = req.body;
  const id = b.id ? Number(b.id) : null;
  const arr = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);
  const awards = arr(b.item_award);
  const notes = arr(b.item_note);
  const items = arr(b.item_slug)
    .map((slug, i) => ({ slug, award: String(awards[i] || '').trim(), note: String(notes[i] || '').trim() }))
    .filter((i) => i.slug);
  const data = { ...b, id, items, title: (b.title || '').trim(), slug: slugify(b.slug || b.title), updated_at: now() };
  const errors = [];
  if (!data.title) errors.push('Title is required.');
  if (!items.length) errors.push('Add at least one product.');
  if (await slugTaken('guides', data.slug, id)) errors.push('That URL slug is already used.');
  if (errors.length) return guideForm(res, data, errors);
  await saveGuide(data, id);
  flash(req, 'ok', 'Guide saved.');
  res.redirect('/admin/guides');
}));

r.post('/guides/:id/delete', wrap(async (req, res) => {
  await deleteGuide(req.params.id);
  flash(req, 'ok', 'Guide deleted.');
  res.redirect('/admin/guides');
}));

/* ---------------- settings ---------------- */
r.get('/settings', wrap(async (req, res) => {
  res.render('admin/settings', { title: 'Settings', values: await getSettings(), keys: Object.keys(DEFAULT_SETTINGS), errors: [] });
}));

r.post('/settings', wrap(async (req, res) => {
  const errors = [];
  if (req.body.affiliate_default_url && !/^https?:\/\//i.test(req.body.affiliate_default_url)) errors.push('Default affiliate link must start with https://');
  if (req.body.analytics_id && !/^G-[A-Z0-9]+$/i.test(req.body.analytics_id.trim())) errors.push('Google Analytics ID looks like G-XXXXXXX.');
  if (errors.length) {
    return res.render('admin/settings', { title: 'Settings', values: { ...(await getSettings()), ...req.body }, keys: Object.keys(DEFAULT_SETTINGS), errors });
  }
  await saveSettings(req.body);
  flash(req, 'ok', 'Settings saved.');
  res.redirect('/admin/settings');
}));

/* ---------------- media ---------------- */
r.get('/media', wrap(async (req, res) => {
  res.render('admin/media', { title: 'Images', media: await listMedia() });
}));

r.post('/media', upload.single('file'), verifyCsrf, wrap(async (req, res) => {
  const wantsJson = req.get('accept')?.includes('application/json');
  if (!req.file) {
    if (wantsJson) return res.status(400).json({ error: 'Choose a PNG, JPG, WebP or GIF image up to 4 MB.' });
    flash(req, 'err', 'Choose a PNG, JPG, WebP or GIF image up to 4 MB.');
    return res.redirect('/admin/media');
  }
  const id = await saveMedia({ filename: req.file.originalname, mime: req.file.mimetype, buffer: req.file.buffer });
  if (wantsJson) return res.json({ url: `/media/${id}` });
  flash(req, 'ok', `Uploaded. Image URL: /media/${id}`);
  res.redirect('/admin/media');
}));

r.post('/media/:id/delete', wrap(async (req, res) => {
  await deleteMedia(req.params.id);
  flash(req, 'ok', 'Image deleted.');
  res.redirect('/admin/media');
}));

export default r;
