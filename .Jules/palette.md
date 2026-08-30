## 2026-08-30 - Semantic Foundation & Sticky Navbar Offset

**Learning:** When building single-page landing pages with sticky headers (e.g. h-20 / 80px), in-page anchor links will obscure section headings under the header without CSS `scroll-pt-20` and `motion-safe:scroll-smooth`. Furthermore, pairing a "Skip to Content" link with a `<main id="main-content" tabIndex={-1}>` landmark allows keyboard/screen-reader users to skip header navigation seamlessly.

**Action:** Always include `scroll-pt-20` on `html` in `index.css` alongside a `<main id="main-content" tabIndex={-1}>` landmark and skip link on landing pages with sticky headers.
