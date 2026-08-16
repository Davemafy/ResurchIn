# ResurchIn

Production site for ResurchIn, a free six-month research apprenticeship.

This build combines the strongest parts of the previous versions on purpose:

- the dark research-desk identity and working-paper atmosphere from the earlier ResurchIn build
- the clearer version-history writing: V01 → V06, visible revision, sentence-level review
- the working interactions: revision comparison, six version states, curriculum selector, responsive navigation, form states and scroll progress

The main idea is simple: research skill becomes visible in what changes between the first version and the defensible one.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS

No UI framework or animation library.

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run check
```

## Routes

`/` · `/program/` · `/curriculum/` · `/mentors/` · `/community/` · `/resources/` · `/resources/how-to-read-a-research-paper-without-getting-lost/` · `/about/` · `/apply/` · `/apply/success/`

## Design system

The site uses one active stylesheet: `public/assets/v24-versioned.css`.

The visual language is intentionally narrow: near-black research grids, warm paper, grayscale field photography, Instrument Serif, small mono research metadata, and ResurchIn yellow used as a review signal rather than a general background color.

The signature interaction is the V01 ↔ V06 revision seam in the working-paper hero. The same version logic continues through the curriculum and mentor-review experiences.
