## 2026-09-22 - Semantic Foundation & Sticky Header Focus Management
**Learning:** Combining a skip-to-content link targeting a `<main tabIndex={-1}>` landmark with `scroll-pt-20` on `html` prevents sticky headers (h-20) from obscuring focus targets upon keyboard navigation and ensures immediate screen reader focus transfer.
**Action:** Always pair header-offset scroll padding with programmatic focus landmarks (`tabIndex={-1}`) when adding skip links in single-page layouts with sticky navigation headers.
