## 2025-05-14 - Sticky Header Anchor Navigation
**Learning:** Sticky headers obscure content when using standard fragment navigation (`#id`). Global `scroll-margin-top` on ID-bearing elements prevents content from being hidden and maintains intended design spacing. Pair with `scroll-behavior: smooth` for a premium feel.
**Action:** Always apply `scroll-margin-top` matching the header height plus any intended white space to all sections targeted by fragment links.
