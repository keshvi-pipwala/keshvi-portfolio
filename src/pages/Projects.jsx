import React, { useState, useEffect } from 'react'
import { PROJECTS } from '../data'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis')
    }), { threshold:0.05 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function bold(text) {
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

const GRADS = [
  'linear-gradient(135deg,rgba(124,122,207,.4),rgba(64,202,255,.22))',
  'linear-gradient(135deg,rgba(64,202,255,.32),rgba(255,140,105,.2))',
  'linear-gradient(135deg,rgba(255,140,105,.26),rgba(124,122,207,.32))',
]
const CSS = '.rv{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}.rv.vis{opacity:1;transform:translateY(0);}.d1{transition-delay:.08s}.d2{transition-delay:.18s}.d3{transition-delay:.28s}.pcard{transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;}.pcard:hover{transform:translateY(-7px);border-color:rgba(124,122,207,.42)!important;box-shadow:0 28px 64px rgba(0,0,0,.55);}.lbtn{transition:all .22s;}.lbtn:hover{transform:scale(1.06);}@keyframes livePing{0%,100%{opacity:1}50%{opacity:.35}}'

export default function Projects() {
  const [q, setQ] = useState('')
  useReveal()
  const delays = ['d1','d2','d3']
  const visible = PROJECTS.filter(p =>
    !q || (p.title+p.subtitle+p.stack.join(' ')).toLowerCase().includes(q.toLowerCase())
  )
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'980px', margin:'0 auto' }} className="page-pad">
      <style>{CSS}</style>
      <div className="rv" style={{ marginBottom:'28px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>WORK</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.025em', lineHeight:1.1, marginBottom:'10px' }}>Projects</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.45)', maxWidth:'520px', lineHeight:1.7 }}>Shipped to production. Not demos. Click any project to see live code or try it yourself.</p>
      </div>
      <div className="rv" style={{ marginBottom:'28px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.05)', borderRadius:'14px', padding:'10px 16px', width:'100%', maxWidth:'400px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="2"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by tech, project name..." style={{ background:'none', border:'none', color:'#fff', fontSize:'13px', fontFamily:'Inter,sans-serif', width:'100%', outline:'none' }}/>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'20px' }}>
        {visible.map((proj,i) => (
          <div key={proj.id} className={'rv '+delays[i%3]+' pcard'} style={{ borderRadius:'24px', border:'1px solid rgba(255,255,255,.09)', background:'rgba(255,255,255,.04)', overflow:'hidden', backdropFilter:'blur(14px)', display:'flex', flexDirection:'column' }}>
            <div style={{ height:'155px', background:GRADS[i%3], display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
              <div style={{ fontSize:'58px', opacity:.38 }}>{proj.emoji}</div>
              {proj.live && (
                <div style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(0,200,100,.2)', border:'1px solid rgba(0,200,100,.45)', borderRadius:'9999px', padding:'3px 10px', fontSize:'11px', color:'rgba(0,220,110,.92)', fontWeight:700, display:'flex', alignItems:'center', gap:'5px' }}>
                  <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'rgba(0,220,110,.92)', display:'inline-block', animation:'livePing 2s ease infinite' }}/>
                  LIVE
                </div>
              )}
              <div style={{ position:'absolute', bottom:'12px', left:'14px', display:'flex', gap:'8px' }}>
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" className="lbtn" style={{ display:'inline-flex', alignItems:'center', gap:'5px', background:'rgba(0,0,0,.6)', border:'1px solid rgba(255,255,255,.22)', borderRadius:'9999px', padding:'5px 12px', fontSize:'11.5px', fontWeight:600, color:'#fff', textDecoration:'none', backdropFilter:'blur(8px)' }}>Live Demo</a>}
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="lbtn" style={{ display:'inline-flex', alignItems:'center', gap:'5px', background:'rgba(0,0,0,.6)', border:'1px solid rgba(255,255,255,.22)', borderRadius:'9999px', padding:'5px 12px', fontSize:'11.5px', fontWeight:600, color:'#fff', textDecoration:'none', backdropFilter:'blur(8px)' }}>GitHub</a>}
              </div>
            </div>
            <div style={{ padding:'20px 22px', flex:1, display:'flex', flexDirection:'column' }}>
              <div style={{ fontWeight:700, fontSize:'15.5px', letterSpacing:'-.015em', marginBottom:'2px' }}>{proj.title}</div>
              <div style={{ fontSize:'11.5px', color:'rgba(255,255,255,.42)', marginBottom:'10px' }}>{proj.subtitle}</div>
              <p style={{ fontSize:'13px', color:'rgba(64,202,255,.85)', fontWeight:600, marginBottom:'10px', fontStyle:'italic', lineHeight:1.55 }}>{proj.tagline}</p>
              <div style={{ background:'rgba(0,0,0,.25)', border:'1px solid rgba(255,255,255,.07)', borderRadius:'11px', padding:'10px 13px', fontSize:'12px', color:'rgba(255,255,255,.7)', marginBottom:'12px', lineHeight:1.65 }}>
                <span style={{ color:'rgba(255,255,255,.38)', fontSize:'10.5px', textTransform:'uppercase', letterSpacing:'.08em', fontWeight:700 }}>Impact · </span>
                {bold(proj.impact)}
              </div>
              <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:'7px', flex:1, marginBottom:'14px' }}>
                {proj.bullets.map((b,j) => (
                  <li key={j} style={{ fontSize:'12px', color:'rgba(255,255,255,.7)', lineHeight:1.72, display:'flex', gap:'8px', alignItems:'flex-start' }}>
                    <span style={{ color:'rgba(167,143,255,.8)', marginTop:'4px', flexShrink:0, fontSize:'7px' }}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                {proj.stack.map(s=><span key={s} style={{ display:'inline-flex', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.05)', borderRadius:'9999px', padding:'2px 9px', fontSize:'11px', color:'rgba(255,255,255,.7)' }}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {visible.length===0 && <div style={{ textAlign:'center', padding:'60px', color:'rgba(255,255,255,.35)' }}>No projects match.</div>}
    </div>
  )
}
