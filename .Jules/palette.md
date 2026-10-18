## 2026-10-18 - Semantic Foundation with Skip Links and Scroll Padding

**Learning:** For single-page applications using an 80px (h-20) fixed sticky navigation header, anchor navigation via skip links or nav links will obscure section headings under the header unless `scroll-pt-20` and `motion-safe:scroll-smooth` are applied globally to `html`. Coupling a top-positioned Skip to Content link targeting a `<main id="main-content" tabIndex={-1} className="outline-none">` landmark provides immediate programmatic focus shift for screen reader and keyboard users without visual artifacts.

**Action:** Whenever establishing accessibility baselines for single-page sites with sticky headers, group skip-to-content links, main landmarks with tabIndex={-1}, and global scroll padding as a unified semantic foundation.
