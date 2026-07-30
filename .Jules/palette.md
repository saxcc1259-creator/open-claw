# Palette's Journal - JC Realty & Investment Co.

## 2026-07-30 - Reusable Skip-Link & Sticky Header Pattern
**Learning:** For single-page apps with a sticky header, combining a "Skip to Content" link targeting a `<main>` landmark (with `tabIndex={-1}`) with `scroll-padding-top` and `motion-safe:scroll-smooth` on the `html` element ensures smooth, accessible, and non-obscured keyboard-only navigation. Applying high-contrast focus rings (`focus-visible:ring-gold`) globally to `a` and `button` elements ensures styling consistency without cluttering individual components.
**Action:** Always wrap the core page content in a `<main id="main-content" tabIndex={-1} className="outline-none">` landmark, pair with a prominent Skip Link as the first focusable element, and configure scroll padding offsets matching the sticky header height.
