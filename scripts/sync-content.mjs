#!/usr/bin/env node
// Sync IPI Markdown source files into Starlight content collection.
// - Reads from ./file .md/  (source of truth, never mutated)
// - Writes to ./src/content/docs/  (generated, safe to delete)
// - Adds Starlight frontmatter and derives group/chapter/ipiRefs metadata
// - Runs before dev/build; works in Vercel with no runtime FS writes

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const SOURCE_DIR = join(ROOT, 'file .md');
const OUT_DIR = join(ROOT, 'src', 'content', 'docs');

const GROUPS = {
  '01': 'GENERALITÀ',   '02': 'GENERALITÀ',      '03': 'GENERALITÀ',
  '04': 'TRAFFICO AL SUOLO', '05': 'TRAFFICO AL SUOLO',
  '06': 'TRAFFICO AL SUOLO', '07': 'TRAFFICO AL SUOLO',
  '08': 'TRAFFICO IN VOLO',  '09': 'TRAFFICO IN VOLO',
  '10': 'TRAFFICO IN VOLO',
  '11': 'DEGRADO'
};

function toSlug(filename) {
  return filename.replace(/\.md$/, '').replace(/_/g, '-');
}

function parseMarkdown(raw) {
  const lines = raw.split(/\r?\n/);
  let title = '';
  let ipiRefs = '';
  const bodyLines = [];
  let seenTitle = false;
  let skipHeaderBlock = true;

  for (const line of lines) {
    if (!seenTitle && line.startsWith('# ')) {
      // strip "NN — " prefix from title
      const raw = line.slice(2).trim();
      title = raw.replace(/^\d+\s*[—-]\s*/, '');
      seenTitle = true;
      continue;
    }
    if (skipHeaderBlock) {
      const m = line.match(/^\*\*Riferimenti IPI:\*\*\s*(.+?)(\s{2,}$|$)/);
      if (m) { ipiRefs = m[1].trim(); continue; }
      if (/^\*\*Fonte:\*\*/.test(line)) continue;
      if (line.trim() === '' && !ipiRefs) continue;
      if (line.trim() === '' && ipiRefs) { skipHeaderBlock = false; continue; }
      if (seenTitle && line.trim() !== '') {
        // header preamble ended
        skipHeaderBlock = false;
        bodyLines.push(line);
        continue;
      }
    }
    bodyLines.push(line);
  }
  return { title: title || 'Documento', ipiRefs, body: bodyLines.join('\n').trim() + '\n' };
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`[sync] Source folder not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SOURCE_DIR))
    .filter(f => f.endsWith('.md'))
    .sort();

  const topics = [];
  for (const file of files) {
    const chapter = (file.match(/^(\d{2})/) || [])[1];
    if (!chapter) continue;
    if (file.startsWith('00_')) continue; // index handled by landing page

    const raw = await readFile(join(SOURCE_DIR, file), 'utf8');
    const { title, ipiRefs, body } = parseMarkdown(raw);
    const slug = toSlug(file);
    const group = GROUPS[chapter] || 'ALTRO';

    const description = ipiRefs ? `IPI ${ipiRefs}` : 'Procedura operativa';

    const frontmatter = [
      '---',
      `title: ${JSON.stringify(title)}`,
      `description: ${JSON.stringify(description)}`,
      'template: doc',
      'tableOfContents:',
      '  minHeadingLevel: 2',
      '  maxHeadingLevel: 3',
      'sidebar:',
      `  order: ${parseInt(chapter, 10)}`,
      'ipi:',
      `  chapter: "${chapter}"`,
      `  group: ${JSON.stringify(group)}`,
      `  refs: ${JSON.stringify(ipiRefs)}`,
      '---',
      ''
    ].join('\n');

    await writeFile(join(OUT_DIR, `${slug}.md`), frontmatter + body, 'utf8');
    topics.push({ chapter, slug, title, group, refs: ipiRefs });
  }

  // Topics manifest — consumed by the landing page
  await writeFile(
    join(ROOT, 'src', 'topics.generated.json'),
    JSON.stringify(topics, null, 2),
    'utf8'
  );

  // Landing page (chapter 2 overview)
  const landing = buildLanding(topics);
  await writeFile(join(OUT_DIR, 'index.mdx'), landing, 'utf8');

  console.log(`[sync] Synced ${topics.length} topics → ${OUT_DIR}`);
}

function buildLanding(topics) {
  const known = new Set(topics.map(t => t.chapter));
  // Expected chapters even when files are missing (rendered as pending)
  const expected = [
    { ch: '01', group: 'GENERALITÀ',        title: 'Area di responsabilità e spazio aereo', hint: 'Spazi aerei · Frequenze · Deleghe' },
    { ch: '02', group: 'GENERALITÀ',        title: 'Procedure generali e coordinamenti',  hint: 'Fraseologia · Coordinamenti · Registrazioni' },
    { ch: '03', group: 'GENERALITÀ',        title: 'MET, ATFCM, NOTAM e FPL',              hint: 'Informazioni · Regolazione flussi · Dati di volo' },
    { ch: '04', group: 'TRAFFICO AL SUOLO', title: 'Piazzali e push-back',                 hint: 'Piazzali · Push-back · Rullaggio' },
    { ch: '05', group: 'TRAFFICO AL SUOLO', title: 'Area di manovra, agibilità',           hint: 'Agibilità · Ispezioni · Manovra' },
    { ch: '06', group: 'TRAFFICO AL SUOLO', title: 'Pista, aeromobili, veicoli',           hint: 'Pista · Veicoli · Lavori' },
    { ch: '07', group: 'TRAFFICO AL SUOLO', title: 'AWO, RAVP e LVP',                      hint: 'Minima · Visibilità · LVP' },
    { ch: '08', group: 'TRAFFICO IN VOLO',  title: 'Circuito e separazioni',               hint: 'Circuito · SID · STAR · Holding' },
    { ch: '09', group: 'TRAFFICO IN VOLO',  title: 'Arrivi, partenze e coordinamenti',     hint: 'Arrivi · Partenze · Coordinamenti' },
    { ch: '10', group: 'TRAFFICO IN VOLO',  title: 'Attività particolari e voli speciali', hint: 'VFR notturno · Militari · Speciali' },
    { ch: '11', group: 'DEGRADO',           title: 'Degrado e indisponibilità sistemi',    hint: 'Degradi · Fallback · Ripristino' }
  ];

  const bySlug = Object.fromEntries(topics.map(t => [t.chapter, t]));
  const groups = {};
  for (const e of expected) {
    (groups[e.group] ||= []).push({
      ...e,
      slug: bySlug[e.ch]?.slug,
      refs: bySlug[e.ch]?.refs,
      pending: !known.has(e.ch)
    });
  }

  const groupsOrder = ['GENERALITÀ', 'TRAFFICO AL SUOLO', 'TRAFFICO IN VOLO', 'DEGRADO'];

  const sections = groupsOrder.map(g => {
    const items = groups[g] || [];
    return {
      label: g,
      items
    };
  });

  return `---
title: "Capitolo 2 · Procedure Operative"
description: "Sintesi operativa delle IPI ATS Ancona Falconara"
template: splash
hero:
  tagline: "IPI DIG ATS · Ancona Falconara · Versione 1.000 (17-07-2026)"
  actions:
    - text: Inizia dal capitolo 01
      link: /01-area-responsabilita-spazio-aereo/
      icon: right-arrow
      variant: primary
    - text: Vai al capitolo 08 (separazioni)
      link: /08-circuito-e-separazioni/
      variant: minimal
---

import LandingIndex from '../../components/LandingIndex.astro';

<LandingIndex sections={${JSON.stringify(sections)}} />
`;
}

main().catch(err => { console.error(err); process.exit(1); });
