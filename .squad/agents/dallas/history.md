# Project Context

- **Owner:** Ryan Blackman
- **Project:** RyanBakes-Website — a personal baking/recipe website
- **Stack:** Sanity Studio v5 (CMS), Next.js App Router (website), Sanity TypeGen (type pipeline), PNPM monorepo, Biome (lint/format), TypeScript strict mode with `exactOptionalPropertyTypes`, GitHub Actions CI, Vercel deployment
- **Created:** 2026-04-05

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

### Tags Pages Improvement (2026-04)
- **`/tags/[slug]/page.tsx`**: Replaced the plain `<ul>` recipe list with `FeaturedRecipe` (first recipe, `priority large`) + `SecondaryFeaturedRecipes` (rest, mapped to `{ recipe, index }[]`). Removed the now-redundant sr-only `<Heading level={3}>` since `SecondaryFeaturedRecipes` already provides its own sr-only "Other Recipes" heading.
- **`/tags/page.tsx`**: Implemented a full Recipe Page mirror. Calls `getTagsPage()` + `getAllTags()` in parallel, then fetches `featuredTag` and all `secondaryFeature` tag recipes in a second `Promise.all`. Renders: page heading from CMS, guarded `<PortableText>` intro, `FeaturedRecipe` for featured tag + "See all…" link, per-tag sections with linked `<Heading level={3}>` + `SecondaryFeaturedRecipes` (capped at 3), and the existing `<Tags>` chip cloud at the bottom.
- `formatTagTitle(slug)` converts hyphenated slugs to Title Case — defined in `[slug]/page.tsx` and duplicated in `page.tsx` (both pages are siblings, no shared util yet).
- `SecondaryFeaturedRecipes` lives at `apps/website/app/recipe/features/secondary-featured-recipes` — import path from `tags/page.tsx` is `"../recipe/features/secondary-featured-recipes"`, from `tags/[slug]/page.tsx` is `"../../recipe/features/secondary-featured-recipes"`.
- The two-phase `Promise.all` pattern (page config first, then tag recipes) is necessary because `featuredTag` and `secondaryFeature` are only known after the CMS page fetch resolves.
- All data fetching is server-side only — never use Sanity client in the browser.
- Components are pure renderers: no fetching, no assumptions about content presence.
- Types come from `@ryan-bakes/sanity-types` — import, don't redefine.
- PortableText rendering uses the shared `PortableText` component.
- Images are `ImageWithAlt | undefined` — always guard before accessing `.asset`.
- Image URL generation is centralized in `useImageBuilder`.
- Every route must define `metadata` or `generateMetadata`.
- Component props use `type` aliases with `Readonly<>` — not interfaces.
- `throwError` / `throwTypedError` helpers are in `apps/website/` for error cases.
