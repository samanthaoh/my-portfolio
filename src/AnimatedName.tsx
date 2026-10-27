import { useRef } from "react"

export default function AnimatedName() {
  const nameRef = useRef<HTMLButtonElement>(null)

  function playWave() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    nameRef.current?.querySelectorAll<HTMLElement>(".name-letter").forEach((letter, index) => {
      letter.getAnimations().forEach(animation => animation.cancel())
      letter.animate(
        [
          { transform: "translateY(0) rotate(0deg)" },
          { transform: "translateY(-0.12em) rotate(-3deg)", offset: 0.4 },
          { transform: "translateY(0.025em) rotate(1deg)", offset: 0.75 },
          { transform: "translateY(0) rotate(0deg)" },
        ],
        { duration: 600, delay: index * 45, easing: "ease-in-out" },
      )
    })
  }

  return (
    <h1>
      <button
        ref={nameRef}
        className="animated-name"
        type="button"
        aria-label="Samantha Oh — play letter wave"
        onPointerEnter={event => { if (event.pointerType === "mouse") playWave() }}
        onClick={playWave}
        onFocus={playWave}
      >
        <span aria-hidden="true">
          {Array.from("Samantha Oh").map((letter, index) => (
            <span className="name-letter" key={index}>{letter === " " ? "\u00a0" : letter}</span>
          ))}
        </span>
      </button>
    </h1>
  )
}
