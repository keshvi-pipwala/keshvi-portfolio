import React from 'react'
import { EDUCATION, CERTIFICATIONS } from '../data'

export default function Education() {
  return (
    <div style={{ minHeight:'100vh', padding:'44px 40px 80px', maxWidth:'860px', margin:'0 auto' }} className="page-pad">

      <div className="reveal" style={{ marginBottom:'48px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>EDUCATION</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.02em' }}>Academic Background</h1>
      </div>

      {/* Degrees */}
      <div style={{ display:'flex', flexDirection:'column', gap:'20px', marginBottom:'52px' }}>
        {(EDUCATION || []).map((edu, i) => (
          <div key={i} className={`card-3d card-glow reveal reveal-delay-${i+1}`}
            style={{ borderRadius:'22px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.03)', backdropFilter:'blur(14px)', overflow:'hidden' }}>
            <div style={{ height:'3px', background:'linear-gradient(90deg,rgba(124,122,207,.8),rgba(64,202,255,.5),transparent)' }}/>
            <div style={{ padding:'24px 28px' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'12px', marginBottom:'8px' }}>
                <div>
                  <div style={{ fontWeight:800, fontSize:'17px', letterSpacing:'-.01em', marginBottom:'4px' }}>
                    {edu.star && <span style={{ marginRight:'8px' }}>⭐</span>}{edu.school}
                  </div>
                  <div style={{ fontSize:'13px', color:'rgba(167,143,255,.85)', fontWeight:600 }}>{edu.degree}</div>
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:'11px', color:'rgba(255,255,255,.4)', marginBottom:'4px' }}>{edu.meta}</div>
                  <div style={{ display:'inline-block', background:'rgba(255,215,0,.12)', border:'1px solid rgba(255,215,0,.3)', borderRadius:'8px', padding:'3px 10px', fontSize:'12px', fontWeight:700, color:'rgba(255,215,0,.9)' }}>GPA {edu.gpa}</div>
                </div>
              </div>
              {edu.note && <p style={{ fontSize:'12.5px', color:'rgba(255,255,255,.4)', lineHeight:1.7, borderLeft:'2px solid rgba(124,122,207,.3)', paddingLeft:'12px', marginTop:'12px', fontStyle:'italic' }}>{edu.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="reveal" style={{ marginBottom:'20px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>CERTIFICATIONS</p>
        <h2 style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:800, letterSpacing:'-.02em' }}>Credentials</h2>
      </div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:'14px' }}>
        {(CERTIFICATIONS || []).map((c, i) => (
          <a key={i} href={c.url||'#'} target="_blank" rel="noreferrer"
            className={`reveal reveal-scale reveal-delay-${i+1}`}
            style={{ borderRadius:'16px', border:'1px solid '+(c.border||'rgba(255,255,255,.2)'), background:c.color||'rgba(255,255,255,.05)', padding:'18px 22px', minWidth:'240px', flex:1, textDecoration:'none', display:'block', transition:'transform .2s, box-shadow .2s' }}
            onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-4px) scale(1.02)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,.4)' }}
            onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='' }}>
            <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:c.border||'rgba(255,255,255,.7)', marginBottom:'6px' }}>{c.issuer}</div>
            <div style={{ fontSize:'13px', color:'rgba(255,255,255,.88)', fontWeight:700, marginBottom:'6px' }}>{c.name}</div>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,.38)' }}>Issued {c.date}</div>
              <div style={{ fontSize:'11px', color:c.border||'rgba(255,255,255,.5)', fontWeight:700 }}>View ↗</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
