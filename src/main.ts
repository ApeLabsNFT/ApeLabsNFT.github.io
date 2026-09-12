import "./style.css";
import "./desktop.css";
import "./polish.css";
import { osIcon } from "./os-icons";

import { projects, type ProjectKey } from './projects';
import './real-work.css';
type Page = ProjectKey | 'work' | 'about' | 'career' | 'approach' | 'contact';
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const projectKeys = Object.keys(projects) as (keyof typeof projects)[];
const projectLogo = (key: ProjectKey) => {
  const p = projects[key];
  return p.logo ? `<img class="brand-logo" src="${p.logo}" alt="${p.name}"/>` : `<span class="brand-wordmark">${p.name}</span>`;
};
const tile = (key: ProjectKey) => {
  const p = projects[key];
  return `<button class="desktop-item project-item item-${key}" data-open="${key}" aria-label="Open ${p.name} project"><span class="real-thumbnail"><img src="${p.cover}" alt="" loading="eager"/><span class="thumb-brand">${projectLogo(key)}</span></span><span class="item-name">${p.name}</span><span class="item-meta">${p.tag}</span></button>`;
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a class="skip-link" href="#desktop">Skip to portfolio</a>
  <main id="desktop" tabindex="-1">
    <div class="wallpaper" aria-hidden="true"><img src="/tejus-wallpaper-v2.png" alt="" fetchpriority="high"/><div class="wallpaper-wash"></div></div>
    <h1 class="sr-only">Tejus Sharma — Enterprise AI solutions architect, Associate Director of Growth &amp; Strategy at EvolutionCo</h1>
    <div class="desktop-work" aria-label="Selected work and portfolio files">

      ${projectKeys.map(tile).join("")}
      <button class="desktop-item item-career" data-open="career" aria-label="Open career and CV"><span class="native-file-icon">${osIcon("contact")}</span><span class="item-name">Career & CV</span></button>
      <button class="desktop-item item-index" data-open="work" aria-label="Open selected work"><span class="native-file-icon">${osIcon("folder")}</span><span class="item-name">Selected work</span></button>
      <a class="desktop-item item-github" href="https://github.com/ApeLabsNFT" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)"><span class="native-file-icon">${osIcon("terminal")}</span><span class="item-name">GitHub</span></a>
      <a class="desktop-item item-linkedin" href="https://www.linkedin.com/in/tejus-sharma-6831a232b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)"><span class="file-icon linkedin-icon">in</span><span class="item-name">LinkedIn</span></a>

      <button class="desktop-item item-about" data-open="about" aria-label="Open about Tejus"><span class="portrait-print"><img src="/tejus-portrait.jpeg" alt="Tejus Sharma in a blue suit"/><span>the human behind the work.</span></span><span class="item-name">About me</span><span class="item-meta">A little introduction</span></button>
      <button class="desktop-item item-approach" data-open="approach" aria-label="Open my approach"><span class="native-file-icon">${osIcon("notes")}</span><span class="item-name">My approach</span><span class="item-meta">From why to what’s next</span></button>
      <button class="desktop-item item-contact" data-open="contact" aria-label="Open contact"><span class="native-file-icon">${osIcon("mail")}</span><span class="item-name">Say hello</span><span class="item-meta">Good things start here</span></button>
    </div>
  </main>
  <nav class="dock" aria-label="Portfolio navigation">
    <button class="dock-item dock-trainai" data-open="trainai" aria-label="TrainAI"><span class="dock-tooltip">TrainAI</span>${projectLogo("trainai")}</button>
    <button class="dock-item dock-xfactorz" data-open="xfactorz" aria-label="Xfactorz"><span class="dock-tooltip">Xfactorz</span>${projectLogo("xfactorz")}</button>
    <button class="dock-item dock-amplifier" data-open="amplifier" aria-label="Portfolio Amplifier"><span class="dock-tooltip">PBLSH</span><img class="brand-logo" src="/work/pblsh-mark.svg" alt="PBLSH"/></button>
    <span class="dock-divider"></span>
    <button class="dock-item dock-work" data-open="work" aria-label="Selected work"><span class="dock-tooltip">Selected work</span>${osIcon("finder")}<span class="dock-dot"></span></button>
    <button class="dock-item dock-about" data-open="about" aria-label="About me"><span class="dock-tooltip">About me</span>${osIcon("contact")}</button>
    <button class="dock-item dock-approach" data-open="approach" aria-label="My approach"><span class="dock-tooltip">My approach</span>${osIcon("notes")}</button>
    <span class="dock-divider"></span>
    <button class="dock-item dock-contact" data-open="contact" aria-label="Get in touch"><span class="dock-tooltip">Get in touch</span>${osIcon("mail")}</button>
    <a class="dock-item dock-linkedin" href="https://www.linkedin.com/in/tejus-sharma-6831a232b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><span class="dock-tooltip">LinkedIn ↗</span><span class="linkedin-mark">in</span></a>
    <span class="dock-divider"></span>
    <button class="dock-item dock-theme" id="theme-toggle" aria-label="Switch to dark theme" aria-pressed="false"><span class="dock-tooltip">Change atmosphere</span>${osIcon("appearance")}</button>
  </nav>
  <dialog id="portfolio-window" aria-labelledby="window-title"><div class="window-bar"><div class="window-controls"><button class="window-close" aria-label="Close window"><span>×</span></button><button class="window-minimize" aria-label="Minimize window"><span>−</span></button><button class="window-expand" aria-label="Expand window" aria-pressed="false"><span>↗</span></button></div><span id="window-title"></span><span class="window-bar-brand">ts.</span></div><div class="window-body"><nav class="window-sidebar" aria-label="Window navigation"><span class="sidebar-label">Favorites</span><button data-open="work">${osIcon("folder")}<span>Selected work</span></button><button data-open="about">${osIcon("contact")}<span>About Tejus</span></button><button data-open="approach">${osIcon("notes")}<span>My approach</span></button><button data-open="contact">${osIcon("mail")}<span>Contact</span></button><button data-open="career">${osIcon("notes")}<span>Career & CV</span></button><span class="sidebar-label">Projects</span>${projectKeys.map((key) => `<button data-open="${key}"><span class="sidebar-project-dot ${projects[key].color}"></span><span>${projects[key].name}</span></button>`).join("")}<span class="sidebar-signature">Tejus Sharma<br/><small>Personal portfolio</small></span></nav><div id="window-content"></div></div><div class="window-status"><span id="window-status-text">Portfolio</span><span>Mumbai, India</span></div></dialog>
  <div class="toast" role="status" aria-live="polite"></div>
