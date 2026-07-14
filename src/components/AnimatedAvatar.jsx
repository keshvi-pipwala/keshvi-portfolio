import React from 'react'

// Stylized animated vector avatar of Keshvi — dark center-parted hair,
// gold hoops, white blazer — drawn in the site's palette.
//
// Animation:
//  - blinks every ~4.4s (CSS keyframes)
//  - gentle idle head sway
//  - `talking`: mouth opens/closes driven by the CSS var --amp (0..1),
//    which IntroAvatar sets from the live audio amplitude (or a rhythm
//    when there is no audio file yet)
//  - `reduced`: all motion off, friendly static portrait
export default function AnimatedAvatar({ talking = false, reduced = false, size = '100%' }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }} aria-label="Animated avatar of Keshvi Pipwala" role="img">
      <style>{`
        .kav-head { transform-box: fill-box; transform-origin: 50% 80%; ${reduced ? '' : 'animation: kavSway 6.5s ease-in-out infinite;'} }
        .kav-eyes { transform-box: fill-box; transform-origin: center; ${reduced ? '' : 'animation: kavBlink 4.4s infinite;'} }
        .kav-brows { transform-box: fill-box; transform-origin: center; ${talking && !reduced ? 'animation: kavBrows 2.6s ease-in-out infinite;' : ''} }
        .kav-mouth-open { transform-box: fill-box; transform-origin: center; transform: scaleY(${reduced ? 0.35 : 'calc(0.15 + (var(--amp, 0) * 1.6))'}); }
        @keyframes kavSway {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          30%      { transform: rotate(1.4deg) translateY(-1.5px); }
          65%      { transform: rotate(-1.2deg) translateY(1px); }
        }
        @keyframes kavBlink {
          0%, 91%, 100% { transform: scaleY(1); }
          94%, 96%      { transform: scaleY(0.06); }
        }
        @keyframes kavBrows {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(-1.6px); }
          70%      { transform: translateY(0.6px); }
        }
      `}</style>

      <defs>
        <radialGradient id="kavBg" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="#221f45" />
          <stop offset="100%" stopColor="#0d0c22" />
        </radialGradient>
        <linearGradient id="kavBlazer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f4fa" />
          <stop offset="100%" stopColor="#c9c7dd" />
        </linearGradient>
        <linearGradient id="kavHair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#33241c" />
          <stop offset="55%" stopColor="#1f1510" />
          <stop offset="100%" stopColor="#2b1d15" />
        </linearGradient>
        <clipPath id="kavClip"><circle cx="100" cy="100" r="100" /></clipPath>
      </defs>

      <g clipPath="url(#kavClip)">
        {/* backdrop */}
        <rect width="200" height="200" fill="url(#kavBg)" />
        <circle cx="100" cy="86" r="64" fill="rgba(124,122,207,0.10)" />

        {/* whole head + shoulders group sways together */}
        <g className="kav-head">
          {/* hair behind shoulders */}
          <path d="M56 78 Q52 150 66 168 L134 168 Q148 150 144 78 Q140 40 100 38 Q60 40 56 78 Z" fill="url(#kavHair)" />

          {/* blazer */}
          <path d="M38 200 Q40 152 74 144 L100 138 L126 144 Q160 152 162 200 Z" fill="url(#kavBlazer)" />
          {/* lapels */}
          <path d="M88 143 L100 162 L94 168 L82 148 Z" fill="#ffffff" opacity="0.9" />
          <path d="M112 143 L100 162 L106 168 L118 148 Z" fill="#e4e2f0" opacity="0.9" />
          <path d="M97 162 L103 162 L104 200 L96 200 Z" fill="#b9b6cf" opacity="0.55" />

          {/* neck */}
          <path d="M90 122 L110 122 L110 146 Q100 152 90 146 Z" fill="#c08a63" />
          <path d="M90 122 L110 122 L110 132 Q100 137 90 132 Z" fill="#a97753" opacity="0.85" />

          {/* ears + gold hoops */}
          <ellipse cx="64" cy="97" rx="6.5" ry="9" fill="#c08a63" />
          <ellipse cx="136" cy="97" rx="6.5" ry="9" fill="#c08a63" />
          <circle cx="63" cy="110" r="5.5" fill="none" stroke="#e0aa4b" strokeWidth="2.4" />
          <circle cx="137" cy="110" r="5.5" fill="none" stroke="#e0aa4b" strokeWidth="2.4" />

          {/* face */}
          <path d="M64 88 Q64 52 100 50 Q136 52 136 88 Q136 112 122 124 Q111 133 100 133 Q89 133 78 124 Q64 112 64 88 Z" fill="#cf9a70" />
          {/* face shading */}
          <path d="M122 124 Q136 112 136 88 Q136 60 112 52 Q132 62 130 90 Q129 112 118 122 Z" fill="#b5825a" opacity="0.45" />

          {/* hair — center part framing the face */}
          <path d="M100 44 Q64 46 62 88 L62 100 Q58 74 66 60 Q76 44 100 42 Q124 44 134 60 Q142 74 138 100 L138 88 Q136 46 100 44 Z" fill="url(#kavHair)" />
          <path d="M100 43 Q70 46 66 84 Q78 64 98 58 L100 50 L102 58 Q122 64 134 84 Q130 46 100 43 Z" fill="url(#kavHair)" />
          {/* subtle hair sheen */}
          <path d="M76 56 Q86 48 98 47" fill="none" stroke="rgba(167,143,255,0.35)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M112 49 Q124 54 130 64" fill="none" stroke="rgba(64,202,255,0.25)" strokeWidth="1.4" strokeLinecap="round" />

          {/* brows */}
          <g className="kav-brows">
            <path d="M76 82 Q84 77 92 81" fill="none" stroke="#2b1c12" strokeWidth="3" strokeLinecap="round" />
            <path d="M108 81 Q116 77 124 82" fill="none" stroke="#2b1c12" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* eyes (blink as a group) */}
          <g className="kav-eyes">
            <ellipse cx="84" cy="92" rx="7" ry="4.6" fill="#fdf6ee" />
            <ellipse cx="116" cy="92" rx="7" ry="4.6" fill="#fdf6ee" />
            <circle cx="84.5" cy="92.4" r="3.1" fill="#3a2417" />
            <circle cx="116.5" cy="92.4" r="3.1" fill="#3a2417" />
            <circle cx="85.6" cy="91.2" r="1" fill="#fff" />
            <circle cx="117.6" cy="91.2" r="1" fill="#fff" />
            {/* lash lines */}
            <path d="M77 90 Q84 86.2 91 90" fill="none" stroke="#241509" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M109 90 Q116 86.2 123 90" fill="none" stroke="#241509" strokeWidth="1.6" strokeLinecap="round" />
          </g>

          {/* nose */}
          <path d="M100 96 Q98 104 96 107 Q99 110 103 108" fill="none" stroke="#a97753" strokeWidth="2" strokeLinecap="round" />

          {/* blush */}
          <ellipse cx="78" cy="105" rx="6" ry="3.4" fill="#e2926b" opacity="0.35" />
          <ellipse cx="122" cy="105" rx="6" ry="3.4" fill="#e2926b" opacity="0.35" />

          {/* mouth — open shape scales with --amp while talking; smile line on top */}
          {talking ? (
            <>
              <ellipse className="kav-mouth-open" cx="100" cy="118" rx="8.5" ry="6.5" fill="#5e2a22" />
              <ellipse className="kav-mouth-open" cx="100" cy="120.5" rx="5" ry="3.2" fill="#e07a70" opacity="0.85" />
              <path d="M90 116 Q100 113.5 110 116" fill="none" stroke="#8e4a35" strokeWidth="1.6" strokeLinecap="round" />
            </>
          ) : (
            <>
              <path d="M89 116 Q100 124 111 116" fill="none" stroke="#8e4a35" strokeWidth="3" strokeLinecap="round" />
              <path d="M93 121 Q100 124.5 107 121" fill="none" stroke="#b96a52" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
            </>
          )}
        </g>
      </g>

      {/* rim */}
      <circle cx="100" cy="100" r="99" fill="none" stroke="rgba(124,122,207,0.35)" strokeWidth="1.5" />
    </svg>
  )
}
