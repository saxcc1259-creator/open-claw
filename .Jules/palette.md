# Palette UX Journal

## 2025-05-14 - Skip Links and Landmark Accessibility
**Learning:** Landing pages with sticky headers need a 'Skip to Content' link and proper scroll-margin-top to ensure that when a user navigates via keyboard or anchor links, the target content is not obscured by the header and is correctly identified by screen readers.
**Action:** Always include a 'Skip to Content' link targeting a `<main>` landmark, and apply `scroll-mt` matching the header height to all section targets.
