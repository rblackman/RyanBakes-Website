# Project Context

- **Owner:** Ryan Blackman
- **Project:** RyanBakes-Website — a personal baking/recipe website
- **Stack:** Sanity Studio v5 (CMS), Next.js App Router (website), Sanity TypeGen (type pipeline), PNPM monorepo, Biome (lint/format), TypeScript strict mode with `exactOptionalPropertyTypes`, GitHub Actions CI, Vercel deployment
- **Created:** 2026-04-05

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->
- All data fetching is server-side only — never use Sanity client in the browser.
- Components are pure renderers: no fetching, no assumptions about content presence.
- Types come from `@ryan-bakes/sanity-types` — import, don't redefine.
- PortableText rendering uses the shared `PortableText` component.
- Images are `ImageWithAlt | undefined` — always guard before accessing `.asset`.
- Image URL generation is centralized in `useImageBuilder`.
- Every route must define `metadata` or `generateMetadata`.
- Component props use `type` aliases with `Readonly<>` — not interfaces.
- `throwError` / `throwTypedError` helpers are in `apps/website/` for error cases.
