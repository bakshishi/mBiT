/**
 * File: src/pages/cb/Intro.tsx
 * Purpose: CB intro section — what it is, why use it, who it's for.
 */

import React from 'react'

/**
 * CbIntro
 * Explains CB basics and value proposition.
 */
export default function CbIntro() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Czym jest CB Radio i dlaczego warto?</h3>
      <p className="mt-2 text-slate-700">
        CB (Citizen Band) to bezlicencyjny system łączności w paśmie 27 MHz. W Polsce możesz legalnie
        korzystać z radia CB bez egzaminów i opłat — wystarczy urządzenie zgodne z normami. To świetny
        wybór dla kierowców, turystów, off-roadowców, osób zainteresowanych łącznością awaryjną i
        początkujących entuzjastów radia.
      </p>
      <ul className="mt-4 list-disc pl-6 text-slate-700">
        <li>Niski próg wejścia — sprzęt od ~150–600 zł, prosta obsługa.</li>
        <li>40 kanałów CEPT, modulacje AM/FM oraz SSB (dla dalekich łączności).</li>
        <li>Realne zastosowania: informacje drogowe, koordynacja w terenie, awaryjna komunikacja.</li>
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        Uwaga: nie myl CB z krótkofalarstwem — pasma amatorskie wymagają licencji UKE.
      </p>
    </div>
  )
}
