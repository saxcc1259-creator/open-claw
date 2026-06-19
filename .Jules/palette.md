## 2026-06-08 - [Keyboard Accessibility & Sticky Headers]
**Learning:** In single-page applications with sticky headers, implementing a "Skip to Content" link requires careful coordination with `scroll-margin-top` on the target landmark. Without this offset, the header obscures the top of the content area after the jump, frustrating keyboard users.
**Action:** Always pair a `<main id="main-content">` landmark with a corresponding `scroll-mt-[header-height]` utility and a visually-hidden skip link as the first focusable element.

## 2026-06-08 - [Global Focus Visibility]
**Learning:** Default browser focus rings often lack sufficient contrast against premium dark or cream brand palettes. Explicitly defining a `:focus-visible` ring that uses a high-contrast brand color (like Gold #D4AF37) ensures that keyboard navigation is both functional and aesthetically integrated into the design system.
**Action:** Implement a global `focus-visible` ring using `ring-2` and `ring-offset-2` in the base CSS layer to maintain accessibility without compromising visual design.
