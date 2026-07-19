# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-19 - Semantic Foundation for Single-Page Corporate Apps
**Learning:** Combining a 'Skip to Content' link targeting a `<main>` landmark with scroll-padding (`scroll-pt-20`) and `motion-safe:scroll-smooth` creates an extremely robust accessibility and keyboard-navigation baseline. It ensures keyboard users can bypass sticky navigation headers seamlessly without elements being obscured by sticky layout headers (which are typical for corporate real estate websites).
**Action:** Always wrap central layouts of single-page apps in a `<main>` landmark element with `tabIndex={-1}` and configure scroll offsets globally for sticky headers to prevent obscuring content.
