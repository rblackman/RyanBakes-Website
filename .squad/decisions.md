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

**Decisions:**
- `/tags/[slug]/page.tsx`: Use `FeaturedRecipe` (first recipe) + `SecondaryFeaturedRecipes` (rest), matching `/recipe/page.tsx` pattern.
- `/tags/page.tsx`: Two-phase data fetch — phase 1 gets `getTagsPage()` + `getAllTags()`, phase 2 fetches tag recipes.
- `formatTagTitle`: Copy into `tags/page.tsx` rather than extract shared utility (4-line function, UI-only task scope).
- Secondary tag sections: Cap at 3 recipes per section using `.slice(0, 3)`.
- `<Tags>` chip cloud: Keep at page bottom for comprehensive discovery.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
