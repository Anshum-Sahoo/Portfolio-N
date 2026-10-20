"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (j: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: j * 0.06,
      ease: EASE,
    },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-brand-navy-dark border-y border-brand-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 lg:col-span-3"
          >
            <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-brand-gray">
              Capabilities
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-3 md:mt-4 h-[1px] w-16 bg-brand-gray/30 origin-left"
            />
          </motion.div>

          <div className="md:col-span-4 lg:col-span-9">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
            >
              {skills.map((skillGroup, i) => (
                <motion.div
                  key={i}
                  variants={groupVariants}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="cursor-default"
                >
                  <h4 className="font-display text-lg sm:text-xl text-brand-white mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-brand-white/10">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {skillGroup.tech.map((tech, j) => (
                      <motion.li
                        key={j}
                        custom={j}
                        variants={techItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        className="font-sans text-brand-light-gray/80 text-xs sm:text-sm flex items-center group cursor-default min-h-[32px]"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-brand-gray/30 mr-3 rounded-full shrink-0"
                          whileHover={{
                            scale: 1.8,
                            backgroundColor: "rgba(255,255,255,0.8)",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <span className="transition-colors group-hover:text-brand-white">
                          {tech}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
