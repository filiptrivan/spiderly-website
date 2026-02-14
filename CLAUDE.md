# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is this?

Marketing and documentation website for [Spiderly](https://github.com/filiptrivan/spiderly), a .NET + Angular code generator. Live at https://www.spiderly.dev.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (also validates MDX content)
npm run lint      # ESLint
npm start         # Serve production build
```

No test framework is configured.

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

## Code style

- Prettier: single quotes, 100 char print width
- Format on save enabled (VS Code settings checked in)
