## 2026-09-23 - Semantic Accessibility & Navigation Offsets

**Learning:** Single-page landing sites with fixed/sticky headers require a cohesive semantic foundation (Skip to Content link targeting a `<main>` landmark with `tabIndex={-1}`, along with CSS `scroll-pt-*` and `motion-safe:scroll-smooth`) to guarantee uninterrupted keyboard navigation without content overlap.

**Action:** Combine skip link, `<main>` landmark, scroll padding, and explicit mobile navigation ARIA controls (`aria-expanded`, `aria-controls`) when enhancing single-page layouts.
