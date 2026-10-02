## 2026-10-02 - Skip Link and Sticky Header Offset Pattern
**Learning:** In single-page applications with fixed/sticky headers (e.g. 80px / h-20), programmatic focus shifts to `<main id="main-content" tabIndex={-1}>` via a skip link can cause top content to be obscured by the fixed navigation header unless global scroll padding is applied.
**Action:** Set `scroll-pt-20` and `motion-safe:scroll-smooth` on the `html` root element in `src/index.css` whenever implementing skip links for fixed header layouts.
