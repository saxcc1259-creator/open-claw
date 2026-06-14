## 2026-06-08 - Enhanced Navigation Accessibility & Semantic Landmarks
**Learning:** For single-page applications with sticky headers, combining a "Skip to Content" link with programmatic focus landmarks (<main tabIndex={-1}>) and CSS scroll-margins (scroll-mt-[header-height]) ensures a seamless and accessible navigation experience for both keyboard and mouse users.
**Action:** Always implement a skip-link as the first focusable element and use scroll-margins to prevent sticky headers from obscuring anchor-linked section headings.
