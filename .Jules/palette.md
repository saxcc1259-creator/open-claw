## 2025-05-14 - Skip to Content & Scroll Padding
**Learning:** Single-page apps with sticky headers often suffer from "obscured content" when using anchor links. A "Skip to Content" link is essential for keyboard users, but it must be paired with `scroll-margin-top` to ensure the target landmark isn't hidden behind the fixed header.
**Action:** Always implement `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` when adding skip links to sites with sticky navigation.
