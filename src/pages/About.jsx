import React from 'react'
import { SKILLS } from '../data'

const CAT = {
  'Languages & Core':    { bg:'rgba(124,122,207,.12)', bd:'rgba(124,122,207,.35)', lb:'rgba(167,143,255,.9)' },
  'AI / ML & NLP':       { bg:'rgba(64,202,255,.1)',   bd:'rgba(64,202,255,.3)',   lb:'rgba(64,202,255,.9)'  },
  'Data Engineering':    { bg:'rgba(255,200,80,.08)',  bd:'rgba(255,200,80,.25)',  lb:'rgba(255,200,80,.85)' },
  'Distributed Systems': { bg:'rgba(255,140,105,.1)',  bd:'rgba(255,140,105,.3)',  lb:'rgba(255,140,105,.9)' },
  'Cloud & Backend':     { bg:'rgba(100,200,100,.08)', bd:'rgba(100,200,100,.25)', lb:'rgba(100,200,100,.85)'},
  'Product & Management':{ bg:'rgba(200,100,200,.1)',  bd:'rgba(200,100,200,.3)',  lb:'rgba(200,100,200,.9)' },
}

export default function About() {
  return (
    <div style={{minHeight:'100vh',padding:'44px 28px 60px',maxWidth:'1000px',margin:'0 auto'}} className="page-pad">
      <div style={{marginBottom:'36px'}}>
        <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'8px',fontWeight:600}}>ABOUT</p>
        <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:800,letterSpacing:'-.02em',lineHeight:1.1,marginBottom:'10px'}}>Engineered for Impact.<br/>Built to Ship.</h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,.5)',maxWidth:'540px',lineHeight:1.75}}>The rare profile that closes the gap between data infrastructure and product outcomes.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'16px',marginBottom:'24px'}}>
        <div style={{borderRadius:'20px',border:'1px solid rgba(64,202,255,.25)',background:'rgba(64,202,255,.04)',padding:'24px'}}>
          <div style={{fontSize:'13px',fontWeight:700,color:'rgba(64,202,255,.9)',textTransform:'uppercase',marginBottom:'8px'}}>Software Engineer @ NASA</div>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,.75)',lineHeight:1.8}}>ETL pipelines processing <strong style={{color:'#fff'}}>100,000+ records</strong> with 95% anomaly detection accuracy and zero failures.</p>
        </div>
        <div style={{borderRadius:'20px',border:'1px solid rgba(124,122,207,.25)',background:'rgba(124,122,207,.04)',padding:'24px'}}>
          <div style={{fontSize:'13px',fontWeight:700,color:'rgba(167,143,255,.9)',textTransform:'uppercase',marginBottom:'8px'}}>AI Product Manager @ ASU</div>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,.75)',lineHeight:1.8}}>Platform from 0 to <strong style={{color:'#fff'}}>5,000+ users</strong> with <strong style={{color:'#fff'}}>18% retention lift</strong> and 22% engagement growth.</p>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',gap:'12px',marginBottom:'36px'}}>
        {[{n:'5,000+',l:'Users on live platforms',c:'rgba(167,143,255,.95)'},{n:'100K+',l:'Records, zero failures',c:'rgba(64,202,255,.95)'},{n:'95%',l:'Anomaly detection',c:'rgba(255,200,80,.9)'},{n:'4.0',l:'GPA at ASU',c:'rgba(100,200,100,.9)'},{n:'+18%',l:'Retention lift',c:'rgba(255,140,105,.9)'},{n:'2+',l:'AI systems live',c:'rgba(200,100,200,.9)'}].map(s=>(
          <div key={s.n} style={{borderRadius:'14px',border:'1px solid rgba(255,255,255,.08)',background:'rgba(255,255,255,.04)',padding:'16px 14px',textAlign:'center'}}>
            <div style={{fontSize:'clamp(20px,2.5vw,26px)',fontWeight:900,color:s.c,lineHeight:1}}>{s.n}</div>
            <div style={{fontSize:'10.5px',color:'rgba(255,255,255,.45)',marginTop:'5px'}}>{s.l}</div>
          </div>
        ))}
      </div>
      <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'16px'}}>Technical Arsenal</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'14px'}}>
        {Object.entries(SKILLS || {}).map(([cat,skills])=>{
          const c=CAT[cat]||{bg:'rgba(255,255,255,.05)',bd:'rgba(255,255,255,.12)',lb:'rgba(255,255,255,.7)'}
          return (
            <div key={cat} style={{borderRadius:'16px',border:'1px solid '+c.bd,background:c.bg,padding:'16px 18px'}}>
              <div style={{fontSize:'10.5px',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:c.lb,marginBottom:'10px'}}>{cat}</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                {(skills||[]).map(s=><span key={s} style={{border:'1px solid '+c.bd,background:'rgba(0,0,0,.2)',borderRadius:'7px',padding:'4px 10px',fontSize:'11px',color:'rgba(255,255,255,.82)'}}>{s}</span>)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
