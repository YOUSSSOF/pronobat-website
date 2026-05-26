/**
 * Runtime-configurable external URLs.
 * Set NEXT_PUBLIC_RTL_THEME_URL in your environment before the plugin page is live.
 * Falls back to "#" so the site renders safely while the listing is not yet published.
 */
export const RTL_THEME_PRODUCT_URL =
  process.env.NEXT_PUBLIC_RTL_THEME_URL ?? "#";
