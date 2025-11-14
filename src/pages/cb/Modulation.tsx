/**
 * File: src/pages/cb/Modulation.tsx
 * Purpose: Explain AM/FM/SSB pros/cons and typical uses.
 */

import React from 'react'

/**
 * CbModulation
 * Explains differences between AM, FM and SSB for CB.
 */
export default function CbModulation() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Modulacje: AM, FM, SSB</h3>
      <div className="mt-2 space-y-4 text-slate-700">
        <div>
          <p className="font-medium text-slate-900">AM — modulacja amplitudy</p>
          <p>Uniwersalna i popularna, ale bardziej wrażliwa na zakłócenia. Dobrze sprawdza się lokalnie.</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">FM — modulacja częstotliwości</p>
          <p>Czystszy dźwięk i lepsza odporność na szumy. Coraz częściej wybierana na kanałach 12 i 30.</p>
        </div>
        <div>
          <p className="font-medium text-slate-900">SSB — wstęga boczna (LSB/USB)</p>
          <p>Efektywna energetycznie i dobra do DX. Wymaga dokładnego strojenia i radia z SSB.</p>
        </div>
      </div>
    </div>
  )
}
