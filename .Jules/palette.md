## 2026-06-08 - Semantic Foundation for Single Page Apps
**Learning:** For single-page applications with sticky headers, accessibility and smooth navigation require a coordinated approach: a "Skip to Content" link targeting a `<main>` landmark with `tabIndex={-1}`, paired with global CSS `scroll-padding-top` and `scroll-smooth`. This ensures keyboard users can bypass navigation and that anchor links are not obscured by the header.
**Action:** Always implement a `<main>` landmark and skip-link as the base layout, and configure `scroll-padding-top` in the global CSS to match the header height.
