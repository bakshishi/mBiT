/**
 * File: Reticulum.tsx
 * Purpose: Overview of Reticulum with unified styling, extended sections and accessible markup.
 */

import React from 'react'
import PageHeader from '../components/PageHeader'
import PageToc from '../components/PageToc'
import Section from '../components/Section'

/**
 * ReticulumPage
 * Short intro and EU LoRa parameters with accessible markup; extended with use cases, how-to, etiquette, glossary, links.
 */
export default function ReticulumPage() {
  const toc = [
    { id: 'intro', label: 'Wprowadzenie' },
    { id: 'law', label: 'Parametry i prawo (PL/EU)' },
    { id: 'hardware', label: 'Sprzęt' },
    { id: 'use', label: 'Zastosowania' },
    { id: 'start', label: 'Jak zacząć' },
    { id: 'etiquette', label: 'Etykieta' },
    { id: 'glossary', label: 'Słowniczek' },
    { id: 'links', label: 'Linki' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Reticulum — suwerenne, szyfrowane sieci"
        subtitle="Oparty na kryptografii stos sieciowy (Curve25519, E2E) do budowy niezależnych, federujących się sieci — bez cenzury i centralnego kontrolera."
      />

      <PageToc items={toc} />

      <div className="grid gap-8">
        <Section id="intro" title="Wprowadzenie — czym jest Reticulum?">
          <p>
            Reticulum to otwarty stos sieciowy zapewniający bezpieczną, odporną na cenzurę łączność pomiędzy węzłami
            przez wiele mediów: LoRa, Packet Radio, Wi‑Fi i tunele IP. Nie jest jedną globalną siecią, lecz narzędziem
            do budowania tysięcy suwerennych sieci, które mogą łączyć się lub separować według potrzeb.
          </p>
        </Section>

        <Section id="law" title="Parametry LoRa (PL/EU) i zgodność">
          <ul className="list-disc pl-5">
            <li>Zakres EU_868: 868–869.525 MHz; preferowane: 868 MHz lub 869.525 MHz.</li>
            <li>Parametry referencyjne: BW 125 kHz, SF ≥ 10, CR 4/8 (dla 868 MHz).</li>
            <li>Moc i duty cycle: zgodnie z regulacjami UE (10%/h, lokalne limity ERP).</li>
          </ul>
        </Section>

        <Section id="hardware" title="Sprzęt">
          <ul className="list-disc pl-5">
            <li>RNode (unsigned.io), Heltec V3, RAK4631, LilyGo — popularne platformy.</li>
            <li>Interfejsy: LoRa, Packet Radio (ham), Wi‑Fi, tunelowanie IP.</li>
          </ul>
        </Section>

        <Section id="use" title="Zastosowania">
          <ul className="list-disc pl-5">
            <li>Sieci prywatne z wysokim bezpieczeństwem i E2E.</li>
            <li>Mostkowanie lokalizacji przez Internet (tunele) i węzły tranzytowe.</li>
            <li>Off‑grid, odporne łączności dla społeczności i organizacji.</li>
          </ul>
        </Section>

        <Section id="start" title="Jak zacząć">
          <ol className="list-decimal pl-5">
            <li>Wybierz sprzęt (np. RNode/Heltec) w wersji dla EU_868.</li>
            <li>Zainstaluj Reticulum (rns), uruchom konfigurację i generację kluczy.</li>
            <li>Skonfiguruj radio (LoRa/Packet) i parametry zgodne z regionem.</li>
            <li>Zbuduj małą sieć testową (2–3 węzły), przetestuj trasy i opóźnienia.</li>
          </ol>
        </Section>

        <Section id="etiquette" title="Etykieta i dobre praktyki">
          <ul className="list-disc pl-5">
            <li>Uzgadniaj parametry fizyczne (BW, SF, CR) i kanały w lokalnej sieci.</li>
            <li>Stosuj zasady minimalnego ruchu — krótkie, potrzebne transmisje.</li>
            <li>Dokumentuj topologię i klucze (bezpiecznie), planuj rotacje/aktualizacje.</li>
          </ul>
        </Section>

        <Section id="glossary" title="Słowniczek">
          <ul className="list-disc pl-5">
            <li><strong>Curve25519</strong> — krzywa eliptyczna dla ECDH używana w Reticulum.</li>
            <li><strong>E2E</strong> — szyfrowanie od końca do końca, tylko strony znają treść.</li>
            <li><strong>Tranzyt</strong> — przekazywanie pakietów przez pośrednie węzły/sieci.</li>
          </ul>
        </Section>

        <Section id="links" title="Linki i zasoby">
          <ul className="list-disc pl-5">
            <li>
              <a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://reticulum.network">
                reticulum.network — oficjalna dokumentacja
              </a>
            </li>
            <li>
              <a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://unsigned.io/rnode/">
                unsigned.io/rnode — RNode
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  )
}
