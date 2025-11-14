/**
 * File: pmr/Intro.tsx
 * Purpose: PMR446 intro section – what it is, why it's useful, quick facts for beginners.
 */

import React from 'react'

/**
 * PMRIntro
 * Briefly explains PMR446 benefits and core specs.
 */
export default function PMRIntro() {
  return (
    <section id="wprowadzenie" aria-labelledby="pmr-intro-title" className="mb-10">
      <h2 id="pmr-intro-title" className="text-lg font-semibold text-slate-900">Wprowadzenie</h2>
      <p className="mt-2 text-sm text-slate-700">
        PMR446 (Private Mobile Radio) to bezlicencyjne pasmo 446 MHz dostępne w całej UE, idealne na start z
        radiokomunikacją: szybkie uruchomienie, prosta obsługa, niski koszt. Urządzenia pracują z mocą do
        500 mW ERP, na 16 kanałach FM (odstęp 12.5 kHz) i muszą mieć antenę niewymienną.
      </p>
      <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
        <li>Brak licencji i rejestracji — legalne użytkowanie w UE/PL zgodnie z ETSI EN 303 405.</li>
        <li>Typowy zasięg: setki metrów do kilku kilometrów; lepsze wyniki w terenie otwartym/na wysokości.</li>
        <li>Świetne do rodzinnych wycieczek, koordynacji sąsiedzkiej i łączności awaryjnej.</li>
      </ul>
    </section>
  )
}
