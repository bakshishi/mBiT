/**
 * File: systems/OtherSystems.tsx
 * Purpose: Section covering other emergency communication systems beyond Meshtastic/MeshCore/Reticulum/PMR/CB.
 */

import React from 'react'

/**
 * SystemsOtherSystems
 * Summarizes APRS, D-STAR, TETRA, ALE, JS8Call and GMDSS with practical emergency relevance.
 */
export default function SystemsOtherSystems() {
  return (
    <section id="inne" aria-labelledby="other-title" className="mb-10">
      <h2 id="other-title" className="text-lg font-semibold text-slate-900">Inne systemy komunikacji awaryjnej</h2>

      <div className="mt-3 space-y-5">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">APRS (Automatic Packet Reporting System)</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Pozycjonowanie, wiadomości tekstowe, telemetry, stacje pogodowe; AX.25.</li>
            <li>Polska: 144,800 MHz (2 m) i 432,500 MHz (70 cm).</li>
            <li>Digipeatery i IGate’y spinają radio z Internetem (APRS‑IS).</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">D‑STAR</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Cyfrowy głos (DV, AMBE+2) + dane; oraz tryb DD (do 128 kb/s na 1,2 GHz).</li>
            <li>Łączenie przez reflektory — łączność globalna i usługi danych (D‑PRS).</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">TETRA</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Standard ETSI dla służb bezpieczeństwa; kanał 25 kHz, TDMA 4 sloty.</li>
            <li>Priorytety, grupy wywołań, krótkie czasy zestawiania połączeń.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">ALE (Automatic Link Establishment)</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Automatyczny wybór najlepszej częstotliwości na HF w zmiennych warunkach.</li>
            <li>2G/3G ALE: skanowanie kanałów, sondowanie (soundings), BER‑ranking.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">JS8Call (dialogowy FT8)</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Odporna komunikacja tekstowa “klawiatura‑do‑klawiatury”, słabe sygnały.</li>
            <li>Funkcje Heartbeat, RELAY i zostawianie wiadomości.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">GMDSS (morski system alarmowy)</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Obszary A1–A4; obowiązkowe EPIRB, NAVTEX, VHF z DSC — automatyczne alarmowanie.</li>
            <li>Integracja radiowa i satelitarna (np. Inmarsat) dla bezpieczeństwa na morzu.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
