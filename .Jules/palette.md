## 2026-09-30 - Semantic Accessibility Baseline
**Learning:** Combining a skip-to-content link, semantic `<main>` landmark with `tabIndex={-1}`, and CSS smooth scrolling (`scroll-pt-20`) provides an immediate baseline accessible navigation experience for single-page application landing pages with sticky headers without heavy refactoring.
**Action:** Always wrap single-page application core content in a `<main id="main-content" tabIndex={-1}>` landmark and add a high-contrast skip-to-content link at the top of the component hierarchy.
