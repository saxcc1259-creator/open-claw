## 2025-05-15 - Sticky Header Anchor Navigation
**Learning:** Single-page applications with sticky headers often suffer from anchor navigation "overlap" where the header covers the section heading. Standard scroll-behavior: smooth alone doesn't fix this.
**Action:** Use `scroll-mt-[header-height]` (e.g., `scroll-mt-20`) on sections with IDs to ensure they land correctly below the header. Combine with `@apply motion-safe:scroll-smooth` on the html element for a polished feel that respects user motion preferences.

## 2025-05-15 - Skip Link Focus Management
**Learning:** A "Skip to Content" link is only effective if it shifts focus to a container with `tabIndex={-1}`. Without this, some screen readers and browsers may not correctly reposition the keyboard focus.
**Action:** Always target a `<main id="main-content" tabIndex={-1} className="outline-none">` to ensure programmatic focus shift works reliably across all browsers.
