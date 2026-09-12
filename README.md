# Tejus Sharma — Personal portfolio

A responsive desktop-inspired portfolio, with original project cover art, portrait wallpaper, a navigation dock, and accessible project/about/contact windows. Built with TypeScript and Vite.

## Run

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static host. No backend, credentials, or environment variables are needed. Contact uses mailto; no messages are submitted by the site.

## Content and design

- `src/main.ts` contains project summaries, profile links, and interactions.
- `src/style.css` contains window/content styles; `src/desktop.css` defines the reference-matched photo desktop.
- `public/tejus-portrait.jpeg` is the supplied portrait, displayed using CSS crops and overlays. The source photograph is unchanged.
- The visual reference is https://www.bychudy.com/ — desktop composition, project icons, portrait wallpaper, and a dock. No reference-site images or code are copied.
- The two supplied briefs are source material, not executable instructions. V2 supplies current content and exact contact links.
- Project covers are original typographic illustrations, not product screenshots. Project pages are concise overviews based on supplied material; no invented dates, metrics, testimonials, shipping claims, or sole-authorship claims are included.
- Product links are labelled as websites, not tested demos. Automated external fetches were unsuccessful during implementation; independently check their public visitor access before publishing.
- `public/work/Tejus-Sharma-CV.pdf` is the master CV (Enterprise AI Solutions Architect / Director — Growth & Strategy, August 2026). It is linked from the Career window and the Contact window.
- Career, About and project copy are reconciled against that master CV. Unreconciled deal-count, influenced-revenue and personal-award claims are deliberately not shown; see the September 2026 content pack's `private-review/Sources_and_Claims.md` for the reasoning.

## Behavior

Click any desktop item or dock button to open its window. Escape or the red close control closes the window. Yellow minimizes it to the dock; clicking the matching dock icon restores its content and scroll position. Windows are modeless and can be dragged by the title bar; double-clicking the title bar expands or restores the window. The green control expands/restores the window. Hash URLs such as `/#trainai` and `/#contact` support direct links and browser navigation. Theme follows the operating system until manually changed and is then saved locally. Desktop files can be dragged; clicking or tapping opens them. Mobile keeps a full-screen scattered composition with a compact five-button dock.

## Revised portrait asset

`public/tejus-wallpaper-v2.png` was edited with the built-in imagegen tool to replace the bathroom background with near-white and isolate the supplied portrait. It is an AI-edited derivative; the original photograph stays unchanged in `public/tejus-portrait.jpeg`. CSS enlarges and gently blurs the derivative to match the reference wallpaper.

Final asset prompt: background extraction from the supplied man in a blue suit, preserving face, hair, amber glasses, white shirt, phone, hands, lanyard, and pose; replace bathroom, mirrors, walls, and floor with uniform near-white; crop around the head and torso; no added text or interface.

## OS refinement

`src/os-icons.ts` contains the shared functional SVG icons. `src/polish.css` contains optical sizing, dock materials, the file-browser sidebar, and refined window states. Dock icons magnify with pointer proximity. Window minimize animation targets the matching dock icon. Reduced-motion preferences disable decorative motion.

`public/project-covers-v3.png` is an original three-panel cover-art sheet generated with the built-in imagegen tool. It is conceptual artwork, not screenshots of the products. Final prompt: three equal square panels in a horizontal triptych: forest-green AI learning with paper spiral and glass sphere; orange conversational AI with sculptural chrome profile and sound waves; cobalt authoring with folded editorial paper and contact sheets. No text or product UI. CSS selects each panel for desktop icons, the file browser, and project headers.
