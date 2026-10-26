# Palette's Journal - JC Realty Website

## 2026-10-26 - Single-Page Accessibility & Navigation Baseline
**Learning:** Single-page marketing websites with sticky headers often lack skip links, landmarks, and scroll offsets, leading to header-overlap when navigating via keyboard or anchor links.
**Action:** Pair a top 'Skip to Content' link targeting `<main id="main-content" tabIndex={-1}>` with `@apply motion-safe:scroll-smooth` and `scroll-pt-20` on the `html` element for non-obscured keyboard navigation.
