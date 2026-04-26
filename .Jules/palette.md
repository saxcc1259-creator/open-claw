## 2026-04-26 - Enhance mobile menu accessibility
**Learning:** Mobile navigation components must use dynamic ARIA attributes (`aria-expanded` and `aria-controls`) on toggle buttons to properly communicate the state of the associated menu container to assistive technologies. Additionally, the target element of `aria-controls` should ideally remain in the DOM (even if hidden via CSS) to ensure the reference remains valid at all times.
**Action:** Always ensure mobile menu toggles have `aria-expanded` reflecting the open state and `aria-controls` pointing to a persistent menu container's ID.
