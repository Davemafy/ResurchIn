# ResurchIn Performance Pass — v2.0

This build preserves the August 15 visual implementation while changing how the browser receives and executes it.

## Verified structure

- 10 routes
- 15 `.tsx` files
- 0 `.html` files
- 0 custom `use client` components
- 34 static page images routed through one server-side `ResponsiveImage` component
- 57 image assets total after adding mobile-responsive AVIF derivatives
- TypeScript/TSX syntax check: 16/16 files passed
- Runtime JavaScript syntax check: passed
- CSS parser check: 3/3 chunks passed
- Direct static asset reference check: passed

## Delivery changes

### CSS

The exact-conversion build requested 140,264 bytes of CSS source on every route before transfer compression.

- Homepage source CSS now: 127,659 bytes (inner-page layer excluded)
- Inner-route source CSS now: 96,234 bytes (homepage layers excluded)
- Inner routes therefore avoid ~31.4% of the prior raw CSS source before Next production minification/compression.

### Hero media on a typical 390px / DPR2 phone

The browser can now select an 828px AVIF instead of receiving the original 1400–1800px source. Actual selection can vary with device pixel ratio, zoom and viewport.

| Route | Previous hero | 828px candidate | Reduction |
|---|---:|---:|---:|
| `/` | 59.2 KB | 20.3 KB | 65.7% |
| `/program/` | 87.0 KB | 21.9 KB | 74.8% |
| `/community/` | 167.4 KB | 36.9 KB | 78.0% |
| `/resources/` | 101.0 KB | 25.8 KB | 74.4% |
| `/about/` | 127.1 KB | 28.9 KB | 77.3% |
| `/mentors/` | 87.0 KB | 21.9 KB | 74.8% |
| `/apply/` | 160.2 KB | 37.7 KB | 76.4% |

Additional 480, 640, 768, 828, 960 and 1080px AVIF candidates let the browser choose more closely for different viewport/DPR combinations. Original high-resolution assets remain available for large/high-DPI displays.

## Runtime changes

- Removed the React client hydration island that existed only to append `site.js`.
- Interaction runtime now loads as a deferred vanilla script from the server-rendered layout.
- Pointer-heavy lens/orbit/photo effects are requestAnimationFrame-throttled.
- Carousel scheduling pauses while the document is hidden.
- Dynamic image swaps update `srcset`, not only `src`.
- Scroll listeners that already used passive/rAF behavior were preserved.

## Rendering / caching

- Hero/LCP candidates: eager + `fetchPriority=high`.
- Below-fold imagery: lazy + async decode.
- Intrinsic image dimensions reduce layout shift.
- Critical local fonts are preloaded; no external font host is required.
- `/assets/*` is configured with one-year immutable browser caching.
- Conservative `content-visibility` is applied only to repeated below-fold inner-page cards/figures, not the sticky homepage storytelling sections.
- Production browser source maps are disabled and compression remains enabled.

## Build caveat

The sandbox could not reach the npm registry long enough to install the Next/React dependencies, so a full `next build` could not be run here. Syntax, CSS parsing, runtime parsing, routes and asset references were validated independently. Run `npm install && npm run check` locally or in Vercel/GitHub Actions for the final framework-level build verification.
