import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"

export default function Butterfly() {
  const id = useId()
  const [paused, setPaused] = useState(false)
  const [flying, setFlying] = useState(false)
  const flyerRef = useRef<HTMLButtonElement>(null)
  const releaseRef = useRef<HTMLButtonElement>(null)
  const origin = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!flying) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const position = { ...origin.current }
    let frame = 0
    const started = performance.now()
    let previous = started
    const clamp = (n: number, max: number) => Math.max(60, Math.min(max - 60, n))
    const returnHome = () => {
      setFlying(false)
      releaseRef.current?.focus({ preventScroll: true })
    }
    const key = (event: KeyboardEvent) => { if (event.key === "Escape") returnHome() }
    const animate = (now: number) => {
      const elapsed = Math.min(now - previous, 64)
      previous = now
      const ease = reduced ? 1 : 1 - Math.exp(-elapsed / 600)
      const time = (now - started) / 1000
      const x = clamp(reduced ? origin.current.x : window.innerWidth * (.5 + .35 * Math.sin(time * .25)), window.innerWidth)
      const y = clamp(reduced ? origin.current.y : window.innerHeight * (.5 + .3 * Math.sin(time * .4 + 1)), window.innerHeight)
      position.x += (x - position.x) * ease
      position.y += (y - position.y) * ease
      if (flyerRef.current) {
        const bob = reduced ? 0 : Math.sin(now / 330) * 8
        flyerRef.current.style.transform = `translate3d(${position.x - 60}px, ${position.y - 60 + bob}px, 0)`
      }
      frame = requestAnimationFrame(animate)
    }
    window.addEventListener("keydown", key)
    frame = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("keydown", key)
    }
  }, [flying])

  const release = () => {
    const box = releaseRef.current?.parentElement?.getBoundingClientRect()
    if (box) origin.current = { x: box.left + box.width / 2, y: box.top + box.height / 2 }
    setPaused(false)
    setFlying(true)
  }
  const wing = `${id}-wing`
  const glow = `${id}-glow`
  const artwork = (
      <svg className="butterfly" viewBox="0 0 448 455" aria-hidden="true">
        <defs>
          <radialGradient id={wing} cx="70%" cy="65%" r="85%">
            <stop offset="0" stopColor="#ead5ff" />
            <stop offset=".38" stopColor="#b47be6" />
            <stop offset=".75" stopColor="#7845b2" />
            <stop offset="1" stopColor="#48256d" />
          </radialGradient>
          <linearGradient id={glow} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#f8edff" stopOpacity=".85" />
            <stop offset="1" stopColor="#e2b6ff" stopOpacity=".1" />
          </linearGradient>
          <g id={`${id}-shape`}>
            <path d="M222 221C199 173 156 94 94 91C47 89 48 138 64 176C83 220 135 241 220 244C160 230 103 249 100 291C97 334 143 357 176 327C201 305 214 268 224 239Z" fill={`url(#${wing})`} stroke="#60348c" strokeWidth="2" />
            <path d="M216 227C172 185 118 157 75 120M217 234C162 214 111 211 74 184M216 245C172 263 141 289 119 315M217 249C197 278 178 304 160 325" fill="none" stroke="#e5c3ff" strokeWidth="1.5" opacity=".5" />
            <path d="M204 214C174 169 130 116 94 111C70 108 74 140 83 162C101 200 151 219 204 231Z" fill={`url(#${glow})`} opacity=".5" />
            <path d="M204 254C170 248 126 269 123 291C121 312 143 328 161 310C179 293 192 274 204 254Z" fill={`url(#${glow})`} opacity=".55" />
            <g fill="#f1dcff" opacity=".8">
              <ellipse cx="83" cy="139" rx="4" ry="7" transform="rotate(-24 83 139)" />
              <ellipse cx="96" cy="169" rx="4" ry="7" transform="rotate(-36 96 169)" />
              <ellipse cx="117" cy="192" rx="4" ry="6" transform="rotate(-45 117 192)" />
              <ellipse cx="142" cy="208" rx="3" ry="5" transform="rotate(-55 142 208)" />
              <circle cx="120" cy="291" r="3" /><circle cx="135" cy="310" r="3" />
            </g>
          </g>
        </defs>
        <g className="butterfly-wing butterfly-wing-left"><use href={`#${id}-shape`} /></g>
        <g className="butterfly-wing butterfly-wing-right"><use href={`#${id}-shape`} transform="translate(448 0) scale(-1 1)" /></g>
        <g className="butterfly-body">
          <path d="M221 204Q215 186 206 181M227 204Q233 186 242 181" fill="none" stroke="#4c2967" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="224" cy="240" rx="5" ry="32" fill="#532f72" />
          <ellipse cx="224" cy="219" rx="7" ry="15" fill="#704292" />
          <circle cx="224" cy="204" r="6" fill="#48285f" />
          <path d="M223 220V259" stroke="#c59ee2" strokeWidth="2" strokeLinecap="round" opacity=".65" />
        </g>
      </svg>
  )

  return (
    <div className="butterfly-scene">
      <div className="butterfly-halo" />
      {!flying && (
        <button
          type="button"
          className={`butterfly-home-button${paused ? " butterfly-paused" : ""}`}
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Resume butterfly animation" : "Pause butterfly animation"}
          aria-pressed={paused}
        >{artwork}</button>
      )}
      <button ref={releaseRef} className="butterfly-release" type="button" onClick={flying ? () => setFlying(false) : release}>
        {flying ? "Bring it home!" : "Set it free!"}
      </button>
      {flying && createPortal(
        <button
          ref={flyerRef}
          type="button"
          className="butterfly-flyer"
          onClick={() => { setFlying(false); releaseRef.current?.focus({ preventScroll: true }) }}
          aria-label="Bring butterfly home (or press Escape)"
          autoFocus
        >{artwork}</button>,
        document.body,
      )}
    </div>
  )
}
