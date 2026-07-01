"use client";
import { SectionLabel } from "./Appeal";

const quals = [
  "ボイラー技士2級（2008年2月）",
  "乙種第4類危険物取扱者（2008年2月）",
  "乙種第6類危険物取扱者（2008年2月）",
  "第一種運転免許 普通自動車（2008年2月）",
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "72px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="contact-grid">
          <div>
            <SectionLabel>資格・語学</SectionLabel>
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10, fontWeight: 600 }}>保有資格</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {quals.map(q => (
                  <li key={q} style={{ fontSize: 13, color: "var(--text-sub)", display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--text-muted)" }}>·</span>{q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10, fontWeight: 600 }}>語学</p>
              <p style={{ fontSize: 13, color: "var(--text-sub)" }}>英語 — ビジネス使用経験あり（e-mailでのやりとり）</p>
            </div>
          </div>

          <div>
            <SectionLabel>連絡先</SectionLabel>
            <div style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 10, padding: "28px 24px",
            }}>
              <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.85, marginBottom: 24 }}>
                カジュアル面談・採用のご連絡をお待ちしております。
                インフラからフルスタック開発・AI活用・SEO・マーケティングまで対応できるエンジニア・ディレクターをお探しの方はお気軽にどうぞ。
              </p>
              <a href="mailto:work11281220@gmail.com" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "var(--accent)", color: "#0d1117",
                padding: "12px 20px", borderRadius: 6, fontWeight: 700, fontSize: 14,
                width: "fit-content", marginBottom: 12,
              }}>
                メールで連絡する
              </a>
              <p style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                work11281220@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 60, paddingTop: 24,
          borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 8,
        }}>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>大谷 未央 — 職務経歴ポートフォリオ</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
            Built with Next.js · 2026
          </span>
        </div>
      </div>

      <style>{`@media(max-width:640px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
