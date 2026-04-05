# Project Context

- **Owner:** Ryan Blackman
- **Project:** RyanBakes-Website — a personal baking/recipe website
- **Stack:** Sanity Studio v5 (CMS), Next.js App Router (website), Sanity TypeGen (type pipeline), PNPM monorepo, Biome (lint/format), TypeScript strict mode with `exactOptionalPropertyTypes`, GitHub Actions CI, Vercel deployment
- **Created:** 2026-04-05

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- Build order is critical: CMS schema extract → typegen → website build. Never invert.
- All Sanity fields may be undefined. The website must guard every access.
- Types are imported from `@ryan-bakes/sanity-types` — never redefined by hand.
- Biome handles formatting and linting. TypeScript strict mode is non-negotiable.
- `throwError` / `throwTypedError` helpers are available in `apps/website/` for error throwing.
- `schema.json` is generated and committed; `sanity.types.ts` is generated and gitignored.
- No client-side GROQ — all data fetching is server-side only.
