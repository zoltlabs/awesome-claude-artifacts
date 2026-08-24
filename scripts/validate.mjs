#!/usr/bin/env node
/**
 * Validates every entry against taxonomy.yaml and the format rules in CONTRIBUTING.md.
 * Exits non-zero on any error. Warnings never fail the build.
 *
 * See docs/taxonomy.html §5 (schema), §6 (tagging rules), §7 (CI gates).
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { loadTaxonomy, loadEntries } from './lib/entries.mjs';

const MAX_BYTES = 2 * 1024 * 1024;
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/** Patterns rejected by the no-network gate. Each is [label, regex]. */
const FORBIDDEN = [
  ['fetch()', /\bfetch\s*\(/],
  ['XMLHttpRequest', /\bXMLHttpRequest\b/],
  ['WebSocket', /\bnew\s+WebSocket\b/],
  ['EventSource', /\bnew\s+EventSource\b/],
  ['navigator.sendBeacon', /\bsendBeacon\s*\(/],
  ['importScripts', /\bimportScripts\s*\(/],
  ['form action', /<form[^>]+\baction\s*=/i],
  ['password input', /<input[^>]+type\s*=\s*["']?password/i],
];

/** Remote references rejected by the self-containment gate. */
const REMOTE = [
  ['remote script', /<script[^>]+src\s*=\s*["'](?!data:)(https?:)?\/\//i],
  ['remote stylesheet', /<link[^>]+href\s*=\s*["'](?!data:)(https?:)?\/\/(?!fonts\.googleapis\.com)/i],
  ['remote image', /<img[^>]+src\s*=\s*["'](?!data:)(https?:)?\/\//i],
  ['remote iframe', /<iframe[^>]+src\s*=\s*["'](?!data:)(https?:)?\/\//i],
  ['@import url()', /@import\s+url\(\s*["']?(https?:)?\/\//i],
];

const errors = [];
const warnings = [];
const err = (slug, msg) => errors.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

const tax = loadTaxonomy();
const USE_CASES = Object.keys(tax.use_case ?? {});
const STYLES = Object.keys(tax.style ?? {});
const FAMILIES = Object.keys(tax.family ?? {});
const TECHNIQUES = tax.techniques ?? [];
const LICENSES = tax.license_allowed ?? [];

// --- taxonomy.yaml is itself validated, so a bad vocab PR fails fast ---
for (const [style, def] of Object.entries(tax.style ?? {})) {
  if (!FAMILIES.includes(def.family)) {
    err('taxonomy.yaml', `style "${style}" points at unknown family "${def.family}"`);
  }
}

const entries = loadEntries();
const seenTitles = new Map();

for (const { slug, dir, tierDir, meta, parseError } of entries) {
  if (parseError) { err(slug, parseError); continue; }
  if (!SLUG_RE.test(slug)) err(slug, 'directory name must be lowercase-kebab-case');

  const need = (field) => {
    if (meta[field] === undefined || meta[field] === null || meta[field] === '') {
      err(slug, `missing required field: ${field}`);
      return false;
    }
    return true;
  };

  // --- identity ---
  need('title'); need('summary'); need('author'); need('license');
  if (meta.summary && meta.summary.length > 160) {
    warn(slug, `summary is ${meta.summary.length} chars; aim for under 160`);
  }
  if (meta.title) {
    const key = meta.title.toLowerCase().trim();
    if (seenTitles.has(key)) err(slug, `duplicate title, also in ${seenTitles.get(key)}`);
    else seenTitles.set(key, slug);
  }
  if (meta.author && !meta.author.name) err(slug, 'author.name is required');
  if (meta.license && LICENSES.length && !LICENSES.includes(meta.license)) {
    err(slug, `license "${meta.license}" not in license_allowed`);
  }

  // --- tier ---
  const expectedTier = tierDir === 'artifacts' ? 'source' : 'linked';
  if (meta.tier !== expectedTier) {
    err(slug, `tier must be "${expectedTier}" for entries under ${tierDir}/`);
  }

  // --- classification (spec §6) ---
  if (need('use_case')) {
    const uc = Array.isArray(meta.use_case) ? meta.use_case : [meta.use_case];
    if (uc.length < 1 || uc.length > 2) err(slug, 'use_case must have 1 or 2 entries');
    for (const u of uc) if (!USE_CASES.includes(u)) err(slug, `unknown use_case "${u}"`);
    if (new Set(uc).size !== uc.length) err(slug, 'duplicate use_case');
  }
  if (need('style')) {
    if (Array.isArray(meta.style)) err(slug, 'style must be a single value, not a list');
    else if (!STYLES.includes(meta.style)) err(slug, `unknown style "${meta.style}"`);
  }
  if (meta.family) {
    err(slug, 'family is derived from style and must not be authored');
  }
  for (const t of meta.techniques ?? []) {
    if (!TECHNIQUES.includes(t)) err(slug, `unknown technique "${t}"`);
  }
  if (meta.style === 'tracker' && !(meta.techniques ?? []).includes('localstorage')) {
    warn(slug, 'style "tracker" usually needs the "localstorage" technique');
  }
  if ((meta.topics ?? []).length > 4) warn(slug, 'more than 4 topics; trim to the useful ones');

  // --- the file itself ---
  if (expectedTier === 'source') {
    const rel = meta.source ?? 'artifact.html';
    if (extname(rel) !== '.html') {
      err(slug, `source must be a .html file (single-file rule), got "${rel}"`);
    }
    const file = join(dir, rel);
    if (!existsSync(file)) {
      err(slug, `source file not found: ${rel}`);
    } else {
      const bytes = statSync(file).size;
      if (bytes > MAX_BYTES) {
        err(slug, `${(bytes / 1024 / 1024).toFixed(2)} MB exceeds the 2 MB limit`);
      }
      const html = readFileSync(file, 'utf8');
      for (const [label, re] of FORBIDDEN) {
        if (re.test(html)) err(slug, `no-network gate: contains ${label}`);
      }
      for (const [label, re] of REMOTE) {
        if (re.test(html)) err(slug, `self-containment gate: contains ${label}`);
      }
      if (!/<title>/i.test(html)) warn(slug, 'no <title> — it shows in the browser tab');
    }
    if (!meta.prompt) warn(slug, 'no prompt — accepted, but ranks below entries with one');
  } else {
    if (!meta.claude_url) err(slug, 'linked entries require claude_url');
    else if (!/^https:\/\//.test(meta.claude_url)) err(slug, 'claude_url must be https');
    if (!existsSync(join(dir, meta.thumb ?? 'thumb.webp'))) {
      err(slug, 'linked entries require a committed thumbnail');
    }
  }
}

// --- report ---
const n = entries.length;
for (const w of warnings) console.warn(`  warn  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);

if (errors.length) {
  console.error(`\n${errors.length} error(s) across ${n} entr${n === 1 ? 'y' : 'ies'}.`);
  process.exit(1);
}
console.log(`\nOK — ${n} entr${n === 1 ? 'y' : 'ies'} valid, ${warnings.length} warning(s).`);
