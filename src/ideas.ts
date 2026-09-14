const launch = (url: string, label: string) => `<a class="idea-launch" href="${url}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true">↗</span></a>`;

export function renderIdeas() {
  return `<article class="idea-lab">
    <header class="idea-lab-header"><div><h2>Bin of Ideas</h2><p>A few smaller projects and interactive experiences to explore.</p></div></header>
    <div class="idea-cards">
      <article class="idea-card idea-training"><div class="idea-art"><span class="idea-index">01 / LEARN</span><img src="/work/legrand-avatar.webp" alt="Legrand agentic training experience interface"/></div><div class="idea-card-body"><span class="idea-type">INTERACTIVE DEMO</span><h3>Legrand Training Experience</h3><p>An AI guide for exploring Legrand products and training content.</p>${launch("https://ai.xfactorz.evolutionco.in/", "Open training experience")}</div></article>
      <article class="idea-card idea-theatre"><div class="idea-art cinema-art"><span class="idea-index">02 / EXPERIENCE</span><div class="cinema-ticket" aria-hidden="true"><span>PVR INOX</span><strong>BEYOND<br/>THE SCREEN.</strong><span class="ticket-bottom">ADMIT ONE · AI EXPERIENCE <b>✳</b></span></div></div><div class="idea-card-body"><span class="idea-type">INTERACTIVE DEMO · SIGN-IN REQUIRED</span><h3>Theatre Experience</h3><p>An Xfactorz cinema concierge for exploring films and actors.</p>${launch("https://ai.theatre.evolutionco.co.in/", "Open theatre experience")}</div></article>
      <article class="idea-card idea-physio"><div class="idea-art"><span class="idea-index">03 / EXPLORE</span><img src="/work/covers/physio.webp" alt="PhysioByRutvi home-care website presentation"/></div><div class="idea-card-body"><span class="idea-type">DIGITAL EXPERIMENT</span><h3>PhysioByRutvi</h3><p>A digital-service exploration for discovering home physiotherapy and making an enquiry.</p><div class="idea-actions">${launch("https://physiobyrutvi.in/", "Visit the website")}<button class="idea-note" data-open="physio">Read the idea →</button></div></div></article>
    </div><footer class="idea-lab-footer"><button data-open="work">Back to selected work ↗</button></footer>
  </article>`;
}
