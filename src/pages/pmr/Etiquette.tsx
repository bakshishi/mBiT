/**
 * File: pmr/Etiquette.tsx
 * Purpose: Good operating practices for PMR446.
 */

import React from 'react'

/**
 * PMREtiquette
 * Lists concise do's and don'ts for reliable and polite on-air behaviour.
 */
export default function PMREtiquette() {
  return (
    <section id="etykieta" aria-labelledby="pmr-etiquette-title" className="mb-10">
      <h2 id="pmr-etiquette-title" className="text-lg font-semibold text-slate-900">Etykieta i dobre praktyki</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Rób</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Nasłuchuj min. 5 s przed nadawaniem.</li>
            <li>Krótko i na temat (30–60 s), rób przerwy dla innych.</li>
            <li>Mów wyraźnie, trzymaj radio pionowo 5–10 cm od ust.</li>
            <li>Używaj CTCSS/DCS dla separacji grup (jeśli potrzebne).</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Unikaj</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Nadawania na kanale 1 poza sytuacją SOS.</li>
            <li>Długiego blokowania kanału i przerywania innym.</li>
            <li>Modyfikacji sprzętu (antena, moc) — ryzyko niezgodności.</li>
            <li>Wulgaryzmów i tematów konfliktowych.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
