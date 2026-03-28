import React, { useState } from 'react'
import { PROFILE } from '../data'

const INP = {
  width: '100%',
  background: 'rgba(255,255,255,.04)',
  border: '1px solid rgba(255,255,255,.1)',
  borderRadius: '12px',
  padding: '13px 16px',
  color: '#fff',
  fontSize: '14px',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color .2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    window.location.href = 'mailto:' + PROFILE.email + '?subject=Reaching out — ' + encodeURIComponent(form.name) + '&body=' + encodeURIComponent(form.message)
    setSent(true)
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 40px', maxWidth:'860px', margin:'0 auto' }} className="page-pad">

      <div style={{ marginBottom:'52px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.7)', marginBottom:'12px', fontWeight:600 }}>CONTACT</p>
        <h1 style={{ fontSize:'clamp(36px,5.5vw,64px)', fontWeight:900, letterSpacing:'-.035em', lineHeight:1.0, marginBottom:'18px' }}>
          {"Let's build"}
          <br/>
          <span style={{ background:'linear-gradient(135deg,#a78fff 0%,#40caff 50%,#ff80c0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            something great.
          </span>
        </h1>
        <p style={{ fontSize:'15px', color:'rgba(255,255,255,.42)', lineHeight:1.8, maxWidth:'460px' }}>
          Open to SWE, AI/PM, and data engineering roles. I respond to every message that tells me what you are building and why it matters.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:'52px', alignItems:'start' }}>

        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          {[
            { icon:'✉️', label:'Email', value: PROFILE.email, href:'mailto:'+PROFILE.email },
            { icon:'💼', label:'LinkedIn', value:'keshvi-pipwala', href: PROFILE.linkedin },
            { icon:'⚡', label:'GitHub', value:'keshvi-pipwala', href: PROFILE.github },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 18px', borderRadius:'16px', border:'1px solid rgba(255,255,255,.07)', background:'rgba(255,255,255,.03)', textDecoration:'none', transition:'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(124,122,207,.4)'; e.currentTarget.style.background='rgba(124,122,207,.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,.07)'; e.currentTarget.style.background='rgba(255,255,255,.03)' }}
            >
              <div style={{ width:'42px', height:'42px', borderRadius:'12px', background:'linear-gradient(135deg,rgba(124,122,207,.25),rgba(64,202,255,.15))', border:'1px solid rgba(124,122,207,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', flexShrink:0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize:'10px', color:'rgba(255,255,255,.32)', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'2px' }}>{c.label}</div>
                <div style={{ fontSize:'13px', color:'rgba(255,255,255,.82)', fontWeight:500 }}>{c.value}</div>
              </div>
              <span style={{ marginLeft:'auto', color:'rgba(255,255,255,.2)', fontSize:'16px' }}>→</span>
            </a>
          ))}

          <div style={{ marginTop:'8px', padding:'18px', borderRadius:'16px', background:'linear-gradient(135deg,rgba(124,122,207,.1),rgba(64,202,255,.06))', border:'1px solid rgba(124,122,207,.2)' }}>
            <div style={{ fontSize:'12px', color:'rgba(255,255,255,.45)', lineHeight:1.8 }}>
              💡 <strong style={{ color:'rgba(167,143,255,.9)' }}>Best way to reach me:</strong> Send a message through the form with the role details. I respond within 24 hours.
            </div>
          </div>
        </div>

        {sent ? (
          <div style={{ borderRadius:'22px', border:'1px solid rgba(100,220,100,.3)', background:'rgba(100,220,100,.06)', padding:'48px', textAlign:'center' }}>
            <div style={{ fontSize:'52px', marginBottom:'18px' }}>🎉</div>
            <div style={{ fontWeight:800, fontSize:'22px', marginBottom:'10px' }}>Message sent!</div>
            <div style={{ color:'rgba(255,255,255,.42)', fontSize:'14px', lineHeight:1.7 }}>Your email client opened.<br/>Looking forward to connecting.</div>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
              <div>
                <label style={{ fontSize:'11px', color:'rgba(255,255,255,.4)', marginBottom:'6px', display:'block', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase' }}>Name</label>
                <input style={INP} required value={form.name} onChange={e => setForm(f => ({...f, name:e.target.value}))} placeholder="Your name" />
              </div>
              <div>
                <label style={{ fontSize:'11px', color:'rgba(255,255,255,.4)', marginBottom:'6px', display:'block', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase' }}>Email</label>
                <input style={INP} required type="email" value={form.email} onChange={e => setForm(f => ({...f, email:e.target.value}))} placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label style={{ fontSize:'11px', color:'rgba(255,255,255,.4)', marginBottom:'6px', display:'block', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase' }}>What are you building?</label>
              <textarea style={{...INP, resize:'vertical'}} required rows={6} value={form.message} onChange={e => setForm(f => ({...f, message:e.target.value}))} placeholder="Tell me about the role, the team, and the problem you are solving. The more specific, the better." />
            </div>
            <button type="submit" style={{ alignSelf:'flex-start', padding:'14px 40px', borderRadius:'14px', background:'linear-gradient(135deg,rgba(124,122,207,.55),rgba(64,202,255,.38))', border:'1px solid rgba(124,122,207,.65)', color:'#fff', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:'inherit', letterSpacing:'.03em', transition:'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(124,122,207,.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
            >
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
