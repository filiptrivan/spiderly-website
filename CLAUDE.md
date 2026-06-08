# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is this?

Marketing and documentation website for [Spiderly](https://github.com/filiptrivan/spiderly), a .NET + Angular code generator. Live at https://www.spiderly.dev.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (also validates MDX content + type-checks)
npm run lint      # BROKEN — see note below
npm start         # Serve production build
```

No test framework is configured.

> **`npm run lint` is currently broken.** Next.js 16 removed the `next lint` command, so the
> `"lint": "next lint"` script just errors (`next` treats `lint` as a project-directory arg). The legacy
> `.eslintrc.json` (extends `next/core-web-vitals`) also crashes under ESLint 9's flat-config loader. Until
> the project migrates to `eslint.config.js`, verify with the **build** (which type-checks) and
> **`npx prettier --check <files>`** (Prettier is the de-facto style gate here — format-on-save is checked in).

## Tech stack

- **Next.js 16** (App Router, React Server Components)
- **Fumadocs** for documentation (MDX-based, with built-in search)
- **Tailwind CSS 4** with shadcn/ui components
- **TypeScript** (strict mode, path alias `@/*` → `./src/*`)

## Architecture

**Routing:**
- `/` — Landing page composed of section components (`src/components/sections/`)
- `/docs/[[...slug]]` — Documentation pages rendered from MDX files in `content/docs/`
- `/faq`, `/privacy-policy`, `/terms-of-service` — Static pages
- `/api/search` — Fumadocs full-text search endpoint

**Documentation pipeline:**
`content/docs/*.mdx` → Fumadocs MDX plugin → auto-generated `.source/` files → `src/lib/source.ts` loader → rendered in docs catch-all route. Navigation order is controlled by `content/docs/meta.json`.

**Key directories:**
- `src/components/sections/` — Homepage sections (hero, explanation, tech stack, etc.)
- `src/components/ui/` — shadcn/ui primitives (button, dialog, accordion, etc.)
- `src/components/navigation/` — Navbar and footer
- `src/utils/constants/` — Static data (FAQ items, reviews, tech stack, nav links)
- `src/utils/functions/metadata.ts` — Centralized SEO metadata generator

**Design decisions:**
- Dark mode only (`<html className="dark">`, theme toggle disabled in Fumadocs)
- Site URL hardcoded to `https://www.spiderly.dev` in metadata helper
- Barrel exports via `index.ts` files in components and utils directories
- URL redirects for renamed doc pages are maintained in `next.config.mjs`

**Docs page actions (Copy Markdown / AI actions):**
- Each docs page renders `LLMCopyButton` + `ViewOptions` (`src/components/ai/page-actions.tsx`): copy the
  page's Markdown, view as Markdown, open in ChatGPT/Claude, view source on GitHub (`master` branch).
- Per-page Markdown is served at `/docs/<slug>.mdx` via a `next.config.mjs` rewrite → the
  `src/app/llms.mdx/[[...slug]]/route.ts` handler (statically generated), which returns `getLLMText(page)`.
  The same `getLLMText`/processed-Markdown path feeds `/llms.txt` and `/llms-full.txt`.
- **`<ReferenceTable>` is a build-time remark transform, not a React component.**
  `src/lib/remark-reference-table.ts` replaces `<ReferenceTable kind="..." />` in MDX with a real GFM table
  built from `framework-metadata.json` (via the shared `buildTable` in `src/lib/reference-table-data.ts`).
  This one transform feeds both the rendered page and the copied / `llms.txt` Markdown, so the tables can't
  drift and never leak as a bare tag. It MUST live in the **global** `mdxOptions.remarkPlugins` in
  `source.config.ts` (not the collection's `mdxOptions`) — only the global path runs Fumadocs'
  `applyMdxPreset`, which keeps `remarkGfm` (whose `toMarkdown` extension serializes the generated table).

## Code style

- Prettier: single quotes, 100 char print width
- Format on save enabled (VS Code settings checked in)
