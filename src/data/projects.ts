// Central project data — single source of truth for all project content.
// Structured to highlight data analytics competencies, business problem solving,
// technical execution, and honest project contributions.

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categorySlug: string;
  type: string;
  githubUrl: string;
  liveUrl?: string;
  summary: string;
  problem: string;
  objective: string;
  role: string;
  analyticalApproach: string[];
  techStack: TechGroup[];
  kpisAndMetrics?: { label: string; value: string; context: string }[];
  findings: { title: string; detail: string }[];
  screenshots: ProjectScreenshot[];
  learned: string[];
  disclaimer?: string;
}

export interface ProjectCategory {
  number: string;
  label: string;
  slug: string;
  description: string;
  projects: ProjectDetail[];
}

export const projectCategories: ProjectCategory[] = [
  {
    number: "01",
    label: "Transportation & Mobility",
    slug: "transportation-mobility",
    description:
      "Operational performance, cancellation diagnostics, and revenue analytics for ride-hailing services.",
    projects: [
      {
        slug: "ola-ride-booking-analysis",
        title: "Ola Ride Booking Analysis",
        subtitle:
          "End-to-end SQL querying and interactive Power BI dashboarding on 20,400+ ride-booking records.",
        category: "Transportation & Mobility",
        categorySlug: "transportation-mobility",
        type: "Personal Analytics Project",
        githubUrl: "https://github.com/Anshum-Sahoo/Ola",
        summary:
          "An interactive data analytics project evaluating 20,407 ride-booking records across operational efficiency, customer and driver cancellation drivers, vehicle-type economics, and payment preferences using MySQL views and a 5-page Power BI dashboard.",
        problem:
          "Ride-hailing operations generate large volumes of multi-dimensional transactional records across bookings, cancellations, vehicle categories, and ratings. Without structured data modeling and diagnostic analysis, operators struggle to isolate cancellation root causes, evaluate vehicle segment profitability, and identify patterns in driver unfulfillment.",
        objective:
          "Extract actionable operational insights from raw booking logs by writing 10 modular MySQL views and designing an interactive, 5-page Power BI executive dashboard with dynamic filtering across time, vehicle categories, and booking states.",
        role: "Sole Analyst — Responsible for end-to-end data exploration, schema setup, SQL view development, KPI formulation, Power BI dashboard architecture, and report documentation.",
        analyticalApproach: [
          "Data Modeling & Ingestion: Loaded 20,407 records with 20 transaction dimensions from CSV into a relational MySQL database schema.",
          "SQL Querying & Reusable Views: Authored 10 modular SQL views in MySQL Workbench to isolate successful rides, compute segment-level distance averages, isolate specific cancellation reasons, calculate rating ranges, filter UPI transactions, and rank top customers by total booking volume.",
          "5-Page Dashboard Architecture: Developed a structured Power BI report with dedicated pages for Overall Operations, Vehicle Type Breakdown, Revenue & Payment Dynamics, Cancellation Diagnostics, and Customer/Driver Ratings.",
          "Interactive Cross-Filtering: Configured dynamic date-range slicers and category filters enabling cross-dimensional analysis of booking status across pickup hours and vehicle classes.",
        ],
        kpisAndMetrics: [
          {
            label: "Total Bookings Analyzed",
            value: "20,407",
            context: "Complete July booking logs with 20 operational columns",
          },
          {
            label: "Booking Success Rate",
            value: "62.0%",
            context: "12,652 rides successfully completed out of 20,407 total requests",
          },
          {
            label: "Driver Cancellation Rate",
            value: "17.9%",
            context: "3,654 rides cancelled by drivers; largest unfulfilled category",
          },
          {
            label: "Cash & UPI Share",
            value: ">95%",
            context: "Cash (6,934) and UPI (5,113) dominate payment methods over cards",
          },
        ],
        techStack: [
          {
            label: "Data Analysis & Querying",
            items: ["MySQL", "SQL Views", "Aggregate Functions", "Data Filtering"],
          },
          {
            label: "Business Intelligence & Visualization",
            items: ["Microsoft Power BI", "KPI Card Design", "Cross-Filtering", "Dashboard Layouts"],
          },
          {
            label: "Data Storage & Tools",
            items: ["CSV (20,407 records)", "MySQL Workbench", "Git", "GitHub"],
          },
        ],
        findings: [
          {
            title: "Driver Cancellations Outpace Customer Cancellations",
            detail:
              "Analysis of unfulfilled bookings revealed 3,654 driver cancellations (17.9%) versus 2,081 customer cancellations (10.2%) and 2,020 'Driver Not Found' timeouts (9.9%). The leading driver cancellation driver was 'Personal & Car related issue' (1,263 rides), while customers predominantly cancelled because 'Driver is not moving towards pickup location' (610 rides) or 'Driver asked to cancel' (552 rides).",
          },
          {
            title: "Cash and UPI Represent Over 95% of Paid Volume",
            detail:
              "Payment breakdown among successful trips confirmed heavy reliance on Cash (6,934 transactions) and UPI (5,113 transactions). Credit Card payments (480) and Debit Cards (125) represented under 5% combined, indicating that digital payment optimization should target UPI workflows rather than card-based gateways.",
          },
          {
            title: "Even Vehicle Segment Distribution with Divergent Metrics",
            detail:
              "Bookings were evenly distributed across 7 vehicle classes (eBike: 2,997, Bike: 2,949, Prime Sedan: 2,945, Prime SUV: 2,945, Auto: 2,916, Mini: 2,867, Prime Plus: 2,788). However, average ride distances and driver-rating minimums diverged markedly between two-wheeler micro-mobility and premium sedan categories.",
          },
        ],
        screenshots: [
          {
            src: "/projects/ola-dashboard-overall.png",
            alt: "Ola Power BI Dashboard — Overall Operations View",
            caption:
              "Executive summary view tracking ride volume over time, overall booking status distribution, and active date filters.",
          },
          {
            src: "/projects/ola-dashboard-vehicle-type.png",
            alt: "Ola Power BI Dashboard — Vehicle Type Breakdown",
            caption:
              "Segment-level comparison analyzing sum of booking value, average ride distance, and total ride volume across vehicle categories.",
          },
          {
            src: "/projects/ola-dashboard-revenue.png",
            alt: "Ola Power BI Dashboard — Revenue and Payment Methods",
            caption:
              "Revenue distribution across Cash, UPI, and Card channels alongside top 5 customers ranked by cumulative booking value.",
          },
          {
            src: "/projects/ola-dashboard-cancellation.png",
            alt: "Ola Power BI Dashboard — Cancellation Diagnostics",
            caption:
              "Root-cause diagnostic isolating driver cancellation reasons, customer cancellation reasons, and succeeded booking ratios.",
          },
          {
            src: "/projects/ola-dashboard-ratings.png",
            alt: "Ola Power BI Dashboard — Rating Metrics",
            caption:
              "Customer satisfaction and driver performance rating comparisons across all 7 vehicle categories.",
          },
        ],
        learned: [
          "Formulating and structuring business questions into clean, reproducible SQL views rather than ad-hoc queries.",
          "Building executive-ready dashboards in Power BI with multi-level filtering and clear information hierarchy.",
          "Identifying bottlenecks in supply vs. demand fulfillment through cancellation reason analysis.",
          "Synthesizing findings into quantitative, business-focused insights suitable for operational stakeholders.",
        ],
      },
    ],
  },
  {
    number: "02",
    label: "Finance & Banking",
    slug: "finance-banking",
    description:
      "Consent-first financial data aggregation, synthetic transaction analysis, and deterministic credit underwriting.",
    projects: [
      {
        slug: "consent-first-sme-underwriting",
        title: "Consent-First SME Underwriting Platform",
        subtitle:
          "Full-stack fintech prototype demonstrating consent-driven financial data ingestion and explainable credit assessment.",
        category: "Finance & Banking",
        categorySlug: "finance-banking",
        type: "Team / Hackathon Prototype",
        githubUrl: "https://github.com/Anshum-Sahoo/sme",
        summary:
          "A full-stack underwriting platform prototype that demonstrates a regulatory-inspired Account Aggregator workflow: moving from loan application to explicit SME consent, retrieval of synthetic bank transactions and GST records, deterministic financial ratio analysis, and an explainable credit cockpit for bank underwriters.",
        problem:
          "SME lending is bottlenecked by fragmented, opaque financial verification. Underwriters must reconcile disconnected bank statements, GST filing statuses, and debt burdens manually. The core challenge addressed is how authorized financial data can be ingested with explicit user consent and converted into an explainable preliminary credit assessment within a unified workflow.",
        objective:
          "Build a working end-to-end prototype featuring separate Bank and SME interfaces, backend-owned consent state management, synthetic data retrieval via a Mock Account Aggregator, and a deterministic 5-metric risk scoring engine with transparent explanations.",
        role: "Team Contributor (Hackathon setting) — Worked across the full-stack architecture, contributing to the FastAPI backend routing, consent state synchronization, and the underwriter risk cockpit.",
        analyticalApproach: [
          "Role-Separated Architecture: Developed a single Next.js frontend hosting distinct `/bank` (application creation & underwriter cockpit) and `/sme` (consent review & authorization) portals communicating with a unified FastAPI backend.",
          "Strict Consent Lifecycle: Built a backend-owned state machine (`PENDING` → `APPROVED` → `DATA_READY` / `REJECTED`) ensuring financial data is inaccessible until explicit SME consent is granted with time-limited (24-hour) expiry.",
          "Mock Account Aggregator: Implemented a mock AA service serving multi-month synthetic bank transaction histories (48 to 115 records) and 12-month GST filing datasets across three differentiated SME profiles.",
          "Deterministic Scoring Algorithm: Formulated an explainable scoring formula weighting five key financial dimensions into a normalized 0–100 score: Cash Flow Stability (35%), Revenue Stability (20%), Debt Health Proxy (25%), GST Consistency (10%), and Transaction Risk (10%).",
          "Explainable Underwriter Cockpit: Provided quantitative metric scores paired with plain-language risk flags (e.g. GST sales discrepancies > 20%, high debit ratios, anomalous keywords) and preliminary recommended credit limits.",
        ],
        kpisAndMetrics: [
          {
            label: "Scoring Model",
            value: "Deterministic 0–100",
            context: "Rule-based mathematical evaluation, not an opaque black-box LLM",
          },
          {
            label: "Weighted Dimensions",
            value: "5 Indicators",
            context: "Cash Flow (35%), Revenue (20%), Debt (25%), GST (10%), Anomaly (10%)",
          },
          {
            label: "Profile Differentiation",
            value: "3 Profiles",
            context: "Baseline (72/100), Healthy (94/100), Higher-Risk (41/100) on ₹8L request",
          },
          {
            label: "Data Ingestion",
            value: "Synthetic Bank + GST",
            context: "48–115 synthetic transactions & 12 months GST filing data per profile",
          },
        ],
        techStack: [
          {
            label: "Frontend Architecture",
            items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Lucide React"],
          },
          {
            label: "Backend & Services",
            items: ["Python", "FastAPI", "Uvicorn", "Pydantic", "RESTful API"],
          },
          {
            label: "Data & Risk Modeling",
            items: [
              "Synthetic JSON Datasets",
              "In-Memory State Management",
              "Deterministic Financial Ratios",
              "Rule-Based Anomaly Flagging",
            ],
          },
          {
            label: "Deployment & Version Control",
            items: ["Vercel", "Render", "Git", "GitHub"],
          },
        ],
        findings: [
          {
            title: "Predictable Profile Stratification Under Rule-Based Engine",
            detail:
              "For an identical ₹8,00,000 synthetic loan request, the deterministic engine produced distinct assessments across test datasets: SME001 (Baseline) scored 72/100 (₹5,76,000 limit); SME002 (Healthy) scored 94/100 (₹7,52,000 limit); SME003 (Higher-Risk) scored 41/100 (₹3,28,000 limit) due to irregular cash flows and low debit coverage.",
          },
          {
            title: "Multi-Source Reconciliation Identifies Concealed Discrepancies",
            detail:
              "The GST consistency module cross-verified monthly bank credits flagged as 'SALES' against reported GST sales. Months exhibiting discrepancies > 20% triggered automatic audit flags, demonstrating how dual-source verification catches reporting mismatches.",
          },
          {
            title: "Consent-Gated Data Privacy by Architecture",
            detail:
              "Enforcing consent state strictly at the backend prevented premature data leakage. Underwriter endpoints returned 403 Forbidden on data requests until the SME explicitly authorized access via the portal.",
          },
        ],
        screenshots: [],
        learned: [
          "Designing financial underwriting workflows where data privacy and explicit user consent are first-class architectural constraints.",
          "Translating qualitative credit risk factors into deterministic, explainable mathematical formulas.",
          "Cross-verifying transactional banking data against governmental filing records (GST) to flag reporting variances.",
          "Collaborating across frontend, backend, and risk-engine modules under a shared API contract in a fast-paced hackathon setting.",
        ],
        disclaimer:
          "Prototype Disclaimer: Built as a hackathon prototype using synthetic data and simulated Account Aggregator responses. Does not connect to live banking networks, utilize trained machine learning credit models, or issue legally binding credit decisions.",
      },
    ],
  },
  {
    number: "03",
    label: "Technology & AI",
    slug: "technology-ai",
    description:
      "Real-time computer vision, hand landmark tracking, and multilingual accessibility interfaces.",
    projects: [
      {
        slug: "sign-language-translator",
        title: "Sign Language Translator (Gestura.ai)",
        subtitle:
          "Browser-based American Sign Language alphabet recognition using MediaPipe, CNN modeling, and audio synthesis.",
        category: "Technology & AI",
        categorySlug: "technology-ai",
        type: "Web Application / Project Contribution",
        githubUrl: "https://github.com/Anshum-Sahoo/sign-language-translator-web",
        summary:
          "A browser-accessible computer vision web application that captures webcam video, extracts 21 hand landmarks in real time via MediaPipe, classifies American Sign Language (ASL) finger-spelled alphabet gestures using a trained CNN model and geometric heuristics, and outputs real-time transcriptions with English and Hindi audio synthesis.",
        problem:
          "Millions of deaf and hard-of-hearing individuals rely on sign language, but standard web communication tools offer no native interpretation for gesture inputs. Deploying real-time computer vision models in web browsers often suffers from webcam concurrency conflicts, heavy computational overhead, and gesture ambiguity between visually similar hand configurations.",
        objective:
          "Adapt an existing desktop-based sign language research project into a responsive, thread-safe web application featuring live video streaming, hand skeleton visualization, sentence building with spelling correction, and dual-language text-to-speech output.",
        role: "Lead Developer (Hackathon Project) — Adapted and re-architected the upstream desktop computer vision scripts into a web-ready Flask application. Engineered the thread-safe background video capture loop, designed the glassmorphism web interface, and integrated multilingual text-to-speech services. Upstream model architecture originally based on academic sign-language conversion research; collaborated with Devansh Git on threading logic.",
        analyticalApproach: [
          "Pipeline Architecture: Engineered an end-to-end pipeline: Webcam Capture → MediaPipe 21-Landmark Extraction → 400x400 White Canvas Normalization → CNN Cluster Classification → Geometric Heuristic Disambiguation → Sentence Buffer → Audio Synthesis.",
          "Thread-Safe Video Streaming: Implemented a background capture loop in Flask using the Double-Check Locking pattern and thread locks to eliminate camera frame race conditions and deliver smooth ~25 FPS MJPEG streams.",
          "Dual-Stage Gesture Disambiguation: Hand landmarks were first classified into 8 gesture clusters via a pre-trained Keras CNN (`cnn8grps_rad1_model.h5`). A second-stage geometric ruleset evaluated knuckle distance ratios and coordinate thresholds to disambiguate visually adjacent signs (e.g., distinguishing A from S/E/T/M/N, C from O, and G from H).",
          "NLP & Accessibility Integration: Connected recognized character sequences to PyEnchant dictionary suggestion engines for spelling prediction, with text-to-speech output via gTTS (English) and Google Translate API (Hindi).",
        ],
        kpisAndMetrics: [
          {
            label: "Landmark Tracking",
            value: "21 Points",
            context: "MediaPipe hand skeleton extraction per frame",
          },
          {
            label: "Model Architecture",
            value: "CNN + Heuristics",
            context: "8-group CNN classification + geometric distance rules",
          },
          {
            label: "Stream Throughput",
            value: "~25 FPS",
            context: "Thread-isolated MJPEG camera and skeleton visualization streams",
          },
          {
            label: "Language Support",
            value: "English & Hindi",
            context: "Multilingual TTS synthesis via gTTS and translation APIs",
          },
        ],
        techStack: [
          {
            label: "Backend & Web Framework",
            items: ["Python", "Flask", "Multi-Threading", "Double-Check Locking"],
          },
          {
            label: "Computer Vision & AI",
            items: ["OpenCV", "MediaPipe", "cvzone", "TensorFlow", "Keras CNN Model"],
          },
          {
            label: "Frontend & Audio Services",
            items: ["HTML5", "CSS3 Glassmorphism", "gTTS", "Google Translate API", "PyEnchant"],
          },
        ],
        findings: [
          {
            title: "Hybrid CNN + Geometric Rules Solve Gesture Ambiguity",
            detail:
              "Direct 26-class single-shot classification on raw webcam images frequently confounded visually similar letters (such as A, E, M, N, S, T). Grouping letters into 8 structural classes via CNN and applying secondary finger-joint distance thresholds yielded far higher practical stability under variable lighting.",
          },
          {
            title: "Background Thread Isolation Prevents Server Deadlocks",
            detail:
              "Decoupling webcam read operations into a dedicated background daemon thread with explicit locking prevented Flask HTTP worker processes from blocking on video I/O, maintaining responsive API and dual-stream delivery.",
          },
          {
            title: "Clear Distinction Between Finger-Spelling and Full Sign Language",
            detail:
              "The implementation demonstrates static finger-spelling (A–Z alphabet) plus control gestures (Next, Space, Backspace). It accurately highlights the boundary between static letter recognition and continuous multi-sign syntactic interpretation.",
          },
        ],
        screenshots: [
          {
            src: "/projects/sign-language-screenshot.png",
            alt: "Gestura.ai Sign Language Translator Web Interface",
            caption:
              "The live Gestura.ai interface displaying real-time webcam video feed, extracted MediaPipe hand landmarks, predicted sign letter, sentence construction buffer, and audio playback controls.",
          },
        ],
        learned: [
          "Refactoring standalone desktop research scripts into a production-patterned, thread-safe web service.",
          "Designing hybrid machine learning pipelines that combine deep learning with geometric domain rules.",
          "Managing webcam hardware concurrency across multi-threaded HTTP servers.",
          "Honest technical communication regarding model limitations, dataset boundaries, and project attribution.",
        ],
        disclaimer:
          "Attribution & Scope: Web application adaptation built during a hackathon. The underlying CNN model and landmark drawing methodology derive from academic research on sign-to-speech conversion. Recognizes finger-spelled American Sign Language (ASL) static alphabet letters and control gestures; does not claim support for all global sign languages or continuous full-body syntactic translation.",
      },
    ],
  },
];

// Utility: get all projects as a flat array
export function getAllProjects(): ProjectDetail[] {
  return projectCategories.flatMap((cat) => cat.projects);
}

// Utility: find a project by slug
export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

// Utility: find a category by slug
export function getCategoryBySlug(slug: string): ProjectCategory | undefined {
  return projectCategories.find((cat) => cat.slug === slug);
}
