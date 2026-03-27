import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Sparkles, User, Briefcase, FolderOpen, BookOpen, Mail
} from 'lucide-react'

const NAV = [
  { to: '/',           label: 'Home',       Icon: Sparkles   },
  { to: '/about',      label: 'About',      Icon: User       },
  { to: '/experience', label: 'Experience', Icon: Briefcase  },
  { to: '/projects',   label: 'Projects',   Icon: FolderOpen },
  { to: '/education',  label: 'Education',  Icon: BookOpen   },
  { to: '/contact',    label: 'Contact',    Icon: Mail       },
]

export default function Sidebar({ currentLabel }) {
  return (
    <aside
      style={{
        position: 'fixed', left: 0, top: 0,
        height: '100vh', width: '72px',
        zIndex: 50,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '14px 8px',
        background: 'linear-gradient(180deg, rgba(2,2,8,.97), rgba(5,5,14,.94))',
        borderRight: '1px solid rgba(255,255,255,.06)',
      }}
    >
      {/* accent line */}
      <div style={{
        position: 'absolute', right: 0, top: 0,
        height: '100%', width: '1.5px',
        background: 'linear-gradient(180deg, rgba(124,122,207,.6), rgba(64,202,255,.38), rgba(255,140,105,.28))',
      }} />

      {/* nav buttons */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
        {NAV.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={{ textDecoration: 'none' }}
          >
            {({ isActive }) => (
              <button
                style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '100%', height: '42px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  color: isActive ? '#fff' : 'rgba(255,255,255,.5)',
                  transition: 'color .2s',
                  border: 'none', background: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
                className="nav-btn"
              >
                {/* active right-edge line */}
                {isActive && (
                  <span style={{
                    position: 'absolute', right: 0, top: '50%',
                    transform: 'translateY(-50%)',
                    height: '68%', width: '2px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(180deg, #7c7acf, #40caff, #ff8c69)',
                    boxShadow: '0 0 10px rgba(124,122,207,.55)',
                  }} />
                )}

                {/* icon box */}
                <span style={{
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(255,255,255,.09)' : 'linear-gradient(180deg, rgba(8,8,14,.96), rgba(8,8,14,.88))',
                  boxShadow: isActive
                    ? 'inset 0 0 0 1px rgba(255,255,255,.20)'
                    : 'inset 0 0 0 1px rgba(255,255,255,.10)',
                  transition: 'all .2s',
                }}>
                  <Icon size={17} />
                </span>

                {/* tooltip */}
                <span
                  className="tooltip-label"
                  style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    left: '62px', top: '50%',
                    transform: 'translateY(-50%) translateX(-8px)',
                    opacity: 0,
                    whiteSpace: 'nowrap',
                    borderRadius: '10px',
                    padding: '5px 12px',
                    fontSize: '12px', fontWeight: 600,
                    background: 'rgba(0,0,0,.82)',
                    backdropFilter: 'blur(8px)',
                    color: 'rgba(255,255,255,.9)',
                    boxShadow: '0 10px 32px rgba(0,0,0,.75), inset 0 0 0 1px rgba(255,255,255,.12)',
                    transition: 'all .2s',
                    zIndex: 99,
                  }}
                >
                  {label}
                </span>
              </button>
            )}
          </NavLink>
        ))}
      </nav>

      {/* current label */}
      <div style={{
        marginTop: 'auto',
        fontSize: '9px',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.3)',
        textAlign: 'center',
        padding: '4px 0',
      }}>
        {currentLabel}
      </div>
    </aside>
  )
}
