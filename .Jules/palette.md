## 2025-05-14 - Sticky Header Anchor Navigation
**Learning:** In single-page applications with a sticky header, standard anchor link navigation causes the target element to be obscured by the header.
**Action:** Apply `scroll-mt-[header-height]` to all section identifiers and the main landmark to ensure content is correctly offset when navigated to via skip links or nav links. Combine with `motion-safe:scroll-smooth` for a polished, accessible transition.

## 2025-05-14 - Accessible Skip Navigation
**Learning:** A "Skip to Content" link is essential for keyboard users to bypass repetitive navigation. It requires a target landmark with `tabIndex={-1}` to ensure programmatic focus shift works reliably across all browsers, especially when targeting non-interactive elements like `<main>`.
**Action:** Use a `<main id="main-content" tabIndex={-1} className="outline-none">` pattern to receive focus from the skip link without creating a visual focus ring around the entire content area.
