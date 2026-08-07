## 2026-08-07 - [Sticky Headers & Landmarks]
**Learning:** Combining a "Skip to Content" link targeting a <main> landmark (with tabIndex={-1}) with CSS-based scroll-padding and motion-safe smooth scrolling prevents content from being obscured under high sticky headers during keyboard/screen reader navigation.
**Action:** Always combine skip links with scroll-padding-top on html and tabIndex={-1} on the target landmark element.
