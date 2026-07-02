import { SectionHeader } from "./Appeal";

const quals = [
  "ボイラー技士2級（2008年2月）",
  "乙種第4類危険物取扱者（2008年2月）",
  "乙種第6類危険物取扱者（2008年2月）",
  "第一種運転免許 普通自動車（2008年2月）",
];

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeader>資格</SectionHeader>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 80px" }} className="section-wrap">
        <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "0 32px", marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, paddingTop: 2 }}>保有資格</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
            {quals.map(q => (
              <li key={q} style={{ fontSize: 13, color: "var(--text-sub)", display: "flex", gap: 8 }}>
                <span style={{ color: "var(--text-muted)" }}>・</span>{q}
              </li>
            ))}
          </ul>
        </div>

<div style={{ marginTop: 60, borderTop: "2px solid var(--text)", paddingTop: 16, display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)" }}>
          <span>大谷 未央 — 職務経歴書</span>
          <span>2026年7月現在</span>
        </div>
      </div>
    </section>
  );
}
