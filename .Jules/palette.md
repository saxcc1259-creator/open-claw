## 2025-05-14 - Sticky Header & Anchor Navigation
**Learning:** In single-page applications with sticky headers, anchor links (e.g., #about) will cause the browser to scroll to the top of the section, which is then obscured by the sticky header.
**Action:** Use `scroll-mt-[header-height]` (e.g., `scroll-mt-20` for an 80px header) on section targets and `scroll-behavior: smooth` on the html element to ensure clear, user-friendly navigation transitions.
