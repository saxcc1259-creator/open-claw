# Palette Journal

## 2026-10-25 - Skip Link and Header Offset Foundation
**Learning:** For single-page applications with fixed/sticky headers (e.g. 80px / 5rem header), combining a "Skip to Content" link with `<main id="main-content" tabIndex={-1}>` and CSS `scroll-padding-top: 5rem` provides a smooth, accessible keyboard navigation experience without hiding section titles beneath the navigation bar.
**Action:** Always verify header height when adding anchor navigation and apply matching `scroll-padding-top` to `html` alongside a accessible skip link.
