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

        {/* Tabela wszystkich 16 kanałów PMR446 */}
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-50 text-slate-900 border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-3 font-semibold">Kanał</th>
                <th className="py-2.5 px-3 font-semibold">Częstotliwość</th>
                <th className="py-2.5 px-3 font-semibold">Krok</th>
                <th className="py-2.5 px-3 font-semibold">Zwyczajowe przeznaczenie w PL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="bg-red-50/40">
                <td className="py-2 px-3 font-bold text-red-700">1</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.00625 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3"><span className="inline-block rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-800">SOS / Ratunkowy</span> Zagrożenie życia (subton 67.0 Hz)</td>
              </tr>
              <tr className="bg-amber-50/40">
                <td className="py-2 px-3 font-bold text-amber-700">2</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.01875 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3"><span className="inline-block rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">Kryzysowy / Testy</span> Harmonogram: 13. dzień &amp; ostatnia sobota, 20:00</td>
              </tr>
              <tr className="bg-emerald-50/40">
                <td className="py-2 px-3 font-bold text-emerald-700">3</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.03125 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3"><span className="inline-block rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-800">Góry / Turystyka</span> Wywoławczy górski (CTCSS 14 / 107.2 Hz)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900">4</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.04375 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Ogólny, praca na budowach, łączność robocza</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900">5</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.05625 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Ogólny, wycieczki, łączność lokalna</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900">6</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.06875 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Ogólny, łączność hobbystyczna</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-slate-900">7</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.08125 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Koordynacja sąsiedzka i lokalne grupy kryzysowe</td>
              </tr>
              <tr className="bg-indigo-50/40">
                <td className="py-2 px-3 font-bold text-indigo-700">8</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.09375 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3"><span className="inline-block rounded bg-indigo-100 px-1.5 py-0.5 text-xs font-semibold text-indigo-800">Wywoławczy EU</span> Nieformalny ogólny kanał wywoławczy w Europie</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">9</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.10625 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR (często dPMR/DMR Tier I lub analog)</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">10</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.11875 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">11</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.13125 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR, łączność rodzinna</td>
              </tr>
              <tr className="bg-amber-50/40">
                <td className="py-2 px-3 font-bold text-amber-700">12</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.14375 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3"><span className="inline-block rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">Zapasowy Testowy</span> Alternatywa dla kanału 2 w razie zakłóceń</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">13</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.15625 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">14</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.16875 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">15</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.18125 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR</td>
              </tr>
              <tr className="bg-slate-50/80">
                <td className="py-2 px-3 font-medium text-slate-900">16</td>
                <td className="py-2 px-3 font-mono font-medium text-slate-900">446.19375 MHz</td>
                <td className="py-2 px-3 text-xs text-slate-500">12.5 kHz</td>
                <td className="py-2 px-3">Rozszerzone pasmo PMR, koordynacja</td>
              </tr>
            </tbody>
          </table>
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
