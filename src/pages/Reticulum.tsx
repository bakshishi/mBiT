/**
 * File: Reticulum.tsx
 * Purpose: Reticulum secure networking overview for PL/EU with LoRa configuration and RNode.
 */

import React from 'react'

/**
 * ReticulumPage
 * Presents Reticulum fundamentals, security model, and LoRa parameters for Poland.
 */
export default function ReticulumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Reticulum — Bezpieczna sieć</h1>
        <p className="text-slate-700 mt-1">
          Kryptografia Curve25519, end‑to‑end, brak centralnego nadzoru. Narzędzie do budowy suwerennych sieci.
        </p>
      </header>

      <section aria-labelledby="sec">
        <h2 id="sec" className="text-lg font-semibold text-slate-900">Bezpieczeństwo i prywatność</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>E2E obowiązkowe, anonimowość nadawcy domyślnie.</li>
          <li>Brak inspekcji ruchu; niepodrabialne potwierdzenia doręczeń.</li>
        </ul>
      </section>

      <section aria-labelledby="lora" className="mt-8">
        <h2 id="lora" className="text-lg font-semibold text-slate-900">Konfiguracja LoRa — Polska</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Frequency: 868 MHz lub 869.525 MHz</li>
          <li>Spreading Factor: ≥ 10</li>
          <li>Bandwidth: 125 kHz</li>
          <li>Coding Rate: 4/8</li>
          <li>Power: zgodnie z regulacjami EU</li>
          <li>Zasięg: kilometry w mieście, &gt;100 km LOS</li>
        </ul>
      </section>

      <section aria-labelledby="rnode" className="mt-8">
        <h2 id="rnode" className="text-lg font-semibold text-slate-900">RNode i interfejsy</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Interfejsy: LoRa Radio, Packet Radio (Ham), Wi‑Fi, Internet (tunneling TCP/UDP).</li>
          <li>Zakres częstotliwości: 433/868/915 MHz, 2.4 GHz.</li>
        </ul>
      </section>
    </div>
  )
}
