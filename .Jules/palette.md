## 2026-09-05 - Skip Link and Sticky Header Offset Pattern
**Learning:** Adding a skip-to-content link in a single-page layout with a fixed/sticky header requires pairing `scroll-padding-top` on the HTML element with `tabIndex={-1}` on `<main>` so programmatic focus and scroll positioning do not obscure section headers under the navbar.
**Action:** Always combine `scroll-padding-top` on the root container with a targeted `<main tabIndex={-1}>` landmark when implementing skip navigation for sticky header applications.
