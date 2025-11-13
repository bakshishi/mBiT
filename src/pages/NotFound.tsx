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
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">404 — Nie znaleziono</h1>
      <p className="mt-2 text-slate-700">Strona, której szukasz, nie istnieje.</p>
      <NavLink
        to="/"
        className="mt-6 inline-block rounded bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
      >
        Wróć na stronę główną
      </NavLink>
    </div>
  )
}
