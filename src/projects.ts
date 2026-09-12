export type ProjectKey =
  | "fab"
  | "gib"
  | "abc"
  | "carandbike"
  | "legrand"
  | "diy"
  | "indoasian"
  | "innoval"
  | "riyadh"
  | "trainai"
  | "xfactorz"
  | "amplifier"
  | "physio";
export interface Project {
  name: string;
  tag: string;
  role: string;
  status: string;
  color: string;
  description: string;
  text: string;
  focus: string;
  context: string;
  cover: string;
  logo?: string;
  url?: string;
  link?: string;
  gallery: { image: string; caption: string }[];
  steps: string[];
}
const img = (name: string) => `/work/${name}.webp`;
export const projects: Record<ProjectKey, Project> = {
  fab: {
    name: "Leading UAE Bank",
    tag: "Corporate banking UX",
    color: "blue",
    role: "Research, journeys, IA & interaction design",
    status: "Global corporate banking · UAE",
    description: "Roles, states and exceptions before the happy path.",
    text: "Global corporate-banking journeys for one of the largest banks in the UAE. Corporate users do not all do the same thing: the same task carries different actions, permissions and outcomes depending on who is doing it and what has already happened. The work made those distinctions visible in the interface instead of hiding them behind a single optimistic flow.",
    focus:
      "Individual and bulk cheque deposit, maker, checker and self-authorisation journeys, payment tracking, reporting, account services, service requests and a Ratibi dashboard — mapped into research, journeys, information architecture, wireframes and exception states.",
    context:
      "Enterprise UX with EvolutionCo, iterated through client feedback with the delivery team. The engagement is covered by a non-disclosure agreement, so the client is not named and no screens, artefacts, account identifiers or internal banking logic are shown. This case describes the problem and my remit only. Happy to talk through the detail that the NDA permits in conversation.",
    cover: "/ui/notes.avif",
    steps: [
      "Understand the role",
      "Complete the task",
      "Pass it for approval",
      "Handle the exception",
    ],
    gallery: [],
  },
  gib: {
    name: "Leading Bahrain Bank",
    tag: "Unified banking portal",
    color: "green",
    role: "Workshop discovery, journeys & IA",
    status: "Unified portal · Bahrain",
    description: "Many functions, one working environment.",
    text: "A unified portal has to feel like one product even though its requirements arrive from separate banking teams. Payments, beneficiaries, delegation, account services and trade information each carry real depth, and the job was to support that depth without making people relearn how to complete a task every time the object changed.",
    focus:
      "Workshop discovery, banking journey definition, information architecture, wireframes, design quality review and iteration with client and delivery stakeholders across trade widgets, payments, relationship management, supply-chain-finance dashboards, beneficiary management, single and bulk journeys, uploads and delegation.",
    context:
      "Delivered with EvolutionCo across workshops and delivery cycles for a leading Bahrain-headquartered bank. The engagement is covered by a non-disclosure agreement, so the client is not named and the information architecture, wireframes and screens are not published. Happy to talk through the detail that the NDA permits in conversation.",
    cover: "/ui/notes.avif",
    steps: [
      "Enter the information",
      "Validate it",
      "Pass the responsibility",
      "Track the status",
    ],
    gallery: [],
  },
  carandbike: {
    name: "car&bike",
    tag: "Automotive website",
    color: "red",
    role: "UX audit, solution scoping & design coordination",
    status: "Automotive website · EvolutionCo",
    description:
      "Connecting vehicle discovery, comparison and editorial exploration.",
    text: "A visitor arrives at an automotive site with very different intents: finding a new car, weighing up a used one, comparing variants, checking what it costs in their city, or just reading the review. The revamp was not a homepage refresh. It was working out how those journeys relate, and making the page types and requirements concrete enough for a coordinated design workstream.",
    focus:
      "Website audit insights, proposal and scope-of-work development, page-type inventory and mapping across discovery, product, comparison, city pricing, editorial, used-vehicle and enquiry journeys, and coordination with the wider UX/UI team.",
    context:
      "Delivered with EvolutionCo for Mahindra’s car&bike as part of a cross-functional team. UX audit, journey scoping and design coordination were my contribution. Visual design and engineering were collaborative; the project is represented by its brand mark, not an unverified product mockup.",
    cover: img("carandbike-logo"),
    logo: img("carandbike-logo"),
    url: "https://www.carandbike.com/",
    link: "Visit car&bike",
    steps: [
      "Discover a vehicle",
      "Compare the options",
      "Check local pricing",
      "Read and decide",
    ],
    gallery: [],
  },
  abc: {
    name: "Aditya Birla Capital",
    tag: "Financial journeys",
    color: "red",
    role: "UX & solution strategy",
    status: "Website experience & Phase 2 strategy",
    description:
      "A financial ecosystem built around life, not a product catalogue.",
    text: "The ABC work brings together website journeys, financial education and a strategy for personalised planning. The central question: how can a financial-services platform start with someone’s life stage and needs, then help them find a useful next step?",
    focus:
      "Audience and persona mapping, need-led journeys, financial-planning experiences, content strategy and scope definition.",
    context:
      "Work with EvolutionCo. The Phase 2 strategy covers life-stage microsites, planning tools and a connected content ecosystem. Strategy recommendations are presented as proposals, rather than shipped AI capabilities.",
    cover: img("abc-cover"),
    logo: img("abc-logo"),
    steps: [
      "Understand the life stage",
      "Identify the financial need",
      "Explore relevant options",
      "Plan the next step",
    ],
    gallery: [
      {
        image: img("abc-cover"),
        caption: "Aditya Birla Capital · homepage experience",
      },
      {
        image: img("abc-journeys-top"),
        caption:
          "Aditya Birla Capital · product discovery and planning journeys",
      },
      {
        image: img("abc-home"),
        caption: "Aditya Birla Capital · the full homepage, top to bottom",
      },
    ],
  },
  legrand: {
    name: "Legrand India",
    tag: "Enterprise website",
    color: "red",
    role: "UX strategy & experience design",
    status: "Delivered · EvolutionCo",
    description: "Making a complex product world easier to navigate.",
    text: "UX and digital-experience work for Legrand India and Legrand Corporate India. The experience connects product discovery, useful specifications and guided selection across an extensive electrical and smart-living portfolio.",
    focus:
      "Information architecture, navigation, product exploration, wireframes and experience design, working with the wider design and engineering team.",
    context:
      "Delivered in collaboration with EvolutionCo’s design, content and engineering teams, across the India product website and the Corporate India platform.",
    cover: img("legrand-home"),
    logo: img("legrand-logo"),
    url: "https://www.legrand.co.in/",
    link: "Visit Legrand India",
    steps: [
      "Explore the range",
      "Find a suitable product",
      "Understand specifications",
      "Take the next step",
    ],
    gallery: [
      {
        image: img("legrand-home"),
        caption: "Legrand India · guided product selection",
      },
      {
        image: img("legrand-slide-1"),
        caption: "Legrand India · website case study, the brief",
      },
      {
        image: img("legrand-slide-2"),
        caption: "Legrand India · existing website review",
      },
      {
        image: img("legrand-slide-3"),
        caption: "Legrand India · wireframes and page layouts",
      },
      {
        image: img("legrand-slide-4"),
        caption: "Legrand India · navigation and interface wireframes",
      },
      {
        image: img("legrand-slide-5"),
        caption: "Legrand India · user pain points",
      },
    ],
  },
  diy: {
    name: "Legrand Configurators",
    tag: "Award-winning product UX",
    color: "red",
    role: "UX & product strategy",
    status: "DIY delivered · Arteor ongoing in April 2026",
    description: "From choosing a switch to planning an entire space.",
    text: "Product-selection and configuration experiences for Legrand DIY and Arteor Advanced. The work brings compatibility, product choices and a bill of quantities into a guided journey that customers and sales teams can understand.",
    focus:
      "Configuration journeys, user flows and product experience. The Legrand DIY Configurator won India’s Best Design Award in the Innovation category in 2025, for product usability and GenAI design.",
    context:
      "Created with the EvolutionCo team. DIY is recorded as delivered; Arteor Advanced is recorded as ongoing in the April 2026 project deck. The screens below identify their respective workstreams.",
    cover: img("legrand-arteor"),
    logo: img("legrand-logo"),
    steps: [
      "Choose a range",
      "Configure the details",
      "Check compatibility",
      "Review the quantities",
    ],
    gallery: [
      {
        image: img("legrand-arteor"),
        caption: "Arteor Advanced · configuration interface",
      },
      {
        image: img("legrand-configuration"),
        caption: "Arteor Advanced · configuration review",
      },
      {
        image: img("diy-slide-1"),
        caption: "DIY Configurator · the configuration problem",
      },
      {
        image: img("diy-slide-2"),
        caption: "DIY Configurator · journey and product strategy",
      },
      {
        image: img("diy-slide-3"),
        caption: "DIY Configurator · features and functionality",
      },
      {
        image: img("legrand-award"),
        caption:
          "DIY Configurator · India’s Best Design Award, Innovation · 2025",
      },
    ],
  },
  indoasian: {
    name: "IndoAsian",
    tag: "Product discovery",
    color: "yellow",
    role: "UX & product strategy",
    status: "Delivered · EvolutionCo",
    description: "A clearer path through electrical products and solutions.",
    text: "UX and product strategy for IndoAsian’s digital platform, shaping intuitive navigation, product exploration and access to detailed specifications for different customer needs.",
    focus:
      "Audience journeys, information architecture and the product-discovery experience.",
    context:
      "A delivered website revamp within the Legrand group ecosystem, created with EvolutionCo’s design and engineering teams.",
    cover: img("indoasian-home"),
    url: "https://www.indoasian.com/",
    link: "Visit IndoAsian",
    steps: [
      "Meet the range",
      "Explore by need",
      "Review specifications",
      "Find the right solution",
    ],
    gallery: [
      {
        image: img("indoasian-home"),
        caption: "IndoAsian · product-led homepage",
      },
      {
        image: img("indoasian-audience"),
        caption: "IndoAsian · audience-based exploration",
      },
    ],
  },
  innoval: {
    name: "Virtual Innoval",
    tag: "Immersive showroom",
    color: "blue",
    role: "Digital-experience work · EvolutionCo team",
    status: "Delivered · EvolutionCo",
    description: "The showroom experience, accessible from anywhere.",
    text: "Virtual Innoval extends Legrand’s product world into an immersive 3D showroom. Visitors can explore a space, discover products in context and move from browsing to a more informed conversation.",
    focus:
      "The digital journey between spatial exploration and product understanding, within the broader Legrand experience ecosystem.",
    context:
      "A collaborative EvolutionCo project documented as delivered in the April 2026 case-study deck. The gallery uses the original showroom capture and experience-strategy material.",
    cover: img("innoval-room"),
    logo: img("legrand-logo"),
    url: "https://virtualinnoval.legrand.co.in/",
    link: "Enter Virtual Innoval",
    steps: [
      "Enter the space",
      "Explore the showroom",
      "Discover products",
      "Continue the conversation",
    ],
    gallery: [
      {
        image: img("innoval-room"),
        caption: "Virtual Innoval · the 3D showroom",
      },
      {
        image: img("innoval-slide-1"),
        caption:
          "Virtual Innoval · an immersive product experience in a digital realm",
      },
      {
        image: img("innoval-slide-2"),
        caption:
          "Virtual Innoval · opportunities for interacting with products virtually",
      },
      {
        image: img("innoval-slide-3"),
        caption:
          "Virtual Innoval · proposed strategy, features and functionality",
      },
    ],
  },
  riyadh: {
    name: "Legrand Riyadh",
    tag: "Experience centre",
    color: "blue",
    role: "Experience concept & solution definition",
    status: "Experience-centre concept · Legrand KSA",
    description: "A product world you can walk through.",
    text: "An experience-centre concept for Legrand KSA in Riyadh, translating a product and brand story into a physical visitor journey. The work moved from scope and requirements into a zoned spatial concept: what a visitor meets first, how products are demonstrated, where heritage and legacy sit, and how a concierge experience carries the conversation forward.",
    focus:
      "Visitor journey, zoning, screen and hardware placement, content behaviour, interaction concepts and scope definition, working with the design and solution teams.",
    context:
      "Concept and proposal work for Legrand KSA, covering scope, visitor journeys and a zoned experience-centre design. The visuals below are design concepts, not photographs of a built installation.",
    cover: img("legrand-riyadh-zone-a"),
    logo: img("legrand-logo"),
    steps: [
      "Arrive and orient",
      "Explore the products",
      "Understand the legacy",
      "Continue with a concierge",
    ],
    gallery: [
      {
        image: img("legrand-riyadh-zone-a"),
        caption: "Riyadh experience centre · Zone A concept",
      },
      {
        image: img("legrand-riyadh-zone-b"),
        caption: "Riyadh experience centre · Zone B concept",
      },
      {
        image: img("legrand-riyadh-zone-c"),
        caption: "Riyadh experience centre · Zone C concept",
      },
      {
        image: img("legrand-riyadh-zone-d"),
        caption: "Riyadh experience centre · Zone D concept",
      },
    ],
  },
  trainai: {
    name: "TrainAI",
    tag: "Enterprise AI learning",
    color: "purple",
    role: "Product strategy & solution architecture",
    status: "AI product · EvolutionCo",
    description: "Turning organisational knowledge into workforce readiness.",
    text: "I architected an AI learning platform connecting content ingestion, OCR, retrieval, model orchestration, course assembly, avatar and voice delivery, assessments and analytics. The product follows knowledge all the way from raw material to a role-based learning experience.",
    focus:
      "Product definition, RAG and orchestration architecture, role-based workflows, governance, review and publishing, provider evaluation and cost-metering models.",
    context:
      "Part of my AI product leadership at EvolutionCo, translating strategy into roadmaps, backlogs, benchmarks, QA and demonstrations with development and business analysis.",
    cover: img("trainai-learner-v2"),
    logo: img("trainai-logo"),
    url: "https://trainai.evolutionco.co.in/",
    link: "Explore TrainAI (staging)",
    steps: [
      "Ingest knowledge",
      "Assemble a course",
      "Review and publish",
      "Learn and measure",
    ],
    gallery: [
      {
        image: img("trainai-learner-v2"),
        caption: "TrainAI · learner workspace, readiness and assigned learning",
      },
      {
        image: img("trainai-lesson"),
        caption:
          "TrainAI · live lesson with generated visuals and an avatar trainer",
      },
      {
        image: img("trainai-create"),
        caption: "TrainAI · course-creation walkthrough",
      },
    ],
  },
  xfactorz: {
    name: "Xfactorz",
    tag: "AI & spatial experiences",
    color: "purple",
    role: "Product & solution strategy",
    status: "Concierge, Holobox & avatar ecosystem",
    description: "Useful conversations, across screens and physical spaces.",
    text: "Product and go-to-market strategy for an intelligent-experience ecosystem spanning AI concierge, Holobox and tangible devices. I connect knowledge, conversational journeys, centralised content control, analytics and multi-location deployment models.",
    focus:
      "Conversational experience flows, system design, vendor and device evaluation, operating models, proposals and pilot planning.",
    context:
      "The gallery is the Xfactorz proposition itself — the device family, the concierge and self-service patterns, information hubs and heritage storytelling — followed by the applied Legrand training-agent workstream, which was ongoing in April 2026.",
    cover: img("xfz-hardware"),
    logo: img("xfactorz-logo"),
    url: "https://xfactorz.evolutionco.co.in/",
    link: "Explore Xfactorz",
    steps: [
      "Ask naturally",
      "Retrieve relevant knowledge",
      "Respond through an avatar",
      "Guide the next action",
    ],
    gallery: [
      {
        image: img("xfz-hardware"),
        caption:
          "Xfactorz · one hardware and software family: Holobox, HoloSign, tangible table, display robot, video wall and VR pods",
      },
      {
        image: img("xfz-concierge"),
        caption: "Xfactorz · humanised support through bilingual AI concierges",
      },
      {
        image: img("xfz-selfservice"),
        caption:
          "Xfactorz · self-service experiences across kiosks and displays",
      },
      {
        image: img("xfz-hubs"),
        caption: "Xfactorz · intelligent information hubs for smart spaces",
      },
      {
        image: img("xfz-heritage"),
        caption:
          "Xfactorz · bringing heritage to life for museums and cultural sites",
      },
      {
        image: img("legrand-holobox"),
        caption: "Legrand · Holobox advisor, an applied client workstream",
      },
      {
        image: img("legrand-avatar"),
        caption: "Legrand · agentic training experience interface",
      },
    ],
  },
  amplifier: {
    name: "PBLSH",
    tag: "AI publishing SaaS",
    color: "terracotta",
    role: "Product owner & SaaS strategy",
    status: "Portfolio Amplifier · EvolutionCo",
    description: "Giving completed work a life beyond the project folder.",
    text: "An AI publishing workflow that turns raw project assets into case studies, carousels, videos and channel-ready content. I shaped the product from intake and generation through refinement, publishing and ongoing workspace use.",
    focus:
      "Workspaces, multi-format ingestion, generation and refinement journeys, versioning, publishing, usage limits and billing.",
    context:
      "Portfolio Amplifier is branded PBLSH on the public product website. The preview shows the product’s website artwork.",
    cover: img("pblsh-hero"),
    url: "https://ai.pf.evolutionco.co.in/",
    link: "Explore PBLSH",
    steps: [
      "Add the work",
      "Generate the content",
      "Refine the story",
      "Publish across channels",
    ],
    gallery: [
      {
        image: img("pblsh-hero"),
        caption: "PBLSH · current product website imagery",
      },
    ],
  },
  physio: {
    name: "PhysioByRutvi",
    tag: "Brand, product & growth",
    color: "green",
    role: "Co-founder · product, brand & growth",
    status: "Independent business · Mumbai",
    description: "Building the digital side of care that comes home.",
    text: "As co-founder, I work on the product, brand, growth and digital systems behind a Mumbai home-physiotherapy business. The website connects service discovery, local search and a practical enquiry journey for patients and their families.",
    focus:
      "Website architecture, service journeys, multilingual experience, SEO, booking and lead-generation workflows.",
    context:
      "Clinical care is led by Dr Rutvi K Gandhi (PT). My contribution centres on the business’s product, brand, growth and digital experience.",
    cover: img("physio-hero"),
    logo: img("physio-logo"),
    url: "https://physiobyrutvi.in/",
    link: "Visit PhysioByRutvi",
    steps: [
      "Find relevant care",
      "Check the service area",
      "Start an enquiry",
      "Coordinate a home visit",
    ],
    gallery: [
      {
        image: img("physio-hero"),
        caption: "PhysioByRutvi · imagery from the live website",
      },
    ],
  },
};
