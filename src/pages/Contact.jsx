import React, { useState } from 'react'
import { PROFILE } from '../data'

const LBL = { fontSize:'11px', color:'rgba(255,255,255,.45)', marginBottom:'6px', display:'block', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase' }
const INP = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'12px', padding:'12px 16px', color:'#fff', fontSize:'14px', fontFamily:'inherit', outline:'none', boxSizing:'border-box' }

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    window.location.href = 'mailto:'+PROFILE.email+'?subject=Reaching out from your portfolio — '+encodeURIComponent(form.name)+'&body='+encodeURIComponent(form.message)
    setSent(true)
  }

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'60px 40px', maxWidth:'900px', margin:'0 auto' }} className="page-pad">

      <div style={{ marginBottom:'48px' }}>
        <p style={{ fontSize:'11px', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(167,143,255,.7)', marginBottom:'10px', fontWeight:600 }}>CONTACT</p>
        <h1 style={{ fontSize:'clamp(32px,5vw,56px)', fontWeight:900, letterSpacing:'-.03em', lineHeight:1.05, marginBottom:'16px' }}>
          {"Let's build"}<br/>
          <span style={{ background:'linear-gradient(135deg,#a78fff,#40caff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>something great.</span>
        </h1>
        <p style={{ fontSize:'15px', color:'rgba(255,255,255,.45)', lineHeight:1.75, maxWidth:'480px' }}>
          Open to SWE, AI/PM, and data engineering roles. I respond to every message that tells me what you are building and why it matters.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'48px', alignItems:'start' }}>

        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          {[
            { icon:'✉️', label:'Email', value:PROFILE.email, href:'mailto:'+PROFILE.email },
            { icon:'💼', label:'LinkedIn', value:'keshvi-pipwala', href:PROFILE.linkedin },
            { icon:'⚡', label:'GitHub', value:'keshvi-pipwala', href:PROFILE.github },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'center', gap:'16px', padding:'16px 20px', borderRadius:'16px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(255,255,255,.03)', textDecoration:'none', transition:'border-color .2s' }}>
              <span style={{ fontSize:'22px', width:'40px', height:'40px', borderRadius:'12px', background:'rgba(124,122,207,.15)', border:'1px solid rgba(124,122,207,.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,.35)', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', marginBottom:'2px' }}>{c.label}</div>
                <div style={{ fontSize:'14px', color:'rgba(255,255,255,.85)', fontWeight:500 }}>{c.value}</div>
              </div>
            </a>
          ))}

          <div style={{ marginTop:'8px', padding:'20px', borderRadius:'16px', border:'1px solid rgba(167,143,255,.2)', background:'linear-gradient(135deg,rgba(124,122,207,.08),rgba(64,202,255,.04))' }}>
            
          </div>
        </div>

        {sent ? (
          <div style={{ borderRadius:'20px', border:'1px solid rgba(100,220,100,.3)', background:'rgba(100,220,100,.06)', padding:'40px', textAlign:'center' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>🎉</div>
            <div style={{ fontWeight:700, fontSize:'20px', marginBottom:'8px' }}>Email client opened!</div>
            <div style={{ color:'rgba(255,255,255,.45)', fontSize:'14px' }}>Looking forward to speaking with you.</div>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
            <div>
              <label style={LBL}>Your Name</label>
              <input style={INP} required value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="First and last name" />
            </div>
            <div>
              <label style={LBL}>Email Address</label>
              <input style={INP} required type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="you@company.com" />
            </div>
            <div>
              <label style={LBL}>What are you building?</label>
              <textarea style={{...INP, resize:'vertical'}} required rows={5} value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} placeholder="Tell me about the role, the team, and what problem you are solving. The more specific you are, the better my response." />
            </div>
            <button type="submit" style={{ padding:'14px 36px', borderRadius:'14px', background:'linear-gradient(135deg,rgba(124,122,207,.5),rgba(64,202,255,.35))', border:'1px solid rgba(124,122,207,.6)', color:'#fff', fontSize:'14px', fontWeight:700, cursor:'pointer', fontFamily:'inherit', letterSpacing:'.02em' }}>
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
