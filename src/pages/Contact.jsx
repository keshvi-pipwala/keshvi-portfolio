import React, { useState } from 'react'
import { PROFILE } from '../data'

const CSS = '.cinp{width:100%;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:11px 14px;color:#fff;font-size:13px;font-family:inherit;outline:none;transition:border-color .2s;resize:vertical;}.cinp:focus{border-color:rgba(124,122,207,.55);}.cbtn2{transition:all .22s;}.cbtn2:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(0,0,0,.4);}'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    window.location.href = 'mailto:'+PROFILE.email+'?subject=Portfolio Inquiry from '+encodeURIComponent(form.name)+'&body='+encodeURIComponent(form.message)
    setSent(true)
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'44px 28px 60px', maxWidth:'800px', margin:'0 auto' }} className="page-pad">
      <style>{CSS}</style>

      <div style={{ marginBottom:'32px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.8)', marginBottom:'8px', fontWeight:600 }}>GET IN TOUCH</p>
        <h1 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, letterSpacing:'-.025em', lineHeight:1.1, marginBottom:'10px' }}>Let's Talk</h1>
        <p style={{ fontSize:'14px', color:'rgba(255,255,255,.45)', lineHeight:1.7 }}>Open to SWE, PM, and data roles. I respond to clear, specific messages.</p>
      </div>

      <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'36px' }}>
        {[
          { label:'Email', value:PROFILE.email, href:'mailto:'+PROFILE.email, icon:'✉️' },
          { label:'LinkedIn', value:'linkedin.com/in/keshvi-pipwala', href:PROFILE.linkedin, icon:'💼' },
          { label:'GitHub', value:'github.com/keshvi-pipwala', href:PROFILE.github, icon:'⚡' },
        ].map(c => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="cbtn2"
            style={{ display:'inline-flex', alignItems:'center', gap:'8px', border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.05)', borderRadius:'12px', padding:'10px 16px', color:'rgba(255,255,255,.8)', textDecoration:'none', fontSize:'13px' }}>
            <span>{c.icon}</span>
            <span style={{ fontWeight:600 }}>{c.label}</span>
            <span style={{ color:'rgba(255,255,255,.4)', fontSize:'12px' }}>{c.value}</span>
          </a>
        ))}
      </div>

      {sent ? (
        <div style={{ borderRadius:'20px', border:'1px solid rgba(100,220,100,.35)', background:'rgba(100,220,100,.08)', padding:'32px', textAlign:'center' }}>
          <div style={{ fontSize:'40px', marginBottom:'12px' }}>✅</div>
          <div style={{ fontWeight:700, fontSize:'18px', marginBottom:'8px' }}>Email client opened!</div>
          <div style={{ color:'rgba(255,255,255,.55)', fontSize:'14px' }}>Reach out directly at {PROFILE.email}</div>
        </div>
      ) : (
        <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }}>
            <div>
              <label style={{ fontSize:'11px', color:'rgba(255,255,255,.52)', marginBottom:'5px', display:'block', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase' }}>NAME</label>
              <input className="cinp" required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Your name" />
            </div>
            <div>
              <label style={{ fontSize:'11px', color:'rgba(255,255,255,.52)', marginBottom:'5px', display:'block', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase' }}>EMAIL</label>
              <input className="cinp" required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label style={{ fontSize:'11px', color:'rgba(255,255,255,.52)', marginBottom:'5px', display:'block', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase' }}>MESSAGE</label>
            <textarea className="cinp" required rows={5} value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} placeholder="Tell me about the role or project..." />
          </div>
          <button type="submit" style={{ alignSelf:'flex-start', padding:'13px 32px', borderRadius:'14px', background:'linear-gradient(135deg,rgba(124,122,207,.35),rgba(64,202,255,.22))', border:'1px solid rgba(124,122,207,.5)', color:'#fff', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:'inherit' }}>
            Send Message ➤
          </button>
        </form>
      )}
    </div>
  )
}
