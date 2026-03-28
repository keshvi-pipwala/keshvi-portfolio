import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import './index.css'

const NAV=[{to:'/',label:'Home',icon:'⬡'},{to:'/about',label:'About',icon:'◈'},{to:'/experience',label:'Experience',icon:'◎'},{to:'/projects',label:'Projects',icon:'◆'},{to:'/education',label:'Education',icon:'◉'},{to:'/contact',label:'Contact',icon:'◇'}]

class EB extends React.Component {
  constructor(p){super(p);this.state={err:null,comp:null}}
  static getDerivedStateFromError(e){return{err:e.message||e.toString(),comp:e.stack?.split('\n')[1]||''}}
  render(){
    if(this.state.err) return <div style={{padding:'40px',color:'#fff',background:'#1a0a0a',minHeight:'100vh'}}><h2 style={{color:'#ff6b6b'}}>Crash: {this.state.err}</h2><pre style={{fontSize:'11px',color:'rgba(255,255,255,.6)',marginTop:'12px'}}>{this.state.comp}</pre></div>
    return this.props.children
  }
}

export default function App() {
  return (
    <>
      <nav className="sidebar">
        {NAV.map(n=><NavLink key={n.to} to={n.to} end={n.to==='/'} className={({isActive})=>'nav-icon'+(isActive?' active':'')}><span>{n.icon}</span><span className="nav-tooltip">{n.label}</span></NavLink>)}
      </nav>
      <div className="page-area">
        <Routes>
          <Route path="/" element={<EB><Home/></EB>}/>
          <Route path="/about" element={<EB><About/></EB>}/>
          <Route path="/experience" element={<EB><Experience/></EB>}/>
          <Route path="/projects" element={<EB><Projects/></EB>}/>
          <Route path="/education" element={<EB><Education/></EB>}/>
          <Route path="/contact" element={<EB><Contact/></EB>}/>
        </Routes>
      </div>
    </>
  )
}
