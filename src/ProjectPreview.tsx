export default function ProjectPreview({ name }: { name: string }) {
  if (name === "Sip") return (
    <div className="project-preview preview-sip" role="img" aria-label="Illustrated concept preview of Sip, a café connection app">
      <span className="preview-note">a little more connection.</span>
      <div className="sip-phone"><div className="phone-speaker" /><span className="sip-wordmark">sip.</span><p>Your people.<br />Your next coffee.</p><div className="coffee-art">☕</div><div className="sip-place">Find your corner <span>↗</span></div><div className="phone-tabs">⌂ <span>♡</span> ☺</div></div>
      <span className="preview-caption">CAFÉS + COMMUNITY</span>
    </div>
  )
  if (name === "GroundworkAI") return (
    <div className="project-preview preview-ground">
      <img className="groundwork-preview-image" src="/groundwork-dashboard.webp" alt="GroundworkAI website dashboard with its navigation, Road Condition Overview, and inspection map" loading="lazy" width="1400" height="883" />
    </div>
  )
  return (
    <div className="project-preview preview-music" role="img" aria-label="Illustration of a vinyl record and music preference waveform">
      <span className="preview-note">find your next on-repeat.</span><div className="record-sleeve"><span>FOR THE<br />RECORD.</span><div className="vinyl"><div className="vinyl-label">so you<br />might like…</div></div></div><div className="sound-wave">{[12, 24, 38, 20, 48, 32, 58, 28, 42, 18, 32, 52, 24, 38, 16].map((height, i) => <i key={i} style={{ height }} />)}</div><span className="preview-caption">MUSIC × MACHINE LEARNING</span>
    </div>
  )
}
