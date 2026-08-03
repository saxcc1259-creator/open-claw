# Palette UX Journal

## 2026-08-03 - Accessible Single-Page Scroll Navigation with Sticky Headers
**Learning:** In single-page applications utilizing sticky navigation headers, anchor links and skip-to-content targets can cause scrolled content to be visually obscured behind the sticky bar, while failing to shift focus for screen reader users. Simply using element anchors without `tabIndex={-1}` does not programmatically transfer keyboard focus, leaving users disoriented. Pairing a "Skip to Content" link targeting `<main>` with `tabIndex={-1}`, `outline-none`, and `scroll-pt-20` on the base `html` tag provides a seamless visual transition and fully accessible keyboard/screen-reader navigation.
**Action:** Always combine skip-to-content anchors with `<main id="main-content" tabIndex={-1} className="outline-none">` and apply responsive smooth-scrolling combined with scroll-padding-top offsets equal to the header's height in the global style base layer.
