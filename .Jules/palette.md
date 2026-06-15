## 2026-06-08 - Enhancing Mobile Navigation & Page Accessibility

**Learning:** Accessible mobile menus should remain in the DOM to support smooth CSS transitions while using `visibility` and `aria-expanded` to manage screen reader access. Additionally, sticky headers require `scroll-margin-top` on anchor targets to prevent the header from obscuring content upon navigation.

**Action:** Use `max-h`, `opacity`, and `visibility` for mobile menu transitions instead of conditional rendering. Apply `scroll-mt` corresponding to the header height (e.g., `scroll-mt-20` for an 80px header) to all section targets and the main content landmark.
