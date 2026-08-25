## 2026-08-25 - Skip Link and Header Offset Synergy for Single-Page Sites

**Learning:** Adding a "Skip to Content" link to a single-page app with a sticky top header can cause screen focus or anchor links to land underneath the fixed header unless scroll-padding-top (`scroll-pt-20`) is set on `html`. Combining a `<main id="main-content" tabIndex={-1}>` landmark with `scroll-pt-20` and `motion-safe:scroll-smooth` ensures both keyboard focus and visual alignment remain perfect upon navigation.
**Action:** When adding a skip link or section anchor links on single-page layouts with sticky headers, pair the main target landmark with html scroll-padding and focus-visible styling.
