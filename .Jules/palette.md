## 2026-10-23 - Skip to Content & Semantic Landmarks Foundation
**Learning:** Single-page applications with sticky headers often lack immediate keyboard focus paths and main content landmarks, preventing screen readers and keyboard users from jumping directly to primary page content.
**Action:** Always include a Skip to Content link as the first focusable child targeting `<main id="main-content" tabIndex={-1}>`, paired with `scroll-pt-[header_height]` on `html` for non-obscured anchor navigation.
