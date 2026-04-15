## 2025-05-15 - Improved Global Anchor Navigation

**Learning:** When using a sticky header (80px), global anchor links often cause the target section's heading to be obscured. Using `scroll-mt-20` (80px) on sections with IDs ensures proper alignment after scrolling. Additionally, `scroll-smooth` should be applied with `motion-safe` to respect accessibility preferences.

**Action:** Apply `scroll-mt-20` to all elements with an ID and `motion-safe:scroll-smooth` to the html/body to ensure a polished and accessible navigation experience.
