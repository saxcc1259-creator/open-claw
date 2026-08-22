## 2026-08-22 - Single-Page Accessibility Foundation and Sticky Header Offsets

**Learning:** Single-page landing sites with fixed/sticky top navigation bars often cause two main accessibility friction points: keyboard and screen reader users lack an immediate way to bypass header navigation to reach main content, and anchor links can jump target headings behind the sticky header. Combining a "Skip to content" link, a `<main id="main-content" tabIndex={-1}>` container, and `scroll-pt-[header-height]` in base HTML CSS ensures seamless, non-obscured keyboard navigation without requiring extra JavaScript.

**Action:** When working on single-page React apps with sticky headers, always verify that a "Skip to Content" link targets a `<main>` landmark with `tabIndex={-1}`, and set `scroll-pt-[header-height]` on `html` alongside dynamic ARIA attributes on toggle elements.
