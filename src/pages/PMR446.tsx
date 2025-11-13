/**
 * File: PMR446.tsx
 * Purpose: PMR446 overview for EU with channels, legal status, and best practices.
 */

import React from 'react'

/**
 * PMRPage
 * Presents PMR446 technical specs and usage guidance in the EU.
 */
export default function PMRPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">PMR446 — Bez licencji</h1>
        <p className="text-slate-700 mt-1">
          446 MHz, 16 kanałów (12.5 kHz), 500 mW ERP, anteny niewymienne (EU).
        </p>
      </header>

      <section aria-labelledby="channels">
        <h2 id="channels" className="text-lg font-semibold text-slate-900">Kanały i specyfikacja</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Kanały 1–8: 446.00625–446.09375 MHz</li>
          <li>Kanały 9–16: 446.10625–446.19375 MHz</li>
          <li>CTCSS/DCS do filtrowania (nie jest szyfrowaniem)</li>
        </ul>
      </section>

      <section aria-labelledby="practice" className="mt-8">
        <h2 id="practice" className="text-lg font-semibold text-slate-900">Dobre praktyki</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Krótkie transmisje; nasłuch przed nadawaniem.</li>
          <li>Używaj kodów CTCSS/DCS dla prywatności operacyjnej.</li>
        </ul>
      </section>
    </div>
  )
}
