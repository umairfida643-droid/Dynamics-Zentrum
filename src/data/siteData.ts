export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  iconName?: string;
  fullDesc?: string;
  deliverables?: string[];
}

export interface SolutionItem {
  slug: string;
  title: string;
  summary: string;
  iconName?: string;
  capabilities?: string[];
}

export interface IndustryItem {
  slug: string;
  title: string;
  summary: string;
  code: string;
  compliance?: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    "slug": "consulting",
    "title": "Strategic Consulting",
    "summary": "Roadmaps and architecture for enterprise transformation."
  },
  {
    "slug": "implementation",
    "title": "Implementation",
    "summary": "Full-lifecycle Dynamics 365 deployments, on time and on budget."
  },
  {
    "slug": "migration",
    "title": "Migration",
    "summary": "Zero-downtime migration from legacy ERP/CRM to modern D365."
  },
  {
    "slug": "upgrade",
    "title": "Upgrades",
    "summary": "Version upgrades with regression testing and change management."
  },
  {
    "slug": "support",
    "title": "Support",
    "summary": "24/7 SLA-backed L1\u2013L3 support across the Microsoft stack."
  },
  {
    "slug": "managed-services",
    "title": "Managed Services",
    "summary": "Fully managed Dynamics operations with predictable pricing."
  },
  {
    "slug": "training",
    "title": "Training",
    "summary": "Role-based enablement for admins, super users and executives."
  },
  {
    "slug": "erp-audit",
    "title": "ERP Audit",
    "summary": "Health checks, licence review and optimisation recommendations."
  },
  {
    "slug": "business-intelligence",
    "title": "Business Intelligence",
    "summary": "Unified analytics powered by Fabric and Power BI."
  },
  {
    "slug": "power-platform",
    "title": "Power Platform",
    "summary": "Low-code apps, automations and copilots for your teams."
  },
  {
    "slug": "power-bi",
    "title": "Power BI",
    "summary": "Executive dashboards and self-serve reporting at scale."
  },
  {
    "slug": "power-apps",
    "title": "Power Apps",
    "summary": "Custom line-of-business apps built on Dataverse."
  },
  {
    "slug": "power-automate",
    "title": "Power Automate",
    "summary": "Process automation across Microsoft 365 and third parties."
  },
  {
    "slug": "azure-integration",
    "title": "Azure Integration",
    "summary": "Event-driven integrations with Azure Integration Services."
  },
  {
    "slug": "ai-consulting",
    "title": "AI Consulting",
    "summary": "AI strategy, use-case discovery and responsible AI programmes."
  },
  {
    "slug": "microsoft-copilot",
    "title": "Microsoft Copilot",
    "summary": "Copilot rollout, prompt engineering and adoption."
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    "slug": "business-central",
    "title": "Dynamics 365 Business Central",
    "summary": "All-in-one ERP for growing mid-market organisations."
  },
  {
    "slug": "finance",
    "title": "Dynamics 365 Finance",
    "summary": "Global finance, treasury and compliance at enterprise scale."
  },
  {
    "slug": "supply-chain",
    "title": "Dynamics 365 Supply Chain",
    "summary": "Resilient, AI-driven supply chain and manufacturing."
  },
  {
    "slug": "sales",
    "title": "Dynamics 365 Sales",
    "summary": "Pipeline intelligence and Copilot-assisted selling."
  },
  {
    "slug": "customer-service",
    "title": "Dynamics 365 Customer Service",
    "summary": "Omnichannel service with AI case deflection."
  },
  {
    "slug": "marketing",
    "title": "Dynamics 365 Customer Insights",
    "summary": "Real-time journeys and customer data unification."
  },
  {
    "slug": "field-service",
    "title": "Dynamics 365 Field Service",
    "summary": "Connected field operations and predictive maintenance."
  },
  {
    "slug": "human-resources",
    "title": "Dynamics 365 Human Resources",
    "summary": "Modern HR core, benefits and workforce analytics."
  },
  {
    "slug": "commerce",
    "title": "Dynamics 365 Commerce",
    "summary": "Unified retail across store, e-commerce and back office."
  },
  {
    "slug": "copilot",
    "title": "Microsoft Copilot",
    "summary": "Generative AI woven through the business applications stack."
  },
  {
    "slug": "power-platform",
    "title": "Power Platform",
    "summary": "Fusion team enablement across Apps, Automate, BI and Pages."
  },
  {
    "slug": "azure",
    "title": "Microsoft Azure",
    "summary": "Secure cloud foundation for Dynamics workloads."
  },
  {
    "slug": "fabric",
    "title": "Microsoft Fabric",
    "summary": "Unified data platform for analytics and AI."
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    "slug": "manufacturing",
    "title": "Manufacturing",
    "summary": "Discrete and process manufacturing on D365 SCM.",
    "code": "01"
  },
  {
    "slug": "healthcare",
    "title": "Healthcare",
    "summary": "Patient-centric operations with regulatory rigour.",
    "code": "02"
  },
  {
    "slug": "retail",
    "title": "Retail",
    "summary": "Unified commerce for modern brands.",
    "code": "03"
  },
  {
    "slug": "construction",
    "title": "Construction",
    "summary": "Project-driven finance and field execution.",
    "code": "04"
  },
  {
    "slug": "real-estate",
    "title": "Real Estate",
    "summary": "Portfolio, tenancy and facilities on Dynamics.",
    "code": "05"
  },
  {
    "slug": "education",
    "title": "Education",
    "summary": "Student, staff and finance modernisation.",
    "code": "06"
  },
  {
    "slug": "ngo",
    "title": "NGO & Non-Profit",
    "summary": "Fund accounting, grants and donor engagement.",
    "code": "07"
  },
  {
    "slug": "financial-services",
    "title": "Financial Services",
    "summary": "FCA-aligned finance and client management.",
    "code": "08"
  },
  {
    "slug": "wholesale",
    "title": "Wholesale",
    "summary": "Trade, pricing and inventory at scale.",
    "code": "09"
  },
  {
    "slug": "distribution",
    "title": "Distribution",
    "summary": "Warehousing, logistics and last-mile.",
    "code": "10"
  },
  {
    "slug": "food-beverage",
    "title": "Food & Beverage",
    "summary": "Traceability, quality and compliance.",
    "code": "11"
  },
  {
    "slug": "professional-services",
    "title": "Professional Services",
    "summary": "Projects, resourcing and billing.",
    "code": "12"
  },
  {
    "slug": "logistics",
    "title": "Logistics",
    "summary": "Transport, freight and 3PL operations.",
    "code": "13"
  },
  {
    "slug": "automotive",
    "title": "Automotive",
    "summary": "Dealer management and after-sales.",
    "code": "14"
  },
  {
    "slug": "energy",
    "title": "Energy & Utilities",
    "summary": "Asset-intensive operations and IoT.",
    "code": "15"
  },
  {
    "slug": "public-sector",
    "title": "Public Sector",
    "summary": "Citizen services and grant management.",
    "code": "16"
  }
];

export const COMPANY_METRICS = [
  { target: 500, suffix: "+", label: "Projects Delivered" },
  { target: 14, suffix: "+", label: "Years Experience" },
  { target: 150, suffix: "+", label: "In-house Experts" },
  { target: 98, suffix: "%", label: "Client Retention" }
];

export const TRUST_BADGES = [
  "Microsoft Partner",
  "500+ Projects",
  "14+ Years",
  "150+ Experts",
  "ISO 27001"
];
