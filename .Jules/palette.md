## 2026-09-21 - Single Page Landmark and Sticky Header Offsets

**Learning:** Combining a top-level skip-to-content link targeting `<main id="main-content" tabIndex={-1}>` with global Tailwind CSS `scroll-pt-20` on `html` provides seamless keyboard navigation and prevents sticky header content overlap without requiring JavaScript scroll logic.

**Action:** Always pair `<main tabIndex={-1}>` skip targets with `scroll-pt-[header-height]` on `html` in single-page apps with fixed headers.
