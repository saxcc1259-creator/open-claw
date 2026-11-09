## 2026-11-09 - Accessible Skip Link and Main Landmark with Sticky Header

**Learning:** Single-page landing pages with sticky headers require coordinating the header's z-index (lowered to z-40) with the skip link (z-50) alongside scroll-padding-top (scroll-pt-20) to ensure keyboard users can jump straight to main content without headings being obscured beneath the fixed bar.

**Action:** Whenever introducing a skip-to-content link on sticky header layouts, wrap page sections in `<main id="main-content" tabIndex={-1} className="outline-none">`, configure `scroll-pt-[header-height]` and `motion-safe:scroll-smooth` on `html`, and set the focused skip link to render above the navigation.
