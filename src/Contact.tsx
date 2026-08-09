import { useInView } from "./useInView"

/* ─── Contact ──────────────────────────────────────────────────────── */

export default function Contact() {
  const [ref, inView] = useInView()
  const links = [
    { label: "sgoh6@uw.edu", href: "mailto:sgoh6@uw.edu", primary: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/samantha-oh/", primary: false },
    { label: "571-396-1318", href: "tel:5713961318", primary: false },
    { label: "Resume ↗", href: "#", primary: false },
  ]

  return (
    <section
      id="contact"
      style={{
        background:
          "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-pink) 50%, var(--pastel-peach) 100%)",
        padding: "120px 32px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div className={`fade-up ${inView ? "visible" : ""}`}>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              margin: "0 0 20px",
            }}
          >
            Let's build something
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            Coffee chats always welcome. Whether it's a role, a project, or
            just talking AI, reach out.
          </p>
        </div>

        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily: "'Elms Sans', sans-serif",
                fontSize: 14,
                fontWeight: link.primary ? 600 : 500,
                color: link.primary ? "#fff" : "var(--ink-lavender)",
                background: link.primary ? "var(--accent)" : "rgba(255,255,255,0.6)",
                padding: "16px 28px",
                borderRadius: 100,
                textDecoration: "none",
                textAlign: "center",
                letterSpacing: "0.02em",
                backdropFilter: link.primary ? "none" : "blur(8px)",
                boxShadow: link.primary ? "0 4px 20px rgba(196,103,138,0.35)" : "none",
                transition: "opacity 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (link.primary) e.currentTarget.style.opacity = "0.88"
                else e.currentTarget.style.background = "rgba(255,255,255,0.85)"
              }}
              onMouseLeave={(e) => {
                if (link.primary) e.currentTarget.style.opacity = "1"
                else e.currentTarget.style.background = "rgba(255,255,255,0.6)"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 640px) { #contact > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  )
}