"use client";

export default function ResponsiveStyles() {
  return (
    <style>{`
      @media (max-width: 640px) {
        .section-wrap { padding-left: 16px !important; padding-right: 16px !important; }

        .hero-row { flex-direction: column !important; gap: 24px !important; }
        .hero-table { width: 100% !important; }

        .doc-grid { grid-template-columns: 1fr !important; gap: 4px !important; }
        .appeal-row { grid-template-columns: 1fr !important; gap: 6px !important; }

        .skills-row { display: block !important; padding: 12px 0 !important; }
        .skills-label { display: block !important; width: auto !important; padding: 0 0 6px !important; white-space: normal !important; }
        .skills-value { display: block !important; padding: 0 !important; }
      }
    `}</style>
  );
}
