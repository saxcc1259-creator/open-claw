## 2025-05-15 - [Sticky Header Buffer and Accessible Smooth Scrolling]
**Learning:** For landing pages with sticky headers (h-20/80px), using `@apply scroll-mt-20` on section targets is essential to prevent content overlap during anchor navigation. Additionally, `motion-safe:scroll-smooth` provides a delightful navigation experience without triggering vestibular issues for users who prefer reduced motion.
**Action:** Always check header height and apply corresponding `scroll-mt` to anchor targets, and ensure smooth scrolling is wrapped in `motion-safe` utility.

## 2025-05-15 - [Skip-to-Content and Main Landmark Pattern]
**Learning:** Implementing a "Skip to Content" link alongside a `<main id="main-content" tabIndex={-1} className="outline-none">` landmark is a robust pattern for keyboard accessibility in single-page React apps. The `tabIndex={-1}` ensures the browser moves programmatic focus correctly to the container without adding it to the global tab order.
**Action:** Use this pairing for all single-page landing pages to ensure keyboard users can efficiently bypass repetitive navigation.
