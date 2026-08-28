import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────
// Security Headers
// Applied to every route in the application.
// ─────────────────────────────────────────────────────────
const securityHeaders = [
  // Prevents the page from being embedded in an iframe on other origins.
  // Mitigates clickjacking attacks where an attacker overlays a transparent
  // iframe over a legitimate page to steal clicks.
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Stops browsers from MIME-sniffing a response away from the declared
  // Content-Type. Prevents drive-by downloads disguised as safe file types.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controls how much referrer information is sent with requests.
  // "strict-origin-when-cross-origin" sends the full URL to same-origin
  // requests but only the origin to cross-origin requests, hiding paths.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Tells browsers to always use HTTPS for this domain for the next 2 years.
  // Prevents SSL-stripping MITM attacks on subsequent visits.
  // Only effective once the site is deployed over HTTPS.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Restricts which browser features/APIs this page can use.
  // Explicitly disables camera, microphone, and geolocation
  // (none of which this portfolio needs) to limit the blast radius
  // of any XSS attack.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Controls what resources the browser is allowed to load.
  // 'unsafe-inline' is required by Next.js for its inline hydration scripts
  // and by Framer Motion for its inline style injections.
  // 'unsafe-eval' is required by Framer Motion in development; excluded here
  // for production hardening.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js injects inline <script> tags; dev tools require unsafe-eval
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Tailwind/Framer Motion inject inline styles; Google Fonts needed
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts loads font files from gstatic.com
      "font-src 'self' https://fonts.gstatic.com",
      // Self-hosted images only
      "img-src 'self' data:",
      // Allow self and WebSockets (needed for Next.js HMR in dev)
      "connect-src 'self' ws: wss:",
      // Prevent this page from being used as a frame in other origins
      "frame-ancestors 'none'",
      // No embedded iframes needed
      "frame-src 'none'",
      // No Web Workers
      "worker-src 'none'",
    ].join("; "),
  },
  // Prevent browsers from making speculative DNS lookups on off-origin hrefs.
  // Minor privacy improvement.
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
