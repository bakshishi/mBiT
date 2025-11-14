/**
 * File: plan/PlanGlossary.tsx
 * Purpose: Short glossary of common radio and mesh terms.
 */

import React from 'react'

/** Glossary term shape */
interface Term {
  term: string
  def: string
}

/**
 * PlanGlossary
 * Displays basic definitions relevant to the emergency plan.
 */
export default function PlanGlossary() {
  const terms: Term[] = [
    { term: 'PMR446', def: 'Private Mobile Radio, pasmo 446 MHz, bez licencji, moc do 0,5 W ERP.' },
    { term: 'CB Radio', def: 'Citizens Band, pasmo 27 MHz, zwykle 4 W (AM/FM) lub 12 W (SSB).' },
    { term: 'Meshtastic', def: 'Otwarty system komunikacji mesh oparty na LoRa, działa bez Internetu.' },
    { term: 'LoRa', def: 'Technologia radiowa dalekiego zasięgu o niskim zużyciu energii.' },
    { term: 'Mesh Network', def: 'Sieć kratowa, w której urządzenia przekazują wiadomości dalej.' },
    { term: 'Repeater', def: 'Urządzenie retransmitujące sygnał, zwiększające zasięg.' },
    { term: 'CTCSS', def: 'Continuous Tone‑Coded Squelch System, ton podkanałowy (np. ton 14).' },
    { term: 'SSB', def: 'Single Side Band — modulacja boczna (USB/LSB) w CB; lepszy zasięg.' },
    { term: 'Winlink', def: 'System e‑mail przez radio krótkofalarskie; wymaga licencji.' },
    { term: 'HF', def: 'High Frequency, fale krótkie (krótkofalarstwo); wymaga licencji.' },
  ]

  return (
    <section id="slowniczek" aria-labelledby="glossary-title" className="mb-10">
      <h2 id="glossary-title" className="text-lg font-semibold text-slate-900">11. Słowniczek podstawowych pojęć</h2>
      <dl className="mt-3 grid gap-3 md:grid-cols-2">
        {terms.map((t) => (
          <div key={t.term} className="rounded-lg border border-slate-200 p-4">
            <dt className="text-sm font-medium text-slate-900">{t.term}</dt>
            <dd className="mt-1 text-sm text-slate-700">{t.def}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
