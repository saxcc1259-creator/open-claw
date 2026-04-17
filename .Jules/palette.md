# Palette's Journal - JC Realty & Investment Co.

## 2025-05-14 - Sticky Header Anchor Navigation
**Learning:** In Tailwind CSS v4, global anchor navigation styling should use `@apply motion-safe:scroll-smooth` on the `html` element for accessibility and `@apply scroll-mt-[height]` on target sections to prevent content overlap with sticky headers.
**Action:** Always check header height (e.g., `h-20` is 80px) and apply a corresponding `scroll-mt` to all section targets.
