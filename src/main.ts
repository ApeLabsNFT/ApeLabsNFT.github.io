import "./desktop.css";

import { projects, type ProjectKey } from "./projects";
import { renderDesktopFiles } from "./desktop-files";
type Page =
  ProjectKey | "work" | "about" | "career" | "approach" | "contact" | "ideas";
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const projectKeys = Object.keys(projects) as (keyof typeof projects)[];
const projectLogo = (key: ProjectKey) => {
  const p = projects[key];
  return p.logo
    ? `<img class="brand-logo" src="${p.logo}" alt="${p.name}"/>`
    : `<span class="brand-wordmark">${p.name}</span>`;
};
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a class="skip-link" href="#desktop">Skip to portfolio</a>
  <main id="desktop" tabindex="-1">
    <div class="wallpaper" aria-hidden="true"><img src="/tejus-wallpaper-v2.png" alt="" fetchpriority="high"/><div class="wallpaper-wash"></div></div>
    <h1 class="sr-only">Tejus Sharma — Enterprise AI solutions architect, Director of Growth &amp; Strategy at EvolutionCo</h1>
    <div class="desktop-work" aria-label="Selected work and portfolio files">

      ${renderDesktopFiles()}
    </div>
  </main>
  <nav class="dock" aria-label="Portfolio navigation">
    <button class="dock-item dock-trainai product-dock" data-open="trainai" aria-label="TrainAI"><span class="dock-tooltip">TrainAI</span>${projectLogo("trainai")}</button>
    <button class="dock-item dock-xfactorz product-dock" data-open="xfactorz" aria-label="Xfactorz"><span class="dock-tooltip">Xfactorz</span>${projectLogo("xfactorz")}</button>
    <button class="dock-item dock-amplifier product-dock" data-open="amplifier" aria-label="PBLSH"><span class="dock-tooltip">PBLSH</span><img src="/work/pblsh-mark.svg" alt=""/></button>
    <button class="dock-item" id="creative-break" aria-label="Take a creative break"><span class="dock-tooltip">Creative break</span><img src="/ui/warning.avif" alt=""/></button>
    <span class="dock-divider"></span>
    <button class="dock-item dock-about" data-open="about" aria-label="About me and CV"><span class="dock-tooltip">About me & CV</span><img src="/ui/notes.avif" alt=""/></button>
    <button class="dock-item dock-work" data-open="work" aria-label="Selected work"><span class="dock-tooltip">Selected work</span><img src="/ui/photos.avif" alt=""/></button>
    <span class="dock-divider"></span>
    <a class="dock-item dock-linkedin" href="https://www.linkedin.com/in/tejus-sharma-6831a232b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><span class="dock-tooltip">LinkedIn</span><span class="linkedin-mark">in</span></a>
    <button class="dock-item dock-contact" data-open="contact" aria-label="Get in touch"><span class="dock-tooltip">Get in touch</span><img src="/ui/mail.avif" alt=""/></button>
    <span class="dock-divider"></span>
    <button class="dock-item dock-ideas" data-open="ideas" aria-label="Bin of ideas"><span class="dock-tooltip">Bin of ideas</span><img src="/ui/bin.avif" alt=""/></button>
  </nav>
  <dialog id="creative-alert" aria-labelledby="creative-alert-title"><h2 id="creative-alert-title">Creative break</h2><div><img src="/ui/warning.avif" alt=""/><p>Too many tabs. Too many ideas.<br/>A good time to step back and find the right problem.</p></div><button id="dismiss-alert">Back to the work</button></dialog>
  <dialog id="portfolio-window" aria-labelledby="window-title"><div class="window-bar"><div class="window-controls"><button class="window-close" aria-label="Close window"><span>×</span></button><button class="window-minimize" aria-label="Minimize window"><span>−</span></button><button class="window-expand" aria-label="Expand window" aria-pressed="false"><span>↗</span></button></div><span id="window-title"></span></div><div class="window-body"><nav class="window-sidebar" aria-label="About navigation"><button data-open="about">About me</button><button data-open="career">CV</button><button data-open="approach">Approach</button><button data-open="contact">Contact</button></nav><div id="window-content"></div></div><div class="window-status"><span id="window-status-text">Portfolio</span><span>Mumbai, India</span></div></dialog>
  <div class="toast" role="status" aria-live="polite"></div>
