export const siteConfig = {
  name: "C-DriveLab",
  tagline: "Real Intelligence for Real Business",
  location: "Bhubaneswar, Odisha, India",
  email: "cdrivelab@gmail.com",
  /*
    Where the contact form sends enquiries.

    A static site has no server, so it cannot send email on its own — it
    needs a form service. While this is empty the form falls back to opening
    the visitor's mail client and showing the message to copy, which is a
    workaround, not a substitute: enquiries are not recorded anywhere.

    To turn it on, pick one and fill both fields below.

      Web3Forms   https://web3forms.com  (no account; email yourself a key)
        contactEndpoint: "https://api.web3forms.com/submit"
        contactEndpointFields: { access_key: "YOUR-ACCESS-KEY" }

      Formspree   https://formspree.io   (free tier: 50 submissions/month)
        contactEndpoint: "https://formspree.io/f/YOUR-FORM-ID"
        contactEndpointFields: {}

    Either accepts a JSON POST of { name, email, company, topic, message }
    and emails it on to the address you register. No other code changes.
  */
  contactEndpoint: "",
  contactEndpointFields: {},
  footerBlurb:
    "We help businesses put AI to work as real infrastructure — consulting, automation, and agentic systems built for outcomes you can measure.",
};

/** Every CTA on the site points here. */
export const CONTACT_HREF = "/contact";

export const contactPage = {
  kicker: "Contact",
  heading: "Tell us what you're trying to fix.",
  body: "Send us a short note about the problem and we'll come back with an honest read on whether AI helps — and what it would take. No obligation, no sales sequence.",
  topics: [
    "AI Strategy & Consulting",
    "Process Automation",
    "Agentic Systems",
    "Data & Analytics",
    "Product Development",
    "Something else",
  ],
  responseNote: "We usually reply within two working days.",
};




