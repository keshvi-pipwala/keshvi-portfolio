import React from 'react'
import { EDUCATION, CERTIFICATIONS } from '../data'

export default function Education() {
  const edu = EDUCATION || []
  const certs = CERTIFICATIONS || []
  return (
    <div style={{minHeight:'100vh',padding:'44px 28px 60px',maxWidth:'920px',margin:'0 auto'}} className="page-pad">
      <div style={{marginBottom:'32px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'8px',fontWeight:600}}>BACKGROUND</p>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:800,marginBottom:'10px'}}>Education</h1>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,.42)',lineHeight:1.7}}>4.0 GPA while working full-time at NASA and ASU simultaneously.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'18px',marginBottom:'44px'}}>
        {edu.map((e,i) => (
          <div key={i} style={{borderRadius:'22px',border:'1px solid rgba(255,255,255,.09)',background:'rgba(255,255,255,.04)',padding:'26px 26px 26px 30px',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',left:0,top:0,height:'100%',width:'3px',background:'linear-gradient(180deg,rgba(167,143,255,.8),rgba(64,202,255,.4))'}}/>
            <div style={{fontSize:'11px',fontWeight:700,color:'rgba(167,143,255,.85)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:'6px'}}>{e.school}</div>
            <div style={{fontWeight:300,fontSize:'18px',color:'rgba(255,255,255,.94)',marginBottom:'4px',lineHeight:1.3}}>{e.degree}</div>
            <div style={{fontSize:'12px',color:'rgba(255,255,255,.42)',marginBottom:'14px'}}>{e.meta}</div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1px solid rgba(124,122,207,.45)',background:'rgba(124,122,207,.1)',borderRadius:'9px',padding:'6px 14px'}}>
              <span style={{fontSize:'14px',fontWeight:800,color:'rgba(167,143,255,.95)'}}>GPA {e.gpa}</span>
              {e.star && <span>⭐</span>}
            </div>
            {e.note && <p style={{fontSize:'12px',color:'rgba(255,255,255,.38)',marginTop:'10px',lineHeight:1.5,fontStyle:'italic'}}>{e.note}</p>}
          </div>
        ))}
      </div>
      <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'16px'}}>Certifications</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'14px'}}>
        {certs.map((c,i) => (
          <a key={i} href={c.url||'#'} target="_blank" rel="noreferrer" style={{borderRadius:'16px',border:'1px solid '+(c.border||'rgba(255,255,255,.2)'),background:c.color||'rgba(255,255,255,.05)',padding:'16px 20px',minWidth:'240px',flex:1,textDecoration:'none',display:'block',transition:'transform .18s,box-shadow .18s',cursor:'pointer'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,.3)'}} onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none'}}>
            <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:c.border||'rgba(255,255,255,.7)',marginBottom:'5px'}}>{c.issuer}</div>
            <div style={{fontSize:'13px',color:'rgba(255,255,255,.84)',fontWeight:600,marginBottom:'4px'}}>{c.name}</div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,.38)'}}>Issued {c.date}</div>
              <div style={{fontSize:'11px',color:c.border||'rgba(255,255,255,.5)',fontWeight:600}}>View ↗</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
