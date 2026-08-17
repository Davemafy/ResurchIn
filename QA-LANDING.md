# Landing QA

Static checks completed:
- `DeliberateLanding.tsx`: TypeScript transpile diagnostics: 0 errors
- `app/(home)/page.tsx`: TypeScript transpile diagnostics: 0 errors
- `app/(home)/layout.tsx`: TypeScript transpile diagnostics: 0 errors
- `landing-deliberate.css`: 252 opening braces / 252 closing braces
- `landing-deliberate.css`: 198 opening parentheses / 198 closing parentheses
- 0 pure `#000` / `#fff` / `#FFD500` / `#FFD800` values in the landing stylesheet
- only one radial dot pattern, scoped to the brand mark
- no em dash or en dash punctuation in landing copy
- no custom cursor component
- no legacy home stylesheets loaded by the new home layout
- referenced mentoring image exists locally
- inner route source files remain unchanged from the input build

Authored responsive breakpoints:
- <= 1100px
- <= 820px
- <= 440px
- <= 340px

Limit: the sandbox does not contain the project's installed Next/React dependencies, and local Chromium navigation is blocked by the execution environment. Run `npm run check` and inspect the Vercel preview at 1440, 768, 390 and 320 before promoting to production.
