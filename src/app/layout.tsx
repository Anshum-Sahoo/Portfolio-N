import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anshum Sahoo — Data Analyst & Software Developer Portfolio",
  description:
    "Data analytics case studies in SQL and Power BI, financial underwriting platforms, and applied computer vision systems by Anshum Sahoo.",
  keywords: [
    "Data Analyst",
    "Power BI",
    "SQL",
    "Python",
    "FastAPI",
    "Data Analytics Portfolio",
    "Anshum Sahoo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-brand-navy text-brand-light-gray antialiased selection:bg-brand-white/20"
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
