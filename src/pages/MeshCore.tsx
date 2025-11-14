/**
 * File: MeshCore.tsx
 * Purpose: MeshCore overview for PL/EU with EU/UK Narrow preset and differences vs Meshtastic, unified styling and extended sections.
 */

import React from 'react'
import PageHeader from '../components/PageHeader'
import PageToc from '../components/PageToc'
import Section from '../components/Section'

/**
 * MeshCorePage
 * Describes MeshCore basics, configuration, use cases, etiquette and resources for PL/EU.
 */
export default function MeshCorePage() {
  const toc = [
    { id: 'intro', label: 'Wprowadzenie' },
    { id: 'law', label: 'Prawo i ograniczenia (PL/EU)' },
    { id: 'use', label: 'Zastosowania' },
    { id: 'config', label: 'Konfiguracja EU/UK Narrow' },
    { id: 'diff', label: 'Różnice vs Meshtastic' },
    { id: 'start', label: 'Jak zacząć' },
    { id: 'netiquette', label: 'Etykieta' },
    { id: 'glossary', label: 'Słowniczek' },
    { id: 'links', label: 'Linki' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <PageHeader
        title="MeshCore — EU/PL"
        subtitle="Lekkie rozwiązanie mesh z direct‑path routingiem i niskim zużyciem energii. Aktualna konfiguracja dla Polski: EU/UK Narrow."
      />

      <PageToc items={toc} />

      <div className="grid gap-8">
        <Section id="intro" title="Wprowadzenie — czym jest MeshCore?">
          <p>
            MeshCore to lekka biblioteka i protokół komunikacji mesh oparty na LoRa, zaprojektowany pod niskie zużycie
            energii i prostotę wdrożenia. Zamiast zalewania (flood) stosuje direct‑path routing, co ogranicza nadmiar
            pakietów i poprawia efektywność w gęstych sieciach.
          </p>
        </Section>

        <Section id="law" title="Prawo i ograniczenia w Polsce/UE">
          <ul className="list-disc pl-5">
            <li>Zakres EU_868 (m.in. 869.4–869.65 MHz). Należy zachować zgodność z lokalnymi przepisami ETSI.</li>
            <li>Duty cycle: 10%/h – planuj ruch umiarkowanie, bez nadmiarowych beaconów.</li>
            <li>ERP i anteny: stosuj dopuszczalne moce i legalne instalacje antenowe.</li>
          </ul>
        </Section>

        <Section id="use" title="Zastosowania">
          <ul className="list-disc pl-5">
            <li>Sieci niskomocowe off‑grid (czujniki, powiadomienia, komunikacja tekstowa).</li>
            <li>Repetery/węzły stałe na wysokościach do pokrycia miast/pasm górskich.</li>
            <li>Alternatywa dla przepełnionych sieci flood‑based.</li>
          </ul>
        </Section>

        <Section id="config" title="Konfiguracja EU/UK Narrow (PL 2025)">
          <ul className="list-disc pl-5">
            <li>Frequency: 869.618 MHz</li>
            <li>Bandwidth: 62.5 kHz</li>
            <li>Spreading Factor: 8</li>
            <li>Coding Rate: 8</li>
          </ul>
        </Section>

        <Section id="diff" title="Różnice vs Meshtastic">
          <ul className="list-disc pl-5">
            <li>Direct‑path (MeshCore) zamiast flood‑based (Meshtastic).</li>
            <li>Niższe zużycie energii i lżejszy stos.</li>
            <li>Mniejsza, ale rosnąca społeczność i ekosystem.</li>
          </ul>
        </Section>

        <Section id="start" title="Jak zacząć">
          <ol className="list-decimal pl-5">
            <li>Wybierz kompatybilny moduł (Heltec V3, RAK4631, LilyGo, itp.).</li>
            <li>Wgraj firmware MeshCore i wybierz preset EU/UK Narrow.</li>
            <li>Skonfiguruj częstotliwość, SF, CR, oraz identyfikację węzła.</li>
            <li>Uzgodnij parametry z lokalną grupą, wykonaj testy terenowe.</li>
          </ol>
        </Section>

        <Section id="netiquette" title="Etykieta i dobre praktyki">
          <ul className="list-disc pl-5">
            <li>Uzgadniaj zmiany parametrów (węzły muszą słyszeć się nawzajem).</li>
            <li>Minimalizuj ruch okresowy; testuj jak najkrótsze paczki danych.</li>
            <li>Dokumentuj wdrożenia (lokalizacja, moc, anteny) dla reproducji.</li>
          </ul>
        </Section>

        <Section id="glossary" title="Słowniczek">
          <ul className="list-disc pl-5">
            <li><strong>Direct‑path routing</strong> — wybór trasy na podstawie bezpośrednich ścieżek między węzłami.</li>
            <li><strong>Preset EU/UK Narrow</strong> — parametry zoptymalizowane pod EU_868 i mniejsze BW.</li>
          </ul>
        </Section>

        <Section id="links" title="Linki i zasoby">
          <ul className="list-disc pl-5">
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://lorameshcore.pl">lorameshcore.pl — portal PL</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://diver.net.pl/meshcore">diver.net.pl/meshcore — przewodniki</a></li>
            <li><a className="text-indigo-700 underline" target="_blank" rel="noopener noreferrer" href="https://github.com/meshcore">MeshCore — GitHub (jeśli dostępny)</a></li>
          </ul>
        </Section>
      </div>
    </div>
  )
}
