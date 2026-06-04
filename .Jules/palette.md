## 2026-06-04 - Skip to Content and Sticky Header Sync
**Learning:** Combining a 'Skip to Content' link with a `<main>` landmark and `scroll-margin-top` on target sections ensures both keyboard accessibility and visual clarity in single-page applications with sticky headers. Without the scroll offset, programmatic focus shifts and anchor links can result in content being obscured by the header.
**Action:** Always pair skip-to-content links with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` to ensure seamless and non-obscured keyboard navigation.
