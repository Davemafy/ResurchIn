# ResurchIn cinematic pass QA

Base: current dark dossier source (copy-balance full build).

## Fixed in this pass
- Mobile hero no longer renders the oversized working-paper object below 720px.
- Mobile dossier remains available through "Open a sample dossier".
- Mobile hero height is recalculated after removing the paper; no blank paper reservation remains.
- Desktop Revision Reel is now a native-scroll sticky chapter with three scroll-driven revisions.
- Revision Reel stage no longer slams into the top of the viewport during section entry.
- Revision image/copy transitions preload assets and animate without the previous delayed content swap.
- Research Story phase changes now animate for scroll-driven changes as well as manual navigation.
- Scroll-linked visual transforms use eased visual progress rather than raw scroll values.
- Critique copy becomes sticky on wide desktop while the review artifact remains inspectable.
- Reduced-motion falls back to normal document flow and removes pinned/motion treatment.
- Tablet and phone explicitly disable the desktop pinned Revision Reel.

## Static validation
- 40 TS/TSX/config files parsed: 0 syntax errors.
- 11 CSS files parsed: 0 CSS parser errors.
- Local imports checked: 0 missing.
- Referenced /assets files checked: 0 missing.

## Final browser gate
After Vercel deploy, inspect 1440, 768, 390 and 320 on the actual preview. Pay special attention to:
1. hero height after the mobile document removal,
2. the transition into ONE PROJECT / THREE VERSIONS,
3. all three scroll-driven revision states,
4. the Research Story phase thresholds,
5. short desktop heights around 700–800px.
