# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start VuePress dev server (serves src/)
pnpm build     # Build static site to docs/
pnpm deploy    # Build + commit + push (auto deploy via deploy.sh)
```

Prettier runs automatically on `src/**` files at pre-commit via husky + lint-staged.

To install dependencies: `pnpm install`

## Architecture

This is a [VuePress 1.x](https://v1.vuepress.vuejs.org/) static site that publishes to GitHub Pages at https://note.wiki.

- **`src/`** — Markdown content source files. All new notes go here.
- **`src/frontend/`** — The main content section (css, js, es, vue, react, browser, network, algorithm, lib).
- **`src/.vuepress/config.js`** — VuePress config: sets build dest to `docs/`, registers plugins (Google Analytics, vuepress-plugin-cat).
- **`src/.vuepress/menu.js`** — Nav bar and sidebar configuration. When adding a new page, register it in the `sidebar` array here.
- **`docs/`** — Built output (committed to master, served via GitHub Pages). Do not edit manually.
- **`deploy.sh`** — Builds, writes `docs/CNAME`, then commits and pushes everything to master.

## Adding Content

1. Create a `.md` file in `src/frontend/` (or a new section directory with its own `README.md`).
2. Add the file slug to the `sidebar` array in `src/.vuepress/menu.js`.
3. If adding a new top-level section, add a nav entry in `menu.js` and a new sidebar key.

## Code Style

Prettier config (`.prettierrc`): `printWidth: 100`, no semicolons, single quotes, JSX single quotes.
