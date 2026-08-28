"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-8 md:px-16 max-w-screen-2xl mx-auto py-36 border-t border-outline-variant bg-inverse-surface text-surface"
    >
      <div className="grid grid-cols-12 gap-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-12 md:col-start-3 md:col-span-8 text-center space-y-10"
        >
          <div className="space-y-4">
            <span className="font-label text-[10px] font-bold uppercase tracking-editorial opacity-60 block text-surface">
              GET IN TOUCH
            </span>
            <h2
              id="contact-heading"
              className="font-headline font-extrabold text-4xl md:text-6xl tracking-architectural text-surface"
            >
              LET&apos;S WORK WITH DATA.
            </h2>
            <p className="font-body text-sm md:text-base opacity-75 max-w-md mx-auto text-surface pt-2">
              Open to Data Analyst internship opportunities.
            </p>
          </div>
          <div className="pt-8">
            <motion.a
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
              aria-label={`Send Anshum an email at ${siteConfig.email}`}
              className="font-headline font-bold text-xl md:text-3xl underline underline-offset-8 transition-opacity text-surface inline-block"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email.toUpperCase()}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

