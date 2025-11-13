/**
 * File: Reticulum.tsx
 * Purpose: Overview of Reticulum with safe JSX (escape special characters).
 */

import React from 'react'

/**
 * ReticulumPage
 * Short intro and EU LoRa parameters with accessible markup.
 */
export default function ReticulumPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Reticulum — suwerenne, szyfrowane sieci</h1>
        <p className="text-slate-700 mt-1">
          Reticulum to stos sieciowy oparty na kryptografii (Curve25519, E2E) do budowy tysięcy
        niezależnych sieci. Nie jest jedną siecią, lecz narzędziem do łączenia ludzi i społeczności.
        </p>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="cfg" className="text-lg font-semibold text-slate-900">Parametry LoRa (PL/EU)</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        <li>Częstotliwość: 868–869.525 MHz</li>
        <li>BW: 125 kHz, SF: 10+, CR: 4/8 (zalecenia dla 868 MHz)</li>
        <li>Moc: zgodnie z regulacjami EU, duty cycle 10%/h</li>
        <li>Zasięg: kilometry w mieście, ponad 100 km przy LOS</li>
        </ul>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Sprzęt</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        <li>RNode (unsigned.io), Heltec V3, RAK4631, LilyGo</li>
        <li>Interfejsy: LoRa, Packet Radio, Wi-Fi, tunelowanie IP</li>
        </ul>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Zasoby</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        <li>
          Oficjalna dokumentacja:{" "}
          <a href="https://reticulum.network" target="_blank" rel="noreferrer">
            reticulum.network
          </a>
        </li>
        <li>
          RNode:{" "}
          <a href="https://unsigned.io/rnode/" target="_blank" rel="noreferrer">
            unsigned.io/rnode
          </a>
        </li>
        </ul>
      </section>
    </div>
  )
}
