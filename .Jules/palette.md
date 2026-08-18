## 2026-08-18 - Semantic Skip-Links with Sticky Header Offsets

**Learning:** When adding a "Skip to Content" link targeting `<main id="main-content">` on a single-page layout with a fixed header (80px / `h-20`), focus shift via `tabIndex={-1}` must be paired with global `scroll-pt-20` and `motion-safe:scroll-smooth` on the `html` element. Without scroll-padding on root, jumping to `#main-content` or anchor links obscures the top section heading under the sticky navbar for keyboard and screen-reader users.

**Action:** Always combine a top-level skip link targeting `<main tabIndex={-1}>` with `scroll-pt-20` on `html` when the layout employs an 80px fixed navigation header.
