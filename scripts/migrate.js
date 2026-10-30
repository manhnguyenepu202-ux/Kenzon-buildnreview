// npm run db:migrate -> creates any missing tables. Safe to run on every deploy.
import { connect, close } from '../src/db/index.js';
import { migrate } from '../src/db/schema.js';

await connect();
const dialect = await migrate();
console.log(`[migrate] tables ready (${dialect}).`);
await close();
