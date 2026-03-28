import React from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null } }
  static getDerivedStateFromError(e) { return { error: e } }
  render() {
    if (this.state.error) {
      return (
        <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',flexDirection:'column',gap:'16px',padding:'40px'}}>
          <h2 style={{color:'#ff6b6b'}}>Error caught!</h2>
          <pre style={{background:'rgba(255,0,0,.1)',padding:'20px',borderRadius:'12px',fontSize:'12px',maxWidth:'800px',overflow:'auto',whiteSpace:'pre-wrap'}}>{this.state.error.toString()}{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const NAV = [
  { to:'/', label:'Home', icon:'⬡' },
  { to:'/about', label:'About', icon:'◈' },
  { to:'/experience', label:'Experience', icon:'◎' },
  { to:'/projects', label:'Projects', icon:'◆' },
  { to:'/education', label:'Education', icon:'◉' },
  { to:'/contact', label:'Contact', icon:'◇' },
]

function Inner() {
  const location = useLocation()
  return (
    <>
      <nav className="sidebar">
        {NAV.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>'nav-icon'+(isActive?' active':'')}><span>{n.icon}</span><span className="nav-tooltip">{n.label}</span></NavLink>)}
      </nav>
      <div className="page-area">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <nav className="mob-nav">
        <div className="mob-nav-inner">
          {NAV.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>'mob-link'+(isActive?' active':'')}><span className="mob-link-icon">{n.icon}</span><span>{n.label}</span></NavLink>)}
        </div>
      </nav>
    </>
  )
}

// v2
export default function App() {
  return (
    <ErrorBoundary>
      <Inner/>
    </ErrorBoundary>
  )
}
