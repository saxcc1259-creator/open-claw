## 2025-05-14 - Sticky Header & Anchor Navigation
**Learning:** In single-page apps with a sticky header (80px in this case), anchor navigation (e.g., #services) causes the target heading to be obscured by the header. Standard browser behavior doesn't account for sticky element height.
**Action:** Apply `scroll-mt-20` (matching the header's 80px height) to all section targets and the `#main-content` landmark to ensure headings are fully visible after navigation.

## 2025-05-14 - Accessible Mobile Transitions
**Learning:** Conditionally rendering a mobile menu (e.g., `{isOpen && <Menu />}`) prevents CSS transitions from firing and can be jarring for users. Using `visibility: invisible` and `max-height: 0` keeps the menu accessible in the DOM while allowing for smooth animations.
**Action:** Use a combination of `transition-all`, `duration-300`, `opacity-0/100`, and `invisible/visible` classes to animate the menu while maintaining accessibility via ARIA attributes.

## 2025-05-14 - Skip Links in SPAs
**Learning:** Keyboard users often have to tab through repetitive navigation on every page load. A "Skip to Content" link is a standard accessibility requirement.
**Action:** Implement a skip link as the first focusable element, targeting a `<main>` landmark with `tabIndex={-1}` and `outline-none` to programmatically shift focus without adding a visual ring to the entire container.
