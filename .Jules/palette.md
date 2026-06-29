## 2026-06-08 - Semantic Foundation & Sticky Header Fix
**Learning:** Single-page real estate sites with sticky headers often fail basic accessibility by omitting skip links and obscuring anchor-linked content. Combining a "Skip to Content" link with `scroll-padding-top` and semantic landmarks creates a robust accessibility baseline without altering the design.
**Action:** Always implement a `<main>` landmark, a visually-hidden skip link, and ensure global scroll-offsets match header height to prevent content overlap during navigation.
