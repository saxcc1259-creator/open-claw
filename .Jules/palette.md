## 2026-08-27 - Semantic Foundation & Smooth Navigation baseline

**Learning:** Combining a skip-to-content link targeting `<main id="main-content" tabIndex={-1}>` with `motion-safe:scroll-smooth` and sticky-header top scroll padding (5rem) ensures effortless keyboard navigation without obscuring focused headers.

**Action:** Whenever introducing navigation or landmark improvements on landing pages with sticky headers, always implement top scroll padding on `html` alongside semantic landmarks and dynamic ARIA attributes for mobile toggles.
