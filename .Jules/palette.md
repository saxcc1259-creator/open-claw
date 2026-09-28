## 2026-09-28 - Mobile Navigation ARIA State and Controls

**Learning:** Mobile menu toggles require dynamic `aria-label` updates ("Open..." vs "Close..."), `aria-expanded` state reflection, and `aria-controls` targeting the navigation container (`id="mobile-menu"`) to ensure seamless navigation for screen reader users. Decorative SVG icons inside toggles and action buttons must explicitly set `aria-hidden="true"` to prevent auditory redundancy.
**Action:** Always include `aria-expanded`, dynamic `aria-label`, `aria-controls`, and `aria-hidden="true"` on inner icons when implementing disclosure patterns like mobile navigation drawers.
