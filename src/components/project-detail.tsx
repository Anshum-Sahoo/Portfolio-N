"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectDetail } from "@/data/projects";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

interface Props {
  project: ProjectDetail;
}

export function ProjectDetailView({ project }: Props) {
  return (
    <article className="min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-neutral-200">
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-4 sm:px-6 md:px-12 lg:px-24 py-3 sm:py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-1.5 sm:gap-2 font-sans text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-neutral-600 hover:text-black transition-colors min-h-[44px] flex items-center"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 shrink-0" />
            <span>
              <span className="hidden sm:inline">Return to </span>Projects
            </span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 border border-neutral-300 hover:border-black rounded-none text-neutral-900 font-sans text-xs uppercase tracking-wider font-medium transition-all hover:bg-black hover:text-white min-h-[38px] shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>
              <span className="hidden sm:inline">View on </span>GitHub
            </span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-14 px-5 sm:px-6 md:px-12 lg:px-24 border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Meta Category & Project Type */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-neutral-500"
            >
              <span className="font-semibold text-neutral-900">
                {project.category}
              </span>
              <span>/</span>
              <span>{project.type}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-normal tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 break-words"
            >
              {project.title}
            </motion.h1>

            {/* Subtitle / Summary */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm sm:text-base md:text-xl text-neutral-600 font-light leading-relaxed max-w-4xl mb-6 sm:mb-8"
            >
              {project.summary}
            </motion.p>

            {/* Disclaimer or Scope Alert if present */}
            {project.disclaimer && (
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-3 p-3.5 sm:p-4 bg-amber-50/70 border border-amber-200/80 rounded-none text-xs sm:text-sm text-amber-900 leading-relaxed max-w-4xl"
              >
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>{project.disclaimer}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* KPI Highlights Bar (if present) */}
      {project.kpisAndMetrics && project.kpisAndMetrics.length > 0 && (
        <section className="bg-neutral-100/70 border-b border-neutral-200 px-5 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {project.kpisAndMetrics.map((kpi, idx) => (
                <div key={idx} className="flex flex-col p-3.5 sm:p-0 bg-white sm:bg-transparent border border-neutral-200 sm:border-0">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-500 mb-0.5 sm:mb-1">
                    {kpi.label}
                  </span>
                  <span className="font-display text-xl sm:text-2xl md:text-3xl text-neutral-900 font-medium tracking-tight mb-0.5 sm:mb-1 break-words">
                    {kpi.value}
                  </span>
                  <span className="font-sans text-[11px] text-neutral-500 leading-snug">
                    {kpi.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Body */}
      <section className="py-12 sm:py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24">
          {/* Section: Problem & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                01 / CONTEXT
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                Problem &amp; Objective
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-neutral-900 mb-2">
                  The Problem
                </h3>
                <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 md:p-6 bg-white border border-neutral-200">
                <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-neutral-900 mb-2">
                  Project Objective
                </h3>
                <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-200" />

          {/* Section: My Role */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                02 / OWNERSHIP
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                Role &amp; Contribution
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="p-5 md:p-6 bg-white border border-neutral-200">
                <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-200" />

          {/* Section: Analytical Approach / Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                03 / METHODOLOGY
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                Analytical Approach
              </h2>
            </div>
            <div className="md:col-span-8">
              <ol className="space-y-4">
                {project.analyticalApproach.map((step, idx) => (
                  <li
                    key={idx}
                    className="p-4 md:p-5 bg-white border border-neutral-200 flex items-start gap-4"
                  >
                    <span className="font-mono text-xs text-neutral-400 font-semibold mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-200" />

          {/* Section: Verified Technology Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                04 / STACK
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                Verified Technologies
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.techStack.map((group, gIdx) => (
                  <div key={gIdx} className="p-5 bg-white border border-neutral-200">
                    <span className="block font-sans text-xs uppercase tracking-widest font-semibold text-neutral-900 mb-3">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-2.5 py-1 bg-neutral-100 text-neutral-800 border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-neutral-200" />

          {/* Section: Verified Findings or Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                05 / INSIGHTS
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                Verified Findings
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4">
              {project.findings.map((finding, fIdx) => (
                <div key={fIdx} className="p-5 md:p-6 bg-white border border-neutral-200">
                  <h3 className="font-sans text-sm md:text-base font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{finding.title}</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed pl-6">
                    {finding.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Actual Screenshots (if any) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <>
              <div className="h-[1px] bg-neutral-200" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4">
                  <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                    06 / VISUALS
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                    Dashboard &amp; UI
                  </h2>
                </div>
                <div className="md:col-span-8 space-y-8">
                  {project.screenshots.map((shot, sIdx) => (
                    <figure
                      key={sIdx}
                      className="border border-neutral-200 bg-white overflow-hidden"
                    >
                      <div className="relative aspect-video bg-neutral-100">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                      <figcaption className="p-4 border-t border-neutral-200 bg-neutral-50/50">
                        <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                          {shot.caption}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="h-[1px] bg-neutral-200" />

          {/* Section: What I Learned */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">
                07 / REFLECTION
              </span>
              <h2 className="font-display text-2xl md:text-3xl text-neutral-900 font-light tracking-tight">
                What I Learned
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-3">
                {project.learned.map((item, lIdx) => (
                  <li
                    key={lIdx}
                    className="p-4 bg-white border border-neutral-200 flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                    <span className="font-sans text-sm text-neutral-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer Navigation */}
      <footer className="py-8 sm:py-12 px-5 sm:px-6 md:px-12 lg:px-24 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold text-neutral-900 hover:text-black transition-colors min-h-[44px] flex items-center"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 shrink-0" />
            <span>Return to All Projects</span>
          </Link>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs text-neutral-600 hover:text-black transition-colors min-h-[44px] flex items-center break-all sm:break-normal text-center sm:text-right"
          >
            <GithubIcon className="w-4 h-4 shrink-0" />
            <span>{project.githubUrl.replace("https://github.com/", "")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </a>
        </div>
      </footer>
    </article>
  );
}
