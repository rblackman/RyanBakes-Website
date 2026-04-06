# Project Context

- **Owner:** Ryan Blackman
- **Project:** RyanBakes-Website — a personal baking/recipe website
- **Stack:** Sanity Studio v5 (CMS), Next.js App Router (website), Sanity TypeGen (type pipeline), PNPM monorepo, Biome (lint/format), TypeScript strict mode with `exactOptionalPropertyTypes`, GitHub Actions CI, Vercel deployment
- **Created:** 2026-04-05

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- Sanity schemas use `defineType`, `defineField`, `defineArrayMember` (v5 APIs).
- Pipeline order: `sanity schema extract` → `sanity typegen generate` → website build.
- `schema.json` is generated and committed; never hand-edit it.
- `packages/sanity-types/sanity.types.ts` is generated and gitignored; never hand-edit it.
- GROQ queries live in `apps/website/queries/` — components never construct GROQ.
- Query return types are explicit — minimal data sent to components.
- Validation rules live only in schema files, not in the website.
- Content types include: `recipe`, `unit`, `ingredient`, `portableText`, `imageWithAlt`.
- Units are documents; ingredients reference units; resolution happens at render time.
- `validate:env` script in `apps/website/package.json` must use relative paths and no `pnpm -w exec` wrapper. Root cause: using `pnpm -w exec tsx --require dotenv/config` ran Node from the workspace root, where `dotenv` is not installed. Fix (Option B): changed to `tsx --require dotenv/config scripts/validate-env.ts dotenv_config_path=.env` — pnpm already runs the script in the package's own directory (`apps/website`), so dotenv resolves correctly from `apps/website/node_modules`.
