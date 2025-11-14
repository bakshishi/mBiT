/**
 * File: src/pages/cb/Channels.tsx
 * Purpose: Channels overview and common community conventions.
 */

import React from 'react'

/**
 * CbChannels
 * Lists key CB channels and their common uses.
 */
export default function CbChannels() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Kanały i typowe zastosowania</h3>
      <ul className="mt-2 grid gap-2 text-slate-700">
        <li>
          <span className="font-medium text-slate-900">Kanał 9 (27.065 MHz)</span> — ratunkowy
          (emergency). Używaj wyłącznie do wzywania pomocy.
        </li>
        <li>
          <span className="font-medium text-slate-900">Kanał 19 (27.185 MHz)</span> — drogowy, najpopularniejszy
          wśród kierowców (informacje o trasie, zagrożeniach, korkach).
        </li>
        <li>
          <span className="font-medium text-slate-900">Kanał 28 (27.280 MHz)</span> — wywoławczy/ogólny.
          Służy do nawiązania kontaktu i przeniesienia rozmowy.
        </li>
        <li>
          <span className="font-medium text-slate-900">Kanał 20 (27.205 MHz)</span> — ogólny, rozmowy
          lokalne i testy.
        </li>
        <li>
          <span className="font-medium text-slate-900">Kanały 12 i 30 (FM)</span> — popularne kanały
          do pracy w FM (czystszy dźwięk).
        </li>
        <li>
          <span className="font-medium text-slate-900">Kanały 16, 36–40 (SSB)</span> — łączności dalekie (DX)
          w modulacji SSB. Wymaga radia z SSB i precyzyjnego strojenia.
        </li>
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        Zwyczajowo rozmowy przenosi się poza kanały wywoławcze/awaryjne. Zanim naciśniesz PTT —
        nasłuchaj, czy kanał jest wolny.
      </p>
    </div>
  )
}
