import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"

/* ─── Contact ──────────────────────────────────────────────────────── */

export default function Contact() {
  const [ref, inView] = useInView()
  const links = [
    { label: "EMAIL", href: "mailto:sgoh6@uw.edu", val: "sgoh6@uw.edu" },
    {
      label: "LINKEDIN",
      href: "https://linkedin.com/in/samantha-oh/",
      val: "linkedin.com/in/samantha-oh",
    },
    { label: "PHONE", href: "tel:5713961318", val: "571-396-1318" },
    { label: "RESUME", href: "#", val: "Download PDF ↗" },
  ]

  return (
    <section
      id="contact"
      style={{
        padding: "100px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(192,64,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}
      >
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 48, textAlign: "center" }}
        >
          <SectionLabel>{"Backstage Pass"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 7vw, 80px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: "0 0 16px",
            }}
          >
            LET'S BUILD
            <br />
            <span style={{ color: "var(--yellow)" }}>SOMETHING COOL.</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Always down for exciting projects, internships, & grabbing coffee. Reach out!
          </p>
        </div>

        {/* Backstage pass card */}
        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            border: "1.5px solid var(--yellow)",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--bg-card)",
            boxShadow: "0 12px 32px rgba(201,143,0,0.18)",
          }}
        >
          {/* Main pass body */}
          <div style={{ padding: "40px 40px" }}>
            <div
              style={{
                fontFamily: "'Righteous', monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "var(--muted)",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              ◉ All Access · Valid Indefinitely
            </div>

            <div
              style={{
                fontFamily: "'Righteous', serif",
                fontSize: 40,
                color: "var(--text)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              SAMANTHA OH
            </div>
            <div
              style={{
                fontFamily: "'Righteous', sans-serif",
                fontSize: 14,
                color: "var(--yellow)",
                marginBottom: 36,
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Agentic AI Engineer · UW Informatics · Seattle
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {links.map((link) => (
                <div
                  key={link.label}
                  style={{ display: "flex", gap: 24, alignItems: "baseline" }}
                >
                  <span
                    style={{
                      fontFamily: "'Righteous', monospace",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      color: "var(--muted)",
                      minWidth: 72,
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      textDecoration: "none",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--yellow)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text)")
                    }
                  >
                    {link.val}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stub */}
          <div
            style={{
              borderLeft: "1.5px dashed var(--yellow)",
              width: 80,
              background: "rgba(201,143,0,0.08)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                fontFamily: "'Righteous', serif",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--yellow)",
                textTransform: "uppercase",
              }}
            >
              All Access Pass
            </div>
            <div style={{ marginTop: 16, fontSize: 20 }}>★</div>
          </div>
        </div>
      </div>
    </section>
  )
}
