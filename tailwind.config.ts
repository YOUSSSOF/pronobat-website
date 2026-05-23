import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],

  // Dark mode driven by data-theme="dark" on <html> (CSS variables handle theming;
  // dark: utilities are available as a bonus for one-off overrides)
  darkMode: ["selector", "[data-theme='dark']"],

  theme: {
    extend: {
      // ── Color tokens (all driven by CSS custom properties from globals.css) ──
      colors: {
        brand: "var(--brand)",
        "brand-dim": "var(--brand-dim)",
        "brand-glow": "var(--brand-glow)",
        "bg-page": "var(--bg-page)",
        "bg-surface": "var(--bg-surface)",
        "bg-glass": "var(--bg-glass)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
      },

      // ── Font families ──
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      // ── Type scale (mirrors Phase 2 typography-scale.md) ──
      fontSize: {
        "display-xl": [
          "var(--text-display-xl)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "var(--text-display-lg)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "var(--text-display-md)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        "heading-xl": [
          "var(--text-heading-xl)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "heading-lg": [
          "var(--text-heading-lg)",
          { lineHeight: "1.3", letterSpacing: "-0.005em" },
        ],
        "heading-md": ["var(--text-heading-md)", { lineHeight: "1.35" }],
        "heading-sm": ["var(--text-heading-sm)", { lineHeight: "1.4" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "1.7" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        caption: ["var(--text-caption)", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        overline: ["var(--text-overline)", { lineHeight: "1.4", letterSpacing: "0.1em" }],
        code: ["var(--text-code)", { lineHeight: "1.6" }],
        "code-sm": ["var(--text-code-sm)", { lineHeight: "1.5" }],
      },

      // ── Container widths (mirrors Phase 2 spacing-scale.md) ──
      maxWidth: {
        "container-xs": "480px",
        "container-sm": "640px",
        "container-md": "768px",
        "container-lg": "1024px",
        "container-xl": "1280px",
        "container-2xl": "1440px",
      },

      // ── Border radius (max 8px; 999px only for circles/pills) ──
      borderRadius: {
        DEFAULT: "8px",
        sm: "4px",
        lg: "8px",
        full: "9999px",
        // Explicitly remove larger values to enforce the design rule
        xl: "8px",
        "2xl": "8px",
        "3xl": "8px",
      },

      // ── Z-index scale ──
      zIndex: {
        raised: "10",
        dropdown: "100",
        sticky: "200",
        overlay: "300",
        modal: "400",
        toast: "500",
        tooltip: "600",
      },

      // ── Breakpoints (standard Tailwind, documented here for clarity) ──
      // sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px
    },
  },

  plugins: [],
};

export default config;
