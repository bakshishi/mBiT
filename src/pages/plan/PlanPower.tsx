/**
 * File: plan/PlanPower.tsx
 * Purpose: Emergency power sources and maintenance recommendations.
 */

import React from 'react'

/**
 * PlanPower
 * Describes power options (powerbanks, stations, solar) and simple best practices.
 */
export default function PlanPower() {
  return (
    <section id="zasilanie" aria-labelledby="power-title" className="mb-10">
      <h2 id="power-title" className="text-lg font-semibold text-slate-900">4. Zasilanie awaryjne — Jak zapewnić autonomię?</h2>

      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Podstawowe źródła zasilania</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Powerbanki 10 000–50 000 mAh (radia, Meshtastic, telefony).</li>
            <li>Przenośne stacje zasilania 300–2000 W (AC 230 V, USB, DC; ładowanie: solar/sieć/auto).</li>
            <li>Panele solarne 50–200 W (składane, mobilne) do ładowania banków/stacji.</li>
            <li>Zapasowe akumulatory (AA/AAA/18650) i ładowarki.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Zalecenia eksploatacyjne</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Utrzymuj urządzenia w pełni naładowane; testuj co 3 miesiące.</li>
            <li>Podczas długich awarii korzystaj z paneli solarnych i oszczędzaj energię.</li>
            <li>Przechowuj zapas przewodów i adapterów (USB‑C/micro‑USB/Lightning, DC).</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
