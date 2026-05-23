## 2025-05-14 - Mobile Menu Accessibility & Transitions
**Learning:** For accessible mobile menus, avoid conditional rendering (`isMenuOpen && <Menu />`) if you want to support CSS transitions. Conditional rendering removes the element from the DOM immediately, preventing exit animations. Using `visibility: hidden` and `max-height: 0` keeps the element in the DOM for screen readers (if properly managed with `aria-hidden` or by ensuring it's not focusable when closed) and allows for smooth CSS-based transitions.
**Action:** Use a persistent container with `opacity`, `visibility`, and `max-height` transitions combined with `aria-expanded` and `aria-controls` on the toggle button for mobile menus.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus outlines are often subtle or inconsistent. In high-contrast brand palettes (like Navy/Gold), explicit `focus-visible` styles using brand colors (`ring-gold`) significantly improve navigation clarity for keyboard-only users without affecting mouse users.
**Action:** Always implement `focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2` (or equivalent brand color) on all interactive elements.
