"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Gestura — Real-Time Sign Language Interpreter",
    period: "2025",
    company: "Personal Project",
    description:
      "Millions of hearing-impaired individuals face daily communication barriers because standard interfaces are not designed for sign language. Gestura addresses this by using a webcam feed and MediaPipe hand-landmark detection to classify ASL gestures in real time with a trained TensorFlow model. The system achieves over 90% classification accuracy across 26 letter signs, converts gestures to text on-screen, and eliminates the need for a human interpreter in basic communication scenarios.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    role: "GreenCommute — AQI-Based Route Optimization",
    period: "2024",
    company: "Academic Project",
    description:
      "Urban commuters lack easy access to air quality data when choosing their daily routes, leading to avoidable exposure to harmful pollutants. GreenCommute pulls real-time AQI readings from public APIs, overlays them on route segments using Pandas and geospatial data processing, and ranks available paths by pollution exposure rather than just travel time. A Flask-powered dashboard lets users compare routes visually, with Power BI reports surfacing weekly trends and peak pollution windows that helped test users reduce exposure by an estimated 30%.",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    role: "Sales Analytics Dashboard",
    period: "2024",
    company: "Personal Project",
    description:
      "Raw transactional sales data stored across multiple Excel sheets made it impossible to identify trends, underperforming categories, or regional demand patterns in real time. The project involved cleaning and normalizing three years of sales records using SQL and Python, then building a multi-page Power BI dashboard with DAX measures for revenue KPIs, month-over-month growth, top-10 product rankings, and regional heat maps. The final dashboard reduced manual reporting time from several hours per week to a single automated refresh.",
    githubUrl: "#",
    liveUrl: "",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-8 md:px-16 max-w-screen-2xl mx-auto py-32 border-t border-outline-variant bg-surface-container-low">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <span className="font-label text-[10px] font-bold uppercase tracking-editorial text-secondary">
            02. PROJECTS & EXPERIENCE
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8 space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="group border-b border-outline-variant pb-8 hover:border-primary transition-colors duration-500"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-headline font-bold text-2xl text-primary">{exp.role}</h3>
                <span className="font-label text-xs tracking-widest text-secondary">{exp.period}</span>
              </div>
              <p className="font-label text-xs uppercase tracking-widest text-secondary mb-6">{exp.company}</p>
              <p className="font-body text-on-surface-variant max-w-xl">{exp.description}</p>
              
              {(exp.githubUrl || exp.liveUrl) && (
                <div className="flex gap-6 mt-8">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label text-[11px] font-bold uppercase tracking-widest text-primary border-b border-transparent hover:border-primary transition-colors pb-1 inline-block"
                    >
                      View Code ↗
                    </a>
                  )}
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label text-[11px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pb-1 inline-block"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
