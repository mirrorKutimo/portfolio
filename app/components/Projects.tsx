import { SectionHeader } from "./Appeal";

const projects = [
  {
    name: "カナウ（占いポータル）",
    tag: "Web / インフラ / SEO / 広告",
    period: "2024〜",
    role: "インフラ / フルスタック / SEO / 広告",
    bullets: [
      "EC2 / RDS / ALB / CloudFront等AWSインフラ設計・運用・RDS MySQL 5→8バージョンアップ",
      "PHP / cronによる毎日自動投稿システム設計・LLM API（ChatGPT/Gemini）記事生成プロンプト設計",
      "GSC API内製SEOツール開発（カニバリゼーション検出・競合調査・記事間引き自動チェック）",
      "Google AdSense / GAM / fluct / A8.net等広告・アフィリエイト収益最大化",
      "OWASP ZAP脆弱性診断・IAM棚卸し・GuardDuty / CloudTrail設定",
      "GA4 / Looker Studioによる月次KPIレポート自動化",
    ],
    tech: "AWS / Terraform / PHP / MySQL / CloudFront / LLM API / GSC API / GA4",
  },
  {
    name: "AI占い / AIエージェント群",
    tag: "AI / LLM",
    period: "2024〜",
    role: "AIエンジニアリング / プロダクト設計",
    bullets: [
      "LLM API（ChatGPT/Gemini）を組み込んだAI占いサービスのMVP定義・AWSインフラ設計・実装",
      "法務チェック・決済セキュリティ・Webアプリ標準チェック専用AIエージェントを自作",
      "Transformers（HuggingFace）を活用したテキスト分析・埋め込み処理",
      "Langfuse / LangSmithによるLLM APIトレーシング・プロンプトバージョン管理・コスト最適化",
      "Sentry MCP・Google Analytics MCPの業務プロセスへの組み込み",
      "ベクトルDB・embedding・AzureMLの技術調査・検証",
    ],
    tech: "LLM API / Transformers / Langfuse / LangSmith / Sentry MCP / GA4 MCP / Claude Code / Python / Vector DB",
  },
  {
    name: "モッピー連携 / LINEyahoo占いAPI",
    tag: "API連携 / バックエンド",
    period: "2024〜",
    role: "バックエンド / インフラ / API設計",
    bullets: [
      "ポイントサービス（モッピー / セレス）との占いAPI連携・コールバック実装",
      "AWS Amplify + Lambda構成・Terraformによるインフラコード化",
      "LINE / Yahoo向け占いAPIの設計書作成・ランキングAPI・ヘルスチェックエンドポイント実装",
      "外部パートナー（大手流通・ゲーム会社・通信キャリア）との技術折衝・APIドキュメント整備",
    ],
    tech: "AWS Lambda / Amplify / Terraform / Node.js / API Gateway / LINE API / Yahoo API",
  },
  {
    name: "美肌ナビ（Flutter ネイティブアプリ）",
    tag: "モバイル（iOS / Android）",
    period: "2024〜",
    role: "モバイルエンジニア",
    bullets: [
      "Flutterクロスプラットフォームアプリの引き継ぎ・コードリーディング・機能改修",
      "FVMによるFlutterバージョン管理・Xcode / Androidシミュレータ環境構築",
      "iOSビルド証明書管理・TestFlightへの配布・本番App Store / Google Playリリース",
    ],
    tech: "Flutter / Dart / Xcode / TestFlight / Deploygate / FVM",
  },
  {
    name: "セゾン占い（Next.js Webアプリ）",
    tag: "フルスタック開発",
    period: "2024〜",
    role: "フルスタック / デプロイ / 分析基盤",
    bullets: [
      "Next.js / Node.jsによる占い機能・管理画面開発・Cloudflare Pages自動デプロイ設定",
      "Stripe決済実装・Sendgrid連携・LINE API対応",
      "XSS / CSRF / レートリミット実装によるセキュリティ強化",
      "GA4カスタムイベント・Looker Studioダッシュボード構築",
    ],
    tech: "Next.js / TypeScript / Stripe / LINE API / Cloudflare / GA4 / GTM",
  },
  {
    name: "フルオル（情報発信プラットフォーム）",
    tag: "フルスタック / AI",
    period: "2020〜2024",
    role: "プロジェクトリーダー / フルスタック",
    bullets: [
      "React / PHP / Python / MariaDB / Docker構成でのプラットフォーム設計・開発",
      "金融機関提携Webポータルの運用・制作管理（20カ月以上）",
      "ローンシミュレータ・ローングラフ・為替レートAPIの制作",
      "新規プロジェクトの編集画面にAI自動生成機能（ChatGPT連携）を実装",
    ],
    tech: "React / PHP / Python / MariaDB / Docker / AWS / Rocky Linux / Nginx",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader>主要プロジェクト</SectionHeader>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 48px" }} className="section-wrap">
        {projects.map((p, i) => (
          <div key={i} className="doc-grid" style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            gap: "0 32px",
            paddingBottom: 32,
            marginBottom: 32,
            borderBottom: i < projects.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div>
              <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>{p.period}</p>
              <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>{p.tag}</p>
            </div>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{p.name}</h3>
              <p style={{ fontSize: 12, color: "var(--accent)", marginBottom: 12 }}>役割：{p.role}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                {p.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-sub)", lineHeight: 1.8 }}>
                    <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>・</span>{b}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 10, fontSize: 12, color: "var(--text-muted)" }}>
                <span style={{ fontWeight: 600 }}>使用技術：</span>{p.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
