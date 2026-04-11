import React from 'react'
import { EXPERIENCE } from '../data'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i%2===1 ? <strong key={i} style={{color:'#fff',fontWeight:700}}>{p}</strong> : p
  )
}

export default function Experience() {
  return (
    <div style={{minHeight:'100vh',padding:'48px 48px 80px',maxWidth:'880px',margin:'0 auto'}} className="page-pad">

      <div className="reveal" style={{marginBottom:'52px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'10px',fontWeight:600}}>CAREER</p>
        <h1 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:900,letterSpacing:'-.03em',lineHeight:1}}>Professional Experience</h1>
        <div className="section-line" style={{marginTop:'24px'}}/>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        {(EXPERIENCE||[]).map((exp,i)=>(
          <div key={i} className={`tilt-card reveal d${Math.min(i+1,5)}`}
            style={{borderRadius:'24px',border:'1px solid rgba(255,255,255,.08)',background:'rgba(255,255,255,.03)',backdropFilter:'blur(16px)',overflow:'hidden',position:'relative'}}>

            {/* Mouse-following glow */}
            <div className="card-inner-glow" style={{position:'absolute',inset:0,borderRadius:'24px',pointerEvents:'none',transition:'background .15s',zIndex:0}}/>

            {/* Top accent */}
            <div className="accent-bar"/>

            <div style={{padding:'26px 30px',position:'relative',zIndex:1}}>
              {/* Header */}
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'10px',flexWrap:'wrap',gap:'10px'}}>
                <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
                  <div style={{width:'46px',height:'46px',borderRadius:'14px',background:'linear-gradient(135deg,rgba(124,122,207,.35),rgba(64,202,255,.2))',border:'1px solid rgba(124,122,207,.4)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'22px',flexShrink:0}}>
                    {exp.icon}
                  </div>
                  <div>
                    <div style={{fontWeight:800,fontSize:'17px',letterSpacing:'-.01em',lineHeight:1.2}}>{exp.role}</div>
                    <div style={{fontSize:'12.5px',color:'rgba(167,143,255,.9)',fontWeight:600,marginTop:'3px'}}>{exp.company}</div>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:'12px',color:'rgba(255,255,255,.45)',fontWeight:500}}>{exp.time}</div>
                  <div style={{fontSize:'10px',color:'rgba(124,122,207,.7)',marginTop:'3px',fontWeight:600,letterSpacing:'.04em'}}>{exp.type}</div>
                </div>
              </div>

              {/* Summary */}
              {exp.summary&&(
                <p style={{fontSize:'13px',color:'rgba(255,255,255,.42)',lineHeight:1.75,marginBottom:'18px',fontStyle:'italic',borderLeft:'2px solid rgba(124,122,207,.4)',paddingLeft:'14px'}}>
                  {exp.summary}
                </p>
              )}

              {/* Bullets */}
              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'11px',marginBottom:'20px'}}>
                {(exp.bullets||[]).map((b,j)=>(
                  <li key={j} style={{fontSize:'13.5px',color:'rgba(255,255,255,.78)',lineHeight:1.75,display:'flex',gap:'12px'}}>
                    <span style={{color:'rgba(167,143,255,.75)',flexShrink:0,fontSize:'8px',marginTop:'7px'}}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                {(exp.stack||[]).map(s=>(
                  <span key={s} className="skill-tag" style={{border:'1px solid rgba(255,255,255,.1)',background:'rgba(255,255,255,.05)',borderRadius:'8px',padding:'4px 11px',fontSize:'11px',color:'rgba(255,255,255,.62)'}}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
