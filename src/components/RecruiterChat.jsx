import React, { useState, useRef, useEffect } from 'react'
import { CHAT_SYSTEM_PROMPT, CHAT_SUGGESTIONS } from '../data'

function formatAI(text) {
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

const S = {
  overlay: { position:'fixed', inset:0, background:'rgba(0,0,0,.65)', backdropFilter:'blur(6px)', zIndex:500, display:'flex', alignItems:'flex-end', justifyContent:'flex-end', padding:'24px' },
  modal: { width:'430px', maxHeight:'74vh', display:'flex', flexDirection:'column', borderRadius:'24px', border:'1px solid rgba(124,122,207,.4)', background:'rgba(8,8,16,.96)', backdropFilter:'blur(28px)', boxShadow:'0 32px 80px rgba(0,0,0,.75),0 0 60px rgba(124,122,207,.1)', overflow:'hidden', animation:'chatIn .32s cubic-bezier(.34,1.56,.64,1) both' },
  header: { padding:'18px 20px 14px', borderBottom:'1px solid rgba(255,255,255,.07)', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 },
  msgs: { flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'12px' },
  msgU: { alignSelf:'flex-end', background:'linear-gradient(135deg,rgba(124,122,207,.3),rgba(64,202,255,.2))', border:'1px solid rgba(124,122,207,.35)', borderRadius:'16px 16px 4px 16px', padding:'10px 14px', maxWidth:'86%', fontSize:'13px', lineHeight:1.6 },
  msgA: { alignSelf:'flex-start', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)', borderRadius:'4px 16px 16px 16px', padding:'10px 14px', maxWidth:'93%', fontSize:'13px', lineHeight:1.68, color:'rgba(255,255,255,.88)' },
  sugs: { padding:'10px 16px', display:'flex', flexWrap:'wrap', gap:'6px', borderTop:'1px solid rgba(255,255,255,.06)', flexShrink:0 },
  chip: { border:'1px solid rgba(124,122,207,.32)', background:'rgba(124,122,207,.08)', borderRadius:'9999px', padding:'5px 12px', fontSize:'11.5px', color:'rgba(167,143,255,.9)', cursor:'pointer', fontFamily:'inherit', transition:'all .18s' },
  inputRow: { padding:'12px 16px', borderTop:'1px solid rgba(255,255,255,.07)', display:'flex', gap:'8px', flexShrink:0 },
  input: { flex:1, background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'12px', padding:'10px 14px', color:'#fff', fontSize:'13px', fontFamily:'inherit', outline:'none' },
  sendBtn: { border:'1px solid rgba(124,122,207,.45)', background:'linear-gradient(135deg,rgba(124,122,207,.32),rgba(64,202,255,.22))', borderRadius:'10px', padding:'10px 14px', color:'#fff', cursor:'pointer', fontSize:'16px', fontFamily:'inherit' },
}

export default function RecruiterChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([{
    role: 'ai',
    text: "Hi! I am Keshvi's AI assistant. Ask me anything about her experience, projects, or why she would be a great hire."
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'smooth' })
  }, [messages, loading])

  async function send(text) {
    const q = text || input.trim()
    if (!q) return
    setInput('')
    setMessages(prev => [...prev, { role:'user', text:q }])
    setLoading(true)

    try {
      const history = messages.map(m => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.text
      }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: CHAT_SYSTEM_PROMPT,
          messages: [...history, { role:'user', content:q }]
        })
      })

      const data = await res.json()
      const reply = data.text || data.error || 'Something went wrong. Please try again.'
      setMessages(prev => [...prev, { role:'ai', text:reply }])
    } catch {
      setMessages(prev => [...prev, { role:'ai', text:'Network error. Please try again.' }])
    }
    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <>
      <style>{`
        @keyframes chatIn{from{opacity:0;transform:scale(.9) translateY(24px)}to{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        .dot{width:7px;height:7px;border-radius:50%;background:rgba(124,122,207,.65);animation:bounce .9s ease infinite;display:inline-block;margin:0 2px}
        .dot:nth-child(2){animation-delay:.15s}.dot:nth-child(3){animation-delay:.3s}
        .chat-chip:hover{background:rgba(124,122,207,.22)!important;border-color:rgba(124,122,207,.6)!important}
        .chat-msgs::-webkit-scrollbar{width:3px}.chat-msgs::-webkit-scrollbar-thumb{background:rgba(124,122,207,.3);border-radius:2px}
      `}</style>
      <div style={S.overlay} onClick={e => { if(e.target===e.currentTarget) onClose() }}>
        <div style={S.modal} onClick={e => e.stopPropagation()}>

          <div style={S.header}>
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'38px', height:'38px', borderRadius:'11px', background:'linear-gradient(135deg,rgba(124,122,207,.45),rgba(64,202,255,.3))', border:'1px solid rgba(124,122,207,.45)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'17px' }}>🤖</div>
              <div>
                <div style={{ fontSize:'13.5px', fontWeight:700 }}>Ask about Keshvi</div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,.42)' }}>AI Recruiter Assistant · Powered by Gemini</div>
              </div>
            </div>
            <button onClick={onClose} style={{ background:'none', border:'1px solid rgba(255,255,255,.12)', borderRadius:'8px', color:'rgba(255,255,255,.55)', cursor:'pointer', fontSize:'14px', padding:'4px 10px', fontFamily:'inherit' }}>✕</button>
          </div>

          <div style={S.msgs} className="chat-msgs">
            {messages.map((m, i) => (
              <div key={i} style={m.role === 'user' ? S.msgU : S.msgA}>
                {m.role === 'ai' ? formatAI(m.text) : m.text}
              </div>
            ))}
            {loading && (
              <div style={S.msgA}>
                <span className="dot"/><span className="dot"/><span className="dot"/>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {messages.length <= 2 && (
            <div style={S.sugs}>
              {(CHAT_SUGGESTIONS || []).map(s => (
                <button key={s} className="chat-chip" style={S.chip} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <div style={S.inputRow}>
            <input
              style={S.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Why should I hire her?..."
            />
            <button style={S.sendBtn} onClick={() => send()}>➤</button>
          </div>
        </div>
      </div>
    </>
  )
}
