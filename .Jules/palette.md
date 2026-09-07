## 2026-09-07 - Semantic Foundation and Scroll-Padding for Sticky Navigation
**Learning:** Single-page sites with sticky headers need both a "Skip to Content" link targeting `<main tabIndex={-1}>` and explicit `scroll-padding-top` on the `html` element. Without `scroll-padding-top`, header navigation or skip links land directly underneath the sticky header, obscuring focused section targets.
**Action:** Always combine skip links and `<main>` landmarks with `scroll-padding-top` matching the sticky header height on single-page layouts.
