#!/usr/bin/env node
/**
 * Renders each source entry's artifact.html and writes thumb.webp.
 *
 * Only the light 800px render is committed (spec §0, Thumbnails). Dark, mobile,
 * and full-size variants are generated at deploy time with --all and stay
 * gitignored, so the repo doesn't carry four images per entry.
 *
 *   node scripts/shoot.mjs              # missing thumbnails only
 *   node scripts/shoot.mjs --force      # re-render everything
 *   node scripts/shoot.mjs --all        # every variant (deploy)
 *   node scripts/shoot.mjs <slug>       # one entry
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadEntries } from './lib/entries.mjs';

const args = process.argv.slice(2);
const force = args.includes('--force');
const all = args.includes('--all');
const only = args.find((a) => !a.startsWith('--'));

const VARIANTS = [
  { name: 'thumb.webp',        width: 1280, height: 800,  scheme: 'light', out: 800,  committed: true },
  { name: 'thumb.dark.webp',   width: 1280, height: 800,  scheme: 'dark',  out: 800 },
  { name: 'thumb.mobile.webp', width: 390,  height: 780,  scheme: 'light', out: 390 },
  { name: 'thumb.full.png',    width: 1280, height: 800,  scheme: 'light', out: 1280 },
];

const entries = loadEntries()
  .filter((e) => e.tierDir === 'artifacts' && e.meta)
  .filter((e) => !only || e.slug === only);

if (!entries.length) {
  console.log('No source entries to render.');
  process.exit(0);
}

const browser = await chromium.launch();
let rendered = 0, skipped = 0;
const consoleProblems = [];

for (const { slug, dir, meta } of entries) {
  const src = join(dir, meta.source ?? 'artifact.html');
  if (!existsSync(src)) { console.warn(`  skip  ${slug} — no source file`); continue; }

  for (const v of VARIANTS) {
    if (!all && !v.committed) continue;
    const dest = join(dir, v.name);
    if (!force && existsSync(dest)) { skipped++; continue; }

    const ctx = await browser.newContext({
      viewport: { width: v.width, height: v.height },
      deviceScaleFactor: 2,
      colorScheme: v.scheme,
      // No network: an artifact that tries to reach out should fail visibly here too.
      offline: true,
    });
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', (e) => errs.push(String(e)));
    page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });

    await page.goto(pathToFileURL(src).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts?.ready);
    await page.waitForTimeout(900); // let entry animations settle

    const png = await page.screenshot({ type: 'png' });
    const img = sharp(png).resize({ width: v.out, withoutEnlargement: true });
    await (v.name.endsWith('.png') ? img.png({ quality: 90 }) : img.webp({ quality: 82 })).toFile(dest);

    if (errs.length) consoleProblems.push(`${slug}: ${errs[0]}`);
    await ctx.close();
    rendered++;
    console.log(`  shot  ${slug}/${v.name}`);
  }
}

await browser.close();

if (consoleProblems.length) {
  console.error('\nConsole errors during render (no-console-errors gate):');
  for (const p of consoleProblems) console.error(`  FAIL  ${p}`);
  process.exit(1);
}
console.log(`\n${rendered} rendered, ${skipped} already present.`);
