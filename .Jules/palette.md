## 2026-09-26 - Single-Page Accessibility Foundation Pattern

**Learning:** Single-page landing pages with sticky navigation headers require programmatic focus shift (`<main tabIndex={-1}>`) combined with CSS `scroll-pt-20` (scroll-padding-top matching header height) and `aria-expanded`/`aria-controls` on mobile menu toggles to support seamless keyboard navigation without obscuring focused elements under fixed UI elements.

**Action:** Whenever establishing accessibility baselines for single-page marketing or portfolio sites, pair a skip-to-content link targeting a main landmark with sticky header scroll offset styling and dynamic ARIA state attributes on mobile menus.
