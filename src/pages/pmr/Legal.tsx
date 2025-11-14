/**
 * File: pmr/Legal.tsx
 * Purpose: Legal and compliance aspects of PMR446 in Poland/EU.
 */

import React from 'react'

/**
 * PMRLegal
 * Summarizes legal constraints and compliance requirements (PL/EU).
 */
export default function PMRLegal() {
  return (
    <section id="prawo" aria-labelledby="pmr-legal-title" className="mb-10">
      <h2 id="pmr-legal-title" className="text-lg font-semibold text-slate-900">Prawo i zgodność (PL/EU)</h2>
      <div className="mt-3 space-y-2 text-sm text-slate-700">
        <p>
          Użytkowanie PMR446 w Polsce jest legalne bez pozwolenia pod warunkiem spełnienia wymogów UE:
          16 kanałów FM (446.00625–446.19375 MHz), szerokość 12.5 kHz, maks. 500 mW ERP oraz
          fabrycznie zintegrowana, niewymienna antena.
        </p>
        <ul className="list-disc pl-5">
          <li>Zakaz użycia zewnętrznych anten i pracy przez przemienniki/repeatery.</li>
          <li>Brak szyfrowania — CTCSS/DCS to filtracja odsłuchu, nie tajność komunikacji.</li>
          <li>Urządzenia z wymienną anteną nie są PMR446 (mogą wymagać pozwolenia).</li>
        </ul>
        <p className="italic">
          W razie wątpliwości sprawdź wytyczne UKE i dokumenty zgodności urządzenia (ETSI EN 303 405).
        </p>
      </div>
    </section>
  )
}
