export default function Hero() {
  return (
    <header style={{ borderBottom: "2px solid var(--text)", padding: "40px 0 32px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "top", paddingRight: 40 }}>
                <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: 6 }}>PORTFOLIO / 職務経歴書</p>
                <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "0.04em", marginBottom: 4 }}>大谷　未央</h1>
                <p style={{ fontSize: 13, color: "var(--text-sub)", marginBottom: 20 }}>
                  Webエンジニア / Webディレクター
                </p>
                <p style={{ fontSize: 13, color: "var(--text-sub)", lineHeight: 1.9, maxWidth: 520 }}>
                  2008年よりWeb・マーケティング領域でキャリアをスタート。SEO/SEM・アフィリエイト・EC運営を経て
                  フルスタックエンジニアに転身。現在はAWSインフラ設計・フルスタック開発・Flutterアプリ・
                  Claude APIを活用したAIエージェント開発・SEO・データ分析まで一気通貫で対応。
                </p>
              </td>
              <td style={{ verticalAlign: "top", width: 220, whiteSpace: "nowrap" }}>
                <table style={{ borderCollapse: "collapse", fontSize: 12 }}>
                  <tbody>
                    {[
                      ["マーケティング / SEO / 広告", "約15年（2008〜）"],
                      ["Webエンジニアリング", "約10年（2015〜）"],
                      ["AWSインフラ / Terraform", "約5年（2020〜）"],
                      ["AI / LLM 活用", "約3年（2023〜）"],
                      ["Flutter モバイル開発", "約2年（2024〜）"],
                    ].map(([k, v]) => (
                      <tr key={k} style={{ borderTop: "1px solid var(--border)" }}>
                        <td style={{ padding: "7px 12px 7px 0", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{k}</td>
                        <td style={{ padding: "7px 0", color: "var(--text)", fontWeight: 500 }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}
