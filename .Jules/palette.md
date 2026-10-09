## 2026-10-09 - Accessible Navigation & Skip to Main Content

**Learning:** Single-page applications with sticky header navigation benefit significantly from combining a visually hidden "Skip to main content" keyboard shortcut link with smooth scroll padding (`scroll-pt-20`) and explicit `<main id="main-content" tabIndex={-1}>` targeting. Without scroll-padding, keyboard and screen reader anchor links land beneath sticky headers.
**Action:** When implementing skip links or internal anchor navigation on sticky header sites, always add `motion-safe:scroll-smooth` and appropriate `scroll-pt-*` utilities to `html` while using `tabIndex={-1}` on `<main>` for seamless focus management.
