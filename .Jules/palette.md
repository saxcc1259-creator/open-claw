## 2026-08-14 - Sticky Header Scroll Padding and Skip Link Focus Pattern

**Learning:** When adding a skip-to-content link in single-page React apps with a fixed/sticky header, setting `scroll-padding-top` on the root `html` element combined with `tabIndex={-1}` on `<main>` ensures focus shifts smoothly without the targeted header text being obscured under the sticky navigation bar.

**Action:** Always combine `href="#main-content"` skip links with `scroll-pt-20` (or `scroll-padding-top`) and `tabIndex={-1}` on `<main id="main-content">` for accessible anchor navigation.
