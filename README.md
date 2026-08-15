# ResurchIn — optimized Next.js / TypeScript build

Performance-focused conversion of the exact August 15 ResurchIn live-site backup.

## Run

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run typecheck
npm run build
npm start
```

## Performance work included

- Server components by default; no custom React client component exists solely to boot legacy interactions.
- Deferred vanilla interaction runtime (`site-v2.js`) with requestAnimationFrame throttling for pointer-heavy effects.
- Route-aware CSS imports: shared foundation, homepage layer, and inner-page layer are no longer all requested on every route.
- Existing AVIF assets retained instead of recompressing already-efficient originals.
- Responsive native `srcset`/`sizes` for Pexels AVIFs, including dynamic image swaps.
- Above-the-fold hero images use eager/high-priority loading; below-the-fold media stays lazy.
- Intrinsic image width/height + async decoding reduce layout shift and decode blocking.
- Critical local fonts are preloaded; all fonts remain self-hosted.
- Long-lived immutable cache headers for versioned/static assets.
- Conservative `content-visibility` containment on repeated below-fold inner-page cards/figures.
- Production source maps disabled, compression enabled, framework header removed.

## Visual fidelity

No layout, copy, route, brand color, typography choice, or interaction concept was redesigned. The optimization pass changes delivery/runtime behavior, not the intended appearance.

## Note about this environment

The source was statically validated and packaged here. `npm install` could not complete in the current sandbox because access to the npm registry timed out, so the final `next build` must run in an environment with registry access (local machine, GitHub Actions, Vercel, etc.).
