# Portfolio design and content QA

Status: passed for the requested design adaptation.

Reference: https://www.bychudy.com/
Implementation: Tejus Sharma portfolio, production build tested locally on 13 September 2026.

## Scope

Reproduce the reference's photo desktop, scattered project thumbnails, white uppercase labels, glass dock, compact information windows, Notes navigation, hover effects and dragging. Retain Tejus's own portrait and projects. The user's subsequent correction takes precedence over the reference's item count: each of the 13 projects appears once on the desktop, with its gallery inside the matching case.

## Visual evidence

- `qa/comparison-desktop.jpg`: source and implementation at 1440 × 900.
- `qa/comparison-mobile.jpg`: source and implementation at 390 × 844 CSS pixels (843 captured bitmap rows).
- `qa/comparison-desktop-window.jpg`: equivalent information-window states at 887 × 650 CSS pixels; the comparison trims the implementation's final bitmap row to the source's 649 rows.
- `qa/comparison-mobile-window.jpg`: mobile information windows.
- `qa/implementation-small-mobile.png`: 320 × 568, all 13 files visible.
- `qa/implementation-about.png` and `qa/implementation-career.png`: corrected personal content.
- `qa/project-asset-review.jpg`: contact sheet used to check actual image subjects against their names and captions.

The combined images were visually reviewed. Desktop dock: 573 × 66.25, x433.5, y783.75 at 1440 × 900, matching the source measurements. Mobile dock: 61 × 604.25, x25, y119.875 at 390 × 844, matching the source measurements. Thumbnails use the reference's 60px scale and SF Pro labels; the wider Xfactorz preview follows its wide-artwork treatment. Window size, surface, header, traffic-light controls and disclosure hierarchy follow the reference.

Intentional differences: personal imagery/product icons and LinkedIn replace the reference author's identity and Adobe/Instagram links; 13 unique cases replace repeated gallery shortcuts; bank cases use a Notes icon and publish no screenshots; the bin is empty rather than relabelling real projects as discarded ideas. Mobile windows stay on-screen, and the shortest phone layout has compact anchors to keep tiles clear of the dock. These are content and usability adaptations, not a claim of identical source pixels.

## Content corrections

- About, accessible heading and career use Director — Growth & Strategy, following `public/work/Tejus-Sharma-CV.pdf`.
- Removed unsupported sales-cycle percentages, proposal counts, freelance metrics, detailed pipeline claims and an unsupported degree specialism from the career page.
- Career dates and the three experience entries follow the included CV.
- `src/projects.ts` is the shared source for file names, preview covers, work-archive entries and case content. PBLSH is consistently named; Portfolio Amplifier is explained inside its case.
- Removed mock image usage, the invented installed-Riyadh caption, and the fallback that repeated a cover as a full gallery for cases with no published screens.
- Corrected Legrand slide captions to identify the existing-site review, wireframes and user pain points actually shown.
- Kept Arteor and DIY imagery labelled by workstream; Riyadh images are explicitly concepts. Xfactorz's applied Legrand work is identified within that case.

## Validation

- `npm run build`: passed TypeScript and Vite production build.
- `git diff --check`: passed.
- Clicked every desktop file and checked its opened name, key, cover and gallery: 13 unique mappings passed. Evidence: `qa/route-checks.json`.
- All displayed project image files exist and decode; no duplicate image path within a gallery and no `mock-` image referenced by an opened case.
- No horizontal overflow at 390 × 844 or 320 × 568; no clipped project tile at 320 × 568.
- AI archive filter returns TrainAI, Xfactorz and PBLSH; Independent returns PhysioByRutvi.
- Verified project disclosures, close, minimize/restore, expand/restore, title-bar drag, file dragging, hash navigation and Escape during the implementation review.
- Rechecked About/CV navigation, the empty bin and successful email copy on the final production build.
- Browser console: no warnings or errors on the tested build.

## Publication

The existing GitHub Pages workflow builds and deploys `dist` on pushes to `main`. Publication is explicitly authorized by the user; the deployment result and public site are verified after pushing.
