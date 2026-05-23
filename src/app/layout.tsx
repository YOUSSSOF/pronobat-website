import type { ReactNode } from "react";

/**
 * Root layout — intentionally minimal.
 * The <html> and <body> tags with correct lang/dir attributes are provided
 * by the [locale]/layout.tsx nested layout, which also sets up i18n providers.
 *
 * This file exists because Next.js App Router requires a root layout.tsx.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
