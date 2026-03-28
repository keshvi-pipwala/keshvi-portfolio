import React, { useState, useRef, useEffect } from 'react'
import { CHAT_SYSTEM_PROMPT, CHAT_SUGGESTIONS } from '../data'

function formatAI(text) {
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

export default function RecruiterChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { role:'ai', text:"Hi! I am Keshvi's AI assistant. Ask me anything about her experience, projects, or why she would be a great hire. I give direct answers with real numbers." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [messages, loading])

  async function send(text) {
    const q = text || input.trim()
    if (!q) return
    setInput('')
    setMessages(prev => [...prev, { role:'user', text:q }])
    setLoading(true)
    try {
      const history = messages.map(m => ({ role:m.role==='ai'?'assistant':'user', content:m.text }))
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          model:'claude-sonnet-4-20250514',
          max_tokens:1000,
          system:CHAT_SYSTEM_PROMPT,
          messages:[...history, { role:'user', content:q }],
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Something went wrong. Please try again.'
      setMessages(prev => [...prev, { role:'ai', text:reply }])
    } catch {
      setMessages(prev => [...prev, { role:'ai', text:'Network error. Please try again.' }])
    }
    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="chat-overlay" onClick={e=>{ if(e.target===e.currentTarget) onClose() }}>
        <div className="chat-modal" onClick={e=>e.stopPropagation()}>
          <div className="chat-hdr">
            <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{ width:'38px', height:'38px', borderRadius:'11px', background:'linear-gradient(135deg,rgba(124,122,207,.45),rgba(64,202,255,.3))', border:'1px solid rgba(124,122,207,.45)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'17px' }}>🤖</div>
              <div>
                <div style={{ fontSize:'13.5px', fontWeight:700 }}>Ask about Keshvi</div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,.42)' }}>AI Recruiter Assistant · Powered by Claude</div>
              </div>
            </div>
            <button onClick={onClose} style={{ background:'none', border:'1px solid rgba(255,255,255,.12)', borderRadius:'8px', color:'rgba(255,255,255,.55)', cursor:'pointer', fontSize:'14px', padding:'4px 10px', transition:'all .2s', fontFamily:'inherit' }}>✕</button>
          </div>
          <div className="chat-msgs">
            {messages.map((m,i) => (
              <div key={i} className={m.role==='user'?'msg-u':'msg-a'}>
                {m.role==='ai' ? formatAI(m.text) : m.text}
              </div>
            ))}
            {loading && <div className="msg-a typing"><div className="dot"/><div className="dot"/><div className="dot"/></div>}
            <div ref={bottomRef}/>
          </div>
          {messages.length <= 2 && (
            <div className="sugs">
              {CHAT_SUGGESTIONS.slice(0,4).map(s => <button key={s} className="chip" onClick={()=>send(s)}>{s}</button>)}
            </div>
          )}
          <div className="inp-row">
            <input className="inp" value={input} onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&!e.shiftKey&&send()}
              placeholder="Why should I hire her? What can she do?..."/>
            <button className="send-btn" onClick={()=>send()}>➤</button>
          </div>
        </div>
      </div>
    </>
  )
}
