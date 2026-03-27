import React, { useEffect } from 'react'
import { SKILLS } from '../data'

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('vis')
    }), { threshold:0.06 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const CAT = {
  'Languages & Core':    { bg:'rgba(124,122,207,.12)', bd:'rgba(124,122,207,.35)', lb:'rgba(167,143,255,.9)' },
  'AI / ML & NLP':       { bg:'rgba(64,202,255,.1)',   bd:'rgba(64,202,255,.3)',   lb:'rgba(64,202,255,.9)'  },
  'Data Engineering':    { bg:'rgba(255,200,80,.08)',  bd:'rgba(255,200,80,.25)',  lb:'rgba(255,200,80,.85)' },
  'Distributed Systems': { bg:'rgba(255,140,105,.1)',  bd:'rgba(255,140,105,.3)',  lb:'rgba(255,140,105,.9)' },
  'Cloud & Backend':     { bg:'rgba(100,200,100,.08)', bd:'rgba(100,200,100,.25)', lb:'rgba(100,200,100,.85)'},
  'Product & Management':{ bg:'rgba(200,100,200,.1)',  bd:'rgba(200,100,200,.3)',  lb:'rgba(200,100,200,.9)' },
}
const CSS = '.rv{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease;}.rv.vis{opacity:1;transform:translateY(0);}.d1{transition-delay:.05s}.d2{transition-delay:.15s}.d3{transition-delay:.25s}.d4{transition-delay:.35s}.d5{transition-delay:.45s}.d6{transition-delay:.55s}.stag{transition:transform .18s;cursor:default;}.stag:hover{transform:scale(1.07);}.ecard{transition:border-color .3s,transform .3s;}.ecard:hover{border-color:rgba(124,122,207,.35)!important;transform:translateY(-2px);}'
const DELAYS = ['d1','d2','d3','d4','d5','d6']
const STATS = [
  { num:'5,000+', label:'Users on live platforms',    color:'rgba(167,143,255,.95)' },
  { num:'100K+',  label:'Records, zero failures',     color:'rgba(64,202,255,.95)'  },
  { num:'95%',    label:'Anomaly detection accuracy', color:'rgba(255,200,80,.9)'   },
  { num:'4.0',    label:'GPA at ASU Masters',         color:'rgba(100,200,100,.9)'  },
  { num:'+18%',   label:'Retention lift at ASU',      color:'rgba(255,140,105,.9)'  },
  { num:'2+',     label:'Autonomous AI systems live', color:'rgba(200,100,200,.9)'  },
]

export default function About() {
  useReveal()
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'1000px', margin:'0 auto' }} className="page-pad">
      <style>{CSS}</style>
      <div className="rv" style={{ marginBottom:'36px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>ABOUT</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.02em', lineHeight:1.1, marginBottom:'10px' }}>Engineered for Impact.<br/>Built to Ship.</h1>
        <p style={{ fontSize:'15px', color:'rgba(255,255,255,.5)', maxWidth:'540px', lineHeight:1.75 }}>The rare profile that closes the gap between data infrastructure and product outcomes — with production proof.</p>
      </div>

      <div className="rv d1" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'16px', marginBottom:'24px' }}>
        <div className="ecard" style={{ borderRadius:'20px', border:'1px solid rgba(64,202,255,.25)', background:'linear-gradient(135deg,rgba(64,202,255,.06),rgba(64,202,255,.02))', padding:'24px', backdropFilter:'blur(14px)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'10px', background:'rgba(64,202,255,.15)', border:'1px solid rgba(64,202,255,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>⚙️</div>
            <div>
              <div style={{ fontSize:'13px', fontWeight:700, color:'rgba(64,202,255,.9)', letterSpacing:'.05em', textTransform:'uppercase' }}>Software Engineer</div>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,.4)' }}>NASA · Production Systems</div>
            </div>
          </div>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,.75)', lineHeight:1.8, marginBottom:'14px' }}>
            I engineer systems that run in production — not demos. At NASA I built ETL pipelines processing <strong style={{ color:'#fff' }}>100,000+ mission-critical records</strong> with 95% anomaly detection accuracy and zero data integrity failures.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {['Python','FastAPI','PostgreSQL','Celery','Redis','Docker','CI/CD','ETL'].map(s=><span key={s} style={{ fontSize:'11px', border:'1px solid rgba(64,202,255,.2)', background:'rgba(64,202,255,.07)', borderRadius:'6px', padding:'3px 9px', color:'rgba(64,202,255,.8)' }}>{s}</span>)}
          </div>
        </div>
        <div className="ecard" style={{ borderRadius:'20px', border:'1px solid rgba(124,122,207,.25)', background:'linear-gradient(135deg,rgba(124,122,207,.06),rgba(124,122,207,.02))', padding:'24px', backdropFilter:'blur(14px)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'10px', background:'rgba(124,122,207,.15)', border:'1px solid rgba(124,122,207,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }}>📈</div>
            <div>
              <div style={{ fontSize:'13px', fontWeight:700, color:'rgba(167,143,255,.9)', letterSpacing:'.05em', textTransform:'uppercase' }}>AI Product Manager</div>
              <div style={{ fontSize:'11px', color:'rgba(255,255,255,.4)' }}>ASU · 5,000+ Users</div>
            </div>
          </div>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,.75)', lineHeight:1.8, marginBottom:'14px' }}>
            I own product roadmaps end-to-end — OKRs, A/B tests, and shipping features that move metrics. At ASU I led a platform from 0 to 1 that increased student retention by <strong style={{ color:'#fff' }}>18%</strong> and engagement by <strong style={{ color:'#fff' }}>22%</strong>.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {['OKRs','A/B Testing','Roadmapping','Agile','Stakeholders','Data Analytics'].map(s=><span key={s} style={{ fontSize:'11px', border:'1px solid rgba(124,122,207,.2)', background:'rgba(124,122,207,.07)', borderRadius:'6px', padding:'3px 9px', color:'rgba(167,143,255,.8)' }}>{s}</span>)}
          </div>
        </div>
      </div>

      <div className="rv d2" style={{ borderRadius:'20px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.03)', padding:'24px 26px', marginBottom:'24px' }}>
        <div style={{ fontSize:'11px', fontWeight:700, color:'rgba(255,200,80,.85)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'14px' }}>What most candidates cannot do</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'16px' }}>
          {[
            { icon:'🎯', title:'Engineer who owns metrics', body:'I shipped GitSense — a 7-step autonomous agent that detects breaking changes, scores technical debt, and posts structured PR summaries. No human in the loop. That is agentic AI architecture, not a chatbot wrapper.' },
            { icon:'📐', title:'PM who reads the code', body:'When I raised retention 18% at ASU, I debugged the ML model, rewrote the data pipeline, and rewrote the product spec in the same sprint. Most PMs file a ticket. I fix it.' },
            { icon:'⚡', title:'Data engineer at scale', body:'100K+ records at NASA with zero integrity failures. I designed the validation layer, wrote the tests, and wired it to live dashboards. Not just data movement — data reliability.' },
          ].map(item=>(
            <div key={item.title} style={{ display:'flex', gap:'12px', alignItems:'flex-start' }}>
              <span style={{ fontSize:'20px', flexShrink:0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize:'13px', fontWeight:700, color:'rgba(255,255,255,.9)', marginBottom:'4px' }}>{item.title}</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,.55)', lineHeight:1.75 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rv d3" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))', gap:'12px', marginBottom:'36px' }}>
        {STATS.map(s=>(
          <div key={s.label} style={{ borderRadius:'14px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.04)', padding:'16px 14px', textAlign:'center' }}>
            <div style={{ fontSize:'clamp(20px,2.5vw,26px)', fontWeight:900, color:s.color, lineHeight:1, letterSpacing:'-.02em' }}>{s.num}</div>
            <div style={{ fontSize:'10.5px', color:'rgba(255,255,255,.45)', marginTop:'5px', lineHeight:1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rv d4" style={{ marginBottom:'20px' }}>
        <h2 style={{ fontSize:'20px', fontWeight:700, marginBottom:'3px' }}>Technical Arsenal</h2>
        <p style={{ fontSize:'13px', color:'rgba(255,255,255,.4)' }}>Optimized for SWE + PM roles in the 2026-2027 market.</p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'14px' }}>
        {Object.entries(SKILLS).map(([cat,skills],i)=>{
          const c=CAT[cat]||{bg:'rgba(255,255,255,.05)',bd:'rgba(255,255,255,.12)',lb:'rgba(255,255,255,.7)'}
          return (
            <div key={cat} className={'rv '+DELAYS[i]} style={{ borderRadius:'16px', border:'1px solid '+c.bd, background:c.bg, padding:'16px 18px', backdropFilter:'blur(8px)' }}>
              <div style={{ fontSize:'10.5px', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:c.lb, marginBottom:'10px' }}>{cat}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {skills.map(s=><span key={s} className="stag" style={{ display:'inline-flex', border:'1px solid '+c.bd, background:'rgba(0,0,0,.2)', borderRadius:'7px', padding:'4px 10px', fontSize:'11px', color:'rgba(255,255,255,.82)' }}>{s}</span>)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
