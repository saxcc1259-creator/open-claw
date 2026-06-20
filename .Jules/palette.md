## 2026-06-08 - Accessible Navigation & Sticky Header Offsets
**Learning:** Single-page applications with sticky headers often suffer from two accessibility issues: 1) Lack of a skip-to-content link for keyboard users, and 2) Anchor links that scroll targets behind the sticky header.
**Action:** Always implement a 'Skip to Content' link targeting a `<main>` landmark with `tabIndex={-1}`. Use CSS `scroll-margin-top` (e.g., `scroll-mt-20`) on all target sections to ensure they remain visible below the sticky header after navigation.
