## 2026-06-08 - Semantic Foundation & Sticky Nav Accessibility
**Learning:** For single-page apps with sticky headers, combining a 'Skip to Content' link targeting a `<main>` landmark (with `tabIndex={-1}`) with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` ensures seamless and non-obscured keyboard navigation.
**Action:** Always implement a semantic `<main>` landmark and use CSS `scroll-margin-top` to prevent sticky headers from obscuring content during anchor jumps.
