"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="px-8 md:px-16 max-w-screen-2xl mx-auto py-48 border-t border-outline-variant bg-inverse-surface text-surface">
      <div className="grid grid-cols-12 gap-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-12 md:col-start-4 md:col-span-6 text-center"
        >
          <span className="font-label text-[10px] font-bold uppercase tracking-editorial opacity-60 mb-12 block text-surface">
            HAVE A PROJECT IN MIND?
          </span>
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl tracking-architectural mb-16 text-surface">
            LET&apos;S BUILD SOMETHING PERMANENT.
          </h2>
          <motion.a 
            whileHover={{ opacity: 0.5 }}
            transition={{ duration: 0.3 }}
            className="font-headline font-bold text-2xl md:text-4xl underline underline-offset-8 transition-opacity text-surface" 
            href="mailto:Anshumsahoo07@gmail.com"
          >
            ANSHUMSAHOO07@GMAIL.COM
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
