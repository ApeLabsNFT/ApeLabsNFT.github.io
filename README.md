# Tejus Sharma — Personal portfolio

A TypeScript/Vite portfolio inspired by the photo desktop, scattered project files and glass dock at https://www.bychudy.com/. The September 2026 update adds larger product covers, visible identity, prioritised work and readable case-study windows, following the user's latest feedback.

## Run and build

```sh
npm ci
npm run dev -- --port 4174
npm run build
npm run preview
```

The existing GitHub Pages workflow builds `dist` and publishes on pushes to `main` at https://apelabsnft.github.io/.

## Content and assets

- `src/projects.ts`: the 13 project names, narratives, roles, sources and galleries.
- `src/visual-system.ts`: featured order, outcome strips, cover disclosures and team contribution copy.
- `src/desktop-files.ts`: one desktop file per project, with responsive anchors and larger featured covers.
- `src/main.ts`: case studies, archive, About, career, contact and window interactions.
- `src/desktop.css`: desktop composition, portrait visibility/blur, responsive windows and accessibility styles.
- `public/work/covers/`: supplied product presentation visuals, optimised to WebP without changing their content.
- `public/work/image-manifest.json`: exact cover-to-project mapping and car&bike capture sources. The clean IndoAsian image is used, excluding the duplicate with a Windows activation watermark.
- `public/work/Tejus-Sharma-CV.pdf`: existing CV with the two title references updated to the user's confirmed **Director Of Growth**.
- `public/social-preview.png`, `robots.txt`, `sitemap.xml` and metadata in `index.html`: social and search presentation.
- `qa/final-*` and `design-qa.md`: current review evidence. Earlier captures remain historical comparisons.

Bank covers are illustrative reconstructions with fictional data; client interfaces are not published. Banking schematics are labelled illustrations. Riyadh is a concept, not a built installation. PBLSH uses supplied presentation and public website artwork; verified production workflow screenshots were not available. Public car&bike captures provide current website context, not attribution of every current element to Tejus. Metrics and testimonials without publication-cleared sources were not added.

## Behavior

The portrait starts clear, settles to a light blur and blurs further when a window opens. Project files open on click/tap and support dragging. Red or Escape closes; yellow minimises; the dock restores; green expands/restores. Desktop title bars support dragging and double-click expansion. Hash routes support direct access and browser history. Archive filters include featured work, enterprise UX, AI and independent work. Case-study sections and image evidence are open by default. Keyboard focus loops within the open window and returns on close. Reduced-motion preferences disable decorative animation.
