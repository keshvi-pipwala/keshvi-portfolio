import React, { useEffect, useState } from 'react'
import { PROFILE } from '../data'

const ROLES = ['Software Engineer', 'AI Product Manager', 'Data PM', 'ML Engineer', 'Platform PM']
const STATS = [
  { value:'5,000+', label:'Users on platforms I built', color:'#a78fff' },
  { value:'95%', label:'Data accuracy at NASA', color:'#40caff' },
  { value:'4.0', label:'GPA while working full-time', color:'#ffd166' },
  { value:'+18%', label:'Retention lift I shipped', color:'#ff80c0' },
]

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  useReveal()

  useEffect(() => {
    const target = ROLES[roleIdx]
    let i = displayed.length
    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 68)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1600)
        return () => clearTimeout(t)
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 34)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(r => (r + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 52px', maxWidth:'1100px', margin:'0 auto' }} className="page-pad">

      <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'48px', alignItems:'center', marginBottom:'52px' }}>

        {/* LEFT — text */}
        <div>
          <div className="reveal" style={{ fontSize:'11px', letterSpacing:'.35em', textTransform:'uppercase', color:'rgba(167,143,255,.7)', marginBottom:'18px', fontWeight:600 }}>
            ACTIVELY OPEN — SWE · AI PM · DATA ENGINEERING
          </div>

          <h1 className="reveal reveal-delay-1" style={{ fontSize:'clamp(52px,7vw,88px)', fontWeight:900, letterSpacing:'-.04em', lineHeight:.95, marginBottom:'20px' }}>
            <span style={{ display:'block' }}>Keshvi</span>
            <span style={{ display:'block', background:'linear-gradient(135deg,#a78fff 0%,#40caff 60%,#ff80c0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Pipwala</span>
          </h1>

          <div className="reveal reveal-delay-2" style={{ fontSize:'clamp(18px,2.5vw,26px)', fontWeight:700, color:'rgba(124,122,207,.95)', marginBottom:'22px', minHeight:'36px', letterSpacing:'-.01em' }}>
            {displayed}<span style={{ animation:'blink 1s step-end infinite', color:'rgba(124,122,207,.9)' }}>|</span>
          </div>

          <p className="reveal reveal-delay-3" style={{ fontSize:'15px', color:'rgba(255,255,255,.58)', lineHeight:1.85, marginBottom:'32px', maxWidth:'520px' }}>
            I build AI systems that run in production and own the metrics that prove they work. Currently at <strong style={{ color:'#fff' }}>NASA</strong> engineering data infrastructure and at <strong style={{ color:'#fff' }}>ASU</strong> leading an AI platform serving <strong style={{ color:'#fff' }}>5,000+ students</strong>.
          </p>
          <div style={{ fontSize:'12px', color:'rgba(255,255,255,.32)', marginBottom:'30px', letterSpacing:'.02em' }}>
            MS @ ASU · GPA 4.0 · Tempe, AZ · She/Her · AWS Certified
          </div>

          <div className="reveal reveal-delay-4" style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
            {[
              { label:'💼 LinkedIn', href: PROFILE.linkedin },
              { label:'⚡ GitHub', href: PROFILE.github },
              { label:'✉️ ' + PROFILE.email, href:'mailto:' + PROFILE.email },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer"
                style={{ padding:'11px 22px', borderRadius:'13px', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.12)', color:'rgba(255,255,255,.88)', textDecoration:'none', fontSize:'13px', fontWeight:600, transition:'all .22s cubic-bezier(.34,1.56,.64,1)', display:'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.background='rgba(124,122,207,.2)'; e.currentTarget.style.borderColor='rgba(124,122,207,.5)'; e.currentTarget.style.transform='translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,.12)'; e.currentTarget.style.transform='translateY(0)'; }}
              >{btn.label}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — photo */}
        <div className="reveal reveal-right reveal-delay-2" style={{ position:'relative' }}>
          <div style={{ width:'clamp(180px,18vw,260px)', height:'clamp(180px,18vw,260px)', borderRadius:'50%', overflow:'hidden', border:'3px solid rgba(124,122,207,.5)', boxShadow:'0 0 60px rgba(124,122,207,.25), 0 30px 80px rgba(0,0,0,.7)' }} className="glow-pulse">
            <img src="/keshvi.jpeg" alt="Keshvi Pipwala" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }} />
          </div>
          <div style={{ position:'absolute', bottom:'-10px', right:'-10px', background:'linear-gradient(135deg,rgba(124,122,207,.9),rgba(64,202,255,.7))', border:'1px solid rgba(124,122,207,.8)', borderRadius:'12px', padding:'8px 14px', fontSize:'11px', fontWeight:700, color:'#fff', backdropFilter:'blur(10px)' }}>
            🟢 Open to work
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px' }}>
        {STATS.map((s, i) => (
          <div key={i} className={`reveal stat-float card-3d reveal-delay-${i+1}`}
            style={{ borderRadius:'18px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.04)', padding:'20px', backdropFilter:'blur(12px)', textAlign:'center', cursor:'default' }}>
            <div style={{ fontSize:'clamp(22px,2.8vw,32px)', fontWeight:900, color:s.color, letterSpacing:'-.03em', marginBottom:'6px', fontVariantNumeric:'tabular-nums' }}>{s.value}</div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,.42)', lineHeight:1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
