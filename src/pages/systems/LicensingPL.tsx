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
            <li>Po zdaniu: otrzymujesz zaświadczenie o zdaniu egzaminu (od 12.11.2024 zamiast dawnego świadectwa operatora; wcześniejsze świadectwa zachowują ważność).</li>
            <li>Wniosek o pozwolenie radiowe przez PUE UKE (pue.uke.gov.pl) z zaświadczeniem i dowodem opłaty skarbowej (82 zł); UKE ma do 6 tygodni na wydanie pozwolenia. Do czasu otrzymania pozwolenia i znaku wywoławczego nie wolno nadawać.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Struktura egzaminu</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Test pisemny: 4 przedmioty (technika i radioelektronika, bezpieczeństwo pracy, procedury operatorskie, przepisy), po 8 pytań z 3 odpowiedziami; do zaliczenia min. 6/8 z każdego przedmiotu.</li>
            <li>Brak części ustnej w opisanym formacie (zasady stosowane od 1.05.2026 wg egzaminkf.pl).</li>
            <li>Bazy pytań i trening: egzaminkf.pl, test.sp6dlv.pl. Aktualne zasady zawsze sprawdź w UKE.</li>
          </ul>
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        Uwaga: sam fakt zdania egzaminu nie uprawnia do pracy na pasmach — wymagana jest decyzja administracyjna (pozwolenie).
      </p>
    </section>
  )
}
