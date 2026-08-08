export default function Marquee({ items, reverse }: { items: string[], reverse?: boolean }) {
  const text = items.join("  ·  ") + "  ·  "
  const doubled = text + text
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(30,25,15,0.09)",
        borderBottom: "1px solid rgba(30,25,15,0.09)",
        padding: "12px 0",
        background: "rgba(30,25,15,0.035)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          fontFamily: "'Righteous', monospace",
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        {doubled}
      </div>
    </div>
  )
}
