## 2025-05-14 - Skip Links and Scroll Offsets in Sticky Headers
**Learning:** When using a sticky/fixed header, standard anchor navigation often obscures the top of the section. Implementing `scroll-margin-top` (or `scroll-mt` in Tailwind) equal to or greater than the header height ensures content is visible upon navigation. Additionally, a "Skip to Content" link is a critical first-tab entry point for keyboard accessibility that must be visually hidden but branded and visible on focus.
**Action:** Always pair sticky headers with `scroll-mt` utilities on target landmarks and ensure a branded skip-link is the first interactive element in the DOM.

## 2025-05-14 - Dynamic ARIA for Mobile Navigation
**Learning:** Mobile menu buttons (hamburger icons) are often inaccessible to screen readers if they lack `aria-expanded` and `aria-controls` attributes. These must be dynamically updated via state to communicate the visibility of the menu container.
**Action:** Implement `aria-expanded={isOpen}` and `aria-controls="menu-id"` on all toggle-based navigation components.
