## 2026-08-16 - Semantic Foundation Skip-Link and Main Landmark Pattern
**Learning:** Single page landing pages with sticky header navigation lack immediate focus targets for keyboard and screen reader users, causing inefficient navigation loops through header menu items.
**Action:** Pair a top-positioned skip link targeting a `<main tabIndex={-1}>` landmark with `scroll-pt-20` on `<html>` to enable non-obscured keyboard navigation and clear visual focus management.
