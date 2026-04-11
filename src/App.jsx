import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import RecruiterChat from './components/RecruiterChat'
import './index.css'

const NAV=[{to:'/',label:'Home',icon:'⬡'},{to:'/about',label:'About',icon:'◈'},{to:'/experience',label:'Experience',icon:'◎'},{to:'/projects',label:'Projects',icon:'◆'},{to:'/education',label:'Education',icon:'◉'},{to:'/contact',label:'Contact',icon:'◇'}]

function Particles(){
  const items=React.useMemo(()=>Array.from({length:18},(_,i)=>({id:i,left:Math.random()*100,size:Math.random()*3+1,dur:Math.random()*20+12,delay:Math.random()*15,op:Math.random()*0.35+0.1,color:['rgba(124,122,207,','rgba(64,202,255,','rgba(255,200,80,'][Math.floor(Math.random()*3)]})),[])
  return <>{items.map(p=><div key={p.id} className="particle" style={{left:p.left+'%',bottom:'-10px',width:p.size+'px',height:p.size+'px',background:p.color+p.op+')',animationDuration:p.dur+'s',animationDelay:p.delay+'s'}}/>)}</>
}

function Inner(){
  const location = useLocation()
  const [chatOpen, setChatOpen] = useState(false)
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0,0) }, [location.pathname])

  // Custom cursor
  useEffect(() => {
    const move = e => {
      if(cursorRef.current) { cursorRef.current.style.left=e.clientX+'px'; cursorRef.current.style.top=e.clientY+'px' }
      if(cursorDotRef.current) { cursorDotRef.current.style.left=e.clientX+'px'; cursorDotRef.current.style.top=e.clientY+'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Scroll reveal — IntersectionObserver
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.05, rootMargin:'0px 0px 0px 0px' })

    const attach = () => {
      document.querySelectorAll(selectors).forEach(el => {
        el.classList.remove('visible')
        obs.observe(el)
      })
    }
    // Fire immediately, then again after paint
    const t0 = setTimeout(attach, 50)
    const t1 = setTimeout(attach, 200)
    const t2 = setTimeout(attach, 600)
    return () => { obs.disconnect(); clearTimeout(t0); clearTimeout(t1); clearTimeout(t2) }
  }, [location.pathname])

  // Real 3D mouse-tracking tilt on .tilt-card
  useEffect(() => {
    const onMove = (e) => {
      const card = e.currentTarget
      const r = card.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 2   // -1 to 1
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 2   // -1 to 1
      const rotY =  x * 10  // max 10deg
      const rotX = -y * 7   // max 7deg
      const glowX = (x + 1) * 50   // 0-100%
      const glowY = (y + 1) * 50
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
      // Move inner glow
      const glow = card.querySelector('.card-inner-glow')
      if (glow) { glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(124,122,207,0.22) 0%, transparent 65%)` }
    }
    const onLeave = (e) => {
      e.currentTarget.style.transform = ''
      const glow = e.currentTarget.querySelector('.card-inner-glow')
      if (glow) glow.style.background = ''
    }
    const attach = () => {
      document.querySelectorAll('.tilt-card').forEach(c => {
        c.removeEventListener('mousemove', onMove)
        c.removeEventListener('mouseleave', onLeave)
        c.addEventListener('mousemove', onMove)
        c.addEventListener('mouseleave', onLeave)
      })
    }
    attach()
    const t = setTimeout(attach, 400)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div style={{minHeight:'100vh',background:'#06060f',color:'#fff',fontFamily:"'Inter','Segoe UI',sans-serif",position:'relative',overflow:'hidden'}}>
      {/* Aurora */}
      <div style={{position:'fixed',inset:0,pointerEvents:'none',zIndex:0,overflow:'hidden'}}>
        <div style={{position:'absolute',top:'-15%',left:'-10%',width:'60vw',height:'60vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(120,80,255,0.45) 0%,transparent 70%)',filter:'blur(80px)',animation:'auroraA 18s ease-in-out infinite'}}/>
        <div style={{position:'absolute',bottom:'-20%',right:'-10%',width:'55vw',height:'55vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,180,255,0.3) 0%,transparent 70%)',filter:'blur(90px)',animation:'auroraB 22s ease-in-out infinite'}}/>
        <div style={{position:'absolute',top:'40%',left:'30%',width:'40vw',height:'40vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,100,180,0.15) 0%,transparent 70%)',filter:'blur(100px)',animation:'auroraC 26s ease-in-out infinite'}}/>
      </div>
      <Particles/>

      {/* Cursor */}
      <div ref={cursorRef} style={{position:'fixed',width:'32px',height:'32px',border:'1.5px solid rgba(167,143,255,0.6)',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',transition:'left 0.12s ease,top 0.12s ease',mixBlendMode:'difference'}}/>
      <div ref={cursorDotRef} style={{position:'fixed',width:'5px',height:'5px',background:'rgba(167,143,255,0.9)',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',transition:'left 0.04s ease,top 0.04s ease'}}/>

      {/* Nav */}
      <nav style={{position:'fixed',left:0,top:0,bottom:0,width:'72px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'8px',zIndex:100,borderRight:'1px solid rgba(255,255,255,0.06)',background:'rgba(6,6,15,0.7)',backdropFilter:'blur(20px)'}}>
        {NAV.map(n=>(
          <NavLink key={n.to} to={n.to} end={n.to==='/'} style={({isActive})=>({display:'flex',flexDirection:'column',alignItems:'center',gap:'4px',padding:'10px 6px',borderRadius:'12px',textDecoration:'none',color:isActive?'#a78fff':'rgba(255,255,255,0.4)',background:isActive?'rgba(124,122,207,0.15)':'transparent',border:isActive?'1px solid rgba(124,122,207,0.3)':'1px solid transparent',transition:'all 0.2s',width:'56px'})}>
            <span style={{fontSize:'14px'}}>{n.icon}</span>
            <span style={{fontSize:'9px',fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase'}}>{n.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Main */}
      <main style={{marginLeft:'72px',minHeight:'100vh',position:'relative',zIndex:1}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>

      {/* Chat FAB */}
      <button className="chat-fab" onClick={()=>setChatOpen(true)} style={{position:'fixed',bottom:'28px',right:'28px',zIndex:200,display:'flex',alignItems:'center',gap:'10px',padding:'14px 22px',borderRadius:'9999px',background:'linear-gradient(135deg,rgba(124,122,207,0.75),rgba(64,202,255,0.55))',border:'1px solid rgba(124,122,207,0.6)',color:'#fff',fontSize:'14px',fontWeight:700,cursor:'pointer',fontFamily:'inherit',backdropFilter:'blur(16px)',boxShadow:'0 8px 32px rgba(124,122,207,0.35)',transition:'transform 0.2s, box-shadow 0.2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.06) translateY(-2px)';e.currentTarget.style.boxShadow='0 16px 48px rgba(124,122,207,0.5)'}} onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow='0 8px 32px rgba(124,122,207,0.35)'}}>
        <span style={{fontSize:'18px'}}>💬</span> Ask about Keshvi
      </button>

      <RecruiterChat isOpen={chatOpen} onClose={()=>setChatOpen(false)}/>
    </div>
  )
}

export default function App(){ return <Inner/> }
