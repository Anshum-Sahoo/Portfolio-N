"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.15,
      ease: EASE,
    },
  }),
};

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-brand-navy-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8"
        >
          <motion.div variants={fadeUp} className="md:col-span-1 lg:col-span-3">
            <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gray">
              About
            </h2>
            {/* Animated accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="mt-3 md:mt-4 h-[1px] w-16 bg-brand-gray/30 origin-left"
            />
          </motion.div>

          <div className="md:col-span-3 lg:col-span-9">
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-tight text-brand-white font-light">
                {personalInfo.shortBio}
              </h3>
            </motion.div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  label: "Philosophy",
                  text: "Data without business context is just noise. I believe analytical rigor and clear visual communication must go hand in hand to drive confident operational decisions.",
                },
                {
                  label: "Approach",
                  text: "Writing modular, reproducible SQL queries and clean code as the foundation for executive dashboards and full-stack data prototypes.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="flex-1 p-5 sm:p-6 border border-brand-white/5 bg-brand-white/[0.02] backdrop-blur-sm cursor-default transition-shadow hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]"
                >
                  <span className="block font-sans text-brand-gray text-xs uppercase tracking-widest mb-2 sm:mb-3">
                    {card.label}
                  </span>
                  <p className="font-sans text-brand-light-gray/80 leading-relaxed text-xs sm:text-sm lg:text-base">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
