"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-gray overflow-hidden rounded-none";

  const variants = {
    primary:
      "bg-brand-white text-brand-navy hover:bg-brand-light-gray",
    secondary:
      "bg-brand-navy text-brand-white border border-brand-white/10 hover:border-brand-white/30",
    outline:
      "bg-transparent text-brand-light-gray border-b border-brand-light-gray/50 hover:border-brand-light-gray px-0 py-1",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Animated shine effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
        animate={{ translateX: ["100%", "-100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
        style={{ pointerEvents: "none" }}
      />
      <span className="relative z-10 font-sans tracking-wide uppercase">
        {children}
      </span>
    </motion.button>
  );
}
