import React from 'react'
import { Sparkles } from 'lucide-react'
import { EXPERIENCE } from '../data'

const tag = { display: 'inline-flex', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', borderRadius: '9999px', padding: '2px 9px', fontSize: '11px', color: 'rgba(255,255,255,.72)' }

function bold(text) {
  const parts = text.split(/\*\*([^*]+)\*\*/g)
  return parts.map((p, i) => i % 2 === 1 ? <strong key={i} style={{ color: '#fff', fontWeight: 600 }}>{p}</strong> : p)
}

export default function Experience() {
  return (
    <div style={{ minHeight: '100vh', padding: '44px 28px 60px', maxWidth: '920px', margin: '0 auto' }}>

      <div style={{ marginBottom: '22px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Sparkles size={11} /> Professional Experience
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {EXPERIENCE.map((exp, i) => (
          <div key={i} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                  {exp.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>{exp.role}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '1px' }}>{exp.company}</div>
                </div>
              </div>
              <span style={{ whiteSpace: 'nowrap', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', borderRadius: '9999px', padding: '3px 13px', fontSize: '12px', color: 'rgba(255,255,255,.62)' }}>
                {exp.time}
              </span>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.68)', lineHeight: 1.72, margin: '10px 0' }}>{exp.summary}</p>

            {exp.bullets.length > 0 && (
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '14px' }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.74)', lineHeight: 1.72 }}>
                    {bold(b)}
                  </li>
                ))}
              </ul>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
              {exp.stack.map(s => <span key={s} style={tag}>{s}</span>)}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
