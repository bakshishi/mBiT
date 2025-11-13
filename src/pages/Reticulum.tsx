/**
 * File: Reticulum.tsx
 * Purpose: Reticulum overview page with safe JSX content (escapes special characters).
 */

import React from 'react'

/**
 * ReticulumPage
 * High-level intro, LoRa params for PL/EU, and links to official resources.
 */
export default function ReticulumPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
      <h1>Reticulum — Suwerenna Sieć Szyfrowana</h1>
      <p>
        Reticulum to oparty na kryptografii stos sieciowy do budowy lokalnych i rozległych sieci
        z wykorzystaniem łatwo dostępnego sprzętu. Nie jest jedną siecią — to narzędzie do
        tworzenia tysięcy niezależnych sieci, które mogą współpracować lub działać autonomicznie.
      </p>

      <h2>Bezpieczeństwo</h2>
      <ul>
        <li>ECDH (Curve25519) i obowiązkowe end-to-end encryption.</li>
        <li>Anonimowość nadawcy domyślnie, brak inspekcji ruchu.</li>
        <li>Potwierdzenia doręczeń niewymazywalne (unforgeable acks).</li>
      </ul>

      <h2>Parametry LoRa dla Polski</h2>
      <ul>
        <li>Częstotliwość: 868 MHz lub 869.525 MHz</li>
        <li>Bandwidth: 125 kHz</li>
        <li>Spreading Factor: 10 (minimum)</li>
        <li>Coding Rate: 4/8</li>
        <li>Moc: zgodnie z regulacjami EU</li>
      </ul>

      <h2>RNode i Interfejsy</h2>
      <p>
        RNode to otwarty transceiver (unsigned.io/rnode). Obsługiwane pasma: 433/868/915 MHz, 2.4 GHz.
        Przepływności od setek bit/s do kilku Mbit/s. Zasięg: kilometry w mieście, &gt;100 km przy LOS.
      </p>

      <h2>Zasoby</h2>
      <ul>
        <li>Oficjalna strona: reticulum.network</li>
        <li>Dokumentacja: GitHub markqvist/Reticulum i Reticulum Manual (PDF)</li>
      </ul>
    </article>
  )
}
