import React, { useState, useMemo } from 'react'
import { Sparkles, Search, ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../data'

const tag = { display: 'inline-flex', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', borderRadius: '9999px', padding: '2px 9px', fontSize: '11px', color: 'rgba(255,255,255,.72)' }

function bold(text) {
  const parts = text.split(/\*\*([^*]+)\*\*/g)
  return parts.map((p, i) => i % 2 === 1 ? <strong key={i} style={{ color: '#fff', fontWeight: 600 }}>{p}</strong> : p)
}

const FILTERS = ['All', 'AI/ML', 'Data', 'Healthcare']

export default function Projects() {
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('All')

  const visible = useMemo(() => PROJECTS.filter(p => {
    const catOk = filter === 'All' || p.category === filter
    const qOk = !q || (p.title + p.subtitle + p.tags.join(' ') + p.bullets.join(' ')).toLowerCase().includes(q.toLowerCase())
    return catOk && qOk
  }), [q, filter])

  return (
    <div style={{ minHeight: '100vh', padding: '44px 28px 60px', maxWidth: '920px', margin: '0 auto' }}>

      <div style={{ marginBottom: '20px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Sparkles size={11} /> Projects
        </span>
      </div>

      {/* Search + Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '14px', padding: '9px 14px', flex: '1', maxWidth: '400px' }}>
          <Search size={15} color="rgba(255,255,255,.45)" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search (e.g., OpenAI, PyTorch, FastAPI)"
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '13px', fontFamily: 'Inter, sans-serif', width: '100%', outline: 'none' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ border: '1px solid rgba(255,255,255,.10)', background: filter === f ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.06)', borderColor: filter === f ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.10)', borderRadius: '9999px', padding: '4px 11px', fontSize: '11.5px', color: filter === f ? '#fff' : 'rgba(255,255,255,.62)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all .2s' }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
        {visible.map(proj => (
          <div key={proj.id} style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>

            {/* Thumb */}
            <div style={{ margin: '-22px -22px 16px', borderRadius: '22px 22px 0 0', height: '160px', background: 'linear-gradient(135deg, rgba(124,122,207,.25), rgba(64,202,255,.18))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', overflow: 'hidden' }}>
              {proj.emoji}
            </div>

            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', flexShrink: 0 }}>
                  {proj.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13.5px' }}>{proj.title}</div>
                  <div style={{ fontSize: '11.5px', color: 'rgba(255,255,255,.5)' }}>{proj.subtitle}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                {proj.live && <a href={proj.live} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', border: '1px solid rgba(64,202,255,.3)', background: 'rgba(64,202,255,.15)', borderRadius: '9999px', padding: '4px 10px', fontSize: '11px', color: '#8BE0FF', textDecoration: 'none' }}><ExternalLink size={11} /> Live</a>}
                {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', borderRadius: '9999px', padding: '4px 10px', fontSize: '11px', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}><Github size={11} /> Code</a>}
              </div>
            </div>

            {/* Impact */}
            <div style={{ background: 'rgba(0,0,0,.22)', border: '1px solid rgba(255,255,255,.10)', borderRadius: '12px', padding: '11px', fontSize: '12px', color: 'rgba(255,255,255,.74)', margin: '10px 0', lineHeight: 1.6 }}>
              <span style={{ color: 'rgba(255,255,255,.5)' }}>Impact: </span>{bold(proj.impact)}
            </div>

            {/* Bullets */}
            <ul style={{ listStyle: 'disc', paddingLeft: '17px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {proj.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: '11.5px', color: 'rgba(255,255,255,.72)', lineHeight: 1.72 }}>{b}</li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
              {proj.tags.map(t => <span key={t} style={tag}>{t}</span>)}
            </div>

          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px', color: 'rgba(255,255,255,.45)' }}>
          No projects match your search or filter.
        </div>
      )}
    </div>
  )
}
