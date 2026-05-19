## 2025-05-14 - Sticky Header Anchor Navigation & Skip-Links

**Learning:** When using a sticky header (e.g., `h-20` or 80px), anchor navigation (like `#about` or a "Skip to Content" link) will often cause the target content to be obscured behind the header. Additionally, programmatic focus shifts to non-interactive landmarks require `tabIndex={-1}` to be effective for screen readers.

**Action:**
1. Apply `scroll-mt-[header-height]` (e.g., `scroll-mt-20`) to all anchor-targetable sections and the `<main>` landmark.
2. Implement a "Skip to Content" link that targets a `<main>` landmark with `tabIndex={-1}` and `outline-none`.
3. Use `@apply motion-safe:scroll-smooth` on the `html` element to provide a polished scrolling experience while respecting user motion preferences.
