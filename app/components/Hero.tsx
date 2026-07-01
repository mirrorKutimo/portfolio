const stats = [
  { num: "15+", label: "年の実務経験" },
  { num: "30+", label: "担当プロジェクト" },
  { num: "2,100+", label: "タスク処理実績" },
  { num: "月2,000万", label: "売上チームリード実績" },
];

export default function Hero() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80, padding: "120px 24px 80px", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 10, fontFamily: "var(--font-geist-mono)" }}>
              PORTFOLIO / 職務経歴
            </p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 8 }}>
              大谷 未央
            </h1>
            <p style={{ fontSize: 16, color: "var(--accent)", fontWeight: 600, marginBottom: 24 }}>
              Webエンジニア / ディレクター / インフラ・AI・SEO・マーケティング
            </p>
            <p style={{ fontSize: 15, color: "var(--text-sub)", lineHeight: 1.9, maxWidth: 680 }}>
              2008年からWeb・マーケティング領域でキャリアをスタート。EC運営・SEO/SEM・アフィリエイトを経て、
              フルスタックエンジニアとして独立。現職ではAWSインフラ設計・フルスタック開発・Flutter
              ネイティブアプリ・Claude APIを活用したAIエージェント開発・SEO・広告運用まで一気通貫で対応。
              マーケティング視点を持つエンジニアとして、事業成果に直結する開発を実践。
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "20px 20px",
              }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--accent)", fontFamily: "var(--font-geist-mono)", marginBottom: 4 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#career" style={{
              background: "var(--accent)", color: "#0d1117",
              padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 700,
            }}>
              職務経歴を見る
            </a>
            <a href="#contact" style={{
              background: "transparent", color: "var(--text-sub)",
              padding: "10px 24px", borderRadius: 6, fontSize: 14, fontWeight: 500,
              border: "1px solid var(--border)",
            }}>
              連絡する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
