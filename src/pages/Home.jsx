import React, { useState, useEffect } from 'react'
import { PROFILE } from '../data'

function TypeWriter({ words }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[idx]
    const t = setTimeout(() => {
      if (!del && text === word) { setTimeout(() => setDel(true), 2000) }
      else if (del && text === '') { setDel(false); setIdx(i => (i+1) % words.length) }
      else { setText(prev => del ? prev.slice(0,-1) : word.slice(0, prev.length+1)) }
    }, del ? 40 : 90)
    return () => clearTimeout(t)
  }, [text, del, idx, words])
  return <span style={{background:'linear-gradient(135deg,#a78fff,#40caff)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{text}<span style={{WebkitTextFillColor:'rgba(167,143,255,.6)'}}>|</span></span>
}

export default function Home() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 52px 0 36px',maxWidth:'1000px',margin:'0 auto',position:'relative'}} className="page-pad">
      <div style={{position:'relative',zIndex:1}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1px solid rgba(124,122,207,.38)',background:'rgba(124,122,207,.1)',borderRadius:'9999px',padding:'6px 16px',fontSize:'11.5px',fontWeight:600,color:'rgba(167,143,255,.92)',letterSpacing:'.07em',marginBottom:'26px'}}>
          <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'#a78fff',display:'inline-block'}}/>
          ACTIVELY OPEN — SWE · AI PM · DATA ENGINEERING
        </div>
        <h1 style={{fontSize:'clamp(54px,8.5vw,94px)',fontWeight:900,lineHeight:.86,letterSpacing:'-.045em',marginBottom:'22px'}}>
          Keshvi
          <span style={{display:'block',WebkitTextStroke:'1.5px rgba(255,255,255,.16)',color:'transparent',backgroundImage:'linear-gradient(135deg,rgba(255,255,255,.62),rgba(124,122,207,.52))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Pipwala</span>
        </h1>
        <div style={{fontSize:'clamp(18px,2.5vw,25px)',fontWeight:500,minHeight:'38px',marginBottom:'24px'}}>
          <TypeWriter words={['Software Engineer @ NASA','AI Product Manager @ ASU','Autonomous Agent Builder','The hire that does both.']}/>
        </div>
        <p style={{maxWidth:'560px',fontSize:'16px',lineHeight:1.78,color:'rgba(255,255,255,.62)',marginBottom:'10px'}}>
          I build AI systems that run in production and own the metrics that prove they work. At <strong style={{color:'rgba(255,255,255,.92)'}}>NASA</strong> engineering mission-critical data infrastructure and at <strong style={{color:'rgba(255,255,255,.92)'}}>ASU</strong> leading an AI platform serving <strong style={{color:'rgba(255,255,255,.92)'}}>5,000+ users</strong>.
        </p>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,.34)',marginBottom:'32px'}}>MS @ ASU · GPA 4.0 · Tempe, AZ · She/Her · AWS Certified</p>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'48px'}}>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'9px',padding:'13px 26px',borderRadius:'14px',background:'linear-gradient(135deg,rgba(124,122,207,.32),rgba(64,202,255,.2))',border:'1px solid rgba(124,122,207,.52)',color:'#fff',textDecoration:'none',fontSize:'14px',fontWeight:700}}>💼 LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'9px',padding:'13px 26px',borderRadius:'14px',background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.9)',textDecoration:'none',fontSize:'14px',fontWeight:700}}>⚡ GitHub</a>
          <a href={'mailto:'+PROFILE.email} style={{display:'inline-flex',alignItems:'center',gap:'9px',padding:'13px 26px',borderRadius:'14px',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',color:'rgba(255,255,255,.6)',textDecoration:'none',fontSize:'14px',fontWeight:600}}>✉️ {PROFILE.email}</a>
        </div>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
          {[{num:'5,000+',label:'Users on platforms I built',color:'#a78fff'},{num:'95%',label:'Data accuracy, zero failures',color:'#40caff'},{num:'4.0',label:'GPA while working full-time',color:'#ffd166'},{num:'+18%',label:'Retention lift I shipped',color:'#ff8c69'}].map(p=>(
            <div key={p.num} style={{borderRadius:'16px',border:'1px solid rgba(255,255,255,.09)',background:'rgba(255,255,255,.04)',padding:'16px 22px',minWidth:'112px'}}>
              <div style={{fontSize:'clamp(22px,2.8vw,29px)',fontWeight:900,color:p.color,letterSpacing:'-.025em',lineHeight:1}}>{p.num}</div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,.4)',marginTop:'6px',lineHeight:1.35}}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)'}} className="hide-mobile">
        <div className="glow-pulse" style={{width:'248px',height:'310px',borderRadius:'999px',overflow:'hidden',border:'1px solid rgba(255,255,255,.12)',background:'linear-gradient(180deg,rgba(124,122,207,.15),rgba(64,202,255,.07))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'80px'}}>
          {PROFILE.photo ? <img src={PROFILE.photo} alt="Keshvi Pipwala" style={{width:'100%',height:'100%',objectFit:'cover'}}/> : '👩‍💻'}
        </div>
      </div>
    </div>
  )
}
