"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { MagneticButton } from "./ui/magnetic-button";

const EASE = [0.16, 1, 0.3, 1] as const;

const leftVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const rightVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: EASE },
  },
};

const socialLinkVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.08,
      ease: EASE,
    },
  }),
};

const socials = [
  { label: "Github / Code", href: personalInfo.github },
  { label: "LinkedIn / Network", href: personalInfo.linkedin },
  { label: "Email / anshumsahoo07@gmail.com", href: `mailto:${personalInfo.email}` },
];

export function Contact() {
  return (
    <footer id="contact" className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-brand-navy border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-8 items-center">
          {/* Left — CTA */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-brand-white font-light mb-4 sm:mb-6 leading-tight">
              Ready to create <br className="hidden sm:inline" />
              something extraordinary?
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-brand-light-gray max-w-sm mb-8 sm:mb-12"
            >
              Interested in data analytics internships, analytical problem solving, and selective collaborations.
              Let&apos;s build something impactful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            >
              <a href={`mailto:${personalInfo.email}`} className="block sm:inline-block w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto min-h-[48px]">
                  Start a Conversation
                </MagneticButton>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Socials */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:items-end justify-center h-full pt-4 md:pt-0"
          >
            <div className="space-y-3 sm:space-y-4 text-left md:text-right w-full md:w-auto">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="block font-sans text-brand-gray text-xs uppercase tracking-widest mb-3 sm:mb-4"
              >
                Socials &amp; Contact
              </motion.span>

              {socials.map((social, i) => {
                const isMail = social.href.startsWith("mailto:");
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    custom={i}
                    variants={socialLinkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      x: -6,
                      color: "rgba(255,255,255,1)",
                      transition: { duration: 0.2 },
                    }}
                    className="block font-sans text-brand-light-gray hover:text-brand-white text-sm sm:text-base md:text-lg lg:text-xl transition-colors py-1.5 min-h-[44px] flex items-center md:justify-end break-all sm:break-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
                  >
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-brand-white/5 flex justify-center items-center text-center px-4"
        >
          <p className="font-sans text-brand-gray/50 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
