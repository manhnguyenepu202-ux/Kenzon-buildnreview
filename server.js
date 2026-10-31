import config from './src/config.js';
import { connect } from './src/db/index.js';
import { migrate, isEmpty } from './src/db/schema.js';
import { seed } from './scripts/seed-data.js';
import { syncContent } from './scripts/content-sync.js';
import { hidePhotoless } from './scripts/hide-photoless.js';
import { createApp } from './src/app.js';

async function start() {
  await connect();
  const dialect = await migrate();
  if (config.autoSeed && (await isEmpty())) {
    console.log('[db] Empty database: loading the starter reviews…');
    await seed();
  }
  // A broken content pack must never keep the site offline.
  await syncContent().catch((err) => console.error('[content] sync failed:', err));
  await hidePhotoless().catch((err) => console.error('[cleanup] failed:', err));
  createApp().listen(config.port, () => {
    console.log(`BuildNReview running on http://localhost:${config.port} (database: ${dialect})`);
  });
}

start().catch((err) => {
  console.error('[startup] failed:', err);
  process.exit(1);
});
