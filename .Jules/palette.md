## 2025-05-22 - Improved Anchor Navigation
**Learning:** For single-page applications with sticky headers, combining `@apply motion-safe:scroll-smooth` on the `html` element with `@apply scroll-mt-{header_height}` on section elements provides a premium, accessible navigation experience. This prevents the header from overlapping section content while respecting user motion preferences.
**Action:** Always check for sticky headers and implement `scroll-mt` matching the header height (e.g., `scroll-mt-20` for a `h-20` header) alongside smooth scrolling.
