import { useId, useState } from "react"

export default function Butterfly() {
  const id = useId()
  const [paused, setPaused] = useState(false)
  const wing = `${id}-wing`
  const glow = `${id}-glow`

  return (
    <button
      type="button"
      className={`butterfly-scene${paused ? " butterfly-paused" : ""}`}
      onClick={() => setPaused((value) => !value)}
      aria-label={paused ? "Resume butterfly animation" : "Pause butterfly animation"}
      aria-pressed={paused}
    >
      <div className="butterfly-halo" />
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
    </button>
  )
}
