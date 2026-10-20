"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-brand-white/10 shadow-lg shadow-black/20"
          : "bg-brand-navy/60 backdrop-blur-sm border-b border-brand-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo / Name */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-sm sm:text-base font-medium tracking-widest uppercase text-brand-white hover:text-brand-light-gray transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
          >
            <span>{personalInfo.name}</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-gray/40 group-hover:bg-brand-white transition-colors" />
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider text-brand-gray/60 group-hover:text-brand-gray transition-colors">
              Data Analyst
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.16em] text-brand-light-gray/70 hover:text-brand-white transition-colors py-1 border-b border-transparent hover:border-brand-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
              >
                {link.label}
              </a>
            ))}

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-brand-white/10 hover:border-brand-white/40 text-brand-light-gray hover:text-brand-white transition-all hover:bg-brand-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-brand-light-gray hover:text-brand-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-brand-white/10 bg-brand-navy-dark/98 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <nav
              aria-label="Mobile Navigation"
              className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto px-5 py-6 space-y-1"
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gray/50 px-3 mb-2">
                Navigation
              </span>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[48px] px-3 py-3 font-sans text-base tracking-wide text-brand-light-gray hover:text-brand-white hover:bg-brand-white/5 rounded-none transition-colors border-l-2 border-transparent hover:border-brand-white active:bg-brand-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-brand-gray/40">→</span>
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-brand-white/10 space-y-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[48px] px-3 py-3 border border-brand-white/10 hover:border-brand-white/30 text-brand-white font-mono text-xs uppercase tracking-wider transition-colors hover:bg-brand-white/5"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={handleLinkClick}
                  className="flex items-center justify-center min-h-[48px] px-3 py-3 bg-brand-white text-brand-navy font-sans text-xs uppercase tracking-wider font-semibold transition-colors hover:bg-brand-light-gray"
                >
                  <span>Contact Me</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
