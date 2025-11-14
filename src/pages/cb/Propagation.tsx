/**
 * File: src/pages/cb/Propagation.tsx
 * Purpose: HF propagation basics for 27 MHz (day/night, Sporadic E).
 */

import React from 'react'

/**
 * CbPropagation
 * Gives a concise explanation of 27 MHz propagation patterns.
 */
export default function CbPropagation() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Propagacja HF w paśmie 27 MHz</h3>
      <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-2">
        <li>
          Dzień: warstwa D silnie tłumi — łączności głównie lokalne (fala przyziemna, krótkie odbicia E).
        </li>
        <li>
          Noc: lepsze warunki na odbicia od warstwy F — możliwe łączności dalekie (DX).
        </li>
        <li>
          Sporadic E (lato): nagłe „otwarcia” pozwalające na łączności 1000–2000 km w krótkich oknach.
        </li>
        <li>
          Zasięg zależy od anteny, terenu, pogody oraz aktywności słonecznej. Dobra antena często daje większy efekt
          niż podnoszenie mocy.
        </li>
      </ul>
    </div>
  )
}
