// Purpose-built interface icons, shared by desktop files and the dock.
export type OSIcon =
  | "folder"
  | "finder"
  | "notes"
  | "contact"
  | "mail"
  | "terminal"
  | "appearance";
let iconSequence = 0;
export function osIcon(kind: OSIcon): string {
  const id = `os-${++iconSequence}`;
  const gradient = (key: string, top: string, bottom: string) =>
    `<linearGradient id="${id}-${key}" x2="0" y2="1"><stop stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>`;
  const fill = (key: string) => `url(#${id}-${key})`;
  const definitions =
    gradient("blue", "#71d1ff", "#0877da") +
    gradient("paper", "#fff", "#e8edf2") +
    gradient("yellow", "#ffeb87", "#ffc832") +
    gradient("gray", "#eff2f6", "#a6adb6") +
    gradient("dark", "#3b4249", "#11171d") +
    gradient("brown", "#c1a186", "#8c6950");
  const tile = (paint: string) =>
    `<rect x="3" y="3" width="58" height="58" rx="13" fill="${fill(paint)}"/><rect x="3.5" y="3.5" width="57" height="57" rx="12.5" fill="none" stroke="#fff" stroke-opacity=".4"/>`;
  const content: Record<OSIcon, string> = {
    folder: `<path d="M4 17a5 5 0 0 1 5-5h15l6 6h25a5 5 0 0 1 5 5v30H4Z" fill="#3499d4"/><path d="M5 22h54v29H5Z" fill="#d1edff"/><path d="M4 26a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v26a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" fill="${fill("blue")}"/><path d="M7 26h50" stroke="#fff" stroke-opacity=".45"/>`,
    finder: `${tile("blue")}<path d="M33 4h15a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H31c-2-10-2-16 1-25h-9L33 4Z" fill="${fill("paper")}"/><path d="M20 20v7m24-7v7M17 39c7 9 24 9 31 0M33 8 26 34h9l-2 21" fill="none" stroke="#193c67" stroke-width="1.7" stroke-linecap="round"/>`,
    notes: `${tile("paper")}<path d="M16 3h32a13 13 0 0 1 13 13v5H3v-5A13 13 0 0 1 16 3Z" fill="${fill("yellow")}"/><path d="M4 21h56" stroke="#c7a234"/><path d="M13 31h38M13 39h38M13 47h27" stroke="#c7c9cc" stroke-width="1.4"/><path d="M4 23h56" stroke="#fff"/>`,
    contact: `${tile("brown")}<rect x="10" y="8" width="43" height="48" rx="5" fill="#eaded0"/><circle cx="31" cy="25" r="8" fill="#aa927b"/><path d="M17 46c1-16 27-16 28 0" fill="#aa927b"/><path d="M8 16h7M8 26h7M8 36h7M8 46h7" stroke="#f6ede0" stroke-width="2.5" stroke-linecap="round"/><path d="M56 16v8m0 5v8m0 5v8" stroke="#d1b08b" stroke-width="3"/>`,
    mail: `${tile("blue")}<rect x="11" y="17" width="42" height="31" rx="3" fill="${fill("paper")}"/><path d="m12 46 15-14m25 14L37 32" fill="none" stroke="#bfcbda" stroke-width="1.2"/><path d="m12 19 20 17 20-17" fill="none" stroke="#91b2d1" stroke-width="1.2"/>`,
    terminal: `${tile("gray")}<rect x="7" y="12" width="50" height="44" rx="5" fill="${fill("dark")}"/><circle cx="12" cy="8" r="1.5" fill="#757e88"/><circle cx="17" cy="8" r="1.5" fill="#757e88"/><path d="m15 24 8 7-8 7m13 2h14" fill="none" stroke="#f0f7f4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    appearance: `${tile("gray")}<circle cx="32" cy="32" r="20" fill="#616a75"/><circle cx="32" cy="32" r="15" fill="none" stroke="#cfd5de" stroke-width="4" stroke-dasharray="3 2.9"/><circle cx="32" cy="32" r="9" fill="${fill("gray")}"/><circle cx="32" cy="32" r="5" fill="#58606a"/>`,
  };
  return `<svg class="os-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true"><defs>${definitions}</defs>${content[kind]}</svg>`;
}
