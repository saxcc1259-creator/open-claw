## 2026-10-11 - Single-Page Navigation & Landmark Accessibility

**Learning:** Single-page web applications with fixed/sticky headers often suffer from focus truncation and obscured anchor navigation for keyboard and screen-reader users. Combining a visually hidden "Skip to Content" link with a `<main tabIndex={-1}>` landmark and CSS `scroll-padding-top` provides accessible navigation without layout shifts.

**Action:** Always include a Skip Link targeting a landmark main container, dynamic ARIA menu controls (`aria-expanded`, `aria-controls`), and global `scroll-pt-*` styles when building single-page sites with sticky navigation.
