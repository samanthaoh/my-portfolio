export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(30,25,15,0.08)",
        padding: "28px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
        © 2026 Samantha Oh · Built with React + Vite
      </div>
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 11,
          color: "var(--muted)",
          letterSpacing: "0.1em",
        }}
      >
      </div>
    </footer>
  )
}