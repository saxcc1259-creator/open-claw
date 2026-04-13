# 🎨 Palette's Journal - JC Realty & Investment Co.

## 2025-05-14 - Sticky Header & Anchor Navigation
**Learning:** When using a sticky header (especially one with backdrop-blur), global anchor navigation often causes the header to overlap the section title. Traditional CSS solutions like `scroll-margin-top` are more robust than JS-based offsets because they work with native browser "find on page" and URL hash navigation.
**Action:** Always apply `scroll-mt-[header-height]` to sections with IDs when a sticky header is present. In this project, `scroll-mt-20` (80px) perfectly aligns the content below the header.

## 2025-05-14 - Accessibility for SPAs
**Learning:** Single-page applications with fixed/sticky navigation must provide a "Skip to main content" link for keyboard users to avoid tabbing through the entire menu on every page load or refresh.
**Action:** Implement a `sr-only focus:not-sr-only` link as the first element in the DOM, targeting the main content ID.
