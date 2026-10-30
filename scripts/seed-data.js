import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from '../src/config.js';
import { run, get } from '../src/db/index.js';
import { saveCategory, saveProduct, getCategory } from '../src/models/catalog.js';
import { saveComparison, saveGuide } from '../src/models/content.js';
import snapmaker from './seed/snapmaker-products.js';


const categories = [
  {
    slug: '3d-printers', name: '3D Printers', group_name: '3D printing', sort_order: 1, art_type: 'fdm-enclosed', tone: '#3d5afe',
    image_url: '',
    blurb: 'FDM printers for beginners, small shops and multi-colour printing, scored on speed, print quality, setup and value.',
    score_labels: { performance: 'Print speed', quality: 'Print quality', ease: 'Setup and ease of use', value: 'Value' },
    sponsor: 'snapmaker-u1',
  },
  {
    slug: 'maker-addons', name: 'Laser, CNC & Maker Add-ons', group_name: 'DIY', sort_order: 2, art_type: 'laser-module', tone: '#ff5252',
    image_url: '',
    blurb: 'Laser modules, CNC spindles, filament dryers and air purifiers that turn a printer into a full home workshop.',
    score_labels: { performance: 'Power and output', quality: 'Build and results', ease: 'Setup and ease of use', value: 'Value' },
    sponsor: 'snapmaker-artisan-3-in-1',
  },
  {
    slug: 'tools', name: 'Power Tools & DIY', group_name: 'DIY', sort_order: 3, art_type: 'drill-driver', tone: '#f2b705',
    image_url: '',
    blurb: 'Cordless drills, impact drivers and oscillating multi-tools for home repairs and the weekend workshop.',
    score_labels: { performance: 'Power and speed', quality: 'Build and durability', ease: 'Handling', value: 'Value' },
    sponsor: 'snapmaker-artisan-3-in-1',
  },
  {
    slug: 'home', name: 'Home Appliances', group_name: 'Home', sort_order: 4, art_type: 'robot-vacuum', tone: '#26a69a',
    image_url: '',
    blurb: 'Air fryers, robot vacuums and cordless stick vacuums tested for real kitchens and real floors.',
    score_labels: { performance: 'Performance', quality: 'Build quality', ease: 'Ease of use and cleaning', value: 'Value' },
    sponsor: 'snapmaker-u1',
  },
];

const comparisons = [
  {
    slug: 'snapmaker-u1-vs-bambu-lab-p1s',
    title: 'Snapmaker U1 vs Bambu Lab P1S: toolchanger or AMS?',
    products: ['snapmaker-u1', 'bambu-lab-p1s'],
    intro: 'Both printers cost about the same with multi-colour hardware, but they solve colour changes in opposite ways. The U1 swaps four complete toolheads; the P1S feeds four spools into one nozzle through the AMS.',
    verdict: 'Pick the Snapmaker U1 if you print multi-colour or multi-material parts often: toolhead swaps waste far less filament and finish sooner. Pick the Bambu Lab P1S if you print mostly single-colour, want an enclosure out of the box for ABS and like Bambu’s polished app ecosystem.',
  },
  {
    slug: 'snapmaker-artisan-3-in-1-vs-snapmaker-u1',
    title: 'Snapmaker Artisan vs Snapmaker U1: 3-in-1 or a dedicated printer?',
    products: ['snapmaker-artisan-3-in-1', 'snapmaker-u1'],
    intro: 'Snapmaker’s two flagships target different people. The Artisan prints, lasers and carves in a 400 mm enclosure; the U1 is a fast four-toolhead printer that does one job very well.',
    verdict: 'Choose the U1 if 3D printing is what you do most, especially in several colours. Choose the Artisan if you will genuinely use laser cutting and CNC carving as well: it replaces three machines and has the largest work area.',
  },
  {
    slug: 'bambu-lab-p1s-vs-creality-k1c',
    title: 'Bambu Lab P1S vs Creality K1C',
    products: ['bambu-lab-p1s', 'creality-k1c'],
    intro: 'Two fast, enclosed CoreXY printers at a similar price. The P1S is the easier all-rounder; the K1C adds a hardened nozzle for carbon-fibre filaments.',
    verdict: 'The P1S wins for most people thanks to its software and optional AMS multi-colour. The K1C is the better pick if you plan to print carbon-fibre filled materials straight away.',
  },
  {
    slug: 'bambu-lab-a1-mini-vs-elegoo-neptune-4-pro',
    title: 'Bambu Lab A1 mini vs Elegoo Neptune 4 Pro',
    products: ['bambu-lab-a1-mini', 'elegoo-neptune-4-pro'],
    intro: 'The two most popular budget printers: the compact, nearly automatic A1 mini against the larger, more hands-on Neptune 4 Pro.',
    verdict: 'Beginners should buy the A1 mini for its automatic calibration. Choose the Neptune 4 Pro if you need a bigger build plate and don’t mind tuning.',
  },
  {
    slug: 'dewalt-dcd791-vs-makita-dhp485',
    title: 'DeWalt DCD791 vs Makita DHP485',
    products: ['dewalt-dcd791', 'makita-dhp485'],
    intro: 'Two compact brushless 18/20V drills that most DIYers shortlist. Which one deserves a place in your toolbox?',
    verdict: 'The DeWalt has more torque for big holes and lag screws. The Makita is lighter, adds a hammer mode and is the better everyday drill for home repairs.',
  },
  {
    slug: 'philips-airfryer-xxl-vs-ninja-foodi-af300',
    title: 'Philips Airfryer XXL vs Ninja Foodi AF300',
    products: ['philips-airfryer-xxl', 'ninja-foodi-af300'],
    intro: 'Single big basket or two independent zones? We compare the two most-asked-about family air fryers.',
    verdict: 'The Ninja’s dual zones make complete meals easier. The Philips crisps more evenly in one large basket and is quieter.',
  },
  {
    slug: 'roborock-s8-vs-roborock-q7-max',
    title: 'Roborock S8 vs Roborock Q7 Max',
    products: ['roborock-s8', 'roborock-q7-max'],
    intro: 'Is the premium S8 worth the extra money over Roborock’s value-focused Q7 Max?',
    verdict: 'The S8 mops far better and handles pet hair with less tangling. The Q7 Max delivers most of the vacuuming performance for much less.',
  },
];

