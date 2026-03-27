import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import RecruiterChat, { RecruiterFAB } from './components/RecruiterChat'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

const LABELS = {
  '/': 'Home',
  '/about': 'About',
  '/experience': 'Experience',
  '/projects': 'Projects',
  '/education': 'Education',
  '/contact': 'Contact',
}

function Stars() {
  const stars = Array.from({ length: 130 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 1.8 + 0.3,
    dur: (Math.random() * 2.2 + 0.9).toFixed(1),
    delay: (Math.random() * 2.2).toFixed(1),
  }))
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      {stars.map(s => (
        <span key={s.id} style={{
          position: 'absolute',
          borderRadius: '50%',
          background: '#fff',
          left: `${s.left}%`,
          top: `${s.top}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          animation: `star-tw ${s.dur}s ease-in-out ${s.delay}s infinite alternate`,
        }} />
      ))}
    </div>
  )
}

function Layout() {
  const location = useLocation()
  const [chatOpen, setChatOpen] = useState(false)
  const label = LABELS[location.pathname] || 'Home'

  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <Sidebar currentLabel={label} />
      <main style={{ marginLeft: '72px', flex: 1, minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <RecruiterFAB onClick={() => setChatOpen(true)} />
      <RecruiterChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Space video background */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: .88 }}
      >
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.65)', zIndex: 1, pointerEvents: 'none' }} />
      {/* Stars */}
      <Stars />
      {/* App */}
      <Layout />
    </BrowserRouter>
  )
}
