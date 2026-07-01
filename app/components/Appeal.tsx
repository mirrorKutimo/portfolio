const points = [
  {
    title: "マーケティング起点のエンジニアリング",
    body: "SEO・SEM・アフィリエイトで月売上2,000万・年純利1.5億を達成したマーケターとしての原体験を持つ。インフラ設計からSEOツール内製・広告収益最大化まで、事業数値に直結する開発判断ができる。",
  },
  {
    title: "フルスタック × インフラの一気通貫対応",
    body: "AWS（EC2/RDS/Lambda/Amplify/CloudFront等）のインフラ設計から、PHP・Next.js・Node.jsのフルスタック開発、Flutter iOS/Androidアプリ、外部API連携まで単独で完結。採用コスト換算で複数ロール分の業務を1人で担当。",
  },
  {
    title: "AI・LLMの実務組み込み",
    body: "Claude APIを活用したAI占い機能・SEO記事自動生成・法務/決済/QAチェック専用AIエージェントを自作。Sentry MCP・Google Analytics MCPの業務組み込みなど、LLMを実プロダクトに落とし込んだ実績多数。",
  },
  {
    title: "セキュリティ・品質管理の内製化",
    body: "OWASP ZAPによる全サービス横断の脆弱性診断、XSS/CSRF/レートリミット実装、IT監査対応、E2Eテスト設計・nightwatch活用まで自己完結。外部委託せず内製で品質管理を完結させてきた。",
  },
  {
    title: "チームリードとマネジメント実績",
    body: "インターナル社ではソフトウェア管理チームリーダーとして5名を統括し月売上2,000万を達成。現職では業務委託エンジニア・ライターへのタスク指示・PRレビュー・採用（Wantedly・面談・契約書作成）を担当。",
  },
  {
    title: "独学フルスタック・自走力",
    body: "個人事業主としてVPS・専用サーバーからWebサイト構築・アフィリエイト収益化まで全工程を独力で実施。Pythonによる自動化ツール・ウィキ自動開設サイト制作など、課題に応じて技術を独学で習得するタイプ。",
  },
];

export default function Appeal() {
  return (
    <section id="pr" style={{ padding: "72px 24px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionLabel>自己PR</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {points.map((p, i) => (
            <div key={i} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "22px 24px",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <span style={{
                  fontSize: 11, fontFamily: "var(--font-geist-mono)",
                  color: "var(--accent)", background: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                  borderRadius: 4, padding: "1px 8px", flexShrink: 0, marginTop: 2,
                }}>0{i + 1}</span>
                <h3 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.5 }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.85 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <div style={{ width: 3, height: 20, background: "var(--accent)", borderRadius: 2, flexShrink: 0 }} />
      <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.02em" }}>{children}</h2>
    </div>
  );
}
