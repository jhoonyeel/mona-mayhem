# Copilot Instructions

Mona Mayhem is a **workshop template** (Astro v6, SSR) for building a retro-arcade GitHub contribution battle page. The app in `src/` is intentionally a starting stub; the repo also hosts the workshop content, a GitHub Pages site, and a localization pipeline.

## Commands

- `npm run dev` — dev server at http://localhost:4321 (restart it if a new route isn't picked up)
- `npm run build` / `npm run preview` — production build (Node standalone) / serve it
- No test or lint tooling is configured. Verify API changes with e.g. `curl http://localhost:4321/api/contributions/octocat`.

## Architecture

- `astro.config.mjs`: `output: 'server'` with `@astrojs/node` in `standalone` mode. API routes must set `export const prerender = false;`.
- `src/pages/index.astro`: the battle page (currently a placeholder). `src/pages/api/contributions/[username].ts`: server-side proxy (currently returns 501) that should fetch `https://github.com/{username}.contribs` to avoid CORS; the page calls this route rather than GitHub directly.
- `workshop/*.md` (parts 00–06): the workshop guide, with `<!-- track:vscode:start/end -->` and `<!-- track:cli:start/end -->` markers separating track-specific content. Keep these markers intact when editing.
- `docs/`: static GitHub Pages site (plain HTML/CSS/JS, not Astro). `.github/workflows/deploy.yml` copies `docs/*` plus `workshop/pt_BR` and `workshop/es` into `_site` (note: `ko` is not copied).

## Localization (important)

- English is the source of truth: `README.md`, `workshop/*.md`, `docs/index.html`, `docs/step.html`. Locales: `es`, `pt_BR`, `ko`.
- Localized outputs: `README.<locale>.md`, `workshop/<locale>/*.md`, `docs/<locale>/{index,step}.html`. Don't hand-edit them as the primary change; `.github/workflows/localization-sync.yml` regenerates them on pushes to `main` using the `localizations` skill (`.github/skills/localizations/`) with per-locale rules in `rules/<locale>.md` (`es-es`, `pt-br`, `ko-kr`, etc.).
- `localizations/<locale>/.localization-state.json` (version 1) tracks source/localized SHA-256 fingerprints per source file; the workflow fails on malformed state. Don't edit it manually.
- `scripts/localization_sync.py` is the helper for the sync process.
