import { useState, useEffect } from "react"

/* ─── Nav ──────────────────────────────────────────────────────────── */

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = ["About", "Projects", "Experience", "Hobbies", "Skills", "Contact"]
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
        background: scrolled ? "rgba(253,249,246,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: "italic",
          fontSize: 20,
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        samantha oh
      </a>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            style={{
              fontFamily: "'Elms Sans', sans-serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}