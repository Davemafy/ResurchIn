# Vercel parity fix

The original static site scopes its newest homepage and inner-page CSS through classes on `<body>`.
The first TSX conversion recreated those classes with an inline script, which was not reliable after the Next.js/Vercel render.

This patch:
- scopes route classes in server-rendered page wrappers so final CSS is present on first paint;
- applies `v16-ready` to the homepage wrapper for the original entrance animation;
- loads the interaction runtime with `next/script` after hydration;
- keeps `PageClass` as a small client fallback for routes that still need body classes.
