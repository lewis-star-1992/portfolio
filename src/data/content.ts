export const profile = {
  name: "D'Mario Lewis",
  title: "Senior Salesforce Engineer",
  subtitle: "Salesforce Technical Architect",
  location: "Muskegon, MI, United States",
  phone: "+1 (248) 340-3582",
  email: "dmario.lewis1992@outlook.com",
  linkedin: "https://www.linkedin.com/in/dmario-lewis/",
  years: "11+",
  summary:
    "Senior Salesforce Engineer and Technical Architect delivering enterprise CRM across consumer services, education, manufacturing, retail, and nonprofit — balancing architecture, automation, integration, and production-ready delivery.",
}

export const clouds = [
  { id: "sales", name: "Sales Cloud", focus: "Pipeline, quoting, account growth" },
  { id: "service", name: "Service Cloud", focus: "Cases, escalation, customer history" },
  { id: "experience", name: "Experience Cloud", focus: "Customer & partner portals" },
  { id: "revenue", name: "Revenue Cloud", focus: "Quote-to-order & recurring revenue" },
  { id: "marketing", name: "Marketing Cloud", focus: "Lifecycle engagement journeys" },
  { id: "commerce", name: "Commerce Cloud", focus: "Digital commerce experiences" },
  { id: "data", name: "Data Cloud", focus: "Customer 360 & segmentation" },
  { id: "health", name: "Health Cloud", focus: "Care & relationship models" },
  { id: "analytics", name: "CRM Analytics", focus: "Executive & operational insight" },
  { id: "field", name: "Field Service", focus: "Scheduling & work management" },
  { id: "mfg", name: "Manufacturing Cloud", focus: "Account planning & demand" },
  { id: "cg", name: "Consumer Goods Cloud", focus: "Territory & distributor ops" },
  { id: "edu", name: "Education Cloud", focus: "Admissions & student lifecycle" },
  { id: "np", name: "Nonprofit Cloud", focus: "Constituents & programs" },
  { id: "platform", name: "Salesforce Platform", focus: "Apex, LWC, governance" },
  { id: "mulesoft", name: "MuleSoft", focus: "Enterprise API integration" },
] as const

export const skillGroups = [
  {
    title: "Architecture",
    items: [
      "Solution & Technical Architecture",
      "Enterprise CRM & Multi-Cloud Design",
      "Data Modeling & Security Architecture",
      "Integration Architecture",
      "Platform Governance & Design Reviews",
      "Scalability & Technical Debt Reduction",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Apex, Triggers, Async & Batch",
      "Lightning Web Components",
      "SOQL / SOSL & Performance Tuning",
      "Flow Builder & Automation Strategy",
      "Custom Metadata & Reusable Patterns",
      "Governor Limits & Code Reviews",
    ],
  },
  {
    title: "Integration & Data",
    items: [
      "MuleSoft Integration Cloud",
      "REST / SOAP, OAuth, Named Credentials",
      "External IDs & Reconciliation",
      "Data Cloud & Customer 360",
      "Migration, Deduplication, Governance",
      "Error Handling & Monitoring",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Requirements → Technical Design",
      "UAT, Testing & Release Planning",
      "Production Support & Stabilization",
      "Stakeholder Collaboration",
      "Architecture Documentation",
      "Security: Profiles, FLS, Sharing",
    ],
  },
]

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  industry: string
  website?: string
  overview: string
  highlights: string[]
  clouds: string[]
}

