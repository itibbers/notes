# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start VitePress dev server (serves src/)
pnpm build     # Build static site to docs/
pnpm deploy    # Build + commit + push (auto deploy via deploy.sh)
```

Prettier runs automatically on `src/**` files at pre-commit via husky + lint-staged.

To install dependencies: `pnpm install`

## Architecture

This is a [VitePress](https://vitepress.dev/) static site that publishes to GitHub Pages at https://note.wiki.

- **`src/`** — Markdown content source files. All new notes go here.
- **`src/frontend/`** — The main content section (css, js, es, vue, react, ssr, browser, network, algorithm, lib).
- **`src/.vitepress/config.mts`** — VitePress config: sets `outDir` to `../docs`, nav, sidebar, GA, edit links.
- **`docs/`** — Built output (committed to master, served via GitHub Pages). Do not edit manually.
- **`deploy.sh`** — Builds, writes `docs/CNAME`, then commits and pushes everything to master.
- **`.npmrc`** — Sets `shamefully-hoist=true` (required for VitePress under pnpm).

## Adding Content

1. Create a `.md` file in `src/frontend/` (or a new section directory with its own `README.md`).
2. Add a `{ text, link }` entry to the relevant `sidebar` array in `src/.vitepress/config.mts`.
3. If adding a new top-level section, also add a `nav` entry and a new sidebar key.

## Code Style

Prettier config (`.prettierrc`): `printWidth: 100`, no semicolons, single quotes, JSX single quotes.
