#!/usr/bin/env node
/**
 * Assembles the deployable site into site/dist:
 *   site/public/*        the gallery shell, CNAME, and the generated index.json
 *   docs/taxonomy.html   the spec, served at /taxonomy.html
 *   artifacts/, linked/  entry directories, so thumbnails and sources resolve
 *                        against the paths build-index.mjs writes into index.json
 * Run after `npm run index`. Output is generated — never committed.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './lib/entries.mjs';

const dist = join(ROOT, 'site/dist');
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

cpSync(join(ROOT, 'site/public'), dist, { recursive: true });
cpSync(join(ROOT, 'docs/taxonomy.html'), join(dist, 'taxonomy.html'));

for (const tier of ['artifacts', 'linked']) {
  const src = join(ROOT, tier);
  if (!existsSync(src)) continue;
  cpSync(src, join(dist, tier), {
    recursive: true,
    filter: (p) => !p.endsWith('README.md'),
  });
}

console.log('site/dist assembled');
