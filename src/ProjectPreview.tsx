export default function ProjectPreview({ name }: { name: string }) {
  if (name === "3D Room") return (
    <div className="project-preview preview-room" role="img" aria-label="Concept illustration of a room layout with furniture. 3D Room is coming soon.">
      <span className="preview-note">make room for your ideas.</span>
      <div className="room-plan" aria-hidden="true">
        <div className="room-window" />
        <div className="room-rug" />
        <div className="room-sofa"><i /><i /></div>
        <div className="room-table" />
        <div className="room-plant" />
        <span className="room-door" />
      </div>
      <span className="preview-caption">YOUR SPACE, REIMAGINED</span>
    </div>
  )
  if (name === "Sip") return (
    <div className="project-preview preview-sip" role="img" aria-label="Illustrated concept preview of Sip, a café connection app">
      <span className="preview-note">a little more connection.</span>
      <div className="sip-phone"><div className="phone-speaker" /><span className="sip-wordmark">sip.</span><p>Your people.<br />Your next coffee.</p><div className="coffee-art">☕</div><div className="sip-place">Find your corner <span>↗</span></div><div className="phone-tabs">⌂ <span>♡</span> ☺</div></div>
      <span className="preview-caption">CAFÉS + COMMUNITY</span>
    </div>
  )
  if (name === "GroundworkAI") return <GroundworkPreview />
  return (
    <div className="project-preview preview-music" role="img" aria-label="Illustration of a vinyl record and music preference waveform">
      <span className="preview-note">find your next on-repeat.</span><div className="record-sleeve"><span>FOR THE<br />RECORD.</span><div className="vinyl"><div className="vinyl-label">so you<br />might like…</div></div></div><div className="sound-wave">{[12, 24, 38, 20, 48, 32, 58, 28, 42, 18, 32, 52, 24, 38, 16].map((height, i) => <i key={i} style={{ height }} />)}</div><span className="preview-caption">MUSIC × MACHINE LEARNING</span>
    </div>
  )
}
function GroundworkPreview() {
  return (
    <div className="project-preview preview-ground groundwork-interactive">
      <div className="groundwork-preview-viewport">
          <iframe
            src="https://ground-work-ai.vercel.app/"
            title="GroundworkAI interactive website preview"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
      </div>
    </div>
  )
}
