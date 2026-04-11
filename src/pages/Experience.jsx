import React, { useEffect, useRef } from 'react'
import { EXPERIENCE } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Experience() {
  useReveal()
  const items = EXPERIENCE || []
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'940px', margin:'0 auto' }} className="page-pad">
      <div className="reveal" style={{ marginBottom:'32px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>CAREER</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, marginBottom:'10px', letterSpacing:'-.02em' }}>Professional Experience</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.42)', lineHeight:1.7 }}>Every role has shipped to real users. Every metric is real.</p>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
        {items.map((exp, i) => (
          <div key={i} className={`reveal card-3d reveal-delay-${Math.min(i+1,5)}`}
            style={{ borderRadius:'20px', border:'1px solid rgba(255,255,255,.09)', background:'rgba(255,255,255,.04)', padding:'24px', backdropFilter:'blur(14px)', transformStyle:'preserve-3d' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'12px', flexWrap:'wrap' }}>
              <div style={{ width:'46px', height:'46px', borderRadius:'14px', border:'1px solid rgba(255,255,255,.1)', background:'linear-gradient(135deg,rgba(124,122,207,.22),rgba(64,202,255,.1))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0 }}>{exp.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:'16px', marginBottom:'2px' }}>{exp.role}</div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,.45)' }}>{exp.company} · {exp.time}</div>
              </div>
              <span style={{ fontSize:'11px', background:'rgba(124,122,207,.15)', border:'1px solid rgba(124,122,207,.35)', borderRadius:'9999px', padding:'3px 10px', color:'rgba(167,143,255,.9)', fontWeight:600, flexShrink:0 }}>{exp.type}</span>
            </div>
            {exp.summary && (
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,.55)', lineHeight:1.75, marginBottom:'14px', borderLeft:'2px solid rgba(124,122,207,.45)', paddingLeft:'13px', fontStyle:'italic' }}>{exp.summary}</p>
            )}
            <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'8px', marginBottom:'14px' }}>
              {(exp.bullets || []).map((b, j) => (
                <li key={j} style={{ fontSize:'13px', color:'rgba(255,255,255,.78)', lineHeight:1.75, display:'flex', gap:'10px' }}>
                  <span style={{ color:'rgba(167,143,255,.8)', flexShrink:0, marginTop:'2px' }}>▶</span>
                  <span>{bold(b)}</span>
                </li>
              ))}
            </ul>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
              {(exp.stack || []).map(s => (
                <span key={s} className="skill-tag" style={{ border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.06)', borderRadius:'9999px', padding:'2px 10px', fontSize:'11px', color:'rgba(255,255,255,.7)', cursor:'default' }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
