// npm run db:seed          -> adds starter content that is missing (safe to run again)
// npm run db:reset         -> deletes ALL reviews, categories, comparisons, guides and settings, then reloads them
import { connect, close } from '../src/db/index.js';
import { migrate } from '../src/db/schema.js';
import { seed } from './seed-data.js';

const force = process.argv.includes('--force');
await connect();
await migrate();
await seed({ force });
await close();
