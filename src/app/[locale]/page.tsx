import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  HeroSection,
  FeatureStrip,
  HowItWorksSection,
  AlternatingFeature,
  FeatureGrid,
  DemoCtaBanner,
  FaqAccordion,
} from "@/components/marketing";
import { SiteHeader, SiteFooter } from "@/components/layout";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pronobat.ir";
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(t("og_title"))}&description=${encodeURIComponent(t("og_description"))}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: t("og_title"),
      description: t("og_description"),
      siteName: "ProNobat",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("og_title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("og_title"),
      description: t("og_description"),
      images: [ogImageUrl],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const tBuilder = await getTranslations({ locale, namespace: "LandingBuilder" });
  const tForm = await getTranslations({ locale, namespace: "LandingBookingForm" });
  const tDirectory = await getTranslations({ locale, namespace: "LandingDirectory" });
  const tPayments = await getTranslations({ locale, namespace: "LandingPayments" });
  const tSms = await getTranslations({ locale, namespace: "LandingSms" });
  const tGrowth = await getTranslations({ locale, namespace: "LandingGrowth" });
  const tDashboard = await getTranslations({ locale, namespace: "LandingDashboard" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ProNobat",
    description: "افزونه نوبت‌دهی آنلاین فارسی برای وردپرس با تقویم جلالی، درگاه‌های پرداخت ایرانی، و پیامک فارسی",
    operatingSystem: "WordPress 6.0+",
    applicationCategory: "BusinessApplication",
    inLanguage: "fa",
    offers: {
      "@type": "Offer",
      url: "https://www.rtl-theme.com/product/pronobat/",
    },
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pronobat.ir",
    softwareVersion: "1.0.2",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Feature strip */}
        <FeatureStrip />

        {/* 4. How it works */}
        <HowItWorksSection />

        {/* 5. Booking Builder — the headline differentiator */}
        <AlternatingFeature
          overline={tBuilder("overline")}
          title={tBuilder("title")}
          description={tBuilder("description")}
          bullets={[tBuilder("bullet_1"), tBuilder("bullet_2"), tBuilder("bullet_3"), tBuilder("bullet_4")]}
          imageSrc="/images/screenshot-form-builder.png"
          imageAlt={tBuilder("image_alt")}
          imageWidth={1600}
          imageHeight={1000}
        />

        {/* 6. Booking form / layouts (reversed) */}
        <AlternatingFeature
          overline={tForm("overline")}
          title={tForm("title")}
          description={tForm("description")}
          bullets={[tForm("bullet_1"), tForm("bullet_2"), tForm("bullet_3"), tForm("bullet_4")]}
          imageSrc="/images/screenshot-booking-form.png"
          imageAlt={tForm("image_alt")}
          imageWidth={1240}
          imageHeight={1184}
          reverse
        />

        {/* 7. Marketplace directory + map */}
        <AlternatingFeature
          overline={tDirectory("overline")}
          title={tDirectory("title")}
          description={tDirectory("description")}
          bullets={[tDirectory("bullet_1"), tDirectory("bullet_2"), tDirectory("bullet_3"), tDirectory("bullet_4")]}
          imageSrc="/images/screenshot-directory.png"
          imageAlt={tDirectory("image_alt")}
          imageWidth={1240}
          imageHeight={1014}
        />

        {/* 8. Payments — Iranian + WooCommerce + deposits (reversed) */}
        <AlternatingFeature
          overline={tPayments("overline")}
          title={tPayments("title")}
          description={tPayments("description")}
          bullets={[tPayments("bullet_1"), tPayments("bullet_2"), tPayments("bullet_3"), tPayments("bullet_4")]}
          imageSrc="/images/screenshot-payments.png"
          imageAlt={tPayments("image_alt")}
          imageWidth={1600}
          imageHeight={1000}
          reverse
        />

        {/* 9. SMS & notifications (hardened) */}
        <AlternatingFeature
          overline={tSms("overline")}
          title={tSms("title")}
          description={tSms("description")}
          bullets={[tSms("bullet_1"), tSms("bullet_2"), tSms("bullet_3"), tSms("bullet_4")]}
          imageSrc="/images/screenshot-sms.png"
          imageAlt={tSms("image_alt")}
          imageWidth={1600}
          imageHeight={1000}
        />

        {/* 10. Waitlist + funnel analytics (reversed) */}
        <AlternatingFeature
          overline={tGrowth("overline")}
          title={tGrowth("title")}
          description={tGrowth("description")}
          bullets={[tGrowth("bullet_1"), tGrowth("bullet_2"), tGrowth("bullet_3"), tGrowth("bullet_4")]}
          imageSrc="/images/screenshot-analytics.png"
          imageAlt={tGrowth("image_alt")}
          imageWidth={1600}
          imageHeight={1000}
          reverse
        />

        {/* 11. Admin dashboard + reports */}
        <AlternatingFeature
          overline={tDashboard("overline")}
          title={tDashboard("title")}
          description={tDashboard("description")}
          bullets={[tDashboard("bullet_1"), tDashboard("bullet_2"), tDashboard("bullet_3"), tDashboard("bullet_4")]}
          imageSrc="/images/screenshot-dashboard.png"
          imageAlt={tDashboard("image_alt")}
          imageWidth={1600}
          imageHeight={1000}
        />

        {/* 12. Feature grid */}
        <FeatureGrid />

        {/* 11. Demo CTA banner */}
        <DemoCtaBanner />

        {/* 12. FAQ */}
        <FaqAccordion />
      </main>
      <SiteFooter />
    </>
  );
}
