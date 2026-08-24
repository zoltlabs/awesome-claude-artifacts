import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

export const ROOT = new URL('../../', import.meta.url).pathname;

export function loadTaxonomy() {
  return parse(readFileSync(join(ROOT, 'taxonomy.yaml'), 'utf8'));
}

/** Every entry directory under artifacts/ and linked/, with its parsed meta. */
export function loadEntries() {
  const out = [];
  for (const tierDir of ['artifacts', 'linked']) {
    const base = join(ROOT, tierDir);
    if (!existsSync(base)) continue;
    for (const slug of readdirSync(base).sort()) {
      const dir = join(base, slug);
      if (!statSync(dir).isDirectory()) continue;
      const metaPath = join(dir, 'meta.yaml');
      const entry = { slug, dir, tierDir, metaPath, meta: null, parseError: null };
      if (!existsSync(metaPath)) {
        entry.parseError = 'no meta.yaml';
      } else {
        try {
          entry.meta = parse(readFileSync(metaPath, 'utf8'));
        } catch (err) {
          entry.parseError = err.message;
        }
      }
      out.push(entry);
    }
  }
  return out;
}
