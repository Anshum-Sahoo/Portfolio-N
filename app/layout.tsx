import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Anshum Sahoo | Portfolio",
  description:
    "Portfolio of Anshum Sahoo, a B.Tech CSE (AI & ML) student focused on Data Analytics, Python, SQL, Power BI, and Machine Learning.",
  keywords: [
    "Data Analyst",
    "Data Analytics Portfolio",
    "Anshum Sahoo",
    "SQL",
    "Power BI",
    "Python",
    "Machine Learning",
    "B.Tech CSE",
    "AI ML Student",
    "Data Visualization",
    "Business Intelligence",
    "Internship",
  ],
  authors: [{ name: "Anshum Sahoo", url: siteConfig.github }],
  creator: "Anshum Sahoo",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: "Anshum Sahoo | Data Analyst Portfolio",
    title: "Anshum Sahoo | Data Analyst Portfolio",
    description:
      "B.Tech CSE (AI & ML) student skilled in SQL, Power BI, Python, and data-driven decision making. Available for Data Analyst internships.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anshum Sahoo — Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshum Sahoo | Data Analyst Portfolio",
    description:
      "B.Tech CSE (AI & ML) student skilled in SQL, Power BI, Python, and data-driven decision making.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      {/*
        suppressHydrationWarning on <body> is intentional.
        Browser extensions (Grammarly, ColorZilla, etc.) inject attributes
        like cz-shortcut-listen="true" into the <body> tag after SSR,
        causing React to log a hydration mismatch that is a false positive.
        This prop only suppresses warnings for the element it is placed on
        and does NOT suppress real hydration bugs in child components.
      */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-surface text-primary font-body selection:bg-primary selection:text-surface-container-lowest overflow-x-hidden"
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

