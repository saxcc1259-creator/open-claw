# Palette UX & Accessibility Journal

## 2026-08-17 - Semantic Navigation & Sticky Header Offset Pattern
**Learning:** For single-page applications with sticky headers (e.g. 80px / `h-20`), anchor jumps like "Skip to Content" and inner-page navigation often cause section headings or main content to be hidden behind the fixed header unless proper scroll padding is applied globally. Combining `scroll-pt-20` with `motion-safe:scroll-smooth` on `html` ensures screen reader and keyboard users land cleanly at the main content boundary without content overlap or unwanted animation for reduced-motion users.
**Action:** When implementing skip-to-content links or internal anchor navigation on pages with sticky navigation bars, always configure global HTML scroll padding (`scroll-pt-[header_height]`) and wrap core sections in a semantic `<main tabIndex={-1}>` landmark.
