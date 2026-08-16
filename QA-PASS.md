# ResurchIn b0e1 — QA pass

Base target: production commit `b0e1aa43b9fe475eb082c5983ad399457d861f98` visual system.
Scope: scrolling, responsive stability, keyboard/focus behavior. No visual redesign.

## QA findings fixed

1. **Tablet Research Story could create an implicit third grid column**
   - At 721–920px, V16 collapsed the sticky story to two columns but the story copy still targeted column 3.
   - Added an explicit two-column / three-row tablet composition so the workbench and copy remain inside the viewport.

2. **Tablet hero actions could collide with the working-paper object around 768px**
   - Added a 721–820px layout that constrains the CTA block to the left column and stacks its actions.

3. **Sample dossier dialog did not trap keyboard focus**
   - Added Tab / Shift+Tab wrapping, Escape handling and prevented arrow-key page scrolling while changing dossier pages.

4. **Mobile menu did not contain keyboard focus**
   - Added focus trapping while open, first-link focus, focus return on Escape, `aria-controls`, and state-specific menu labels.

5. **Hero contained a focusable control inside an `aria-hidden` ancestor**
   - Removed the invalid `aria-hidden` from the interactive working-paper container.

6. **Research phase click timers could race**
   - Repeated phase clicks could leave multiple delayed state updates in flight. The phase transition timer is now cancelled/reused and cleared on unmount.

7. **Short mobile dossier viewports could overlap the mentor note with document content**
   - Reserved note space on normal phone heights; on short screens the note becomes normal-flow content so the dossier can scroll cleanly.

8. **Keyboard focus could disappear visually in the dark UI**
   - Added high-contrast `:focus-visible` treatment to the main interactive systems without changing pointer/normal states.

## Automated source checks

- 39 TypeScript / TSX / config files parsed with the TypeScript parser: **0 syntax diagnostics**
- 9 CSS files parsed with tinycss2: **0 parse errors**
- 50 local `@/…` imports checked: **0 missing**
- 95 `/assets/…` references checked: **0 missing**
- `responsive-fixes.css` is loaded after the existing visual styles on every route-group layout.

## Browser/build gate

The sandbox could not complete `npm install`, so a real Next.js production build and browser-layout pass must still be run on the Vercel preview. Required final viewport gate:

- 1440 desktop
- 1024 desktop/tablet transition
- 768 tablet
- 390 phone
- 320 small phone

At each width verify header/menu, hero, Research Story, Field Reel, Critique Lab, dossier dialog, each inner-page hero, Curriculum controls, form, and footer.
