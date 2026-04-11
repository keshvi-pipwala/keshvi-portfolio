import React, { useState, useEffect } from 'react'
import { PROFILE } from '../data'

const ROLES = ['Software Engineer @ NASA','AI Product Manager @ ASU','Data PM & Engineer','Full-Stack Developer']

function TypeWriter() {
  const [idx,setIdx]=useState(0)
  const [sub,setSub]=useState(0)
  const [del,setDel]=useState(false)
  useEffect(()=>{
    const cur=ROLES[idx]
    const t=setTimeout(()=>{
      if(!del){if(sub<cur.length)setSub(s=>s+1);else setTimeout(()=>setDel(true),1400)}
      else{if(sub>0)setSub(s=>s-1);else{setDel(false);setIdx(i=>(i+1)%ROLES.length)}}
    },del?38:72)
    return()=>clearTimeout(t)
  },[sub,del,idx])
  return <span style={{color:'#a78fff',fontWeight:700}}>{ROLES[idx].slice(0,sub)}<span style={{opacity:.7}}>|</span></span>
}

const STATS=[
  {val:'5,000+',label:'Users on platforms I built',color:'#a78fff'},
  {val:'95%',label:'Data accuracy at NASA',color:'#40caff'},
  {val:'4.0',label:'GPA while working full-time',color:'#ffd166'},
  {val:'+18%',label:'Retention lift I shipped',color:'#ff80c0'},
]

export default function Home(){
  return(
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'52px 40px 60px'}} className="page-pad">

      {/* Status */}
      <div className="anim-left" style={{marginBottom:'28px'}}>
        <span style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(0,200,100,.1)',border:'1px solid rgba(0,200,100,.3)',borderRadius:'9999px',padding:'6px 16px',fontSize:'11px',fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'rgba(0,230,110,.95)'}}>
          <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'rgba(0,230,110,.9)',display:'inline-block',animation:'pulse 2s ease-in-out infinite'}}/>
          Actively Open — SWE · AI PM · Data Engineering
        </span>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'48px',alignItems:'center',marginBottom:'52px'}}>
        <div>
          <h1 className="anim-left" style={{fontSize:'clamp(52px,8vw,96px)',fontWeight:900,letterSpacing:'-.04em',lineHeight:.95,marginBottom:'20px',animationDelay:'0.05s'}}>
            <span style={{display:'block'}}>Keshvi</span>
            <span style={{display:'block',background:'linear-gradient(135deg,#a78fff 0%,#40caff 50%,#ff80c0 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Pipwala</span>
          </h1>

          <div className="anim-left" style={{fontSize:'clamp(16px,2.2vw,22px)',marginBottom:'24px',height:'32px',animationDelay:'0.12s'}}>
            <TypeWriter/>
          </div>

          <p className="anim-left" style={{fontSize:'15px',color:'rgba(255,255,255,.55)',lineHeight:1.85,maxWidth:'520px',marginBottom:'8px',animationDelay:'0.18s'}}>
            I build AI systems that run in production and own the metrics that prove they work. Currently at <strong style={{color:'#fff'}}>NASA</strong> engineering data infrastructure and at <strong style={{color:'#fff'}}>ASU</strong> leading an AI platform serving <strong style={{color:'#fff'}}>5,000+ students</strong>.
          </p>
          <p style={{fontSize:'12px',color:'rgba(255,255,255,.3)',marginBottom:'28px',animation:'fadeLeft 0.6s 0.22s both'}}>MS @ ASU · GPA 4.0 · Tempe, AZ · She/Her · AWS Certified</p>

          <div className="anim-left" style={{display:'flex',gap:'12px',flexWrap:'wrap',animationDelay:'0.26s'}}>
            {[
              {href:PROFILE.linkedin,label:'💼 LinkedIn',primary:true},
              {href:PROFILE.github,label:'⚡ GitHub',primary:false},
              {href:`mailto:${PROFILE.email}`,label:'✉ '+PROFILE.email,primary:false},
            ].map(btn=>(
              <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer" className="btn-hover"
                style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'11px 22px',borderRadius:'14px',textDecoration:'none',fontSize:'13px',fontWeight:700,...(btn.primary?{background:'linear-gradient(135deg,rgba(124,122,207,.5),rgba(64,202,255,.35))',border:'1px solid rgba(124,122,207,.55)',color:'#fff'}:{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',color:'rgba(255,255,255,.8)'})}}>
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="anim-right">
          <div style={{width:'clamp(160px,20vw,240px)',height:'clamp(160px,20vw,240px)',borderRadius:'50%',overflow:'hidden',border:'3px solid rgba(124,122,207,.4)',boxShadow:'0 0 60px rgba(124,122,207,.25),0 0 120px rgba(64,202,255,.1)'}}>
            <img src={PROFILE.photo} alt="Keshvi Pipwala" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'14px',maxWidth:'720px'}}>
        {STATS.map(s=>(
          <div key={s.val} className="anim-stat stat-float card-3d"
            style={{background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:'18px',padding:'18px 16px',textAlign:'center',backdropFilter:'blur(12px)'}}>
            <div style={{fontSize:'clamp(20px,3vw,28px)',fontWeight:900,color:s.color,letterSpacing:'-.02em',marginBottom:'6px'}}>{s.val}</div>
            <div style={{fontSize:'10px',color:'rgba(255,255,255,.42)',lineHeight:1.5,fontWeight:500}}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
