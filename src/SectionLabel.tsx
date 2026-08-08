export default function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: "'Righteous', monospace",
        fontSize: 12,
        letterSpacing: "0.2em",
        color: "var(--muted)",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  )
}
