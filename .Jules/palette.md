## 2025-05-14 - Skip to Content & Sticky Header
**Learning:** For single-page apps with sticky headers, combine a 'Skip to Content' link targeting a `<main>` landmark (with tabIndex={-1}) with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` to ensure seamless and non-obscured keyboard navigation.
**Action:** Always implement this pattern when a sticky header is present to ensure accessibility and smooth UX.
