## 2025-05-14 - Essential Landing Page Accessibility
**Learning:** For single-page applications with fixed navigation, a "Skip to Content" link is a critical entry point for keyboard users to bypass repetitive header links. Additionally, mobile menu toggles without `aria-expanded` and `aria-controls` create a "silent" interaction for screen reader users who won't know if the menu actually opened.
**Action:** Include a skip link and core ARIA attributes in the initial layout of every single-page landing project.
