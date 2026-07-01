import { SectionHeader } from "./Skills";

const roles = [
  "インフラ設計・構築・運用（AWS / Terraform）",
  "フルスタック開発（PHP / Next.js / Node.js / Go）",
  "ネイティブアプリ開発（Flutter iOS/Android）",
  "AI・LLM活用（Claude API・AIエージェント自作）",
  "SEO・Webマーケティング（GSC API内製ツール）",
  "広告・アフィリエイト収益化",
  "データ分析・BI（GA4 / BigQuery / Looker Studio）",
  "セキュリティ（OWASP ZAP / IT監査対応）",
  "外部API連携・技術折衝（大手ポイント・通信キャリア）",
  "QA（E2Eテスト・チェックリスト整備）",
  "マネジメント・採用（業務委託エンジニア・ライター管理）",
  "動画・SNS運用（YouTube / TikTok / Instagram / X）",
];

const allProjects = [
  { name: "カナウ", cat: "占い", desc: "占いポータル。SEO・インフラ・広告全般" },
  { name: "セゾン占い", cat: "占い", desc: "Next.js製占いWebアプリ" },
  { name: "AI占い", cat: "AI", desc: "Claude API組み込みの新規AIサービス" },
  { name: "LINEyahoo占い", cat: "API連携", desc: "LINE/Yahoo向け占いAPI設計" },
  { name: "パシンペロン", cat: "占い", desc: "占い結果改修・SEO対応" },
  { name: "カリヨン", cat: "占い", desc: "BIレポート・広告管理" },
  { name: "美肌ナビ", cat: "モバイル", desc: "Flutter iOS/Androidアプリ" },
  { name: "コリエル肌診断", cat: "Web", desc: "Shopify→AWS移行" },
  { name: "モッピー連携", cat: "API連携", desc: "ポイントサービスAPI統合" },
  { name: "ポケカレ", cat: "Web", desc: "Stripe決済・セキュリティ監査" },
  { name: "スキピチュ", cat: "インフラ", desc: "EC2・Terraform管理" },
  { name: "SEOツール（内製）", cat: "ツール", desc: "GSC APIカニバリ検出ツール" },
  { name: "法務・決済エージェント", cat: "AI", desc: "業務特化AIエージェント自作" },
  { name: "Looker Studioダッシュボード", cat: "データ", desc: "複数サービスBI基盤" },
];

const catColor: Record<string, string> = {
  "占い": "var(--accent)",
  "AI": "var(--accent-orange)",
  "API連携": "var(--accent-purple)",
  "モバイル": "var(--accent-green)",
  "Web": "var(--accent)",
  "インフラ": "var(--accent-purple)",
  "ツール": "var(--accent-green)",
  "データ": "var(--accent-orange)",
};

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <SectionHeader
        tag="04 Experience"
        title="業務経験"
        sub="占い・美容・ヘルスケア系スタートアップにて"
      />

      {/* timeline */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "32px",
          marginBottom: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
                marginBottom: 6,
              }}
            >
              2024.03 – 2026.05
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 800 }}>
              社長室 メディアチーム
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 4 }}>
              占い・美容ヘルスケア系 スタートアップ（非公開）
            </p>
          </div>
          <div
            style={{
              background: "rgba(88,166,255,0.1)",
              border: "1px solid rgba(88,166,255,0.25)",
              borderRadius: 8,
              padding: "10px 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              2,100+
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>タスク処理実績</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 8,
          }}
        >
          {roles.map((r) => (
            <div
              key={r}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                padding: "6px 0",
              }}
            >
              <span style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>▸</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* project list */}
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 20,
          color: "var(--text-muted)",
        }}
      >
        担当プロジェクト一覧
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
        }}
      >
        {allProjects.map((p) => (
          <div
            key={p.name}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "14px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontFamily: "var(--font-geist-mono)",
                color: catColor[p.cat] || "var(--accent)",
                background: `${catColor[p.cat] || "var(--accent)"}15`,
                border: `1px solid ${catColor[p.cat] || "var(--accent)"}40`,
                borderRadius: 4,
                padding: "2px 6px",
                whiteSpace: "nowrap",
                marginTop: 2,
                flexShrink: 0,
              }}
            >
              {p.cat}
            </span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
