"use client";
import { useState } from "react";
import { SectionLabel } from "./Appeal";

type Project = {
  name: string;
  tag: string;
  period: string;
  summary: string;
  role: string;
  bullets: string[];
  tech: string[];
};

const projects: Project[] = [
  {
    name: "カナウ（占いポータル）",
    tag: "Web / インフラ / SEO",
    period: "2024〜",
    role: "インフラ / フルスタック / SEO / 広告",
    summary: "月間数百万PVの占いポータル。AWSインフラ・SEO・広告収益化・AI記事生成を単独で担当。",
    bullets: [
      "EC2/RDS/ALB/CloudFront等AWSインフラ設計・運用・RDS MySQL 5→8バージョンアップ",
      "PHP/cronによる毎日自動投稿システム設計・Claude API記事生成プロンプト設計",
      "GSC API内製SEOツール開発（カニバリゼーション検出・競合調査・記事間引き自動チェック）",
      "Google AdSense/GAM/fluct/A8.net等広告・アフィリエイト収益最大化",
      "OWASP ZAP脆弱性診断・IAM棚卸し・GuardDuty/CloudTrail設定",
      "GA4/Looker Studioによる月次KPIレポート自動化",
    ],
    tech: ["AWS", "Terraform", "PHP", "MySQL", "CloudFront", "Claude API", "GSC API", "GA4", "Looker Studio", "OWASP ZAP"],
  },
  {
    name: "AI占い / AIエージェント群",
    tag: "AI / LLM",
    period: "2024〜",
    role: "AI エンジニアリング / プロダクト設計",
    summary: "Claude APIを活用した新規AI占いサービスのMVP実装。法務・決済・QA専用AIエージェントも自作。",
    bullets: [
      "Claude APIを組み込んだAI占いサービスのMVP定義・AWSインフラ設計・実装",
      "法務チェックエージェント・決済セキュリティエージェント・Webアプリ標準チェックエージェントを自作",
      "Sentry MCP・Google Analytics MCPの業務プロセスへの組み込み",
      "Claude Codeを活用した開発フロー改善・プロンプトエンジニアリング",
      "ベクトルDB・embedding・AzureMLの技術調査・検証",
    ],
    tech: ["Claude API", "Sentry MCP", "GA4 MCP", "Claude Code", "Python", "AzureML", "Vector DB"],
  },
  {
    name: "モッピー連携 / LINEyahoo占いAPI",
    tag: "API連携 / インフラ",
    period: "2024〜",
    role: "バックエンド / インフラ / API設計",
    summary: "大手ポイントサービス・通信キャリア向けの占いAPI開発。Amplify+Lambda+Terraform構成。",
    bullets: [
      "ポイントサービス（モッピー/セレス）との占いAPI連携・コールバック実装",
      "AWS Amplify + Lambda 構成・Terraformによるインフラコード化",
      "LINE/Yahoo向け占いAPIの設計書作成・ランキングAPI・ヘルスチェックエンドポイント実装",
      "外部パートナー（大手流通・ゲーム会社・通信キャリア）との技術折衝・APIドキュメント整備",
    ],
    tech: ["AWS Lambda", "Amplify", "Terraform", "Node.js", "API Gateway", "LINE API", "Yahoo API"],
  },
  {
    name: "美肌ナビ（Flutterアプリ）",
    tag: "モバイル",
    period: "2024〜",
    role: "モバイルエンジニア",
    summary: "iOS/Android対応の美肌診断アプリ。Flutter製アプリの引き継ぎから本番リリースまで対応。",
    bullets: [
      "Flutterクロスプラットフォームアプリの引き継ぎ・コードリーディング・機能改修",
      "FVMによるFlutterバージョン管理・Xcode/Androidシミュレータ環境構築",
      "iOSビルド証明書管理・TestFlightへの配布・本番App Store/Google Playリリース",
      "Deploygateを使ったAndroidβテスト管理・技術ドキュメント整備",
    ],
    tech: ["Flutter", "Dart", "Xcode", "TestFlight", "Deploygate", "FVM"],
  },
  {
    name: "セゾン占い（Next.js Webアプリ）",
    tag: "フルスタック",
    period: "2024〜",
    role: "フルスタック / デプロイ / 分析",
    summary: "クレジットカード会社向けNext.js製占いWebアプリ。機能開発・デプロイ・分析基盤まで担当。",
    bullets: [
      "Next.js/Node.jsによる占い機能・管理画面開発",
      "Cloudflare Workers Pages・Amplifyへのデプロイ自動化",
      "Stripe決済実装・Sendgrid連携・LINE API対応",
      "XSS/CSRF/レートリミット実装によるセキュリティ強化",
      "GA4カスタムイベント・Looker Studioダッシュボード構築",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "LINE API", "Cloudflare", "GA4", "GTM"],
  },
  {
    name: "フルオル（いろは株式会社）",
    tag: "フルスタック / AI",
    period: "2020〜2024",
    role: "プロジェクトリーダー / フルスタック / OJT",
    summary: "情報発信複合プラットフォームの開発。金融機関Webポータルの運用保守も並行担当。",
    bullets: [
      "React/PHP/Python/MariaDB/Docker構成でのプラットフォーム開発",
      "金融機関提携Webポータルの運用・制作管理（20カ月以上）",
      "ローンシミュレータ・ローングラフ・為替レートAPIの制作",
      "新規プロジェクトの編集画面にAI自動生成機能（ChatGPT連携）を実装",
      "新卒エンジニアへのOJT（JavaScript/HTML/CSS/PHP）・メンター業務",
    ],
    tech: ["React", "PHP", "Python", "MariaDB", "Docker", "AWS", "Rocky Linux", "Nginx", "ChatGPT"],
  },
];

