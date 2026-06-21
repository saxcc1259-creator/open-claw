## 2026-06-08 - [Accessible Smooth Navigation]
**Learning:** For single-page apps with sticky headers, combining a 'Skip to Content' link targeting a `<main>` landmark (with `tabIndex={-1}`) with `scroll-mt-[header-height]` and `motion-safe:scroll-smooth` ensures seamless and non-obscured keyboard navigation.
**Action:** Always implement semantic landmarks (`header`, `main`, `footer`) and use `scroll-mt` offsets on anchor targets to prevent sticky header overlap.

## 2026-06-08 - [Mobile Menu Accessibility]
**Learning:** CSS-based transitions (using `opacity`, `visibility`, and `max-height`) provide a better UX than conditional rendering and are necessary for accessible screen-reader support during animations.
**Action:** Use `visibility: hidden` and `overflow-hidden` on collapsed menus to ensure they are removed from the accessibility tree while still allowing for smooth CSS transitions.
