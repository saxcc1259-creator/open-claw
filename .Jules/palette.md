## 2026-08-31 - Semantic Foundation & Sticky Header Navigation

**Learning:** For landing pages with sticky headers (like an 80px header), anchor navigation can obscure section titles upon scroll focus unless `scroll-padding-top` / `scroll-pt-*` is configured globally on `html`. Additionally, adding a focusable 'Skip to Content' link paired with `<main id="main-content" tabIndex={-1}>` provides screen reader and keyboard users seamless navigation without focus outline artifacts.

**Action:** Always combine a 'Skip to Content' link targeting `<main id="main-content" tabIndex={-1} className="outline-none">` with `motion-safe:scroll-smooth` and `scroll-pt-*` on the root `html` element when configuring sticky headers.
