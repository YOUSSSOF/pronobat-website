import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/layout";

export default function LocaleNotFound() {
  return (
    <>
      <SiteHeader />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          padding: "4rem 2rem",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "6rem",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            color: "var(--brand)",
          }}
        >
          ۴۰۴
        </p>
        <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>
          صفحه مورد نظر یافت نشد
        </h1>
        <p style={{ color: "var(--text-secondary)", margin: 0, maxWidth: "36ch" }}>
          آدرس وارد شده وجود ندارد یا به آدرس دیگری منتقل شده است.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              background: "var(--brand)",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            صفحه اصلی
          </Link>
          <Link
            href="/docs"
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            مستندات
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
