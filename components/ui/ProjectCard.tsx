"use client";

import { useRef, useEffect, useState } from "react";

export function ProjectCard({
  index,
  number,
  title,
  description,
  tags,
  links,
  bgColor = "bg-surface-container",
  numberColor = "text-surface-dim",
  isDragging = false,
}: {
  index: number;
  number: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  bgColor?: string;
  numberColor?: string;
  isDragging?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Only trigger once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex-none w-[85vw] md:w-[340px] lg:w-[380px] snap-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
      }}
    >
      {/* Thumbnail */}
      <div className={`aspect-[4/5] ${bgColor} flex items-center justify-center mb-8 overflow-hidden`}>
        <span
          className={`font-headline ${numberColor} font-extrabold text-9xl select-none transition-transform duration-400 hover:scale-105`}
        >
          {number}
        </span>
      </div>

      {/* Meta */}
      <div className="space-y-4">
        <h3 className="font-headline font-bold text-2xl md:text-3xl uppercase">{title}</h3>
        <p className="font-body text-on-surface-variant leading-relaxed line-clamp-2 text-sm md:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-label text-[10px] text-secondary tracking-widest uppercase py-1 px-3 bg-surface-container-highest"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-8 pt-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (isDragging) e.preventDefault();
              }}
              className="font-label text-[10px] font-bold uppercase tracking-editorial border-b border-primary pb-0.5 hover:opacity-50 transition-opacity duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
