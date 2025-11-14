/**
 * File: plan/PlanMistakes.tsx
 * Purpose: Common mistakes and remedies; uses an accessible, responsive table.
 */

import React from 'react'

/**
 * PlanMistakes
 * Renders a table of common problems, causes and fixes.
 */
export default function PlanMistakes() {
  const rows = [
    {
      problem: 'Brak łączności',
      cause: 'Złe umiejscowienie anteny, przeszkody terenowe',
      fix: 'Wyjdź wyżej, unikaj zabudowy i przeszkód.',
    },
    {
      problem: 'Nikt nie odpowiada',
      cause: 'Zły kanał lub pora',
      fix: 'PMR: kanał 2 (lub 12), CB: 13 AM / 11 USB, testy o 20:00.',
    },
    {
      problem: 'Zakłócenia, szumy',
      cause: 'Zbyt wiele stacji na kanale',
      fix: 'Zmień kanał lub użyj tonu CTCSS (np. 14 w górach).',
    },
    {
      problem: 'Urządzenie się nie włącza',
      cause: 'Rozładowana bateria',
      fix: 'Miej zapasowe baterie i powerbank; regularnie ładuj.',
    },
    {
      problem: 'Meshtastic nie działa',
      cause: 'Brak innych węzłów w zasięgu',
      fix: 'Rozszerz sieć, dodaj repetery w wysokich lokalizacjach.',
    },
  ]

  return (
    <section id="bledy" aria-labelledby="mistakes-title" className="mb-10">
      <h2 id="mistakes-title" className="text-lg font-semibold text-slate-900">7. Najczęstsze błędy i jak ich unikać</h2>

      <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-[640px] w-full text-sm">
          <thead className="bg-slate-50 text-slate-900">
            <tr>
              <th scope="col" className="px-4 py-2 text-left font-medium">Problem</th>
              <th scope="col" className="px-4 py-2 text-left font-medium">Przyczyna</th>
              <th scope="col" className="px-4 py-2 text-left font-medium">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((r) => (
              <tr key={r.problem}>
                <td className="px-4 py-2">{r.problem}</td>
                <td className="px-4 py-2">{r.cause}</td>
                <td className="px-4 py-2">{r.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