const guides = [
  {
    slug: 'best-3d-printers', title: 'The best 3D printers of 2026', category: '3d-printers',
    intro: 'We ranked every 3D printer we have reviewed by overall score, then picked the best one for each kind of buyer. Prices are US list prices at the time of writing.',
    items: [
      { slug: 'snapmaker-u1', award: 'Best multi-colour printer', note: 'Four toolheads swap in seconds with very little purge waste.' },
      { slug: 'bambu-lab-p1s', award: 'Best all-rounder', note: 'Enclosed, fast and close to plug-and-play.' },
      { slug: 'prusa-mk4s', award: 'Most reliable', note: 'Open-source, repairable and dependable for years.' },
      { slug: 'snapmaker-artisan-3-in-1', award: 'Best 3-in-1 machine', note: 'Print, laser and carve in one 400 mm enclosure.' },
      { slug: 'bambu-lab-a1-mini', award: 'Best for beginners', note: 'Tiny, cheap and almost fully automatic.' },
      { slug: 'creality-k1c', award: 'Best for carbon-fibre', note: 'Hardened nozzle out of the box.' },
    ],
  },
  {
    slug: 'best-maker-upgrades', title: 'Best laser, CNC and maker upgrades', category: 'maker-addons',
    intro: 'Add-ons that make a home workshop more capable: stronger lasers, real CNC spindles, dry filament and cleaner air.',
    items: [
      { slug: 'snapmaker-40w-laser-module', award: 'Best laser upgrade', note: 'Cuts thicker wood and acrylic, with air assist included.' },
      { slug: 'snapmaker-200w-cnc-module', award: 'Best value upgrade', note: 'Four times the power of the old 50W module.' },
      { slug: 'snapdryer-bundle', award: 'Best filament dryer', note: 'One dock, four sealed boxes.' },
      { slug: 'snapmaker-air-purifier', award: 'Best for indoor workshops', note: 'Filters fumes when you cannot vent outside.' },
    ],
  },
  {
    slug: 'best-cordless-drills', title: 'Best cordless drills and multi-tools', category: 'tools',
    intro: 'The drills and oscillating tools we would buy for home repairs, furniture building and weekend projects.',
    items: [
      { slug: 'milwaukee-m18-fpd3', award: 'Most powerful' },
      { slug: 'makita-dhp485', award: 'Best everyday drill' },
      { slug: 'dewalt-dcd791', award: 'Best compact drill' },
      { slug: 'bosch-gsr-12v-15', award: 'Best budget pick' },
      { slug: 'dewalt-dcs356', award: 'Best multi-tool' },
    ],
  },
  {
    slug: 'best-home-appliances', title: 'Best air fryers and vacuums', category: 'home',
    intro: 'Kitchen and cleaning appliances that earned their place: ranked by performance, build quality, ease of cleaning and value.',
    items: [
      { slug: 'roborock-s8', award: 'Best robot vacuum' },
      { slug: 'dyson-v15-detect', award: 'Best stick vacuum' },
      { slug: 'ninja-foodi-af300', award: 'Best dual-zone air fryer' },
      { slug: 'philips-airfryer-xxl', award: 'Best large air fryer' },
      { slug: 'cosori-pro-le', award: 'Best budget air fryer' },
    ],
  },
];

/** Loads the starter content. With force=true, existing rows are deleted first. */
export async function seed({ force = false } = {}) {
  if (force) for (const t of ['guides', 'comparisons', 'products', 'categories', 'settings']) await run(`DELETE FROM ${t}`);

  const catIds = {};
  for (const c of categories) {
    const existing = await getCategory('slug', c.slug);
    catIds[c.slug] = existing ? existing.id : await saveCategory(c);
  }

  const legacy = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/seed/legacy-products.json'), 'utf8'));
  for (const p of [...snapmaker, ...legacy]) {
    if (await get('SELECT id FROM products WHERE slug = ?', [p.slug])) continue;
    await saveProduct({
      ...p,
      category_id: catIds[p.category],
      is_sample: p.is_sample ?? true,
      published_at: p.published_at || '2026-10-20 09:00:00',
      updated_at: p.updated_at || '2026-10-28 09:00:00',
    });
  }

  // Category sponsor = the Snapmaker product promoted in the "Maker pick" box on that category's reviews.
  for (const c of categories) {
    const sponsor = await get('SELECT id FROM products WHERE slug = ?', [c.sponsor]);
    if (sponsor) await run('UPDATE categories SET sponsor_product_id = ? WHERE id = ?', [sponsor.id, catIds[c.slug]]);
  }

  for (const c of comparisons) {
    if (await get('SELECT id FROM comparisons WHERE slug = ?', [c.slug])) continue;
    await saveComparison({ ...c, product_slugs: c.products, updated_at: '2026-10-28 09:00:00' });
  }
  for (const g of guides) {
    if (await get('SELECT id FROM guides WHERE slug = ?', [g.slug])) continue;
    await saveGuide({ ...g, category_id: catIds[g.category], updated_at: '2026-10-28 09:00:00' });
  }
  console.log(`[seed] ${categories.length} categories, ${snapmaker.length + legacy.length} products, ${comparisons.length} comparisons, ${guides.length} guides.`);
}
