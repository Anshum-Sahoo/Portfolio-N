"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const links = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("ABOUT");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const match = links.find(l => l.href === `#${id}`);
            if (match) setActive(match.name);
          }
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleClick = useCallback((e: React.MouseEvent, link: typeof links[0]) => {
    e.preventDefault();
    const el = document.querySelector(link.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(link.name);
    }
  }, []);

  // Determine which link should show the underline (hover takes priority)
  const underlineTarget = hovered || active;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:font-label focus:text-xs focus:uppercase focus:tracking-editorial"
      >
        Skip to main content
      </a>
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 border-b border-outline-variant"
      >
      <div className="flex justify-end items-center h-16 px-8 md:px-16 w-full max-w-screen-2xl mx-auto">
        <div
          className="flex gap-8 items-center"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link)}
              onMouseEnter={() => setHovered(link.name)}
              aria-current={active === link.name ? "page" : undefined}
              className="relative font-headline font-medium uppercase tracking-editorial text-xs py-3 transition-colors duration-300"
              style={{
                color: active === link.name ? "var(--color-primary)" : "var(--color-secondary)",
              }}
            >
              {link.name}
              {underlineTarget === link.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-1 w-full h-[1px] bg-primary"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
    </>
  );
}
