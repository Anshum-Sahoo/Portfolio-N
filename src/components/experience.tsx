"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const timelineCardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const markerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gray mb-12 sm:mb-16 text-center"
        >
          Experience &amp; Education
        </motion.h2>

        {/* Animated timeline line */}
        <div className="space-y-8 sm:space-y-12 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="absolute ml-4 sm:ml-5 -translate-x-px md:mx-auto md:left-1/2 md:translate-x-0 h-full w-0.5 bg-gradient-to-b from-transparent via-brand-white/10 to-transparent origin-top"
            aria-hidden
          />

          {experience.map((exp) => {
            return (
              <motion.div
                key={exp.id}
                variants={timelineCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Marker */}
                <motion.div
                  variants={markerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, borderColor: "rgba(255,255,255,0.4)" }}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand-white/10 bg-brand-navy-dark shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-inner z-10 transition-colors group-hover:border-brand-gray/50"
                >
                  <motion.div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gray/50 rounded-full"
                    whileHover={{ scale: 1.5, backgroundColor: "#fff" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                <div className="w-[calc(100%-2.75rem)] sm:w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] py-2 sm:py-4">
                  <motion.div
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:group-odd:items-end p-4 sm:p-5 md:p-6 border border-brand-white/5 bg-brand-white/[0.02] backdrop-blur-sm"
                    style={{
                      boxShadow: "0 0 0 transparent",
                      transition: "box-shadow 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 10px 30px rgba(255,255,255,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 0 transparent";
                    }}
                  >
                    <span className="font-sans text-brand-white text-[11px] sm:text-xs tracking-widest uppercase mb-1">
                      {exp.duration}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-brand-white mb-1 md:group-odd:text-right">
                      {exp.role}
                    </h3>
                    <h4 className="font-sans text-brand-gray text-xs sm:text-sm mb-3 md:group-odd:text-right">
                      {exp.company}
                    </h4>
                    <p className="font-sans text-brand-light-gray/70 text-xs sm:text-sm leading-relaxed md:group-odd:text-right">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
