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
          Na co dzień: łączności lokalne — fala przyziemna i linia widzenia, zwykle kilka–kilkanaście kilometrów.
        </li>
        <li>
          Dzień przy wysokiej aktywności Słońca (okolice maksimum cyklu): jonosfera (warstwa F2) odbija fale
          27 MHz, co daje łączności dalekie (DX), także międzykontynentalne. W minimum cyklu pasmo bywa
          „martwe” przez całe tygodnie.
        </li>
        <li>
          Noc: pasmo zwykle się zamyka i zostają łączności lokalne. Wyjątkiem są krótkie otwarcia
          Sporadic E (głównie latem, także wieczorami).
        </li>
        <li>
          Sporadic E (głównie lato): nagłe „otwarcia” pozwalające na łączności ok. 1000–2000 km w krótkich oknach.
        </li>
        <li>
          Pochłanianie w warstwie D dotyczy głównie niższych pasm KF; na 27 MHz jest znacznie mniejsze.
        </li>
        <li>
          Zasięg zależy od anteny, terenu, pogody oraz aktywności słonecznej. Dobra antena często daje większy efekt
          niż podnoszenie mocy.
        </li>
      </ul>
    </div>
  )
}
