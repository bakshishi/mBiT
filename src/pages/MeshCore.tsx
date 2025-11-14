/**
 * File: MeshCore.tsx
 * Purpose: MeshCore overview for PL/EU with EU/UK Narrow preset and differences vs Meshtastic.
 */

import React from 'react'

/**
 * MeshCorePage
 * Describes MeshCore basics, configuration, and use cases.
 */
export default function MeshCorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">MeshCore — EU/PL</h1>
        <p className="text-slate-700 mt-1">
          Lekkie rozwiązanie mesh, direct-path routing, niskie zużycie energii.
        </p>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="cfg" className="text-lg font-semibold text-slate-900">Konfiguracja EU/UK Narrow</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Frequency: 869.618 MHz</li>
          <li>Bandwidth: 62.5 kHz</li>
          <li>Spreading Factor: 8</li>
          <li>Coding Rate: 8</li>
        </ul>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Różnice vs Meshtastic</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Direct-path zamiast flood-based.</li>
          <li>Mniejsze zużycie energii i lżejszy stos.</li>
          <li>Mniejsza (rozwijająca się) społeczność.</li>
        </ul>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Polskie zasoby</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li><a className="text-[#667eea] underline" target="_blank" rel="noopener noreferrer" href="https://lorameshcore.pl">lorameshcore.pl</a></li>
          <li><a className="text-[#667eea] underline" target="_blank" rel="noopener noreferrer" href="https://diver.net.pl/meshcore">diver.net.pl/meshcore</a></li>
        </ul>
      </section>
    </div>
  )
}
