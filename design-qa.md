# Portfolio design and content QA

Reviewed 13 September 2026. This supersedes the earlier 60px-thumbnail review.

## Implemented brief

Preserve the Bychudy photo desktop, scattered files, glass dock and window controls while following the user's later request for a visible portrait, larger covers, project prioritisation and open case-study evidence. Retain Tejus's identity and projects. No decorative hero was added.

The portrait uses a less enlarged crop, starts clear, settles to 1.5px blur, and changes to 7px when a portfolio window opens. The small identity statement uses the confirmed title Director Of Growth. Featured work leads the archive: TrainAI, two banking engagements, Legrand Configurators and Xfactorz. Each case visibly separates contribution, wider team, scope/status, journey and evidence. These usability changes intentionally differ from the reference's small collapsed windows.

## Content verification

- Clicked all 13 desktop files and checked names, hashes, covers and gallery paths: `qa/final-route-checks.json`.
- All 13 covers have distinct project mappings; displayed image assets exist and decode; no duplicate image path within a case gallery.
- Exact supplied-file mapping is in `public/work/image-manifest.json`. The watermark-free IndoAsian version replaces its duplicate.
- Bank mockups are labelled illustrative reconstructions with fictional data, before the full case cover. Supporting diagrams are labelled schematics, not client artefacts. Riyadh remains a concept.
- car&bike includes real homepage, discovery, vehicle-detail and comparison captures with dated source links in the manifest. Attribution distinguishes Tejus's contribution from the current public website.
- TrainAI retains authentic learner, lesson and creation screens and adds a high-level architecture explanation.
- PBLSH retains public website artwork and supplied presentation cover. Verified production workflow screens were not available; no fabricated production evidence was added.
- Current title is Director Of Growth in identity, About, career, metadata, structured data and both title occurrences in the CV. PDF rendering reviewed; word-count comparison verified that the two title replacements are the only text changes.
- Career expands the CV's UX (2023–2024), strategy/UX (2024–2025) and pre-sales lead (2025–2026) progression. Unverified outcome metrics and testimonials were not added.

## Visual and interaction evidence

- `qa/final-desktop.png`: 1440 × 900 desktop composition.
- `qa/final-archive.png`: larger two-column featured archive.
- `qa/final-mobile.png` and `qa/final-mobile-case.png`: 390 × 844 desktop and readable project window.
- `qa/final-small-mobile.png`: 320 × 568, all 13 project tiles within the viewport.
- Existing `qa/reference-*` captures document the reference; older `qa/comparison-*` files are historical, not claims about the final build.

No horizontal document overflow at either tested phone size. Every project tile fits at 320 × 568. Keyboard Shift+Tab wraps from Close to the last case action; Tab wraps back to Close; Escape closes. Featured filter returns five cases, AI returns TrainAI/Xfactorz/PBLSH, Independent returns PhysioByRutvi, All returns 13. The desktop wallpaper computes to 1.5px blur and the open-window wallpaper to 7px. Browser console check returned no warnings or errors.

## Build and publication

Production TypeScript/Vite build and whitespace checks run before commit. Publication uses the existing GitHub Pages workflow on main, as explicitly requested. The live hashed bundle and key assets are checked after deployment. Social metadata includes canonical URL, Open Graph and Twitter cards, a screenshot preview, ProfilePage/Person structured data, sitemap and robots. Hash case routes share the canonical homepage.

## Source limitations

The previously described four unpushed commits and extra banking/PBLSH workflow screens were not present in this checkout. This update uses the available supplied covers and actual repository evidence. No publication-cleared testimonials or new measured business outcomes were available. These remain content inputs, not claims represented as complete evidence.
