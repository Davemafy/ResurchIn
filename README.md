# ResurchIn

Website for ResurchIn, a free six-month research apprenticeship built around one project, close review, and visible revision.

The site’s main interaction is the revision seam: the same research question is shown at V01 and V06 so the programme’s value is visible before it is explained. That version-history idea carries through the programme, curriculum, mentor review, resources, community, and application pages.

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS

No UI framework or animation library is required.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run check
```

## Routes

`/` · `/program/` · `/curriculum/` · `/mentors/` · `/community/` · `/resources/` · `/resources/how-to-read-a-research-paper-without-getting-lost/` · `/about/` · `/apply/` · `/apply/success/`

## Design notes

The visual system is deliberately narrow: chalk, paper, graphite, oxide correction marks, and cool evidence blue. DM Sans carries most of the interface, DM Mono handles research metadata, and Instrument Serif is reserved for a small number of revision moments.

The final implementation frames live in the project Figma under **FINAL · VERSIONED PROOF · IMPLEMENTATION**.