`;

const external = (url: string, label: string) =>
  `<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} ${arrow}</a>`;
function renderPage(page: Page): string {
  if (page in projects) {
    const p = projects[page as keyof typeof projects];
    const preview = p.gallery.length
      ? `<details open class="project-preview"><summary>Preview:</summary><div class="case-gallery">${p.gallery.map((g, i) => `<figure><a href="${g.image}" target="_blank" rel="noopener noreferrer" aria-label="View full image: ${g.caption}"><img src="${g.image}" alt="${g.caption}" loading="${i === 0 ? "eager" : "lazy"}"/></a><figcaption>${g.caption}</figcaption></figure>`).join("")}</div></details>`
      : "";
    return `<article class="real-project"><header class="project-heading"><img src="${p.cover}" alt=""/><div><h2>${p.name}</h2><p>${p.tag}</p></div></header><div class="project-description"><p>${p.text}</p></div><details open class="project-details"><summary>Details:</summary><dl><div><dt>My role:</dt><dd>${p.role}</dd></div><div><dt>Status:</dt><dd>${p.status}</dd></div></dl></details><details class="project-details"><summary>Contribution & context:</summary><p>${p.focus}</p><p class="project-context">${p.context}</p></details>${preview}<details class="project-details"><summary>The journey:</summary><ol>${p.steps.map((step) => `<li>${step}</li>`).join("")}</ol></details><footer class="case-footer">${p.url ? external(p.url, p.link!) : ""}<button class="back-work" data-open="work">All selected work</button></footer></article>`;
  }
  if (page === "ideas")
    return `<article class="ideas-page"><header class="project-heading"><img src="/ui/bin.avif" alt=""/><div><h2>Bin of ideas</h2><p>0 items</p></div></header><p>The bin is empty. You can find all current projects in Selected work.</p><button class="text-link" data-open="work">Open selected work ${arrow}</button></article>`;
  if (page === "work")
    return `<div class="finder-view"><div class="finder-path">Tejus Sharma <span>›</span> Work archive</div><h2>Selected work</h2><p class="finder-intro">Enterprise experiences, AI products and an independent healthcare business.</p><div class="work-filters" aria-label="Filter projects"><button class="active" aria-pressed="true" data-filter="all">All work <span>${String(projectKeys.length).padStart(2, "0")}</span></button><button data-filter="enterprise">Enterprise & UX</button><button data-filter="ai">AI products</button><button data-filter="independent">Independent</button></div><div class="finder-grid">${projectKeys.map((key) => `<button class="finder-file" data-open="${key}" data-category="${["trainai", "xfactorz", "amplifier"].includes(key) ? "ai" : key === "physio" ? "independent" : "enterprise"}"><span class="real-finder-preview"><img src="${projects[key].cover}" alt="" loading="lazy"/></span><strong>${projects[key].name}</strong><small>${projects[key].tag}</small></button>`).join("")}</div><div class="finder-footer"><span>${projectKeys.length} projects · Strategy, design & AI</span></div><button class="career-link" data-open="career">The experience behind the work <span>Career & CV ↗</span></button></div>`;
  if (page === "about")
    return `<div class="about-page"><div class="about-photo"><img src="/tejus-portrait.jpeg" alt="Tejus Sharma wearing a blue suit and amber glasses"/><span>MUMBAI, INDIA ↗</span></div><div class="page-padding"><div class="eyebrow">ABOUT ME</div><h2>Hi, I’m Tejus<span class="accent">.</span></h2><h3>Enterprise AI Solutions Architect<br/>Director — Growth & Strategy</h3><p>I lead AI productisation, growth strategy and pre-sales at EvolutionCo Group. My work connects discovery, product strategy, UX and solution architecture, taking an idea through scope, prototypes, commercial planning and pilots.</p><p>My background spans enterprise UX, banking journeys and Web3 product strategy. Alongside my work at EvolutionCo, I’m a co-founder of PhysioByRutvi, responsible for product, brand, growth and digital systems.</p><div class="about-tags"><span>Experience design</span><span>Product strategy</span><span>Enterprise AI</span></div><div class="social-links">${external("https://www.linkedin.com/in/tejus-sharma-6831a232b", "LinkedIn")}${external("https://github.com/ApeLabsNFT", "GitHub")}</div><button class="solid-button" data-open="career">View my CV ${arrow}</button></div></div>`;
  if (page === "career")
    return `<div class="career-page"><div class="eyebrow">EXPERIENCE & EDUCATION</div><h2>Career & CV</h2><p class="career-intro">Enterprise AI, product strategy, UX and solution architecture.</p><div class="career-timeline">${[
      [
        "2026 — Present",
        "EvolutionCo Group",
        "Director — Growth & Strategy",
        "Lead group AI productisation, growth strategy and pre-sales. Own solution discovery, product requirements, UX, architecture, vendor evaluation, commercial planning and pilots. Architected TrainAI’s learning platform and shaped the Xfactorz and Portfolio Amplifier product propositions.",
      ],
      [
        "Feb 2023 — Jan 2026",
        "EvolutionCo Group",
        "Pre-Sales Strategist & UX Designer",
        "Progressed from UX design into pre-sales strategy and team leadership. Translated enterprise requirements into information architecture, journeys, wireframes, scopes and roadmaps across banking, configurators, learning and immersive experiences.",
      ],
      [
        "Dec 2021 — Jan 2023",
        "SolPatrol",
        "Product Strategist / Technical Solutions Advisor",
        "Worked on Web3 product strategy, roadmaps, user journeys, token and NFT mechanics, research and partner narratives.",
      ],
    ]
      .map(
        ([date, company, role, text]) =>
          `<section><time>${date}</time><div><h3>${company}</h3><h4>${role}</h4><p>${text}</p></div></section>`,
      )
      .join(
        "",
      )}</div><section class="career-extra"><h3>Education</h3><p>Bachelor’s degree · University of Rajasthan · 2016–2020.</p><h3>Continued learning</h3><p>AI and business — University of Maryland (2025). Fundamentals of AI — IIT Bombay (2025). AI Aware — Intel (2025). Six Sigma — Educate 360 (2026). SEO — HubSpot Academy (2026).</p></section><div class="case-footer"><a class="text-link" href="/work/Tejus-Sharma-CV.pdf" target="_blank" rel="noopener noreferrer">Open full CV ${arrow}</a><button class="back-work" data-open="work">Explore the work →</button></div></div>`;
  if (page === "approach") {
    const steps = [
      [
        "Understand the work.",
        "Clarify the business problem, the users, their current workflow and the constraints that matter.",
      ],
      [
        "Shape the product.",
        "Translate those needs into user journeys, product scope and an experience people can understand.",
      ],
      [
        "Design the system.",
        "Connect the knowledge, models, interfaces and integrations that support the experience. Make trade-offs explicit.",
      ],
      [
        "Make it tangible.",
        "Use prototypes and demonstrations to test the idea, align stakeholders and expose what still needs work.",
      ],
      [
        "Carry it into delivery.",
        "Work across product, design and engineering to keep execution connected to the original problem.",
      ],
    ];
    return `<div class="page-padding approach-page"><div class="eyebrow">HOW I THINK, HOW I BUILD</div><h2>Start with the problem.<br/><span class="accent">Connect the whole system.</span></h2><div class="approach-list">${steps.map(([title, text], i) => `<section><span class="step-number">0${i + 1}</span><div><h3>${title}</h3><p>${text}</p></div></section>`).join("")}</div><button class="text-link" data-open="work">See the work ${arrow}</button></div>`;
  }
  return `<div class="page-padding contact-page"><div class="eyebrow"><span class="status-dot"></span> OPEN TO A GOOD CONVERSATION</div><h2>Have a difficult<br/>problem <span class="accent">worth<br/>building for?</span></h2><p>For enterprise AI roles, product collaborations and thoughtful conversations about what to build next, get in touch.</p><a class="email-link" href="mailto:tejus.sharma10@gmail.com">tejus.sharma10@gmail.com ${arrow}</a><div class="contact-actions"><button class="copy-button" id="copy-email">Copy email address <span>⧉</span></button>${external("/work/Tejus-Sharma-CV.pdf", "Download CV")}${external("https://www.linkedin.com/in/tejus-sharma-6831a232b", "LinkedIn")}${external("https://github.com/ApeLabsNFT", "GitHub")}</div><div class="contact-signoff"><span class="signature">Tejus.</span><span>BASED IN MUMBAI.<br/>THINKING BEYOND IT.</span></div></div>`;
}

const dialog = document.querySelector<HTMLDialogElement>("#portfolio-window")!;
const windowContent =
  document.querySelector<HTMLDivElement>("#window-content")!;
const titles: Record<Page, string> = {
  work: "Selected work",
  fab: "Leading UAE Bank",
  gib: "Leading Bahrain Bank",
  carandbike: "car&bike",
  abc: "Aditya Birla Capital",
  legrand: "Legrand India",
  diy: "Legrand Configurators",
  indoasian: "IndoAsian",
  innoval: "Virtual Innoval",
  riyadh: "Legrand Riyadh — Experience centre",
  physio: "PhysioByRutvi",
  ideas: "Bin of ideas",
  career: "Career & CV",
  trainai: "TrainAI — Project overview",
  xfactorz: "Xfactorz — Project overview",
  amplifier: "PBLSH — Project overview",
  about: "About Tejus",
  approach: "My approach",
  contact: "Say hello",
};
let returnFocus: HTMLElement | null = null;
let currentPage: Page | null = null;
let minimizedPage: Page | null = null;
let windowCloseTimer: ReturnType<typeof setTimeout>;

function openPage(page: Page) {
  if (!Object.hasOwn(titles, page)) return;
  if (!dialog.open) returnFocus = document.activeElement as HTMLElement;
  clearTimeout(windowCloseTimer);
  dialog.classList.remove("minimizing");
  const restoring = minimizedPage === page;
  minimizedPage = null;
  currentPage = page;
  dialog.dataset.page = page;
  dialog.classList.toggle(
    "notes-window",
    ["about", "career", "approach", "contact"].includes(page),
  );
  document.querySelector("#window-title")!.textContent =
    `Information about: ${page in projects ? projects[page as ProjectKey].name : titles[page]}`;
  if (!restoring) {
    windowContent.innerHTML = renderPage(page);
    windowContent.scrollTop = 0;
  }
  if (!dialog.open) dialog.show();
  document
    .querySelectorAll<HTMLElement>(".window-sidebar [data-open]")
    .forEach((item) => {
      const active = item.dataset.open === page;
      item.classList.toggle("selected", active);
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  document.querySelector("#window-status-text")!.textContent =
    page === "work" ? `${projectKeys.length} projects` : titles[page];
  const launchIcon = document.querySelector<HTMLElement>(
    `.dock-item[data-open="${page}"]`,
  );
  launchIcon?.classList.add("launching");
  setTimeout(() => launchIcon?.classList.remove("launching"), 500);
  document
    .querySelector<HTMLButtonElement>(".window-close")!
    .focus({ preventScroll: true });
  document.body.classList.add("window-open");
  document
    .querySelectorAll(".dock-item")
    .forEach((el) =>
      el.classList.toggle("is-active", el.getAttribute("data-open") === page),
    );
  document.title = `${titles[page]} — Tejus Sharma`;
}
function resetWindow() {
  currentPage = null;
  dialog.removeAttribute("style");
  void exitFullscreen();
  dialog.classList.remove("expanded");
  document
    .querySelector(".window-expand")!
    .setAttribute("aria-pressed", "false");
  document
    .querySelector(".window-expand")!
    .setAttribute("aria-label", "Expand window");
  document.body.classList.remove("window-open");
  document
    .querySelectorAll(".is-active")
    .forEach((el) => el.classList.remove("is-active"));
  document.title = "Tejus Sharma — Ideas into working products.";
  returnFocus?.focus({ preventScroll: true });
}
function closeWindow() {
  clearTimeout(windowCloseTimer);
  minimizedPage = null;
  dialog.classList.remove("minimizing");
  if (dialog.open) dialog.close();
  history.replaceState(null, "", location.pathname + location.search);
  resetWindow();
}
function syncHash() {
  const page = location.hash.slice(1) as Page;
  if (Object.hasOwn(titles, page)) openPage(page);
  else if (dialog.open) {
    dialog.close();
    resetWindow();
  }
}
document.addEventListener("click", (event) => {
  const target = (event.target as HTMLElement).closest<HTMLElement>(
    "[data-open]",
  );
  if (!target) return;
  const page = target.dataset.open as Page;
  document
    .querySelectorAll(".desktop-item.selected")
    .forEach((el) => el.classList.remove("selected"));
  if (target.classList.contains("desktop-item"))
    target.classList.add("selected");
  if (currentPage === page && dialog.open) {
    dialog.focus();
    return;
  }
  if (location.hash === `#${page}`) openPage(page);
  else location.hash = page;
});
document.querySelector(".window-close")!.addEventListener("click", closeWindow);
document
  .querySelector(".window-minimize")!
  .addEventListener("click", minimizeWindow);