`;

const external = (url: string, label: string) =>
  `<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} ${arrow}</a>`;
function renderPage(page: Page): string {
  if (page in projects) {
    const p = projects[page as keyof typeof projects];
    return `<article class="real-project"><header class="case-heading"><div class="case-brand">${projectLogo(page as ProjectKey)}</div><span class="case-category">${p.tag}</span><h2>${p.name}</h2><p>${p.description}</p><div class="case-meta"><span><small>MY ROLE</small>${p.role}</span><span><small>CONTEXT</small>${p.status}</span></div></header><div class="case-cover"><img src="${p.cover}" alt="${p.name} project visual"/></div><div class="case-story"><section><span class="section-number">01 / THE WORK</span><h3>Connecting the business<br/>and the experience.</h3><p>${p.text}</p></section><section><span class="section-number">02 / MY CONTRIBUTION</span><p>${p.focus}</p><p class="case-context">${p.context}</p></section></div><div class="case-gallery">${p.gallery.map((g,i)=>`<figure><a href="${g.image}" target="_blank" rel="noopener noreferrer" aria-label="View full image: ${g.caption}"><img src="${g.image}" alt="${g.caption}" loading="lazy"/></a><figcaption><span>0${i+1}</span>${g.caption}<span>↗</span></figcaption></figure>`).join('')}</div><div class="case-flow"><h3>The journey</h3><ol>${p.steps.map((step,i)=>`<li><small>0${i+1}</small>${step}</li>`).join('')}</ol></div><footer class="case-footer">${p.url ? external(p.url,p.link!) : '<span>Strategy, experience & product design</span>'}<button class="back-work" data-open="work">All selected work →</button></footer></article>`;
  }
  if (page === "work")
    return `<div class="finder-view"><div class="finder-path">Tejus Sharma <span>›</span> Work archive</div><h2>Selected work</h2><p class="finder-intro">Enterprise websites, award-winning product experiences, AI systems and a business of my own.</p><div class="work-filters" aria-label="Filter projects"><button class="active" aria-pressed="true" data-filter="all">All work <span>${String(projectKeys.length).padStart(2, "0")}</span></button><button data-filter="enterprise">Enterprise & UX</button><button data-filter="ai">AI products</button><button data-filter="independent">Independent</button></div><div class="finder-grid">${projectKeys.map((key) => `<button class="finder-file" data-open="${key}" data-category="${['trainai','xfactorz','amplifier'].includes(key)?'ai':key==='physio'?'independent':'enterprise'}"><span class="real-finder-preview"><img src="${projects[key].cover}" alt="" loading="lazy"/></span><strong>${projects[key].name}</strong><small>${projects[key].tag}</small></button>`).join("")}</div><div class="finder-footer">${osIcon("folder")}<span>${projectKeys.length} projects · Strategy, design & AI</span></div><button class="career-link" data-open="career">The experience behind the work <span>Career & CV ↗</span></button></div>`;
  if (page === "about")
    return `<div class="about-page"><div class="about-photo"><img src="/tejus-portrait.jpeg" alt="Tejus Sharma wearing a blue suit and amber glasses"/><span>MUMBAI, INDIA ↗</span></div><div class="page-padding"><div class="eyebrow">THE HUMAN BEHIND THE WORK</div><h2>Hi, I’m Tejus<span class="accent">.</span></h2><h3>Designer by foundation.<br/>Product thinker by instinct.<br/>Builder by practice.</h3><p>My path runs from interior design and freelance branding to Web3 product strategy, enterprise UX and AI solution architecture. I like understanding how the whole thing works—what people need, what the business needs, and what it takes to build it.</p><p>At EvolutionCo, that has meant Legrand and IndoAsian experiences, Aditya Birla Capital journeys, and products such as TrainAI, Xfactorz and PBLSH. I now lead growth and strategy for the group as Associate Director, shaping AI propositions from first discovery conversation through architecture, commercials and pilot. Beyond that, I’m a co-founder of PhysioByRutvi, working on product, brand and growth.</p><div class="about-tags"><span>Experience design</span><span>Product strategy</span><span>Enterprise AI</span></div><div class="social-links">${external("https://www.linkedin.com/in/tejus-sharma-6831a232b", "LinkedIn")}${external("https://github.com/ApeLabsNFT", "GitHub")}</div><button class="solid-button" data-open="career">Explore my career ${arrow}</button></div></div>`;
  if (page === "career")
    return `<div class="career-page"><div class="eyebrow">2020 — NOW / THE LONGER STORY</div><h2>From experiences<br/>to entire systems.</h2><p class="career-intro">UX, product strategy, enterprise pre-sales and AI architecture. A career built around making complex things useful.</p><div class="career-impact"><div><strong>30–40%</strong><span>Shorter sales cycles, by replacing static decks with live AI prototypes</span></div><div><strong>60+</strong><span>Proposals authored across 10+ industries</span></div><div><strong>2025</strong><span>India’s Best Design Award, Innovation · Legrand DIY Configurator</span></div></div><div class="career-timeline">${[
      ['Feb 2026 — Present','EvolutionCo Group','Associate Director — Growth & Strategy','Own growth and solution strategy for the experiential-AI and immersive-technology portfolio. Architected and own TrainAI. Build vendor benchmarks, credit models and fully loaded production-cost frameworks across LLM, image, video, voice and avatar providers. Manage a three-person AI product team.'],
      ['Feb 2025 — Feb 2026','EvolutionCo Group','Pre-Sales Team Lead','Led a team of four owning discovery, solutioning, demos and proposal strategy. Cut average sales cycles by 30–40% by replacing static decks with live functional AI prototypes, and authored 60+ proposals across 10+ industries.'],
      ['Feb 2024 — Feb 2025','EvolutionCo Group','Pre-Sales Consultant','Owned the full pre-sales lifecycle for enterprise BFSI opportunities, influencing solution direction and pricing narratives. Ran client discovery workshops through delivery on a unified portal for a leading Bahrain bank.'],
      ['Feb 2023 — Feb 2024','EvolutionCo Group','User Experience Designer','UX across BFSI, enterprise and consumer products: global corporate-banking journeys for a leading UAE bank, the Legrand DIY configurator, corporate payments and premium-banking modules.'],
      ['Dec 2021 — Jan 2023','SolPatrol','Product Strategist · UX & Web3','Product and design strategy for a blockchain platform. Roadmaps, token and NFT mechanics, user journeys, usability testing and partner narratives.'],
      ['Aug 2020 — Oct 2021','Independent / Fiverr','Branding & UX Consultant','Delivered 17+ design projects for global clients and launched two NFT projects end to end, working with founders on MVP scope and digital strategy.'],
    ].map(([date,company,role,text])=>`<section><time>${date}</time><div><h3>${company}</h3><h4>${role}</h4><p>${text}</p></div></section>`).join('')}</div><section class="career-extra"><h3>Recent engagements</h3><p><strong>Delivered.</strong> Highland Lifespaces — full-cycle website engagement from commercials and information architecture through content and delivery, go-live approved in December 2025. Legrand Riyadh experience centre — statement of work and V2 concept handed to the client in September 2026. Legrand India — brand share-of-search and consideration index reporting. TrainAI — client brochure and enterprise demonstrations through 2026.</p><p><strong>Conversational and avatar AI.</strong> Proposal and demonstration work with private-sector banks, a general-insurance group and a life-insurance business, covering conversational banking journeys, avatar requirement definition and AI capability exploration.</p><p><strong>Experiential and phygital.</strong> A companion-AI proposition for public-sector health and social-development programmes, an industrial-instrumentation experience centre with AI-based sales training, immersive retail solutioning for a luxury retail group, a petrochemical manufacturer’s AI knowledge environment, and a judicial smart-courtroom and kiosk proposal programme.</p><p><strong>Wider solutioning.</strong> Engagements across paints and coatings, cinema and entertainment, packaging, pharmaceuticals, power and glass manufacturing, spanning product strategy, solution design and pre-sales.</p><p class="case-context">Engagements are listed at the stage they actually reached. Live proposal and pipeline work is described by sector rather than by client name. Named clients are those whose work is delivered or already public.</p></section><section class="career-extra"><h3>GCC delivery</h3><p>My Gulf exposure starts with two corporate-banking programmes — global corporate banking for a leading UAE bank, and a unified portal for a leading Bahrain-headquartered bank — both written up in the work archive. Both are under non-disclosure agreements, so the clients are not named and no screens or artefacts are published; I can talk through what the agreements permit in conversation.</p><p>Regional work continues through luxury retail, petrochemical and government programmes, and the Legrand Riyadh experience centre concept delivered in September 2026.</p></section><section class="career-extra"><h3>Other products & solution work</h3><p>Alongside the projects in this archive: <strong>AI Theatre</strong>, a real-time conversational avatar experience for cinema and enterprise engagement; <strong>CoreKultur</strong>, a subscription AI marketing engine for real-estate brokers; a <strong>public-sector smart courtroom and judicial kiosk programme</strong> covering solution architecture and bid support across multiple locations; <strong>CompanionX</strong>, a companion-AI proposition taken into public-sector health and social-development programmes; and <strong>OMIFCO’s AI manufacturing experience</strong>, connecting an interactive Metawall, Holobox advisor and collaborative table.</p><h3>Foundation & continued learning</h3><p>Bachelor’s degree in Interior Design · University of Rajasthan · 2016–2020. Further learning in AI and business through the University of Maryland, IIT Bombay and Intel; Six Sigma through Educate 360; SEO through HubSpot Academy.</p></section><div class="case-footer"><a class="text-link" href="/work/Tejus-Sharma-CV.pdf" target="_blank" rel="noopener noreferrer">Download my full CV ${arrow}</a><button class="back-work" data-open="work">Explore the work →</button></div></div>`;
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
  abc: "Aditya Birla Capital",
  legrand: "Legrand India",
  diy: "Legrand Configurators",
  indoasian: "IndoAsian",
  innoval: "Virtual Innoval",
  riyadh: "Legrand Riyadh — Experience centre",
  physio: "PhysioByRutvi",
  career: "Career & CV",
  trainai: "TrainAI — Project overview",
  xfactorz: "Xfactorz — Project overview",
  amplifier: "Portfolio Amplifier — Project overview",
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
  document.querySelector("#window-title")!.textContent = titles[page];
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
function toggleExpanded() {
  const expanded = dialog.classList.toggle("expanded");
  document
    .querySelector(".window-expand")!
    .setAttribute("aria-pressed", String(expanded));
  document
    .querySelector(".window-expand")!
    .setAttribute(
      "aria-label",
      expanded ? "Restore window size" : "Expand window",
    );
}
document
  .querySelector(".window-expand")!
  .addEventListener("click", toggleExpanded);
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
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

let toastTimer: ReturnType<typeof setTimeout>;
function toast(message: string) {
  const el = document.querySelector<HTMLElement>(".toast")!;
  clearTimeout(toastTimer);
  el.textContent = message;
  el.classList.add("visible");
  toastTimer = setTimeout(() => el.classList.remove("visible"), 3000);
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
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
let savedTheme: string | null = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch {
  /* System theme remains usable without storage. */
}
function applyTheme(dark: boolean) {
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document
    .querySelector("#theme-toggle")!
    .setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
  document
    .querySelector("#theme-toggle")!
    .setAttribute("aria-pressed", String(dark));
}
applyTheme(savedTheme ? savedTheme === "dark" : systemTheme.matches);
document.querySelector("#theme-toggle")!.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  applyTheme(dark);
  savedTheme = dark ? "dark" : "light";
  try {
    localStorage.setItem("portfolio-theme", savedTheme);
  } catch {
    /* Theme still works for this visit. */
  }
  toast(dark ? "A little after-hours atmosphere." : "Back to the daylight.");
});
systemTheme.addEventListener("change", (event) => {
  if (!savedTheme) applyTheme(event.matches);
});
syncHash();

// Keep the desktop playful: drag a file, or click/tap to open it.
let suppressDesktopClick = false;
const files = document.querySelectorAll<HTMLElement>(".desktop-item");
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
    if (event.button !== 0 || event.pointerType === "touch") return;
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
  files.forEach((file) => file.removeAttribute("style")),
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
    const distance = Math.abs(event.clientX - (rect.left + rect.width / 2));
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

// Small, eased depth movement; no perpetual animation loop or motion on touch.
const desktopScene = document.querySelector<HTMLElement>("#desktop")!;
let sceneX = 0,
  sceneY = 0,
  targetX = 0,
  targetY = 0,
  sceneFrame = 0;
function animateScene() {
  sceneX += (targetX - sceneX) * 0.065;
  sceneY += (targetY - sceneY) * 0.065;
  desktopScene.style.setProperty("--scene-x", `${sceneX.toFixed(2)}px`);
  desktopScene.style.setProperty("--scene-y", `${sceneY.toFixed(2)}px`);
  sceneFrame =
    Math.abs(targetX - sceneX) + Math.abs(targetY - sceneY) > 0.02
      ? requestAnimationFrame(animateScene)
      : 0;
}
desktopScene.addEventListener("pointermove", (event) => {
  if (
    event.pointerType !== "mouse" ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  targetX = (event.clientX / innerWidth - 0.5) * 9;
  targetY = (event.clientY / innerHeight - 0.5) * 6;
  if (!sceneFrame) sceneFrame = requestAnimationFrame(animateScene);
});
desktopScene.addEventListener("pointerleave", () => {
  targetX = 0;
  targetY = 0;
  if (!sceneFrame) sceneFrame = requestAnimationFrame(animateScene);
});

// Work filters remain local to the archive and do not change the open project.
document.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-filter]');
  if (!button) return;
  document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(el => {
    const active = el === button;
    el.classList.toggle('active', active);
    el.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll<HTMLElement>('.finder-file[data-category]').forEach(el => {
    el.hidden = button.dataset.filter !== 'all' && el.dataset.category !== button.dataset.filter;
  });
});
