/**
 * File: src/pages/cb/Mistakes.tsx
 * Purpose: Common beginner mistakes and how to avoid them.
 */

import React from 'react'

/**
 * CbMistakes
 * Lists common pitfalls with short remedies.
 */
export default function CbMistakes() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Najczęstsze błędy i jak ich unikać</h3>
      <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-2">
        <li>Zbyt wysoki SQUELCH — ucinanie słabszych stacji. Ustaw minimalnie powyżej szumu.</li>
        <li>Długie monologi — blokowanie kanału. Mów krótko, rób pauzy.</li>
        <li>Zła antena/montaż — dramatyczny spadek zasięgu. Montuj wysoko i stroń od przeszkód.</li>
        <li>Brak znaku/nicku i QTH — utrudnia identyfikację. Podawaj je na starcie.</li>
        <li>Nadużywanie kanałów 9/28 — przenoś rozmowy na inne kanały.</li>
      </ul>
    </div>
  )
}
