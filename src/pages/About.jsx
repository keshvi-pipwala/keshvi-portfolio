import React from 'react'
import { Sparkles } from 'lucide-react'
import { SKILLS } from '../data'

const card = { borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }
const tag = { display: 'inline-flex', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', borderRadius: '9999px', padding: '2px 9px', fontSize: '11px', color: 'rgba(255,255,255,.72)' }

export default function About() {
  return (
    <div style={{ minHeight: '100vh', padding: '44px 28px 60px', maxWidth: '920px', margin: '0 auto' }}>

      <div style={{ marginBottom: '22px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Sparkles size={11} /> About
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>

        <div style={card}>
          <h2 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '14px' }}>My story</h2>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,.76)', marginBottom: '11px' }}>
            I'm driven by the belief that data, when thoughtfully transformed into products, can change how people learn, work, and access information. I entered tech not to chase trends — but to solve real problems at scale.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,.7)', marginBottom: '11px' }}>
            I was drawn early to the intersection of <strong>technical depth and product strategy</strong> — understanding not just how systems work, but why they matter to real users. That curiosity led me from ETL pipelines and ML models to leading cross-functional teams and defining product roadmaps.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,.7)', marginBottom: '11px' }}>
            Today, I build AI-powered platforms with a <strong>4.0 GPA</strong> at ASU, engineer data infrastructure for NASA-affiliated programs, and led a student analytics system serving <strong>5,000+ users</strong> with an 18% retention boost.
          </p>
          <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,.76)' }}>
            I see myself as a <strong>product-minded engineer</strong> — someone who builds things that scale calmly, fail gracefully, and create measurable value for real users.
          </p>
        </div>

        <div style={card}>
          <h2 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '14px' }}>Core skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {SKILLS.map(s => <span key={s} style={tag}>{s}</span>)}
          </div>
          <p style={{ marginTop: '13px', fontSize: '12px', color: 'rgba(255,255,255,.45)' }}>
            Broad stack across data engineering, ML, product, and cloud infrastructure.
          </p>
        </div>

      </div>
    </div>
  )
}
