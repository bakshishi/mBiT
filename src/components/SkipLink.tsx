/**
 * File: SkipLink.tsx
 * Purpose: Provide a keyboard-accessible "Skip to content" link for WCAG compliance.
 */

import React from 'react'

/**
 * SkipLink
 * Jumps focus to the main content area with id "main-content".
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 z-50 bg-white text-black border-2 border-black px-3 py-2 rounded shadow"
    >
      Pomiń nawigację
    </a>
  )
}
