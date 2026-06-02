"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Machine Learning Project",
    period: "Ongoing",
    company: "Personal Project",
    description: "Built and trained machine learning models using Python and Scikit-learn, including data preprocessing, feature engineering, and evaluation.",
    githubUrl: "#",
    liveUrl: "",
  },
  {
    role: "Deep Learning Project",
    period: "2024",
    company: "Academic / Self-Learning",
    description: "Developed neural network models using TensorFlow/PyTorch and explored concepts like classification, optimization, and model tuning.",
    githubUrl: "#",
    liveUrl: "",
  },
  {
    role: "Data Analysis Project",
    period: "2024",
    company: "Personal Project",
    description: "Performed exploratory data analysis using Pandas, NumPy, and visualization tools to extract insights from datasets.",
    githubUrl: "#",
    liveUrl: "",
  },
];

export function ExperienceSection() {
  return (
    <section id="projects" className="px-8 md:px-16 max-w-screen-2xl mx-auto py-32 border-t border-outline-variant bg-surface-container-low">
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
