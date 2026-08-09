/* ─── Footer ───────────────────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: "italic",
          fontSize: 14,
          color: "var(--muted)",
        }}
      >
        samantha oh
      </span>
      <span
        style={{
          fontFamily: "'Elms Sans', sans-serif",
          fontSize: 12,
          color: "var(--muted)",
          opacity: 0.6,
          letterSpacing: "0.04em",
        }}
      >
        © 2026
      </span>
    </footer>
  )
}