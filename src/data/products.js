/*
  Single source of truth for the Products page and the two product detail
  pages. All copy here comes from the Products brief — keep edits in this
  file rather than inside components.
*/

export const productsHero = {
  eyebrow: "Products by C-Drive Lab",
  headingLead: "We build",
  headingAccent: "products",
  headingTail: "around real problems.",
  sub: "From AI-powered Agile automation to on-demand service platforms, C-Drive Lab turns operational challenges into scalable digital products.",
  scrollCue: "Explore what we've built",
  side: {
    title: ["Not just software.", "Products with a purpose."],
    body: "Our products combine product engineering, automation and real-world operational insight to create technology people can actually use.",
  },
};

export const scrumPilot = {
  id: "scrumpilot",
  slug: "scrumpilot",
  route: "/products/scrumpilot",
  externalUrl: "https://scrumpilot.online/",
  sectionLabel: "01 / Featured Product",
  cardLabel: "01 — FEATURED",
  nameLead: "Scrum",
  nameAccent: "Pilot",
  name: "ScrumPilot",
  kicker: "Your AI Scrum Master for Smarter Agile Teams.",
  // Short form used on the Products index card.
  description:
    "Turn Scrum ceremonies into structured actions, decisions and Jira/Linear tickets with AI-powered meeting intelligence. ScrumPilot helps Agile teams spend less time documenting meetings and more time delivering work.",
  // Long form used on the detail page.
  descriptionLong:
    "Turn Scrum ceremonies into structured actions, decisions and Jira/Linear tickets with AI-powered meeting intelligence. ScrumPilot helps Agile teams spend less time documenting meetings and more time delivering work — built for modern software teams across India, the UK and Europe.",
  features: [
    "AI Scrum Master",
    "Meeting Intelligence",
    "Jira",
    "Linear",
    "Agile Analytics",
    "Sprint Health Reports",
  ],
  whoLabel: "Who is it for",
  audience: [
    "Scrum Masters",
    "Product Owners",
    "Engineering Managers",
    "Developers",
    "QA Teams",
    "Business Stakeholders",
  ],
  status: "Built for modern Agile teams",
  ctaLabel: "Explore ScrumPilot",
  dashboard: {
    title: "ScrumPilot · Sprint Intelligence",
    heading: "Sprint Overview",
    sub: "AI-powered delivery intelligence",
    metrics: [
      { label: "Velocity", value: "42" },
      { label: "Completion", value: "87%" },
      { label: "Health", value: "Good" },
    ],
    bars: [35, 55, 44, 75, 63, 88],
  },
};

export const available24 = {
  id: "available24",
  slug: "available24",
  route: "/products/available24",
  externalUrl: "https://available24.in/",
  sectionLabel: "02 / Product Platform",
  label: "Available24",
  name: "Available24",
  titleLines: ["One Platform.", "Every Service."],
  description:
    "Available24 is a technology-driven service marketplace designed to connect customers with verified service professionals for everyday home and personal services.",
  descriptionLong:
    "A technology-driven service marketplace connecting customers, verified service professionals and operations through one connected digital experience — built for the Indian market, starting with Bhubaneswar and Cuttack.",
  categories: [
    "AC Services",
    "Cleaning",
    "Plumbing",
    "Electrical Work",
    "Appliance Repair",
    "Car Wash",
    "Salon",
    "Other Local Services",
  ],
  stats: [
    { value: "500+", label: "Service Providers" },
    { value: "50+", label: "Daily Bookings" },
    { value: "10+", label: "Service Categories" },
    { value: "2", label: "Cities Served" },
  ],
  ctaLabel: "Explore Available24",
  app: {
    logo: "AVAILABLE24",
    headline: ["What do you", "need today?"],
    services: [
      { name: "AC Service", note: "Fast & reliable" },
      { name: "Cleaning", note: "Verified experts" },
      { name: "Plumbing", note: "Book a pro" },
      { name: "Electrician", note: "On demand" },
    ],
    statusCard: {
      label: "Service Status",
      state: "Provider assigned",
      note: "Real-time operations",
    },
  },
};

export const otherProducts = {
  eyebrow: "03 / Product portfolio",
  headingLines: ["Other products", "we've built."],
  body: "A selection of platforms and applications demonstrating our experience across enterprise software, data and collaboration — not our current focus, but part of how we build.",
  items: [
    {
      index: "03.01",
      icon: "◎",
      name: "Employee Management System",
      description:
        "Role-based employee, attendance, category and asset management for organized workplaces.",
      tech: "REACT · NODE.JS · DATABASE",
      note: "Internal product",
    },
    {
      index: "03.02",
      icon: "◇",
      name: "Snowflake Metadata Management",
      description:
        "Metadata search, configuration and task management for Snowflake environments.",
      tech: "REACT · EXPRESS · SNOWFLAKE",
      note: "Internal product",
    },
    {
      index: "03.03",
      icon: "□",
      name: "Doc & Draw",
      description:
        "A collaborative workspace combining document editing and shared whiteboard experiences.",
      tech: "NEXT.JS · REACT · TYPESCRIPT",
      note: "Internal product",
    },
    {
      index: "03.04",
      icon: "✦",
      name: "Mind Flow",
      description:
        "A visual workspace designed to help users organize ideas and think through complex problems.",
      tech: "PRODUCT · WEB APP",
      note: "Internal product",
    },
  ],
};

export const productsCta = {
  eyebrow: "Build something meaningful",
  headingLines: ["Have a problem", "worth solving?"],
  body: "Let's turn the challenge into a product, platform or intelligent system built for real-world impact.",
  ctaLabel: "Start a Conversation",
  email: "cdrivelab@gmail.com",
};

export const FEATURED_PRODUCTS = [scrumPilot, available24];

export const getProductBySlug = (slug) =>
  FEATURED_PRODUCTS.find((product) => product.slug === slug);
