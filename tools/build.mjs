// Build step run by GitHub Actions on every push (you can also run it locally:
//   node tools/build.mjs).
// 1. Finds every chapter in assets/chapters/ (files starting with _ are ignored)
// 2. Checks each one (syntax, key = filename, 4 different options, explanation)
// 3. Writes the site into _site/ with a freshly generated assets/manifest.js
// 4. Dumps all chapter data to _build/data.json for the Anki deck builder
// If any chapter is broken, the build stops and the live site stays as it was.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CHAP_DIR = path.join(ROOT, 'assets', 'chapters');
const OUT = path.join(ROOT, '_site');
const BUILD = path.join(ROOT, '_build');
const SKIP = new Set(['.git', '.github', 'tools', '_site', '_build', 'node_modules']);

const errors = [];
const chapters = {};

// ---- 1+2. load and check chapters
const files = fs.readdirSync(CHAP_DIR).filter(f => f.endsWith('.js') && !f.startsWith('_'));
for (const file of files) {
  const key = file.replace(/\.js$/, '');
  const src = fs.readFileSync(path.join(CHAP_DIR, file), 'utf8');
  const found = {};
  try {
    vm.runInNewContext(src, { registerChapter: (k, d) => { found[k] = d; } }, { filename: file });
  } catch (e) {
    errors.push(`${file}: JavaScript error: ${e.message}`);
    continue;
  }
  const keys = Object.keys(found);
  if (keys.length !== 1) { errors.push(`${file}: must call registerChapter exactly once (found ${keys.length})`); continue; }
  if (keys[0] !== key) { errors.push(`${file}: registerChapter("${keys[0]}") must match the file name ("${key}")`); continue; }
  const c = found[key];
  for (const field of ['name', 'short', 'desc', 'ref']) {
    if (typeof c[field] !== 'string' || !c[field].trim()) errors.push(`${file}: missing "${field}"`);
  }
  if (!Array.isArray(c.bank) || c.bank.length === 0) { errors.push(`${file}: "bank" must be a non-empty list`); continue; }
  c.bank.forEach((q, i) => {
    const where = `${file}, question ${i + 1}`;
    if (typeof q.q !== 'string' || !q.q.trim()) errors.push(`${where}: missing q`);
    if (!Array.isArray(q.o) || q.o.length !== 4) errors.push(`${where}: needs exactly 4 options`);
    else if (new Set(q.o).size !== 4) errors.push(`${where}: two options are identical`);
    if (typeof q.e !== 'string' || !q.e.trim()) errors.push(`${where}: missing explanation e`);
  });
  if (c.vocab !== undefined && !(Array.isArray(c.vocab) && c.vocab.every(v => Array.isArray(v) && v.length === 2)))
    errors.push(`${file}: "vocab" must be a list of ["français", "english"] pairs`);
  chapters[key] = c;
}

if (errors.length) {
  console.error('\n❌ Build stopped. Fix these, commit again:\n');
  for (const e of errors) console.error('  - ' + e);
  console.error('');
  process.exit(1);
}

// ---- order: L13, L15 … L33, then other prefixes with numbers (e.g. P2L1), then the rest (CONN, VOCAB)
function sortKey(k) {
  const m = k.match(/^([A-Za-z]+?)(\d+)$/);
  if (m) return [m[1] === 'L' ? 0 : 1, m[1], Number(m[2])];
  return [2, k, 0];
}
const order = Object.keys(chapters).sort((a, b) => {
  const A = sortKey(a), B = sortKey(b);
  for (let i = 0; i < 3; i++) { if (A[i] < B[i]) return -1; if (A[i] > B[i]) return 1; }
  return 0;
});

// ---- 3. copy site and write manifest
fs.rmSync(OUT, { recursive: true, force: true });
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const s = path.join(src, ent.name), d = path.join(dst, ent.name);
    if (ent.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}
copyDir(ROOT, OUT);
fs.writeFileSync(path.join(OUT, 'assets', 'manifest.js'),
  `/* Generated automatically at deploy time. Do not edit by hand. */\nconst CHAPTER_LIST = ${JSON.stringify(order)};\n`);

// ---- 4. data for the Anki builder (dictée lines come from dialogue.html)
let dictee = [];
try {
  const dlg = fs.readFileSync(path.join(ROOT, 'dialogue.html'), 'utf8');
  const m = dlg.match(/const D=\[([\s\S]*?)\n\];/);
  if (m) dictee = vm.runInNewContext('([' + m[1] + '])').filter(l => l.a);
} catch (e) { console.warn('dialogue.html dictée not read: ' + e.message); }
fs.mkdirSync(BUILD, { recursive: true });
fs.writeFileSync(path.join(BUILD, 'data.json'), JSON.stringify({ order, chapters, dictee }));

const total = order.reduce((n, k) => n + chapters[k].bank.length, 0);
console.log(`✅ ${order.length} chapters, ${total} questions: ${order.join(', ')}`);
