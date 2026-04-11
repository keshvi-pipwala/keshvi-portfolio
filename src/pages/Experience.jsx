import React from 'react'
import { EXPERIENCE } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

export default function Experience() {
  return (
    <div style={{ minHeight:'100vh', padding:'44px 40px 80px', maxWidth:'860px', margin:'0 auto' }} className="page-pad">
      <div className="reveal" style={{ marginBottom:'48px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>CAREER</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, marginBottom:'10px', letterSpacing:'-.02em' }}>Professional Experience</h1>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'28px' }}>
        {(EXPERIENCE || []).map((exp, i) => (
          <div key={i} className={`card-3d card-glow reveal reveal-delay-${Math.min(i+1,5)}`}
            style={{ borderRadius:'22px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.03)', backdropFilter:'blur(14px)', overflow:'hidden', position:'relative' }}>

            {/* Top accent bar */}
            <div style={{ height:'3px', background:'linear-gradient(90deg,rgba(124,122,207,.8),rgba(64,202,255,.5),transparent)', borderRadius:'22px 22px 0 0' }}/>

            <div style={{ padding:'24px 28px' }}>
              {/* Header row */}
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'6px', flexWrap:'wrap', gap:'8px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
                  <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:'linear-gradient(135deg,rgba(124,122,207,.3),rgba(64,202,255,.2))', border:'1px solid rgba(124,122,207,.35)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0 }}>
                    {exp.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:'16px', letterSpacing:'-.01em' }}>{exp.role}</div>
                    <div style={{ fontSize:'12px', color:'rgba(167,143,255,.85)', fontWeight:600, marginTop:'1px' }}>{exp.company}</div>
                  </div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:'11.5px', color:'rgba(255,255,255,.5)', fontWeight:500 }}>{exp.time}</div>
                  <div style={{ fontSize:'10px', color:'rgba(124,122,207,.7)', marginTop:'2px', fontWeight:600 }}>{exp.type}</div>
                </div>
              </div>

              {/* Summary */}
              {exp.summary && (
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,.45)', lineHeight:1.7, marginBottom:'16px', fontStyle:'italic', borderLeft:'2px solid rgba(124,122,207,.35)', paddingLeft:'12px' }}>
                  {exp.summary}
                </p>
              )}

              {/* Bullets */}
              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'10px', marginBottom:'18px' }}>
                {(exp.bullets || []).map((b, j) => (
                  <li key={j} style={{ fontSize:'13px', color:'rgba(255,255,255,.75)', lineHeight:1.75, display:'flex', gap:'12px' }}>
                    <span style={{ color:'rgba(167,143,255,.7)', flexShrink:0, fontSize:'8px', marginTop:'6px' }}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {(exp.stack || []).map(s => (
                  <span key={s} className="skill-tag" style={{ border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.05)', borderRadius:'8px', padding:'3px 10px', fontSize:'11px', color:'rgba(255,255,255,.65)' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
