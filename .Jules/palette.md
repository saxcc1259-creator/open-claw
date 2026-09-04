## 2026-09-04 - Accessible Anchor Navigation and Main Landmark Baseline

**Learning:** Single-page applications with sticky headers often obscure section headings on anchor navigation or skip-link jump unless scroll-padding-top (e.g. `scroll-pt-20`) is set on `html`. Additionally, combining a 'Skip to Content' link with a `<main id="main-content" tabIndex={-1}>` landmark allows keyboard and screen reader users to skip repeated navigation items seamlessly without causing visible outline focus rings on mouse interaction.

**Action:** Always pair 'Skip to Content' links with `<main id="main-content" tabIndex={-1} className="outline-none">` and configure `scroll-pt-[header-height]` plus `motion-safe:scroll-smooth` on the root `html` element.
