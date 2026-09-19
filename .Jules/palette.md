## 2026-09-19 - Accessible Single-Page Skip Link & Scroll Offset Foundation

**Learning:** For single-page applications with sticky navigation headers, adding a "Skip to main content" link requires pairing `<main id="main-content" tabIndex={-1} className="outline-none">` with `scroll-pt-[header-height]` and `motion-safe:scroll-smooth` on the HTML root element. Without `scroll-pt`, jumping directly to `#main-content` or section anchors causes the sticky header to obscure the focused section heading.

**Action:** Whenever adding skip links or jump links to sticky-header layouts, ensure `scroll-pt-*` is applied at the root CSS layer and `tabIndex={-1}` is set on `<main>` so programmatic focus shift works cleanly across all browser and screen reader combinations without layout clipping.
