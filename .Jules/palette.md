## 2026-06-08 - Semantic & Navigation Foundation
**Learning:** For single-page applications with sticky headers, accessibility requires a coordinated approach: a "Skip to Content" link for keyboard users, a `<main>` landmark with `tabIndex={-1}` to receive programmatic focus without a focus ring, and `scroll-padding-top` on the root element to prevent anchor targets from being obscured by the header.
**Action:** Always implement this "accessibility trifecta" (Skip Link + Main Landmark + Scroll Offset) when building or auditing landing pages with sticky navigation.
