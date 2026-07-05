import { SectionHeader } from "./Appeal";

const categories = [
  { label: "クラウド・インフラ", items: ["AWS EC2", "RDS", "ALB", "Lambda", "API Gateway", "Amplify", "S3", "CloudFront", "EventBridge", "GuardDuty", "CloudTrail", "Terraform", "Nginx", "Docker", "Cloudflare Workers"] },
  { label: "言語・FW", items: ["TypeScript / JavaScript", "Next.js", "Node.js", "PHP", "Go", "Python", "Dart（Flutter）", "React", "HTML / CSS"] },
  { label: "DB・データ", items: ["MySQL", "MariaDB", "PostgreSQL", "BigQuery", "ベクトルDB"] },
  { label: "AI / LLM", items: ["ChatGPT API", "Gemini API", "Claude Code", "Transformers（HuggingFace）", "Langfuse", "LangSmith", "Sentry MCP", "GA4 MCP", "Midjourney", "Vrew", "AzureML"] },
  { label: "モバイル", items: ["Flutter（iOS / Android）", "Xcode", "TestFlight", "Deploygate", "FVM"] },
  { label: "解析・BI", items: ["GA4", "GTM", "GSC API", "Looker Studio", "ahrefs", "Microsoft Clarity", "アドエビス"] },
  { label: "広告・収益化", items: ["Google AdSense", "GAM", "A8.net", "afb", "fluct", "GMO SSP", "Amazon Associates", "楽天アフィリエイト", "Google Ads", "Yahoo!リスティング"] },
  { label: "決済・外部API", items: ["Stripe", "Sendgrid", "Amazon SES", "Shopify", "LINE API", "Yahoo API"] },
  { label: "セキュリティ", items: ["OWASP ZAP", "MFA", "IAM", "GuardDuty", "DOMPurify", "@upstash/ratelimit"] },
  { label: "デザイン・制作", items: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "AfterEffects", "Premiere Pro", "Canva"] },
  { label: "管理・ツール", items: ["Notion", "GitHub Actions", "Draw.io", "Backlog", "Miro", "Obsidian", "弥生会計", "freee", "MATLAB"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader>スキルセット</SectionHeader>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 48px" }} className="section-wrap">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {categories.map((cat, i) => (
              <tr key={cat.label} className="skills-row" style={{ borderTop: i === 0 ? "1px solid var(--border)" : undefined, borderBottom: "1px solid var(--border)" }}>
                <td className="skills-label" style={{ padding: "10px 16px 10px 0", width: 140, verticalAlign: "top", fontSize: 12, color: "var(--text-muted)", fontWeight: 600, whiteSpace: "nowrap" }}>
                  {cat.label}
                </td>
                <td className="skills-value" style={{ padding: "10px 0", fontSize: 13, color: "var(--text-sub)", lineHeight: 2 }}>
                  {cat.items.join("　/　")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
