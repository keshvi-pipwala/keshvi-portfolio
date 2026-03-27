import React, { useState } from 'react'
import { Sparkles, Mail, Linkedin, Globe, Copy, Check, Send, Radio, Shield } from 'lucide-react'
import { PROFILE } from '../data'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('Collaboration')
  const [msg, setMsg] = useState('')
  const [copied, setCopied] = useState(false)

  const signalLevel = msg.trim().length < 10 ? 1 : msg.trim().length < 40 ? 2 : msg.trim().length < 90 ? 3 : msg.trim().length < 160 ? 4 : 5

  function copyEmail() {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  function submit(e) {
    e.preventDefault()
    const subject = `${topic} — ${name}`
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inp = { width: '100%', background: 'rgba(0,0,0,.22)', border: '1px solid rgba(255,255,255,.10)', borderRadius: '12px', padding: '10px 14px', fontSize: '13px', color: '#fff', fontFamily: 'Inter, sans-serif', outline: 'none' }
  const lbl = { fontSize: '11px', color: 'rgba(255,255,255,.52)', marginBottom: '5px', display: 'block' }

  return (
    <div style={{ minHeight: '100vh', padding: '44px 28px 60px', maxWidth: '920px', margin: '0 auto' }}>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', marginBottom: '18px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Radio size={11} /> Send a signal
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', borderRadius: '9999px', padding: '3px 12px', fontSize: '11px', color: 'rgba(255,255,255,.65)' }}>
          <Shield size={11} /> spam-free, human replies
        </span>
      </div>

      <p style={{ maxWidth: '580px', fontSize: '14px', color: 'rgba(255,255,255,.62)', marginBottom: '24px' }}>
        I treat messages like product work: clear, thoughtful, and worth replying to. Drop a note & I'll respond with intent ✨.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>

        {/* Form */}
        <div style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600 }}>Transmission Console</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.48)', marginTop: '1px' }}>Signal strength updates as you type.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.18)', borderRadius: '11px', padding: '7px 13px' }}>
              <span style={{ fontSize: '11.5px', color: 'rgba(255,255,255,.45)' }}>signal</span>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                {[6, 10, 14, 18, 22].map((h, i) => (
                  <div key={i} style={{ width: '4px', borderRadius: '3px', height: `${h}px`, background: i < signalLevel ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.14)', transition: 'background .2s' }} />
                ))}
              </div>
            </div>
          </div>
          <div style={{ height: '1px', background: 'rgba(255,255,255,.10)', margin: '16px 0' }} />
          <form onSubmit={submit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11px', marginBottom: '11px' }}>
              <label><span style={lbl}>Name</span><input style={inp} value={name} onChange={e => setName(e.target.value)} placeholder="Your name" /></label>
              <label><span style={lbl}>Email</span><input style={inp} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@domain.com" /></label>
            </div>
            <label style={{ display: 'block', marginBottom: '11px' }}>
              <span style={lbl}>Topic</span>
              <select style={{ ...inp, cursor: 'pointer' }} value={topic} onChange={e => setTopic(e.target.value)}>
                <option>Collaboration</option>
                <option>Full-time role</option>
                <option>Freelance</option>
                <option>Coffee chat</option>
                <option>Other</option>
              </select>
            </label>
            <label style={{ display: 'block', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ ...lbl, marginBottom: 0 }}>Message</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,.38)' }}>{msg.length} chars</span>
              </div>
              <textarea style={{ ...inp, minHeight: '130px', resize: 'none' }} value={msg} onChange={e => setMsg(e.target.value)} placeholder="What are we building? Goal, timeline, dream outcome?" />
            </label>
            <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.08)', borderRadius: '12px', padding: '10px 18px', fontSize: '13px', fontWeight: 500, color: '#fff', fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>
              <Send size={14} /> Send Signal
            </button>
          </form>
        </div>

        {/* Right col */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

          <div style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '3px' }}>Direct Route</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.48)', marginBottom: '14px' }}>Fastest way to reach me is via email.</div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.18)', borderRadius: '12px', padding: '12px', marginBottom: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={15} /></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{PROFILE.email}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>Email me anytime</div>
                </div>
              </div>
              <button onClick={copyEmail} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.07)', borderRadius: '9px', padding: '6px 11px', fontSize: '11.5px', color: 'rgba(255,255,255,.68)', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                {copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
              </button>
            </div>

            {/* LinkedIn */}
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.18)', borderRadius: '13px', padding: '13px', textDecoration: 'none', color: 'rgba(255,255,255,.68)', marginBottom: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Linkedin size={15} /></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>LinkedIn</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>Professional updates + roles</div>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,.38)' }}>open →</span>
            </a>

            {/* Previous portfolio */}
            <a href={PROFILE.previousPortfolio} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(0,0,0,.18)', borderRadius: '13px', padding: '13px', textDecoration: 'none', color: 'rgba(255,255,255,.68)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Globe size={15} /></div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Previous Portfolio</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.45)' }}>Vercel deployment</div>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,.38)' }}>open →</span>
            </a>
          </div>

          <div style={{ borderRadius: '22px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.05)', padding: '22px', backdropFilter: 'blur(14px)' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '7px' }}>Mini Mission Brief</div>
            <p style={{ fontSize: '13px', lineHeight: 1.72, color: 'rgba(255,255,255,.66)', marginBottom: '14px' }}>The fastest "yes" is a clear goal + constraints + timeline.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px' }}>
              <div style={{ background: 'rgba(0,0,0,.2)', border: '1px solid rgba(255,255,255,.10)', borderRadius: '11px', padding: '11px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.38)', marginBottom: '3px' }}>BEST SUBJECT LINE</div>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>"Role — Need + Timeline"</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,.2)', border: '1px solid rgba(255,255,255,.10)', borderRadius: '11px', padding: '11px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.38)', marginBottom: '3px' }}>WHAT TO INCLUDE</div>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>Goal · Stack · Timeline</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
