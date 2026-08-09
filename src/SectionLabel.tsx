/* ─── Section label ────────────────────────────────────────────────── */

export default function SectionLabel({
  children,
  pastel = "var(--pastel-lavender)",
  ink = "var(--ink-lavender)",
}: {
  children: string
  pastel?: string
  ink?: string
}) {
  return (
    <span
      style={{
        fontFamily: "'Elms Sans', sans-serif",
        fontSize: 12,
        letterSpacing: "0.1em",
        color: ink,
        textTransform: "uppercase",
        background: pastel,
        padding: "0.3rem 0.75rem",
        borderRadius: 100,
        display: "inline-block",
        marginBottom: 24,
      }}
    >
      {children}
    </span>
  )
}