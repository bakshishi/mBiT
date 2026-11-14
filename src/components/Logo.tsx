/**
 * File: Logo.tsx
 * Purpose: Brand logo component with hexagon + radio waves motif, accessible title/desc.
 */

import React from 'react'

/**
 * Logo
 * Renders an inline SVG logo using Tactical RF palette (Signal Amber + Mesh Green node).
 */
export default function Logo(props: { className?: string; title?: string }) {
  const { className, title = 'Mesh Bydgoszcz i Toruń' } = props
  return (
    <span className={className} aria-label={title} role="img">
      <svg
        width="30"
        height="30"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        {/* Tactical Outer Hexagon */}
        <polygon
          points="32,4 56,16 56,48 32,60 8,48 8,16"
          fill="currentColor"
          className="text-signal-amber fill-signal-amber/10 stroke-signal-amber"
          strokeWidth="2.5"
        />
        {/* Inner RF geometric mesh */}
        <polygon
          points="32,13 49,21 49,43 32,51 15,43 15,21"
          fill="none"
          className="stroke-signal-amber/40"
          strokeWidth="1.5"
        />
        {/* Radio Waves */}
        <path
          d="M23 25c3-1.5 6-1.5 9 0s6 1.5 9 0"
          className="stroke-signal-amber"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 31c4-2 8-2 12 0s8 2 12 0"
          className="stroke-signal-amber/80"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Active Node Core */}
        <circle cx="32" cy="40" r="3.5" className="fill-mesh-green stroke-field-card" strokeWidth="1" />
      </svg>
    </span>
  )
}
