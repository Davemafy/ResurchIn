# ResurchIn V24 × Versioned Proof — validation

## Source merge

- Visual system rebuilt around the dark V24 research-desk identity.
- Copy and information architecture retained from Versioned Proof.
- React behavior retained: V01/V06 revision seam, six-version journey, curriculum selector, mobile menu, reveal observer, scroll progress, application form states and success route.
- One active design stylesheet: `public/assets/v24-versioned.css`.
- No legacy `site-v2.js`, Proof Field, Quiet Proof, or stacked `studio-v*` runtime/styles.

## Static checks completed

- 10 route pages present.
- 30 TS/TSX/config files syntax-transpiled with TypeScript 5.8.3: 0 syntax errors.
- 34 local `@/` imports checked: 0 missing.
- 7 local image references checked: 0 missing.
- CSS parsed with tinycss2: 649 rules, 0 parse errors.
- CSS brace and parenthesis counts balanced.
- Responsive breakpoints are explicitly authored for <=1180, <=920, <=620 and <=360, covering desktop, 768, 390 and 320 classes.
- `prefers-reduced-motion` path present.

## Still required before production promotion

The sandbox could not finish `npm install`, so a real `next build` could not be executed here. Run `npm run check` locally. After the preview is live, inspect the actual browser render at desktop, 768, 390 and 320 before promoting it to production.
