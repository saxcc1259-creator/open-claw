## 2026-05-22 - [Accessibility: Skip Link & Smooth Scroll Anchor Offsets]
**Learning:** For SPAs with sticky headers, simply adding a "Skip to Content" link isn't enough; you must also handle the scroll offset for anchor navigation to prevent the sticky header from obscuring the target content. Using `scroll-mt` (scroll-margin-top) is the most modern and clean way to achieve this without extra JavaScript.

**Action:** Always pair "Skip to Content" links with `scroll-mt` offsets on target landmarks and ensure `tabIndex={-1}` is used on non-interactive main landmarks to enable programmatic focus shift for screen readers.
