## 2026-10-21 - Accessible Mobile Navigation Disclosure Controls

**Learning:** Mobile navigation toggle buttons require `aria-expanded`, `aria-controls`, dynamic `aria-label`s, and an `id` linking to the collapsible container to properly communicate open/closed state changes to screen readers.
**Action:** Always include `aria-expanded={isOpen}`, `aria-controls={menuId}`, dynamic `aria-label`s, and focus indicators on responsive toggle buttons.
