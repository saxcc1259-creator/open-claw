## 2026-06-08 - Accessible Sticky Header Navigation
**Learning:** Sticky headers (80px in this project) often obscure content when navigating via anchor links or skip links. Standard anchor behavior scrolls the target to the very top of the viewport, placing it underneath the fixed header. Additionally, keyboard users need a way to bypass the navigation menu to reach the main content directly.

**Action:** Apply `scroll-mt-20` (matching the 80px header height) to all section targets and the main landmark. Use `motion-safe:scroll-smooth` on the `html` element for better UX. Implement a "Skip to Content" link that targets a `<main id="main-content" tabIndex={-1}>` landmark to ensure focus shifts correctly for screen readers and keyboard users.
