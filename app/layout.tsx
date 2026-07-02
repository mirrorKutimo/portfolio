import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveStyles from "./components/ResponsiveStyles";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "大谷 未央 — ポートフォリオ",
  description: "Webエンジニア・ディレクター。インフラ設計からフルスタック開発・AI活用・SEO・マーケティングまで一気通貫で対応。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ResponsiveStyles />
        {children}
      </body>
    </html>
  );
}
