"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    number: "01",
    title: "THE GRID SYSTEM",
    description: "A precision CSS framework I built for strict vertical rhythm.",
    tags: ["REACT", "WEBGL"],
    links: [{ label: "CASE STUDY", href: "#" }, { label: "SOURCE", href: "#" }],
    bgColor: "bg-surface-container",
    numberColor: "text-surface-dim",
  },
  {
    number: "02",
    title: "EDITORIAL CANVAS",
    description: "My publishing platform for high-end architectural photography.",
    tags: ["NEXT.JS", "SANITY"],
    links: [{ label: "CASE STUDY", href: "#" }, { label: "LIVE SITE", href: "#" }],
    bgColor: "bg-surface-container-highest",
    numberColor: "text-surface-variant",
  },
  {
    number: "03",
    title: "MONOLITH.UI",
    description: "A headless library I designed for luxury brand experiences.",
    tags: ["RUST", "TAILWIND"],
    links: [{ label: "PACKAGE", href: "#" }, { label: "DOCS", href: "#" }],
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

  const scrollBy = useCallback((amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

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
