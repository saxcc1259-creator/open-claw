## 2026-10-16 - Semantic Foundation & Sticky Header Navigation

**Learning:** Single-page real estate landing pages with sticky headers require a skip-to-content link targeting a `<main>` landmark with `tabIndex={-1}` and `outline-none` so keyboard and screen reader users can bypass redundant header navigation without introducing visual focus artifacts. Combining this with CSS `scroll-pt-20` on the `html` element prevents fixed headers from obscuring section headings on anchor jump.

**Action:** Always include a Skip to Content link as the first focusable element, wrap main page sections in `<main id="main-content" tabIndex={-1}>`, set appropriate scroll padding for sticky navigation elements, and ensure toggle buttons expose `aria-expanded` and `aria-controls`.
