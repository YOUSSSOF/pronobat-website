/**
 * Navigation helpers — typed wrappers around next-intl's createNavigation.
 * Use these instead of next/link / next/navigation directly so that locale
 * prefixes are handled automatically.
 */
import { createNavigation } from "next-intl/navigation";
import { routing } from "@/../i18n/routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
