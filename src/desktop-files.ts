import { projects, type ProjectKey } from "./projects";

// One desktop file per case study. Gallery images stay inside their parent case.
// The reference's scattered anchors are retained without inventing extra projects.
const positions: Record<ProjectKey, [number, number, number, number]> = {
  trainai: [39, 28, 42, 13],
  xfactorz: [66, 17, 77, 9],
  amplifier: [59, 40, 72, 27],
  physio: [66, 68, 78, 83],
  abc: [25, 63, 40, 73],
  riyadh: [82, 41, 82, 43],
  legrand: [47, 50, 45, 43],
  diy: [39, 62, 46, 58],
  innoval: [72, 55, 76, 62],
  indoasian: [24, 22, 18, 8],
  carandbike: [27, 42, 38, 29],
  fab: [19, 57, 39, 88],
  gib: [47, 73, 71, 94],
};
const labels: Partial<Record<ProjectKey, string>> = {
  fab: "UAE Bank\nCorporate UX",
  gib: "Bahrain Bank\nUnified Portal",
  abc: "Aditya Birla\nCapital",
  diy: "Legrand\nConfigurators",
  riyadh: "Legrand\nRiyadh",
  innoval: "Virtual\nInnoval",
};
const mobileLabels: Partial<Record<ProjectKey, string>> = {
  fab: "UAE Bank",
  gib: "Bahrain Bank",
  abc: "ABC",
  diy: "Configurators",
  riyadh: "Riyadh",
  innoval: "Innoval",
  physio: "PhysioByRutvi",
};
export const desktopFiles = (Object.keys(projects) as ProjectKey[]).map(
  (project, index) => {
    const [x, y, mx, my] = positions[project];
    return {
      project,
      label: labels[project] ?? projects[project].name,
      mobileLabel: mobileLabels[project] ?? projects[project].name,
      image: projects[project].cover,
      x,
      y,
      mx,
      my,
      index,
    };
  },
);
export function renderDesktopFiles() {
  return desktopFiles
    .map(
      (f) =>
        `<button class="desktop-item" data-open="${f.project}" data-file="${f.index}" aria-label="Open ${projects[f.project].name} project" style="--x:${f.x}%;--y:${f.y}%;--mx:${f.mx}%;--my:${f.my}%;--thumb-w:${f.project === "xfactorz" ? 110 : 60}px;--thumb-h:60px"><span class="real-thumbnail"><img src="${f.image}" alt="" draggable="false"/></span><span class="item-name desktop-label">${f.label.replace(/\n/g, "<br/>")}</span><span class="item-name mobile-label">${f.mobileLabel}</span></button>`,
    )
    .join("");
}
