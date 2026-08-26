## 2026-08-26 - Semantic Foundation and Keyboard Accessibility

**Learning:** Single-page luxury marketing sites often lack essential keyboard navigation features (e.g. skip-links, focus rings, dynamic ARIA attributes, and explicit landmarks), preventing screen reader and keyboard users from efficiently navigating content.
**Action:** Always combine a 'Skip to Content' link targeting `<main tabIndex={-1}>` with smooth scroll-padding (`scroll-pt-20`), dynamic menu state attributes (`aria-expanded`, `aria-controls`), and custom gold focus-visible outline rings on interactive components.
