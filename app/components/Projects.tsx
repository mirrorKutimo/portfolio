"use client";
import { useState } from "react";
import { SectionHeader } from "./Skills";

type Project = {
  name: string;
  nameEn: string;
  category: string;
  color: string;
  summary: string;
  role: string;
  highlights: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    name: "カナウ（占いポータル）",
    nameEn: "Kanau Fortune Portal",
    category: "Web Service",
    color: "var(--accent)",
    summary:
      "月間数百万PVの占いポータルサイト。SEO戦略・AWSインフラ・広告収益化・AI記事生成まで全領域を単独で担当。",
    role: "インフラ / フルスタック / SEO / 広告",
    highlights: [
      "EC2・RDS・ALB・CloudFront等のAWSインフラ設計・運用を一人で担当",
      "RDS MySQL 5→8バージョンアップ・EventBridge活用によるコスト最適化",
      "GSC API内製SEOツール開発（カニバリ検出・記事間引き・競合分析）",
      "Claude APIを活用したSEO記事自動生成プロンプト設計・PHP cron投稿システム",
      "Google AdSense / GAM / fluct / A8.net等の広告・アフィリエイト収益最大化",
      "Googleコアアップデート影響分析・AI Overview / Google Discover対応",
      "OWASP ZAPによる脆弱性診断・IAM棚卸し・GuardDuty / CloudTrail設定",
    ],
    tech: ["AWS", "Terraform", "PHP", "MySQL", "CloudFront", "Claude API", "GSC API", "GA4", "Looker Studio"],
  },
  {
    name: "セゾン占い",
    nameEn: "Saison Fortune",
    category: "Next.js App",
    color: "var(--accent-purple)",
    summary:
      "クレジットカード会社向けに開発した Next.js 製占いWebアプリ。機能開発・本番デプロイ・分析基盤構築まで対応。",
    role: "フルスタック / デプロイ / 分析",
    highlights: [
      "Next.js / Node.jsによる占い機能・管理画面開発",
      "Cloudflare Workers Pages・Amplifyへのデプロイ自動化",
      "Stripe決済実装・Sendgrid連携・LINE API対応",
      "GA4カスタムイベント設定・Looker Studioダッシュボード構築",
      "セキュリティレビュー（XSS・CSRF・レートリミット実装）",
      "外部パートナー向け技術折衝・APIドキュメント作成",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "LINE API", "Cloudflare", "GA4", "GTM"],
  },
  {
    name: "AI占い / AIエージェント群",
    nameEn: "AI Fortune & Agents",
    category: "AI / LLM",
    color: "var(--accent-orange)",
    summary:
      "Claude APIを活用した新規AI占いサービスのMVP設計・実装。加えて法務・決済・QAチェック等の業務特化AIエージェントを複数自作。",
    role: "AI エンジニアリング / プロダクト設計",
    highlights: [
      "Claude APIを組み込んだAI占いサービスのMVP定義・インフラ設計・実装",
      "法務エージェント・決済セキュリティチェックエージェント・Webアプリ標準チェックエージェントを自作",
      "Sentry MCP・Google Analytics MCPの業務組み込み",
      "Claude Codeを活用した開発フロー改善・プロンプトエンジニアリング",
      "ベクトルDB・embedding・AzureMLの技術調査・検証",
    ],
    tech: ["Claude API", "Sentry MCP", "GA4 MCP", "Claude Code", "Python", "AzureML", "Vector DB"],
  },
  {
    name: "美肌ナビ（Flutter アプリ）",
    nameEn: "Bihada Navi",
    category: "Mobile App",
    color: "var(--accent-green)",
    summary:
      "iOS / Android 対応の美肌診断ネイティブアプリ。Flutter製アプリの引き継ぎ・ドキュメント整備・TestFlight / 本番リリースまで対応。",
    role: "モバイルエンジニア",
    highlights: [
      "Flutterクロスプラットフォームアプリの引き継ぎ・コードリーディング・機能改修",
      "FVMによるFlutter バージョン管理・Xcode / Androidシミュレータ環境構築",
      "iOSビルド証明書管理・TestFlightへの配布・本番App Store / Google Playリリース",
      "Deploygateを使ったAndroidβテスト配布管理",
      "技術ドキュメント（README・アーキテクチャ図）整備",
    ],
    tech: ["Flutter", "Dart", "Xcode", "TestFlight", "Deploygate", "FVM", "iOS", "Android"],
  },
  {
    name: "モッピー連携 / LINEyahoo占いAPI",
    nameEn: "Moppy & LY API",
    category: "API / Infrastructure",
    color: "var(--accent)",
    summary:
      "大手ポイントサービス・通信キャリアとの占いAPI連携開発。AWS Amplify + Lambda + Terraform 構成で外部向けAPIを設計・実装。",
    role: "バックエンド / インフラ / API設計",
    highlights: [
      "ポイントサービス（モッピー）との占いAPI連携・コールバック実装",
      "AWS Amplify + Lambda 構成・Terraform によるIaC化",
      "LINE / Yahoo向け占いAPIの設計書作成・ランキングAPI・ヘルスチェックエンドポイント実装",
      "外部パートナー（大手流通・ゲーム会社・通信キャリア）との技術折衝",
      "APIドキュメント整備・SLA定義・セキュリティレビュー",
    ],
    tech: ["AWS Lambda", "Amplify", "Terraform", "Node.js", "API Gateway", "LINE API", "Yahoo API"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          tag="03 Projects"
          title="主要プロジェクト"
          sub="クリックすると詳細を表示"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p) => (
            <button
              key={p.name}
              onClick={() => setSelected(p)}
              style={{
                background: "var(--bg-card)",
                border: `1px solid var(--border)`,
                borderRadius: 12,
                padding: "24px",
                textAlign: "left",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = p.color;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-geist-mono)",
                    color: p.color,
                    background: `${p.color}18`,
                    border: `1px solid ${p.color}40`,
                    borderRadius: 999,
                    padding: "3px 10px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.category}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: 18 }}>→</span>
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "var(--text)",
                }}
              >
                {p.name}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16 }}>
                {p.summary}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "2px 8px",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      padding: "2px 4px",
                    }}
                  >
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "36px",
              maxWidth: 680,
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-geist-mono)",
                    color: selected.color,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {selected.category}
                </span>
                <h2 style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>
                  {selected.name}
                </h2>
                <p style={{ fontSize: 13, color: "var(--accent)", marginTop: 4, fontFamily: "var(--font-geist-mono)" }}>
                  役割: {selected.role}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: "none",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  padding: "4px 10px",
                  fontSize: 16,
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
              {selected.summary}
            </p>

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                主な実績
              </h4>
              <ul style={{ listStyle: "none" }}>
                {selected.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      lineHeight: 1.7,
                      padding: "8px 0 8px 20px",
                      position: "relative",
                      borderBottom: "1px solid rgba(48,54,61,0.5)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: selected.color,
                        fontSize: 16,
                        lineHeight: 1,
                        marginTop: 8,
                      }}
                    >
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                使用技術
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: `${selected.color}15`,
                      border: `1px solid ${selected.color}40`,
                      borderRadius: 6,
                      padding: "4px 12px",
                      fontSize: 13,
                      color: selected.color,
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
