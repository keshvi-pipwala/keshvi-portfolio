import React from 'react'
import { PROFILE } from '../data'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 40px 0 28px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
    }}>

      <p style={{ fontSize: '11px', letterSpacing: '.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,.52)', marginBottom: '14px' }}>
        AI/DATA PRODUCT MANAGER &bull; SOFTWARE ENGINEER &bull; DATA SCIENTIST
      </p>

      <h1 style={{ fontSize: 'clamp(54px, 8.5vw, 86px)', fontWeight: 800, lineHeight: .9, letterSpacing: '-.035em', marginBottom: '22px' }}>
        Keshvi
        <span style={{ display: 'block', color: 'rgba(255,255,255,.62)' }}>Pipwala</span>
      </h1>

      <p style={{ maxWidth: '480px', fontSize: '15px', lineHeight: 1.72, color: 'rgba(255,255,255,.68)', marginBottom: '16px' }}>
        {PROFILE.bio}
      </p>

      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.5)' }}>
        📍 {PROFILE.location}
      </p>

      {/* Photo — right side */}
      <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} className="hide-mobile">
        <div style={{
          width: '240px', height: '300px',
          borderRadius: '999px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,.12)',
          background: 'rgba(255,255,255,.04)',
          boxShadow: '0 30px 80px rgba(0,0,0,.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '80px',
        }}>
          {PROFILE.photo
            ? <img src={PROFILE.photo} alt="Keshvi Pipwala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : '👩‍💼'}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hide-mobile { display: none !important; } }
      `}</style>
    </div>
  )
}
