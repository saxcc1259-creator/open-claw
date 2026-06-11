## 2026-06-08 - Global Accessibility Scroll Offsets in Tailwind v4
**Learning:** In single-page apps with a fixed/sticky header, anchor navigation often obscures the target section. Instead of applying individual `scroll-mt` classes to every section, using Tailwind v4's `@layer base` to apply a global `scroll-mt` to all elements with an ID (e.g., `section[id]`) ensures consistent accessibility across the entire site with minimal code duplication.
**Action:** Apply global `scroll-mt` offsets via `@layer base` in the main CSS file to handle sticky header overlaps site-wide.
