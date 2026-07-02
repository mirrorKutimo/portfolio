import { SectionHeader } from "./Appeal";

type Job = {
  period: string;
  company: string;
  size?: string;
  role: string;
  summary: string;
  bullets: string[];
  tech?: string[];
  achievements?: string[];
};

const jobs: Job[] = [
  {
    period: "2024年03月 ─ 現在",
    company: "社長室 メディアチーム（占い・美容ヘルスケア系スタートアップ）",
    role: "フルスタックエンジニア / インフラ / AI・LLM活用 / マーケティング",
    size: "少数精鋭チーム",
    summary: "占いポータル・美容アプリ・AI占いなど複数Webサービスのインフラ設計・開発・運用・グロースを単独で担当。インフラからSEO・広告・ネイティブアプリ・AIエージェント開発まで幅広く対応。",
    achievements: ["担当プロジェクト30本超", "2,100件以上のタスク処理", "複数サービスの月間数百万PV維持・成長"],
    bullets: [
      "AWS（EC2 / RDS / ALB / Lambda / API Gateway / Amplify / CloudFront / S3 / EventBridge等）の設計・構築・運用",
      "Terraformによるインフラコード化・RDS MySQL 5→8バージョンアップ・EventBridge活用コスト削減自動化",
      "IAM全棚卸し・MFA導入・GuardDuty / CloudTrail設定・OWASP ZAP全サービス脆弱性診断",
      "PHP / Next.js / Node.js によるWebサービス開発・本番デプロイ管理・Stripe決済実装",
      "Flutter製アプリ（iOS / Android）の引き継ぎ・機能改修・TestFlight / 本番リリース対応",
      "Claude APIを活用したAI占い機能・SEO記事自動生成・AIエージェント（法務 / 決済 / QA）自作",
      "Transformers（HuggingFace）を活用したテキスト分析・埋め込み処理・モデル評価",
      "Langfuse / LangSmithによるLLM APIのトレーシング・プロンプト管理・コスト最適化",
      "Sentry MCP・Google Analytics MCPの業務プロセスへの組み込み",
      "GSC API内製SEOツール開発（カニバリ検出・競合分析）・Googleコアアップデート / AI Overview対応",
      "Google AdSense / GAM / fluct / A8.net等の広告・アフィリエイト収益最大化",
      "GA4 / BigQuery / Looker StudioによるBIダッシュボード構築・月次レポート自動化",
      "LINE / Yahoo占いAPI設計・大手ポイントサービス連携（Amplify + Lambda + Terraform）",
      "業務委託エンジニア・ライターのタスク管理・PRレビュー・採用（Wantedly・面談・契約書作成）",
      "YouTube / TikTok / Instagram / X の運用・Vrew / Midjourney / Figmaを使ったコンテンツ制作",
    ],
    tech: ["AWS", "Terraform", "PHP", "Next.js", "Node.js", "Flutter", "Claude API", "Transformers", "Langfuse", "LangSmith", "GA4", "BigQuery", "Looker Studio", "LINE API", "OWASP ZAP"],
  },
  {
    period: "2020年05月 ─ 2024年02月",
    company: "いろは株式会社",
    role: "Webディレクター / フルスタックエンジニア / OJT担当",
    size: "従業員3名（要員2名管理）",
    summary: "情報発信複合プラットフォーム「フルオル」の開発と金融機関Webポータルサイトの運用・構築ディレクション。新卒のOJT担当も兼務。",
    bullets: [
      "情報発信複合プラットフォーム「フルオル」の設計・開発（React / PHP / Python / MariaDB / Docker）",
      "金融機関提携Webポータルサイトの運用・制作管理（請負）・20カ月以上の保守",
      "ローンシミュレータ・ローングラフ・為替レートAPIの制作",
      "新規プロジェクトの編集画面にAI自動生成機能（ChatGPT連携）を実装",
      "構成案・ワイヤーフレーム作成・プログラミングのディレクション・デバッグチェック",
      "新卒エンジニアへのOJT（JavaScript / HTML / CSS / PHP）・メンター業務",
      "広告用漫画アニメの制作管理・ウェブアプリ資料制作",
    ],
    tech: ["React", "PHP", "Python", "JavaScript", "MariaDB", "Docker", "AWS", "Rocky Linux", "Nginx", "ChatGPT", "GitHub"],
  },
  {
    period: "2019年03月 ─ 2020年03月",
    company: "紅松株式会社（NIMASO）",
    role: "ECマーケター / Webディレクター",
    size: "従業員40名",
    summary: "日本支部にてスマートフォン用ガラスフィルムを主とするEC商品のマーケティングを担当。楽天・Yahoo!ショッピングのサイト改修とCVR改善が主務。",
    bullets: [
      "楽天・Yahoo!ショッピングのサイトデザイン改修・LP制作（iPhone 11等新型シリーズ対応）",
      "CVR向上のためのサイト監修・ABテスト・ユーザー動線改善",
      "ショップ内SEOマニュアルの制作・実施・レビュー管理",
      "BtoB商品説明補助・商品ページ品質管理",
    ],
    tech: ["JavaScript", "HTML", "CSS", "PHP", "Photoshop"],
  },
  {
    period: "2015年04月 ─ 2019年03月",
    company: "個人事業主",
    role: "フリーランス Webエンジニア / アフィリエイター",
    summary: "フリーランスとしてWebサイト制作・構築・アフィリエイト収益化を自走。VPS・専用サーバー上でのサイト運営から収益化まで全工程を独力で担当。",
    bullets: [
      "VPS・専用サーバーを使ったWebサイト構築・運営（PHP / JavaScript / HTML）",
      "Webアフィリエイトサイトの制作・SEO対策・収益化",
      "ウィキ自動開設サイトの制作・運用",
      "Pythonを活用した自動化ツール・マクロアプリ開発",
    ],
    tech: ["PHP", "JavaScript", "HTML", "CSS", "Python", "VPS"],
  },
  {
    period: "2008年12月 ─ 2015年04月",
    company: "株式会社インターナル",
    role: "マーケター / ソフトウェア管理チームリーダー（2011年就任）",
    size: "従業員50名・チーム5名 / プロジェクト全体35名",
    summary: "PCソフトウェア販売会社にてマーケティング全般を担当。2011年にソフトウェア管理チームリーダーに就任し、月売上2,000万・年純利1.5億を達成。",
    achievements: ["月売上2,000万達成（前年比2倍）", "年純利1.5億達成", "アフィリエイト月180本・250万達成"],
    bullets: [
      "Google Ads（旧Adwords）・Yahoo!リスティング（旧Overture）・各種バナー広告の出稿・運用",
      "自社商品のアフィリエイトで月180本達成（個人売上250万相当）",
      "2012年12月：ソフトウェア売上月2,000万達成（前年比2倍）",
      "SEO・ABテスト・アナリティクス・アドエビス等によるデータ解析の実施とSEOマニュアル化",
      "コーポレイトサイト・LP・アフィリエイト用ブログ・フリーソフトポータルサイト制作",
      "新商品の企画・ブランディング・商品パッケージ提案・機能提案",
      "2013年：管理チーム平均月売上2,000万達成・年純利1.5億達成",
      "2015年：LP制作含む広告業務で売上本数900本以上達成",
    ],
    tech: ["Google Ads", "Yahoo!リスティング", "SEO / SEM", "アフィリエイト", "Google Analytics", "アドエビス", "JavaScript", "HTML", "PHP"],
  },
  {
    period: "2008年04月 ─ 2008年10月",
    company: "トヨタ自動車株式会社",
    role: "カスタマーサービス",
    summary: "完成車メーカーにてカスタマーサービス業務に従事。",
    bullets: ["カスタマーサービスをメインに自社商品を習得"],
  },
];

