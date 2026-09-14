import { projects, type ProjectKey } from "./projects";
import { projectOrder, featuredProjects } from "./visual-system";

// One desktop file per case study. Gallery images stay inside their parent case.
// The reference's scattered anchors are retained without inventing extra projects.
const positions: Record<ProjectKey, [number, number, number, number]> = {
  trainai: [29, 27, 42, 19],
  xfactorz: [73, 24, 77, 18],
  amplifier: [86, 43, 75, 33],
  physio: [85, 72, 78, 83],
  highland: [85, 72, 78, 83],
  abc: [12, 70, 40, 73],
  riyadh: [90, 22, 82, 48],
  legrand: [47, 70, 45, 48],
  diy: [66, 62, 46, 61],
  innoval: [85, 58, 76, 65],
  indoasian: [11, 27, 18, 5],
  carandbike: [13, 48, 38, 34],
  fab: [31, 49, 39, 86],
  gib: [29, 70, 71, 95],
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
  highland: "Highland",
};
export const desktopFiles = projectOrder.map((project, index) => {
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
});
export function renderDesktopFiles() {
  return desktopFiles
    .map(
      (f) =>
        `<button class="desktop-item ${featuredProjects.includes(f.project) ? "featured-project" : ""}" data-open="${f.project}" data-file="${f.index}" aria-label="Open ${projects[f.project].name} project" style="--x:${f.x}%;--y:${f.y}%;--mx:${f.mx}%;--my:${f.my}%;--thumb-w:${featuredProjects.includes(f.project) ? 144 : 112}px;--thumb-h:${featuredProjects.includes(f.project) ? 81 : 63}px"><span class="real-thumbnail"><img src="${f.image}" alt="" draggable="false"/></span><span class="item-name desktop-label">${f.label.replace(/\n/g, "<br/>")}</span><span class="item-name mobile-label">${f.mobileLabel}</span></button>`,
    )
    .join("");
}
