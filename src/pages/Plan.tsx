/**
 * File: Plan.tsx
 * Purpose: Multi-system emergency plan with tiers, basic equipment, and procedures.
 */

import React from 'react'

/**
 * PlanPage
 * Outlines a practical multi-tier plan, equipment list, and crisis procedures.
 */
export default function PlanPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Plan Awaryjny — Multi‑System</h1>
        <p className="text-slate-700 mt-1">Koncepcja wielosystemowa (Tier 1–3), sprzęt i procedury.</p>
      </header>

      <section aria-labelledby="tiers">
        <h2 id="tiers" className="text-lg font-semibold text-slate-900">Tier 1–3</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Tier 1: PMR446 i Meshtastic handheld (0–5 km).</li>
          <li>Tier 2: CB/PMR i nody mesh z repeaterami (5–30 km).</li>
          <li>Tier 3: Meshtastic DX, wysokie repetery, (globalnie: Winlink/ham).</li>
        </ul>
      </section>

      <section aria-labelledby="gear" className="mt-8">
        <h2 id="gear" className="text-lg font-semibold text-slate-900">Sprzęt podstawowy</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>2× PMR446, 1× node Meshtastic, zasilanie awaryjne, anteny.</li>
          <li>Powerbank/akumulatory, panel solarny, kable zapasowe.</li>
        </ul>
      </section>

      <section aria-labelledby="proc" className="mt-8">
        <h2 id="proc" className="text-lg font-semibold text-slate-900">Procedury</h2>
        <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700">
          <li>Sprawdź łączność lokalną (PMR).</li>
          <li>Aktywuj mesh (Meshtastic), nawiąż łączność z repeaterami.</li>
          <li>W razie potrzeby użyj CB dla większego zasięgu.</li>
          <li>Dokumentuj wszystkie kontakty i zdarzenia.</li>
        </ol>
      </section>
    </div>
  )
}
