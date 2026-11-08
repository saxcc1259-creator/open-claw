## 2026-11-08 - Accessible Semantic Foundation for Single-Page Corporate Sites

**Learning:** Single-page sites with sticky navigation bars create two frequent accessibility pitfalls: keyboard users must tab through the entire navigation bar before reaching core content, and in-page anchor links scroll target headers directly beneath the fixed header bar. Providing a high-contrast 'Skip to Content' link targeting a `<main tabIndex={-1}>` landmark, coupled with `scroll-padding-top` matching the sticky header height (`h-20` / `5rem`), resolves both issues cleanly without layout refactoring.

**Action:** Whenever building or enhancing single-page layouts with sticky headers, combine a focus-visible skip link (`focus:z-50`), a lower navbar z-index (`z-40`), and global `scroll-padding-top` on `html` alongside accessible landmarks (`<main>` and `<footer>`).
