/* ─── Section label ────────────────────────────────────────────────── */

export default function SectionLabel({
  children,
  ink = "var(--accent)",
}: {
  children: string
  ink?: string
}) {
  return (
    <span
      style={{
        fontFamily: "'Elms Sans', sans-serif",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.14em",
        color: ink,
        textTransform: "uppercase",
        display: "inline-block",
        marginBottom: 24,
      }}
    >
      {children}
    </span>
  )
}