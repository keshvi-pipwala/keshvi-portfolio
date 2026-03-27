import React from 'react'
import { Sparkles } from 'lucide-react'
import { EDUCATION, CERTIFICATIONS } from '../data'

export default function Education() {
  return (
    <div style={{ minHeight: '100vh', padding: '44px 28px 60px', maxWidth: '920px', margin: '0 auto' }}>

      <div style={{ marginBottom: '22px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Sparkles size={11} /> Education
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginBottom: '22px' }}>
        {EDUCATION.map((edu, i) => (
          <div key={i} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)', paddingLeft: '28px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '3px', borderRadius: '9999px', background: 'rgba(124,122,207,.65)' }} />
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(124,122,207,.88)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: '3px' }}>{edu.school}</div>
            <div style={{ fontWeight: 300, fontSize: '17px', color: 'rgba(255,255,255,.94)', marginBottom: '3px' }}>{edu.degree}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.48)' }}>{edu.meta}</div>
            <div style={{ display: 'inline-block', marginTop: '9px', border: '1px solid rgba(124,122,207,.6)', borderRadius: '4px', padding: '2px 9px', fontSize: '11px', letterSpacing: '.1em', color: 'rgba(124,122,207,.88)', textTransform: 'uppercase' }}>
              GPA: {edu.gpa}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '14px' }}>Certifications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} style={{ border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '14px', padding: '11px 15px' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(124,111,205,.82)', marginBottom: '3px' }}>{c.issuer}</div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.74)' }}>{c.name}</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.38)', marginTop: '3px' }}>Issued {c.date}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
