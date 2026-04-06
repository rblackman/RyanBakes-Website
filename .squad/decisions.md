# Squad Decisions

## Active Decisions

### 1. Fix `validate:env` Script — Remove `pnpm -w exec` Wrapper

**Date:** 2025-07-18  
**Author:** Parker  
**Status:** Accepted

**Context:** Running `pnpm run validate:env` failed because `pnpm -w exec tsx` resolved `dotenv/config` from the workspace root, where it is not installed (only in `apps/website`).

**Decision:** Remove `pnpm -w exec` wrapper and use package-relative paths in `apps/website/package.json`:
```
tsx --require dotenv/config scripts/validate-env.ts dotenv_config_path=.env
```

**Rationale:** The script already executes with CWD = `apps/website` via pnpm filtering, so `dotenv/config` resolves correctly from `apps/website/node_modules`. No dependency changes or logic changes required.

---

### 2. Tags Pages Implementation

**Author:** Dallas  
**Date:** 2026-04  
**Status:** Implemented

**Initial Decisions:**
- `/tags/[slug]/page.tsx`: Use `FeaturedRecipe` (first recipe) + `SecondaryFeaturedRecipes` (rest), matching `/recipe/page.tsx` pattern.
- `/tags/page.tsx`: Two-phase data fetch — phase 1 gets `getTagsPage()` + `getAllTags()`, phase 2 fetches tag recipes.
- `formatTagTitle`: Copy into `tags/page.tsx` rather than extract shared utility (4-line function, UI-only task scope).
- Secondary tag sections: Cap at 3 recipes per section using `.slice(0, 3)`.
- `<Tags>` chip cloud: Keep at page bottom for comprehensive discovery.

**Revision (2026-04-06):**
- `/tags/page.tsx` simplified to counted tag list (no Recipe Page mirror).
- Single-phase fetch: `Promise.all([getTagsPage(), getTagsWithCounts()])`.
- Page displays alphabetically-sorted tags with recipe counts: `Tag Name (n)`.
- New query: `getTagsWithCounts()` — aggregates recipe counts per tag, returns `{ tag: string; count: number }[]`.
- New CSS module: `apps/website/app/tags/tags-page.module.css` (co-located, not shared).
- Local `TagWithCount` component in `page.tsx`, page-specific (not extracted).
- Removed: `FeaturedRecipe`, `SecondaryFeaturedRecipes`, `PortableText`, `Tags`, multi-phase fetch.
- Rationale: Simpler, faster, better suited for discovery browsing.

### 3. Accessibility as First-Class Concern

**Date:** 2026-04-06  
**Author:** Ryan Blackman (via Copilot)  
**Status:** Accepted

**Context:** User directive to ensure accessibility is a core part of all new features, not an afterthought.

**Decision:** All new features on the website must be implemented with accessibility in mind from the start. Semantic HTML, keyboard navigation, visible focus styles, meaningful alt text, screen reader support, and color contrast are non-negotiable for every UI change.

**Rationale:** Accessibility benefits all users and reflects a commitment to inclusive design practices.

**Scope:** 
- **Dallas** — Primary: frontend implementation with semantic HTML, keyboard nav, focus styles, alt text, ARIA, color contrast, motion considerations
- **Lambert** — Include accessibility checks in quality reviews
- **Ripley** — Flag accessibility concerns during architecture decisions that affect UI

---

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
