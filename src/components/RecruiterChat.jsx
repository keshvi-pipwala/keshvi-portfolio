import React, { useState, useRef, useEffect } from 'react'
import { CHAT_SYSTEM_PROMPT = '', CHAT_SUGGESTIONS = [] } from '../data'

function formatAI(text) {
  return text.split(/\*\*([^*]+)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i} style={{ color:'#fff', fontWeight:700 }}>{p}</strong> : p
  )
}

const CSS = '.chat-overlay{position:fixed;inset:0;background:rgba(0,0,0,.65);backdrop-filter:blur(6px);z-index:500;display:flex;align-items:flex-end;justify-content:flex-end;padding:24px;}.chat-modal{width:430px;max-height:74vh;display:flex;flex-direction:column;border-radius:24px;border:1px solid rgba(124,122,207,.4);background:rgba(8,8,16,.96);backdrop-filter:blur(28px);box-shadow:0 32px 80px rgba(0,0,0,.75),0 0 60px rgba(124,122,207,.1);overflow:hidden;animation:chatIn .32s cubic-bezier(.34,1.56,.64,1) both;}@keyframes chatIn{from{opacity:0;transform:scale(.9) translateY(24px)}to{opacity:1;transform:scale(1) translateY(0)}}.chat-hdr{padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}.chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;}.chat-msgs::-webkit-scrollbar{width:3px}.chat-msgs::-webkit-scrollbar-thumb{background:rgba(124,122,207,.3);border-radius:2px}.msg-u{align-self:flex-end;background:linear-gradient(135deg,rgba(124,122,207,.3),rgba(64,202,255,.2));border:1px solid rgba(124,122,207,.35);border-radius:16px 16px 4px 16px;padding:10px 14px;max-width:86%;font-size:13px;line-height:1.6;}.msg-a{align-self:flex-start;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:4px 16px 16px 16px;padding:10px 14px;max-width:93%;font-size:13px;line-height:1.68;color:rgba(255,255,255,.88);}.typing{display:flex;gap:5px;padding:12px 16px;align-items:center;}.dot{width:7px;height:7px;border-radius:50%;background:rgba(124,122,207,.65);animation:bounce .9s ease infinite;}.dot:nth-child(2){animation-delay:.15s}.dot:nth-child(3){animation-delay:.3s}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}.sugs{padding:10px 16px;display:flex;flex-wrap:wrap;gap:6px;border-top:1px solid rgba(255,255,255,.06);}.chip{border:1px solid rgba(124,122,207,.32);background:rgba(124,122,207,.08);border-radius:9999px;padding:5px 12px;font-size:11.5px;color:rgba(167,143,255,.9);cursor:pointer;transition:all .18s;font-family:inherit;}.chip:hover{background:rgba(124,122,207,.2);border-color:rgba(124,122,207,.55);}.inp-row{padding:12px 16px;border-top:1px solid rgba(255,255,255,.07);display:flex;gap:8px;flex-shrink:0;}.inp{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:10px 14px;color:#fff;font-size:13px;font-family:inherit;outline:none;transition:border-color .2s;}.inp:focus{border-color:rgba(124,122,207,.55);}.send-btn{border:1px solid rgba(124,122,207,.45);background:linear-gradient(135deg,rgba(124,122,207,.32),rgba(64,202,255,.22));border-radius:10px;padding:10px 14px;color:#fff;cursor:pointer;font-size:16px;transition:transform .2s;font-family:inherit;}.send-btn:hover{transform:scale(1.1);}@media(max-width:768px){.chat-modal{width:calc(100vw - 24px);max-height:80vh;}.chat-overlay{padding:12px;}}'

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
      <style>{CSS}</style>
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
