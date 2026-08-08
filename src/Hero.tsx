import { type CSSProperties } from "react"

/* ─── Blob ─────────────────────────────────────────────────────────── */

function Blob({
  color,
  size,
  top,
  left,
  anim,
  delay,
  blur = 80,
}: {
  color: string
  size: number
  top: string
  left: string
  anim: string
  delay: number
  blur?: number
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.28,
        animation: `${anim} 12s ease-in-out infinite, float ${8 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  )
}

/* ─── Floating shape ───────────────────────────────────────────────── */

function FloatShape({
  shape,
  color,
  size,
  top,
  left,
  right,
  delay,
}: {
  shape: "note" | "headphones" | "vinyl" | "waveform"
  color: string
  size: number
  top: string
  left?: string
  right?: string
  delay: number
}) {
  const style: CSSProperties = {
    position: "absolute",
    top,
    left,
    right,
    width: size,
    height: size,
    animation: `float-b ${6 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    color,
    zIndex: 1,
    pointerEvents: "none",
  }

  if (shape === "vinyl") {
    return (
      <div
        style={{
          ...style,
          borderRadius: "50%",
          border: `2px solid ${color}`,
          boxShadow: `0 0 12px ${color}`,
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "35%",
            height: "35%",
            borderRadius: "50%",
            background: color,
          }}
        />
      </div>
    )
  }

  if (shape === "waveform") {
    return (
      <svg
        style={style}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.7}
        filter={`drop-shadow(0 0 6px ${color})`}
      >
        <line x1="4" y1="9" x2="4" y2="15" />
        <line x1="9" y1="5" x2="9" y2="19" />
        <line x1="14" y1="2" x2="14" y2="22" />
        <line x1="19" y1="7" x2="19" y2="17" />
      </svg>
    )
  }

  if (shape === "note") {
    return (
      <svg
        style={style}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
        filter={`drop-shadow(0 0 6px ${color})`}
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    )
  }

  const svgs: Record<string, string> = {
    headphones:
      "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3v-7a9 9 0 0 1 18 0v7h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
  }

  return (
    <svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      opacity={0.7}
      filter={`drop-shadow(0 0 6px ${color})`}
    >
      <path d={svgs[shape]} />
    </svg>
  )
}

/* ─── Hero ─────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Blobs */}
      <Blob
        color="var(--green)"
        size={500}
        top="-10%"
        left="-15%"
        anim="blob-a"
        delay={0}
        blur={90}
      />
      <Blob
        color="var(--purple)"
        size={420}
        top="20%"
        left="60%"
        anim="blob-b"
        delay={2.5}
        blur={90}
      />
      <Blob
        color="var(--blue)"
        size={360}
        top="60%"
        left="5%"
        anim="blob-c"
        delay={1.5}
        blur={80}
      />
      <Blob
        color="var(--yellow)"
        size={280}
        top="70%"
        left="75%"
        anim="blob-a"
        delay={3.5}
        blur={80}
      />

      {/* Floating geometric shapes */}
      <FloatShape shape="note" color="var(--yellow)" size={28} top="18%" right="12%" delay={0} />
      <FloatShape shape="waveform" color="var(--blue)" size={22} top="70%" right="20%" delay={1.2} />
      <FloatShape shape="headphones" color="var(--green)" size={22} top="35%" right="6%" delay={0.7} />
      <FloatShape shape="vinyl" color="var(--purple)" size={18} top="80%" left="18%" delay={2} />
      <FloatShape shape="note" color="var(--pink)" size={20} top="25%" left="8%" delay={1.5} />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 900,
        }}
      >
        <div
          style={{
            fontFamily: "'Righteous', monospace",
            fontSize: 12,
            letterSpacing: "0.25em",
            color: "rgb(90, 90, 90)",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          &#9835; Now playing
        </div>

        <h1
          className="glitch"
          data-text="SAMANTHA OH"
          style={{
            fontFamily: "'Righteous', serif",
            fontSize: "clamp(64px, 14vw, 100px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            margin: 0,
            marginBottom: 28,
          }}
        >
          SAMANTHA OH
        </h1>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 48,
            fontFamily: "'Righteous', monospace",
            fontSize: 19,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          <span style={{ color: "var(--blue)" }}>Informatics @ UW</span>
          <span>·</span>
          <span style={{ color: "var(--green)" }}>
            Agentic AI Engineering Intern
          </span>
          <span>·</span>
          <span style={{ color: "var(--purple)" }}>Seattle, WA</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            className="btn-wiggle"
            style={{
              padding: "14px 32px",
              background: "var(--green)",
              color: "#fff",
              fontFamily: "'Righteous', serif",
              fontSize: 15,
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 6,
              display: "inline-block",
              boxShadow: "0 8px 20px rgba(10,148,99,0.28)",
              transition: "box-shadow 0.2s",
            }}
          >
            SEE MY WORK
          </a>
          <a
            href="#contact"
            style={{
              padding: "14px 32px",
              border: "1.5px solid rgba(30,25,15,0.22)",
              color: "var(--text)",
              fontFamily: "'Righteous', serif",
              fontSize: 15,
              letterSpacing: "0.08em",
              textDecoration: "none",
              borderRadius: 6,
              display: "inline-block",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--purple)"
              e.currentTarget.style.background = "rgba(192,64,255,0.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(30,25,15,0.22)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            LET'S CONNECT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'Righteous', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, var(--muted), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  )
}
