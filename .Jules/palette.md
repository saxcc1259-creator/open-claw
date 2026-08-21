## 2026-08-21 - Semantic Foundation & Smooth Anchor Scrolling
**Learning:** Combining a skip-to-content link targeting `<main tabIndex={-1}>` with `scroll-pt-20` on `html` provides seamless keyboard/screen reader navigation for single-page applications with sticky headers.
**Action:** Always wrap core landing page sections in `<main>` (leaving `<footer>` as a sibling) and set scroll-padding equal to header height when adding anchor skip links.