export const navLinks = [
  {
    label: "Home",
    href: "/",
    dropdown: [
      { label: "Overview", href: "/" },
      { label: "Highlights", href: "#bento" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "#blog" },
  {
    label: "Pages",
    href: "#faq",
    dropdown: [
      { label: "How It Works", href: "#process" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const offCanvasLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "#blog" },
  { label: "How It Works", href: "#process" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact Us", href: "/contact" },
];
export const partnerLogos = [
  "Ridgeline",
  "Bluepeak",
  "Anchorpoint",
  "Foundry & Co",
  "Meridian",
  "Harborline",
  "Northstar",
  "Odisha Foundry",
];

export const heroBento = {
  stat: { value: 120, label: "AI Projects Delivered" },
  visual: { label: "Live automation pipeline" },
  quote: {
    initials: ["JR", "MK", "TS", "AL"],
    text: "They shipped something our team actually kept using after go-live.",
  },
  video: { label: ["Always-on AI agents,", "working past office hours"] },
};

export const services = [
  {
    title: "AI Strategy & Consulting",
    description: "We map your workflows, surface high-leverage automation opportunities, and build a practical AI roadmap.",
  },
  {
    title: "Process Automation",
    description: "We turn repetitive manual work into reliable, self-running pipelines that scale with your team.",
  },
  {
    title: "Agentic Systems",
    description: "Multi-step AI agents that plan, use tools, and complete real tasks — not just chat.",
  },
  {
    title: "Custom Model Training",
    description: "Models fine-tuned on your own data, deployed securely, and monitored after launch.",
  },
  {
    title: "Product Development",
    description: "Full-stack AI product builds — from prototype to a production-ready release.",
  },
  {
    title: "Ongoing Support",
    description: "Monitoring, retraining, and iteration, so your systems keep improving after we ship.",
  },
];

export const processSteps = [
  { num: "01", title: "Discover", description: "We audit your workflows and find where AI creates the most leverage." },
  { num: "02", title: "Design", description: "A tailored architecture and roadmap, scoped to your team and timeline." },
  { num: "03", title: "Build", description: "We ship iteratively, with regular demos and a tight feedback loop." },
  { num: "04", title: "Scale", description: "We monitor, retrain, and expand the system as your business grows." },
];

export const stats = [
  { value: 40, label: "Clients Served" },
  { value: 120, label: "Projects Delivered" },
  { value: 99, label: "% Uptime" },
  { value: 5, label: "Years in AI" },
];

export const testimonials = [
  { initials: "JR", name: "Jamie Ross", role: "COO, Ridgeline", text: "They rebuilt our support workflow around AI agents — response times dropped noticeably within weeks." },
  { initials: "MK", name: "Maya Khan", role: "Head of Ops, Bluepeak", text: "The agentic system they built now handles a third of our ticket volume end-to-end, no human touch." },
  { initials: "TS", name: "Theo Silva", role: "Founder, Foundry & Co", text: "What impressed me most was how measurable everything was — every automation had a clear before/after." },
  { initials: "AL", name: "Anya Lindt", role: "VP Product, Anchorpoint", text: "They didn't just ship a model, they shipped a system our team can actually run and improve." },
  { initials: "DP", name: "Devon Park", role: "CTO, Meridian", text: "Fast, pragmatic, and refreshingly honest about what AI could and couldn't solve for us." },
  { initials: "RL", name: "Rae Lin", role: "Ops Lead, Harborline", text: "Onboarding our team onto the new agent workflows took two days. It just made sense." },
];

export const blogPosts = [
  { tag: "Strategy", title: "How to prioritize your first AI use case", excerpt: "A practical framework for finding the highest-leverage automation opportunities first.", meta: "Aug 02, 2026 · 6 min read" },
  { tag: "Agents", title: "Agents vs. chatbots: what's actually different", excerpt: "Moving from single-turn responses to multi-step, tool-using AI agents.", meta: "Jul 21, 2026 · 5 min read" },
  { tag: "Ops", title: "Automating support without losing the human touch", excerpt: "How to deploy AI in customer-facing workflows responsibly and effectively.", meta: "Jul 09, 2026 · 7 min read" },
  { tag: "Training", title: "When fine-tuning is worth it (and when it isn't)", excerpt: "A decision guide for choosing between prompting and custom model training.", meta: "Jun 30, 2026 · 8 min read" },
];

export const faqs = [
  { q: "What does working with C-DriveLab actually look like?", a: "We start with a short discovery call, then scope a roadmap within a week. Most engagements move from kickoff to a working prototype in 3–4 weeks." },
  { q: "Will this work with the tools we already use?", a: "Yes — we design AI systems to plug into your current stack rather than replace it, using APIs, webhooks, and existing data sources wherever possible." },
  { q: "How is pricing structured?", a: "Projects are scoped and quoted upfront after discovery. Ongoing support is available on a monthly retainer once a system is live." },
  { q: "What industries have you worked in?", a: "We've shipped AI systems across support, operations, logistics, and manufacturing — the approach adapts to most data-driven workflows." },
  { q: "Can our team maintain it after you leave?", a: "Yes — every build includes documentation and a handover session, and we offer ongoing training for teams who want to manage systems in-house." },
];

export const footerColumns = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Consulting", href: "/services/ai-strategy-consulting" },
    { label: "Automation", href: "/services/ai-workflow-automation" },
    { label: "Agentic Systems", href: "/services/ai-agent-development" },
    { label: "All Services", href: "/services" },
  ],
};
/* --- About page content --- */




export const approachCards = [
  {
    title: "Industry Expertise",
    description: "Our team brings cross-industry experience in consulting, automation, and product engineering to every project.",
  },
  {
    title: "Tailored AI Solutions",
    description: "Every engagement is scoped around your workflows and goals — never a one-size-fits-all template.",
  },
];

export const approachStats = [
  { value: 120, label: "AI Projects" },
  { value: 40, label: "Businesses Served" },
  { value: 15, label: "Team Specialists" },
];

export const aboutIntro = {
  kicker: "About Our Agency",
  heading: "Transforming Bhubaneswar businesses with practical AI, automation, and honest engineering.",
  bigStat: { value: 50, label: "AI Specialists & Engineers" },
  missionLead: "To give businesses AI that earns its place in day-to-day operations, not a proof-of-concept that gets shelved.",
  body: "We're a Bhubaneswar-based team dedicated to helping businesses unlock the practical potential of artificial intelligence. Our goal is simple — to turn real operational problems into smart, scalable solutions that deliver outcomes you can measure.",
  ctaLabel: "Start a Conversation",
  secondStat: { value: 40, label: "Businesses We've Worked With", initials: ["JR", "MK", "TS", "AL"] },
};

export const coreFeatures = [
  {
    title: "Intelligent Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce manual effort.",
    tags: ["Cost Reduction", "Data Insights", "Scalable Systems"],
  },
  {
    title: "Advanced Data Analytics",
    description: "Turn complex data into clear insights for better business decisions.",
    variant: "highlight",
    hasLink: true,
  },
  {
    title: "Seamless Integration",
    description: "We integrate AI solutions into the systems you already run, not around them.",
    variant: "tall",
    hasLink: true,
  },
  {
    title: "Smart Chatbots",
    description: "Provide instant, always-on customer support with intelligent AI chatbot systems.",
    variant: "wide",
    avatars: ["JR", "MK", "TS"],
    badgeCount: "27+",
  },
];

export const faqStat = { value: 99, label: "Client Satisfaction Rate" };
export const analysis = {
  kicker: "Data-Driven Insights",
  heading: "AI-driven analysis for better strategic planning",
  body: "Our analysis work helps businesses turn operational data into decisions that hold up — using practical, right-sized AI rather than analytics theatre.",
  checklist: [
    "Real-time insights for smarter day-to-day decisions",
    "AI-powered analytics that shorten the path to growth",
    "Predictive signals that support better strategic planning",
  ],
  stat: { value: 99, label: "% Data Accuracy Rate" },
};

export const whyChooseUs = [
  {
    title: "Expert Team",
    description: "AI engineers and consultants bring deep technical knowledge and cross-industry expertise to every engagement.",
  },
  {
    title: "Data-Driven Approach",
    description: "Every recommendation is grounded in real data, not guesswork, so decisions are backed by evidence from day one.",
  },
  {
    title: "Custom Solutions",
    description: "No off-the-shelf templates — every system is architected around your specific workflows and goals.",
  },
  {
    title: "Fast Delivery",
    description: "Iterative sprints and regular demos mean you see working AI in weeks, not quarters.",
  },
];

export const highlightBand = {
  heading: "Unlock growth with practical AI",
  body: "We help businesses unlock the practical value of artificial intelligence through solutions built to earn their place in daily operations.",
  pills: ["AI Automation", "Data Analytics", "Agentic Systems"],
};

export const teamMembers = [
  { initials: "PM", name: "Pranjal Mahapatra", role: "AI Solutions Architect" },
  { initials: "AS", name: "Ananya Sahoo", role: "Data Scientist" },
  { initials: "RN", name: "Rohit Nayak", role: "AI Engineer" },
];

export const aboutFaqs = [
  { q: "What AI services do you offer?", a: "End-to-end AI services — from strategy and custom model work to agentic systems, data analytics, and workflow automation — tailored to your business." },
  { q: "How can AI benefit my business?", a: "AI can cut manual work, surface insights hidden in your data, and free your team to focus on higher-value work. Most clients see measurable time or cost savings within the first few months." },
  { q: "Do I need technical knowledge to use AI?", a: "No. We handle the technical build and hand over systems your team can operate through simple dashboards and clear documentation." },
  { q: "How long does it take to build an AI solution?", a: "Most projects move from kickoff to a working prototype in 3–4 weeks, with full deployment typically following within 6–10 weeks depending on scope." },
  { q: "Can AI solutions be customized for my business?", a: "Yes — every solution we build is scoped around your specific workflows, data, and goals rather than a generic template." },
];

export const aboutTestimonials = [
  { initials: "DR", name: "Darlene Robertson", role: "President of Sales", text: "Their team understood our business challenges and delivered an AI solution that exceeded our expectations. The results were immediate." },
  { initials: "DS", name: "Darrell Steward", role: "Operations Director", text: "They were pragmatic from day one — telling us honestly where AI would and wouldn't help before we spent a rupee." },
  { initials: "CW", name: "Cameron Williamson", role: "Founder", text: "Fast, clear communication, and a system our own team can actually run without calling them every week." },
];