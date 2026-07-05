## 2026-06-08 - Semantic Foundation and Keyboard Accessibility
**Learning:** Combining a 'Skip to Content' link with a `<main>` landmark and appropriate `scroll-padding-top` provides a complete baseline for keyboard accessibility in single-page applications with sticky headers. Using `tabIndex={-1}` on the `<main>` element ensures focus shifts correctly without adding a visual ring unless necessary.
**Action:** Always implement these three elements together when starting a new project or auditing navigation: skip-link, main landmark, and scroll-offset matching the header height.
