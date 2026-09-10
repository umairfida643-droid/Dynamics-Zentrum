export interface ServiceDetailItem {
  slug: string;
  title: string;
  category: 'Advisory' | 'Implementation' | 'Optimization' | 'Platform';
  summary: string;
  heroHeadline: string;
  businessChallenge: string;
  approach: string;
  pillars: { title: string; desc: string; metrics: string }[];
  deliveryPhases: { step: string; phase: string; description: string; duration: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export interface SolutionDetailItem {
  slug: string;
  title: string;
  category: 'ERP' | 'CRM' | 'AI & Analytics' | 'Platform';
  tagline: string;
  summary: string;
  targetMarket: string;
  businessImpact: { metric: string; label: string; context: string }[];
  coreCapabilities: { name: string; description: string; highlight: string }[];
  copilotFeatures: string[];
  architecturePoints: string[];
  faqs: { q: string; a: string }[];
}

export interface IndustryItem {
  slug: string;
  title: string;
  summary: string;
  code: string;
  regulatoryFocus: string;
  acceleratorModules: string[];
  keyOutcomes: string[];
}

// -------------------------------------------------------------
// ALL 16 SERVICES DATA
// -------------------------------------------------------------
export const SERVICES_DATA: ServiceDetailItem[] = [
  {
    slug: 'consulting',
    title: 'Strategic Consulting',
    category: 'Advisory',
    summary: 'Executive roadmaps, target operating models, and digital transformation architecture for enterprise Microsoft workloads.',
    heroHeadline: 'De-risk your Microsoft transformation before writing a single line of code.',
    businessChallenge: 'Complex enterprises struggle with siloed legacy tech debt, inaccurate total-cost-of-ownership (TCO) estimates, and misalignment between departmental workflows and modern cloud capabilities.',
    approach: 'Our Senior Practice Directors lead structured Discovery and Target Operating Model (TOM) sprints, translating board-level commercial goals into rigorous Microsoft business application architectures.',
    pillars: [
      { title: 'Target Operating Model (TOM)', desc: 'Aligning organizational hierarchy, financial controls, and supply chain governance with Dynamics 365 standards.', metrics: '100% Governance Fit' },
      { title: 'TCO & Licensing Optimization', desc: 'Detailed user persona mapping to right-size Microsoft licensing tiers, avoiding shelfware.', metrics: 'Avg 28% License Savings' },
      { title: 'Process Simplification Blueprint', desc: 'Eliminating custom legacy modifications by leveraging standard D365 out-of-the-box workflows.', metrics: '85%+ Standard Fit' },
      { title: 'Change Impact Assessment', desc: 'Predicting organizational friction points and building role-based change management programs.', metrics: 'High User Adoption' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Executive Alignment', description: 'C-suite interviews and stakeholder workshops to define transformation KPIs and milestones.', duration: 'Weeks 1-2' },
      { step: '02', phase: 'As-Is Process Mapping', description: 'Telemetry audit of legacy systems, data structures, and operational bottlenecks.', duration: 'Weeks 3-4' },
      { step: '03', phase: 'To-Be Architecture Blueprint', description: 'Functional architecture definition across Dynamics 365, Dataverse, and Azure integration layers.', duration: 'Weeks 5-6' },
      { step: '04', phase: 'Business Case & Roadmap', description: 'Financial investment schedule, payback model, and phased deployment sequencing.', duration: 'Weeks 7-8' },
      { step: '05', phase: 'RFP & Governance Handover', description: 'Ready-to-execute program charter and steering committee governance framework.', duration: 'Milestone' }
    ],
    deliverables: [
      'Formal Enterprise Architecture Blueprint (TOGAF / Microsoft standard)',
      'Departmental Fit-Gap & Process Swimlane Documentation',
      'Detailed Microsoft 365 & Dynamics Licensing Architecture',
      'Multi-year Capital & Operational Expenditure (CapEx/OpEx) Model',
      'Risk Mitigation and Regulatory Compliance Matrix'
    ],
    faqs: [
      { q: 'How long does a strategic consulting engagement take?', a: 'Typically 4 to 8 weeks depending on the number of operating entities, international footprint, and legacy complexity.' },
      { q: 'Can this lead directly into implementation?', a: 'Yes. Our blueprints are designed for zero-delay transition directly into technical sprint configurations.' }
    ]
  },
  {
    slug: 'implementation',
    title: 'D365 Implementation',
    category: 'Implementation',
    summary: 'Full-lifecycle deployment of Finance, Supply Chain and Customer Engagement modules with zero-downtime migration and full change management.',
    heroHeadline: 'Predictable, on-time, on-budget enterprise Dynamics 365 deployment.',
    businessChallenge: 'Over 60% of enterprise ERP implementations exceed timeline and budget due to runaway customization, poor data migration, and weak user adoption.',
    approach: 'We utilize our battle-tested Accelerated Agile delivery methodology with milestone-gated sign-offs, standardized industry accelerators, and continuous automated regression testing.',
    pillars: [
      { title: 'Accelerated Sprint Cadence', desc: 'Two-week sprint cycles with weekly prototype demonstrations ensuring complete transparency.', metrics: '100% On-Time Cadence' },
      { title: 'Automated Test Governance', desc: 'Regression test suites using Azure DevOps to ensure zero defects during module integration.', metrics: '99.8% Defect Free' },
      { title: 'Data Migration Factory', desc: 'Proven ETL pipelines with automated entity verification and reconciliation balances.', metrics: '100% Data Integrity' },
      { title: 'Zero-Downtime Cutover', desc: 'Rehearsed trial cutovers with rollback protocols guaranteeing uninterrupted business operations.', metrics: '< 4hr Cutover Window' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Sprint 0 & Environment Setup', description: 'Azure tenant configuration, source control, and baseline template provisioning.', duration: '2 Weeks' },
      { step: '02', phase: 'Core Build & Sprint Execution', description: 'Module configuration, Dataverse entities, security roles, and business event triggers.', duration: '8-14 Weeks' },
      { step: '03', phase: 'Integration & Data Loading', description: 'Azure Logic Apps connections, banking interfaces, and historical master data migration.', duration: '4-6 Weeks' },
      { step: '04', phase: 'User Acceptance Testing (UAT)', description: 'End-to-end scenario validation with business leads and compliance sign-offs.', duration: '3-4 Weeks' },
      { step: '05', phase: 'Cutover & Hypercare', description: 'Dry-run rehearsals, final weekend cutover, and 60-day intensive floor support.', duration: 'Ongoing' }
    ],
    deliverables: [
      'Fully Configured Production Microsoft Dynamics 365 Tenant',
      'End-to-End Integration Architecture with Azure Services',
      'Automated Testing Scripts in Azure DevOps',
      'Complete Cutover Runbook & Rollback Contingency Plan',
      'Post Go-Live Hypercare SLA Performance Dashboard'
    ],
    faqs: [
      { q: 'Do you offer fixed-price implementations?', a: 'Yes, for clearly defined scopes we operate on fixed-fee, milestone-gated commercial models.' },
      { q: 'What modules do your certified consultants cover?', a: 'Finance, Supply Chain, Business Central, Sales, Customer Service, Field Service, Project Operations, and HR.' }
    ]
  },
  {
    slug: 'migration',
    title: 'Zero-Downtime Migration',
    category: 'Implementation',
    summary: 'Deterministic migration from legacy SAP, Oracle, Sage, AX2012, and NAV onto cloud Dynamics 365.',
    heroHeadline: 'Retire legacy tech debt with zero downtime and automated data reconciliation.',
    businessChallenge: 'Legacy on-premise systems (AX 2009/2012, NAV, Sage, SAP ECC) carry decades of messy customization, corrupted transactional history, and high vulnerability risks.',
    approach: 'We leverage dedicated data migration toolkits that extract, cleanse, and transform your historical ledgers, open orders, and master catalogs into standard D365 entities.',
    pillars: [
      { title: 'Automated Ledger Reconciliation', desc: 'Penny-perfect sub-ledger and trial balance reconciliation between legacy and Dynamics 365.', metrics: '100% Balance Match' },
      { title: 'Code Refactoring Engine', desc: 'Replacing obsolete legacy X++ / C/AL modifications with modern Power Platform and event triggers.', metrics: '90% Less Custom Code' },
      { title: 'Shadow Run Testing', desc: 'Simulating live operational days in parallel to validate performance before final switchover.', metrics: 'Zero Business Risk' },
      { title: 'Archival & Compliance Vault', desc: 'Compliant cold-storage archival of statutory records for HM Revenue & Customs and audit requirements.', metrics: '7-Yr Audit Ready' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Legacy Code & Data Audit', description: 'Scanning existing schemas, identifying active vs orphaned customizations.', duration: '2 Weeks' },
      { step: '02', phase: 'Data Cleansing & Mapping', description: 'Deduplicating customer, vendor, and item catalogs; establishing unified keys.', duration: '3 Weeks' },
      { step: '03', phase: 'Trial Migration Cycles', description: 'Executing 3 full mock migrations to measure data load duration and error rates.', duration: '4 Weeks' },
      { step: '04', phase: 'Final Delta Extraction', description: 'Capturing final transactional deltas over cutover weekend without halting shipments.', duration: 'Cutover Weekend' },
      { step: '05', phase: 'Post-Migration Reconciliation', description: 'Sign-off on open AP/AR balances, inventory valuation, and fixed assets.', duration: 'Week 1 Live' }
    ],
    deliverables: [
      'Entity Extraction, Transformation, and Load (ETL) Scripts',
      'Automated Data Reconciliation Sign-off Reports',
      'Legacy System Decommissioning & Read-Only Archival Playbook',
      'Role & Permission Re-mapping Matrix'
    ],
    faqs: [
      { q: 'Can we bring 10+ years of transactional history?', a: 'We typically recommend migrating open balances, open transactions, and master data live, while archiving historical ledgers into Azure Synapse/Fabric for instant query access.' }
    ]
  },
  {
    slug: 'upgrade',
    title: 'Continuous Version Upgrades',
    category: 'Optimization',
    summary: 'Seamless transition to One Version continuous updates with automated regression validation and zero feature breakage.',
    heroHeadline: 'Keep your Dynamics stack evergreen without business interruption.',
    businessChallenge: 'Microsoft releases mandatory major service updates twice a year (Wave 1 & Wave 2), which can risk breaking customizations, integrations, and reports if not governed.',
    approach: 'We establish automated regression testing pipelines that test every incoming preview release against your live customizations weeks before public rollout.',
    pillars: [
      { title: 'Regression Suite Automation', desc: 'Automated UI and API test execution across your core transactional journeys.', metrics: 'Zero Release Surprises' },
      { title: 'Feature Release Advisory', desc: 'Bi-annual briefings on incoming Microsoft capabilities, Copilot features, and deprecated APIs.', metrics: 'High Feature Utilization' },
      { title: 'Integration Sanity Checks', desc: 'Validating third-party EDI, banking, and warehouse endpoints against the new release.', metrics: '100% Endpoint Health' },
      { title: 'Sandbox Validation Cadence', desc: 'Staged promotion from PEAP (Preview Early Access Program) to UAT to Production.', metrics: '3-Tier Controlled Ring' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Release Impact Analysis', description: 'Reviewing Microsoft Release Wave notes against active solution extensions.', duration: 'Month -2' },
      { step: '02', phase: 'Sandbox Deployment', description: 'Applying update in preview environment and triggering automated test suites.', duration: 'Month -1' },
      { step: '03', phase: 'Remediation & Patching', description: 'Adjusting any deprecated methods or data model adjustments.', duration: '2 Weeks' },
      { step: '04', phase: 'Production Promotion', description: 'Deploying during scheduled maintenance window with telemetry verification.', duration: 'Release Weekend' }
    ],
    deliverables: [
      'Bi-Annual Microsoft Release Wave Executive Summary',
      'Automated Test Execution and Defect Remediation Report',
      'Sandbox-to-Production Promotion Verification Sign-off'
    ],
    faqs: [
      { q: 'How do you handle custom extensions during updates?', a: 'All our custom code is written strictly via extensions and event subscribers, ensuring updates install without merge conflicts.' }
    ]
  },
  {
    slug: 'support',
    title: '24/7 SLA-Backed Support',
    category: 'Optimization',
    summary: 'Tier 1 to Tier 3 SLA-backed functional, technical, and environment support delivered by UK-based Dynamics engineers.',
    heroHeadline: 'Mission-critical enterprise support when every minute of downtime counts.',
    businessChallenge: 'When month-end closes stall, warehouse scanners disconnect, or EDI orders fail, generic helpdesks lack the deep functional understanding required to resolve issues fast.',
    approach: 'Direct access to senior UK-based Microsoft-certified solution architects backed by rigorous contractual SLAs and real-time Application Insights telemetry monitoring.',
    pillars: [
      { title: '15-Min Critical Response SLA', desc: 'Guaranteed 15-minute response times for Severity-1 outages affecting live trading.', metrics: '15-Min Response SLA' },
      { title: 'Named Lead Architect', desc: 'Assigned Principal Consultant who knows your specific configuration, integrations, and business rules.', metrics: 'Dedicated Ownership' },
      { title: 'Proactive Telemetry Monitoring', desc: 'Real-time telemetry on slow queries, batch job deadlocks, and capacity thresholds.', metrics: 'Issue Preemption' },
      { title: 'Continuous Backlog Burn', desc: 'Monthly allocation of enhancement hours for small changes, report updates, and user training.', metrics: 'Included Enhancements' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Onboarding & Knowledge Transfer', description: 'Deep-dive code review, architecture documentation, and environment access setup.', duration: 'Weeks 1-2' },
      { step: '02', phase: 'Monitoring Instrumentation', description: 'Configuring Azure Application Insights alerts, alert routing, and escalation ladders.', duration: 'Week 3' },
      { step: '03', phase: 'Active SLA Operations', description: '24/7 ticket handling, regular incident retrospectives, and monthly health scorecards.', duration: 'Annual Agreement' }
    ],
    deliverables: [
      'Comprehensive Service Level Agreement (SLA) Agreement',
      'Access to Dedicated Dynamics Zentrum Jira / DevOps Support Portal',
      'Monthly Service Review & Operational Health Dashboard',
      'Quarterly Architecture Roadmapping & Capacity Report'
    ],
    faqs: [
      { q: 'Is your support team based in the UK?', a: 'Yes. Our primary support desk, incident commanders, and lead architects operate directly out of the UK.' }
    ]
  },
  {
    slug: 'managed-services',
    title: 'Fully Managed Dynamics Operations',
    category: 'Optimization',
    summary: 'End-to-end administration, security patching, environment lifecycle, and continuous optimization with predictable monthly pricing.',
    heroHeadline: 'Outsource the complexity of operating an enterprise Microsoft stack.',
    businessChallenge: 'Maintaining in-house full-time teams of ERP architects, DBA specialists, and security officers is cost-prohibitive and plagued by high employee turnover.',
    approach: 'Dynamics Zentrum acts as your dedicated fractional Center of Excellence, managing tenant administration, environment refreshes, and continuous optimization under one predictable retainer.',
    pillars: [
      { title: 'Environment Lifecycle Management', desc: 'Database refreshes, sandbox spinning, and automated retention archiving.', metrics: 'Optimized Storage' },
      { title: 'Security & Access Governance', desc: 'Privileged identity management (PIM), conditional access, and role auditing.', metrics: 'Zero Security Breaches' },
      { title: 'Performance Tuning', desc: 'SQL query index tuning, batch schedule balancing, and memory cache optimization.', metrics: '40% Faster Processing' },
      { title: 'Predictable Monthly Cost', desc: 'Zero unexpected consulting invoices with flexible roll-over enhancement hours.', metrics: '100% Cost Predictability' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Operational Baseline Audit', description: 'Inspecting current tenant health, storage consumption, and security postures.', duration: '2 Weeks' },
      { step: '02', phase: 'Standard Operating Procedures', description: 'Codifying release schedules, approval workflows, and emergency protocols.', duration: '2 Weeks' },
      { step: '03', phase: 'Continuous Operations', description: 'Daily checks, automated housekeeping, release wave testing, and sprint support.', duration: 'Continuous' }
    ],
    deliverables: [
      'Tenant Operations Runbook and Architecture Register',
      'Weekly Automated Capacity & Security Telemetry Digest',
      'Quarterly Executive Steering Board Report'
    ],
    faqs: [
      { q: 'Can this replace our internal IT team?', a: 'We typically partner with your internal IT leadership, taking over the specialized Dynamics 365 technical burden while they focus on business strategy.' }
    ]
  },
  {
    slug: 'training',
    title: 'Role-Based Enablement & Change',
    category: 'Advisory',
    summary: 'Tailored training, video academies, and super-user enablement programs that turn end users into enthusiastic system champions.',
    heroHeadline: 'Technology is only as good as the people using it every day.',
    businessChallenge: 'User resistance, confusing navigation, and inadequate documentation lead to staff reverting to offline spreadsheets, eroding ERP ROI.',
    approach: 'We craft role-based curriculums tailored to your exact custom screens, business terminology, and day-to-day processes rather than generic textbook modules.',
    pillars: [
      { title: 'Role-Specific SOP Videos', desc: 'Bite-sized, high-definition process walkthroughs embedded directly in Dynamics 365 help panes.', metrics: '100% Role Relevance' },
      { title: 'Train-the-Trainer Academy', desc: 'Empowering departmental super-users to provide Tier-0 support and internal coaching.', metrics: 'Self-Sustaining Teams' },
      { title: 'Interactive Sandbox Labs', desc: 'Safe practice environments pre-loaded with realistic transactional scenarios.', metrics: 'Confident Go-Live' },
      { title: 'Adoption Telemetry Scoring', desc: 'Tracking active feature usage and error rates per team to target refresher interventions.', metrics: '95%+ Adoption Score' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Needs Assessment', description: 'Mapping training requirements across Finance, Warehouse, Sales, and Exec personas.', duration: 'Week 1' },
      { step: '02', phase: 'Material Creation', description: 'Recording customized video tutorials, writing quick-reference cards (QRCs).', duration: 'Weeks 2-3' },
      { step: '03', phase: 'Super-User Bootcamps', description: 'Intensive hands-on labs with functional leads and department heads.', duration: 'Week 4' },
      { step: '04', phase: 'End-User Rollout', description: 'Staged departmental workshops scheduled around operational peaks.', duration: 'Go-Live Period' }
    ],
    deliverables: [
      'Custom Video Academy Library with Recorded Scenarios',
      'Role-Based Quick Reference Cards (PDF & Embedded Web format)',
      'Departmental Competency Assessment & Certification Tracker'
    ],
    faqs: [
      { q: 'Are training materials updated when we upgrade?', a: 'Yes, as part of our Managed Services, we refresh SOPs whenever major UI workflows change.' }
    ]
  },
  {
    slug: 'erp-audit',
    title: 'ERP Audit & Health Checks',
    category: 'Advisory',
    summary: 'In-depth architectural review, database index analysis, license tier right-sizing, and security vulnerability inspection.',
    heroHeadline: 'Know the true state of your Microsoft Dynamics investment.',
    businessChallenge: 'Slow screen response times, ballooning cloud storage bills, untracked modifications, and compliance worries often plague mature Dynamics deployments.',
    approach: 'A non-intrusive 2-week technical and functional audit examining your code quality, SQL performance metrics, licensing utilization, and business process friction.',
    pillars: [
      { title: 'Code Quality & Deprecation Scan', desc: 'Automated static analysis of custom AL / X++ packages for security and performance anti-patterns.', metrics: 'Zero Anti-Patterns' },
      { title: 'License Utilization Review', desc: 'Identifying unassigned, over-licensed, or duplicate user subscriptions across your Microsoft tenant.', metrics: 'Average £45k Savings' },
      { title: 'Dataverse & SQL Diagnostics', desc: 'Analyzing missing indexes, table bloat, and batch job deadlock frequencies.', metrics: '50%+ Query Speedup' },
      { title: 'Regulatory Compliance Check', desc: 'Auditing segregation of duties (SoD), field audit trails, and data retention policies.', metrics: 'Audit Defense Ready' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Tenant Connection', description: 'Establishing secure read-only diagnostic telemetry access to production and sandbox.', duration: 'Day 1' },
      { step: '02', phase: 'Automated Profiling', description: 'Running diagnostic scripts across SQL tables, batch schedules, and security roles.', duration: 'Days 2-5' },
      { step: '03', phase: 'Stakeholder Interviews', description: 'Interviewing power users and business unit leads regarding pain points.', duration: 'Days 6-8' },
      { step: '04', phase: 'Executive Presentation', description: 'Delivering prioritized traffic-light findings report with remediation backlog.', duration: 'Day 10' }
    ],
    deliverables: [
      'Comprehensive 40+ Page ERP Health & Architecture Scorecard',
      'License Optimization & Cost Reduction Savings Schedule',
      'Prioritized Technical Debt Remediation Backlog (Jira / Azure DevOps format)'
    ],
    faqs: [
      { q: 'Does an audit cause any disruption to our live users?', a: 'None whatsoever. All telemetry queries are non-blocking and execute with read-only permissions.' }
    ]
  },
  {
    slug: 'power-bi',
    title: 'Power BI & Executive Dashboards',
    category: 'Platform',
    summary: 'Transform transactional ERP records into real-time visual dashboards, cash flow forecasts, and operational analytics.',
    heroHeadline: 'Real-time boardroom intelligence grounded in your Dynamics single source of truth.',
    businessChallenge: 'Waiting days for month-end reports or manually stitching together exports in Excel leads to stale decision-making and costly reporting errors.',
    approach: 'We design star-schema semantic data models connected directly to Dynamics 365 via Microsoft Fabric and Synapse Link, enabling instant live visual drilldowns.',
    pillars: [
      { title: 'Star-Schema Semantic Models', desc: 'Optimized tabular models handling tens of millions of rows with sub-second DAX response.', metrics: 'Sub-second Refresh' },
      { title: 'Automated Cash Flow Forecasting', desc: 'Predictive liquidity models projecting cash positions across AP, AR, and inventory pipelines.', metrics: 'Daily Liquidity View' },
      { title: 'Embedded Dynamics Context', desc: 'Placing Power BI tiles directly within customer and item screens inside Business Central and Finance.', metrics: 'Contextual Insights' },
      { title: 'Mobile C-Suite Apps', desc: 'Curated executive scorecards optimized for mobile phones and tablet touchscreens.', metrics: 'Anywhere Access' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'KPI Definition Workshop', description: 'Defining board metrics: EBITDA margins, DSO, inventory turns, and fulfillment velocity.', duration: '1 Week' },
      { step: '02', phase: 'Data Pipeline Engineering', description: 'Setting up Synapse Link / Microsoft Fabric OneLake replication from Dynamics tables.', duration: '2 Weeks' },
      { step: '03', phase: 'Dashboard Design & DAX', description: 'Building interactive dashboards with drill-through to individual transactional vouchers.', duration: '3 Weeks' },
      { step: '04', phase: 'Governance & Security', description: 'Configuring Row-Level Security (RLS) ensuring managers only see authorized business units.', duration: '1 Week' }
    ],
    deliverables: [
      'Enterprise Power BI Workspace with Certified Semantic Models',
      'Suite of 8+ Executive, Financial, and Supply Chain Dashboards',
      'Row-Level Security (RLS) Configuration Matrix'
    ],
    faqs: [
      { q: 'Can Power BI combine data from Dynamics and non-Microsoft databases?', a: 'Yes. We frequently unify Dynamics ERP with legacy warehouse systems, third-party eCommerce, and HR platforms.' }
    ]
  },
  {
    slug: 'power-apps',
    title: 'Power Apps & Custom Solutions',
    category: 'Platform',
    summary: 'Build tailored mobile inspection apps, vendor portals, and shop-floor touchscreens on Microsoft Dataverse without ERP modifications.',
    heroHeadline: 'Extend your enterprise workflows with low-code speed and governance.',
    businessChallenge: 'Off-the-shelf ERP screens can be too complex for mobile shop-floor workers, field engineers, or external suppliers who need simple dedicated interfaces.',
    approach: 'We engineer secure canvas and model-driven Power Apps connected natively to your Dynamics Dataverse backend, adhering to strict enterprise governance.',
    pillars: [
      { title: 'Offline-First Mobile Apps', desc: 'Barcode scanning and quality inspection apps that function seamlessly without Wi-Fi in warehouses.', metrics: '100% Offline Capable' },
      { title: 'External Supplier Portals', desc: 'Power Pages portals allowing vendors to acknowledge purchase orders and submit ASN receipts directly.', metrics: 'Zero Data Entry' },
      { title: 'Responsive Canvas Design', desc: 'Frictionless UI built for ruggedized mobile zebra scanners and wall-mounted tablets.', metrics: 'Sub-second Scans' },
      { title: 'Automated Dataverse Sync', desc: 'Direct reads and writes with built-in optimistic concurrency and security role enforcement.', metrics: 'Native Integration' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'User Journey Design', description: 'Wireframing field and warehouse tasks to minimize tap counts and input fatigue.', duration: '1 Week' },
      { step: '02', phase: 'Dataverse Entity Architecture', description: 'Establishing relational schemas, security roles, and business rules.', duration: '2 Weeks' },
      { step: '03', phase: 'App Build & Device Testing', description: 'Developing canvas application and testing across iOS, Android, and industrial scanners.', duration: '2 Weeks' },
      { step: '04', phase: 'Pilot & Deployment', description: 'Piloting with a single facility or team before enterprise-wide tenant deployment.', duration: '1 Week' }
    ],
    deliverables: [
      'Production-Ready Managed Power Apps Solution Package',
      'Dataverse Security & Role Definitions',
      'Device Testing and Operational Setup Guide'
    ],
    faqs: [
      { q: 'Do external vendors need expensive Dynamics licenses to use portals?', a: 'No, Power Pages utilizes affordable capacity-based web authentication licensing.' }
    ]
  },
  {
    slug: 'power-automate',
    title: 'Power Automate & RPA',
    category: 'Platform',
    summary: 'Automate repetitive back-office tasks, multi-tier approvals, invoice extraction, and legacy integrations with Cloud Flows and RPA.',
    heroHeadline: 'Eliminate manual friction across finance, procurement, and operations.',
    businessChallenge: 'Finance teams spend thousands of hours re-keying supplier invoices, emailing for approvals, and manually reconciling bank payment files.',
    approach: 'We deploy AI Builder document models and automated cloud flows that extract invoice data, match against PO receipts, and trigger multi-level approvals automatically.',
    pillars: [
      { title: 'AI Invoice Extraction', desc: 'Computer vision models that extract line-item details from PDF invoices with 98%+ accuracy.', metrics: '98% OCR Precision' },
      { title: 'Multi-Tier Teams Approvals', desc: 'Dynamic approval cards delivered directly inside Microsoft Teams and mobile devices with 1-click actions.', metrics: '65% Faster Approvals' },
      { title: 'Robotic Desktop Automation (RPA)', desc: 'Automated desktop bots for legacy systems lacking modern REST APIs.', metrics: '24/7 Unattended Bots' },
      { title: 'Exception Notification Hub', desc: 'Instant alerts on approval bottlenecks, quantity mismatches, and payment cutoffs.', metrics: 'Zero Missed Deadlines' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Process Automation Discovery', description: 'Benchmarking cycle times and quantifying labor savings across top 5 manual workflows.', duration: '1 Week' },
      { step: '02', phase: 'AI Model Training', description: 'Training document models on your historical supplier invoices and purchase orders.', duration: '2 Weeks' },
      { step: '03', phase: 'Flow Development & Routing', description: 'Configuring business logic, fallback routing, and Teams adaptive card triggers.', duration: '2 Weeks' },
      { step: '04', phase: 'UAT & Handover', description: 'Testing edge-case exceptions with AP teams and establishing monitoring alerts.', duration: '1 Week' }
    ],
    deliverables: [
      'Managed Power Automate Cloud Flows with Error Trapping',
      'Trained AI Builder Document Extraction Models',
      'Automated Exception Management Dashboard'
    ],
    faqs: [
      { q: 'What happens when an invoice layout is unrecognized?', a: 'The flow routes the document into a human-in-the-loop review queue inside Teams for one-click verification.' }
    ]
  },
  {
    slug: 'azure-integration',
    title: 'Azure Integration Services',
    category: 'Platform',
    summary: 'Enterprise-grade, event-driven integration between Dynamics 365, banks, third-party logistics, and legacy systems using Azure Logic Apps and API Management.',
    heroHeadline: 'Connect Dynamics 365 seamlessly with your global technology ecosystem.',
    businessChallenge: 'Brittle point-to-point integrations break during ERP upgrades, lack monitoring visibility, and fail under heavy transaction volume spikes.',
    approach: 'We implement modern hub-and-spoke Azure Integration Services architectures utilizing Service Bus queues, Logic Apps, and API Management gateways with automatic retries.',
    pillars: [
      { title: 'Event-Driven Architecture', desc: 'Asynchronous event grids that decouple systems, eliminating timeouts during high-volume spikes.', metrics: 'Zero Dropped Messages' },
      { title: 'Enterprise Banking Integration', desc: 'Automated ISO 20022 and BACS payment file generation with Host-to-Host SFTP encryption.', metrics: 'Bank-Grade Security' },
      { title: '3PL & EDI Connectors', desc: 'Pre-built mappings for EDIFACT and ANSI X12 warehouse dispatch advice and inventory sync.', metrics: 'Sub-Minute 3PL Sync' },
      { title: 'Centralized API Gateway', desc: 'Secure rate limiting, OAuth token validation, and complete message payload telemetry.', metrics: '100% Traceability' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Integration Catalog & Specs', description: 'Documenting API endpoints, data payloads, volumes, and SLAs for all external systems.', duration: '2 Weeks' },
      { step: '02', phase: 'Azure Infrastructure Setup', description: 'Deploying Azure API Management, Service Bus, Key Vault, and Virtual Networks.', duration: '2 Weeks' },
      { step: '03', phase: 'Logic Apps & Connector Build', description: 'Developing transformational workflows with JSON/XML schema validation.', duration: '4 Weeks' },
      { step: '04', phase: 'End-to-End Stress Testing', description: 'Simulating peak black-swan transaction volumes to verify queue resilience.', duration: '2 Weeks' }
    ],
    deliverables: [
      'Infrastructure-as-Code (Bicep / Terraform) Azure Deployment Scripts',
      'End-to-End Interface Specifications Document',
      'Centralized Monitoring Dashboard in Azure Application Insights'
    ],
    faqs: [
      { q: 'Can we connect on-premise databases securely?', a: 'Yes, via Azure On-Premises Data Gateway or ExpressRoute / Site-to-Site VPN connections without exposing internal ports to the public internet.' }
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting & Governance',
    category: 'Advisory',
    summary: 'Strategic AI use-case roadmaps, responsible AI frameworks, prompt engineering governance, and model grounding on enterprise Dynamics data.',
    heroHeadline: 'Harness enterprise generative AI safely, securely, and with measurable ROI.',
    businessChallenge: 'Organizations want to leverage Generative AI but fear data leaks, hallucinated business outputs, and non-compliance with UK/EU AI governance laws.',
    approach: 'We build enterprise-grade AI roadmaps grounded strictly in your proprietary Microsoft Dataverse security boundaries, preventing unauthorized data exfiltration.',
    pillars: [
      { title: 'Use-Case Prioritization Matrix', desc: 'Evaluating departmental AI opportunities on feasibility, regulatory risk, and economic impact.', metrics: 'High-Value Focus' },
      { title: 'Security Boundary Governance', desc: 'Ensuring models only see data the querying user is explicitly authorized to view in Dynamics.', metrics: 'Zero Data Leaks' },
      { title: 'Grounding & RAG Architecture', desc: 'Connecting Azure OpenAI models to your historical ERP documentation and contract records.', metrics: 'Accurate Answers' },
      { title: 'Responsible AI Framework', desc: 'Establishing ethical AI policies, human-in-the-loop validation, and prompt auditing standards.', metrics: 'Full Compliance' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'AI Readiness & Risk Audit', description: 'Assessing data cleanliness, security group permissions, and legal compliance.', duration: '2 Weeks' },
      { step: '02', phase: 'Value Proof-of-Concept', description: 'Building a working AI workflow (e.g. customer dispute summarizer or lead scoring model).', duration: '3 Weeks' },
      { step: '03', phase: 'Enterprise Rollout Plan', description: 'Defining tenant governance policies, model selection, and prompt libraries.', duration: '2 Weeks' }
    ],
    deliverables: [
      'Executive AI Strategic Roadmap & ROI Model',
      'Enterprise Responsible AI Governance Charter',
      'Functional Proof-of-Concept Prototype on Azure OpenAI'
    ],
    faqs: [
      { q: 'Does Microsoft train public models on our business data?', a: 'No. Enterprise Azure OpenAI and Copilot instances operate under strict commercial data boundaries and never train foundation models on tenant data.' }
    ]
  },
  {
    slug: 'microsoft-copilot',
    title: 'Microsoft Copilot Deployment',
    category: 'Platform',
    summary: 'Turnkey rollout of Copilot for Dynamics 365 and Microsoft 365, prompt training, role configuration, and productivity measurement.',
    heroHeadline: 'Embed an intelligent autonomous assistant into every business workflow.',
    businessChallenge: 'Purchasing Copilot licenses without structured enablement results in under-utilization, poor prompting habits, and missed productivity savings.',
    approach: 'We implement a holistic Copilot Adoption Program covering technical tenant licensing, data grounding hygiene, departmental prompt libraries, and executive value tracking.',
    pillars: [
      { title: 'Data Grounding Cleanse', desc: 'Auditing SharePoint permissions and Dataverse access to prevent confidential files appearing in answers.', metrics: 'Strict Data Hygiene' },
      { title: 'Departmental Prompt Kits', desc: 'Pre-engineered, tested prompt libraries for Finance, Sales, Procurement, and Customer Service.', metrics: 'Immediate Value' },
      { title: 'Copilot Studio Extensions', desc: 'Building custom autonomous agents that can trigger actions inside Dynamics directly from natural language.', metrics: 'Autonomous Agents' },
      { title: 'Productivity Value Analytics', desc: 'Quantifying hours saved per employee across draft creation, meeting summaries, and case resolution.', metrics: 'Proven 30% Uplift' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Security & Access Preparation', description: 'Restricting over-permissioned internal links and establishing DLP policies.', duration: '1-2 Weeks' },
      { step: '02', phase: 'Pilot Deployment (Champion Cohort)', description: 'Rolling out to 25 power users across Sales, Finance, and Customer Support.', duration: '3 Weeks' },
      { step: '03', phase: 'Prompt Coaching Workshops', description: 'Live interactive sessions demonstrating complex multi-step workflow prompting.', duration: '2 Weeks' },
      { step: '04', phase: 'Full Tenant Rollout', description: 'Enterprise deployment backed by adoption scorecards and custom Copilot Studio bots.', duration: 'Ongoing' }
    ],
    deliverables: [
      'Tenant Security & Dataverse Permissions Verification Report',
      'Industry-Specific Copilot Prompt Playbook (Finance, Sales, SCM)',
      'Custom Copilot Studio Agent Configuration Package'
    ],
    faqs: [
      { q: 'Which Dynamics modules support Copilot natively?', a: 'Business Central, Finance, Supply Chain Management, Sales, Customer Service, and Customer Insights all feature native Copilot skills.' }
    ]
  },
  {
    slug: 'business-intelligence',
    title: 'Enterprise BI & Fabric Lakehouse',
    category: 'Platform',
    summary: 'Modernize reporting with Microsoft Fabric OneLake, consolidating ERP, CRM, legacy data, and AI models into a single unified analytics fabric.',
    heroHeadline: 'Unified enterprise analytics with zero data copy latency.',
    businessChallenge: 'Traditional data warehouses require complex ETL pipelines, expensive third-party storage, and create multiple conflicting versions of operational truth.',
    approach: 'We establish a unified Microsoft Fabric Lakehouse utilizing Synapse Link to sync Dynamics 365 data directly into Delta Parquet format without writing custom extraction scripts.',
    pillars: [
      { title: 'OneLake Single Source of Truth', desc: 'Eliminating data silos by connecting ERP, CRM, and web telemetry in open Delta table format.', metrics: 'Zero Duplicate Copies' },
      { title: 'Near Real-Time Synchronization', desc: 'Continuous stream replication from Dataverse into Fabric with under 5-minute data latency.', metrics: '< 5 Min Data Latency' },
      { title: 'Direct Lake Power BI Mode', desc: 'Querying billions of rows with in-memory VertiPaq speed without scheduled dataset refreshes.', metrics: 'Instant Boardroom Query' },
      { title: 'Unified Data Governance', desc: 'Centralized lineage, sensitivity labels, and access auditing powered by Microsoft Purview.', metrics: 'Full Audit Lineage' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'Data Architecture Assessment', description: 'Auditing existing reporting schemas, Excel dependencies, and reporting needs.', duration: '2 Weeks' },
      { step: '02', phase: 'Fabric Capacity & OneLake Setup', description: 'Provisioning Fabric capacity, lakehouse structures, and Synapse Link pipelines.', duration: '2 Weeks' },
      { step: '03', phase: 'Gold Layer Modeling', description: 'Developing clean medallion architecture (Bronze/Silver/Gold) star schemas.', duration: '4 Weeks' },
      { step: '04', phase: 'Power BI Direct Lake Delivery', description: 'Migrating legacy reports to Direct Lake mode with sub-second response times.', duration: '3 Weeks' }
    ],
    deliverables: [
      'Microsoft Fabric Capacity Architecture Blueprint',
      'Medallion Lakehouse Schemas (Bronze, Silver, Gold Layers)',
      'Direct Lake Power BI Executive Reporting Suite'
    ],
    faqs: [
      { q: 'How does Fabric differ from traditional Power BI?', a: 'Fabric combines Power BI with enterprise data lake storage (OneLake), Synapse data engineering, and real-time analytics in one unified platform.' }
    ]
  },
  {
    slug: 'power-platform',
    title: 'Power Platform Governance & CoE',
    category: 'Platform',
    summary: 'Establish Center of Excellence (CoE) guardrails, environment management, and low-code lifecycle management (ALM) at enterprise scale.',
    heroHeadline: 'Enable grassroots digital innovation without compromising corporate governance.',
    businessChallenge: 'Unregulated citizen development creates "shadow IT", unmonitored connections, compliance blind spots, and unmaintainable legacy flows.',
    approach: 'We deploy the Microsoft Power Platform Center of Excellence (CoE) Starter Kit and establish structured Dev/Test/Prod pipelines with automated DLP policies.',
    pillars: [
      { title: 'Automated DLP Policy Enforcement', desc: 'Blocking unauthorized third-party connectors (like Dropbox or personal email) across all tenants.', metrics: '100% Data Protection' },
      { title: 'Application Lifecycle Management (ALM)', desc: 'Automated GitHub and Azure DevOps release pipelines for seamless solution promotion.', metrics: 'Zero Production Breaks' },
      { title: 'App & Flow Inventory Telemetry', desc: 'Centralized dashboard tracking active makers, orphaned flows, and resource consumption.', metrics: 'Full Visibility' },
      { title: 'Maker Innovation Nurturing', desc: 'Structured community events, reusable template libraries, and certification paths.', metrics: 'Confident Makers' }
    ],
    deliveryPhases: [
      { step: '01', phase: 'CoE Toolkit Deployment', description: 'Installing telemetry dashboards, audit flows, and environment catalogs.', duration: '1 Week' },
      { step: '02', phase: 'Policy & DLP Definition', description: 'Designing multi-environment tiers (Default, Dedicated Business Units, Critical Production).', duration: '2 Weeks' },
      { step: '03', phase: 'ALM Pipeline Automation', description: 'Setting up automated build, test, and release pipelines using Azure DevOps.', duration: '2 Weeks' },
      { step: '04', phase: 'Governance Handover', description: 'Training internal IT administrators on maker onboarding and exception approvals.', duration: '1 Week' }
    ],
    deliverables: [
      'Operational Microsoft CoE Starter Kit Environment',
      'Enterprise Data Loss Prevention (DLP) Policy Framework',
      'Automated Azure DevOps / GitHub ALM Solution Pipelines'
    ],
    faqs: [
      { q: 'Does establishing governance slow down our citizen developers?', a: 'Quite the opposite. Clear guardrails give makers freedom to experiment in sandbox environments with instant self-service approval workflows.' }
    ]
  }
];

// -------------------------------------------------------------
// ALL 13 SOLUTIONS DATA
// -------------------------------------------------------------
export const SOLUTIONS_DATA: SolutionDetailItem[] = [
  {
    slug: 'business-central',
    title: 'Dynamics 365 Business Central',
    category: 'ERP',
    tagline: 'All-in-one ERP for growing mid-market organisations.',
    summary: 'Connect your finances, sales, service, and supply chain operations in a single intuitive cloud application designed for agile mid-market leaders.',
    targetMarket: 'Mid-Market (£10M - £100M revenue)',
    businessImpact: [
      { metric: '25%', label: 'Admin Overhead Reduction', context: 'Automated bank recs and recurring invoices.' },
      { metric: '30%', label: 'Inventory Holding Savings', context: 'Dynamic reorder points and safety stock intelligence.' },
      { metric: '3-Day', label: 'Month-End Close', context: 'From an average of 14 days down to 72 hours.' }
    ],
    coreCapabilities: [
      { name: 'Comprehensive Financial Management', description: 'General ledger, multi-currency, intercompany transactions, deferrals, and fixed asset accounting.', highlight: 'Multi-Entity Consolidated Ledger' },
      { name: 'Supply Chain & Inventory', description: 'Automated purchase orders, drop shipments, item tracking (serial/lot), and multiple warehouse locations.', highlight: 'Smart Reordering Intelligence' },
      { name: 'Sales & Service Management', description: 'Quote-to-cash workflows, customer pricing tiers, service contract tracking, and field dispatch.', highlight: 'Outlook 1-Click Invoicing' },
      { name: 'Project & Job Costing', description: 'Budget tracking, resource timesheets, WIP recognition, and milestone billing for professional teams.', highlight: 'Real-Time Job Profitability' },
      { name: 'Manufacturing Core', description: 'Bill of materials (BOM), production routings, machine center capacity planning, and scrap tracking.', highlight: 'Discrete & Light Assembly' },
      { name: 'Native Microsoft 365 Harmony', description: 'Edit directly in Excel with two-way sync; email quotes and convert orders directly inside Outlook.', highlight: 'Zero App Switching' }
    ],
    copilotFeatures: [
      'Automated bank reconciliation matching unmapped statement transactions',
      'Generative product marketing copy written directly from item attributes',
      'Natural language inventory search and stockout risk summaries'
    ],
    architecturePoints: [
      'Multi-tenant SaaS hosted in UK sovereign Microsoft Azure datacenters',
      'Open REST / OData v4 APIs and Dataverse synchronization',
      'Custom extensions written in standard modern AL code (zero core modification)'
    ],
    faqs: [
      { q: 'How does Business Central differ from Finance & Operations?', a: 'Business Central is optimized for mid-market businesses seeking rapid deployment and integrated ERP; F&O is designed for complex global conglomerates with multi-plant manufacturing.' },
      { q: 'Can we migrate from Sage 50 / 200 or QuickBooks easily?', a: 'Yes, we have specialized migration accelerators that transfer charts of accounts, customers, vendors, and opening balances in days.' }
    ]
  },
  {
    slug: 'finance',
    title: 'Dynamics 365 Finance',
    category: 'ERP',
    tagline: 'Global finance, treasury and compliance at enterprise scale.',
    summary: 'Automate complex financial operations, multi-country tax compliance, algorithmic cash forecasting, and global entity consolidation.',
    targetMarket: 'Enterprise & Multi-National (£100M+ revenue)',
    businessImpact: [
      { metric: '40%', label: 'Opex Efficiency Uplift', context: 'Consolidating multiple country ledgers.' },
      { metric: '£1.2M', label: 'Average Annual Savings', context: 'Streamlined shared-service accounting.' },
      { metric: '100%', label: 'FCA & SOX Compliance', context: 'Automated segregation of duties and audit trails.' }
    ],
    coreCapabilities: [
      { name: 'Global Ledger & Multi-Entity Consolidation', description: 'Eliminate manual foreign exchange and intercompany eliminations across dozens of legal entities.', highlight: 'Real-Time Global Close' },
      { name: 'AI Credit & Collections Management', description: 'Automate dunning letters, customer risk scoring, and dispute management workflows.', highlight: 'Reduced Days Sales Outstanding (DSO)' },
      { name: 'Automated Cash Flow Forecasting', description: 'Machine learning models predicting future cash positions by analyzing historical AP/AR settlement habits.', highlight: 'Predictive Treasury' },
      { name: 'Vendor Invoice Automation', description: 'Touchless invoice ingestion using optical character recognition (OCR) and three-way matching.', highlight: '80% Touchless Invoicing' },
      { name: 'Asset Management & Depreciation', description: 'Track asset lifecycles, maintenance schedules, lease accounting (IFRS 16 / ASC 842), and revaluations.', highlight: 'Statutory Lease Standard' },
      { name: 'Configurable Regulatory Engine', description: 'Instant localized tax calculation and electronic reporting across 50+ international jurisdictions.', highlight: 'Multi-Country Localizations' }
    ],
    copilotFeatures: [
      'Copilot-assisted month-end close anomaly detection and financial report narrative generation',
      'Conversational collection summaries giving account managers immediate debtor histories',
      'Automated draft communications for vendor payment confirmation and invoice disputes'
    ],
    architecturePoints: [
      'Hyperscale architecture handling hundreds of thousands of transactions daily',
      'Direct integration with Azure Data Lake / Fabric OneLake for sub-second analytical reporting',
      'Dual-write synchronization with Dynamics 365 Customer Engagement apps'
    ],
    faqs: [
      { q: 'Does D365 Finance support UK Making Tax Digital (MTD)?', a: 'Yes, full out-of-the-box HMRC MTD integration with direct digital VAT returns submission.' },
      { q: 'Can it handle complex shared services organizations?', a: 'D365 Finance is the gold standard for global shared-service centers with automated intercompany netting.' }
    ]
  },
  {
    slug: 'supply-chain',
    title: 'Dynamics 365 Supply Chain',
    category: 'ERP',
    tagline: 'Resilient, AI-driven supply chain and manufacturing.',
    summary: 'Build an agile, predictive supply chain that mitigates disruptions, optimizes production floor capacity, and drives warehouse automation.',
    targetMarket: 'Manufacturing, Distribution & Logistics',
    businessImpact: [
      { metric: '32%', label: 'OEE Uplift', context: 'Predictive shop floor equipment maintenance.' },
      { metric: '£4.8M', label: 'Working Capital Freed', context: 'Optimized safety stock and dynamic inventory.' },
      { metric: '99.5%', label: 'On-Time In-Full (OTIF)', context: 'Synchronized production and transport schedules.' }
    ],
    coreCapabilities: [
      { name: 'Planning Optimization Engine', description: 'In-memory multi-plant master planning calculating supply needs in seconds rather than overnight batch runs.', highlight: 'Seconds Master Planning' },
      { name: 'Advanced Warehouse Management (WMS)', description: 'Wave, cluster, and zone picking on mobile RF barcode terminals with automated replenishment logic.', highlight: 'Optimized Pick Paths' },
      { name: 'Discrete, Process & Lean Manufacturing', description: 'Support for hybrid manufacturing topologies, ingredient potencies, co-products, and kanban schedules.', highlight: 'Unified Manufacturing' },
      { name: 'Asset Management & IoT Intelligence', description: 'Connect shop-floor sensor telemetry to predict machinery failures before costly unplanned stoppages.', highlight: 'Predictive Maintenance' },
      { name: 'Transportation & Freight Management', description: 'Multi-modal carrier rating, load building, route optimization, and automated freight audit billing.', highlight: 'Reduced Freight Spend' },
      { name: 'Quality Management & Traceability', description: 'Automated quarantine orders, non-conformance logging, and end-to-end forward/backward lot recall.', highlight: 'Complete Lot Genealogy' }
    ],
    copilotFeatures: [
      'Predictive supply disruption alerts identifying at-risk purchase orders and suggesting alternative suppliers',
      'Natural language warehouse inventory queries on mobile scanners',
      'Automated engineering change order summaries and impact matrices'
    ],
    architecturePoints: [
      'Edge deployment capabilities for distributed warehouses with intermittent cloud connectivity',
      'Real-time IoT Hub connectors for industrial PLC machinery telemetry',
      'Integration with automated storage and retrieval systems (ASRS) and robotics'
    ],
    faqs: [
      { q: 'Can it run offline in a warehouse if the internet drops?', a: 'Yes. Cloud and edge scale units allow warehouse facilities to continue pick, pack, and ship operations autonomously.' }
    ]
  },
  {
    slug: 'sales',
    title: 'Dynamics 365 Sales',
    category: 'CRM',
    tagline: 'Pipeline intelligence and Copilot-assisted selling.',
    summary: 'Empower commercial teams to close higher-margin deals faster using seller workflows, LinkedIn Sales Navigator integration, and automated pipeline intelligence.',
    targetMarket: 'B2B & Enterprise Sales Organizations',
    businessImpact: [
      { metric: '28%', label: 'Win Rate Improvement', context: 'Opportunity scoring and predictive buying intent.' },
      { metric: '4.5 hrs', label: 'Saved per Rep / Week', context: 'Automated meeting notes and email drafting.' },
      { metric: '99%', label: 'CRM Adoption', context: 'Sellers work directly inside Outlook and Teams.' }
    ],
    coreCapabilities: [
      { name: 'Copilot for Sales Seller Assistant', description: 'Summarize meeting transcripts, draft contextual email follow-ups, and pull real-time deal data into Teams calls.', highlight: 'AI Executive Assistant' },
      { name: 'Predictive Lead & Opportunity Scoring', description: 'Machine learning algorithms identifying high-probability prospects based on historical win parameters.', highlight: 'Focus on Closing Deals' },
      { name: 'Sales Accelerator & Sequences', description: 'Guide reps through standardized cadence steps: calls, emails, LinkedIn inMails, and presentation milestones.', highlight: 'Guided Selling Cadence' },
      { name: 'LinkedIn Sales Navigator Sync', description: 'View mutual connections, lead icebreakers, and organization hierarchy directly inside the CRM record.', highlight: 'Relationship Intelligence' },
      { name: 'Interactive Pipeline Forecasting', description: 'Bottom-up and top-down revenue forecasting with deal-flow slippage tracking and commit scoring.', highlight: 'Accurate Revenue Visibility' },
      { name: 'CPQ & Order Management', description: 'Configure-Price-Quote rules with automated margin guardrails and direct synchronization with ERP.', highlight: 'Error-Free Quotes' }
    ],
    copilotFeatures: [
      'One-click meeting prep briefings compiling past communications, open tickets, and contract status',
      'AI email generation reflecting the customer tone and addressing specific inquiry points',
      'Real-time battlecard cues during live Teams calls addressing competitor comparisons'
    ],
    architecturePoints: [
      'Native Microsoft Dataverse platform enabling instant shared visibility with Customer Service and ERP',
      'Seamless Microsoft Teams phone system dialer integration with automated transcription',
      'Power BI embedded sales analytics with quota attainment tracking'
    ],
    faqs: [
      { q: 'How quickly can our team transition from Salesforce?', a: 'Our migration accelerators map Salesforce accounts, opportunities, and activities into Dynamics 365 in 4 to 6 weeks.' }
    ]
  },
  {
    slug: 'customer-service',
    title: 'Dynamics 365 Customer Service',
    category: 'CRM',
    tagline: 'Omnichannel service with AI case deflection.',
    summary: 'Deliver exceptional 24/7 client experiences with unified voice, digital messaging, self-service portals, and generative AI deflection.',
    targetMarket: 'Customer Care & Shared Service Centers',
    businessImpact: [
      { metric: '45%', label: 'Case Deflection Rate', context: 'Copilot autonomous self-service chat.' },
      { metric: '3.2x', label: 'First Contact Resolution', context: 'Unified 360-degree customer timeline.' },
      { metric: '35%', label: 'Handling Time Reduction', context: 'AI drafted responses and instant knowledge lookups.' }
    ],
    coreCapabilities: [
      { name: 'Omnichannel Voice & Digital Messaging', description: 'Unify incoming voice calls, web chat, SMS, WhatsApp, and email into a single intelligent routing inbox.', highlight: 'True Omnichannel Queue' },
      { name: 'Copilot Service Assistant', description: 'Generate instant answers by querying your internal knowledgebase, past closed tickets, and technical manuals.', highlight: 'Instant Agent Answers' },
      { name: 'Skills-Based Intelligent Routing', description: 'Route cases automatically to the best-qualified available agent based on language, product skill, and SLA tier.', highlight: 'Optimal Agent Matching' },
      { name: 'Knowledge Management Lifecycle', description: 'Author, review, and translate authoritative help articles with automated usage analytics and feedback loops.', highlight: 'Authoritative Knowledge' },
      { name: 'Customer Self-Service Portals', description: 'Branded Power Pages portals where clients can track open tickets, search solutions, and chat with AI.', highlight: '24/7 Self-Service' },
      { name: 'SLA & Escalation Timers', description: 'Visual countdown timers on active cases with automated escalation notifications to managers before breaches.', highlight: 'Zero SLA Breaches' }
    ],
    copilotFeatures: [
      'Autonomous virtual agents handling complex multi-turn inquiries and order status checks',
      'Live call transcript summarization that saves agents 5 minutes of note-taking per interaction',
      'Automated customer sentiment analysis prompting supervisors when a client shows frustration'
    ],
    architecturePoints: [
      'Built on Azure Communication Services for crystal-clear enterprise VoIP telephony',
      'Native integration with Dynamics 365 Field Service for automatic on-site dispatch',
      'Enterprise GDPR redaction masking credit card numbers and sensitive PII from transcripts'
    ],
    faqs: [
      { q: 'Can this replace our existing telephony / call center software?', a: 'Yes. Dynamics 365 Voice offers a complete cloud contact center solution powered by Azure Communication Services.' }
    ]
  },
  {
    slug: 'marketing',
    title: 'Dynamics 365 Customer Insights',
    category: 'CRM',
    tagline: 'Real-time journeys and customer data unification.',
    summary: 'Unify transactional, behavioral, and demographic customer data into 360-degree profiles and orchestrate hyper-personalized marketing journeys.',
    targetMarket: 'B2B & B2C Marketing Teams',
    businessImpact: [
      { metric: '38%', label: 'Marketing ROI Increase', context: 'Hyper-personalized event-triggered journeys.' },
      { metric: '360°', label: 'Unified Customer Profile', context: 'Stitching ERP purchases and web clicks.' },
      { metric: '4x', label: 'Campaign Velocity', context: 'Generative AI email copy and audience creation.' }
    ],
    coreCapabilities: [
      { name: 'Customer Data Platform (CDP)', description: 'Ingest and reconcile data from ERP, POS, web cookies, and mobile apps into unified golden customer profiles.', highlight: 'Identity Resolution' },
      { name: 'Real-Time Journey Orchestration', description: 'Trigger targeted SMS, email, and push notifications the exact moment a customer abandons a cart or visits a store.', highlight: 'Event-Driven Engagement' },
      { name: 'Copilot Audience Segmentation', description: 'Describe your target audience in plain English and let Copilot build complex SQL segment criteria instantly.', highlight: 'Natural Language Segments' },
      { name: 'Consent & Privacy Management', description: 'Strict opt-in/opt-out governance aligned with GDPR, PECR, and regional privacy mandates.', highlight: 'Failsafe Compliance' },
      { name: 'Lead Scoring & Sales Handoff', description: 'Pass marketing-qualified leads directly into Dynamics 365 Sales with complete engagement histories.', highlight: 'Seamless Sales Bridge' },
      { name: 'Attribution & Multi-Touch Analytics', description: 'Understand which campaigns and touchpoints actually drive closed revenue in your ERP.', highlight: 'Revenue Attribution' }
    ],
    copilotFeatures: [
      'Generative content ideas and email layout creation tailored to specific brand guidelines',
      'Journey recommendations predicting the optimal channel and send-time per customer',
      'Natural language summary of campaign performance highlights and anomaly spikes'
    ],
    architecturePoints: [
      'Direct integration with Microsoft Fabric and Azure Synapse for deep analytical enrichment',
      'Zero-latency sync with Dynamics 365 Sales and Business Central contacts',
      'Enterprise email deliverability monitoring with SPF, DKIM, and DMARC enforcement'
    ],
    faqs: [
      { q: 'How does it unify duplicate contacts across legacy systems?', a: 'Built-in identity resolution rules match on email, phone, and fuzzy-matching company algorithms to create single golden profiles.' }
    ]
  },
  {
    slug: 'field-service',
    title: 'Dynamics 365 Field Service',
    category: 'CRM',
    tagline: 'Connected field operations and predictive maintenance.',
    summary: 'Optimize technician scheduling, asset uptime, and mobile service delivery with IoT diagnostics and mixed reality support.',
    targetMarket: 'Asset-Intensive & Field Service Organisations',
    businessImpact: [
      { metric: '42%', label: 'First-Time Fix Rate Uplift', context: 'Technicians arrive with right parts and manuals.' },
      { metric: '20%', label: 'Fuel & Travel Mileage Savings', context: 'Algorithmic route and schedule optimization.' },
      { metric: '90%', label: 'Technician Job Satisfaction', context: 'Offline mobile app and digital signatures.' }
    ],
    coreCapabilities: [
      { name: 'Resource Scheduling Optimization (RSO)', description: 'Automatically optimize thousands of appointment bookings to minimize technician travel time and fuel consumption.', highlight: 'Algorithmic Dispatch' },
      { name: 'Mobile Technician Application', description: 'Offline-capable mobile app providing turn-by-turn navigation, asset history, inspection checklists, and billing.', highlight: 'Full Offline Mobility' },
      { name: 'IoT Connected Asset Telemetry', description: 'Monitor equipment health remotely and generate preventive work orders before breakdowns occur.', highlight: 'Predictive Work Orders' },
      { name: 'Customer Tracking & Arrival Alerts', description: 'Send Uber-style live tracking SMS links to customers showing technician ETA on a live map.', highlight: 'Live Customer ETA' },
      { name: 'Truck Inventory & Parts Tracking', description: 'Track van inventory in real-time, syncing truck stock seamlessly with ERP central warehouses.', highlight: 'Parts Availability' },
      { name: 'Remote Assist Mixed Reality', description: 'Field engineers can share their live camera feed with senior remote architects for real-time guidance.', highlight: 'Hands-Free Video Support' }
    ],
    copilotFeatures: [
      'Automated work order creation from incoming client emails and IoT sensor fault codes',
      'Technician recap summaries generating professional job completion reports for client sign-off',
      'Intelligent scheduling assistant matching parts availability with technician qualifications'
    ],
    architecturePoints: [
      'Native integration with Business Central and Finance for real-time invoice generation upon job completion',
      'Azure Maps integration for geofencing and automated technician arrival detection',
      'Strict audit trails for regulated health, safety, and gas/electrical certifications'
    ],
    faqs: [
      { q: 'Can technicians complete checklists when working in basements without signal?', a: 'Yes, the Field Service mobile app has full offline database storage that automatically syncs once connection is restored.' }
    ]
  },
  {
    slug: 'human-resources',
    title: 'Dynamics 365 Human Resources',
    category: 'ERP',
    tagline: 'Modern HR core, benefits and workforce analytics.',
    summary: 'Streamline employee onboarding, compensation, leave administration, and regulatory compliance within a unified employee self-service hub.',
    targetMarket: 'Mid-Market & Enterprise HR Teams',
    businessImpact: [
      { metric: '50%', label: 'HR Admin Time Saved', context: 'Employee self-service leave and benefit portals.' },
      { metric: '100%', label: 'Statutory HR Compliance', context: 'Audit-proof personnel record retention.' },
      { metric: 'Zero', label: 'Payroll Discrepancies', context: 'Bi-directional payroll and compensation sync.' }
    ],
    coreCapabilities: [
      { name: 'Employee & Manager Self-Service', description: 'Request annual leave, view payslips, update personal details, and complete reviews inside Microsoft Teams.', highlight: 'Embedded Inside Teams' },
      { name: 'Leave & Absence Automation', description: 'Configurable accrual rules, holiday roll-over caps, Bradford factor scoring, and approval chains.', highlight: 'Smart Accrual Engine' },
      { name: 'Compensation & Benefits Management', description: 'Manage salary bands, merit increases, equity plans, and healthcare enrollment packages.', highlight: 'Total Rewards Visibility' },
      { name: 'Onboarding & Checklist Automation', description: 'Automate tasks across IT, facilities, and managers to ensure new hires are productive on Day 1.', highlight: 'Frictionless Onboarding' },
      { name: 'Performance & Skills Tracking', description: 'Goal setting, 360-degree feedback, performance review cycles, and training certification tracking.', highlight: 'Talent Development' },
      { name: 'Payroll Integration Bridge', description: 'Pre-built APIs syncing employee time, compensation adjustments, and tax codes directly with payroll bureaus.', highlight: 'Payroll Accuracy' }
    ],
    copilotFeatures: [
      'HR policy chatbot answering employee questions about leave rules, expenses, and benefits',
      'Automated performance review drafting assistance for managers',
      'Workforce flight-risk and retention analysis highlights'
    ],
    architecturePoints: [
      'Consolidated directly into Dynamics 365 Finance infrastructure for single-source organizational hierarchy',
      'Microsoft Entra ID (Azure AD) synchronization for instant role provisioning and de-provisioning',
      'Power BI people analytics tracking turnover, gender pay parity, and sickness trends'
    ],
    faqs: [
      { q: 'Does D365 HR connect with third-party UK payroll providers?', a: 'Yes, it connects seamlessly with major UK payroll solutions including ADP, SD Worx, Sage, and Moorepay.' }
    ]
  },
  {
    slug: 'commerce',
    title: 'Dynamics 365 Commerce',
    category: 'ERP',
    tagline: 'Unified retail across store, e-commerce and back office.',
    summary: 'Deliver seamless omnichannel shopping experiences connecting digital storefronts, physical POS, inventory, and back-office financials.',
    targetMarket: 'Retailers, Omnichannel Brands & Franchises',
    businessImpact: [
      { metric: '22%', label: 'Average Basket Uplift', context: 'Omnichannel clienteling and personalized cross-sells.' },
      { metric: '99.98%', label: 'Store POS Uptime', context: 'Cloud and offline retail store resiliency.' },
      { metric: '3x', label: 'Merchandising Cadence', context: 'Real-time price, promotion, and catalog publishing.' }
    ],
    coreCapabilities: [
      { name: 'Cloud-Native Modern Point of Sale (POS)', description: 'Fast barcode checkout, inventory lookup, gift cards, and endless aisle ordering on mobile touchscreens.', highlight: 'Modern Store POS' },
      { name: 'Unified Omnichannel Catalog', description: 'Manage prices, discounts, promotions, and multilingual product attributes across online and physical retail.', highlight: 'Single Catalog Source' },
      { name: 'Integrated E-Commerce Storefront', description: 'Headless, scalable web storefront with native SEO, ratings, reviews, and payment gateway tokenization.', highlight: 'B2C & B2B Web Storefront' },
      { name: 'Clienteling & Customer Loyalty', description: 'Empower store associates with customer purchase histories, style preferences, and loyalty reward tiers.', highlight: 'Store Associate VIP' },
      { name: 'Distributed Order Management (DOM)', description: 'Intelligent routing that fulfills orders from the nearest store or warehouse to minimize shipping costs.', highlight: 'Intelligent Order Routing' },
      { name: 'Loss Prevention & Fraud Protection', description: 'Machine learning fraud detection safeguarding web transactions and store refund anomalies.', highlight: 'Adaptive Fraud Defense' }
    ],
    copilotFeatures: [
      'Copilot-assisted product descriptions tailored for SEO and diverse brand voices',
      'Merchandising insights recommending dynamic markdown strategies for slow-moving inventory',
      'Conversational store associate support for instant product cross-sell recommendations'
    ],
    architecturePoints: [
      'Offline-capable store scale units ensuring physical registers continue processing transactions during internet blackouts',
      'PCI-DSS compliant payment connector architecture with leading UK merchant acquirers',
      'Native link to Dynamics 365 Supply Chain for automated store replenishment'
    ],
    faqs: [
      { q: 'Can it handle high-volume Black Friday traffic peaks?', a: 'Yes. The Commerce platform auto-scales elastically on Microsoft Azure to process millions of concurrent checkout requests.' }
    ]
  },
  {
    slug: 'copilot',
    title: 'Microsoft Copilot in Dynamics',
    category: 'AI & Analytics',
    tagline: 'Generative AI woven through the business applications stack.',
    summary: 'Supercharge employee productivity with conversational generative AI assistants embedded natively across ERP, CRM, and Supply Chain workflows.',
    targetMarket: 'All Modern Organizations',
    businessImpact: [
      { metric: '30%', label: 'Productivity Acceleration', context: 'Automated administrative writing and reconciliation.' },
      { metric: 'Zero', label: 'Data Leakage Risk', context: 'Encapsulated inside tenant Azure security boundaries.' },
      { metric: '90 Days', label: 'Measurable Value Realization', context: 'Proven rapid time-to-adoption.' }
    ],
    coreCapabilities: [
      { name: 'Embedded Contextual Assistant', description: 'Copilot lives directly inside your daily screens, offering proactive suggestions without switching tabs.', highlight: 'Zero Context Switching' },
      { name: 'Natural Language Data Querying', description: 'Ask questions like "Which suppliers had shipment delays this week?" and receive verified data tables instantly.', highlight: 'No SQL Required' },
      { name: 'Autonomous Action Execution', description: 'Authorize Copilot to draft purchase orders, dispatch technicians, or apply payment journals automatically.', highlight: 'Actionable Automation' },
      { name: 'Enterprise Document Grounding', description: 'Ground responses in your contracts, SOPs, and product specifications stored safely in Dataverse.', highlight: 'Zero Hallucinations' },
      { name: 'Copilot Studio Agent Studio', description: 'Build and customize custom conversational autonomous agents tailored to your company jargon.', highlight: 'Bespoke AI Agents' },
      { name: 'Comprehensive Audit Logging', description: 'Every prompt and generated output is logged for compliance, security, and quality assurance.', highlight: 'Full Audit Trail' }
    ],
    copilotFeatures: [
      'Automated financial month-end close narrative and discrepancy report generation',
      'Intelligent supplier disruption warning with pre-drafted escalation messages',
      'Instant customer case history summarization and empathetic resolution proposals'
    ],
    architecturePoints: [
      'Operates under strict Microsoft Commercial Data Protection agreements (customer data is never used to train base models)',
      'Respects all existing user role-based security boundaries (RBAC) configured in Dynamics 365',
      'Powered by state-of-the-art Azure OpenAI GPT-4o models running in sovereign UK/EU data centers'
    ],
    faqs: [
      { q: 'How does Copilot know what data each employee is allowed to see?', a: 'Copilot strictly inherits the user\'s active Dataverse and Dynamics security roles. An employee cannot prompt Copilot to see data their account is restricted from.' }
    ]
  },
  {
    slug: 'power-platform',
    title: 'Microsoft Power Platform',
    category: 'Platform',
    tagline: 'Fusion team enablement across Apps, Automate, BI and Pages.',
    summary: 'Empower citizen makers and professional developers to build custom applications, automations, and external portals at lightning speed.',
    targetMarket: 'Enterprise IT & Business Units',
    businessImpact: [
      { metric: '70%', label: 'Faster App Development', context: 'Compared to traditional bespoke software coding.' },
      { metric: '500+', label: 'Pre-Built Connectors', context: 'Instantly connect SAP, Salesforce, and Azure.' },
      { metric: '£300k+', label: 'Annual Development Savings', context: 'Replaced multiple point SaaS subscriptions.' }
    ],
    coreCapabilities: [
      { name: 'Power Apps (Low-Code App Studio)', description: 'Build intuitive mobile, tablet, and web applications for internal workflows in days rather than months.', highlight: 'Rapid Low-Code UI' },
      { name: 'Power Automate (Process Automation & RPA)', description: 'Automate multi-system workflows and robotic desktop tasks with intelligent error trapping.', highlight: 'End-to-End Automation' },
      { name: 'Power BI (Data Analytics)', description: 'Interactive visual dashboards connected directly to your core operational databases.', highlight: 'Live Data Intelligence' },
      { name: 'Power Pages (External Web Portals)', description: 'Secure, responsive web portals for customers, suppliers, and citizens with role-based access.', highlight: 'External Customer Portals' },
      { name: 'Microsoft Dataverse (Enterprise Data Engine)', description: 'Secure, relational data platform featuring enterprise security, auditing, and business event logic.', highlight: 'Robust Relational Core' },
      { name: 'Microsoft Copilot Studio (AI Agent Builder)', description: 'Design custom conversational AI agents that trigger workflows and answer inquiries automatically.', highlight: 'Custom AI Chatbots' }
    ],
    copilotFeatures: [
      'Natural language app creation: describe the desired business process and Copilot generates the initial screens and tables',
      'Automated flow generation: describe the trigger and actions to generate Power Automate logic automatically',
      'Intelligent formula assistant writing complex Power Fx expressions on demand'
    ],
    architecturePoints: [
      'Enterprise application lifecycle management (ALM) supporting solution packaging and Git integration',
      'Comprehensive Data Loss Prevention (DLP) policies restricting connector usage by environment tier',
      'Scalable Dataverse storage backed by Azure SQL and Azure Cosmos DB'
    ],
    faqs: [
      { q: 'Can Power Platform connect to non-Microsoft ERP systems?', a: 'Yes. With over 500+ connectors and custom REST connectors, Power Platform easily integrates with SAP, Oracle, NetSuite, and legacy on-prem databases.' }
    ]
  },
  {
    slug: 'azure',
    title: 'Microsoft Azure Cloud Foundation',
    category: 'Platform',
    tagline: 'Secure cloud foundation for Dynamics workloads.',
    summary: 'Architect highly resilient, compliant Azure infrastructure optimized specifically for enterprise Dynamics 365, integration hubs, and data lakes.',
    targetMarket: 'Enterprise IT & Cloud Operations',
    businessImpact: [
      { metric: '99.99%', label: 'High Availability Uptime', context: 'Multi-region geo-redundancy in UK datacenters.' },
      { metric: 'ISO 27001', label: 'Certified Security', context: 'UK sovereign data residency and encryption.' },
      { metric: '30%', label: 'Cloud Infrastructure Savings', context: 'Reserved capacity and auto-scaling logic.' }
    ],
    coreCapabilities: [
      { name: 'Azure Virtual Networks & ExpressRoute', description: 'Establish private, encrypted low-latency network tunnels between your offices, factories, and Dynamics tenants.', highlight: 'Private Cloud Tunnels' },
      { name: 'Microsoft Entra ID (Identity & PIM)', description: 'Enterprise single sign-on (SSO), multi-factor authentication, and privileged identity management governance.', highlight: 'Zero Trust Identity' },
      { name: 'Azure Key Vault & Encryption', description: 'Centralized management of cryptographic keys, API certificates, and database connection secrets.', highlight: 'FIPS 140-2 Encryption' },
      { name: 'Azure Application Insights & Monitor', description: 'Real-time telemetry diagnostics, latency alerts, and automated exception capture across your stack.', highlight: 'Full-Stack Observability' },
      { name: 'Azure Cost Management & FinOps', description: 'Continuous cost governance, right-sizing recommendations, and budget threshold alerts.', highlight: 'Transparent Cloud Spend' },
      { name: 'Business Continuity & Disaster Recovery', description: 'Automated geo-replicated backups and rapid disaster recovery runbooks with sub-hour RTO.', highlight: '< 1 Hour Recovery' }
    ],
    copilotFeatures: [
      'Copilot for Azure troubleshooting infrastructure alerts and diagnosing slow query latency',
      'Automated Infrastructure-as-Code generation using Bicep templates and Terraform',
      'Intelligent security posture score recommendations pre-empting misconfigurations'
    ],
    architecturePoints: [
      'Hosted strictly within UK South and UK West sovereign datacenter regions',
      'Aligned with UK National Cyber Security Centre (NCSC) cloud security principles',
      'Automated compliance blueprints for Cyber Essentials Plus, SOC 1/2/3, and ISO 27001'
    ],
    faqs: [
      { q: 'Where is our company data physically stored?', a: 'All Dynamics 365 and Azure environments are provisioned within UK sovereign datacenters (London / Cardiff) guaranteeing data residency.' }
    ]
  },
  {
    slug: 'fabric',
    title: 'Microsoft Fabric Unified Data',
    category: 'AI & Analytics',
    tagline: 'Unified data platform for analytics and AI.',
    summary: 'Consolidate disparate databases, data lakes, and business intelligence into one unified lakehouse powered by Microsoft OneLake.',
    targetMarket: 'Data & Analytics Leadership',
    businessImpact: [
      { metric: '5x', label: 'Faster Query Execution', context: 'In-memory Direct Lake query technology.' },
      { metric: '50%', label: 'Lower Data Storage Costs', context: 'Single copy of data in open Delta Parquet format.' },
      { metric: 'Sub-Minute', label: 'Synapse Link Sync', context: 'Direct replication from Dynamics 365.' }
    ],
    coreCapabilities: [
      { name: 'OneLake (The OneDrive for Data)', description: 'A single, unified SaaS data lake for your entire enterprise, eliminating disconnected data silos.', highlight: 'Zero Data Duplication' },
      { name: 'Synapse Data Engineering & Spark', description: 'High-performance Apache Spark engines for high-volume data transformation and lakehouse curation.', highlight: 'Scalable Big Data' },
      { name: 'Synapse Data Warehouse', description: 'Industry-leading SQL performance with complete separation of compute and storage in open Delta format.', highlight: 'Open Format Standard' },
      { name: 'Direct Lake Power BI Connectivity', description: 'Read data directly from OneLake storage without data imports or scheduled dataset refreshes.', highlight: 'Direct Lake Speed' },
      { name: 'Real-Time Intelligence & KQL', description: 'Ingest and analyze millions of IoT events and transactional logs with sub-second query latency.', highlight: 'Real-Time Event Streams' },
      { name: 'Microsoft Purview Governance', description: 'Built-in sensitivity labels, data lineage tracing, and regulatory compliance mapping.', highlight: 'Automated Data Lineage' }
    ],
    copilotFeatures: [
      'Copilot for Data Engineering generating optimized PySpark and SQL transformation scripts',
      'Natural language data exploration generating DAX queries and visualizations on demand',
      'Automated semantic model documentation and business glossary tagging'
    ],
    architecturePoints: [
      'Delta Lake open table format ensuring vendor neutrality and zero proprietary lock-in',
      'Seamless shortcuts connecting Amazon S3 and Google Cloud Storage buckets into OneLake',
      'Capacity-based pooling allowing shared resource allocation across all analytics workloads'
    ],
    faqs: [
      { q: 'How do we connect Dynamics 365 to Microsoft Fabric?', a: 'Using Azure Synapse Link for Dataverse, you select your Dynamics tables and they automatically replicate into Fabric OneLake in minutes with zero custom coding.' }
    ]
  }
];

// -------------------------------------------------------------
// ALL 16 INDUSTRIES DATA
// -------------------------------------------------------------
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    code: '01',
    summary: 'Discrete and process manufacturing on Dynamics 365 Supply Chain Management.',
    regulatoryFocus: 'ISO 9001, OEE Optimization, Batch Traceability, RoHS',
    acceleratorModules: ['Shop Floor Execution Touchscreens', 'Automated Scrap & By-product Accounting', 'Dynamic Capacity Balancing', 'Machine IoT Telemetry'],
    keyOutcomes: ['32% OEE uplift', '28% reduction in inventory carrying costs', '100% forward and backward lot recall speed']
  },
  {
    slug: 'financial-services',
    title: 'Financial Services',
    code: '02',
    summary: 'FCA-aligned finance, multi-entity consolidation and client management.',
    regulatoryFocus: 'FCA Handbook, SOX Compliance, IFRS 9 / 16, Bank-Grade Audit Trails',
    acceleratorModules: ['Automated Intercompany Netting', 'Sub-ledger Multi-currency Revaluation', 'Strict Segregation of Duties (SoD)', 'AML & KYC Integration'],
    keyOutcomes: ['40% operational efficiency uplift', '3-day global month-end close', 'Zero audit non-conformances']
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    code: '03',
    summary: 'Patient-centric operations, supply chain resilience, and NHS-compliant regulatory rigour.',
    regulatoryFocus: 'CQC Guidelines, NHS Digital Data Standards, MHRA GMP, GDPR Health Data',
    acceleratorModules: ['Cold-Chain Batch Tracking', 'Clinical Asset Maintenance', 'Consumable Demand Forecasting', 'Strict PII Redaction Vaults'],
    keyOutcomes: ['99.9% critical supply availability', 'Audit-ready medical device genealogy', '35% reduction in procurement cycle times']
  },
  {
    slug: 'retail',
    title: 'Retail & Consumer Goods',
    code: '04',
    summary: 'Unified commerce connecting physical POS, e-commerce, and back-office distribution.',
    regulatoryFocus: 'PCI-DSS v4.0, Consumer Rights Act, Consumer Duty, Multi-channel VAT',
    acceleratorModules: ['Mobile Store Point of Sale', 'Distributed Order Management (DOM)', 'Loyalty & Clienteling', 'Dynamic Markdown Intelligence'],
    keyOutcomes: ['22% average basket uplift', '99.98% POS checkout uptime', 'Unified single inventory view across all stores']
  },
  {
    slug: 'construction',
    title: 'Construction & Engineering',
    code: '05',
    summary: 'Project-driven job costing, subcontractor management, and site execution on Dynamics.',
    regulatoryFocus: 'CIS (Construction Industry Scheme), Building Safety Act, NEC4 Contracts',
    acceleratorModules: ['Subcontractor CIS Retention Accounting', 'WIP & Milestone Revenue Recognition', 'Plant & Equipment Tracking', 'Mobile Site Variation Logging'],
    keyOutcomes: ['Real-time project margin visibility', 'Zero CIS calculation discrepancies', '45% faster contractor payment approvals']
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Property',
    code: '06',
    summary: 'Portfolio management, tenancy billing, service charges, and facilities execution.',
    regulatoryFocus: 'RICS Guidelines, Landlord and Tenant Act, Service Charge Audits',
    acceleratorModules: ['Tenancy Lease Accounting', 'Automated Service Charge Apportionment', 'Contractor Work Orders', 'Occupancy Analytics'],
    keyOutcomes: ['Zero lease billing slippage', '95% on-time service charge reconciliation', '30% lower maintenance dispatch costs']
  },
  {
    slug: 'education',
    title: 'Education & Universities',
    code: '07',
    summary: 'Student lifecycle, grant funding accounting, staff resourcing, and campus modernization.',
    regulatoryFocus: 'OfS Regulatory Framework, HESA Reporting, Research Grant Governance',
    acceleratorModules: ['Research Grant Fund Accounting', 'Campus Asset Management', 'Student Enquiry Omnichannel Routing', 'Academic Budgeting & Forecasting'],
    keyOutcomes: ['Complete grant auditability', '25% reduction in administrative overheads', 'Unified student service desk']
  },
  {
    slug: 'ngo',
    title: 'NGO & Non-Profit',
    code: '08',
    summary: 'Fund accounting, multi-currency grants, donor engagement, and humanitarian logistics.',
    regulatoryFocus: 'Charity Commission SORP, Donor Grant Restrictions, IATI Standard',
    acceleratorModules: ['Restricted vs Unrestricted Fund Balances', 'Grant Milestone Tracking', 'Volunteer & Donor Management', 'Field Procurement & Logistics'],
    keyOutcomes: ['100% compliance with donor covenants', 'Zero manual fund allocation spreadsheets', 'Transparency for public reporting']
  },
  {
    slug: 'wholesale',
    title: 'Wholesale & Trade',
    code: '09',
    summary: 'High-volume trade, tiered customer pricing, container tracking, and trade credit management.',
    regulatoryFocus: 'Incoterms 2020, Duty Deferment, Customs Declarations, Trade Credit Compliance',
    acceleratorModules: ['Matrix Item Pricing & Rebates', 'Inbound Vessel Container Tracking', 'Credit Limit Enforcement', 'B2B Self-Service Trade Portal'],
    keyOutcomes: ['Real-time landed cost visibility', '30% faster order processing', 'Zero unauthorized customer credit overrides']
  },
  {
    slug: 'distribution',
    title: 'Distribution & Logistics',
    code: '10',
    summary: 'Automated warehousing, 3PL integrations, cross-docking, and last-mile route dispatch.',
    regulatoryFocus: 'ADR Dangerous Goods, Driver Hours Regulations, Chain of Custody',
    acceleratorModules: ['Wave & Cluster RF Directed Picking', 'Automated Cross-Docking', 'Carrier EDI Rate Shopping', 'Live Delivery ETA SMS'],
    keyOutcomes: ['99.8% shipping order accuracy', '35% reduction in warehouse travel distance', 'Sub-second parcel label generation']
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    code: '11',
    summary: 'Ingredient traceability, catch weight management, recipe formulation, and shelf-life expiration.',
    regulatoryFocus: 'BRCGS Food Safety, FSA Regulations, Allergen Control, Natasha\'s Law',
    acceleratorModules: ['Catch Weight Pricing & Inventory', 'Recipe Formulation & Nutritional Profiling', 'FEFO (First Expired First Out) Picking', 'Instant Recall Traceability'],
    keyOutcomes: ['4-minute full audit lot recall speed', '40% reduction in perishable spoilage waste', 'Complete allergen labeling compliance']
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    code: '12',
    summary: 'Consulting projects, resource utilization, billable timesheets, and milestone invoicing.',
    regulatoryFocus: 'Statutory Revenue Recognition (IFRS 15), Professional Indemnity Auditing',
    acceleratorModules: ['Skills-Based Resource Scheduling', 'Mobile Timesheet & Expense Capture', 'Multi-Rate Card Billing', 'Project Profitability Forecasting'],
    keyOutcomes: ['85%+ billable consultant utilization', 'Weekly cash collection acceleration', 'Zero missed unbilled project expenses']
  },
  {
    slug: 'logistics',
    title: 'Transport & Freight',
    code: '13',
    summary: 'Fleet operations, multi-modal freight forwarding, fuel surcharges, and customs documentation.',
    regulatoryFocus: 'DVSA Roadworthiness Standards, CMR Convention, Customs Clearance',
    acceleratorModules: ['Fleet Maintenance Schedules', 'Dynamic Fuel Surcharge Calculations', 'Freight Manifest Generation', 'Driver Inspection Mobile App'],
    keyOutcomes: ['20% reduction in vehicle downtime', 'Automated customer proof-of-delivery capture', 'Optimized backhaul profitability']
  },
  {
    slug: 'automotive',
    title: 'Automotive & Mobility',
    code: '14',
    summary: 'Dealer management, OEM spare parts distribution, warranty claims, and after-sales service.',
    regulatoryFocus: 'Block Exemption Regulation (BER), VCA Certification, Warranty Compliance',
    acceleratorModules: ['VIN & Vehicle Model Master Registry', 'OEM Parts Supersession Management', 'Warranty Claim Processing', 'Dealership Service Bay Booking'],
    keyOutcomes: ['98% spare parts fill rate', '50% faster warranty reimbursement cycles', 'Increased after-sales service retention']
  },
  {
    slug: 'energy',
    title: 'Energy & Utilities',
    code: '15',
    summary: 'Asset-intensive grid infrastructure, field inspection dispatch, and environmental reporting.',
    regulatoryFocus: 'Ofgem Regulations, ESG Reporting, Control of Major Accident Hazards (COMAH)',
    acceleratorModules: ['Remote Asset Telemetry Diagnostics', 'Field Crew Safety Inspections', 'Environmental Incident Logging', 'Capital Work In Progress (CWIP)'],
    keyOutcomes: ['Predictive equipment failure prevention', 'Zero safety audit breaches', 'Accurate multi-year capital infrastructure accounting']
  },
  {
    slug: 'public-sector',
    title: 'Public Sector & Local Gov',
    code: '16',
    summary: 'Citizen digital services, departmental grant management, and transparent municipal finance.',
    regulatoryFocus: 'Public Sector Equality Duty, Crown Commercial Service (CCS) Standards, FOI Auditing',
    acceleratorModules: ['Municipal Fund & Council Tax Accounting', 'Citizen Online Portal', 'Grant Application Workflows', 'Transparent Public Procurement'],
    keyOutcomes: ['Full public spend transparency', '35% reduction in case handling backlog', 'Strict adherence to government digital guidelines']
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
