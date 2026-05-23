import { useTranslations } from "next-intl";

/**
 * Phase 3 — Hello World page.
 * Confirms the build pipeline (Next.js 15 + Tailwind + next-intl + MDX) works end-to-end.
 * This page will be replaced by the full landing page in Phase 5.
 */
export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        {/* Wordmark */}
        <p
          style={{
            fontSize: "var(--text-overline)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--brand)",
            marginBottom: "1rem",
          }}
        >
          nowbat · نوبت
        </p>

        {/* Hero headline */}
        <h1
          style={{
            fontSize: "var(--text-display-md)",
            fontWeight: 700,
            lineHeight: "var(--leading-display)",
            color: "var(--text-primary)",
            margin: "0 0 1rem",
          }}
        >
          {t("title")}
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "var(--text-body-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-secondary)",
            margin: "0 0 2rem",
          }}
        >
          {t("description")}
        </p>

        {/* Scaffold confirmation badge */}
        <span
          style={{
            display: "inline-block",
            fontSize: "var(--text-body-sm)",
            color: "var(--success)",
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "4px 12px",
          }}
        >
          {t("scaffold_note")}
        </span>
      </div>
    </main>
  );
}
