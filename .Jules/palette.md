# Palette's Journal - JC Realty & Investment Co.

## 2026-07-22 - Semantic Foundation & Mobile Navigation Accessibility
**Learning:** Single-page applications with sticky headers require scroll-padding combined with smooth-scroll and a skip link to ensure keyboard focus isn't visually obscured when navigating. Additionally, interactive mobile menu buttons must convey their current state dynamically via dynamic ARIA properties (`aria-expanded`, dynamic `aria-label`) and target specific containers via `aria-controls` to be fully accessible for assistive technologies.
**Action:** Always combine `motion-safe:scroll-smooth` and `scroll-pt-[header-height]` at the html element level alongside a 'Skip to Content' link targeting a `<main>` container with `tabIndex={-1}` and `className="outline-none"`. Also ensure decorative icons are explicitly hidden with `aria-hidden="true"`.
