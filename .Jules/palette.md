## 2026-05-31 - Accessible Anchor Navigation
**Learning:** For single-page apps with sticky headers, combine a 'Skip to Content' link targeting a `<main>` landmark (with tabIndex={-1}) with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` to ensure seamless and non-obscured keyboard navigation.
**Action:** Always implement skip links and scroll offsets for sticky headers to maintain accessibility and prevent content overlap during anchor navigation.
