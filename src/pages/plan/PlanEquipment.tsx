/**
 * File: plan/PlanEquipment.tsx
 * Purpose: Lists minimal and extended equipment sets.
 */

import React from 'react'

/**
 * PlanEquipment
 * Shows minimal (Tier 1–2) and extended (Tier 3) equipment recommendations.
 */
export default function PlanEquipment() {
  return (
    <section id="sprzet" aria-labelledby="gear-title" className="mb-10">
      <h2 id="gear-title" className="text-lg font-semibold text-slate-900">3. Sprzęt podstawowy — Co powinieneś mieć?</h2>

      <div className="mt-3">
        <h3 className="text-sm font-medium text-slate-900">Minimalna konfiguracja (Tier 1–2)</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>2× radiotelefony PMR446 (np. Motorola, Midland; modele zgodne z prawem).</li>
          <li>1× node Meshtastic (np. LILYGO T‑Beam, T‑Echo).</li>
          <li>Zasilanie awaryjne: powerbank 10 000–20 000 mAh, zapasowe akumulatory.</li>
          <li>Panel solarny przenośny (50–120 W) — opcjonalnie.</li>
          <li>Anteny i kable zapasowe (USB, zasilające, ewentualnie antenowe).</li>
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-medium text-slate-900">Rozszerzona konfiguracja (Tier 3)</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Stacja bazowa CB + zewnętrzna antena.</li>
          <li>Dodatkowe węzły Meshtastic (repetery stacjonarne).</li>
          <li>Stacja zasilania awaryjnego 500–2000 Wh.</li>
          <li>Radio krótkofalarskie HF + licencja (opcjonalnie).</li>
        </ul>
      </div>
    </section>
  )
}