type FsDoc = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void> | void;
};
const fsDoc = document as FsDoc;

const isFullscreen = () =>
  (document.fullscreenElement ?? fsDoc.webkitFullscreenElement ?? null) !==
  null;
async function exitFullscreen() {
  if (!isFullscreen()) return;
  try {
    if (typeof document.exitFullscreen === "function")
      await document.exitFullscreen();
    else if (typeof fsDoc.webkitExitFullscreen === "function")
      await fsDoc.webkitExitFullscreen();
  } catch {
    /* ignore */
  }
}
function syncExpandButton() {
  const expanded = dialog.classList.contains("expanded");
  const button = document.querySelector(".window-expand")!;
  button.setAttribute("aria-pressed", String(expanded));
  button.setAttribute(
    "aria-label",
    expanded ? "Restore window size" : "Expand window",
  );
}
async function toggleExpanded() {
  if (dialog.classList.contains("expanded")) {
    await exitFullscreen();
    dialog.classList.remove("expanded");
  } else {
    dialog.classList.add("expanded");
  }
  syncExpandButton();
}
const onFullscreenChange = () => {
  if (!isFullscreen() && dialog.classList.contains("expanded")) {
    dialog.classList.remove("expanded");
    syncExpandButton();
  }
};
document.addEventListener("fullscreenchange", onFullscreenChange);
document.addEventListener("webkitfullscreenchange", onFullscreenChange);
document
  .querySelector(".window-expand")!
  .addEventListener("click", toggleExpanded);
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  if (isFullscreen() || dialog.classList.contains("expanded")) {
    void toggleExpanded();
    return;
  }
  closeWindow();
});
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    closeWindow();
});
window.addEventListener("hashchange", syncHash);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) closeWindow();
});
function minimizeWindow() {
  if (!currentPage) return;
  minimizedPage = currentPage;
  const icon = document.querySelector<HTMLElement>(
    `.dock-item[data-open="${currentPage}"]`,
  );
  const destination = (
    icon?.offsetParent
      ? icon
      : document.querySelector<HTMLElement>(".dock-work")
  )!.getBoundingClientRect();
  const origin = dialog.getBoundingClientRect();
  dialog.style.setProperty(
    "--min-x",
    `${destination.left + destination.width / 2 - origin.left - origin.width / 2}px`,
  );
  dialog.style.setProperty(
    "--min-y",
    `${destination.top + destination.height / 2 - origin.top - origin.height / 2}px`,
  );
  currentPage = null;
  dialog.classList.add("minimizing");
  history.replaceState(null, "", location.pathname + location.search);
  windowCloseTimer = setTimeout(
    () => {
      dialog.close();
      dialog.classList.remove("minimizing");
      document.body.classList.remove("window-open");
      returnFocus?.focus({ preventScroll: true });
    },
    matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180,
  );
}

