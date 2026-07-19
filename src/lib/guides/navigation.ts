// ── Guide page types ──────────────────────────────────────────────────────

export type GuideCategory =
  | "builder"
  | "marketplace"
  | "payments"
  | "notifications"
  | "calendar"
  | "integrations"
  | "developer";

export interface GuidePage {
  slug: string;
  titleFa: string;
  titleEn: string;
  descriptionFa: string;
  descriptionEn: string;
  category: GuideCategory;
  readingTimeMin: number;
}

// ── All guides (ordered for listing) ─────────────────────────────────────

export const ALL_GUIDES: GuidePage[] = [
  {
    slug: "build-a-custom-form",
    titleFa: "ساخت فرم رزرو اختصاصی",
    titleEn: "Build a Custom Booking Form",
    descriptionFa: "با فرم‌ساز کشیدن‌ورهاکردن، فیلدها را بچینید، چیدمان را انتخاب کنید و فرم را منتشر کنید.",
    descriptionEn:
      "Use the drag-and-drop builder to arrange fields, pick a layout, and publish your own booking form.",
    category: "builder",
    readingTimeMin: 6,
  },
  {
    slug: "set-up-the-directory",
    titleFa: "راه‌اندازی بازارگاه متخصصان",
    titleEn: "Set Up the Provider Marketplace",
    descriptionFa: "چیدمان بازارگاه، تعریف فیلترها و ویژگی‌ها، تنظیم موقعیت روی نقشه، و انتشار فهرست.",
    descriptionEn:
      "Configure the directory layout, filters and attributes, provider map coordinates, and publish the listing.",
    category: "marketplace",
    readingTimeMin: 8,
  },
  {
    slug: "woocommerce-checkout",
    titleFa: "پرداخت نوبت با ووکامرس",
    titleEn: "Booking Checkout with WooCommerce",
    descriptionFa: "فعال‌کردن حالت ووکامرس، جریان سفارش مجازی، و دریافت پیش‌پرداخت.",
    descriptionEn:
      "Enable WooCommerce mode, the virtual-order flow, and taking a deposit.",
    category: "payments",
    readingTimeMin: 6,
  },
  {
    slug: "setup-payments",
    titleFa: "راه‌اندازی پرداخت با زرین‌پال",
    titleEn: "Set Up Payments with ZarinPal",
    descriptionFa: "از دریافت کد sandbox تا تست کامل چرخه رزرو → پرداخت → تأیید در محیط واقعی.",
    descriptionEn:
      "From getting a sandbox credential to testing the full booking → payment → verification cycle.",
    category: "payments",
    readingTimeMin: 8,
  },
  {
    slug: "configure-sms",
    titleFa: "پیکربندی پیامک با کاوه‌نگار",
    titleEn: "Configure SMS with Kavenegar",
    descriptionFa: "ثبت‌نام، دریافت API Key، تنظیم قالب OTP، و تست ارسال از پنل پرونوبت.",
    descriptionEn:
      "Register, get an API Key, set up the OTP template, and send a test SMS from the ProNobat admin panel.",
    category: "notifications",
    readingTimeMin: 6,
  },
  {
    slug: "google-calendar",
    titleFa: "اتصال Google Calendar به پرونوبت",
    titleEn: "Connect Google Calendar to ProNobat",
    descriptionFa:
      "ساخت OAuth2 App در Google Cloud Console، تنظیم Redirect URI، و اتصال تقویم هر کارمند.",
    descriptionEn:
      "Create an OAuth2 App in Google Cloud Console, set up Redirect URI, and connect each staff member's calendar.",
    category: "calendar",
    readingTimeMin: 10,
  },
  {
    slug: "recurring-appointments",
    titleFa: "نوبت‌های تکرارشونده",
    titleEn: "Recurring Appointments",
    descriptionFa: "ایجاد یک سری نوبت هفتگی، مشاهده نوبت‌های فرزند، و لغو کل سری.",
    descriptionEn:
      "Create a recurring weekly appointment series, view child appointments, and cancel the entire series.",
    category: "integrations",
    readingTimeMin: 5,
  },
  {
    slug: "elementor-integration",
    titleFa: "یکپارچه‌سازی با Elementor",
    titleEn: "Elementor Integration",
    descriptionFa: "درگ کردن ویجت نوبت در Elementor، پیش‌انتخاب سرویس، و انتشار صفحه.",
    descriptionEn:
      "Drag the ProNobat booking widget into an Elementor layout, configure service pre-selection, and publish.",
    category: "integrations",
    readingTimeMin: 5,
  },
  {
    slug: "gutenberg-block",
    titleFa: "استفاده از بلاک Gutenberg",
    titleEn: "Gutenberg Block",
    descriptionFa: "افزودن بلاک فرم رزرو نوبت در ویرایشگر بلاک، تنظیم ویژگی‌ها، و پیش‌نمایش.",
    descriptionEn: "Add the ProNobat booking block in the block editor, set attributes, and preview.",
    category: "integrations",
    readingTimeMin: 4,
  },
  {
    slug: "custom-roles",
    titleFa: "نقش‌های سفارشی و دسترسی‌ها",
    titleEn: "Custom Roles and Capabilities",
    descriptionFa: "مدل دسترسی پرونوبت و ساخت نقش‌های محدود واقعی با capability های `pronobat_view_reports` و `pronobat_staff_self`.",
    descriptionEn:
      "ProNobat's permission model and building realistic limited roles with the `pronobat_view_reports` and `pronobat_staff_self` capabilities.",
    category: "developer",
    readingTimeMin: 6,
  },
];

// ── Category labels ───────────────────────────────────────────────────────

export const GUIDE_CATEGORY_LABELS: Record<GuideCategory, { fa: string; en: string }> = {
  builder: { fa: "فرم‌ساز", en: "Builder" },
  marketplace: { fa: "بازارگاه", en: "Marketplace" },
  payments: { fa: "پرداخت", en: "Payments" },
  notifications: { fa: "اعلان‌ها", en: "Notifications" },
  calendar: { fa: "تقویم", en: "Calendar" },
  integrations: { fa: "یکپارچه‌سازی", en: "Integrations" },
  developer: { fa: "توسعه‌دهنده", en: "Developer" },
};

// ── Helpers ───────────────────────────────────────────────────────────────

export function getGuideBySlug(slug: string): GuidePage | undefined {
  return ALL_GUIDES.find((g) => g.slug === slug);
}

export function getGuideTitle(guide: GuidePage, locale: string): string {
  return locale === "fa" ? guide.titleFa : guide.titleEn;
}

export function getGuideDescription(guide: GuidePage, locale: string): string {
  return locale === "fa" ? guide.descriptionFa : guide.descriptionEn;
}
