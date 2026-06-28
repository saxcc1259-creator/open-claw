## 2026-06-28 - Semantic Foundation & Smooth Navigation
**Learning:** Combining a 'Skip to Content' link with `scroll-padding-top` and `motion-safe:scroll-smooth` provides a robust accessibility foundation for single-page sites with sticky headers, ensuring keyboard users can navigate quickly without content being obscured.
**Action:** Always implement a `<main>` landmark with a corresponding skip link and account for sticky header offsets in global CSS to maintain a professional and accessible UX.

## 2026-06-28 - Accessible Mobile Menu Transitions
**Learning:** Using CSS transitions (`max-height`, `opacity`, `visibility`) instead of conditional rendering for mobile menus preserves accessibility by keeping the menu in the DOM (when using `visibility: invisible` properly) and provides a much more polished feel through smooth animations.
**Action:** Use the `aria-expanded` and `aria-controls` pattern with CSS-based transitions for all mobile navigation components to ensure screen reader support and visual delight.
