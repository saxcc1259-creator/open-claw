## 2026-06-08 - Semantic Foundation and Accessible Navigation
**Learning:** Proper use of semantic landmarks (<header>, <main>) combined with a skip-to-content link and accessible scroll offsets significantly improves the experience for keyboard and screen reader users without altering the visual design.
**Action:** Always implement a skip link targeting a <main> element with tabIndex={-1} and ensure sticky headers don't obscure content via scroll-padding.
