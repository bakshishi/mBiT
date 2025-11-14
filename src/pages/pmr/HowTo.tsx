/**
 * File: pmr/HowTo.tsx
 * Purpose: Step-by-step "how to connect" on PMR446 for beginners.
 */

import React from 'react'

/**
 * PMRHowTo
 * Provides simple steps for first QSO on PMR446.
 */
export default function PMRHowTo() {
  return (
    <section id="jak-zaczac" aria-labelledby="pmr-howto-title" className="mb-10">
      <h2 id="pmr-howto-title" className="text-lg font-semibold text-slate-900">Jak zacząć — krok po kroku</h2>
      <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-1">
        <li>Włącz radio, wybierz kanał (np. 7 lub 11 do rozmów ogólnych).</li>
        <li>Nasłuchuj min. 5 s — upewnij się, że kanał jest wolny.</li>
        <li>Naciśnij PTT i zawołaj: „Brejk, tu [nick/QTH]. Kto mnie słyszy?”. Zwolnij PTT i czekaj.</li>
        <li>Wymień lokalizację (QTH) i czytelność (np. 1–5) z korespondentem.</li>
        <li>Jeśli korzystasz z CTCSS/DCS, uzgodnij ton/kod przed rozmową.</li>
        <li>Na wycieczce/górach miej w zapasie kanał 3 (często z 107.2 Hz).</li>
      </ol>
    </section>
  )
}
