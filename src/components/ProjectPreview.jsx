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

function CloseCopilotPreview() {
  const rows = [
    { d: 'AWS · us-east-1',   amt: '1,284.10', cat: 'Cloud Infra', c: 0.97, auto: true },
    { d: 'Stripe payout',     amt: '8,420.00', cat: 'Revenue',     c: 0.99, auto: true },
    { d: 'WeWork 3F deposit', amt: '2,500.00', cat: 'Rent?',       c: 0.61, auto: false },
    { d: 'Figma annual',      amt: '540.00',   cat: 'Software',    c: 0.94, auto: true },
  ]
  // Light "ledger" look — mirrors the real app's paper-white close workflow.
  return (
    <div style={{ ...shell, background: '#f7f7f4', display: 'flex', flexDirection: 'column', padding: '38px 14px 10px', gap: '5px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
        <span style={{ fontSize: '7.5px', color: '#777' }}>September close · threshold 0.85</span>
        <span style={{ marginLeft: 'auto', fontSize: '7px', fontWeight: 700, color: '#0f6b3a', background: '#dff5e6', borderRadius: '4px', padding: '2px 6px' }}>100% precision on auto-posts</span>
      </div>
      {rows.map(r => (
        <div key={r.d} style={{ display: 'grid', gridTemplateColumns: '1.4fr .7fr .8fr .9fr', gap: '8px', alignItems: 'center', fontSize: '7.5px', background: '#fff', border: '1px solid ' + (r.auto ? '#e6e6e1' : '#f0c36d'), borderRadius: '4px', padding: '4px 6px', color: '#222' }}>
          <span>{r.d}</span>
          <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>${r.amt}</span>
          <span style={{ color: r.auto ? '#222' : '#9a6700' }}>{r.cat}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ flex: 1, height: '3px', background: '#eee', borderRadius: '2px', overflow: 'hidden' }}><span style={{ display: 'block', width: `${r.c * 100}%`, height: '100%', background: r.auto ? '#1a7f37' : '#d4a72c' }} /></span>
            <span style={{ fontWeight: 700, color: r.auto ? '#1a7f37' : '#9a6700', fontSize: '6.5px' }}>{r.auto ? 'POSTED' : 'REVIEW'}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

function SubmissionClearPreview() {
  // "Paper" document look — an ACORD packet being cleared.
  const f = [['Insured', 'Harbor Freight Logistics LLC', 0.98], ['USDOT #', '3140921 · FMCSA ✓', 0.99], ['Flood zone', 'FEMA X (minimal)', 0.96], ['Prior carrier', 'not found', 0.42]]
  return (
    <div style={{ ...shell, background: '#e9e4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif' }}>
      <div style={{ width: '86%', background: '#fffdf8', boxShadow: '0 6px 18px rgba(0,0,0,.18)', padding: '10px 12px', marginTop: '26px', transform: 'rotate(-1deg)', borderTop: '3px solid #8b1e2d' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#222' }}>Submission #48211</span>
          <span style={{ fontSize: '7px', color: '#777', fontFamily: 'Inter, sans-serif' }}>broker email · 4 attachments</span>
          
        </div>
        <div style={{ display: 'flex', gap: '4px', margin: '7px 0', fontFamily: 'Inter, sans-serif' }}>
          {['classify', 'extract', 'validate', 'enrich', 'triage'].map((s, i) => (
            <span key={s} style={{ fontSize: '6.5px', padding: '2px 6px', borderRadius: '2px', background: i < 4 ? '#222' : '#fff', color: i < 4 ? '#fff' : '#8b1e2d', border: '1px solid ' + (i < 4 ? '#222' : '#8b1e2d') }}>{s}</span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 10px', fontFamily: 'Inter, sans-serif', fontSize: '7.5px' }}>
          {f.map(([k, v, c]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted #cfc8b8', padding: '2px 0' }}>
              <span style={{ color: '#777' }}>{k}</span><span style={{ color: c > 0.9 ? '#222' : '#9a6700', fontWeight: 600 }}>{v}{c <= 0.9 ? ' ⚠' : ''}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '6.5px', color: '#9a6700', marginTop: '6px', fontFamily: 'Inter, sans-serif' }}>1 field below 90% confidence → routed to underwriter</div>
      </div>
    </div>
  )
}

function GatewayPreview() {
  // Warm editorial look, matching the live demo page.
  const prov = [{ n: 'OpenAI', st: '429 · cooldown', c: '#b7791f' }, { n: 'Anthropic', st: 'serving', c: '#3f7d58' }, { n: 'Gemini', st: 'standby', c: '#9a9188' }]
  return (
    <div style={{ ...shell, background: '#faf7f2', padding: '36px 14px 8px', color: '#1f1b16' }}>
      <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '11px', lineHeight: 1.15, marginBottom: '4px' }}>One interface. <i style={{ color: '#c2410c' }}>Many providers.</i><br />Automatic failover.</div>
      <svg viewBox="0 0 300 92" width="100%" height="80">
        <rect x="2" y="30" width="62" height="30" rx="4" fill="#fff" stroke="#e6dfd3" /><text x="33" y="48" fontSize="7.5" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="600" fill="#1f1b16">your app</text>
        <line x1="64" y1="45" x2="108" y2="45" stroke="#c9bfae" strokeWidth="1.2" />
        <rect x="110" y="24" width="72" height="42" rx="4" fill="#1f1b16" /><text x="146" y="42" fontSize="8" textAnchor="middle" fontFamily="Georgia,serif" fill="#faf7f2">gateway</text><text x="146" y="55" fontSize="6" textAnchor="middle" fontFamily="monospace" fill="#c9bfae">litellm.Router</text>
        {prov.map((p, i) => { const y = 14 + i * 30; return (
          <g key={p.n}>
            <path d={`M182,45 C210,45 210,${y + 9} 230,${y + 9}`} fill="none" stroke={i === 1 ? '#c2410c' : '#c9bfae'} strokeWidth={i === 1 ? 2 : 1.2} />
            <rect x="232" y={y} width="66" height="18" rx="3" fill="#fff" stroke={p.c} strokeWidth={i === 1 ? 1.6 : 1} />
            <circle cx="240" cy={y + 9} r="2.5" fill={p.c} />
            <text x="246" y={y + 12} fontSize="7" fontFamily="Inter,sans-serif" fontWeight="600" fill="#1f1b16">{p.n}</text>
            <text x="295" y={y + 12} fontSize="5.5" textAnchor="end" fontFamily="monospace" fill={p.c}>{p.st}</text>
          </g>) })}
      </svg>
    </div>
  )
}

const MAP = { insightiq: InsightIQPreview, gitsense: GitSensePreview, resilienceos: ResilienceOSPreview, 'close-copilot': CloseCopilotPreview, submissionclear: SubmissionClearPreview, 'litellm-gateway': GatewayPreview }

export default function ProjectPreview({ id }) {
  const Comp = MAP[id]
  if (!Comp) return <div style={shell} />
  return <Comp />
}
