## 2026-10-27 - Semantic Navigation Foundation & Fixed Header Scroll Offsets

**Learning:** Single page application (SPA) landing pages with sticky headers require both a skip-to-content link targeting a `<main>` landmark with `tabIndex={-1}` and explicit scroll padding (`scroll-pt-20`) on the HTML root element. Without `scroll-pt-20`, navigating via skip links or anchor links causes header occlusion over section titles. Moreover, mobile toggle buttons need dynamic ARIA state (`aria-expanded`, dynamic `aria-label`) to ensure full clarity for assistive technology users.

**Action:** Whenever adding a skip link or section navigation to sticky header pages, apply `scroll-pt-[header-height]` and `motion-safe:scroll-smooth` globally, and pair the skip link with `<main id="main-content" tabIndex={-1} className="outline-none">` to allow seamless focus management without persistent visual outline rings on main content.
