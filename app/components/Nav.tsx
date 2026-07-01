"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "自己PR", href: "#pr" },
  { label: "スキル", href: "#skills" },
  { label: "職務経歴", href: "#career" },
  { label: "プロジェクト", href: "#projects" },
  { label: "連絡先", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(17,19,24,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.25s",
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", color: "var(--text-muted)" }}>
          大谷 未央
        </span>
        <ul style={{ display: "flex", gap: 28, listStyle: "none" }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: 13, color: "var(--text-muted)", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="nav-mobile" style={{ background: "none", border: "none", color: "var(--text-sub)", cursor: "pointer", fontSize: 20, display: "none" }}>☰</button>
      </div>
      {open && (
        <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "8px 0" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 24px", fontSize: 14, color: "var(--text-sub)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`@media(max-width:640px){.nav-desktop{display:none!important}.nav-mobile{display:block!important}}`}</style>
    </nav>
  );
}
