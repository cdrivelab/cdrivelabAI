export const CATEGORIES = [
  { id: "all", label: "Everything", blurb: "All 10 services" },
  { id: "strategy", label: "Strategy", blurb: "Find the opportunity" },
  { id: "build", label: "Build", blurb: "Gen AI, agents, products" },
  { id: "automate", label: "Automate", blurb: "Workflows & integration" },
  { id: "understand", label: "Understand", blurb: "Data, knowledge, chat" },
  { id: "govern", label: "Govern", blurb: "Deploy it responsibly" },
];

export const SERVICES = [
  {
    id: "strategy",
    slug: "ai-strategy-consulting",
    number: "01",
    category: "strategy",
    icon: "compass",
    name: "AI Strategy & Consulting",
    tagline: "Find the highest-leverage AI opportunity before you build anything.",
    shortDescription:
      "Turn business priorities into an actionable AI roadmap with readiness, opportunity assessment and proof-of-concept planning.",
    tags: ["AI Roadmap", "Readiness", "PoC"],
    detail: {
      intro:
        "We help businesses identify practical AI opportunities, assess readiness, and build a clear implementation roadmap grounded in outcomes, not hype.",
      deliverables: [
        "AI Strategy Consulting",
        "AI Readiness Assessment",
        "AI Opportunity Assessment",
        "AI Roadmap & Implementation Planning",
        "AI Business Consulting",
        "AI Proof of Concept (PoC)",
      ],
      relatedServices: ["genai", "agents"],
    },
  },
  {
    id: "genai",
    slug: "generative-ai-development",
    number: "02",
    category: "build",
    icon: "sparkle",
    name: "Custom & Generative AI Development",
    tagline: "Applications built on modern LLMs — not a chatbot bolted onto your homepage.",
    shortDescription:
      "Build LLM applications, copilots, assistants and multimodal experiences around real business workflows.",
    tags: ["LLM Apps", "Copilots", "Multimodal"],
    detail: {
      intro:
        "We design and build custom applications powered by today's large language models — from AI copilots to fully multimodal products.",
      deliverables: [
        "Generative AI Development",
        "LLM Application Development",
        "AI Copilots",
        "Custom AI Assistants",
        "AI Content Systems",
        "Multimodal AI Applications",
        "OpenAI / Claude / Gemini Integration",
      ],
      relatedServices: ["agents", "products"],
    },
  },
  {
    id: "agents",
    slug: "ai-agent-development",
    number: "03",
    category: "build",
    icon: "network",
    name: "AI Agent & Agentic AI Development",
    tagline: "Agents that use tools, touch your data, and finish the task.",
    shortDescription:
      "Design AI agents that reason over tasks, use tools, access business data and execute defined workflows with human oversight.",
    tags: ["Agentic AI", "Multi-agent", "Copilots"],
    detail: {
      intro:
        "We build AI agents that understand a task, use tools, access business data, and execute defined workflows — with the right human oversight built in.",
      deliverables: [
        "AI Agent Development",
        "Autonomous AI Agents",
        "AI Agent Workflows",
        "Multi-Agent Systems",
        "AI Customer Service Agents",
        "AI Sales Agents",
        "AI Research Agents",
        "AI Operations Agents",
      ],
      relatedServices: ["genai", "automation"],
    },
  },
  {
    id: "automation",
    slug: "ai-workflow-automation",
    number: "04",
    category: "automate",
    icon: "loop",
    name: "AI Workflow & Business Automation",
    tagline: "We automate the workflow, not just the demo.",
    shortDescription:
      "Automate repetitive operations across CRM, ERP, email, documents, leads and internal workflows using AI and APIs.",
    tags: ["RPA", "n8n", "CRM"],
    detail: {
      intro:
        "We connect AI, APIs, and intelligent agents to automate the repetitive business processes actually slowing your team down.",
      deliverables: [
        "AI Workflow Automation",
        "Business Process Automation",
        "Intelligent Process Automation",
        "AI-Powered RPA",
        "n8n AI Automation",
        "CRM Automation",
        "ERP Automation",
        "Document Automation",
        "Lead Automation",
      ],
      relatedServices: ["integration", "agents"],
    },
  },
  {
    id: "integration",
    slug: "ai-integration-api-engineering",
    number: "05",
    category: "automate",
    icon: "plug",
    name: "AI Integration & API Engineering",
    tagline: "AI connected to what you already use — not one more silo.",
    shortDescription:
      "Connect AI capabilities to the software your teams already use instead of creating another isolated application.",
    tags: ["APIs", "ERP", "CRM"],
    detail: {
      intro:
        "Most businesses don't need another isolated AI tool. They need AI wired directly into the CRM, ERP, and platforms already running the business.",
      deliverables: [
        "AI API Integration",
        "CRM AI Integration",
        "ERP AI Integration",
        "Slack AI Integration",
        "Microsoft Teams AI",
        "Google Workspace AI",
        "Salesforce AI Integration",
        "HubSpot AI Integration",
        "Custom AI Integrations",
      ],
      relatedServices: ["automation", "rag"],
    },
  },
  {
    id: "rag",
    slug: "rag-enterprise-knowledge-ai",
    number: "06",
    category: "understand",
    icon: "documentSearch",
    name: "RAG & Enterprise Knowledge AI",
    tagline: "Turn your PDFs, SOPs and databases into something you can actually ask questions to.",
    shortDescription:
      "Transform documents, SOPs, contracts, product knowledge and databases into searchable private AI knowledge systems.",
    tags: ["RAG", "Vector DB", "Semantic Search"],
    detail: {
      intro:
        "We turn scattered internal documents, knowledge bases, and databases into a private, searchable AI knowledge system your team can query directly.",
      deliverables: [
        "RAG Development",
        "Enterprise Knowledge Base",
        "AI Document Search",
        "Private AI Assistants",
        "Semantic Search",
        "Vector Database Development",
        "Internal Knowledge Copilots",
      ],
      relatedServices: ["data", "chatvoice"],
    },
  },
  {
    id: "data",
    slug: "ai-data-analytics",
    number: "07",
    category: "understand",
    icon: "barChart",
    name: "AI Data Analytics & Predictive AI",
    tagline: "From raw data to a decision, faster.",
    shortDescription:
      "Use analytics, forecasting, classification and decision intelligence to turn business data into useful action.",
    tags: ["Forecasting", "BI", "Prediction"],
    detail: {
      intro:
        "We build the analytics and forecasting layer that turns operational data into predictions, recommendations, and decisions your team can act on.",
      deliverables: [
        "AI Data Analytics",
        "Predictive Analytics",
        "Business Intelligence",
        "AI Forecasting",
        "Customer Analytics",
        "Recommendation Systems",
        "AI Reporting",
        "AI Decision Support",
      ],
      relatedServices: ["rag", "chatvoice"],
    },
  },
  {
    id: "chatvoice",
    slug: "ai-chatbot-voice-ai",
    number: "08",
    category: "understand",
    icon: "chatWave",
    name: "AI Chatbot & Voice AI Development",
    tagline: "Conversational AI that qualifies, books, and supports — on chat or by voice.",
    shortDescription:
      "Build customer support, sales, lead qualification, appointment and voice experiences that go beyond simple scripted bots.",
    tags: ["Chatbots", "Voice AI", "RAG"],
    detail: {
      intro:
        "Business-focused conversational AI — from RAG-powered support chatbots to voice agents that can answer the phone.",
      deliverables: [
        "AI Customer Support Chatbots",
        "AI Sales Chatbots",
        "RAG Chatbots",
        "WhatsApp AI Chatbots",
        "Voice AI Agents",
        "AI Phone Agents",
        "AI Lead Qualification",
        "AI Appointment Assistants",
      ],
      relatedServices: ["rag", "agents"],
    },
  },
  {
    id: "products",
    slug: "ai-saas-product-development",
    number: "09",
    category: "build",
    icon: "rocket",
    name: "AI SaaS & Product Development",
    tagline: "We don't just consult. We build the product.",
    shortDescription:
      "Go from concept to MVP and production AI product engineering with a focus on usable systems and scalable architecture.",
    tags: ["AI SaaS", "MVP", "Product"],
    detail: {
      intro:
        "Full-stack AI product engineering — from MVP to a production system your team can scale.",
      deliverables: [
        "AI MVP Development",
        "AI SaaS Development",
        "AI Product Engineering",
        "AI Platform Development",
        "Production AI Systems",
        "AI Product Scaling",
      ],
      relatedServices: ["genai", "agents"],
    },
  },
  {
    id: "governance",
    slug: "ai-governance-responsible-ai",
    number: "10",
    category: "govern",
    icon: "shield",
    name: "AI Governance & Responsible AI",
    tagline: "Deploy AI your business can actually stand behind.",
    shortDescription:
      "Build practical governance around risk, documentation, transparency, human oversight, security and responsible deployment.",
    tags: ["AI Risk", "Governance", "Oversight"],
    detail: {
      intro:
        "As AI regulation matures, governance is becoming a practical implementation concern, not just legal theory.",
      deliverables: [
        "AI Governance Consulting",
        "Responsible AI",
        "AI Risk Assessment",
        "AI Compliance Readiness",
        "AI System Documentation",
        "Human Oversight",
        "AI Security Assessment",
        "AI Data Governance",
      ],
      disclaimer:
        "We advise on governance and compliance readiness — we're not a law firm, and this isn't legal advice.",
      relatedServices: ["integration", "automation"],
    },
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
export const getServiceById = (id) => SERVICES.find((s) => s.id === id);