## 2026-09-20 - Single-Page App Semantic Navigation & Focus Management
**Learning:** For single-page web applications with fixed/sticky headers, keyboard navigation requires pairing a skip link targeting `<main id="main-content" tabIndex={-1}>` with `scroll-padding-top` on the root container so anchor targets are not hidden behind the header.
**Action:** When adding skip navigation links or updating landing page section targets, ensure `html` has `scroll-padding-top` matching the fixed header height and `<main>` has `tabIndex={-1}` for keyboard focus management.
