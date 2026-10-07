## 2026-10-07 - Semantic Foundation & Sticky Header Navigation UX

**Learning:** For single-page applications with sticky headers (e.g. 80px / `h-20`), anchor links can cause target headings to be obscured by the header unless `scroll-pt-20` and `motion-safe:scroll-smooth` are applied globally to the `html` element. Furthermore, providing a skip-to-content link that targets `<main id="main-content" tabIndex={-1} className="outline-none">` gives keyboard and screen-reader users immediate access to main content without introducing unwanted focus outline rings on full page containers.

**Action:** Whenever establishing accessibility baselines for single-page marketing sites with sticky headers, combine a skip link targeting `<main tabIndex={-1}>` with global `scroll-pt-*` utilities on `html` and standard dynamic `aria-expanded` / `aria-controls` attributes on mobile toggles.
