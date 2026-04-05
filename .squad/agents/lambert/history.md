# Project Context

- **Owner:** Ryan Blackman
- **Project:** RyanBakes-Website — a personal baking/recipe website
- **Stack:** Sanity Studio v5 (CMS), Next.js App Router (website), Sanity TypeGen (type pipeline), PNPM monorepo, Biome (lint/format), TypeScript strict mode with `exactOptionalPropertyTypes`, GitHub Actions CI, Vercel deployment
- **Created:** 2026-04-05

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- TypeScript check: `pnpm -w exec tsc -p apps/website/tsconfig.json --noEmit`
- Biome check: `pnpm -w exec biome check .`
- Build website: `pnpm run build:website`
- Build all: `pnpm run build:all`
- `exactOptionalPropertyTypes` is enabled — optional means explicitly optional, not loosely typed.
- Known failure modes to check: missing optional checks on references, assuming `slug.current` exists, passing `undefined` into PortableText, treating generated types as exact content mirrors.
- CI runs: Sanity schema extract + typegen → Biome lint → TypeScript checks → build.
- Docs-only changes (`.md`, `docs/`) skip CI entirely.
