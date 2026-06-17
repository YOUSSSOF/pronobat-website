import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    // Enforce HTTPS for 1 year; include subdomains and request preload listing.
    // Only applies when the site is served over HTTPS (browsers ignore it over HTTP).
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // In development, Next.js React Fast Refresh requires 'unsafe-eval'.
      // In production this is not needed and should be omitted.
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        // SECURITY NOTE: 'unsafe-inline' is required here because
        // src/app/[locale]/layout.tsx inlines a theme-detection script via
        // dangerouslySetInnerHTML to prevent flash-of-wrong-theme.
        // To remove 'unsafe-inline', move that script to /public/theme-init.js
        // and load it with <script src="/theme-init.js" /> instead.
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'" + (isDev ? " ws: wss:" : ""),
      // Allow demo WordPress site to be iframed on the /demo page
      "frame-src 'self' https://demo.pronobat.ir",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // framer-motion v12 splits into sub-packages (motion-dom, motion-utils).
  // Next.js webpack fails to generate vendor chunks for them without this.
  transpilePackages: ["framer-motion", "motion-dom", "motion-utils"],

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    // Allow SVG placeholder screenshots; real screenshots will be PNG/WebP
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Disable X-Powered-By header
  poweredByHeader: false,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(withMDX(nextConfig));
