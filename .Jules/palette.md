## 2026-08-19 - Scroll Padding and Skip Link Foundation for Sticky Headers

**Learning:** Fixed/sticky headers (e.g. 80px / h-20) obstruct anchor targets unless `scroll-padding-top` (or `scroll-pt-20`) is set on `html`. Combining this with a skip-to-content link targeting a `<main id="main-content" tabIndex={-1}>` provides an optimal keyboard and screen-reader entry point without layout shifts or content overlap.

**Action:** Whenever working on landing pages with fixed headers, ensure `scroll-padding-top: 5rem` (or `scroll-pt-20`) and `motion-safe:scroll-smooth` are configured in CSS, and pair them with a focusable skip link and `<main>` landmark with `tabIndex={-1}`.
