/**
 * File: plan/PlanTests.tsx
 * Purpose: Regular connectivity test schedule and procedure.
 */

import React from 'react'

/**
 * PlanTests
 * Provides test times, channels, procedure and practical tips.
 */
export default function PlanTests() {
  return (
    <section id="testy" aria-labelledby="tests-title" className="mb-10">
      <h2 id="tests-title" className="text-lg font-semibold text-slate-900">6. Procedury testowania łączności</h2>

      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Regularne testy</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>13. dzień każdego miesiąca od godz. 20:00.</li>
            <li>Ostatnia sobota miesiąca od godz. 20:00.</li>
          </ul>
          <p className="mt-2 text-sm text-slate-700">
            Kanały: PMR446 — kanał 2 (lub 12 zapasowy), CB — kanał 13 AM lub kanał 11 USB.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Procedura</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Przygotuj sprzęt (naładowane baterie, sprawne radia).</li>
            <li>Wybierz dobrą lokalizację (wysoko, bez przeszkód).</li>
            <li>Wywołaj ogólnie i czekaj na odpowiedzi.</li>
            <li>Wymień raporty słyszalności z uczestnikami.</li>
            <li>Sprawdź zasilanie awaryjne (powerbanki, akumulatory).</li>
            <li>Zanotuj wyniki testów.</li>
          </ol>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Unikaj długich rozmów na kanałach wywoławczych.</li>
            <li>Przy dużej liczbie stacji przenieś rozmowę na inny kanał.</li>
            <li>Testuj różne lokalizacje, by poznać najlepsze punkty łączności.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
