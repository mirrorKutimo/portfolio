"use client";
import { useState } from "react";

const links = [
  { label: "自己PR", href: "#pr" },
  { label: "スキル", href: "#skills" },
  { label: "職務経歴", href: "#career" },
  { label: "プロジェクト", href: "#projects" },
  { label: "連絡先", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--bg)",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px", height: 48, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-sub)" }}>大谷 未央　職務経歴書</span>
        <ul style={{ display: "flex", gap: 24, listStyle: "none" }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: 13, color: "var(--text-muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="nav-mobile" style={{ background: "none", border: "none", color: "var(--text-sub)", cursor: "pointer", fontSize: 18, display: "none" }}>☰</button>
      </div>
      {open && (
        <div style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "12px 32px", fontSize: 13, color: "var(--text-sub)", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`@media(max-width:640px){.nav-desktop{display:none!important}.nav-mobile{display:block!important}}`}</style>
    </nav>
  );
}
