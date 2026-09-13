## 2026-09-13 - Sticky Header Anchor Offsets & Semantic Main Landmark

**Learning:** When adding a sticky header (80px height) and skip links to single-page applications, anchor links will cause page content headings to be obscured under the navbar unless `scroll-pt-20` (or `scroll-padding-top`) and `motion-safe:scroll-smooth` are applied globally on `html`. Combining this with a `<main id="main-content" tabIndex={-1}>` landmark creates a complete keyboard/screen reader navigation baseline without disrupting visual layout.
**Action:** Always include `scroll-pt-20` and `motion-safe:scroll-smooth` on the root HTML element when implementing sticky headers and skip links.
