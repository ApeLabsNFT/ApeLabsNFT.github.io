# Tejus Sharma — Personal portfolio

A TypeScript/Vite portfolio matching the photo desktop, floating project files, compact information windows, and glass dock of https://www.bychudy.com/. Tejus's portrait, project narratives, contact details, and CV are retained.

## Run

```sh
npm ci
npm run dev -- --port 4173
```

## Build and publish

```sh
npm run build
npm run preview
```

The static build is written to `dist`. The existing GitHub Pages workflow publishes it when changes are pushed to `main`. Local work does not update the live site until that publication happens.

## Structure

- `src/desktop.css` is the single active stylesheet. Conflicting earlier style layers have been removed.
- `src/desktop-files.ts` defines one desktop file for each of the 13 projects. Gallery images remain inside their matching case studies. Desktop and mobile anchors follow the reference composition.
- `src/main.ts` renders the desktop, project inspector, work archive, About/CV/Approach/Contact pages, ideas bin, and window interactions.
- `src/projects.ts` maps each project name to its own content and verified image set. Confidential banking cases have no published screens; Riyadh previews are identified as concepts. About and Career follow the included CV, with unsupported metrics removed.
- `public/tejus-wallpaper-v2.png` is the existing AI-edited portrait derivative. The source photograph `public/tejus-portrait.jpeg` is unchanged.
- `public/work/Tejus-Sharma-CV.pdf` is the existing full CV.
- `public/ui/ASSETS.md` records interface asset and font sources. Images and fonts are local; the app has no external font or image requests.
- `qa/` contains source captures, implementation captures, combined comparisons, and route checks. `design-qa.md` records the review.

## Behavior

Project files open on click/tap and can be dragged. The red control or Escape closes a window; yellow minimizes; the corresponding dock item restores it. The green control expands the window inside the page. Windows can be dragged by the title bar on desktop, and double-clicking it expands/restores them. Hash URLs support direct project access and browser history. The work archive filters by category. Project sections collapse and expand. Gallery images link to their original local image files. Contact provides a mail link, copy-email action, social links, and the CV.

Desktop uses 60px thumbnails with white SF Pro labels and a 573px-wide dock 50px from the bottom. Mobile moves the dock to the left, uses shorter display labels with full accessible names, and keeps project windows within the screen. At 390 × 844 the dock is 61 × 604.25px, matching the measured source. Reduced-motion preferences disable decorative motion.

The source's closely scattered/overlapping composition is intentional. Its mobile project viewer sometimes extended off-screen; this version keeps the close control and window in view. Source-specific Adobe jokes are adapted into a creative-break dialog; project/product branding and the LinkedIn link remain personal to Tejus.
