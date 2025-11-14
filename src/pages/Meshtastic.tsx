/**
 * File: Meshtastic.tsx
 * Purpose: Detailed Meshtastic page for EU/PL configuration, presets, roles, etiquette, with unified styling and extended sections.
 */

import React from 'react'
import CopyField from '../components/CopyField'
import PageHeader from '../components/PageHeader'
import PageToc from '../components/PageToc'
import Section from '../components/Section'

/**
 * MeshtasticPage
 * Presents practical configuration for EU_868 with LONG_FAST and key operational guidance.
 * Extended with: Intro, Law in PL, Use cases, Getting started, Glossary, Links.
 */
export default function MeshtasticPage() {
  const toc = [
    { id: 'intro', label: 'Wprowadzenie' },
    { id: 'law', label: 'Prawo i ograniczenia (PL/EU)' },
    { id: 'use', label: 'Zastosowania' },
    { id: 'start', label: 'Jak zacząć' },
    { id: 'cli', label: 'Konfiguracja CLI' },
    { id: 'presets', label: 'Presety modemów' },
    { id: 'roles', label: 'Role nodów' },
    { id: 'netiquette', label: 'Netykieta' },
    { id: 'glossary', label: 'Słowniczek' },
    { id: 'links', label: 'Linki' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <PageHeader
        title="Meshtastic — EU/PL"
        subtitle="Region EU_868, domyślnie preset LONG_FAST (Bydgoszcz). Szyfrowanie AES, bardzo niskie zużycie energii i messaging bez sieci komórkowej."
      />

      <PageToc items={toc} />

      <Section id="intro" title="Wprowadzenie — czym jest Meshtastic?">
        <p>
          Meshtastic to otwarto-źródłowa platforma komunikacji typu mesh na bazie LoRa. Urządzenia (nody) tworzą
          samonaprawiającą się sieć, przekazując wiadomości dalej bez konieczności używania sieci komórkowej czy Wi‑Fi.
          Wspiera szyfrowanie end-to-end (AES) oraz pracę bateryjną przez wiele dni lub tygodni.
        </p>
      </Section>

      <div className="mt-8 grid gap-8">
        <Section id="law" title="Prawo i ograniczenia w Polsce/UE">
          <ul className="list-disc pl-5">
            <li>Zakres: EU_868 (869.40–869.65 MHz). Domyślna częstotliwość LONG_FAST: 869.525 MHz.</li>
            <li>Duty cycle: 10%/h (rolling window). Przekroczenie powoduje wstrzymanie TX w oprogramowaniu (o ile nie nadpisano).</li>
            <li>Moc i ERP: stosować się do lokalnych limitów (typowo do +27 dBm ERP). Antena i instalacja muszą być zgodne z przepisami.</li>
            <li>Wspólny preset i parametry radiowe są wymagane dla łączności z innymi węzłami w regionie.</li>
          </ul>
        </Section>

        <Section id="use" title="Zastosowania">
          <ul className="list-disc pl-5">
            <li>Łączność terenowa i wydarzenia (tracking, krótkie wiadomości, koordynacja).</li>
            <li>Backup komunikacji w sytuacjach kryzysowych bez infrastruktury operatorów.</li>
            <li>Mosty między dzielnicami/miastami poprzez stacjonarne routery wysokościowe.</li>
            <li>Telemetria i powiadomienia (czujniki, alerty) przy minimalnym poborze mocy.</li>
          </ul>
        </Section>

        <Section id="start" title="Jak zacząć (krok po kroku)">
          <ol className="list-decimal pl-5">
            <li>Wybierz sprzęt: T‑Beam, T‑Echo, Heltec V3, itp. Upewnij się, że to wersja 868 MHz.</li>
            <li>Wgraj stabilny firmware Meshtastic (instrukcje na stronie projektu).</li>
            <li>Skonfiguruj region i preset (EU_868 + LONG_FAST); ustaw hop limit 3.</li>
            <li>Sparuj z aplikacją (Android/iOS/desktop), ustaw nazwę noda i kanały.</li>
            <li>Test: wyślij wiadomość, sprawdź zasięg w terenie i sąsiedztwo routerów.</li>
          </ol>
        </Section>

        <Section id="cli" title="Konfiguracja CLI (EU/PL)">
          <div className="mt-3 grid gap-2">
            <CopyField command="meshtastic --set lora.region EU_868" />
            <CopyField command="meshtastic --set lora.modem_preset LONG_FAST" />
            <CopyField command="meshtastic --set lora.hop_limit 3" />
            <CopyField command="meshtastic --set lora.ignore_mqtt true" />
          </div>
          <p className="mt-3">
            Domyślna częstotliwość LONG_FAST: 869.525 MHz. Duty cycle w UE: 10%/h (rolling window).
          </p>
        </Section>

        <Section id="presets" title="Presety modemów (skrót)">
          <div className="mt-3 grid gap-3">
            <details className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
              <summary className="font-medium cursor-pointer">LONG_FAST — domyślny (Bydgoszcz)</summary>
              <ul className="mt-2 list-disc pl-5">
                <li>Bandwidth: 250 kHz</li>
                <li>SF: 11</li>
                <li>Data rate: ~1.07 kbps</li>
                <li>Link budget: ~153 dB</li>
                <li>Balans zasięg/prędkość; dobry w miastach i podmiejskich.</li>
              </ul>
            </details>
            <details className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
              <summary className="font-medium cursor-pointer">MEDIUM_FAST — gęste sieci</summary>
              <ul className="mt-2 list-disc pl-5">
                <li>Bandwidth: 250 kHz</li>
                <li>SF: 9</li>
                <li>Wyższa przepustowość, mniejszy zasięg; rozważ gdy sieć jest duża i gęsta.</li>
              </ul>
            </details>
          </div>
          <p className="mt-3">
            Zmiana presetu wymaga koordynacji całej społeczności — wszystkie nody muszą używać tego samego presetu.
          </p>
        </Section>

        <Section id="roles" title="Role nodów">
          <ul className="mt-2 grid gap-2">
            <li><strong>CLIENT</strong> — standardowy węzeł użytkownika (urządzenia przenośne).</li>
            <li><strong>ROUTER</strong> — retransmisja wszystkich pakietów (stacje stałe/repetery).</li>
            <li><strong>ROUTER_CLIENT</strong> — hybrydowa rola.</li>
          </ul>
          <p className="mt-2">
            Rekomendacja: większość użytkowników jako CLIENT; węzły wysokościowe tylko w porozumieniu jako ROUTER.
          </p>
        </Section>

        <Section id="netiquette" title="Netykieta i dobre praktyki">
          <ul className="list-disc pl-5">
            <li>Szanuj airtime — unikaj spamu; aktualizacje pozycji co 1–5 min.</li>
            <li>Hop limit 3 dla większości przypadków.</li>
            <li>Nie używaj MQTT na kanale głównym bez potrzeby.</li>
            <li>Koordynuj zmiany presetów i uruchamianie routerów.</li>
          </ul>
        </Section>

        <Section id="glossary" title="Słowniczek">
          <ul className="list-disc pl-5">
            <li><strong>Preset</strong> — zestaw parametrów modułu radiowego (BW, SF, CR, częstotliwość).</li>
            <li><strong>Hop limit</strong> — maksymalna liczba przeskoków pakietu w sieci mesh.</li>
            <li><strong>MQTT bridge</strong> — mostowanie ruchu przez Internet między meshami.</li>
            <li><strong>E2E (end-to-end)</strong> — szyfrowanie wiadomości pomiędzy nadawcą i odbiorcą.</li>
          </ul>
        </Section>

        <Section id="links" title="Linki i zasoby">
          <ul className="list-disc pl-5">
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://meshtastic.org/">Meshtastic — oficjalna strona</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://meshtastic.org/docs/">Meshtastic — dokumentacja</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/">Blog: LongFast vs MediumFast</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://lorastats.pl/">lorastats.pl — statystyki</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://meshmap.net/">meshmap.net — mapa sieci</a></li>
          </ul>
        </Section>
      </div>
    </div>
  )
}
