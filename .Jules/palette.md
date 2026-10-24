## 2026-10-24 - Single-Page App Sticky Header Keyboard Navigation & Skip Link

**Learning:** Single-page applications with fixed sticky headers require both a skip-to-content link targeting `<main tabIndex={-1}>` and global CSS `scroll-padding-top` / `motion-safe:scroll-smooth`. Without `tabIndex={-1}`, programmatic focus cannot shift to the `<main>` tag, and without `scroll-padding-top`, header overlay obscures section targets when navigating by anchors or keyboard focus.
**Action:** Always combine `tabIndex={-1}` on main content landmark with `scroll-pt-[header-height]` and `motion-safe:scroll-smooth` on `html` when building pages with fixed headers.