export default function Projects() {
  const [sel, setSel] = useState<Project | null>(null);

  return (
    <section id="projects" style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionLabel>主要プロジェクト</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
          {projects.map(p => (
            <button key={p.name} onClick={() => setSel(p)} style={{
              background: "var(--bg-card)", border: "1px solid var(--border)",
              borderRadius: 10, padding: "20px 22px", textAlign: "left",
              cursor: "pointer", transition: "border-color 0.15s", width: "100%",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--border-light)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{
                  fontSize: 11, color: "var(--accent)",
                  background: "var(--accent-dim)", border: "1px solid var(--accent-border)",
                  borderRadius: 4, padding: "1px 8px", fontWeight: 600,
                }}>{p.tag}</span>
                <span style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>{p.period}</span>
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, lineHeight: 1.4 }}>{p.name}</h3>
              <p style={{ fontSize: 12, color: "var(--text-sub)", lineHeight: 1.8, marginBottom: 14 }}>{p.summary}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tech.slice(0, 4).map(t => (
                  <span key={t} style={{
                    fontSize: 11, background: "transparent",
                    border: "1px solid var(--border)", borderRadius: 3,
                    padding: "1px 7px", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)",
                  }}>{t}</span>
                ))}
                {p.tech.length > 4 && <span style={{ fontSize: 11, color: "var(--text-muted)", padding: "1px 3px" }}>+{p.tech.length - 4}</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {sel && (
        <div onClick={() => setSel(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100, padding: 24,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "var(--bg-card)", border: "1px solid var(--border-light)",
            borderRadius: 14, padding: "32px", maxWidth: 640, width: "100%",
            maxHeight: "85vh", overflowY: "auto",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600 }}>{sel.tag} · {sel.period}</span>
              <button onClick={() => setSel(null)} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 16 }}>✕</button>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{sel.name}</h2>
            <p style={{ fontSize: 12, color: "var(--accent)", marginBottom: 16, fontFamily: "var(--font-geist-mono)" }}>役割：{sel.role}</p>
            <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.85, marginBottom: 20 }}>{sel.summary}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {sel.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-sub)", lineHeight: 1.75 }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>{b}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {sel.tech.map(t => (
                <span key={t} style={{
                  fontSize: 11, background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)", borderRadius: 4,
                  padding: "2px 10px", color: "var(--accent)", fontFamily: "var(--font-geist-mono)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
