"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { siteConfig } from "@/lib/config";

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
      aria-label="Introduction"
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
            I AM ANSHUM,<br />DATA ANALYST.
          </motion.h1>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end w-full">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="font-body text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed"
              >
                Transforming data into actionable insights through analytics, visualization, and machine learning.
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                className="font-label text-xs uppercase tracking-widest text-secondary max-w-md mt-4"
              >
                Python • SQL • Power BI • Excel • Machine Learning
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-4">
                <Button variant="primary" onClick={() => handleScroll("projects")} aria-label="Explore my projects">
                  EXPLORE WORK
                </Button>
                <Button variant="secondary" onClick={() => handleScroll("contact")} aria-label="Get in touch with me">
                  GET IN TOUCH
                </Button>
              </div>
              <div className="flex gap-6 pt-2">
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Anshum Sahoo's resume (opens in new tab)"
                  className="font-label text-[10px] font-bold uppercase tracking-editorial border-b border-primary pb-1 hover:opacity-50 transition-opacity duration-300"
                >
                  RESUME ↗
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Anshum Sahoo's GitHub profile (opens in new tab)"
                  className="font-label text-[10px] font-bold uppercase tracking-editorial border-b border-primary pb-1 hover:opacity-50 transition-opacity duration-300"
                >
                  GITHUB ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Anshum Sahoo's LinkedIn profile (opens in new tab)"
                  className="font-label text-[10px] font-bold uppercase tracking-editorial border-b border-primary pb-1 hover:opacity-50 transition-opacity duration-300"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

