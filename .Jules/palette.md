## 2025-05-14 - Sticky Header Anchor Navigation
**Learning:** In single-page applications with sticky headers, anchor navigation (including "Skip to Content" links and section IDs) often results in the header obscuring the top of the content. Modern CSS `scroll-margin-top` is the most surgical fix, but it must be applied consistently to both semantic sections and the primary landmark to ensure focus management doesn't break the layout.
**Action:** Always apply `scroll-mt-[header-height]` to both `section[id]` tags and the `#main-content` landmark when a sticky header is present.

## 2025-05-14 - Standardized Focus States
**Learning:** Default browser focus rings often have poor contrast on premium/dark palettes (like Navy Blue). Standardizing a brand-aligned `focus-visible` style ensures accessibility without compromising the aesthetic, and using `ring-offset` helps the indicator pop against varied backgrounds.
**Action:** Implement a global `focus-visible` utility in the main CSS entry point that uses brand colors and sufficient offset for visibility.
