# Scroll + responsive stability patch

Base: the dark dossier / studio-elevation build that matches production commit `b0e1aa43b9fe475eb082c5983ad399457d861f98` visually.

Changes are intentionally narrow. No copy, color, typography, imagery, section order, or visual identity redesign.

## Fixed
- horizontal page overflow now uses `overflow-x: clip`, which does not create an accidental scroll container that can break sticky sections
- sticky research chapter uses the compact header height and dynamic viewport units
- scroll-driven research phases update in `requestAnimationFrame` instead of a 170ms debounce that could lag/flicker while scrolling
- phase-nav clicks scroll from the section's real document position instead of `offsetTop`
- site progress reads the document scrolling element and responds to orientation / visual viewport changes
- mobile menu locks the page behind it, closes on desktop resize, and scrolls internally on short screens
- mobile hero reserves explicit space for the paper, actions and method track
- revision reel controls are in normal flow on phones so content cannot sit behind them
- dossier viewer uses `100dvh` and internal scrolling instead of fragile `100vh` calculations
- mobile research story is normal document flow, with touch-scrollable phase tabs
- 390/340px rules prevent the dossier paper, working paper and review UI from leaking off-canvas
- long inner-page content can wrap instead of widening the viewport
- reduced-motion mode disables the new transitions

## Local validation
Run:

```bash
npm install
npm run check
npm run dev
```

Then inspect at 1440, 768, 390 and 320 widths.

## QA pass additions
- fixed the 721–920px Research Story implicit-third-column overflow
- prevented the 721–820px hero CTA / working-paper collision
- added keyboard focus containment to the mobile menu and dossier dialog
- removed a focusable control from an `aria-hidden` subtree
- cancelled stale research-phase timers
- made mentor notes safe on short-height phone dialogs
- added consistent `:focus-visible` rings
