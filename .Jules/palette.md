## 2026-06-08 - Semantic Foundation & Anchor Navigation
**Learning:** For single-page apps with sticky headers, anchor navigation often results in content being obscured by the header. Combining a 'Skip to Content' link with `scroll-mt` or `scroll-padding-top` ensures that both keyboard and mouse users have a clear, non-obscured view of the target content.
**Action:** Always apply `scroll-mt` to section landmarks and `scroll-padding-top` to the root when a sticky header is present.
