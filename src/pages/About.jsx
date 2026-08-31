import React from 'react'
import { Wrench, BarChart3, Bot, Quote } from 'lucide-react'
import { SKILLS, TESTIMONIALS } from '../data'

const CAT_COLORS = {
  'Languages & Core':     { bg:'rgba(124,122,207,.1)',  bd:'rgba(124,122,207,.35)', lb:'rgba(167,143,255,.9)'  },
  'AI / ML & NLP':        { bg:'rgba(64,202,255,.08)',  bd:'rgba(64,202,255,.3)',   lb:'rgba(64,202,255,.9)'   },
  'Data Engineering':     { bg:'rgba(255,200,80,.07)',  bd:'rgba(255,200,80,.28)',  lb:'rgba(255,200,80,.85)'  },
  'Distributed Systems':  { bg:'rgba(255,140,105,.08)', bd:'rgba(255,140,105,.3)',  lb:'rgba(255,140,105,.9)'  },
  'Cloud & Backend':      { bg:'rgba(80,200,120,.07)',  bd:'rgba(80,200,120,.28)',  lb:'rgba(80,200,120,.85)'  },
  'Product & Management': { bg:'rgba(200,100,220,.08)', bd:'rgba(200,100,220,.3)',  lb:'rgba(200,100,220,.9)'  },
}

const HOW_I_WORK = [
  { Icon: Wrench,    title:'Engineering with full context', body:"At NASA's L'SPACE Program I wrote the pipelines, the tests, and the dashboards. Owning the full stack means catching issues earlier and building more reliable systems." },
  { Icon: BarChart3, title:'Product grounded in data',      body:'At ASU I combined product thinking with hands-on ML work — running A/B tests, iterating on the model, and tracking retention through each change.' },
  { Icon: Bot,       title:'AI systems end-to-end',         body:'GitSense is a PR-review agent I took from spec to ship — a 7-step webhook-to-alert pipeline. I set the direction and evals; the implementation was AI-assisted.' },
]

export default function About() {
  return (
    <div style={{ minHeight:'100vh', padding:'44px 28px 60px', maxWidth:'1000px', margin:'0 auto', color:'#fff' }} className="page-pad">

      <div style={{ marginBottom:'36px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>ABOUT</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, marginBottom:'12px', letterSpacing:'-.02em' }}>Building things that work in production.</h1>
        <p style={{ fontSize:'15px', color:'rgba(255,255,255,.48)', maxWidth:'580px', lineHeight:1.75 }}>
          I work across data engineering and product. Most recently a Software Engineer in NASA's L'SPACE Program and an AI Product Manager at ASU — both wrapped up in 2026. I focus on shipping measurable outcomes, not just shipping features, and I'm now looking for my next team.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'16px', marginBottom:'32px' }}>
        <div style={{ borderRadius:'20px', border:'1px solid rgba(64,202,255,.2)', background:'rgba(64,202,255,.04)', padding:'24px' }}>
          <div style={{ fontSize:'12px', fontWeight:700, color:'rgba(64,202,255,.9)', textTransform:'uppercase', marginBottom:'8px', letterSpacing:'.06em' }}>Software Engineer @ NASA L'SPACE</div>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,.72)', lineHeight:1.8 }}>Building ETL pipelines for NASA research data — designed validation layers that hit <strong style={{ color:'#fff' }}>95% anomaly detection accuracy</strong> with zero integrity failures across all pipeline runs since launch.</p>
        </div>
        <div style={{ borderRadius:'20px', border:'1px solid rgba(124,122,207,.2)', background:'rgba(124,122,207,.04)', padding:'24px' }}>
          <div style={{ fontSize:'12px', fontWeight:700, color:'rgba(167,143,255,.9)', textTransform:'uppercase', marginBottom:'8px', letterSpacing:'.06em' }}>AI Product Manager @ ASU</div>
          <p style={{ fontSize:'13px', color:'rgba(255,255,255,.72)', lineHeight:1.8 }}>Led an AI student analytics platform from zero to <strong style={{ color:'#fff' }}>5,000+ active users</strong>. Worked directly on the ML pipeline — an <strong style={{ color:'#fff' }}>18% retention lift</strong> followed from that collaboration.</p>
        </div>
      </div>

      <div style={{ borderRadius:'20px', border:'1px solid rgba(255,255,255,.07)', background:'rgba(255,255,255,.03)', padding:'24px', marginBottom:'40px' }}>
        <div style={{ fontSize:'11px', fontWeight:700, color:'rgba(255,200,80,.8)', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'16px' }}>How I work</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'18px' }}>
          {HOW_I_WORK.map(item => (
            <div key={item.title} style={{ display:'flex', gap:'14px', alignItems:'flex-start' }}>
              <span style={{ flexShrink:0, width:'36px', height:'36px', borderRadius:'10px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.09)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <item.Icon size={17} color="#a78fff" strokeWidth={1.8} />
              </span>
              <div>
                <div style={{ fontSize:'13px', fontWeight:700, marginBottom:'5px' }}>{item.title}</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,.5)', lineHeight:1.75 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(TESTIMONIALS || []).length > 0 && (
        <div style={{ marginBottom:'40px' }}>
          <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'20px', letterSpacing:'-.01em' }}>What people I've worked with say</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'16px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ borderRadius:'18px', border:'1px solid rgba(124,122,207,.2)', background:'rgba(124,122,207,.05)', padding:'22px 24px' }}>
                <Quote size={18} color="rgba(167,143,255,.7)" style={{ marginBottom:'10px' }} />
                <p style={{ fontSize:'14px', color:'rgba(255,255,255,.82)', lineHeight:1.75, marginBottom:'14px', fontStyle:'italic' }}>{t.quote}</p>
                <div style={{ fontSize:'13px', fontWeight:700, color:'#fff' }}>{t.name}</div>
                <div style={{ fontSize:'11.5px', color:'rgba(167,143,255,.85)', marginTop:'2px' }}>{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 style={{ fontSize:'20px', fontWeight:800, marginBottom:'20px', letterSpacing:'-.01em' }}>Technical Skills</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:'14px' }}>
        {Object.entries(SKILLS || {}).map(([cat, skills]) => {
          const c = CAT_COLORS[cat] || { bg:'rgba(255,255,255,.05)', bd:'rgba(255,255,255,.12)', lb:'rgba(255,255,255,.7)' }
          return (
            <div key={cat} style={{ borderRadius:'16px', border:'1px solid '+c.bd, background:c.bg, padding:'18px 20px' }}>
              <div style={{ fontSize:'10.5px', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:c.lb, marginBottom:'12px' }}>{cat}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                {(skills || []).map(s => (
                  <span key={s} style={{ border:'1px solid '+c.bd, background:'rgba(0,0,0,.2)', borderRadius:'7px', padding:'4px 10px', fontSize:'11.5px', color:'rgba(255,255,255,.82)' }}>{s}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
