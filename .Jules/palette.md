# Palette's Journal

## 2026-11-10 - Semantic Foundation: Skip Link and Landmark Offsets
**Learning:** In single-page landing pages with sticky headers (e.g. 80px / 5rem), anchor navigation often obscures target headers behind the fixed navigation bar, and keyboard or screen reader users are forced to tab through entire headers repeatedly. Pairing an accessible "Skip to main content" link (positioned as the first focusable element targeting `<main tabIndex={-1}>`) with `scroll-padding-top: 5rem` and `motion-safe:scroll-smooth` establishes an accessible landmark foundation without disrupting visual aesthetics.
**Action:** When working on single-page applications with fixed or sticky navigation, always include a skip link targeting a dedicated `<main>` element, set the nav bar stacking order lower than the active skip link, and declare `scroll-padding-top` matching the navigation height.
