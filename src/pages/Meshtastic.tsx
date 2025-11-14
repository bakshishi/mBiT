/**
 * File: Meshtastic.tsx
 * Purpose: Detailed Meshtastic page for EU/PL configuration, presets, roles, and etiquette.
 */

import React from 'react'
import CopyField from '../components/CopyField'

/**
 * MeshtasticPage
 * Presents practical configuration for EU_868 with LONG_FAST and key operational guidance.
 */
export default function MeshtasticPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Meshtastic — EU/PL</h1>
        <p className="text-slate-700 mt-1">
          Region EU_868, domyślnie preset <strong>LONG_FAST</strong> (Bydgoszcz). Najważniejsza informacja dla Bydgoszczy: <strong>Region Bydgoszczy</strong> eksperymentuje z presetem <strong>LongFast</strong>, a NIE MediumFast. Różnica wynika z zarządzania zagęszczeniem sieci i limitami duty cycle (10% na godzinę zgodnie z regulacjami EU). 
        </p>
      </header>

      <section aria-labelledby="cli" className="mt-6">
        <h2 id="cli" className="text-lg font-semibold text-slate-900">Konfiguracja CLI (EU/PL)</h2>
        <div className="mt-3 grid gap-2">
          <CopyField command="meshtastic --set lora.region EU_868" />
          <CopyField command="meshtastic --set lora.modem_preset LONG_FAST" />
          <CopyField command="meshtastic --set lora.hop_limit 3" />
          <CopyField command="meshtastic --set lora.ignore_mqtt true" />
        </div>
        <p className="mt-3 text-sm text-slate-700">
          Domyślna częstotliwość LONG_FAST: 869.525 MHz. Duty cycle w EU: 10%/h (rolling window).
        </p>
      </section>

      <section aria-labelledby="presets" className="mt-10">
        <h2 id="presets" className="text-lg font-semibold text-slate-900">Presety modemów (skrót)</h2>
        <div className="mt-3 grid gap-3">
          <details className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
            <summary className="font-medium cursor-pointer">LONG_FAST – domyślny (Bydgoszcz)</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Bandwidth: 250 kHz</li>
              <li>Spreading Factor: 11</li>
              <li>Data rate: ~1.07 kbps</li>
              <li>Link budget: ~153 dB</li>
              <li>Balans zasięg/prędkość; dobry w miastach i podmiejskich.</li>
            </ul>
          </details>
          <details className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
            <summary className="font-medium cursor-pointer">MEDIUM_FAST – gęste sieci</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Bandwidth: 250 kHz</li>
              <li>Spreading Factor: 9</li>
              <li>Wyższa przepustowość, mniejszy zasięg; rozważ gdy sieć jest duża i gęsta.</li>
            </ul>
          </details>
        </div>
        <p className="mt-3 text-sm text-slate-700">
          Zmiana presetu wymaga koordynacji całej społeczności – wszystkie nody muszą używać tego samego presetu.
        </p>
      </section>

      <section aria-labelledby="roles" className="mt-10">
        <h2 id="roles" className="text-lg font-semibold text-slate-900">Role nodów</h2>
        <ul className="mt-2 grid gap-2 text-sm text-slate-700">
          <li><strong>CLIENT</strong> – standardowy węzeł użytkownika (urządzenia przenośne).</li>
          <li><strong>ROUTER</strong> – retransmisja wszystkich pakietów (stacje stałe/repetery).</li>
          <li><strong>ROUTER_CLIENT</strong> — hybrydowa rola.</li>
        </ul>
        <p className="mt-2 text-sm text-slate-700">
          Rekomendacja: większość użytkowników jako CLIENT; węzły wysokościowe tylko w porozumieniu jako ROUTER.
        </p>
      </section>

      <section aria-labelledby="netiquette" className="mt-10">
        <h2 id="netiquette" className="text-lg font-semibold text-slate-900">Netykieta i dobre praktyki</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Szanuj airtime – unikaj spamu; aktualizacje pozycji co 1–5 min.</li>
          <li>Hop limit 3 dla większości przypadków.</li>
          <li>Nie używaj MQTT na kanale głównym bez potrzeby.</li>
          <li>Koordynuj zmiany presetów i uruchamianie routerów.</li>
        </ul>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Polskie zasoby</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li><a className="text-[#667eea] underline" target="_blank" rel="noopener noreferrer" href="https://lorastats.pl">lorastats.pl</a></li>
          <li><a className="text-[#667eea] underline" target="_blank" rel="noopener noreferrer" href="https://diver.net.pl/meshtastic">diver.net.pl/meshtastic</a></li>
        </ul>
      </section>
    </div>
  )
}
