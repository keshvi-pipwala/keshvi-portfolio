import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home       from './pages/Home'
import About      from './pages/About'
import Experience from './pages/Experience'
import Projects   from './pages/Projects'
import Education  from './pages/Education'
import Contact    from './pages/Contact'
import RecruiterChat from './components/RecruiterChat'

const NAV = [
  { to:'/',           label:'Home',       icon:'⬡' },
  { to:'/about',      label:'About',      icon:'◈' },
  { to:'/experience', label:'Experience', icon:'◎' },
  { to:'/projects',   label:'Projects',   icon:'◆' },
  { to:'/education',  label:'Education',  icon:'◉' },
  { to:'/contact',    label:'Contact',    icon:'◇' },
]

function Particles() {
  const items = React.useMemo(() => Array.from({length:20},(_,i)=>({
    id:i,left:Math.random()*100,size:Math.random()*4+1,
    dur:Math.random()*20+12,delay:Math.random()*15,
    op:Math.random()*0.4+0.1,
    color:['rgba(124,122,207,','rgba(64,202,255,','rgba(255,200,80,'][Math.floor(Math.random()*3)],
  })),[])
  return <>{items.map(p=><div key={p.id} className="particle" style={{left:p.left+'%',bottom:'-10px',width:p.size+'px',height:p.size+'px',background:p.color+p.op+')',animationDuration:p.dur+'s',animationDelay:p.delay+'s'}}/>)}</>
}

function Cursor() {
  const dot=useRef(null),ring=useRef(null),rx=useRef(0),ry=useRef(0),raf=useRef(null)
  useEffect(()=>{
    const move=e=>{
      const x=e.clientX,y=e.clientY
      if(dot.current){dot.current.style.left=x+'px';dot.current.style.top=y+'px'}
      const go=()=>{rx.current+=(x-rx.current)*0.13;ry.current+=(y-ry.current)*0.13;if(ring.current){ring.current.style.left=rx.current+'px';ring.current.style.top=ry.current+'px'}raf.current=requestAnimationFrame(go)}
      if(raf.current)cancelAnimationFrame(raf.current);go()
    }
    window.addEventListener('mousemove',move)
    return()=>{window.removeEventListener('mousemove',move);if(raf.current)cancelAnimationFrame(raf.current)}
  },[])
  return <><div ref={dot} className="cursor-dot hide-mobile"/><div ref={ring} className="cursor-ring hide-mobile"/></>
}

export default function App() {
  const location=useLocation()
  const [scanKey,setScanKey]=useState(0)
  const [pageKey,setPageKey]=useState(0)
  const [chatOpen,setChatOpen]=useState(false)
  useEffect(()=>{setScanKey(k=>k+1);setPageKey(k=>k+1);const el=document.querySelector('.page-area');if(el)el.scrollTop=0},[location.pathname])
  return (
    <>
      <Cursor/>
      <Particles/>
      <div className="aurora"><div className="aurora-blob"/><div className="aurora-blob"/><div className="aurora-blob"/></div>
      <div className="grid-overlay"/>
      <div key={'scan-'+scanKey} className="scan-line"/>
      <nav className="sidebar">
        {NAV.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>'nav-icon'+(isActive?' active':'')}><span>{n.icon}</span><span className="nav-tooltip">{n.label}</span></NavLink>)}
      </nav>
      <div className="page-area">
        <div key={'page-'+pageKey} className="page-enter">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
      <nav className="mob-nav">
        <div className="mob-nav-inner">
          {NAV.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>'mob-link'+(isActive?' active':'')}><span className="mob-link-icon">{n.icon}</span><span>{n.label}</span></NavLink>)}
        </div>
      </nav>
      <button className="chat-fab" onClick={()=>setChatOpen(true)}>
        <span className="chat-fab-icon">💬</span>
        <span className="chat-fab-text">Ask about Keshvi</span>
      </button>
      <RecruiterChat isOpen={chatOpen} onClose={()=>setChatOpen(false)}/>
    </>
  )
}
