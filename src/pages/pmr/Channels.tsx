/**
 * File: pmr/Channels.tsx
 * Purpose: Channels, frequencies, tones (CTCSS/DCS), and recommended use-cases for PMR446.
 */

import React from 'react'

/**
 * PMRChannels
 * Provides channel ranges, key community conventions and tone basics.
 */
export default function PMRChannels() {
  return (
    <section id="kanaly" aria-labelledby="pmr-channels-title" className="mb-10">
      <h2 id="pmr-channels-title" className="text-lg font-semibold text-slate-900">Kanały i tony</h2>

      <div className="mt-3 text-sm text-slate-700">
        <p>
          Zakres PMR446: 446.0–446.2 MHz. Kanały 1–8: 446.00625–446.09375 MHz; kanały 9–16: 446.10625–446.19375 MHz
          (odstęp 12.5 kHz).
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card title="Alarm/SOS (społ. konwencja)">
            <li>Kanał 1 — 446.00625 MHz (często z CTCSS 67.0 Hz). Używaj tylko w zagrożeniu życia.</li>
          </Card>

          <Card title="Kryzys i testy">
            <li>Kanał 2 — testy łączności awaryjnej (13. dzień mies. i ostatnia sobota, 20:00).</li>
            <li>Kanał 12 — zapasowy kanał testowy.</li>
          </Card>

          <Card title="Góry i turystyka">
            <li>Kanał 3 — wywoławczy w górach; popularny subton 14 (107.2 Hz) dla ratunkowych scenariuszy.</li>
          </Card>

          <Card title="Rozmowy rodzinne/sąsiedzkie">
            <li>Kanały 7, 11, 14, 16 — zwyczajowo luźne rozmowy i koordynacja lokalna.</li>
          </Card>
        </div>

        <ToneBox />

        <p className="mt-3 text-xs text-slate-600">
          Uwaga: powyższe przeznaczenia to praktyki społeczności — nie są urzędowo przypisane. Zawsze najpierw
          nasłuchaj kanału, aby nie przeszkadzać trwającym korespondencjom.
        </p>
      </div>
    </section>
  )
}

/** Simple bordered card list wrapper */
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <h3 className="text-sm font-medium text-slate-900">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">{children}</ul>
    </div>
  )
}

/** Tone basics box (CTCSS/DCS) */
function ToneBox() {
  return (
    <div className="mt-5 rounded-lg border border-slate-200 p-4">
      <h3 className="text-sm font-medium text-slate-900">CTCSS/DCS — co to jest?</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        <li>CTCSS — analogowy ton (67–254 Hz) dodawany do głosu; otwiera squelch tylko przy zgodnym tonie.</li>
        <li>DCS — cyfrowy odpowiednik (ciąg bitów) działający podobnie do CTCSS.</li>
        <li>To filtracja odsłuchu, nie szyfrowanie — każdy może podsłuchać przy wyłączonej blokadzie (Monitor).</li>
      </ul>
    </div>
  )
}
