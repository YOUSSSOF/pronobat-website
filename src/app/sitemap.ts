import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pronobat.ir";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" },
  { path: "/docs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
] as const;

const docSlugs = [
  "getting-started/installation",
  "getting-started/first-setup",
  "getting-started/first-booking",
  "configuration/general",
  "configuration/business-hours",
  "configuration/payments",
  "configuration/sms",
  "configuration/email",
  "configuration/localization",
  "configuration/advanced",
  "integrations/google-calendar",
  "integrations/idpay",
  "integrations/ippanel",
  "integrations/kavenegar",
  "integrations/melipayamak",
  "integrations/nextpay",
  "integrations/zarinpal",
  "advanced/custom-roles",
  "advanced/extending",
  "advanced/gdpr",
  "shortcodes",
  "rest-api",
  "hooks",
  "troubleshooting",
  "changelog",
];

const guideSlugs = [
  "configure-sms",
  "custom-roles",
  "elementor-integration",
  "google-calendar",
  "gutenberg-block",
  "recurring-appointments",
  "setup-payments",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const docs = docSlugs.map((slug) => ({
    url: `${siteUrl}/docs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guides = guideSlugs.map((slug) => ({
    url: `${siteUrl}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...statics, ...docs, ...guides];
}
