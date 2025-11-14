/**
 * File: systems/Winlink.tsx
 * Purpose: Section detailing Winlink 2000 — architecture, protocols, setup and crisis usage.
 */

import React from 'react'

/**
 * SystemsWinlink
 * Presents practical overview of Winlink 2000 based on the attached document.
 */
export default function SystemsWinlink() {
  return (
    <section id="winlink" aria-labelledby="winlink-title" className="mb-10">
      <h2 id="winlink-title" className="text-lg font-semibold text-slate-900">Winlink 2000 — E‑mail przez radio</h2>
      <p className="mt-2 text-sm text-slate-700">
        Globalna sieć e‑mail przez fale radiowe (HF/VHF/UHF), działająca bez komercyjnego Internetu. Wspiera pracę w kryzysie
        dzięki bramkom radiowym i trybowi P2P.
      </p>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Architektura</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>CMS (Common Message Servers) — redundancja globalna, przechowywanie wiadomości.</li>
            <li>RMS (Radio Message Server) — bramki radiowe łączące radio z Internetem.</li>
            <li>Klient — łączy się radiowo z RMS lub pracuje w trybie P2P bez Internetu.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Protokoły</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>VARA HF / VARA FM — efektywna transmisja danych (HF: 500–2300 Hz; FM: VHF/UHF).</li>
            <li>ARDOP, PACTOR — łącza cyfrowe na HF.</li>
            <li>Packet (AX.25) 1200 baud — VHF/UHF (FM) dla pracy lokalnej.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Instalacja i aktywacja</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Winlink Express (Windows) — rejestracja konta na podstawie znaku wywoławczego.</li>
            <li>Aktywacja: wyślij test przez Telnet do siebie (pierwsza wiadomość aktywuje konto).</li>
            <li>Whitelist: adresy spoza Winlink dodawane po pierwszej wymianie — bez tagu //WL2K w kolejnych mailach.</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Zastosowania w kryzysie</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Brak łączności komórkowej/światłowodów po katastrofach (huragany, powodzie, burze).</li>
            <li>Współpraca z organizacjami ratunkowymi, przekazywanie formularzy i plików.</li>
            <li>Tryb P2P — wiadomości bez infrastruktury Internetu.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
