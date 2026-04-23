# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Improving SPA Accessibility with Skip Links
**Learning:** Single-page applications with sticky headers and multiple sections (like real estate landing pages) can be tedious to navigate for keyboard and screen reader users. Without a "Skip to Content" link, these users must tab through the entire navigation menu on every page load or refresh before reaching the primary content.
**Action:** Always verify the presence of a "Skip to Content" link as the first focusable element. Ensure it targets a semantic `<main>` landmark with a corresponding ID to provide an efficient "escape hatch" from repetitive navigation.
