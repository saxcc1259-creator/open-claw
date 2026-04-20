## 2025-05-15 - Sticky Header Scroll Offset
**Learning:** When using a sticky header (e.g., `h-20`), anchor navigation often causes the header to overlap the target section's title or content. Applying `scroll-mt-[height]` (e.g., `scroll-mt-20`) to section elements ensures they are positioned correctly below the header after scrolling.
**Action:** Always check for sticky headers and implement corresponding `scroll-margin-top` offsets for internal page anchors.
