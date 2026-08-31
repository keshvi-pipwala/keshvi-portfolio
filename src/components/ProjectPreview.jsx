import React from 'react'

// Inline, self-contained product previews for each project card.
// These are faithful recreations of the real UIs (InsightIQ is live and looks
// exactly like this) — rendered as HTML/SVG so they load instantly with no
// image hosting and never break on a cold-start.

const shell = {
  height: '170px', position: 'relative', overflow: 'hidden',
  background: '#0b0b18', borderBottom: '1px solid rgba(255,255,255,0.06)',
}

function InsightIQPreview() {
  const bars = [
    { label: 'Enterprise', v: 100, c: '#a78fff' },
    { label: 'Pro', v: 62, c: '#40caff' },
    { label: 'Starter', v: 24, c: '#ff80c0' },
  ]
  return (
    <div style={{ ...shell, display: 'flex', flexDirection: 'column', padding: '12px 14px', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <span style={{ fontSize: '9px', fontWeight: 700, color: '#cfc6ff' }}>InsightIQ</span>
        <span style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.35)' }}>· grounded via RAG</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '7.5px', color: 'rgba(0,235,120,0.9)' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(0,235,120,0.9)' }} /> dataset loaded
        </span>
      </div>
      {/* user question bubble */}
      <div style={{ alignSelf: 'flex-end', maxWidth: '78%', background: 'linear-gradient(135deg,rgba(124,122,207,0.5),rgba(64,202,255,0.35))', border: '1px solid rgba(124,122,207,0.5)', borderRadius: '10px 10px 2px 10px', padding: '5px 9px', fontSize: '8.5px', color: '#fff' }}>
        What's the revenue breakdown by plan?
      </div>
      {/* answer with chart */}
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px 10px 10px 2px', padding: '8px 10px', display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '9px', height: '58px' }}>
          {bars.map(b => (
            <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
              <div style={{ width: '16px', height: `${b.v * 0.5}px`, background: b.c, borderRadius: '3px 3px 0 0', boxShadow: `0 0 10px ${b.c}66` }} />
              <span style={{ fontSize: '6.5px', color: 'rgba(255,255,255,0.4)' }}>{b.label}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
          <span style={{ color: '#a78fff', fontWeight: 700 }}>Enterprise</span> drives<br />the majority of revenue,<br />grounded in your 25 rows.
        </div>
      </div>
    </div>
  )
}

function GitSensePreview() {
  return (
    <div style={{ ...shell, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '14px 16px' }}>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #ff6b5c', borderRadius: '8px', padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '5px', background: 'linear-gradient(135deg,#7c7acf,#40caff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>🔬</span>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#fff' }}>GitSense</span>
          <span style={{ fontSize: '7.5px', color: 'rgba(255,255,255,0.35)' }}>APP</span>
          <span style={{ marginLeft: 'auto', fontSize: '7px', color: '#ff9a5c', fontWeight: 700, border: '1px solid rgba(255,140,90,0.4)', borderRadius: '20px', padding: '1px 7px' }}>RISK: HIGH</span>
        </div>
        <div style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.55 }}>
          <b style={{ color: '#fff' }}>Breaking change</b> in <span style={{ color: '#40caff' }}>PR #142</span> — <code style={{ color: '#ffd166' }}>auth.py</code> removes a public method still called in 3 services.
        </div>
        <div style={{ marginTop: '7px', display: 'flex', gap: '6px' }}>
          {['semantic search', '7-step pipeline', 'Slack alert'].map(t => (
            <span key={t} style={{ fontSize: '6.5px', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '5px', padding: '2px 6px' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ResilienceOSPreview() {
  // mini service topology; one node failing
  const nodes = [
    { x: 40, y: 45, ok: true, label: 'gateway' },
    { x: 130, y: 30, ok: true, label: 'auth' },
    { x: 130, y: 90, ok: false, label: 'orders' },
    { x: 220, y: 45, ok: true, label: 'db' },
  ]
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3]]
  return (
    <div style={{ ...shell, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 260 130" width="82%" height="82%">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={(!nodes[a].ok || !nodes[b].ok) ? 'rgba(255,90,80,0.6)' : 'rgba(124,122,207,0.4)'} strokeWidth="1.4"
            strokeDasharray={(!nodes[a].ok || !nodes[b].ok) ? '4 3' : '0'} />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="13" fill={n.ok ? 'rgba(64,202,255,0.15)' : 'rgba(255,80,70,0.2)'}
              stroke={n.ok ? '#40caff' : '#ff5a46'} strokeWidth="1.6" />
            {!n.ok && <circle cx={n.x} cy={n.y} r="18" fill="none" stroke="#ff5a46" strokeWidth="1" opacity="0.5" />}
            <text x={n.x} y={n.y + 26} textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="Inter,sans-serif">{n.label}</text>
          </g>
        ))}
        <text x="130" y="122" textAnchor="middle" fontSize="7.5" fill="#ff8a7a" fontFamily="Inter,sans-serif">
          ⚠ latency injected · orders node degraded · blast radius: 2 services
        </text>
      </svg>
    </div>
  )
}

const MAP = { insightiq: InsightIQPreview, gitsense: GitSensePreview, resilienceos: ResilienceOSPreview }

export default function ProjectPreview({ id }) {
  const Comp = MAP[id]
  if (!Comp) return <div style={shell} />
  return <Comp />
}
