import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales — Persian is the default (primary SEO target)
  locales: ["fa", "en"],
  defaultLocale: "fa",

  // 'as-needed' means the default locale (fa) is served without a /fa/ prefix.
  // English content is served at /en/...
  localePrefix: "as-needed",
});
