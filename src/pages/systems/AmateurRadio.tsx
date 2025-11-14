/**
 * File: systems/AmateurRadio.tsx
 * Purpose: Section summarizing amateur radio bands (HF/VHF/UHF) and NVIS techniques for emergency.
 */

import React from 'react'

/**
 * SystemsAmateurRadio
 * Explains band characteristics and practical NVIS guidance for regional coverage.
 */
export default function SystemsAmateurRadio() {
  return (
    <section id="amatorskie" aria-labelledby="amateur-title" className="mb-10">
      <h2 id="amateur-title" className="text-lg font-semibold text-slate-900">Łączność krótkofalarska — HF/VHF/UHF i NVIS</h2>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Zakresy częstotliwości</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li><strong>HF</strong> (fale krótkie): łączność krajowa i DX dzięki odbiciom od jonosfery.</li>
            <li><strong>VHF</strong> (30–300 MHz): zasięg optyczny, lokalne/repeaterowe łączności.</li>
            <li><strong>UHF</strong> (300 MHz–3 GHz): krótsze fale, mniejsze anteny, dobra przepustowość.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">NVIS (Near Vertical Incidence Skywave)</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Cel: łączność regionalna bez “martwej strefy” (fala pod dużym kątem, powrót z jonosfery).</li>
            <li>Anteny: nisko zawieszone dipole (ok. 0,1–0,25 λ), fan‑dipole, dipol “złamany”.</li>
            <li>Dzień: pasmo 7 MHz (40 m). Wieczór/noc: 3,5 MHz (80 m).</li>
            <li>Moc: często wystarcza 5–100 W przy umiarkowanych zakłóceniach.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
