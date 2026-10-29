## 2026-10-29 - Semantic Foundation & Sticky Header Anchor Focus
**Learning:** Combining a Skip to Content link with a `<main id="main-content" tabIndex={-1}>` landmark and CSS `scroll-pt-20` (matching the sticky header height) ensures seamless keyboard navigation without page content being obscured by fixed headers or causing unexpected focus outlines.
**Action:** Always set `tabIndex={-1}` and `outline-none` on `<main id="main-content">` alongside HTML scroll padding for sticky header apps to guarantee smooth programmatic focus shift.
