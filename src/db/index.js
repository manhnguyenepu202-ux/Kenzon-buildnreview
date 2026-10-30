import fs from 'node:fs';
import path from 'node:path';
import config from '../config.js';

/**
 * Tiny database adapter with the same API for MySQL (production) and SQLite (local dev).
 * Queries use `?` placeholders and portable SQL only.
 *   all(sql, params)  -> rows[]
 *   get(sql, params)  -> row | undefined
 *   run(sql, params)  -> { insertId, changes }
 */
let driver = null;

const clean = (params) => params.map((v) => (v === undefined ? null : typeof v === 'boolean' ? (v ? 1 : 0) : v));

async function createMysql() {
  const mysql = (await import('mysql2/promise')).default;
  const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    charset: 'utf8mb4',
    dateStrings: true,
    connectionLimit: 5,
    waitForConnections: true,
    enableKeepAlive: true,
  });
  return {
    dialect: 'mysql',
    async all(sql, params = []) {
      const [rows] = await pool.query(sql, clean(params));
      return rows;
    },
    async run(sql, params = []) {
      const [res] = await pool.query(sql, clean(params));
      return { insertId: res.insertId, changes: res.affectedRows };
    },
    async close() { await pool.end(); },
  };
}

async function createSqlite() {
  const { DatabaseSync } = await import('node:sqlite');
  fs.mkdirSync(path.dirname(config.db.sqliteFile), { recursive: true });
  const db = new DatabaseSync(config.db.sqliteFile);
  db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');
  const normalise = (row) => {
    if (!row) return row;
    for (const k in row) if (row[k] instanceof Uint8Array) row[k] = Buffer.from(row[k]);
    return row;
  };
  return {
    dialect: 'sqlite',
    async all(sql, params = []) { return db.prepare(sql).all(...clean(params)).map(normalise); },
    async run(sql, params = []) {
      const r = db.prepare(sql).run(...clean(params));
      return { insertId: Number(r.lastInsertRowid), changes: Number(r.changes) };
    },
    async close() { db.close(); },
  };
}

export async function connect() {
  if (driver) return driver;
  driver = config.db.client === 'mysql' ? await createMysql() : await createSqlite();
  return driver;
}

export const dialect = () => driver?.dialect;
export const all = (sql, params) => driver.all(sql, params);
export const get = async (sql, params) => (await driver.all(sql, params))[0];
export const run = (sql, params) => driver.run(sql, params);
export const close = () => driver?.close();

/** 'YYYY-MM-DD HH:MM:SS' in UTC, accepted by both MySQL DATETIME and SQLite TEXT. */
export const now = () => new Date().toISOString().slice(0, 19).replace('T', ' ');
