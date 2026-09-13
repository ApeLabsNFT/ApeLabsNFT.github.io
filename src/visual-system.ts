import type { ProjectKey } from "./projects";
export const featuredProjects: ProjectKey[] = [
  "trainai",
  "fab",
  "gib",
  "diy",
  "xfactorz",
];
export const projectOrder: ProjectKey[] = [
  ...featuredProjects,
  "amplifier",
  "carandbike",
  "legrand",
  "abc",
  "indoasian",
  "innoval",
  "riyadh",
];
export const outcomes: Record<ProjectKey, string> = {
  trainai: "Demonstrated · AI learning platform",
  fab: "Enterprise UX · confidential",
  gib: "Delivered · confidential portal",
  diy: "Delivered · DIY / Arteor workstream",
  xfactorz: "Demonstrated · experience ecosystem",
  amplifier: "Product website live",
  carandbike: "Public website live",
  legrand: "Delivered · website",
  abc: "Website experience & strategy",
  indoasian: "Delivered · website",
  innoval: "Delivered · virtual showroom",
  riyadh: "Concept · experience centre",
  physio: "Bin of Ideas · digital experiment",
};
export const coverCaption = (key: ProjectKey) =>
  key === "indoasian"
    ? "Live website capture · 14 September 2026"
    : key === "fab" || key === "gib"
    ? "Illustrative reconstruction · fictional data · not a client screen"
    : key === "riyadh"
      ? "Concept visualisation · not a built installation"
      : "Product presentation mockup · supplied visual";
export const teamContribution = (key: ProjectKey) =>
  key === "physio"
    ? "Clinical care is led by Dr Rutvi K Gandhi (PT). This entry explores the digital experience around home-based care."
    : key === "trainai" || key === "xfactorz" || key === "amplifier"
      ? "Built with EvolutionCo’s product, design and engineering team. The role above describes my contribution; implementation and delivery were collaborative."
      : "Delivered or developed with EvolutionCo’s design, content, solution and engineering teams. The role above describes my contribution to the wider team’s work.";
