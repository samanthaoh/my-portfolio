import { type CSSProperties, useState, useEffect } from "react"

/* ─── Blob ─────────────────────────────────────────────────────────── */

function Blob({
    color,
    size,
    top,
    left,
    anim,
    delay,
    blur = 48,
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
                opacity: 0.55,
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
        opacity: 0.55,
    }

    if (shape === "vinyl") {
        return (
            <div
                style={{
                    ...style,
                    borderRadius: "50%",
                    border: `2px solid ${color}`,
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
        >
            <path d={svgs[shape]} />
        </svg>
    )
}

/* ─── Hero ─────────────────────────────────────────────────────────── */

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 50)
        return () => clearTimeout(t)
    }, [])

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                padding: "120px 32px 80px",
                maxWidth: 960,
                margin: "0 auto",
            }}
        >
            {/* Blobs */}
            <Blob color="var(--pastel-lavender)" size={260} top="15%" left="68%" anim="blob-a" delay={0} />
            <Blob color="var(--pastel-pink)" size={180} top="60%" left="78%" anim="blob-b" delay={2.5} />
            <Blob color="var(--pastel-mint)" size={140} top="55%" left="8%" anim="blob-c" delay={1.5} />

            {/* Floating music icons */}
            <FloatShape shape="note" color="var(--ink-yellow)" size={26} top="16%" right="10%" delay={0} />
            <FloatShape shape="waveform" color="var(--ink-blue)" size={20} top="68%" right="18%" delay={1.2} />
            <FloatShape shape="headphones" color="var(--ink-mint)" size={20} top="32%" right="4%" delay={0.7} />
            <FloatShape shape="vinyl" color="var(--ink-lavender)" size={16} top="78%" left="14%" delay={2} />
            <FloatShape shape="note" color="var(--ink-pink)" size={18} top="22%" left="6%" delay={1.5} />

            <div style={{ position: "relative", zIndex: 1 }}>
                <h1
                    className={`fade-up fade-up-delay-2 ${mounted ? "visible" : ""}`}
                    style={{
                        fontFamily: "'Fraunces', serif",
                        fontSize: "clamp(56px, 10vw, 108px)",
                        fontWeight: 300,
                        lineHeight: 0.92,
                        letterSpacing: "-0.03em",
                        color: "var(--text)",
                        margin: "0 0 32px",
                    }}
                >
                    Samantha
                    <br />
                    <em>Oh</em>
                </h1>

                <p
                    className={`fade-up fade-up-delay-3 ${mounted ? "visible" : ""}`}
                    style={{
                        fontFamily: "'Elms Sans', sans-serif",
                        fontSize: "clamp(16px, 2vw, 19px)",
                        color: "var(--muted)",
                        maxWidth: 480,
                        lineHeight: 1.65,
                        marginBottom: 40,
                    }}
                >
                    Informatics student at the University of Washington building
                    thoughtful products and AI systems, from agentic workflows to
                    interfaces people actually enjoy using.
                </p>

                <div
                    className="hero-meta fade-up fade-up-3"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7rem",
                        flexWrap: "wrap",
                        marginBottom: "2.4rem",
                        fontSize: "0.75rem",
                        letterSpacing: "0.04em",
                        fontWeight: "bold",
                    }}
                >
                    <span>Informatics @ UW</span>
                    <span>·</span>
                    <span>Agentic AI Engineering</span>
                    <span>·</span>
                    <span>Seattle, WA</span>
                </div>

                <div
                    className={`fade-up fade-up-delay-4 ${mounted ? "visible" : ""}`}
                    style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
                >
                    <a
                        href="#projects"
                        style={{
                            fontFamily: "'Elms Sans', sans-serif",
                            fontSize: 14,
                            fontWeight: 600,
                            background: "var(--accent)",
                            color: "#fff",
                            padding: "13px 28px",
                            borderRadius: 100,
                            textDecoration: "none",
                            letterSpacing: "0.02em",
                            boxShadow: "0 4px 16px rgba(196,103,138,0.3)",
                            transition: "opacity 0.2s",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        See my work
                    </a>
                    <a
                        href="#contact"
                        style={{
                            fontFamily: "'Elms Sans', sans-serif",
                            fontSize: 14,
                            fontWeight: 500,
                            background: "transparent",
                            color: "var(--text)",
                            padding: "13px 28px",
                            borderRadius: 100,
                            textDecoration: "none",
                            border: "1px solid var(--border)",
                            letterSpacing: "0.02em",
                            transition: "border-color 0.2s, background 0.2s",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)"
                            e.currentTarget.style.background = "var(--pastel-pink)"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border)"
                            e.currentTarget.style.background = "transparent"
                        }}
                    >
                        Say hello ✉
                    </a>
                </div>
            </div>
        </section>
    )
}