export default function Career() {
  return (
    <section id="career">
      <SectionHeader>職務経歴</SectionHeader>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 48px" }}>
        {jobs.map((job, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            gap: "0 32px",
            paddingBottom: 40,
            marginBottom: 40,
            borderBottom: i < jobs.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            {/* 左列：期間・会社規模 */}
            <div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 4 }}>
                {job.period.replace("─", "\n─")}
              </p>
              {job.size && (
                <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>{job.size}</p>
              )}
            </div>

            {/* 右列：本文 */}
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{job.company}</h3>
              <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 10 }}>{job.role}</p>
              <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.9, marginBottom: 14 }}>{job.summary}</p>

              {job.achievements && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  {job.achievements.map(a => (
                    <span key={a} style={{
                      fontSize: 11, color: "var(--green)",
                      background: "var(--green-bg)",
                      border: "1px solid rgba(10,102,64,0.2)",
                      borderRadius: 3, padding: "2px 8px", fontWeight: 600,
                    }}>{a}</span>
                  ))}
                </div>
              )}

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text-sub)", lineHeight: 1.8 }}>
                    <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>・</span>{b}
                  </li>
                ))}
              </ul>

              {job.tech && (
                <p style={{ marginTop: 12, fontSize: 12, color: "var(--text-muted)" }}>
                  <span style={{ fontWeight: 600 }}>使用技術：</span>
                  {job.tech.join(" / ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
