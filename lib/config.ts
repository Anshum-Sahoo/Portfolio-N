/**
 * lib/config.ts — Single source of truth for all site-wide constants.
 *
 * WHY THIS EXISTS:
 * Previously, the email address, GitHub URL, and LinkedIn URL were
 * hardcoded in 3–4 separate component files. This caused:
 *   1. An email inconsistency (anshumsahoo07 vs Anshumsahoo07 in two files)
 *   2. Risk of stale links when any URL changes
 *   3. No single place to update before a deployment
 *
 * Usage:
 *   import { siteConfig } from "@/lib/config";
 *   <a href={siteConfig.github}>GitHub</a>
 */
export const siteConfig = {
  /** The canonical public URL of the deployed site */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anshum-sahoo.github.io",

  /** Contact email — single source; previously inconsistent across files */
  email: "anshumsahoo07@gmail.com",

  /** Social profiles */
  github: "https://github.com/Anshum-Sahoo",
  linkedin: "https://www.linkedin.com/in/anshum-sahoo/",

  /**
   * Resume file path (relative to /public).
   * Place the actual PDF at: d:\Portfolio-N\public\resume.pdf
   * When opening in the browser, the full URL becomes:
   * https://yourdomain.com/resume.pdf
   */
  resume: "/resume.pdf",
} as const;
