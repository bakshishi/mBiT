/**
 * File: Logo.tsx
 * Purpose: Brand logo component with hexagon + radio waves motif, accessible title/desc.
 */

import React from 'react'

/**
 * Logo
 * Renders an inline SVG logo using brand colors (#667eea, #764ba2) with a hexagon and mesh waves.
 */
export default function Logo(props: { className?: string; title?: string }) {
  const { className, title = 'Mesh Bydgoszcz i Toruń' } = props
  return (
    <span className={className} aria-label={title} role="img">
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        <polygon
          points="32,4 56,16 56,48 32,60 8,48 8,16"
          fill="url(#g)"
          opacity="0.25"
          stroke="url(#g)"
          strokeWidth="2"
        />
        {/* Inner hex */}
        <polygon
          points="32,12 50,21 50,43 32,52 14,43 14,21"
          fill="none"
          stroke="url(#g)"
          strokeWidth="2"
          opacity="0.7"
        />
        {/* Waves */}
        <path
          d="M24 24c3 0 5 2 8 2s5-2 8-2"
          stroke="#667eea"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M24 30c3 0 5 2 8 2s5-2 8-2"
          stroke="#764ba2"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="32" cy="34" r="3" fill="#667eea" />
      </svg>
    </span>
  )
}
