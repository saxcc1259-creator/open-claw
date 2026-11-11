# Palette's Journal

## 2026-11-11 - Skip Link and Sticky Header Coordination
**Learning:** In single-page landing pages with sticky headers, adding a skip-to-content link requires coordinating the stacking context (setting the sticky nav to z-40 so the skip link at focus:z-50 is clearly rendered above it) and setting global scroll padding (`scroll-pt-20` on html) so landmark navigation targets are not visually obscured underneath the 80px navigation bar.
**Action:** Always pair a `Skip to Content` link targeting `<main id="main-content" tabIndex={-1} className="outline-none">` with `scroll-pt-[header-height]` and appropriate z-index layering to guarantee accessible and unobstructed keyboard navigation.
