# IPI LIPY — Digital ATS Operations Manual

Astro + Starlight documentation site rendering **Capitolo 2 — Procedure Operative** of the IPI DIG ATS Ancona Falconara.

## Content workflow

- **Source of truth:** `file .md/` (never edited by the app). Only chapters `01`–`08` exist today; drop `09`, `10`, `11`, or any future chapter in as `NN_title.md` and it will appear automatically.
- **Generated content:** `src/content/docs/` — regenerated from source on every `dev`/`build` by `scripts/sync-content.mjs`. Do not commit.
- **Sidebar grouping:** derived by chapter number in [astro.config.mjs](astro.config.mjs). Chapters with no source file yet show as *in preparazione*.

Sync rules the script applies to each source file:

1. filename `NN_slug_words.md` → route `/NN-slug-words/`
2. first `# NN — Title` line → page title
3. `**Riferimenti IPI:** …` → header block
4. metadata block (`Riferimenti IPI` / `Fonte`) is lifted into the structured page header — the source Markdown is not otherwise altered.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build     # runs sync + astro build
npm run preview   # serve dist/
```

## Deploy on Vercel

The repo is Vercel-ready — [vercel.json](vercel.json) sets `framework: astro`. Push to GitHub, import in Vercel, and the build command (`npm run build`) will run the content sync before Astro builds. No runtime filesystem writes, no backend, no secrets.

## Design

The visual system is defined in `src/styles/` (design tokens, base typography, components, tables, print). Custom Starlight component overrides live in `src/components/`. Dark mode uses a real navy/charcoal palette rather than a color inversion. Print mode strips chrome and produces a clean technical-manual layout.

## Structure

```
file .md/                   source-of-truth Markdown
scripts/sync-content.mjs    prebuild content importer
src/
  components/               Starlight overrides + landing
  styles/                   design tokens + CSS
  content/config.ts         collection schema (adds `ipi` frontmatter)
  content/docs/             GENERATED — regenerated on every build
astro.config.mjs
vercel.json
```
