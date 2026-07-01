const categories = [
  {
    label: "Cloud / Infra",
    color: "var(--accent)",
    items: [
      "AWS EC2", "RDS", "ALB", "Lambda", "API Gateway",
      "Amplify", "S3", "CloudFront", "EventBridge", "GuardDuty",
      "CloudTrail", "ACM", "Terraform", "Nginx", "Cloudflare Workers",
    ],
  },
  {
    label: "Languages / Frameworks",
    color: "var(--accent-purple)",
    items: [
      "TypeScript", "Next.js", "Node.js", "PHP", "Go",
      "Python", "Dart / Flutter", "WordPress",
    ],
  },
  {
    label: "DB / Data",
    color: "var(--accent-green)",
    items: [
      "MySQL", "PostgreSQL", "BigQuery", "Vector DB",
    ],
  },
  {
    label: "AI / LLM",
    color: "var(--accent-orange)",
    items: [
      "Claude API", "ChatGPT", "Midjourney", "Sentry MCP",
      "GA4 MCP", "Claude Code", "AzureML",
    ],
  },
  {
    label: "Analytics / SEO",
    color: "var(--accent)",
    items: [
      "GA4", "GTM", "GSC API", "Looker Studio",
      "ahrefs", "Microsoft Clarity", "BigQuery",
    ],
  },
  {
    label: "Mobile",
    color: "var(--accent-purple)",
    items: [
      "Flutter (iOS/Android)", "Xcode", "TestFlight", "Deploygate", "FVM",
    ],
  },
  {
    label: "Security",
    color: "var(--accent-green)",
    items: [
      "OWASP ZAP", "MFA", "IAM", "GuardDuty",
      "DOMPurify", "@upstash/ratelimit",
    ],
  },
  {
    label: "Payments / API",
    color: "var(--accent-orange)",
    items: [
      "Stripe", "Sendgrid", "Shopify", "LINE API",
      "Yahoo API", "Amazon SES",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <SectionHeader
        tag="02 Skills"
        title="技術スタック"
        sub="インフラからUI、AI活用まで幅広く対応"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.label}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "20px 24px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: cat.color,
                fontFamily: "var(--font-geist-mono)",
                marginBottom: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {cat.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.items.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    padding: "3px 10px",
                    fontSize: 13,
                    color: "var(--text-muted)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  sub,
}: {
  tag: string;
  title: string;
  sub?: string;
}) {
  return (
    <div style={{ marginBottom: 56, textAlign: "center" }}>
      <div
        style={{
          fontSize: 12,
          fontFamily: "var(--font-geist-mono)",
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: 12,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ color: "var(--text-muted)", fontSize: 16 }}>{sub}</p>
      )}
    </div>
  );
}
