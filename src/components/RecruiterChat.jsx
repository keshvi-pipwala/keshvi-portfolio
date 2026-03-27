import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Trash2, Send, Bot, User, Sparkles } from 'lucide-react'
import { CHAT_SYSTEM_PROMPT, CHAT_SUGGESTIONS } from '../data'

function formatAI(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:13px;font-weight:600;color:rgba(255,255,255,.9);margin:8px 0 3px">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:14px;font-weight:700;color:#fff;margin:10px 0 4px">$1</h2>')
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>)+/g, (m) => `<ul style="list-style:disc;padding-left:18px;margin:6px 0;display:flex;flex-direction:column;gap:3px">${m}</ul>`)
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

const S = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 300,
    background: 'rgba(0,0,0,.82)',
    backdropFilter: 'blur(5px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  modal: {
    width: '95vw', maxWidth: '860px',
    height: '90vh', maxHeight: '780px',
    display: 'flex', flexDirection: 'column',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,.10)',
    background: 'linear-gradient(135deg, rgba(0,0,0,.93), rgba(0,0,0,.88))',
    backdropFilter: 'blur(22px)',
    boxShadow: '0 40px 100px rgba(0,0,0,.65)',
  },
  bdr: { borderBottom: '1px solid rgba(255,255,255,.10)' },
}

export function RecruiterFAB({ onClick }) {
  return (
    <div style={{ position: 'fixed', bottom: '18px', right: '18px', zIndex: 200 }}>
      <button
        onClick={onClick}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          border: '1px solid rgba(255,255,255,.10)',
          background: 'rgba(255,255,255,.09)',
          borderRadius: '15px', padding: '11px 17px',
          color: '#fff', cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 18px 70px rgba(0,0,0,.45)',
          transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.15)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.09)'}
      >
        <span style={{
          width: '38px', height: '38px',
          borderRadius: '11px',
          border: '1px solid rgba(255,255,255,.10)',
          background: 'rgba(0,0,0,.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <MessageSquare size={17} />
        </span>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.2 }}>Recruiter Assistant</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.58)' }}>Ask about Keshvi</div>
        </div>
        <Sparkles size={14} style={{ color: 'rgba(255,255,255,.55)' }} />
      </button>
    </div>
  )
}

