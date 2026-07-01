import { SectionLabel } from "./Appeal";

const categories = [
  {
    label: "クラウド・インフラ",
    items: ["AWS EC2", "RDS", "ALB", "Lambda", "API Gateway", "Amplify", "S3", "CloudFront", "EventBridge", "GuardDuty", "CloudTrail", "ACM", "Terraform", "Nginx", "Cloudflare Workers", "Docker", "Rocky Linux"],
  },
  {
    label: "言語・フレームワーク",
    items: ["TypeScript", "JavaScript", "Next.js", "Node.js", "PHP", "Go", "Python", "Dart（Flutter）", "React", "HTML / CSS"],
  },
  {
    label: "DB・データ基盤",
    items: ["MySQL", "MariaDB", "PostgreSQL", "BigQuery", "ベクトルDB"],
  },
  {
    label: "AI / LLM",
    items: ["Claude API", "ChatGPT", "Claude Code", "Sentry MCP", "GA4 MCP", "Midjourney", "Vrew", "AzureML"],
  },
  {
    label: "モバイル",
    items: ["Flutter（iOS/Android）", "Xcode", "TestFlight", "Deploygate", "FVM"],
  },
  {
    label: "解析・BI",
    items: ["GA4", "GTM", "GSC API", "Looker Studio", "ahrefs", "Microsoft Clarity", "アドエビス", "MATLAB"],
  },
  {
    label: "広告・収益化",
    items: ["Google AdSense", "Google Ad Manager", "A8.net", "afb", "fluct", "GMO SSP", "Amazon Associates", "楽天アフィリエイト", "Google Ads（旧Adwords）", "Yahoo!リスティング（旧Overture）"],
  },
  {
    label: "決済・外部API",
    items: ["Stripe", "Sendgrid", "Amazon SES", "Shopify", "LINE API", "Yahoo API"],
  },
  {
    label: "セキュリティ",
    items: ["OWASP ZAP", "MFA", "IAM", "GuardDuty", "DOMPurify", "@upstash/ratelimit"],
  },
  {
    label: "デザイン・制作",
    items: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Adobe AfterEffects", "Premiere Pro", "Canva"],
  },
  {
    label: "管理・ドキュメント",
    items: ["Notion", "GitHub Actions", "Draw.io", "Backlog", "Miro", "Obsidian", "弥生会計", "freee"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionLabel>スキルセット</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {categories.map((cat, i) => (
            <div key={cat.label} style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 16,
              padding: "14px 0",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
            }}>
              <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, paddingTop: 2, letterSpacing: "0.02em" }}>
                {cat.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.items.map(item => (
                  <span key={item} style={{
                    fontSize: 12,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "2px 10px",
                    color: "var(--text-sub)",
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
