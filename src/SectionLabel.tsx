export default function SectionLabel({ children, ink }: { children: string; ink?: string }) {
  return <span className="section-label" style={ink ? { color: ink } : undefined}>{children}</span>
}
