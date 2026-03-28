import React, { useState, useEffect } from 'react'
import { PROFILE } from '../data'

const WORDS = [
  'Software Engineer @ NASA',
  'AI Product Manager @ ASU',
  'Data Engineer',
  'Distributed Systems Builder',
  'Graduating May 2026',
]

function TypeWriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pause, setPause] = useState(false)

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => { setDeleting(true); setPause(false) }, 2200)
      return () => clearTimeout(t)
    }
    const word = words[idx % words.length]
    const speed = deleting ? 35 : 75
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setPause(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIdx(i => i + 1)
        return
      }
      setText(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, pause, idx, words])

  return (
    <span>
      <span style={{ background:'linear-gradient(135deg,#a78fff,#40caff,#ff80c0)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontWeight:600 }}>
        {text}
      </span>
      <span style={{ color:'rgba(167,143,255,.7)', animation:'blink 1s step-end infinite' }}>|</span>
    </span>
  )
}

export default function Home() {
  const p = PROFILE || {}
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 52px 0 36px', maxWidth:'1000px', margin:'0 auto', position:'relative', color:'#fff' }} className="page-pad">

      <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', border:'1px solid rgba(124,122,207,.38)', background:'rgba(124,122,207,.1)', borderRadius:'9999px', padding:'6px 16px', fontSize:'11.5px', fontWeight:600, color:'rgba(167,143,255,.92)', letterSpacing:'.07em', marginBottom:'26px', width:'fit-content' }}>
        <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#a78fff', display:'inline-block', boxShadow:'0 0 8px #a78fff' }}/>
        ACTIVELY OPEN — SWE · AI PM · DATA ENGINEERING
      </div>

      <h1 style={{ fontSize:'clamp(54px,8.5vw,94px)', fontWeight:900, lineHeight:.86, letterSpacing:'-.045em', marginBottom:'18px' }}>
        Keshvi
        <span style={{ display:'block', WebkitTextStroke:'1.5px rgba(255,255,255,.15)', color:'transparent', backgroundImage:'linear-gradient(135deg,rgba(255,255,255,.65),rgba(124,122,207,.55))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          Pipwala
        </span>
      </h1>

      <div style={{ fontSize:'clamp(18px,2.5vw,26px)', fontWeight:500, minHeight:'42px', marginBottom:'24px' }}>
        <TypeWriter words={WORDS} />
      </div>

      <p style={{ maxWidth:'560px', fontSize:'16px', lineHeight:1.78, color:'rgba(255,255,255,.58)', marginBottom:'10px' }}>
        I build AI systems that run in production and own the metrics that prove they work. Currently at <strong style={{ color:'rgba(255,255,255,.92)' }}>NASA</strong> engineering data infrastructure and at <strong style={{ color:'rgba(255,255,255,.92)' }}>ASU</strong> leading an AI platform serving <strong style={{ color:'rgba(255,255,255,.92)' }}>5,000+ students</strong>.
      </p>
      <p style={{ fontSize:'13px', color:'rgba(255,255,255,.3)', marginBottom:'36px' }}>MS @ ASU · GPA 4.0 · Tempe, AZ · She/Her · AWS Certified</p>

      <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'52px' }}>
        <a href={p.linkedin || '#'} target="_blank" rel="noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'9px', padding:'13px 26px', borderRadius:'14px', background:'linear-gradient(135deg,rgba(124,122,207,.35),rgba(64,202,255,.22))', border:'1px solid rgba(124,122,207,.55)', color:'#fff', textDecoration:'none', fontSize:'14px', fontWeight:700, transition:'transform .18s', letterSpacing:'.01em' }}>💼 LinkedIn</a>
        <a href={p.github || '#'} target="_blank" rel="noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'9px', padding:'13px 26px', borderRadius:'14px', background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.14)', color:'rgba(255,255,255,.9)', textDecoration:'none', fontSize:'14px', fontWeight:700, transition:'transform .18s' }}>⚡ GitHub</a>
        <a href={'mailto:' + (p.email || '')} style={{ display:'inline-flex', alignItems:'center', gap:'9px', padding:'13px 26px', borderRadius:'14px', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.09)', color:'rgba(255,255,255,.55)', textDecoration:'none', fontSize:'14px', fontWeight:600 }}>✉️ {p.email}</a>
      </div>

      <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
        {[
          { n:'5,000+', l:'Users on platforms I built', c:'#a78fff' },
          { n:'95%',    l:'Data accuracy at NASA',      c:'#40caff' },
          { n:'4.0',    l:'GPA while working full-time', c:'#ffd166' },
          { n:'+18%',   l:'Retention lift I shipped',   c:'#ff8c69' },
        ].map(s => (
          <div key={s.n} style={{ borderRadius:'16px', border:'1px solid rgba(255,255,255,.09)', background:'rgba(255,255,255,.04)', padding:'16px 22px', minWidth:'112px' }}>
            <div style={{ fontSize:'clamp(22px,2.8vw,29px)', fontWeight:900, color:s.c, letterSpacing:'-.025em', lineHeight:1 }}>{s.n}</div>
            <div style={{ fontSize:'11px', color:'rgba(255,255,255,.38)', marginTop:'6px', lineHeight:1.35 }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }} className="hide-mobile">
        <div className="glow-pulse" style={{ width:'256px', height:'320px', borderRadius:'999px', overflow:'hidden', border:'1px solid rgba(255,255,255,.12)', background:'linear-gradient(180deg,rgba(124,122,207,.18),rgba(64,202,255,.08))', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'80px' }}>
          {p.photo ? <img src={p.photo} alt="Keshvi Pipwala" style={{ width:'100%', height:'100%', objectFit:'cover' }}/> : '👩‍💻'}
        </div>
      </div>
    </div>
  )
}