export default function RecruiterChat({ open, onClose }) {
  const [messages, setMessages] = useState([{
    id: 'init', role: 'assistant',
    content: "Hello! I'm here to help you evaluate <strong>Keshvi Pipwala</strong> as a candidate. Ask me about her technical skills, experience, projects, or request a candidate summary. What would you like to know?",
    html: true, ts: new Date(),
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showChips, setShowChips] = useState(true)
  const [userCount, setUserCount] = useState(0)
  const messagesRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, loading])

  if (!open) return null

  const ts = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  async function send(text) {
    if (!text.trim() || loading) return
    setShowChips(false)
    const userMsg = { id: Date.now() + 'u', role: 'user', content: text, html: false, ts: new Date() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setUserCount(c => c + 1)
    setLoading(true)

    const history = [...messages.filter(m => m.id !== 'init'), userMsg].map(m => ({
      role: m.role,
      content: m.html ? m.content.replace(/<[^>]+>/g, '') : m.content,
    }))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, system: CHAT_SYSTEM_PROMPT }),
      })
      const data = await res.json()
      const reply = data.reply || data.text || 'Something went wrong. Please contact Keshvi at kpipwala@asu.edu'
      setMessages(prev => [...prev, {
        id: Date.now() + 'a', role: 'assistant',
        content: formatAI(reply), html: true, ts: new Date(),
      }])
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now() + 'e', role: 'assistant',
        content: 'Sorry, something went wrong. Please reach out to Keshvi directly at <a href="mailto:kpipwala@asu.edu" style="color:#8BE0FF">kpipwala@asu.edu</a>',
        html: true, ts: new Date(),
      }])
    }
    setLoading(false)
  }

  function clear() {
    setMessages([{
      id: 'init', role: 'assistant',
      content: "Conversation cleared. Ready to help evaluate <strong>Keshvi Pipwala</strong>. What would you like to know?",
      html: true, ts: new Date(),
    }])
    setShowChips(true)
    setUserCount(0)
  }

  const bdrStyle = { borderBottom: '1px solid rgba(255,255,255,.10)' }

  return (
    <div style={S.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={S.modal}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', ...bdrStyle, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '11px', border: '1px solid rgba(255,255,255,.10)', background: 'linear-gradient(135deg, rgba(255,255,255,.12), rgba(255,255,255,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={17} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Recruiter Assistant</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.42)', marginTop: '1px' }}>
                {userCount} questions • {messages.filter(m => m.role === 'assistant').length} responses
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '7px' }}>
            <button onClick={clear} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.07)', borderRadius: '9px', padding: '5px 11px', fontSize: '11.5px', fontWeight: 500, color: 'rgba(255,255,255,.62)', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              <Trash2 size={12} /> Clear
            </button>
            <button onClick={onClose} style={{ width: '34px', height: '34px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,.56)', fontFamily: 'Inter, sans-serif' }}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Chips */}
        {showChips && (
          <div style={{ padding: '10px 20px', ...bdrStyle, flexShrink: 0 }}>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.48)', marginBottom: '7px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Sparkles size={11} /> Quick questions for recruiters:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {CHAT_SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)} disabled={loading} style={{ border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.07)', borderRadius: '9999px', padding: '5px 13px', fontSize: '11.5px', fontWeight: 500, color: 'rgba(255,255,255,.72)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all .2s' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div ref={messagesRef} style={{ flex: 1, overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {messages.map(msg => {
            const isUser = msg.role === 'user'
            return (
              <div key={msg.id} className="msg-anim" style={{ display: 'flex', gap: '11px', flexDirection: isUser ? 'row-reverse' : 'row' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {isUser ? <User size={13} /> : <Bot size={13} />}
                </div>
                <div style={{ maxWidth: '85%' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: isUser ? 'rgba(100,180,255,.58)' : 'rgba(255,255,255,.38)', marginBottom: '5px', textAlign: isUser ? 'right' : 'left' }}>
                    {isUser ? 'RECRUITER' : 'ASSISTANT'} • {ts(msg.ts)}
                  </div>
                  <div
                    style={{
                      borderRadius: '14px', padding: '11px 14px',
                      fontSize: '13px', lineHeight: 1.72,
                      background: isUser ? 'linear-gradient(135deg, rgba(64,120,255,.22), rgba(64,120,255,.14))' : 'linear-gradient(135deg, rgba(255,255,255,.09), rgba(255,255,255,.04))',
                      border: isUser ? '1px solid rgba(64,120,255,.2)' : '1px solid rgba(255,255,255,.10)',
                      color: isUser ? '#fff' : 'rgba(255,255,255,.88)',
                    }}
                    {...(msg.html ? { dangerouslySetInnerHTML: { __html: msg.content } } : { children: msg.content })}
                  />
                </div>
              </div>
            )
          })}
          {loading && (
            <div className="msg-anim" style={{ display: 'flex', gap: '11px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', border: '1px solid rgba(255,255,255,.10)', background: 'rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={13} />
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(255,255,255,.38)', marginBottom: '5px' }}>ASSISTANT</div>
                <div style={{ borderRadius: '14px', padding: '14px 16px', background: 'linear-gradient(135deg, rgba(255,255,255,.09), rgba(255,255,255,.04))', border: '1px solid rgba(255,255,255,.10)' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span className="dot" /><span className="dot" /><span className="dot" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.10)', display: 'flex', alignItems: 'flex-end', flexShrink: 0 }}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => {
              setInput(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'
            }}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) } }}
            placeholder="Ask about candidate fit, technical skills, experience, or projects..."
            rows={1}
            style={{ flex: 1, background: 'none', border: 'none', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '13px', padding: '15px 18px', outline: 'none', resize: 'none', minHeight: '50px', maxHeight: '120px' }}
          />
          <button
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            style={{ padding: '13px 18px', background: 'rgba(255,255,255,.09)', border: 'none', borderLeft: '1px solid rgba(255,255,255,.10)', borderRadius: '0 0 20px 0', color: '#fff', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap', opacity: loading || !input.trim() ? .45 : 1 }}
          >
            <Send size={14} /> Send
          </button>
        </div>

      </div>
    </div>
  )
}
