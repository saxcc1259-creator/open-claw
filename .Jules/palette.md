## 2025-05-15 - [Skip-Link & Scroll Margin Utility]
**Learning:** In SPAs with sticky headers, simply providing anchor links is insufficient for keyboard accessibility and visual alignment. A 'Skip to main content' link is essential for keyboard users to bypass navigation, and Tailwind's `scroll-mt` utility is the most efficient way to prevent header overlap without changing the layout.
**Action:** Always check for sticky headers and implement `scroll-mt-{height}` on section targets alongside a skip-link targeting a `<main>` landmark.
