## 2026-10-12 - Semantic Foundation & Sticky Header Scroll Offsets

**Learning:** Single-page web applications with sticky headers require both a keyboard-accessible "Skip to content" link targeting `<main id="main-content" tabIndex={-1}>` and global CSS scroll padding (`scroll-pt-[header-height]`). Without scroll padding, jumping via skip links or anchor tags causes the targeted section heading to be obscured beneath the 80px fixed navigation bar.

**Action:** When implementing semantic main landmarks and skip-to-content links on sites with sticky headers, always apply `@apply motion-safe:scroll-smooth scroll-pt-[header-height];` to the `html` root in `@layer base` alongside accessible ARIA attributes on mobile toggles.
