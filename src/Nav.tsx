import { useState, useEffect } from "react"

/* ─── Nav ──────────────────────────────────────────────────────────── */

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = ["About", "Projects", "Experience", "Skills", "Contact"]
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(250,247,240,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,25,15,0.08)" : "none",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Righteous', serif",
          fontSize: 20,
          color: "var(--green)",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        {"[ SO ]"}
      </a>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Righteous', monospace",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}
