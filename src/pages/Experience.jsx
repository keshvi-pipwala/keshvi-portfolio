import React, { useEffect } from 'react'
import { EXPERIENCE } from '../data'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis')
    }), { threshold:0.06 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function bold(text) {
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

const CSS = '.rv{opacity:0;transform:translateY(30px);transition:opacity .6s ease,transform .6s ease;}.rv.vis{opacity:1;transform:translateY(0);}.d1{transition-delay:.08s}.d2{transition-delay:.18s}.d3{transition-delay:.28s}.ecard{transition:border-color .28s,transform .28s;}.ecard:hover{border-color:rgba(124,122,207,.38)!important;transform:translateX(5px);}'
const TAG = { display:'inline-flex', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.06)', borderRadius:'9999px', padding:'2px 10px', fontSize:'11px', color:'rgba(255,255,255,.7)' }

export default function Experience() {
  useReveal()
  const delays = ['d1','d2','d3']
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'940px', margin:'0 auto' }} className="page-pad">
      <style>{CSS}</style>
      <div className="rv" style={{ marginBottom:'32px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>CAREER</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.025em', lineHeight:1.1, marginBottom:'10px' }}>Professional Experience</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.45)', maxWidth:'480px', lineHeight:1.7 }}>Every role has shipped to real users. Every metric is real.</p>
      </div>

      <div style={{ position:'relative', paddingLeft:'30px' }}>
        <div style={{ position:'absolute', left:'6px', top:0, bottom:0, width:'1.5px', background:'linear-gradient(180deg,rgba(167,143,255,.8),rgba(64,202,255,.4),rgba(255,140,105,.15))' }}/>

        {EXPERIENCE.map((exp,i) => (
          <div key={i} className={'rv '+delays[i]} style={{ marginBottom:'22px', position:'relative' }}>
            <div style={{ position:'absolute', left:'-24px', top:'28px', width:'13px', height:'13px', borderRadius:'50%', background:'linear-gradient(135deg,#a78fff,#40caff)', boxShadow:'0 0 14px rgba(124,122,207,.65)', border:'2px solid rgba(5,5,10,.9)', zIndex:2 }}/>

            <div className="ecard" style={{ borderRadius:'22px', border:'1px solid rgba(255,255,255,.09)', background:'rgba(255,255,255,.04)', padding:'24px 26px', backdropFilter:'blur(14px)' }}>
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'16px', flexWrap:'wrap', marginBottom:'12px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
                  <div style={{ width:'46px', height:'46px', borderRadius:'14px', border:'1px solid rgba(255,255,255,.1)', background:'linear-gradient(135deg,rgba(124,122,207,.22),rgba(64,202,255,.1))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px', flexShrink:0 }}>{exp.icon}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:'16px', letterSpacing:'-.015em' }}>{exp.role}</div>
                    <div style={{ fontSize:'13px', color:'rgba(255,255,255,.5)', marginTop:'2px' }}>{exp.company} · {exp.location}</div>
                  </div>
                </div>
                <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', flexShrink:0, alignItems:'center' }}>
                  <span style={{ fontSize:'11px', background:'rgba(124,122,207,.15)', border:'1px solid rgba(124,122,207,.35)', borderRadius:'9999px', padding:'3px 10px', color:'rgba(167,143,255,.9)', fontWeight:600 }}>{exp.type}</span>
                  <span style={{ fontSize:'12px', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.06)', borderRadius:'9999px', padding:'3px 12px', color:'rgba(255,255,255,.55)' }}>{exp.time}</span>
                </div>
              </div>

              <p style={{ fontSize:'13.5px', color:'rgba(255,255,255,.6)', lineHeight:1.75, marginBottom:'14px', fontStyle:'italic', borderLeft:'2px solid rgba(124,122,207,.45)', paddingLeft:'13px' }}>{exp.summary}</p>

              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'8px', marginBottom:'14px' }}>
                {exp.bullets.map((b,j) => (
                  <li key={j} style={{ fontSize:'13px', color:'rgba(255,255,255,.78)', lineHeight:1.75, display:'flex', gap:'10px', alignItems:'flex-start' }}>
                    <span style={{ color:'rgba(167,143,255,.8)', marginTop:'5px', flexShrink:0, fontSize:'7px' }}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {exp.stack.map(s => <span key={s} style={TAG}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
