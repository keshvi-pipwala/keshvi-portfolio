import React from 'react'

export default function About() {
  return (
    <div style={{minHeight:'100vh',padding:'44px 28px 60px',maxWidth:'1000px',margin:'0 auto',color:'#fff'}}>
      <p style={{fontSize:'11px',letterSpacing:'.3em',textTransform:'uppercase',color:'rgba(167,143,255,.8)',marginBottom:'8px',fontWeight:600}}>ABOUT</p>
      <h1 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:800,marginBottom:'20px'}}>Engineered for Impact. Built to Ship.</h1>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'16px',marginBottom:'32px'}}>
        <div style={{borderRadius:'20px',border:'1px solid rgba(64,202,255,.25)',background:'rgba(64,202,255,.04)',padding:'24px'}}>
          <div style={{fontSize:'13px',fontWeight:700,color:'rgba(64,202,255,.9)',textTransform:'uppercase',marginBottom:'8px'}}>Software Engineer at NASA</div>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,.75)',lineHeight:1.8}}>ETL pipelines processing <strong style={{color:'#fff'}}>100,000+ records</strong> with 95% anomaly detection accuracy and zero integrity failures since deployment.</p>
        </div>
        <div style={{borderRadius:'20px',border:'1px solid rgba(124,122,207,.25)',background:'rgba(124,122,207,.04)',padding:'24px'}}>
          <div style={{fontSize:'13px',fontWeight:700,color:'rgba(167,143,255,.9)',textTransform:'uppercase',marginBottom:'8px'}}>AI Product Manager at ASU</div>
          <p style={{fontSize:'13px',color:'rgba(255,255,255,.75)',lineHeight:1.8}}>Led platform from 0 to <strong style={{color:'#fff'}}>5,000+ users</strong> with <strong style={{color:'#fff'}}>18% retention lift</strong> and 22% engagement growth.</p>
        </div>
      </div>

      <div style={{borderRadius:'20px',border:'1px solid rgba(255,255,255,.08)',background:'rgba(255,255,255,.03)',padding:'24px',marginBottom:'32px'}}>
        <div style={{fontSize:'11px',fontWeight:700,color:'rgba(255,200,80,.85)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'14px'}}>What most candidates cannot do</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
          {[
            {icon:'🎯',title:'Engineer who owns metrics',body:'I shipped GitSense — a 7-step autonomous agent detecting breaking changes and scoring technical debt. Agentic AI architecture, not a chatbot wrapper.'},
            {icon:'📐',title:'PM who reads the code',body:'When I raised retention 18% at ASU, I debugged the ML model and rewrote the pipeline in the same sprint. Most PMs file a ticket. I fix it.'},
            {icon:'⚡',title:'Data engineer at scale',body:'100K+ records at NASA with zero integrity failures. Designed the validation layer, wrote the tests, wired it to live dashboards.'},
          ].map(item => (
            <div key={item.title} style={{display:'flex',gap:'12px',alignItems:'flex-start'}}>
              <span style={{fontSize:'20px',flexShrink:0}}>{item.icon}</span>
              <div>
                <div style={{fontSize:'13px',fontWeight:700,marginBottom:'4px'}}>{item.title}</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,.55)',lineHeight:1.75}}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',gap:'12px',marginBottom:'36px'}}>
        {[
          {n:'5,000+',l:'Users on live platforms',c:'rgba(167,143,255,.95)'},
          {n:'100K+',l:'Records, zero failures',c:'rgba(64,202,255,.95)'},
          {n:'95%',l:'Anomaly detection',c:'rgba(255,200,80,.9)'},
          {n:'4.0',l:'GPA at ASU',c:'rgba(100,200,100,.9)'},
          {n:'+18%',l:'Retention lift',c:'rgba(255,140,105,.9)'},
          {n:'2+',l:'AI systems live',c:'rgba(200,100,200,.9)'},
        ].map(s => (
          <div key={s.n} style={{borderRadius:'14px',border:'1px solid rgba(255,255,255,.08)',background:'rgba(255,255,255,.04)',padding:'16px 14px',textAlign:'center'}}>
            <div style={{fontSize:'clamp(20px,2.5vw,26px)',fontWeight:900,color:s.c,lineHeight:1}}>{s.n}</div>
            <div style={{fontSize:'10.5px',color:'rgba(255,255,255,.45)',marginTop:'5px'}}>{s.l}</div>
          </div>
        ))}
      </div>

      <h2 style={{fontSize:'20px',fontWeight:700,marginBottom:'16px'}}>Skills</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
        {['Python','SQL','FastAPI','React','Docker','Kubernetes','AWS','GCP','LangChain','RAG','ChromaDB','Celery','Redis','ETL','Airflow','Tableau','OKRs','A/B Testing','Agile','Product Roadmapping'].map(s => (
          <span key={s} style={{border:'1px solid rgba(124,122,207,.3)',background:'rgba(124,122,207,.08)',borderRadius:'7px',padding:'4px 12px',fontSize:'12px',color:'rgba(255,255,255,.82)'}}>{s}</span>
        ))}
      </div>
    </div>
  )
}
