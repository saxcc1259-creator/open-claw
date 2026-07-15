## 2026-07-15 - Semantic Foundation for SPAs
**Learning:** Single-page applications often lack a clear navigation flow for keyboard users. Combining a 'Skip to Content' link with semantic landmarks (<header>, <main>) and proper scroll-padding-top (to account for sticky headers) creates a solid accessibility baseline that improves the experience for both screen reader and power users.
**Action:** Always implement a 'Skip to Content' link targeting a `<main id="main-content" tabIndex={-1}>` and ensure `scroll-pt-[header-height]` is applied to the root element.