export const experience: Experience[] = [
  {
    id: "culligan",
    company: "Culligan International",
    role: "Senior Salesforce Developer",
    period: "Apr 2024 – Present",
    location: "Rosemont, IL · Remote",
    industry: "Consumer Services · Global Water",
    website: "https://culliganinternational.com/",
    overview:
      "Enterprise Salesforce delivery for a global water-services organization spanning residential and commercial acquisition, service relationships, field operations, and multi-cloud CRM.",
    highlights: [
      "Sales Cloud pipelines across leads, opportunities, products, price books, quotes, and approvals for residential and commercial operations.",
      "Service Cloud and Field Service workflows connecting inquiries, cases, scheduling, and operational visibility.",
      "Custom Apex, LWC, Flows, and reusable patterns for sales, service, product, and operational processes.",
      "Revenue Cloud handoffs, Experience Cloud portals, Data Cloud / Customer 360, CRM Analytics, and MuleSoft integration patterns.",
      "Manufacturing Cloud and Consumer Goods Cloud patterns for distributed product, account, and service processes.",
    ],
    clouds: ["sales", "service", "experience", "revenue", "field", "data", "analytics", "mfg", "cg", "platform", "mulesoft"],
  },
  {
    id: "fusion",
    company: "Fusion Academy",
    role: "Salesforce Architect",
    period: "Sep 2021 – Apr 2024",
    location: "Grand Rapids, MI · Hybrid",
    industry: "Education · One-to-One Learning",
    website: "https://www.fusionacademy.com/",
    overview:
      "Architected Salesforce for a national one-to-one education model — admissions, enrollment, campus operations, family engagement, and secure Experience Cloud access.",
    highlights: [
      "Education Cloud-aligned architecture for prospects, students, families, campuses, and lifecycle engagement.",
      "Sales and Service Cloud design for enrollment pipeline, cases, escalations, and campus visibility.",
      "Experience Cloud for students and families with governed sharing and self-service workflows.",
      "Automation strategy blending Flows and Apex; Marketing Cloud and Data Cloud engagement patterns.",
      "Architecture standards for data modeling, security, integration, performance, and technical debt.",
    ],
    clouds: ["edu", "sales", "service", "experience", "marketing", "data", "analytics", "platform"],
  },
  {
    id: "hexarmor",
    company: "HexArmor",
    role: "Salesforce Architect",
    period: "Apr 2016 – Sep 2021",
    location: "Grand Rapids, MI",
    industry: "Manufacturing · PPE",
    website: "https://www.hexarmor.com/",
    overview:
      "Multi-year Salesforce architecture for a high-performance PPE manufacturer — enterprise sales, distributors, quoting, service, and commercial operations.",
    highlights: [
      "Sales and Revenue Cloud architecture across accounts, opportunities, products, pricing, quotes, and approvals.",
      "Manufacturing Cloud and Consumer Goods Cloud patterns for account planning, territory, and distribution channels.",
      "Service and Experience Cloud for customers, partners, and distributors with controlled Salesforce access.",
      "Apex, Visualforce, Lightning, Flow, and security model (profiles, FLS, OWD, sharing).",
      "Integration patterns with REST/SOAP, External IDs, middleware, logging, and reconciliation.",
    ],
    clouds: ["sales", "service", "experience", "revenue", "mfg", "cg", "platform"],
  },
  {
    id: "crcna",
    company: "Christian Reformed Church in North America",
    role: "Salesforce Developer",
    period: "Nov 2014 – Apr 2016",
    location: "Grand Rapids, MI · Hybrid",
    industry: "Nonprofit · Faith & Community",
    website: "https://www.crcna.org/",
    overview:
      "Nonprofit CRM delivery for congregations, constituents, ministries, outreach, and administrative operations across a North American organization.",
    highlights: [
      "Nonprofit Cloud-aligned processes for constituents, relationships, programs, and community engagement.",
      "Data models, Apex, Visualforce, declarative automation, and secure sharing for sensitive constituent data.",
      "Portals, segmentation, reporting, and data quality (imports, cleansing, deduplication).",
    ],
    clouds: ["np", "service", "platform"],
  },
  {
    id: "bostwick",
    company: "Bostwick Lake Congregation UCC",
    role: "IT Team Intern",
    period: "Sep 2014 – Dec 2014",
    location: "Rockford, MI",
    industry: "Nonprofit",
    overview:
      "Technology operations support for membership, communications, outreach, and day-to-day systems for a local congregation.",
    highlights: [
      "Membership and contact data maintenance, cleanup, and reporting for ministry and outreach.",
      "End-user support and documentation for staff and volunteer workflows.",
    ],
    clouds: ["platform"],
  },
  {
    id: "www",
    company: "Wolverine World Wide",
    role: "IT Project Management Intern",
    period: "May 2014 – Aug 2014",
    location: "Rockford, MI",
    industry: "Retail · Global Footwear & Apparel",
    website: "https://www.wolverineworldwide.com/",
    overview:
      "IT project delivery support inside a global branded footwear and apparel organization spanning ~200 countries and territories.",
    highlights: [
      "Tracked requirements, milestones, issues, and delivery status across IT and business stakeholders.",
      "Documentation, testing coordination, and governance support for enterprise application initiatives.",
    ],
    clouds: ["platform"],
  },
]

export const education = {
  school: "Grand Valley State University",
  degree: "Bachelor of Science, Computer Information Systems",
  location: "Allendale, Michigan",
  period: "Aug 2010 – Dec 2014",
}

export const certifications = [
  {
    name: "Salesforce Certified Administrator (SCA)",
    issuer: "Salesforce",
    issued: "Nov 2019",
  },
]

export const industries = [
  { label: "Consumer Services", detail: "Global water solutions" },
  { label: "Education", detail: "National campus network" },
  { label: "Manufacturing", detail: "Industrial PPE" },
  { label: "Nonprofit", detail: "Constituent CRM" },
  { label: "Retail", detail: "Global consumer brands" },
]
