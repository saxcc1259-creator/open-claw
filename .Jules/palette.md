## 2026-06-08 - Sticky Header Accessibility
**Learning:** In single-page sites with sticky headers, anchor links often scroll the target content behind the header. Using `scroll-mt` (scroll-margin-top) globally on sections ensures headings remain visible upon navigation.
**Action:** Always apply `scroll-mt-[header-height]` to sections or a global selector when a sticky header is present.

## 2026-06-08 - Skip Link Implementation
**Learning:** A "Skip to Content" link is critical for keyboard users to bypass repetitive navigation. It must be the first focusable element in the DOM and target a `<main>` landmark with `tabIndex={-1}` to ensure focus is correctly shifted for screen readers without adding an outline to the entire content area.
**Action:** Place skip-links as the first child of the body/wrapper and use `sr-only focus:not-sr-only` for visual management.

## 2026-06-08 - Focus Visibility
**Learning:** Default browser focus rings are often low-contrast against premium dark or brand-heavy backgrounds. High-contrast, theme-consistent focus rings (like gold on navy) provide better clarity for keyboard navigation.
**Action:** Apply `focus-visible:ring-2` with brand-consistent colors and `focus-visible:ring-offset-2` to all interactive elements.
