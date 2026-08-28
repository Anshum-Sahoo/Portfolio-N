"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    number: "01",
    title: "GESTURA",
    description:
      "Real-time sign language interpreter that translates hand gestures into readable text, making communication more accessible for the hearing-impaired community.",
    tags: ["PYTHON", "OPENCV", "MEDIAPIPE", "TENSORFLOW"],
    links: [
      { label: "GITHUB", href: "#" },
      { label: "DEMO", href: "#" },
    ],
    bgColor: "bg-surface-container",
    numberColor: "text-surface-dim",
  },
  {
    number: "02",
    title: "GREENCOMMUTE",
    description:
      "Air quality-based route optimization platform that analyzes real-time AQI data to recommend the healthiest daily commute routes for urban travelers.",
    tags: ["PYTHON", "PANDAS", "FLASK", "POWER BI"],
    links: [
      { label: "GITHUB", href: "#" },
      { label: "DEMO", href: "#" },
    ],
    bgColor: "bg-surface-container-highest",
    numberColor: "text-surface-variant",
  },
  {
    number: "03",
    title: "SALES ANALYTICS DASHBOARD",
    description:
      "End-to-end sales analytics dashboard that transforms raw transactional data into actionable business insights, surfacing trends, top products, and revenue forecasts.",
    tags: ["POWER BI", "SQL", "EXCEL", "DAX"],
    links: [
      { label: "GITHUB", href: "#" },
      { label: "DEMO", href: "#" },
    ],
    bgColor: "bg-primary",
    numberColor: "text-surface",
  },
];

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = useCallback((e: ReactMouseEvent) => {
    isDraggingRef.current = true;
    setDragging(true);
    startXRef.current = e.pageX;
    scrollStartRef.current = scrollRef.current?.scrollLeft ?? 0;
  }, []);

  const onMouseMove = useCallback((e: ReactMouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - startXRef.current) * 1.5;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollStartRef.current - walk;
    }
  }, []);

  const onMouseEnd = useCallback(() => {
    isDraggingRef.current = false;
    setTimeout(() => setDragging(false), 50);
  }, []);

  return (
    <section id="projects" className="py-32 border-t border-outline-variant relative">
      {/* Header — centered, no "03. PORTFOLIO" label */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="px-8 md:px-16 max-w-screen-2xl mx-auto flex items-center justify-between mb-16"
      >
        <h2 className="font-headline font-extrabold text-5xl md:text-6xl tracking-architectural text-primary mx-auto md:mx-0">
          PROJECTS.
        </h2>
      </motion.div>

      {/* Cards — centered container with equal gaps */}
      <div className={`relative w-full ${dragging ? "cursor-grabbing" : "cursor-grab"}`}>
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseEnd}
          onMouseLeave={onMouseEnd}
          className={`flex justify-center items-start gap-8 overflow-x-auto no-scrollbar px-8 md:px-16 pb-8 w-full select-none max-w-screen-2xl mx-auto ${
            dragging ? "" : "snap-x snap-mandatory scroll-smooth"
          }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              index={index}
              number={project.number}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
              bgColor={project.bgColor}
              numberColor={project.numberColor}
              isDragging={dragging}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
