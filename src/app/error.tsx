"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          <p style={{ fontSize: "5rem", fontWeight: 700, margin: 0, color: "#e24b4a" }}>خطا</p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "1rem 0 0.5rem" }}>
            مشکلی پیش آمد
          </h1>
          <p style={{ color: "#8888aa", margin: "0 0 2rem", maxWidth: "36ch" }}>
            خطایی غیرمنتظره رخ داده است. لطفاً دوباره امتحان کنید.
          </p>
          <button
            onClick={reset}
            style={{
              display: "inline-block",
              padding: "0.625rem 1.5rem",
              background: "#378add",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.9375rem",
            }}
          >
            تلاش مجدد
          </button>
        </div>
      </body>
    </html>
  );
}
