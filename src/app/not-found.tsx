import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          background: "#07070e",
          color: "#f0f0f8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "5rem", fontWeight: 700, margin: 0, color: "#378add" }}>۴۰۴</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1rem 0 0.5rem" }}>
            صفحه مورد نظر یافت نشد
          </h1>
          <p style={{ color: "#8888aa", margin: "0 0 2rem" }}>
            آدرس وارد شده وجود ندارد یا جابجا شده است.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              background: "#378add",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </body>
    </html>
  );
}
