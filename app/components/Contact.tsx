"use client";
import { SectionHeader } from "./Skills";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader
          tag="05 Contact"
          title="お問い合わせ"
          sub="カジュアル面談・採用についてお気軽にご連絡ください"
        />

        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "40px",
          }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: 32,
              fontSize: 15,
            }}
          >
            インフラからフルスタック開発・AI活用・SEOまで一気通貫で対応できるエンジニアを探している方は
            お気軽にご連絡ください。
          </p>

          <a
            href="mailto:work11281220@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--accent)",
              color: "#0d1117",
              padding: "14px 32px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              transition: "opacity 0.2s",
              marginBottom: 24,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            <span>✉</span>
            メールで連絡する
          </a>

          <div
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            work11281220@gmail.com
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 60,
          paddingTop: 40,
          borderTop: "1px solid var(--border)",
          color: "var(--text-muted)",
          fontSize: 13,
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        © 2026 · Built with Next.js + Tailwind CSS
      </div>
    </section>
  );
}
