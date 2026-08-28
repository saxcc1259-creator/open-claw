## 2026-08-28 - Mobile Navigation Accessible Controls

**Learning:** Mobile menu toggle buttons require dynamic `aria-expanded` and `aria-label` state feedback along with `aria-controls` referencing the target menu ID and explicit focus rings (`focus-visible:ring-2`) to ensure full accessibility for screen readers and keyboard-only users.
**Action:** Always link mobile menu toggles to their container ID (`aria-controls`), toggle dynamic labels ("Open menu" / "Close menu"), and hide decorative toggle icons (`aria-hidden="true"`).
