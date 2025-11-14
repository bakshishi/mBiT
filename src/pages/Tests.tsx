/**
 * File: Tests.tsx
 * Purpose: Central hub for emergency test schedules and channels across PMR446, CB, and amateur radio (licensed).
 *          Provides concise guidance, legal notes, and a source link base.
 */

import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'

/**
 * TestsPage
 * Presents monthly/weekly schedules, recommended channels, and quick procedure tips.
 */
export default function TestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Testy łączności</h1>
        <p className="text-slate-700 mt-1">
          Zebrane terminy i kanały dla PMR446, CB oraz krótkofalarstwa (wymagana licencja). Krótka procedura i linki.
        </p>
      </header>

      {/* Schedule */}
      <section aria-labelledby="schedule-title" className="mb-8">
        <h2 id="schedule-title" className="text-lg font-semibold text-slate-900">Terminy testów</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Harmonogram</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>13. dzień każdego miesiąca — start: 20:00</li>
              <li>Ostatnia sobota miesiąca — start: 20:00</li>
            </ul>
            <p className="mt-2 text-sm text-slate-700">
              Cel: szybka weryfikacja sprzętu, zasięgu i procedur. Krótkie wywołanie, raporty słyszalności, ewentualne przeniesienie rozmowy poza kanał wywoławczy.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Kanały testowe (skrót)</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>PMR446: kanał 2 (zapas: 12)</li>
              <li>CB Radio: kanał 13 AM lub 11 USB</li>
              <li>Krótkofalarstwo: 145.500 MHz FM (VHF) i 433.500 MHz FM (UHF) — tylko z licencją</li>
            </ul>
            <p className="mt-2 text-xs text-slate-600">
              Uwaga: wybory kanałów mogą różnić się lokalnie — dostosuj do zaleceń twojej społeczności.
            </p>
          </div>
        </div>
      </section>

      {/* PMR446 */}
      <section aria-labelledby="pmr-title" className="mb-8">
        <h2 id="pmr-title" className="text-lg font-semibold text-slate-900">PMR446 — bez licencji</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Kanały i przypomnienia</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Testy: kanał 2 (446.01875 MHz); zapas: kanał 12 (446.14375 MHz).</li>
              <li>Alarm: kanał 1 — zarezerwowany wyłącznie dla zagrożenia życia.</li>
              <li>Góry: kanał 3, często z CTCSS 14 (107.2 Hz) — sprawdź lokalne zwyczaje.</li>
              <li>Moc: 500 mW ERP; anteny niewymienne; nasłuch przed nadawaniem.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Etykieta i praktyka</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Krótkie wywołanie: “Brejk, brejk…”. Transmisje 30–60 s, przerwy na odpowiedź.</li>
              <li>CTCSS/DCS to tylko filtrowanie — nie zapewniają prywatności.</li>
              <li>W razie tłoku przenieś rozmowę na inny, uzgodniony kanał.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CB */}
      <section aria-labelledby="cb-title" className="mb-8">
        <h2 id="cb-title" className="text-lg font-semibold text-slate-900">CB Radio — 27 MHz</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Kanały testowe i alarmowe</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Testy: kanał 13 AM lub 11 USB (zgodnie z lokalną praktyką).</li>
              <li>Alarm: kanał 9 (27.065 MHz) — wyłącznie sytuacje awaryjne.</li>
              <li>Ogólny: kanał 19 (27.185 MHz) — ruch drogowy i wywołania.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Wskazówki</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Antena i miejsce: wysoko i na zewnątrz zapewnią lepszy zasięg.</li>
              <li>Tryb: AM/FM/SSB — dobierz do lokalnego zwyczaju i warunków.</li>
              <li>Krótko i na temat, zostawiając przerwy dla innych.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Amateur */}
      <section aria-labelledby="ham-title" className="mb-8">
        <h2 id="ham-title" className="text-lg font-semibold text-slate-900">Krótkofalarstwo — tylko z licencją</h2>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Rekomendowane częstotliwości wywoławcze</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>VHF: 145.500 MHz FM (2 m, wywoławczy simplex)</li>
              <li>UHF: 433.500 MHz FM (70 cm, wywoławczy simplex)</li>
              <li>HF/NVIS: 3.5 MHz (wieczór/noc), 7 MHz (dzień) — zgodnie z planami pasm</li>
            </ul>
            <p className="mt-2 text-xs text-slate-600">
              Praca na pasmach amatorskich wymaga ważnego pozwolenia radiowego. Przestrzegaj planów pasm i mocy.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Szybka procedura</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li>Wywołanie ogólne na częstotliwości wywoławczej, podaj znak i QTH.</li>
              <li>Po nawiązaniu łączności przenieś QSO na wolny kanał/częstotliwość roboczą.</li>
              <li>Raport RST, krótki opis warunków, ewentualny test sprzętu/antenny.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick steps */}
      <section aria-labelledby="procedure-title" className="mb-8">
        <h2 id="procedure-title" className="text-lg font-semibold text-slate-900">Procedura testowa — krok po kroku</h2>
        <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
          <li>Naładuj sprzęt, przygotuj zapasowe baterie/powerbank.</li>
          <li>Wybierz punkt z dobrą widocznością (wysoko, bez przeszkód).</li>
          <li>Nasłuch minimum 5 sekund; wywołanie ogólne; przenieś QSO poza kanał wywoławczy.</li>
          <li>Wymień raporty słyszalności i ewentualnie przetestuj alternatywne lokalizacje.</li>
          <li>Zanotuj wyniki (data, godzina, miejsce, raport, sprzęt/antena).</li>
        </ol>
      </section>

      {/* Links */}
      <section aria-labelledby="links-title" className="mb-10">
        <h2 id="links-title" className="text-lg font-semibold text-slate-900">Baza linków — źródła i szczegóły</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Testy i procedury</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li><a className="text-indigo-700 hover:underline" href="https://planawaryjny.com/" target="_blank" rel="noopener noreferrer">Plan Awaryjny — testy łączności</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://pawelkosmala.pl/test-lacznosci-awaryjnej/" target="_blank" rel="noopener noreferrer">Przygotowanie do testów</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://lacznosc.bydgoszcz.pl/testy-lacznosci-kryzysowej/" target="_blank" rel="noopener noreferrer">Testy łączności kryzysowej — Bydgoszcz</a></li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">PMR446</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li><a className="text-indigo-700 hover:underline" href="https://446mhz.pl" target="_blank" rel="noopener noreferrer">446mhz.pl — mapa i społeczność</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://pawelkosmala.pl/pmr446-czestotliwosci-i-kanaly/" target="_blank" rel="noopener noreferrer">Kanały i częstotliwości PMR446</a></li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">CB Radio</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li><a className="text-indigo-700 hover:underline" href="https://pl.wikipedia.org/wiki/CB-radio" target="_blank" rel="noopener noreferrer">CB Radio — podstawy</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://bezdroza4x4.pl/lacznosc-radiowa-w-samochodzie/" target="_blank" rel="noopener noreferrer">Łączność radiowa w samochodzie</a></li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 p-4">
            <h3 className="text-sm font-medium text-slate-900">Krótkofalarstwo i licencje</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
              <li><a className="text-indigo-700 hover:underline" href="https://bip.uke.gov.pl/jak-uzyskac-rezerwacje--pozwolenie--zezwolenie-tresc/egzaminy-i-pozwolenia-amatorskie,6,45.html" target="_blank" rel="noopener noreferrer">UKE — egzaminy i pozwolenia</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://egzaminy.uke.gov.pl" target="_blank" rel="noopener noreferrer">Rejestracja na egzamin UKE</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://egzaminkf.pl" target="_blank" rel="noopener noreferrer">Baza pytań — egzaminkf.pl</a></li>
              <li><a className="text-indigo-700 hover:underline" href="https://sp5mxf.com/antena-nvis/" target="_blank" rel="noopener noreferrer">NVIS — anteny i praktyka</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Floating to top */}
      <ScrollToTopButton />
    </div>
  )
}
