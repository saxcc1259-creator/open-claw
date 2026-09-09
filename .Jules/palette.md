## 2026-09-09 - Semantic Baseline and Skip-Links in Single-Page Applications

**Learning:** Single-page applications with fixed navigation headers often obscure target headings when keyboard/screen-reader users jump directly to sections or main content. Combining a `#main-content` skip link with `scroll-pt-20` on `html` and `tabIndex={-1}` on `<main>` ensures predictable focus management and unobscured visual alignment.
**Action:** Always pair sticky headers with `scroll-pt-[header-height]` on `html`, wrap primary section content in `<main tabIndex={-1} className="outline-none">`, and place a skip-to-content link as the first tabbable element in the app.
