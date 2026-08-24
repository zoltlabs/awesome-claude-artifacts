#!/usr/bin/env node
/**
 * Emits site/public/index.json for the gallery, and regenerates the catalogue
 * table between the CATALOGUE markers in README.md.
 */
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { loadTaxonomy, loadEntries, ROOT } from './lib/entries.mjs';

const tax = loadTaxonomy();
const entries = loadEntries()
  .filter((e) => e.meta)
  .map(({ slug, dir, tierDir, meta }) => {
    const useCase = Array.isArray(meta.use_case) ? meta.use_case : [meta.use_case];
    return {
      slug,
      title: meta.title,
      summary: meta.summary,
      tier: tierDir === 'artifacts' ? 'source' : 'linked',
      use_case: useCase,
      primary_use_case: useCase[0],
      style: meta.style,
      family: tax.style?.[meta.style]?.family ?? null, // derived, never authored
      topics: meta.topics ?? [],
      techniques: meta.techniques ?? [],
      technical: meta.technical ?? false,
      has_prompt: Boolean(meta.prompt),
      prompt: meta.prompt ?? null,
      customize: meta.customize ?? [],
      author: meta.author,
      license: meta.license,
      added: meta.added ?? null,
      path: relative(ROOT, dir),
      source: meta.source ?? (tierDir === 'artifacts' ? 'artifact.html' : null),
      claude_url: meta.claude_url ?? null,
      thumb: meta.thumb ?? 'thumb.webp',
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

// --- index.json ---
const index = {
  generated_by: 'scripts/build-index.mjs',
  taxonomy_version: tax.version,
  counts: {
    total: entries.length,
    by_family: Object.fromEntries(
      Object.keys(tax.family).map((f) => [f, entries.filter((e) => e.family === f).length]),
    ),
    by_use_case: Object.fromEntries(
      Object.keys(tax.use_case).map((u) => [u, entries.filter((e) => e.use_case.includes(u)).length]),
    ),
  },
  taxonomy: { use_case: tax.use_case, family: tax.family, style: tax.style },
  entries,
};
mkdirSync(join(ROOT, 'site/public'), { recursive: true });
writeFileSync(join(ROOT, 'site/public/index.json'), JSON.stringify(index, null, 2) + '\n');

// --- README catalogue ---
const START = '<!-- CATALOGUE:START';
const END = '<!-- CATALOGUE:END -->';
const readmePath = join(ROOT, 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const a = readme.indexOf(START);
const b = readme.indexOf(END);

if (a !== -1 && b !== -1) {
  const rows = entries.length
    ? [
        '| | Artifact | Style | Use case |',
        '| --- | --- | --- | --- |',
        ...entries.map((e) => {
          const thumb = e.tier === 'source'
            ? `<img src="${e.path}/${e.thumb}" width="120">`
            : '';
          return `| ${thumb} | **[${e.title}](${e.path}/)**<br>${e.summary} | \`${e.style}\` | ${e.use_case.map((u) => `\`${u}\``).join(' ')} |`;
        }),
      ].join('\n')
    : '_No entries yet._';

  const head = readme.slice(0, readme.indexOf('-->', a) + 3);
  const next = `${head}\n${rows}\n${readme.slice(b)}`;
  writeFileSync(readmePath, next);
}

console.log(`index.json: ${entries.length} entries · README catalogue updated`);
