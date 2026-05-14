## 2025-01-24 - Accessibility in Luxury Real Estate Design
**Learning:** High-end aesthetics often overlook accessibility (like skip links and visible focus rings). In Tailwind v4, global `focus-visible` rings with brand-specific colors (`#D4AF37`) maintain luxury vibes while meeting WCAG. Additionally, sticky headers (80px) require precise `scroll-mt-20` offsets to prevent content overlap during anchor navigation.
**Action:** Always implement a main landmark and skip link early, and use `scroll-margin-top` matching the header height for all ID-targeted sections.
