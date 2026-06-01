## 2026-06-01 - [Skip to Content & Scroll Offsets]
**Learning:** Combining a 'Skip to Content' link with a `<main>` landmark requires setting `tabIndex={-1}` on the target for programmatic focus. For SPAs with sticky headers, applying `scroll-mt` to anchor targets prevents headings from being obscured during navigation.
**Action:** Always wrap main content in a `<main>` landmark with `tabIndex={-1}` and ensure global scroll margins match header heights.
