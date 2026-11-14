/**
 * File: NotFound.tsx
 * Purpose: 404 page with link back to home.
 */

import React from 'react'
import { NavLink } from 'react-router'

/**
 * NotFoundPage
 * Informs user the page was not found and offers navigation back to home.
 */
export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-signal-amber-soft text-signal-amber-rich border border-signal-amber/30 mb-4">
        BŁĄD 404 // BRAK SYGNAŁU
      </div>
      <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-field-text">404 — Nie znaleziono</h1>
      <p className="mt-2 text-field-muted max-w-md mx-auto">
        Częstotliwość milczy. Wybrana ścieżka nie istnieje lub węzeł zmienił lokalizację w topologii.
      </p>
      <NavLink
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded bg-signal-amber text-slate-950 font-semibold px-5 py-2.5 text-sm hover:bg-signal-amber-rich transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber shadow-sm"
      >
        Powrót do bazy głównej (Home)
      </NavLink>
    </div>
  )
}
