import React, { useState } from 'react'
import { PROJECTS } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i % 2 === 1 ? <strong key={i} style={{color:'#fff',fontWeight:700}}>{p}</strong> : p
  )
}

export default function Projects() {
  const [q, setQ] = useState('')
  const items = (PROJECTS || []).filter(p =>
    !q || (p.title+' '+p.subtitle+' '+(p.stack||[]).join(' ')).toLowerCase().includes(q.toLowerCase())
  )
  return (
    <div style={{minHeight:'100vh',padding:'44px 28px 60px',maxWidth:'980px',margin:'0 auto'}} className="page-pad">
      <div style={{marginBottom:'28px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'8px',fontWeight:600}}>WORK</p>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:800,marginBottom:'10px'}}>Projects</h1>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,.45)',lineHeight:1.7}}>Shipped to production. Not demos.</p>
      </div>
      <div style={{marginBottom:'24px'}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by tech or name..." style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'12px',padding:'10px 16px',color:'#fff',fontSize:'13px',fontFamily:'inherit',outline:'none',width:'100%',maxWidth:'380px'}}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'20px'}}>
        {items.map((proj,i) => (
          <div key={proj.id||i} style={{borderRadius:'20px',border:'1px solid rgba(255,255,255,.09)',background:'rgba(255,255,255,.04)',overflow:'hidden',backdropFilter:'blur(14px)',display:'flex',flexDirection:'column'}}>
            <div style={{height:'120px',background:['linear-gradient(135deg,rgba(124,122,207,.4),rgba(64,202,255,.22))','linear-gradient(135deg,rgba(64,202,255,.32),rgba(255,140,105,.2))','linear-gradient(135deg,rgba(255,140,105,.26),rgba(124,122,207,.32))'][i%3],display:'flex',alignItems:'center',justifyContent:'center',fontSize:'50px',opacity:.5,position:'relative'}}>
              {proj.emoji}
              {proj.live && <span style={{position:'absolute',top:'10px',right:'10px',background:'rgba(0,200,100,.2)',border:'1px solid rgba(0,200,100,.45)',borderRadius:'9999px',padding:'2px 9px',fontSize:'11px',color:'rgba(0,220,110,.92)',fontWeight:700}}>LIVE</span>}
            </div>
            <div style={{padding:'18px 20px',flex:1,display:'flex',flexDirection:'column'}}>
              <div style={{fontWeight:700,fontSize:'15px',marginBottom:'4px'}}>{proj.title}</div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,.42)',marginBottom:'8px'}}>{proj.subtitle}</div>
              <p style={{fontSize:'13px',color:'rgba(64,202,255,.85)',fontWeight:600,marginBottom:'10px',lineHeight:1.5,fontStyle:'italic'}}>{proj.tagline}</p>
              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'6px',flex:1,marginBottom:'12px'}}>
                {(proj.bullets||[]).map((b,j) => (
                  <li key={j} style={{fontSize:'12px',color:'rgba(255,255,255,.7)',lineHeight:1.7,display:'flex',gap:'8px'}}>
                    <span style={{color:'rgba(167,143,255,.8)',flexShrink:0,fontSize:'7px',marginTop:'5px'}}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>
              <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(0,0,0,.4)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'9999px',padding:'5px 12px',fontSize:'11.5px',fontWeight:600,color:'#fff',textDecoration:'none'}}>Live Demo</a>}
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(0,0,0,.4)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'9999px',padding:'5px 12px',fontSize:'11.5px',fontWeight:600,color:'#fff',textDecoration:'none'}}>GitHub</a>}
              </div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'5px'}}>
                {(proj.stack||[]).map(s=><span key={s} style={{border:'1px solid rgba(255,255,255,.1)',background:'rgba(255,255,255,.05)',borderRadius:'9999px',padding:'2px 9px',fontSize:'11px',color:'rgba(255,255,255,.7)'}}>{s}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
