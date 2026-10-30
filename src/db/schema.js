import { connect, run, get } from './index.js';

/**
 * Table definitions written once, rendered for MySQL or SQLite.
 * JSON values (pros, specs, scores...) are stored as text and parsed in the models.
 */
const T = {
  mysql: {
    id: 'INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY',
    str: (n) => `VARCHAR(${n})`,
    text: 'TEXT',
    long: 'MEDIUMTEXT',
    blob: 'LONGBLOB',
    int: 'INT',
    num: 'DECIMAL(10,2)',
    score: 'DECIMAL(3,1)',
    date: 'DATETIME',
    tail: ' ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci',
  },
  sqlite: {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    str: () => 'TEXT',
    text: 'TEXT',
    long: 'TEXT',
    blob: 'BLOB',
    int: 'INTEGER',
    num: 'REAL',
    score: 'REAL',
    date: 'TEXT',
    tail: '',
  },
};

function tables(t) {
  return [
    `CREATE TABLE IF NOT EXISTS categories (
      id ${t.id},
      slug ${t.str(120)} NOT NULL UNIQUE,
      name ${t.str(160)} NOT NULL,
      group_name ${t.str(80)},
      blurb ${t.text},
      image_url ${t.str(500)},
      art_type ${t.str(40)},
      tone ${t.str(20)},
      score_labels ${t.text},
      sponsor_product_id ${t.int},
      sort_order ${t.int} DEFAULT 0
    )${t.tail}`,
    `CREATE TABLE IF NOT EXISTS products (
      id ${t.id},
      slug ${t.str(160)} NOT NULL UNIQUE,
      status ${t.str(20)} NOT NULL DEFAULT 'published',
      name ${t.str(200)} NOT NULL,
      brand ${t.str(120)},
      model ${t.str(120)},
      category_id ${t.int},
      art_type ${t.str(40)},
      tone ${t.str(20)},
      image_url ${t.str(500)},
      gallery ${t.text},
      price_usd ${t.num},
      released ${t.int},
      title ${t.str(255)},
      summary ${t.text},
      verdict ${t.text},
      best_for ${t.str(255)},
      body ${t.long},
      pros ${t.text},
      cons ${t.text},
      specs ${t.text},
      scores ${t.text},
      overall ${t.score} DEFAULT 0,
      retail_rating ${t.score},
      retail_count ${t.int},
      affiliate_url ${t.str(600)},
      affiliate_label ${t.str(120)},
      featured ${t.int} DEFAULT 0,
      is_sample ${t.int} DEFAULT 0,
      views ${t.int} DEFAULT 0,
      clicks ${t.int} DEFAULT 0,
      published_at ${t.date},
      updated_at ${t.date},
      created_at ${t.date}
    )${t.tail}`,
    `CREATE TABLE IF NOT EXISTS comparisons (
      id ${t.id},
      slug ${t.str(200)} NOT NULL UNIQUE,
      status ${t.str(20)} NOT NULL DEFAULT 'published',
      title ${t.str(255)} NOT NULL,
      intro ${t.text},
      verdict ${t.text},
      product_ids ${t.text},
      updated_at ${t.date}
    )${t.tail}`,
    `CREATE TABLE IF NOT EXISTS guides (
      id ${t.id},
      slug ${t.str(200)} NOT NULL UNIQUE,
      status ${t.str(20)} NOT NULL DEFAULT 'published',
      title ${t.str(255)} NOT NULL,
      intro ${t.text},
      category_id ${t.int},
      items ${t.text},
      updated_at ${t.date}
    )${t.tail}`,
    `CREATE TABLE IF NOT EXISTS settings (
      skey ${t.str(80)} NOT NULL PRIMARY KEY,
      svalue ${t.text}
    )${t.tail}`,
    `CREATE TABLE IF NOT EXISTS media (
      id ${t.id},
      filename ${t.str(255)},
      mime ${t.str(80)},
      size ${t.int},
      data ${t.blob},
      created_at ${t.date}
    )${t.tail}`,
  ];
}

export async function migrate() {
  const db = await connect();
  for (const sql of tables(T[db.dialect])) await run(sql);
  return db.dialect;
}

export async function isEmpty() {
  const row = await get('SELECT COUNT(*) AS n FROM products');
  return Number(row.n) === 0;
}
