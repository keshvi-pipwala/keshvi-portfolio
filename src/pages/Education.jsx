import React, { useEffect } from 'react'
import { EDUCATION, CERTIFICATIONS } from '../data'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis')
    }), { threshold:0.06 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const CSS = '.rv{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}.rv.vis{opacity:1;transform:translateY(0);}.d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}.d5{transition-delay:.5s}.ccard{transition:transform .25s,border-color .25s;}.ccard:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(0,0,0,.45);}'

export default function Education() {
  useReveal()
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'920px', margin:'0 auto' }} className="page-pad">
      <style>{CSS}</style>
      <div className="rv" style={{ marginBottom:'32px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>BACKGROUND</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.025em', lineHeight:1.1, marginBottom:'10px' }}>Education</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.42)', lineHeight:1.7 }}>4.0 GPA while working full-time at NASA and ASU simultaneously.</p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'18px', marginBottom:'44px' }}>
        {EDUCATION.map((edu,i) => (
          <div key={i} className={'rv d'+(i+1)} style={{ borderRadius:'22px', border:'1px solid rgba(255,255,255,.09)', background:'rgba(255,255,255,.04)', padding:'26px 26px 26px 30px', backdropFilter:'blur(14px)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', left:0, top:0, height:'100%', width:'3px', background:'linear-gradient(180deg,rgba(167,143,255,.8),rgba(64,202,255,.4))' }}/>
            <div style={{ position:'absolute', top:'-20px', right:'-20px', width:'100px', height:'100px', borderRadius:'50%', background:'radial-gradient(circle,rgba(124,122,207,.08) 0%,transparent 70%)', pointerEvents:'none' }}/>
            <div style={{ fontSize:'11px', fontWeight:700, color:'rgba(167,143,255,.85)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'6px' }}>{edu.school}</div>
            <div style={{ fontWeight:300, fontSize:'18px', color:'rgba(255,255,255,.94)', marginBottom:'4px', lineHeight:1.3 }}>{edu.degree}</div>
            <div style={{ fontSize:'12px', color:'rgba(255,255,255,.42)', marginBottom:'14px' }}>{edu.meta}</div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', border:'1px solid rgba(124,122,207,.45)', background:'rgba(124,122,207,.1)', borderRadius:'9px', padding:'6px 14px' }}>
                <span style={{ fontSize:'14px', fontWeight:800, color:'rgba(167,143,255,.95)' }}>GPA {edu.gpa}</span>
                {edu.star && <span>⭐</span>}
              </div>
            </div>
            {edu.note && <p style={{ fontSize:'12px', color:'rgba(255,255,255,.38)', marginTop:'10px', lineHeight:1.5, fontStyle:'italic' }}>{edu.note}</p>}
          </div>
        ))}
      </div>

      <div className="rv d3" style={{ marginBottom:'20px' }}>
        <h2 style={{ fontSize:'20px', fontWeight:700, letterSpacing:'-.01em', marginBottom:'4px' }}>Certifications</h2>
        <p style={{ fontSize:'13px', color:'rgba(255,255,255,.4)' }}>Industry-verified credentials.</p>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'14px' }}>
        {CERTIFICATIONS.map((c,i) => (
          <div key={i} className={'rv d'+(i+4)+' ccard'} style={{ borderRadius:'16px', border:'1px solid '+c.border, background:c.color, padding:'16px 20px', backdropFilter:'blur(10px)', minWidth:'240px', flex:'1' }}>
            <div style={{ fontSize:'10px', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:c.border, marginBottom:'5px' }}>{c.issuer}</div>
            <div style={{ fontSize:'13px', color:'rgba(255,255,255,.84)', fontWeight:600, marginBottom:'4px', lineHeight:1.4 }}>{c.name}</div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,.38)', display:'flex', alignItems:'center', gap:'5px' }}>
              <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'rgba(100,220,100,.75)', display:'inline-block' }}/>
              Issued {c.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
