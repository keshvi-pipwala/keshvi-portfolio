import React, { useState, useEffect } from 'react'
import { PROFILE } from '../data'

const ROLES = ['Software Engineer @ NASA','AI Product Manager @ ASU','Data Engineer & PM','Full-Stack AI Builder']

function TypeWriter() {
  const [idx,setIdx]=useState(0)
  const [sub,setSub]=useState(0)
  const [del,setDel]=useState(false)
  useEffect(()=>{
    const cur=ROLES[idx]
    const t=setTimeout(()=>{
      if(!del){ if(sub<cur.length)setSub(s=>s+1); else setTimeout(()=>setDel(true),1400) }
      else{ if(sub>0)setSub(s=>s-1); else{setDel(false);setIdx(i=>(i+1)%ROLES.length)} }
    },del?36:70)
    return()=>clearTimeout(t)
  },[sub,del,idx])
  return <span style={{color:'#a78fff',fontWeight:700}}>{ROLES[idx].slice(0,sub)}<span style={{opacity:.7,animation:'blink 1s step-end infinite'}}>|</span></span>
}

const STATS=[
  {val:'5,000+',label:'Users on platforms I built',color:'#a78fff'},
  {val:'95%',   label:'Data accuracy at NASA',      color:'#40caff'},
  {val:'4.0',   label:'GPA while working full-time',color:'#ffd166'},
  {val:'+18%',  label:'Retention lift I shipped',   color:'#ff80c0'},
]

export default function Home(){
  return(
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'52px 48px 60px'}} className="page-pad">

      {/* Status badge */}
      <div className="reveal" style={{marginBottom:'32px'}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(0,200,100,.1)',border:'1px solid rgba(0,200,100,.3)',borderRadius:'9999px',padding:'6px 16px',fontSize:'11px',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'rgba(0,230,110,.95)'}}>
          <span className="pulse-dot" style={{width:'7px',height:'7px',borderRadius:'50%',background:'rgba(0,230,110,.9)',display:'inline-block'}}/>
          Actively Open — SWE · AI PM · Data Engineering
        </span>
      </div>

      {/* Hero grid */}
      <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'52px',alignItems:'center',marginBottom:'56px'}}>
        <div>
          <h1 className="reveal d1" style={{fontSize:'clamp(56px,8vw,100px)',fontWeight:900,letterSpacing:'-.045em',lineHeight:.92,marginBottom:'22px'}}>
            <span style={{display:'block'}}>Keshvi</span>
            <span style={{display:'block',background:'linear-gradient(135deg,#a78fff 0%,#40caff 50%,#ff80c0 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Pipwala</span>
          </h1>

          <div className="reveal d2" style={{fontSize:'clamp(15px,2vw,21px)',marginBottom:'24px',height:'30px'}}>
            <TypeWriter/>
          </div>

          <p className="reveal d3" style={{fontSize:'15px',color:'rgba(255,255,255,.52)',lineHeight:1.85,maxWidth:'500px',marginBottom:'10px'}}>
            I build AI systems that run in production and own the metrics that prove they work. Currently at <strong style={{color:'#fff'}}>NASA</strong> engineering data infrastructure and at <strong style={{color:'#fff'}}>ASU</strong> leading an AI platform serving <strong style={{color:'#fff'}}>5,000+ students</strong>.
          </p>
          <p className="reveal d3" style={{fontSize:'12px',color:'rgba(255,255,255,.28)',marginBottom:'32px'}}>MS @ ASU · GPA 4.0 · Tempe, AZ · She/Her · AWS Certified</p>

          <div className="reveal d4" style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            {[
              {href:PROFILE.linkedin,label:'💼 LinkedIn',primary:true},
              {href:PROFILE.github,  label:'⚡ GitHub',  primary:false},
              {href:'mailto:'+PROFILE.email,label:'✉ '+PROFILE.email,primary:false},
            ].map(btn=>(
              <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer" className={btn.primary?'btn-primary':''}
                style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'11px 22px',borderRadius:'14px',textDecoration:'none',fontSize:'13px',fontWeight:700,transition:'all .2s',...(btn.primary?{background:'linear-gradient(135deg,rgba(124,122,207,.55),rgba(64,202,255,.4))',border:'1px solid rgba(124,122,207,.6)',color:'#fff'}:{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'rgba(255,255,255,.8)'})}}
                onMouseEnter={e=>{if(!btn.primary){e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.borderColor='rgba(124,122,207,.4)'}}}
                onMouseLeave={e=>{if(!btn.primary){e.currentTarget.style.transform='';e.currentTarget.style.borderColor='rgba(255,255,255,.1)'}}}>
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="reveal-right d2">
          <div style={{width:'clamp(150px,18vw,230px)',height:'clamp(150px,18vw,230px)',borderRadius:'50%',overflow:'hidden',border:'3px solid rgba(124,122,207,.45)',boxShadow:'0 0 60px rgba(124,122,207,.28),0 0 120px rgba(64,202,255,.1)'}}>
            <img src={PROFILE.photo} alt="Keshvi Pipwala" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="reveal d5" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'14px',maxWidth:'700px'}}>
        {STATS.map(s=>(
          <div key={s.val} className="tilt-card hover-lift" style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'20px',padding:'20px 16px',textAlign:'center',backdropFilter:'blur(12px)',position:'relative',overflow:'hidden'}}>
            <div className="card-inner-glow" style={{position:'absolute',inset:0,borderRadius:'20px',pointerEvents:'none',transition:'background .2s'}}/>
            <div style={{fontSize:'clamp(20px,2.5vw,28px)',fontWeight:900,color:s.color,letterSpacing:'-.02em',marginBottom:'6px',position:'relative',zIndex:1}}>{s.val}</div>
            <div style={{fontSize:'10px',color:'rgba(255,255,255,.4)',lineHeight:1.5,fontWeight:500,position:'relative',zIndex:1}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
