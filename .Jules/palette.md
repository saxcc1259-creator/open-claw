## 2025-05-15 - [Mobile Navigation & Skip Links]

**Learning:** To support smooth CSS transitions (like opacity and max-height) in mobile menus, avoid conditional rendering or the `hidden` class. Using `visibility: visible/invisible` and `overflow-hidden` keeps the element in the DOM for screen readers while allowing for visual animation. Additionally, skip links targeting non-interactive landmarks (like `<main>`) require `tabIndex={-1}` and `outline-none` to facilitate focus shift without a global focus ring.

**Action:** Implement mobile menus using CSS-driven visibility/height transitions and ensure skip link targets are programmatically focusable.
