## 2026-06-08 - Enhanced Navigation and Accessibility
**Learning:** For single-page applications with sticky headers, a standard 'Skip to Content' link requires both a `<main>` landmark with `tabIndex={-1}` (for programmatic focus) and CSS `scroll-mt` offsets on all section anchors. Without `scroll-mt`, anchor navigation (including skip links) results in headings being obscured by the header. The offset should match the header height (e.g., `scroll-mt-20` for an 80px header).

**Action:** Always implement a skip link targeting a `<main>` landmark and pair it with `scroll-mt` utilities and `motion-safe:scroll-smooth` to ensure a seamless, accessible navigation experience.

## 2026-06-08 - Accessible Mobile Menus
**Learning:** Mobile menu toggles must communicate state to assistive technologies using `aria-expanded` and `aria-controls`. Transitions should use `visibility` and `opacity` rather than `display: none` (or `hidden` class) to allow for smooth animations while keeping the element available for screen readers when necessary, or ensuring it is properly removed from the accessibility tree when closed.

**Action:** Use dynamic ARIA attributes for all interactive toggle components and prefer visibility-based transitions for accessible animations.
