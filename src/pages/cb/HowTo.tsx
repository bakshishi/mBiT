/**
 * File: src/pages/cb/HowTo.tsx
 * Purpose: Practical step-by-step how to operate CB and basic controls overview.
 */

import React from 'react'

/**
 * CbHowTo
 * Gives a beginner-friendly step-by-step guide.
 */
export default function CbHowTo() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Jak zacząć — krok po kroku</h3>
      <ol className="mt-2 list-decimal pl-6 text-slate-700 space-y-2">
        <li>Zamontuj antenę jak najwyżej (np. dach auta). Dobra antena = lepszy zasięg.</li>
        <li>Włącz radio, ustaw głośność (VOLUME) na komfortowy poziom.</li>
        <li>Ustaw blokadę szumów (SQUELCH) minimalnie powyżej progu szumu.</li>
        <li>RF GAIN zwykle na maksimum; MIC GAIN tak, by nie przesterowywać.</li>
        <li>Wybierz kanał (np. 19 drogowy), nasłuchaj kilka sekund.</li>
        <li>
          Naciśnij PTT i wywołaj: „Brejk, brejk. Tu [twój znak/nick], kontrola łącza — odbiór.”
        </li>
        <li>Rozmowy prowadź krótko i konkretnie; po wypowiedzi puść PTT i czekaj.</li>
        <li>Po zakończeniu: „Dzięki, 73! [twój znak] QRT.”</li>
      </ol>

      <div className="mt-4 rounded-md bg-indigo-50 p-4 text-sm text-slate-800">
        <p className="font-medium">Typowe elementy radia:</p>
        <ul className="mt-2 list-disc pl-6">
          <li>PTT na mikrofonie (mówisz tylko gdy trzymasz przycisk).</li>
          <li>SQUELCH (blokada szumów), RF GAIN (czułość), MIC GAIN (głośność modulacji).</li>
          <li>AM/FM/SSB — przełączanie modulacji w zależności od potrzeb i modelu.</li>
        </ul>
      </div>
    </div>
  )
}
