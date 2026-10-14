## 2026-10-14 - Sticky Header & Skip Link Integration

**Learning:** For single-page web applications with fixed/sticky navigation headers, anchor navigation and skip links can cause header overlap unless global scroll padding (`scroll-padding-top`) is configured alongside `motion-safe:scroll-smooth` on the `html` root. Programmatic focus management for skip links requires `tabIndex={-1}` on `<main>` with `outline-none` to shift screen reader focus cleanly without generating extraneous focus rings around the entire page layout.

**Action:** When implementing semantic foundations in single-page React apps, pair `<a href="#main-content">` with `<main id="main-content" tabIndex={-1} className="outline-none">` and apply global `scroll-pt-[header-height]` in base styles.
