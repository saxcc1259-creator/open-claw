# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Anchor Navigation & Keyboard Accessibility

**Learning:** Sticky headers (h-20) in this project will overlap anchor link targets (sections) unless a corresponding scroll margin (`scroll-mt-20`) is applied to those sections. Additionally, interactive elements lacked clear focus states, which is critical for keyboard navigation.

**Action:**
1. Apply `@apply scroll-mt-20` to `section[id]` in global CSS to prevent content occlusion.
2. Use standardized focus-visible styles: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2` for all buttons and links to ensure accessibility and design consistency.
