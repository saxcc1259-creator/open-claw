## 2025-05-14 - [Navigation & Scroll Experience]
**Learning:** For single-page apps with sticky headers (80px), using 'scroll-mt-20' on sections prevents content overlap during anchor navigation. Additionally, refactoring mobile menus from conditional rendering to CSS-based 'visibility' transitions ensures they remain in the DOM for screen readers while providing a smooth visual experience.
**Action:** Always combine '<main>' landmarks with 'Skip to Content' links and apply 'scroll-margin-top' to all scroll targets in projects with persistent navigation.
