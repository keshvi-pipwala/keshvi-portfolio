import React, { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { INTRO, PROFILE } from '../data'

// Cinematic first-visit intro. Voice + synced captions + audio-reactive ring.
// Degrades gracefully: no audio file → timed captions; reduced motion → static
// version with no pulse/spin/morph, simple fades only.
// On finish, the avatar morphs into the hero portrait (#hero-portrait) before the overlay dissolves.
export default function IntroAvatar({ onFinish, reduced = false }) {
  const [phase, setPhase] = useState('idle') // idle | playing | leaving
  const [lineIdx, setLineIdx] = useState(-1)
  const audioRef = useRef(null)
  const rafRef = useRef(0)
  const timersRef = useRef([])
  const overlayRef = useRef(null)
  const avatarRef = useRef(null)
  const ringRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') finish(true) }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(rafRef.current)
      timersRef.current.forEach(clearTimeout)
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = '' }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scheduleCaptions = () => {
    INTRO.lines.forEach((l, i) => {
      timersRef.current.push(setTimeout(() => setLineIdx(i), l.at * 1000))
    })
    timersRef.current.push(setTimeout(() => finish(false), INTRO.duration * 1000))
  }

  // Gentle synthetic pulse when we have no audio signal to react to
  const fakePulse = () => {
    if (reduced) return
    const loop = t => {
      if (ringRef.current) {
        const v = 1 + 0.06 * Math.abs(Math.sin(t / 320)) + 0.03 * Math.abs(Math.sin(t / 97))
        ringRef.current.style.transform = `scale(${v})`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
  }

  const startedRef = useRef(false)

  // Captions on a timer — used when there is no playable audio
  const beginTimerMode = () => {
    if (startedRef.current) return
    startedRef.current = true
    scheduleCaptions()
    fakePulse()
  }

  const beginAudioMode = () => {
    const audio = new Audio(INTRO.audio)
    audioRef.current = audio
    const watchdog = setTimeout(beginTimerMode, 2500)
    audio.addEventListener('error', () => { clearTimeout(watchdog); beginTimerMode() })
    audio.play().then(() => {
      if (startedRef.current) return
      startedRef.current = true
      clearTimeout(watchdog)
      audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime
        let idx = -1
        for (let i = 0; i < INTRO.lines.length; i++) if (t >= INTRO.lines[i].at) idx = i
        setLineIdx(idx)
      })
      audio.addEventListener('ended', () => finish(false))
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext
        const ctx = new Ctx()
        const src = ctx.createMediaElementSource(audio)
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 256
        src.connect(analyser)
        analyser.connect(ctx.destination)
        const data = new Uint8Array(analyser.frequencyBinCount)
        const loop = () => {
          analyser.getByteFrequencyData(data)
          let sum = 0
          for (let i = 0; i < data.length; i++) sum += data[i]
          const amp = sum / data.length / 255
          if (ringRef.current && !reduced) ringRef.current.style.transform = `scale(${1 + amp * 0.35})`
          rafRef.current = requestAnimationFrame(loop)
        }
        loop()
      } catch { fakePulse() }
    }).catch(() => { clearTimeout(watchdog); beginTimerMode() })
  }

  const start = () => {
    setPhase('playing')
    // The SPA rewrite serves index.html for missing files, so verify the
    // audio actually exists (and is audio) before trying to play it.
    fetch(INTRO.audio, { method: 'HEAD' })
      .then(r => {
        const type = r.headers.get('content-type') || ''
        if (r.ok && type.indexOf('audio') === 0) beginAudioMode()
        else beginTimerMode()
      })
      .catch(beginTimerMode)
  }

  const finish = (skipped) => {
    if (doneRef.current) return
    doneRef.current = true
    sessionStorage.setItem('introSeen', '1')
    cancelAnimationFrame(rafRef.current)
    timersRef.current.forEach(clearTimeout)
    if (audioRef.current) audioRef.current.pause()
    setPhase('leaving')

    const target = document.getElementById('hero-portrait')
    const el = avatarRef.current
    if (!skipped && !reduced && target && el) {
      const from = el.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      const dx = (to.left + to.width / 2) - (from.left + from.width / 2)
      const dy = (to.top + to.height / 2) - (from.top + from.height / 2)
      const s = to.width / from.width
      el.style.transition = 'transform 0.8s cubic-bezier(0.22,1,0.36,1)'
      el.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`
    }
    if (overlayRef.current) {
      overlayRef.current.style.transition = (skipped || reduced) ? 'opacity 0.3s ease' : 'opacity 0.7s ease 0.25s'
      overlayRef.current.style.opacity = '0'
    }
    setTimeout(() => onFinish(), (skipped || reduced) ? 320 : 980)
  }

  const pill = {
    display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px',
    borderRadius: '9999px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '15px', fontWeight: 700,
    color: '#fff', background: 'linear-gradient(135deg,rgba(124,122,207,0.85),rgba(64,202,255,0.6))',
    border: '1px solid rgba(167,143,255,0.6)', boxShadow: '0 8px 40px rgba(124,122,207,0.4)',
  }

  return (
    <div ref={overlayRef} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px', background: 'radial-gradient(ellipse at 50% 38%, #0d0d24 0%, #06060f 72%)' }}>
      <style>{`
        @keyframes introSpin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes introLine { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes introIn { from { opacity: 0; transform: scale(0.85) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      {/* Avatar + reactive rings */}
      <div style={{ position: 'relative', width: '190px', height: '190px', animation: reduced ? 'none' : 'introIn 0.9s cubic-bezier(0.22,1,0.36,1) both' }}>
        <div ref={ringRef} style={{ position: 'absolute', inset: '-14px', borderRadius: '50%', border: '1.5px solid rgba(124,122,207,0.55)', boxShadow: '0 0 40px rgba(124,122,207,0.35), inset 0 0 24px rgba(64,202,255,0.12)', transition: 'transform 0.08s linear', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '-32px', borderRadius: '50%', border: '1px dashed rgba(64,202,255,0.22)', animation: reduced ? 'none' : 'introSpin 16s linear infinite', pointerEvents: 'none' }} />
        <div ref={avatarRef} style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(124,122,207,0.5)', boxShadow: '0 0 80px rgba(124,122,207,0.35)', willChange: 'transform' }}>
          <img src={PROFILE.photo} alt="Keshvi Pipwala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Captions / idle copy */}
      <div style={{ minHeight: '96px', maxWidth: '600px', padding: '0 28px', textAlign: 'center' }}>
        {phase === 'idle' ? (
          <div style={{ animation: 'introLine 0.7s ease 0.3s both' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(167,143,255,0.85)', marginBottom: '10px', fontWeight: 700 }}>Keshvi Pipwala</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>AI Product Manager &amp; Data Engineer</div>
          </div>
        ) : (
          <p key={lineIdx} style={{ fontSize: 'clamp(17px,2.2vw,22px)', fontWeight: 600, color: 'rgba(255,255,255,0.92)', lineHeight: 1.55, animation: 'introLine 0.45s ease both', margin: 0 }}>
            {lineIdx >= 0 ? INTRO.lines[lineIdx].text : '…'}
          </p>
        )}
      </div>

      {/* Controls */}
      {phase === 'idle' && (
        <button onClick={start} style={{ ...pill, animation: 'introLine 0.7s ease 0.5s both' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = '' }}>
          <Play size={16} fill="currentColor" /> Meet Keshvi
        </button>
      )}
      <button onClick={() => finish(true)} style={{ position: 'absolute', top: '26px', right: '30px', background: 'transparent', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '9999px', padding: '8px 18px', color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(167,143,255,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)' }}>
        Skip intro →
      </button>
    </div>
  )
}
