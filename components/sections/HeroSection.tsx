"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[819px] flex flex-col justify-center px-8 md:px-16 max-w-screen-2xl mx-auto py-24 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="grid grid-cols-12 gap-6 z-10 w-full">
        <div className="col-span-12 md:col-start-3 md:col-span-8 w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-headline font-extrabold text-6xl md:text-8xl tracking-architectural leading-[1.1] mb-12 text-primary"
          >
            I AM ANSHUM,<br />AI & ML ENGINEER .
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end w-full">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="font-body text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed"
            >
              I design and deploy intelligent AI/ML systems that combine technical precision with data-driven insight.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="flex gap-4"
            >
              <Button variant="primary" onClick={() => handleScroll("projects")}>
                EXPLORE WORK
              </Button>
              <Button variant="secondary" onClick={() => handleScroll("contact")}>
                GET IN TOUCH
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
