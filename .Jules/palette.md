# Palette Journal - JC Realty & Investment Co.

## 2025-05-14 - Sticky Header Anchor Obstruction
**Learning:** In single-page applications with a sticky header (80px in this case), standard anchor navigation causes the target element's top to be hidden behind the navigation bar. This breaks the visual connection for users and can obscure important headings.
**Action:** Implement `scroll-mt-20` (matching the h-20 header) on all section landmarks and main content areas to ensure proper visibility upon navigation.

## 2025-05-14 - Skip-to-Content Necessity
**Learning:** Without a "Skip to Content" link, keyboard and screen reader users must tab through the entire navigation menu on every page load (or refresh), which is a significant barrier to efficiency and a common accessibility failure.
**Action:** Always include a visually-hidden-until-focused skip link as the first interactive element in the DOM, targeting a `main` landmark with `tabIndex={-1}` for programmatic focus management.
