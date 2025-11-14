/**
 * File: systems/LicensingPL.tsx
 * Purpose: Section describing the Polish amateur radio licensing process per UKE.
 */

import React from 'react'

/**
 * SystemsLicensingPL
 * Outlines exam structure (post 2024 changes) and application steps for Polish permits.
 */
export default function SystemsLicensingPL() {
  return (
    <section id="licencje" aria-labelledby="lic-title" className="mb-10">
      <h2 id="lic-title" className="text-lg font-semibold text-slate-900">Licencje w Polsce (UKE)</h2>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Jak uzyskać uprawnienia</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Rejestracja na egzamin: portal UKE — egzaminy.uke.gov.pl.</li>
            <li>Po zdaniu: otrzymujesz zaświadczenie (bez dawnego “świadectwa operatora”).</li>
            <li>Wniosek o pozwolenie RA‑i przez PUE UKE (pue.uke.gov.pl), opłata skarbowa.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Struktura egzaminu</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Część pisemna: 20 pytań (po 5 z: elektrotechnika/radiotechnika, obsługa, BHP, przepisy).</li>
            <li>Część ustna: alfabet fonetyczny, kody Q, raportowanie, krótka łączność próbna.</li>
            <li>Bazy pytań i trening: egzaminkf.pl, test.sp6dlv.pl.</li>
          </ul>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        Uwaga: sam fakt zdania egzaminu nie uprawnia do pracy na pasmach — wymagana jest decyzja administracyjna (pozwolenie).
      </p>
    </section>
  )
}
