## 2026-09-11 - Semantic Accessibility & Scroll Padding Foundation

**Learning:** Combining a "Skip to main content" link, a main content landmark with `tabIndex={-1}`, and sticky header scroll padding (`scroll-pt-20`) in Tailwind CSS v4 provides an essential baseline for keyboard navigation and screen reader accessibility without requiring layout redesigns.

**Action:** Whenever working on single-page landing sites with fixed/sticky navigation bars, ensure `scroll-pt-[header-height]` and `motion-safe:scroll-smooth` are configured on the `html` element so that anchor navigation targets aren't obscured by sticky headers.
