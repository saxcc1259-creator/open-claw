## 2026-06-03 - [Skip Links & Sticky Header Offsets]
**Learning:** Reusable UX/Accessibility Pattern: For single-page apps with sticky headers, combine a 'Skip to Content' link targeting a `<main>` landmark (with tabIndex={-1}) with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` to ensure seamless and non-obscured keyboard navigation.
**Action:** Always implement a skip-to-content link and ensure all anchor targets have appropriate scroll margins to prevent them from being hidden behind sticky navigation bars.
