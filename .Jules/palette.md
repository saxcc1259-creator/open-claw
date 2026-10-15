## 2026-10-15 - Single-Page Accessibility & Sticky Header Offsets

**Learning:** Single-page application layouts with sticky headers (e.g. 80px / `h-20`) require coordinated landmark structure (`<main id="main-content" tabIndex={-1}>`), skip navigation links, and CSS scroll padding (`scroll-pt-20` on `html`). Without `scroll-pt-20` or `scroll-mt-*`, anchor target headings get obscured beneath the fixed header upon focus or navigation.

**Action:** Whenever establishing or updating site landmarks in SPA landing pages, pair the `<main>` tag and skip link with `scroll-pt-*` and `motion-safe:scroll-smooth` in base styles to ensure clean keyboard and screen-reader navigation.
