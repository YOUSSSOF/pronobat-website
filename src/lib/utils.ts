import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS class names safely, resolving conflicts via tailwind-merge.
 * Drop-in replacement for clsx that is Tailwind-aware.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
