## 2025-05-14 - Navigation Accessibility and Smoothness

**Learning:** To prevent content overlap during anchor navigation (including skip links), use `@apply motion-safe:scroll-smooth` on the `html` element and apply `@apply scroll-mt-20` to both `section[id]` tags and the `#main-content` landmark in `src/index.css`. This ensures the target is visible below the sticky header.
**Action:** Always include scroll-margin-top equal to the sticky header height when implementing anchor links or skip-to-content functionality.

**Learning:** Mobile navigation components must use dynamic ARIA attributes (`aria-expanded` and `aria-controls`). For `aria-controls` to be effective, the target menu container should ideally remain in the DOM (even if hidden via CSS) rather than being conditionally rendered, ensuring the ID reference stays valid for assistive technology.
**Action:** Prefer toggling visibility classes (like `hidden`) for accessible mobile menus to maintain DOM persistence for ARIA references.
