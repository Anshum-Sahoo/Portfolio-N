import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
}) {
  const baseStyles = "font-label text-[10px] font-bold uppercase tracking-editorial transition-all";
  
  const variants = {
    primary: "px-8 py-4 bg-primary text-on-primary hover:opacity-80",
    secondary: "px-8 py-4 border border-outline hover:bg-surface-container text-primary",
    tertiary: "hover:opacity-50 border-b border-primary pb-1"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
