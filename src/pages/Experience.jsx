import React from 'react'
import { EXPERIENCE } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i % 2 === 1 ? <strong key={i} style={{color:'#fff',fontWeight:700}}>{p}</strong> : p
  )
}

export default function Experience() {
  return (
    <div style={{minHeight:'100vh',padding:'44px 28px 60px',maxWidth:'940px',margin:'0 auto'}} className="page-pad">
      <div style={{marginBottom:'32px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'8px',fontWeight:600}}>CAREER</p>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:800,marginBottom:'10px'}}>Professional Experience</h1>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        {(EXPERIENCE||[]).map((exp,i) => (
          <div key={i} style={{borderRadius:'20px',border:'1px solid rgba(255,255,255,.09)',background:'rgba(255,255,255,.04)',padding:'24px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
              <span style={{fontSize:'24px'}}>{exp.icon}</span>
              <div>
                <div style={{fontWeight:700,fontSize:'16px'}}>{exp.role}</div>
                <div style={{fontSize:'13px',color:'rgba(255,255,255,.5)'}}>{exp.company} · {exp.time}</div>
              </div>
            </div>
            <p style={{fontSize:'13px',color:'rgba(255,255,255,.6)',lineHeight:1.7,marginBottom:'12px',borderLeft:'2px solid rgba(124,122,207,.4)',paddingLeft:'12px',fontStyle:'italic'}}>{exp.summary}</p>
            <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'7px',marginBottom:'12px'}}>
              {(exp.bullets||[]).map((b,j) => (
                <li key={j} style={{fontSize:'13px',color:'rgba(255,255,255,.78)',lineHeight:1.7,display:'flex',gap:'8px'}}>
                  <span style={{color:'rgba(167,143,255,.8)',flexShrink:0}}>▶</span>
                  <span>{bold(b)}</span>
                </li>
              ))}
            </ul>
            <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
              {(exp.stack||[]).map(s => <span key={s} style={{border:'1px solid rgba(255,255,255,.1)',background:'rgba(255,255,255,.06)',borderRadius:'9999px',padding:'2px 10px',fontSize:'11px',color:'rgba(255,255,255,.7)'}}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
