## 2026-06-08 - [Semantic Foundation]
**Learning:** In single-page applications with sticky headers, implementing a "Skip to Content" link requires coordinated CSS to avoid visual overlap. Targeting a `<main>` landmark with `tabIndex={-1}` is essential for shift-focus to work for screen readers, while `scroll-mt` (scroll-margin-top) is needed to ensure the focus target isn't hidden behind the sticky navigation.

**Action:** Always pair a skip-link with a corresponding `scroll-mt` utility on the target landmark that matches or exceeds the sticky header's height.
