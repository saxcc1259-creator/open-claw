## 2025-05-14 - [Mobile Navigation & Accessibility Refinement]

**Learning:** Replaced abrupt conditional rendering of the mobile menu with CSS transitions (visibility/opacity/max-height). This preserves the component in the DOM for screen readers and allows for ARIA attribute updates (`aria-expanded`) to be announced properly, while providing a more premium feel.

**Action:** Prefer CSS-based visibility transitions over conditional mounting for menus to ensure smooth animations and consistent accessibility state tracking.

## 2025-05-14 - [Sticky Header Navigation]

**Learning:** The landing page uses a 80px (h-20) sticky header. Anchor-linked sections often ended up tucked underneath the header.

**Action:** Apply `scroll-mt-20` (matching the header height) to all section targets and use `motion-safe:scroll-smooth` on the HTML element for a polished navigation experience.

## 2025-05-14 - [Focus Indicator Standardization]

**Learning:** Default browser focus rings were inconsistent or low-contrast against the brand's Navy/Gold palette.

**Action:** Implement a global `focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2` standard to ensure high visibility for keyboard-only users without cluttering the UI for mouse users.
