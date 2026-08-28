"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────
 * Existing project data — preserved exactly from the previous section.
 * No fake projects, clients, statistics, or experience were added.
 * ──────────────────────────────────────────────────────────────────── */
const projects = [
  {
    id: "gestura",
    title: "Gestura — Real-Time Sign Language Interpreter",
    period: "2025",
    description:
      "Millions of hearing-impaired individuals face daily communication barriers because standard interfaces are not designed for sign language. Gestura addresses this by using a webcam feed and MediaPipe hand-landmark detection to classify ASL gestures in real time with a trained TensorFlow model. The system achieves over 90% classification accuracy across 26 letter signs, converts gestures to text on-screen, and eliminates the need for a human interpreter in basic communication scenarios.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "greencommute",
    title: "GreenCommute — AQI-Based Route Optimization",
    period: "2024",
    description:
      "Urban commuters lack easy access to air quality data when choosing their daily routes, leading to avoidable exposure to harmful pollutants. GreenCommute pulls real-time AQI readings from public APIs, overlays them on route segments using Pandas and geospatial data processing, and ranks available paths by pollution exposure rather than just travel time. A Flask-powered dashboard lets users compare routes visually, with Power BI reports surfacing weekly trends and peak pollution windows that helped test users reduce exposure by an estimated 30%.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: "sales-dashboard",
    title: "Sales Analytics Dashboard",
    period: "2024",
    description:
      "Raw transactional sales data stored across multiple Excel sheets made it impossible to identify trends, underperforming categories, or regional demand patterns in real time. The project involved cleaning and normalizing three years of sales records using SQL and Python, then building a multi-page Power BI dashboard with DAX measures for revenue KPIs, month-over-month growth, top-10 product rankings, and regional heat maps. The final dashboard reduced manual reporting time from several hours per week to a single automated refresh.",
    githubUrl: "#",
    liveUrl: "",
  },
];

/* ─────────────────────────────────────────────────────────────────────
 * Sector definitions — these represent areas where data analytics
 * CAN be applied. They do NOT claim professional industry experience.
 *
 * projectIds maps to the `id` field in `projects` above.
 * Only projects with a genuine, logical connection are assigned.
 * ──────────────────────────────────────────────────────────────────── */
const sectors = [
  {
    number: "01",
    name: "HEALTHCARE & LIFE SCIENCES",
    tagline: "Analytics for better healthcare decisions",
    description:
      "Patient data, healthcare operations, medical insights, performance analysis and data-driven decision making.",
    projectIds: ["greencommute"], // AQI data directly affects public health outcomes
  },
  {
    number: "02",
    name: "FINANCE & BANKING",
    tagline: "Analytics for financial intelligence",
    description:
      "Financial performance, customer behavior, fraud analysis, risk analysis and business intelligence.",
    projectIds: ["sales-dashboard"], // Revenue KPIs, financial trend analysis
  },
  {
    number: "03",
    name: "RETAIL & E-COMMERCE",
    tagline: "Analytics for smarter commerce",
    description:
      "Sales performance, customer behavior, product analysis, purchasing patterns and business growth.",
    projectIds: ["sales-dashboard"], // Product rankings, regional sales, revenue dashboards
  },
  {
    number: "04",
    name: "MARKETING & CUSTOMER ANALYTICS",
    tagline: "Understanding customers through data",
    description:
      "Customer segmentation, campaign performance, conversion analysis, retention and churn.",
    projectIds: [], // No existing project has a genuine marketing/customer analytics focus
  },
  {
    number: "05",
    name: "TECHNOLOGY & AI",
    tagline: "Data, intelligence and intelligent systems",
    description:
      "Machine learning, AI applications, computer vision, product analytics and data-driven technology.",
    projectIds: ["gestura"], // Computer vision, TensorFlow, real-time ML classification
  },
];

function getProjectsForSector(projectIds: string[]) {
  return projects.filter((p) => projectIds.includes(p.id));
}

/* ─────────────────────────────────────────────────────────────────────
 * SectorRow — a single editorial row with expand/collapse interaction
 * ──────────────────────────────────────────────────────────────────── */
function SectorRow({
  sector,
  isExpanded,
  onToggle,
  index,
}: {
  sector: (typeof sectors)[number];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const sectorProjects = getProjectsForSector(sector.projectIds);
  const hasProjects = sectorProjects.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="border-b border-outline-variant"
    >
      {/* Clickable row header */}
      <button
        type="button"
        onClick={hasProjects ? onToggle : undefined}
        aria-expanded={hasProjects ? isExpanded : undefined}
        className={`w-full text-left py-8 md:py-10 group ${
          hasProjects ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {/* Desktop: 3-column grid — Number | Name+Tagline | Arrow */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0">
          {/* Number */}
          <span className="font-label text-[10px] font-bold tracking-editorial text-secondary md:w-16 shrink-0">
            {sector.number}
          </span>

          {/* Center: Name + Tagline */}
          <div className="flex-1 min-w-0">
            <h3 className="font-headline font-bold text-xl md:text-2xl tracking-architectural text-primary transition-opacity duration-300 group-hover:opacity-70">
              {sector.name}
            </h3>
            <p className="font-body text-sm text-secondary mt-2">
              {sector.tagline}
            </p>
          </div>

          {/* Right: EXPLORE arrow (only when projects exist) */}
          {hasProjects && (
            <span className="font-label text-[10px] font-bold uppercase tracking-editorial text-secondary shrink-0 md:ml-8 transition-transform duration-300 group-hover:translate-x-1 inline-flex items-center gap-1">
              {isExpanded ? "CLOSE" : "EXPLORE"}{" "}
              <span
                className="inline-block transition-transform duration-300"
                style={{
                  transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                →
              </span>
            </span>
          )}
        </div>
      </button>

      {/* Expanded project details */}
      <AnimatePresence initial={false}>
        {isExpanded && hasProjects && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pl-16 space-y-10">
              {sectorProjects.map((project) => (
                <div
                  key={project.id}
                  className="border-l border-outline-variant pl-8"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                    <h4 className="font-headline font-bold text-lg text-primary">
                      {project.title}
                    </h4>
                    <span className="font-label text-xs tracking-widest text-secondary">
                      {project.period}
                    </span>
                  </div>
                  <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex gap-6 mt-6">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-label text-[11px] font-bold uppercase tracking-widest text-primary border-b border-transparent hover:border-primary transition-colors pb-1 inline-block"
                        >
                          View Code ↗
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-label text-[11px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pb-1 inline-block"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
 * IndustriesSection — replaces the old ExperienceSection
 * ──────────────────────────────────────────────────────────────────── */
export function IndustriesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      id="experience"
      className="px-8 md:px-16 max-w-screen-2xl mx-auto py-32 border-t border-outline-variant bg-surface-container-low"
    >
      {/* Section label */}
      <div className="mb-16">
        <span className="font-label text-[10px] font-bold uppercase tracking-editorial text-secondary">
          03 — INDUSTRIES & ANALYTICS
        </span>
      </div>

      {/* Sector rows */}
      <div className="border-t border-outline-variant">
        {sectors.map((sector, index) => (
          <SectorRow
            key={sector.number}
            sector={sector}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
