## 2026-09-10 - Landmark Navigation & Mobile Menu Accessibility Foundation
**Learning:** Single-page applications with sticky navigation bars require explicit skip-to-content links, `<main>` landmarks, and scroll-padding offsets to prevent sticky header occlusion during keyboard navigation.
**Action:** Always combine `a[href="#main-content"]`, `<main id="main-content" tabIndex={-1}>`, and `scroll-pt-20` on `html` for SPA accessibility foundations.
