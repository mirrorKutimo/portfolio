const points = [
  {
    title: "マーケティング起点のエンジニアリング",
    body: "SEO・SEM・アフィリエイトで月売上2,000万・年純利1.5億を達成したマーケターとしての原体験を持つ。インフラ設計からSEOツール内製・広告収益最大化まで、事業数値に直結する開発判断ができる。",
  },
  {
    title: "フルスタック × インフラの一気通貫対応",
    body: "AWS（EC2/RDS/Lambda/Amplify/CloudFront等）のインフラ設計から、PHP・Next.js・Node.jsのフルスタック開発、Flutter iOS/Androidアプリ、外部API連携まで単独で完結。複数ロール分の業務を1人で担当してきた。",
  },
  {
    title: "AI・LLMの実務組み込み",
    body: "Claude APIを活用したAI占い機能・SEO記事自動生成・法務/決済/QAチェック専用AIエージェントを自作。Sentry MCP・Google Analytics MCPの業務組み込みなど、LLMを実プロダクトに落とし込んだ実績多数。",
  },
  {
    title: "セキュリティ・品質管理の内製化",
    body: "OWASP ZAPによる全サービス横断の脆弱性診断、XSS/CSRF/レートリミット実装、IT監査対応、E2Eテスト設計まで自己完結。外部委託なしで品質管理を完結させてきた。",
  },
  {
    title: "チームリードとマネジメント実績",
    body: "インターナル社ではソフトウェア管理チームリーダーとして5名を統括し月売上2,000万を達成。現職では業務委託エンジニア・ライターへのタスク指示・PRレビュー・採用（Wantedly・面談・契約書作成）を担当。",
  },
  {
    title: "独学フルスタック・自走力",
    body: "個人事業主としてVPS・専用サーバーからWebサイト構築・アフィリエイト収益化まで全工程を独力で実施。Pythonによる自動化ツール開発など、課題に応じて技術を独学で習得する自走型のスタイル。",
  },
];

export default function Appeal() {
  return (
    <section id="pr">
      <SectionHeader>自己PR</SectionHeader>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 48px" }}>
        <dl>
          {points.map((p, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              gap: "0 32px",
              padding: "16px 0",
              borderBottom: "1px solid var(--border)",
            }}>
              <dt style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", paddingTop: 1, lineHeight: 1.6 }}>
                {p.title}
              </dt>
              <dd style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.9 }}>
                {p.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
      <h2 style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        borderTop: "2px solid var(--text)",
        paddingTop: 10,
        marginTop: 48,
        marginBottom: 20,
      }}>{children}</h2>
    </div>
  );
}
