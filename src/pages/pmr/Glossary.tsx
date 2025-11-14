/**
 * File: pmr/Glossary.tsx
 * Purpose: Short glossary of basic PMR terms including CTCSS/DCS.
 */

import React from 'react'

/**
 * PMRGlossary
 * Explains common terms used on the PMR446 page.
 */
export default function PMRGlossary() {
  return (
    <section id="slowniczek" aria-labelledby="pmr-glossary-title" className="mb-10">
      <h2 id="pmr-glossary-title" className="text-lg font-semibold text-slate-900">Słowniczek</h2>
      <dl className="mt-3 grid gap-3 md:grid-cols-2">
        <Term term="PTT">
          Przycisk naciśnij‑i‑mów (Push‑To‑Talk). Trzymasz — nadajesz; puszczasz — słuchasz.
        </Term>
        <Term term="Squelch">
          Blokada szumów. Otwiera audio tylko, gdy wykryje sygnał (lub zgodny ton/kod).
        </Term>
        <Term term="CTCSS">
          Analogowy ton podnośny 67–254 Hz dodawany do transmisji — służy do filtrowania odsłuchu.
        </Term>
        <Term term="DCS">
          Cyfrowy odpowiednik CTCSS. Filtruje odsłuch, nie zapewnia tajności.
        </Term>
        <Term term="QTH">
          Umowna nazwa lokalizacji stacji (np. miasto, szczyt).
        </Term>
        <Term term="Monitor">
          Tryb wyłączenia blokady tonowej — słychać wszystkich na kanale.
        </Term>
      </dl>
    </section>
  )
}

/** Small definition item */
function Term({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <dt className="text-sm font-medium text-slate-900">{term}</dt>
      <dd className="mt-1 text-sm text-slate-700">{children}</dd>
    </div>
  )
}
