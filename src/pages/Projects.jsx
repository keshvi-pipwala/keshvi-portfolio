import React, { useState } from 'react'
import { PROJECTS } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

const CARD_GRADIENTS = [
  'linear-gradient(135deg,rgba(124,122,207,.5),rgba(64,202,255,.3))',
  'linear-gradient(135deg,rgba(64,202,255,.45),rgba(255,140,105,.28))',
  'linear-gradient(135deg,rgba(255,140,105,.4),rgba(255,200,80,.3))',
]

export default function Projects() {
  const [q, setQ] = useState('')
  const items = (PROJECTS || []).filter(p =>
    !q || (p.title + ' ' + p.subtitle + ' ' + (p.stack || []).join(' ')).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'1100px', margin:'0 auto' }} className="page-pad">
      <div style={{ marginBottom:'28px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>WORK</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, marginBottom:'10px', letterSpacing:'-.02em' }}>Projects</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.42)', lineHeight:1.7 }}>Shipped to production. Not demos.</p>
      </div>

      <input
        value={q} onChange={e => setQ(e.target.value)}
        placeholder="Search by tech or name..."
        style={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'12px', padding:'10px 16px', color:'#fff', fontSize:'13px', fontFamily:'inherit', outline:'none', width:'100%', maxWidth:'360px', marginBottom:'28px', display:'block' }}
      />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'22px' }}>
        {items.map((proj, i) => (
          <div key={proj.id || i} style={{ borderRadius:'22px', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.04)', overflow:'hidden', display:'flex', flexDirection:'column', backdropFilter:'blur(14px)', transition:'transform .2s, box-shadow .2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 60px rgba(0,0,0,.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
          >
            {/* Header with crisp icon */}
            <div style={{ height:'110px', background:CARD_GRADIENTS[i % CARD_GRADIENTS.length], display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 24px', position:'relative' }}>
              <span style={{ fontSize:'52px', lineHeight:1, filter:'none', imageRendering:'crisp-edges' }}>{proj.emoji}</span>
              <div style={{ display:'flex', gap:'8px', alignItems:'center' }}>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer"
                    style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(0,0,0,.55)', border:'1px solid rgba(255,255,255,.25)', borderRadius:'9999px', padding:'6px 14px', fontSize:'12px', fontWeight:700, color:'#fff', textDecoration:'none', backdropFilter:'blur(8px)' }}>
                    ↗ Live Demo
                  </a>
                )}
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(0,0,0,.55)', border:'1px solid rgba(255,255,255,.2)', borderRadius:'9999px', padding:'6px 14px', fontSize:'12px', fontWeight:700, color:'rgba(255,255,255,.9)', textDecoration:'none', backdropFilter:'blur(8px)' }}>
                    ⚡ GitHub
                  </a>
                )}
              </div>
              {proj.live && (
                <span style={{ position:'absolute', top:'10px', left:'80px', background:'rgba(0,200,100,.25)', border:'1px solid rgba(0,200,100,.5)', borderRadius:'9999px', padding:'2px 9px', fontSize:'10px', color:'rgba(0,230,110,.95)', fontWeight:700, letterSpacing:'.05em' }}>LIVE</span>
              )}
            </div>

            <div style={{ padding:'20px 22px', flex:1, display:'flex', flexDirection:'column' }}>
              <div style={{ fontWeight:800, fontSize:'17px', marginBottom:'3px', letterSpacing:'-.01em' }}>{proj.title}</div>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,.38)', marginBottom:'10px', letterSpacing:'.01em' }}>{proj.subtitle}</div>
              <p style={{ fontSize:'13px', color:'rgba(100,200,255,.9)', fontWeight:600, marginBottom:'14px', lineHeight:1.5, fontStyle:'italic' }}>{proj.tagline}</p>

              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'8px', flex:1, marginBottom:'16px' }}>
                {(proj.bullets || []).map((b, j) => (
                  <li key={j} style={{ fontSize:'12.5px', color:'rgba(255,255,255,.72)', lineHeight:1.7, display:'flex', gap:'10px' }}>
                    <span style={{ color:'rgba(167,143,255,.8)', flexShrink:0, fontSize:'8px', marginTop:'5px' }}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {(proj.stack || []).map(s => (
                  <span key={s} style={{ border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.06)', borderRadius:'7px', padding:'3px 10px', fontSize:'11px', color:'rgba(255,255,255,.72)' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
