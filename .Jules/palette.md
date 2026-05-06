## 2025-05-15 - Enhancing Landing Page Accessibility and Mobile Navigation

**Learning:** Single-page landing pages with sticky headers often suffer from "anchor link overlap," where the header obscures the target section heading. Additionally, immediate conditional rendering of mobile menus can be jarring and lacks accessibility for screen readers if ARIA attributes are not dynamically updated.

**Action:**
- Apply `scroll-mt-[header-height]` to all section landmarks to ensure heading visibility during anchor navigation.
- Use `motion-safe:scroll-smooth` for a more pleasant navigation experience.
- Implement mobile menus using CSS transitions (max-height, opacity, visibility) instead of conditional mounting to support animations and maintain DOM presence for accessibility.
- Always use `aria-expanded` and `aria-controls` on menu toggles to provide state information to assistive technologies.
