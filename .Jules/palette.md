## 2025-05-14 - [Accessibility & Navigation Refinement]
**Learning:** Implementing a "Skip to Content" link and proper `<main>` landmarks significantly improves the experience for keyboard-only users in single-page landing sites. Additionally, when using a sticky header, `scroll-margin-top` is essential to prevent anchor targets from being obscured by the navigation bar.

**Action:** Always include a skip link and main landmark in new projects, and ensure `scroll-margin-top` matches the height of any sticky header elements.