document.addEventListener("click", async (event) => {
  const copyButton = (event.target as HTMLElement).closest("#copy-email");
  if (!copyButton) return;
  try {
    await navigator.clipboard.writeText("tejus.sharma10@gmail.com");
    copyButton.innerHTML = "Email copied <span>✓</span>";
  } catch {
    copyButton.textContent = "Select the email above to copy";
  }
});
const creativeAlert =
  document.querySelector<HTMLDialogElement>("#creative-alert")!;
document
  .querySelector("#creative-break")!
  .addEventListener("click", () => creativeAlert.showModal());
document
  .querySelector("#dismiss-alert")!
  .addEventListener("click", () => creativeAlert.close());
creativeAlert.addEventListener("click", (event) => {
  if (event.target === creativeAlert) creativeAlert.close();
});
syncHash();

// Keep the desktop playful: drag a file, or click/tap to open it.
let suppressDesktopClick = false;
const files = document.querySelectorAll<HTMLElement>(".desktop-item");
document.querySelector("#desktop")!.addEventListener("click", (event) => {
  if (!(event.target as HTMLElement).closest(".desktop-item")) {
    files.forEach((file) => file.classList.remove("selected"));
  }
});
files.forEach((file) => {
  let drag: {
    x: number;
    y: number;
    left: number;
    top: number;
    moved: boolean;
  } | null = null;
  file.addEventListener("dragstart", (event) => event.preventDefault());
  file.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    const parent = file.parentElement!.getBoundingClientRect();
    const rect = file.getBoundingClientRect();
    drag = {
      x: event.clientX,
      y: event.clientY,
      left: rect.left - parent.left,
      top: rect.top - parent.top,
      moved: false,
    };
    file.setPointerCapture(event.pointerId);
  });
  file.addEventListener("pointermove", (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x,
      dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 5) return;
    drag.moved = true;
    file.classList.add("dragging");
    const parent = file.parentElement!;
    file.style.left = `${Math.max(0, Math.min(parent.clientWidth - file.offsetWidth, drag.left + dx))}px`;
    file.style.top = `${Math.max(0, Math.min(parent.clientHeight - file.offsetHeight, drag.top + dy))}px`;
    file.style.right = "auto";
    file.style.transform = "none";
  });
  file.addEventListener("pointerup", () => {
    if (drag?.moved) {
      suppressDesktopClick = true;
      setTimeout(() => {
        suppressDesktopClick = false;
      }, 0);
    }
    file.classList.remove("dragging");
    drag = null;
  });
  file.addEventListener("pointercancel", () => {
    drag = null;
    file.classList.remove("dragging");
  });
});
document.addEventListener(
  "click",
  (event) => {
    if (suppressDesktopClick) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true,
);
window.addEventListener("resize", () =>
  files.forEach((file) =>
    ["left", "top", "right", "transform"].forEach((key) =>
      file.style.removeProperty(key),
    ),
  ),
);

// A proximity curve magnifies neighboring dock icons, not just the hovered icon.
const dock = document.querySelector<HTMLElement>(".dock")!;
const dockItems = [...dock.querySelectorAll<HTMLElement>(".dock-item")];
function resetDock() {
  dockItems.forEach((item) => {
    item.style.removeProperty("--dock-scale");
    item.style.removeProperty("--dock-lift");
  });
}
dock.addEventListener("pointermove", (event) => {
  if (
    event.pointerType !== "mouse" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  for (const item of dockItems) {
    const rect = item.getBoundingClientRect();
    const vertical = innerWidth < 810;
    const distance = vertical
      ? Math.abs(event.clientY - (rect.top + rect.height / 2))
      : Math.abs(event.clientX - (rect.left + rect.width / 2));
    const influence = Math.max(0, 1 - distance / 110);
    item.style.setProperty(
      "--dock-scale",
      `${1 + 0.42 * influence * influence}`,
    );
    item.style.setProperty("--dock-lift", `${-10 * influence}px`);
  }
});
dock.addEventListener("pointerleave", resetDock);
const titlebar = document.querySelector<HTMLElement>(".window-bar")!;
let windowDrag: { x: number; y: number; left: number; top: number } | null =
  null;
titlebar.addEventListener("dblclick", (event) => {
  if (!(event.target as HTMLElement).closest("button")) toggleExpanded();
});
titlebar.addEventListener("pointerdown", (event) => {
  if (
    event.button !== 0 ||
    (event.target as HTMLElement).closest("button") ||
    dialog.classList.contains("expanded") ||
    innerWidth < 600
  )
    return;
  const rect = dialog.getBoundingClientRect();
  windowDrag = {
    x: event.clientX,
    y: event.clientY,
    left: rect.left,
    top: rect.top,
  };
  titlebar.setPointerCapture(event.pointerId);
  dialog.classList.add("window-dragging");
});
titlebar.addEventListener("pointermove", (event) => {
  if (!windowDrag) return;
  dialog.style.left = `${Math.max(8, Math.min(innerWidth - dialog.offsetWidth - 8, windowDrag.left + event.clientX - windowDrag.x))}px`;
  dialog.style.top = `${Math.max(8, Math.min(innerHeight - 70, windowDrag.top + event.clientY - windowDrag.y))}px`;
  dialog.style.transform = "none";
});
function stopWindowDrag() {
  windowDrag = null;
  dialog.classList.remove("window-dragging");
}
titlebar.addEventListener("pointerup", stopWindowDrag);
titlebar.addEventListener("pointercancel", stopWindowDrag);
window.addEventListener("resize", () => {
  dialog.removeAttribute("style");
  resetDock();
});

// Work filters remain local to the archive and do not change the open project.
document.addEventListener("click", (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
    "[data-filter]",
  );
  if (!button) return;
  document
    .querySelectorAll<HTMLButtonElement>("[data-filter]")
    .forEach((el) => {
      const active = el === button;
      el.classList.toggle("active", active);
      el.setAttribute("aria-pressed", String(active));
    });
  document
    .querySelectorAll<HTMLElement>(".finder-file[data-category]")
    .forEach((el) => {
      el.hidden =
        button.dataset.filter !== "all" &&
        el.dataset.category !== button.dataset.filter;
    });
});
