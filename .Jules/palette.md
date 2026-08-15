## 2026-08-15 - Semantic Foundation for Single-Page Real Estate Landing Page

**Learning:** Single-page sites with sticky headers often lack basic accessibility entry points. Combining a "Skip to main content" link targeting a `<main tabIndex={-1}>` landmark with `scroll-pt-20` and `motion-safe:scroll-smooth` on `html` ensures screen reader users can bypass header navigation while keeping section anchors unobscured.

**Action:** Whenever establishing a base accessibility foundation for single-page applications, implement skip links alongside header offset scroll padding and main landmarks as a cohesive micro-UX pattern.
