## 2025-04-18 - Sticky Header Anchor Navigation
**Learning:** For single-page layouts with a sticky header, global anchor navigation requires both smooth scrolling and scroll margins to prevent content overlap. The `scroll-mt-{size}` should match the header's height (e.g., `scroll-mt-20` for `h-20`).
**Action:** Always apply `motion-safe:scroll-smooth` to `html` and `scroll-mt-{height}` to `section[id]` tags when a sticky header is present.
