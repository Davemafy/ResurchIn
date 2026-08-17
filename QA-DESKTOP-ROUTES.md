# ResurchIn — Desktop, Tablet & Inner-Route Immersion QA

## Scope
This pass extends the mobile immersion work to desktop/tablet and to the non-home routes without redesigning the visual identity.

## Homepage
- Research Story remains the primary six-stage scroll-driven document sequence.
- Field Reel now advances Frame → Test → Defend from native desktop scroll, while buttons remain usable.
- On wide desktop, the three-version field record becomes a pinned research scene rather than a static section.
- Review Desk prompt remains in view longer on wide desktop so the slider reads as an actual task.
- 721–820px now has a compact chapter rail instead of the previous navigation dead zone.

## Inner routes
Added a shared route experience to Program, Curriculum, Mentors, Resources, About, Community, Apply, Apply Success and the field-guide article.

- live chapter rail with active section and page progress
- click/tap chapter navigation
- scroll-linked depth between hero copy and imagery on desktop/tablet
- continuous evidence-image depth rather than isolated viewport reveals
- route-specific staged sequences for program rhythm, mentor dialogue, principles, community scenes and resource shelf
- article six-pass reading spine
- desktop Apply brief stays present while the form moves; disabled again on small screens for usability
- mobile evidence/photo sections become native horizontal snap reels instead of long vertical image stacks
- no custom scroll engine and no wheel/touch interception
- reduced-motion fallback removes scroll-linked transforms

## Static validation
- 40 TS/TSX/config files parsed with TypeScript transpileModule: 0 syntax errors
- 14 CSS files parsed with tinycss2: 0 top-level parse errors
- 59 local @/ imports checked: 0 missing
- route immersion stylesheet loaded last on all non-home layouts
- desktop immersion stylesheet loaded last on home

## Remaining gate
`npm install` timed out in this sandbox, so a real Next.js build and rendered-browser QA at 1440 / 768 / 390 / 320 still needs to happen on the Vercel preview. Do not promote to production until the preview is visually checked.
