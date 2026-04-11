# Palette's Journal - JC Realty & Investment Co.

## 2025-05-15 - [Sticky Header Anchor Offsets]
**Learning:** For landing pages with sticky headers, applying `scroll-mt` (scroll-margin-top) via a global selector like `[id]` in CSS is a more robust and performant solution than manual offset calculations in JavaScript/React. It ensures all anchor links, including accessibility "Skip to content" links, land with appropriate padding.
**Action:** Use `scroll-mt-[header-height]` in the global CSS for any project with a sticky/fixed navigation bar.

## 2025-05-15 - [Mobile Menu Accessibility Landmarks]
**Learning:** Simple React-based mobile menus often miss the connection between the toggle button and the navigation container. Using `aria-controls` paired with a unique ID on the menu container, and `aria-expanded` to reflect state, provides essential context for screen reader users that a simple visibility toggle does not.
**Action:** Always pair mobile toggle buttons with `aria-controls`, `aria-expanded`, and dynamic `aria-label` text.
