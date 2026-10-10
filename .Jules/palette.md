## 2026-10-10 - Sticky Header & Skip Link Integration

**Learning:** Single-page web applications with sticky headers (e.g., 80px / `h-20`) cause anchor links and skip-to-content focus shifts to be partially obscured behind the fixed header unless `scroll-padding-top` (or `scroll-pt-20`) is configured on the `html` root alongside `tabIndex={-1}` on the target `<main>` element.

**Action:** When implementing skip links and navigation landmarks in single-page layouts with sticky headers, pair `<main id="main-content" tabIndex={-1}>` with `scroll-pt-20` and `motion-safe:scroll-smooth` on the `html` root to guarantee visible focus and non-obscured content jump targets.
