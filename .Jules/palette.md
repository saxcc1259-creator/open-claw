## 2025-01-24 - [Sticky Header Navigation Offset]
**Learning:** Sticky headers (e.g., `h-20` or 80px) obscure the top of the content when using anchor links. Applying `@apply scroll-mt-20` to section landmarks ensures that navigation targets are scrolled into full view.
**Action:** Always pair sticky headers with `scroll-margin-top` on anchor targets and include a 'Skip to Content' link for keyboard accessibility.
