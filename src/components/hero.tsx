"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/data/portfolio";
import { MagneticButton } from "./ui/magnetic-button";
import { ArrowDownRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms — foreground moves faster than background
  const heroY = useTransform(smoothProgress, [0, 1], [0, 150]);
  const bgOrbY1 = useTransform(smoothProgress, [0, 1], [0, -80]);
  const bgOrbY2 = useTransform(smoothProgress, [0, 1], [0, -120]);
  const bgOrbScale = useTransform(smoothProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const firstName = personalInfo.name.split(" ")[0];
  const lastName = personalInfo.name.split(" ")[1];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100dvh-4rem)] flex items-center pt-12 sm:pt-16 md:pt-24 pb-12 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Parallax Background Orbs */}
      <motion.div
        style={{ y: bgOrbY1, scale: bgOrbScale }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: bgOrbY2, scale: bgOrbScale }}
        className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-light-gray/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Main Content with parallax */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="w-full max-w-7xl mx-auto z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Name — letter-stagger reveal */}
            <motion.div variants={childVariants} className="overflow-hidden mb-6">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tight text-brand-white leading-[0.95] md:leading-[0.9]">
                {firstName.split("").map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    initial={{ opacity: 0, y: 80, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + i * 0.04,
                      ease: EASE,
                    }}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <br />
                <span className="text-brand-gray">
                  {lastName.split("").map((letter, i) => (
                    <motion.span
                      key={`last-${i}`}
                      initial={{ opacity: 0, y: 80, rotateX: 90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + i * 0.04,
                        ease: EASE,
                      }}
                      className="inline-block"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with reveal line */}
            <motion.div variants={childVariants} className="relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
                className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-[2px] bg-brand-gray/30 origin-top"
              />
              <p className="font-sans text-lg sm:text-xl md:text-2xl text-brand-light-gray max-w-xl font-light leading-relaxed pl-3 sm:pl-4">
                {personalInfo.title}
              </p>
            </motion.div>
          </div>

          {/* Right column — CTA & location */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end mb-2 lg:mb-4 w-full"
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-0 w-full sm:w-auto"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
              }}
            >
              <motion.div
                className="w-full sm:w-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
              >
                <a href="#projects" className="block w-full sm:w-auto">
                  <MagneticButton className="w-full sm:w-auto min-h-[48px]">
                    View Work <ArrowDownRight className="inline ml-2 w-4 h-4" />
                  </MagneticButton>
                </a>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
              >
                <a href="#contact" className="block w-full sm:w-auto">
                  <MagneticButton variant="secondary" className="w-full sm:w-auto min-h-[48px]">
                    Contact Me
                  </MagneticButton>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 sm:mt-12 lg:text-right"
            >
              <p className="font-sans text-xs uppercase tracking-widest text-brand-gray/60 mb-1 sm:mb-2">
                Based In
              </p>
              <p className="font-sans text-sm text-brand-light-gray">Delhi, India</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with bounce */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden sm:block absolute bottom-8 left-6 md:left-12 lg:left-24"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-brand-gray flex items-center gap-4">
          Scroll
          <motion.span
            animate={{ width: [48, 64, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-[1px] bg-brand-gray/50"
          />
        </span>
      </motion.div>
    </section>
  );
}
