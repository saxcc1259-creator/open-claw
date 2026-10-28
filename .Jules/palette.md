## 2026-10-28 - Sticky Header Anchor Offsets & Skip Link Focus

**Learning:** When adding a "Skip to Content" link and programmatic main landmark focus (`tabIndex={-1}`), single-page apps with fixed headers can obscure the active section heading unless `scroll-padding-top` is set on the `html` element.
**Action:** Always pair fixed header offsets (`scroll-padding-top: 5rem`) with `motion-safe:scroll-smooth` on the `html` element so anchor jumps and programmatic focus targeting keep headings visible below the header bar.
