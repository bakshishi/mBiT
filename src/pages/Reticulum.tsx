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
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
      <h1>Reticulum — suwerenne, szyfrowane sieci</h1>
      <p>
        Reticulum to stos sieciowy oparty na kryptografii (Curve25519, E2E) do budowy tysięcy
        niezależnych sieci. Nie jest jedną siecią, lecz narzędziem do łączenia ludzi i społeczności.
      </p>

      <h2>Parametry LoRa (PL/EU)</h2>
      <ul>
        <li>Częstotliwość: 868–869.525 MHz</li>
        <li>BW: 125 kHz, SF: 10+, CR: 4/8 (zalecenia dla 868 MHz)</li>
        <li>Moc: zgodnie z regulacjami EU, duty cycle 10%/h</li>
        <li>Zasięg: kilometry w mieście, &gt;100 km przy LOS</li>
      </ul>

      <h2>Sprzęt</h2>
      <ul>
        <li>RNode (unsigned.io), Heltec V3, RAK4631, LilyGo</li>
        <li>Interfejsy: LoRa, Packet Radio, Wi-Fi, tunelowanie IP</li>
      </ul>

      <h2>Zasoby</h2>
      <ul>
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
    </article>
  )
}
