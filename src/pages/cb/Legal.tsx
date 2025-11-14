/**
 * File: src/pages/cb/Legal.tsx
 * Purpose: Legal framework for CB in Poland (power, modes, channels, compliance).
 */

import React from 'react'

/**
 * CbLegal
 * Summarizes Polish/EU rules for legal CB usage.
 */
export default function CbLegal() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Prawo i ograniczenia (Polska/EU)</h3>
      <ul className="mt-2 space-y-2 text-slate-700">
        <li>
          Pasmo: 26.960–27.410 MHz (40 kanałów co 10 kHz; plan CEPT). Legalność bez zezwoleń pod
          warunkiem zgodności urządzenia z normami (np. ETSI EN 300 135/433) i posiadania deklaracji
          zgodności producenta.
        </li>
        <li>Moc: do 4 W (AM/FM). Dla SSB: do 12 W PEP.</li>
        <li>Modulacje: AM, FM oraz SSB (LSB/USB w kanałach DX).</li>
        <li>
          Urządzenia muszą być legalne (certyfikowane). Unikaj modyfikacji zwiększających moc lub
          pracy poza pasmem — grożą kary administracyjne/karne.
        </li>
      </ul>
      <p className="mt-3 text-sm text-slate-600">
        Dla kierowców korzystanie z CB w ruchu drogowym jest dozwolone. Ewentualne ograniczenia mogą
        wynikać z przepisów lokalnych dot. montażu/anten.
      </p>
    </div>
  )
}
