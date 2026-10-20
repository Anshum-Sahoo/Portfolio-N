"use client";

import { motion } from "framer-motion";
import { projectCategories } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: EASE,
    },
  }),
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 px-5 sm:px-6 md:px-12 lg:px-24 bg-white text-neutral-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6"
        >
          <div>
            <span className="block font-sans text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2 sm:mb-3 font-medium">
              Portfolio &amp; Case Studies
            </span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-light tracking-tight">
              Featured Projects
            </h2>
            <div className="mt-3 sm:mt-4 h-[2px] w-16 sm:w-20 bg-neutral-900 origin-left" />
          </div>

          <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-md leading-relaxed">
            Data analytics case studies, financial decision workflows, and
            applied technology systems built with verified data and honest technical scope.
          </p>
        </motion.div>

        {/* Numbered Horizontal Category Rows */}
        <div className="border-t border-neutral-200">
          {projectCategories.map((category, catIndex) => {
            const project = category.projects[0];
            return (
              <motion.div
                key={category.slug}
                custom={catIndex}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="border-b border-neutral-200"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block py-8 sm:py-10 md:py-14 px-3 sm:px-5 md:px-6 -mx-3 sm:-mx-5 md:-mx-6 rounded-none transition-colors duration-300 hover:bg-neutral-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start md:items-center">
                    {/* Number & Category Heading */}
                    <div className="md:col-span-4 flex items-baseline gap-3 sm:gap-4 md:gap-6">
                      <span className="font-mono text-xs sm:text-sm md:text-base text-neutral-400 font-normal shrink-0">
                        {category.number}
                      </span>
                      <div className="min-w-0">
                        <span className="block font-sans text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-neutral-900 font-bold mb-0.5 sm:mb-1">
                          {category.label}
                        </span>
                        <span className="inline-block font-sans text-[11px] text-neutral-400 tracking-wide">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Short Summary */}
                    <div className="md:col-span-5 min-w-0">
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl text-neutral-900 font-medium tracking-tight mb-1.5 sm:mb-2 group-hover:text-neutral-700 transition-colors break-words">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Right-aligned EXPLORE link */}
                    <div className="md:col-span-3 flex justify-between md:justify-end items-center pt-3 md:pt-0 mt-2 md:mt-0 border-t border-neutral-100 md:border-t-0">
                      <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                        View Case Study
                      </span>
                      <span className="inline-flex items-center gap-1.5 sm:gap-2 font-sans text-xs md:text-sm uppercase tracking-[0.16em] sm:tracking-[0.18em] font-bold text-neutral-900 group-hover:text-black transition-all min-h-[44px] items-center">
                        <span>EXPLORE</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note inside projects section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-neutral-400 gap-4">
          <span className="font-mono tracking-wider">
            PRIMARY TARGET: DATA ANALYST INTERNSHIPS
          </span>
          <span className="font-sans">
            Click any project row or EXPLORE to view full case study &amp; metrics
          </span>
        </div>
      </div>
    </section>
  );
}
