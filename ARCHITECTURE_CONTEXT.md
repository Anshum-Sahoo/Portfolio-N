# Project Architecture & Context Specification

> **Target Audience:** AI Assistants, Coding Agents (LLMs), and Developers.  
> **Purpose:** Comprehensive machine-readable & human-readable specification of the codebase structure, design rules, data schemas, routing, and operational guidelines for `Portfolio-N`.

---

## 1. Project Overview & Tech Stack

* **Project Name:** `portfolio-n` (Anshum Sahoo's Data Analyst Portfolio)
* **Domain / Theme:** Personal developer & data analyst portfolio website focusing on Data Analytics, Python, SQL, Power BI, and Machine Learning.
* **Aesthetic Philosophy:** "The Silent Curator" — Architectural Minimalism, strict monochrome color scale, high-contrast typography, sharp 0px border-radii, and generous editorial whitespace.

### Core Stack
| Layer | Technology | Version / Details |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `^16.2.9` (React 19.2.4) |
| **Language** | TypeScript | `^5.0.0` (Strict mode enabled) |
| **Styling** | Tailwind CSS | `^4.0.0` (CSS-first `@theme` configuration in `globals.css`) |
| **Animation** | Framer Motion | `^12.38.0` (`whileInView`, `useScroll`, `useTransform`) |
| **Smooth Scroll**| Lenis | `^1.3.21` (`ReactLenis` provider with `lerp: 0.05`) |
| **Icons & Utils**| `clsx`, `tailwind-merge` | Helper `cn(...)` in `components/ui/Button.tsx` |

---

## 2. Directory Structure Map

```text
d:\Portfolio-N
├── app/                        # Next.js App Router Root
│   ├── favicon.ico             # App Favicon
│   ├── globals.css             # Tailwind CSS v4 Theme, CSS Variables & Global Rules
│   ├── layout.tsx              # Root Layout: Meta Tags, Fonts (Inter + Manrope), Lenis Provider
│   ├── not-found.tsx           # Custom 404 Page (Styled with site design tokens)
│   └── page.tsx                # Single-page Portfolio Composition (Main Page)
│
├── components/                 # React UI Components
│   ├── SmoothScrollProvider.tsx # Client-side wrapper for Lenis smooth scrolling
│   ├── layout/                 # Layout & Shell Components
│   │   ├── Navbar.tsx          # Fixed Nav header with active section scroll-spy & underline layoutId
│   │   └── Footer.tsx          # Minimalist footer with social and email links
│   ├── sections/               # Page Sections (Rendered sequentially on app/page.tsx)
│   │   ├── HeroSection.tsx     # Hero banner with scroll parallax title, taglines, and CTAs
│   │   ├── AboutSection.tsx    # Biography text & dynamic skills list mapping from data/skills.ts
│   │   ├── MetricsSection.tsx  # Key statistics grid (<dl>/<dt>/<dd> DL format)
│   │   ├── ExperienceSection.tsx # Projects & Experience timeline (id="experience")
│   │   ├── ProjectsSection.tsx  # Horizontal drag-to-scroll carousel (Unused on page.tsx, preserved module)
│   │   └── ContactSection.tsx  # Call to Action block (id="contact")
│   └── ui/                     # Isolated Presentation UI Primitives
│       ├── Button.tsx          # Standard Button primitive (variants: primary, secondary, tertiary)
│       ├── ProjectCard.tsx     # Card primitive for ProjectsSection carousel with isSafeUrl validation
│       └── SkillBadge.tsx      # Tag pill badge for skill listings
│
├── data/                       # Static Data Schemas & Datasets
│   └── skills.ts               # Categorized skills dataset (DATA ANALYTICS, VISUALIZATION, etc.)
│
├── lib/                        # Shared Utilities & Configurations
│   └── config.ts               # Single Source of Truth for site URLs, email, GitHub, LinkedIn, Resume path
│
├── public/                     # Static Assets
│   ├── favicon.ico / svg icons # System icons
│   └── resume.pdf              # (Expected location for candidate resume download)
│
├── .env.example                # Documented template for environment variables (NEXT_PUBLIC_SITE_URL)
├── DESIGN.md                   # Complete Design System guidelines & architectural tokens
├── PROJECT_EXPLANATION.md      # Detailed developer documentation
├── next.config.ts              # Next.js Config with strict Security Headers (CSP, HSTS, X-Frame-Options)
├── package.json                # Dependencies and build scripts
└── tsconfig.json               # TypeScript compiler config (`@/*` alias configured)
```

---

## 3. Detailed Component & Module Breakdown

### `lib/config.ts` (Single Source of Truth)
Contains global metadata and social links to prevent inconsistent or hardcoded URLs across components:
* `siteUrl`: `process.env.NEXT_PUBLIC_SITE_URL ?? "https://anshum-sahoo.github.io"`
* `email`: `"anshumsahoo07@gmail.com"`
* `github`: `"https://github.com/Anshum-Sahoo"`
* `linkedin`: `"https://www.linkedin.com/in/anshum-sahoo/"`
* `resume`: `"/resume.pdf"`

### `app/layout.tsx` & `app/page.tsx`
* **Layout (`app/layout.tsx`)**: Loads Google Fonts (*Inter* & *Manrope*), configures metadata (OpenGraph, Twitter Cards, Keywords), wraps the body with `SmoothScrollProvider`, and applies `suppressHydrationWarning` on `<body>` to ignore browser-extension attribute mutations.
* **Main Page (`app/page.tsx`)**: Assembles the landing page inside `<main id="main-content" className="relative pt-16">`:
  1. `<HeroSection />`
  2. `<AboutSection />`
  3. `<MetricsSection />`
  4. `<ExperienceSection />` (Target anchor for `#experience`)
  5. `<ContactSection />` (Target anchor for `#contact`)

### `components/sections/`
1. **`HeroSection.tsx`**:
   * Features a parallax header animated via `framer-motion` (`useScroll` and `useTransform`).
   * Displays headline (`I AM ANSHUM, DATA ANALYST.`), role tagline, skills summary line, primary action buttons, and external action links (`RESUME ↗`, `GITHUB ↗`, `LINKEDIN ↗`).
2. **`AboutSection.tsx`**:
   * Uses `id="about"`.
   * Displays candidate bio and iterates over `skillsData` imported from `@/data/skills` to render `<SkillBadge />` components.
3. **`MetricsSection.tsx`**:
   * Renders portfolio metric counters (*3+ Projects Completed*, *10+ Datasets Analysed*, *5+ Dashboards Built*, *50+ SQL Queries Written*) using semantic `<dl>`, `<dt>`, `<dd>` markup.
4. **`ExperienceSection.tsx`**:
   * Uses `id="experience"`.
   * Renders detailed project cards (*Gestura*, *GreenCommute*, *Sales Analytics Dashboard*) detailing problem statements, technical implementation, and outcomes.
5. **`ContactSection.tsx`**:
   * Uses `id="contact"`.
   * Inverse-surface CTA section inviting recruiters for Data Analyst internships and linking to `siteConfig.email`.

---

## 4. Design System & Constraints for AI Agents

When modifying this repository, AI agents **MUST STRICTLY OBEY** the following design system parameters defined in `DESIGN.md` and `globals.css`:

1. **Color Palette (Monochrome Only):**
   * `--color-surface`: `#f9f9f9` (Background)
   * `--color-primary`: `#000000` (Main Text & Structural Accents)
   * `--color-secondary`: `#5f5e5e` (Metadata & Labels)
   * `--color-outline-variant`: `#c6c6c6` (1px Dividers)
   * `--color-inverse-surface`: `#2f3131` (Dark CTA blocks)
2. **Typography Rules:**
   * **Headlines / Titles:** Font family `--font-headline` (*Manrope*), tracking `--tracking-architectural` (`-0.02em`).
   * **Body Text:** Font family `--font-body` (*Inter*), color `text-on-surface-variant` (`#474747`).
   * **Labels / Meta:** Font family `--font-label` (*Inter*), uppercase, tracking `--tracking-editorial` (`+0.1em`).
3. **Zero-Radius Policy:**
   * `border-radius` MUST remain `0px` (`rounded-none`). No rounded corners on buttons, cards, or badges (except pill badges explicitly set to full).
4. **No Shadows / No Gradients:**
   * Depth must be created exclusively via background container contrasts (`bg-surface-container`, `bg-surface-container-low`, `bg-surface-container-highest`) and 1px architectural lines.

---

## 5. Security & Build Architecture

1. **Security Headers (`next.config.ts`)**:
   * Configured with strict `Content-Security-Policy`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
   * CSP allows local HMR (`ws: wss:`) and inline styles required by Tailwind & Framer Motion.
2. **URL Sanitization (`components/ui/ProjectCard.tsx`)**:
   * Contains an `isSafeUrl()` guard preventing `javascript:` protocol execution on link targets.
3. **Static Generation**:
   * App exports cleanly as static HTML pages (`/` and `/_not-found`).

---

## 6. How Future AI Agents Should Operate on This Repo

* **To update links/contact info:** Edit `lib/config.ts` only.
* **To update skills:** Edit `data/skills.ts`.
* **To add/modify projects:** Update the `experiences` array in `components/sections/ExperienceSection.tsx` or `projects` array in `components/sections/ProjectsSection.tsx`.
* **To check site integrity:** Run `npm run build` to verify TypeScript types and static page generation.
