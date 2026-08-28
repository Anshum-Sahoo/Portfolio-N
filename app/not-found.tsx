/**
 * app/not-found.tsx — Custom 404 Page
 *
 * Renders when a user visits a URL that does not match any route.
 * Styled using the existing design system — no new visual language introduced.
 */
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Anshum Sahoo",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 bg-surface">
      <div className="text-center">
        <p className="font-label text-[10px] font-bold uppercase tracking-editorial text-secondary mb-8">
          404 — NOT FOUND
        </p>
        <h1 className="font-headline font-extrabold text-7xl md:text-9xl tracking-architectural text-primary mb-12">
          LOST?
        </h1>
        <p className="font-body text-on-surface-variant text-lg mb-16 max-w-sm mx-auto">
          This page does not exist. Head back to the portfolio.
        </p>
        <Link
          href="/"
          className="font-label text-[10px] font-bold uppercase tracking-editorial border-b border-primary pb-1 hover:opacity-50 transition-opacity duration-300"
        >
          GO HOME →
        </Link>
      </div>
    </main>
  );
}
