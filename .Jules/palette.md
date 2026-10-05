## 2026-10-05 - Dynamic Accessible Mobile Navigation Disclosures

**Learning:** Disclosure triggers like mobile navigation toggle buttons require dynamic `aria-expanded` states and explicit `aria-controls` links to their target menu containers. Static `aria-label`s fail to communicate whether the menu is currently open or closed to screen readers.
**Action:** Always link the button `aria-controls` to the container `id`, update `aria-label` based on state (e.g. "Open navigation menu" vs "Close navigation menu"), set `aria-expanded`, and hide decorative icons inside interactive triggers using `aria-hidden="true"`.
