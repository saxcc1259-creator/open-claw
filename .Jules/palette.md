## 2026-10-30 - Semantic Foundation & Smooth Anchor Scrolling

**Learning:** Single-page marketing applications with sticky headers often lack basic accessibility structures like skip links and landmark roles, causing keyboard navigation to get trapped or anchor targets to be hidden under sticky headers.
**Action:** Always wrap key section content in `<main id="main-content" tabIndex={-1} className="outline-none">`, add a skip link as the top focusable element, and apply `scroll-pt-20` and `motion-safe:scroll-smooth` on the `html` root in CSS.
