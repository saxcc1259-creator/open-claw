## 2026-06-08 - Semantic Navigation & Accessibility Foundation
**Learning:** For single-page applications with sticky headers, implementing a "Skip to Content" link targeting a `<main>` landmark with `tabIndex={-1}` is essential for keyboard accessibility. However, to prevent anchor links from being obscured by the sticky header, these landmarks and section targets also require CSS `scroll-margin-top` (scroll-mt) offsets.

**Action:** Always combine semantic landmarks with `scroll-mt` offsets matching the header height and `motion-safe:scroll-smooth` to ensure a seamless and accessible navigation experience. Use `tabIndex={-1}` on the `<main>` element to allow programmatic focus without adding it to the natural tab order.
