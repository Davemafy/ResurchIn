# ResurchIn final screenshot QA pass

Basis: the eight desktop/mobile captures supplied on Aug 17, 2026.

## Fixed in this pass

- Header Apply state: label/arrow now have their own paint layer and cannot disappear against the yellow hover background.
- Touch hover: desktop inversion effects are now limited to real hover/fine-pointer devices. Android/iOS taps no longer leave the founder link as a black bar.
- 721–920px navigation gap: the hamburger is explicitly enabled at the same breakpoint where the desktop navigation is hidden.
- Mobile header: research-office metadata is forcibly removed and the menu lines remain visible in compact/open states.
- Hero title: the two headline lines are explicitly authored (`Research is a skill.` / `Practice it here.`), preventing width-dependent line behavior.
- Short phone viewports: hero spacing and dossier position compress without hiding the first headline line.
- Founder link: larger touch/read target while preserving the editorial underline treatment.
- Public-record → live-document handoff: mobile threshold label is larger, ruled, and given intentional space.
- Critique desk: overflow is clipped back to the desk/paper, so red annotations and the revised sentence cannot leak outside the artifact.
- Critique contrast: review-pressure labels are legible on the dark desk.
- Short laptop heights (650–760px): critique chapter compacts vertically so the paper and controls do not feel trapped under the sticky header.
- Mobile critique meter: contained inside the desk with a readable background instead of floating in low contrast.
- Closing chapter: heading/CTA are forced visible and mobile top spacing is tightened so the dotted field does not become a dead yellow slab.
- Critique mode timer is cleared on unmount to avoid stale state updates during fast route changes.

## Static validation

- 38 TS/TSX files parsed with TypeScript transpile diagnostics: 0 syntax errors.
- 11 CSS files parsed with tinycss2: 0 parse errors.
- 58 local imports checked: 0 missing.
- 115 literal `/assets/` references checked: 0 missing.
- All 10 route layouts load `qa-final.css` last.

## Remaining gate

A real browser preview should still be checked at 1440, 768, 390 and 320 after deployment, because source/static validation cannot prove final font metrics, browser chrome viewport behavior, or GPU/compositor rendering.
