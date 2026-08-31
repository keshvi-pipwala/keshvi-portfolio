import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, BarChart3, Bot, Quote, Rocket, ExternalLink, Github, FileText, Linkedin } from 'lucide-react'
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

// Every number here is tied to something on this site a recruiter can open and verify.
const PROOF_STATS = [
  { value:'0→5,000+', label:'Active users on the ASU AI analytics platform I took from zero to one.', bg:'rgba(124,122,207,.08)', bd:'rgba(124,122,207,.35)' },
  { value:'+18%',     label:'Student-retention lift from ML early-warning signals I drove into the product.', bg:'rgba(80,200,120,.07)', bd:'rgba(80,200,120,.3)' },
  { value:'+22%',     label:'Engagement lift from structured A/B tests across 4 core features.', bg:'rgba(64,202,255,.08)', bd:'rgba(64,202,255,.3)' },
  { value:'95%',      label:'Anomaly-detection accuracy on NASA data pipelines — zero integrity failures since launch.', bg:'rgba(255,200,80,.07)', bd:'rgba(255,200,80,.3)' },
  { value:'80%+',     label:'Test coverage I raised from near-zero at NASA with pytest + CI/CD.', bg:'rgba(255,140,105,.08)', bd:'rgba(255,140,105,.3)' },
  { value:'3',        label:'AI products taken from spec to ship — one live, all on GitHub.', bg:'rgba(200,100,220,.08)', bd:'rgba(200,100,220,.3)' },
]

const PROOF_LINKS = [
  { label:'Live product — InsightIQ', href:'https://insightiq-frontend-jn6h.onrender.com', Icon:ExternalLink, ext:true },
  { label:'Read the full case study', href:'/case-study', Icon:FileText, ext:false },
  { label:'GitHub — every repo', href:'https://github.com/keshvi-pipwala', Icon:Github, ext:true },
  { label:'LinkedIn', href:'https://www.linkedin.com/in/keshvi-pipwala-5a7bb0247/', Icon:Linkedin, ext:true },
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

      {/* ── PROOF ──────────────────────────────────────────────────────── */}
      <div style={{ marginBottom:'40px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'6px' }}>
          <Rocket size={18} color="#a78fff" strokeWidth={2} />
          <h2 style={{ fontSize:'20px', fontWeight:800, letterSpacing:'-.01em' }}>Proof, not promises</h2>
        </div>
        <p style={{ fontSize:'13px', color:'rgba(255,255,255,.45)', lineHeight:1.7, maxWidth:'620px', marginBottom:'20px' }}>
          A shorter track record only matters if the work isn't real. Mine is. Every number below is tied to something on this site you can open and check for yourself.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(158px,1fr))', gap:'12px', marginBottom:'22px' }}>
          {PROOF_STATS.map(s => (
            <div key={s.value} style={{ borderRadius:'16px', border:'1px solid '+s.bd, background:s.bg, padding:'18px 18px' }}>
              <div style={{ fontSize:'26px', fontWeight:900, letterSpacing:'-.02em', color:'#fff', lineHeight:1 }}>{s.value}</div>
              <div style={{ fontSize:'11.5px', color:'rgba(255,255,255,.6)', marginTop:'9px', lineHeight:1.55 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ borderRadius:'18px', border:'1px solid rgba(64,202,255,.18)', background:'rgba(64,202,255,.04)', padding:'20px 22px' }}>
          <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(64,202,255,.85)', marginBottom:'14px' }}>Verify it yourself</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px' }}>
            {PROOF_LINKS.map(l => {
              const inner = (<><l.Icon size={13} /> {l.label}</>)
              const style = { display:'inline-flex', alignItems:'center', gap:'7px', padding:'8px 14px', borderRadius:'9999px', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.14)', color:'rgba(255,255,255,.9)', textDecoration:'none', fontSize:'12.5px', fontWeight:700 }
              return l.ext ? (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={style}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.1)'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.05)'}}>{inner}</a>
              ) : (
                <Link key={l.label} to={l.href} style={style}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.1)'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.05)'}}>{inner}</Link>
              )
            })}
          </div>
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
