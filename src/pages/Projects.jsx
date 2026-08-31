import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data'
import ProjectPreview from '../components/ProjectPreview'

function bold(text) {
  if (!text) return text
  return text.split(/\*\*([^*]+)\*\*/g).map((p,i) =>
    i%2===1 ? <strong key={i} style={{color:'#fff',fontWeight:700}}>{p}</strong> : p
  )
}

export default function Projects() {
  const [q,setQ]=useState('')
  const items=(PROJECTS||[]).filter(p=>
    !q||(p.title+' '+p.subtitle+' '+(p.stack||[]).join(' ')).toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div style={{minHeight:'100vh',padding:'48px 48px 80px',maxWidth:'1100px',margin:'0 auto'}} className="page-pad">

      <div className="reveal" style={{marginBottom:'32px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'10px',fontWeight:600}}>WORK</p>
        <h1 style={{fontSize:'clamp(32px,4vw,48px)',fontWeight:900,letterSpacing:'-.03em'}}>Projects</h1>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,.38)',marginTop:'8px',lineHeight:1.6,maxWidth:'640px'}}>
          Three AI products I took from spec to ship — I set the direction, owned the hard tradeoffs, and ran the QA; the implementation is AI-assisted. Directing AI to ship real software is the point.
        </p>
        <div className="section-line" style={{marginTop:'24px'}}/>
      </div>

      {/* Search */}
      <div className="reveal d1" style={{marginBottom:'32px'}}>
        <input value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Search by tech or name..."
          style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.1)',borderRadius:'12px',padding:'11px 16px',color:'#fff',fontSize:'13px',fontFamily:'inherit',outline:'none',width:'100%',maxWidth:'360px',transition:'border-color .2s'}}
          onFocus={e=>e.target.style.borderColor='rgba(124,122,207,.5)'}
          onBlur={e=>e.target.style.borderColor='rgba(255,255,255,.1)'}
        />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'24px'}}>
        {items.map((proj,i)=>{
          return (
          <div key={proj.id||i} className={`tilt-card reveal d${Math.min(i+1,5)}`}
            style={{borderRadius:'24px',border:'1px solid rgba(255,255,255,.09)',background:'rgba(255,255,255,.03)',overflow:'hidden',display:'flex',flexDirection:'column',backdropFilter:'blur(16px)',position:'relative'}}>

            {/* Mouse-following glow */}
            <div className="card-inner-glow" style={{position:'absolute',inset:0,borderRadius:'24px',pointerEvents:'none',transition:'background .15s',zIndex:0}}/>

            {/* Live product preview + overlaid actions */}
            <div style={{position:'relative',zIndex:1,flexShrink:0}}>
              <ProjectPreview id={proj.id} />
              <div style={{position:'absolute',top:'12px',right:'14px',display:'flex',gap:'8px',alignItems:'center'}}>
                {proj.live&&(
                  <a href={proj.live} target="_blank" rel="noreferrer"
                    style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(0,0,0,.55)',border:'1px solid rgba(255,255,255,.25)',borderRadius:'9999px',padding:'6px 13px',fontSize:'11.5px',fontWeight:700,color:'#fff',textDecoration:'none',backdropFilter:'blur(8px)',transition:'all .18s'}}
                    onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,0,0,.8)';e.currentTarget.style.transform='translateY(-2px)'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,0,0,.55)';e.currentTarget.style.transform=''}}>
                    <ExternalLink size={12} /> Live
                  </a>
                )}
                {proj.github&&(
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'rgba(0,0,0,.55)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'9999px',padding:'6px 13px',fontSize:'11.5px',fontWeight:700,color:'rgba(255,255,255,.9)',textDecoration:'none',backdropFilter:'blur(8px)',transition:'all .18s'}}
                    onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,0,0,.8)';e.currentTarget.style.transform='translateY(-2px)'}}
                    onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,0,0,.55)';e.currentTarget.style.transform=''}}>
                    <Github size={12} /> GitHub
                  </a>
                )}
              </div>
              {proj.live&&(
                <span style={{position:'absolute',top:'14px',left:'14px',display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(0,200,100,.22)',border:'1px solid rgba(0,200,100,.5)',borderRadius:'9999px',padding:'2px 9px',fontSize:'9.5px',color:'rgba(0,235,120,1)',fontWeight:700,letterSpacing:'.05em'}}>
                  <span style={{width:'5px',height:'5px',borderRadius:'50%',background:'rgba(0,235,120,1)'}} className="pulse-dot"/> LIVE
                </span>
              )}
            </div>

            <div style={{padding:'22px 24px',flex:1,display:'flex',flexDirection:'column',position:'relative',zIndex:1}}>
              <div style={{fontWeight:800,fontSize:'18px',marginBottom:'3px',letterSpacing:'-.01em'}}>{proj.title}</div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,.35)',marginBottom:'12px',letterSpacing:'.01em'}}>{proj.subtitle}</div>
              <p style={{fontSize:'13px',color:'rgba(100,200,255,.9)',fontWeight:600,marginBottom:'16px',lineHeight:1.55,fontStyle:'italic'}}>{proj.tagline}</p>

              {proj.id==='insightiq'&&(
                <Link to="/case-study" style={{display:'inline-flex',alignItems:'center',gap:'6px',alignSelf:'flex-start',marginBottom:'16px',padding:'6px 13px',borderRadius:'9999px',background:'rgba(124,122,207,.14)',border:'1px solid rgba(124,122,207,.4)',color:'#cfc6ff',textDecoration:'none',fontSize:'12px',fontWeight:700}}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(124,122,207,.24)'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(124,122,207,.14)'}}>
                  Read the full case study <ArrowRight size={13} />
                </Link>
              )}

              <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'9px',flex:1,marginBottom:'18px'}}>
                {(proj.bullets||[]).map((b,j)=>(
                  <li key={j} style={{fontSize:'12.5px',color:'rgba(255,255,255,.72)',lineHeight:1.75,display:'flex',gap:'10px'}}>
                    <span style={{color:'rgba(167,143,255,.75)',flexShrink:0,fontSize:'8px',marginTop:'5px'}}>▶</span>
                    <span>{bold(b)}</span>
                  </li>
                ))}
              </ul>

              <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                {(proj.stack||[]).map(s=>(
                  <span key={s} className="skill-tag" style={{border:'1px solid rgba(255,255,255,.1)',background:'rgba(255,255,255,.06)',borderRadius:'7px',padding:'3px 10px',fontSize:'11px',color:'rgba(255,255,255,.68)'}}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
}
