## 2026-06-08 - [Semantic Foundation & Keyboard UX]
**Learning:** For single-page real estate landing pages with sticky headers, basic semantic landmarks (<main>) and a 'Skip to Content' link are critical but often overlooked. Combining these with `scroll-mt` (or `scroll-pt`) and `focus-visible` styles ensures that the high-contrast brand aesthetic remains accessible without sacrificing visual design.
**Action:** Always implement a main landmark sibling to the footer, and pair skip links with `tabIndex={-1}` on the target to ensure consistent focus management across browsers.
