## 2026-06-18 - [Keyboard Navigation & Landmark Structure]
**Learning:** For single-page applications with fixed navigation, providing a "Skip to Content" link targeting a semantic <main> landmark (with tabIndex={-1}) is essential for keyboard and screen reader accessibility, allowing users to bypass repetitive navigation links.
**Action:** Always implement a <main> landmark and a skip-link in the root layout to establish a standard keyboard entry point for the primary content.
