# AI/ML Portfolio Project Explanation

This project is a high-performance, minimalist developer portfolio designed to showcase projects, experiences, and skills focusing on Artificial Intelligence, Machine Learning, and Data Analysis. It is built using a modern React & Next.js stack with smooth animations and an editorial grid layout.

---

## 🛠️ Technology Stack

1. **Framework**: **Next.js (App Router)**
   * Utilizes React Server Components (RSC) and Client Components for hybrid page rendering.
   * Leverages optimal font loading and asset optimization.
2. **Styling**: **Tailwind CSS**
   * Uses a custom color token palette matching modern Material 3 design philosophy (e.g., `surface-container-low`, `primary`, `on-surface-variant`).
   * Follows a strict typographic system with a clean vertical rhythm.
3. **Animations**: **Framer Motion**
   * Integrates scroll-based reveal animations (`whileInView`).
   * Staggers entrance sequences using delay offsets.
   * Implements custom easing curves (`[0.16, 1, 0.3, 1]`) for premium, organic transitions.
4. **Scroll Dynamics**: **Lenis / Smooth Scroll**
   * Configured with a `SmoothScrollProvider` to achieve Awwwards-style inertia scroll.

---

## 📂 Codebase Architecture & Directory Structure

```
d:\Portfolio-N
├── app/                        # Next.js App Router root
│   ├── favicon.ico             # Page icon
│   ├── globals.css             # CSS setup, global fonts & Tailwind utilities
│   ├── layout.tsx              # Root HTML wrapper and core viewport settings
│   └── page.tsx                # Main Landing Page integrating sections
│
├── components/                 # React UI Components
│   ├── layout/                 # Site layout wrappers
│   │   ├── Navbar.tsx          # Sticky navigation with animated hover interactions
│   │   └── Footer.tsx          # Styled contact footer
│   │
│   ├── sections/               # Sections that make up the landing page
│   │   ├── HeroSection.tsx     # Typography-centric landing area
│   │   ├── AboutSection.tsx    # Biography and visual skills grid
│   │   ├── ExperienceSection.tsx # Vertical animated list of AI/ML projects
│   │   └── ProjectsSection.tsx  # Draggable horizontal project carousel (currently unused)
│   │
│   └── ui/                     # Isolated, reusable presentation components
│       ├── Button.tsx          # Animated micro-interaction action buttons
│       ├── ProjectCard.tsx     # Cards for horizontal scrolling projects
│       └── SkillBadge.tsx      # Tag pill component with subtle hover effects
│
├── data/                       # Static structured data
│   └── skills.ts               # Array mapping skills to categorizations
│
└── config files/               # ESLint, PostCSS, Tailwind config, and TSConfig
```

---

## ⚙️ Core Components Explained

### 1. Main Page (`app/page.tsx`)
Serves as the layout entry point, stacking the structural sections:
```tsx
<Navbar />
<main className="pt-16">
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  <ContactSection />
</main>
<Footer />
```

### 2. Biography & Skills (`components/sections/AboutSection.tsx`)
* Maps data from `data/skills.ts` to output categorizations such as **AI/Machine Learning**, **Data & Analysis**, **CS Fundamentals**, and **Tools**.
* Staggers entrance animations left-to-right as the user scrolls into the section.

### 3. Experience & Project List (`components/sections/ExperienceSection.tsx`)
* Displays current and past machine learning/deep learning projects.
* Features responsive design: converts from standard layouts to mobile stacks gracefully.

### 4. Interactive Projects Carousel (`components/sections/ProjectsSection.tsx`)
* A custom interactive module with **drag-to-scroll physics**.
* Listens to mouse down/move/up events to scroll items horizontally on desktop (fallback to native snap-scroll on mobile).
* *Note: This is currently in the codebase as a reusable section but is not actively displayed on the homepage.*

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
