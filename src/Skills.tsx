import { type CSSProperties } from "react"
import { useInView } from "./useInView"
import SectionLabel from "./SectionLabel"
import { skills, catColors, catLabels } from "./data"

export default function Skills() {
  const [ref, inView] = useInView()
  const cats = Array.from(new Set(skills.map((s) => s.cat)))

  return (
    <section
      id="skills"
      style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
    >
      <div ref={ref}>
        <div
          className={`fade-up ${inView ? "visible" : ""}`}
          style={{ marginBottom: 64 }}
        >
          <SectionLabel>{"The Mix"}</SectionLabel>
          <h2
            style={{
              fontFamily: "'Righteous', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: 0,
            }}
          >
            SKILLS &<br />
            <span style={{ color: "var(--green)" }}>TECH STACK.</span>
          </h2>
        </div>

        {/* EQ visualizer */}
        <div
          className={`fade-up fade-up-delay-2 ${inView ? "visible" : ""}`}
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(30,25,15,0.09)",
            borderRadius: 16,
            padding: "40px 32px 32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Mixing board header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "'Righteous', monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--muted)",
                textTransform: "uppercase",
              }}
            >
              ◉ Channel Strip — EQ View
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {cats.map((cat) => (
                <div
                  key={cat}
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: catColors[cat],
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Righteous', monospace",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      color: "var(--muted)",
                    }}
                  >
                    {catLabels[cat]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* EQ bars */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-end",
              height: 160,
            }}
          >
            {skills.map((skill, i) => (
              <EQBar
                key={skill.label}
                skill={skill}
                inView={inView}
                delay={i * 0.04}
              />
            ))}
          </div>

          {/* Scale lines */}
          {[25, 50, 75, 100].map((v) => (
            <div
              key={v}
              style={{
                position: "absolute",
                right: 32,
                bottom: `${(v / 100) * 160 + 86}px`,
                fontFamily: "'Righteous', monospace",
                fontSize: 9,
                color: "rgba(30,25,15,0.18)",
                pointerEvents: "none",
              }}
            >
              {v}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EQBar({
  skill,
  inView,
  delay,
}: {
  skill: typeof skills[0]
  inView: boolean
  delay: number
}) {
  const color = catColors[skill.cat]
  const lowPct = Math.max(30, skill.pct - 30)
  const dur = skill.dur

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 6,
      }}
    >
      {/* Bar container */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          minHeight: 140,
        }}
      >
        {/* Track */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(30,25,15,0.06)",
            borderRadius: 4,
          }}
        />
        {/* Fill */}
        <div
          style={
            {
              width: "100%",
              height: inView ? `${skill.pct}%` : "4%",
              background: `linear-gradient(to top, ${color}, ${color}88)`,
              borderRadius: 4,
              boxShadow: inView ? `0 0 10px ${color}66` : "none",
              transition: `height 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
              position: "relative",
              animation: inView
                ? `eq-dance ${dur + 0.4}s ease-in-out ${delay * 0.5}s infinite alternate`
                : "none",
              "--eq-low": `${lowPct / skill.pct}`,
            } as CSSProperties & { "--eq-low": string }
          }
        />
      </div>
      {/* Label */}
      <div
        style={{
          fontFamily: "'Righteous', monospace",
          fontSize: 9,
          letterSpacing: "0.08em",
          color: inView ? color : "var(--muted)",
          textAlign: "center",
          textTransform: "uppercase",
          transition: `color 0.4s ${delay}s`,
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
          height: 60,
          lineHeight: 1,
        }}
      >
        {skill.label}
      </div>
    </div>
  )
}
