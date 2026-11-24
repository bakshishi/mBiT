/**
 * File: CheatSheet.tsx
 * Purpose: Printable one-page field reference (A4) with emergency channels, PMR/CB frequencies,
 *          mesh presets, calling procedure, Q-codes and the phonetic alphabet.
 * Notes: Optimised for print (see @media print in src/shadcn.css); also readable on screen.
 */

import React from 'react'
import { NavLink } from 'react-router'
import { ArrowLeft, Printer } from 'lucide-react'

/** Single PMR446 channel definition used by the compact table */
interface PmrChannel {
  n: number
  mhz: string
  tone?: 'sos' | 'test' | 'call' | 'backup' | 'mount'
}

/** All 16 PMR446 channels (12.5 kHz raster, 446.0-446.2 MHz) */
const pmrChannels: PmrChannel[] = [
  { n: 1, mhz: '446.00625', tone: 'sos' },
  { n: 2, mhz: '446.01875', tone: 'test' },
  { n: 3, mhz: '446.03125', tone: 'mount' },
  { n: 4, mhz: '446.04375' },
  { n: 5, mhz: '446.05625' },
  { n: 6, mhz: '446.06875' },
  { n: 7, mhz: '446.08125' },
  { n: 8, mhz: '446.09375', tone: 'call' },
  { n: 9, mhz: '446.10625' },
  { n: 10, mhz: '446.11875' },
  { n: 11, mhz: '446.13125' },
  { n: 12, mhz: '446.14375', tone: 'backup' },
  { n: 13, mhz: '446.15625' },
  { n: 14, mhz: '446.16875' },
  { n: 15, mhz: '446.18125' },
  { n: 16, mhz: '446.19375' },
]

/** Tone → text class mapping for PMR channel highlighting */
const pmrToneClass: Record<NonNullable<PmrChannel['tone']>, string> = {
  sos: 'text-emergency-red',
  test: 'text-signal-amber',
  call: 'text-rf-cyan',
  backup: 'text-signal-amber',
  mount: 'text-mesh-green',
}

/** Q-code used in the reference table */
interface QCode {
  code: string
  meaning: string
}

const qCodes: QCode[] = [
  { code: 'QRZ', meaning: 'kto mnie woła?' },
  { code: 'QSL', meaning: 'potwierdzam odbiór' },
  { code: 'QTH', meaning: 'moja lokalizacja' },
  { code: 'QSO', meaning: 'łączność / rozmowa' },
  { code: 'QRM', meaning: 'zakłócenia od stacji' },
  { code: 'QRN', meaning: 'zakłócenia atmosferyczne' },
  { code: 'QSB', meaning: 'zanikanie sygnału' },
  { code: 'QSY', meaning: 'zmiana częstotliwości' },
  { code: 'QRX', meaning: 'czekaj, wywołam ponownie' },
  { code: 'QRT', meaning: 'kończę nadawanie' },
  { code: 'QRP', meaning: 'mała moc / zmniejsz moc' },
  { code: 'QRO', meaning: 'zwiększ moc' },
  { code: 'QRV', meaning: 'jestem gotów' },
  { code: 'QRL', meaning: 'częstotliwość zajęta' },
]

/** NATO/ICAO phonetic alphabet */
const alphabet: Array<[string, string]> = [
  ['A', 'Alfa'],
  ['B', 'Bravo'],
  ['C', 'Charlie'],
  ['D', 'Delta'],
  ['E', 'Echo'],
  ['F', 'Foxtrot'],
  ['G', 'Golf'],
  ['H', 'Hotel'],
  ['I', 'India'],
  ['J', 'Juliett'],
  ['K', 'Kilo'],
  ['L', 'Lima'],
  ['M', 'Mike'],
  ['N', 'November'],
  ['O', 'Oscar'],
  ['P', 'Papa'],
  ['Q', 'Quebec'],
  ['R', 'Romeo'],
  ['S', 'Sierra'],
  ['T', 'Tango'],
  ['U', 'Uniform'],
  ['V', 'Victor'],
  ['W', 'Whiskey'],
  ['X', 'X-ray'],
  ['Y', 'Yankee'],
  ['Z', 'Zulu'],
]

/**
 * CheatSheetPage
 * Renders the field card and a print action. The card prints on one A4 page.
 */
export default function CheatSheetPage() {
  const pmrRows = Array.from({ length: 8 }, (_, i) => [pmrChannels[i], pmrChannels[i + 8]] as const)

  // Use a descriptive document title so "Save as PDF" suggests a useful filename.
  React.useEffect(() => {
    const previous = document.title
    document.title = 'mBiT.pm — ściągawka polowa A4'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 print:max-w-none print:p-0">
      {/* Screen-only header */}
      <header className="mb-6 flex flex-col gap-4 border-b border-field-border pb-4 sm:flex-row sm:items-end sm:justify-between print:hidden">
        <div>
          <NavLink
            to="/"
            className="mb-2 inline-flex items-center gap-1 text-xs font-mono text-field-muted transition-colors hover:text-signal-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            <span>Strona główna</span>
          </NavLink>
          <h1 className="text-2xl font-bold font-display tracking-tight text-field-text sm:text-3xl">
            Ściągawka polowa A4
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-field-muted sm:text-base">
            Jedna kartka do wydruku i noszenia przy radiotelefonie: kanały ratunkowe, częstotliwości,
            procedura wywołania, kody Q i alfabet fonetyczny.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-signal-amber px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-signal-amber-rich focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
            aria-label="Drukuj ściągawkę A4 lub zapisz jako PDF"
          >
            <Printer size={16} aria-hidden="true" />
            Drukuj / Zapisz PDF
          </button>
          <NavLink
            to="/plan"
            className="inline-flex min-h-11 items-center rounded-md border border-field-border bg-field-card px-4 py-2 text-sm font-medium text-field-text transition-colors hover:border-signal-amber/50 hover:text-signal-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
          >
            Pełny plan awaryjny
          </NavLink>
        </div>
      </header>

      <p className="mb-4 rounded-md border border-field-border bg-field-recessed px-3 py-2 text-xs text-field-muted print:hidden">
        <strong className="font-semibold text-field-text">Druk:</strong> A4, skala 100%, marginesy domyślne.
        Dla formatu A5 wybierz skalę ok. 71%. Karta jest czytelna również bez drukowania teł.
      </p>

      {/* Printable field card */}
      <article
        className="cheat-sheet rounded-xl border border-field-border bg-field-card p-5 shadow-sm sm:p-6 print:rounded-none print:border-0 print:p-0 print:shadow-none"
        aria-labelledby="sheet-title"
      >
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b-2 border-field-text pb-2 print:mb-3">
          <div>
            <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-signal-amber">
              mBiT.pm · Karta polowa
            </p>
            <h2 id="sheet-title" className="text-xl font-bold font-display leading-tight text-field-text sm:text-2xl">
              Łączność awaryjna — Bydgoszcz &amp; Toruń
            </h2>
          </div>
          <p className="text-[10px] font-mono text-field-muted">
            A4 · v1.0 · stan: 24.11.2026
          </p>
        </div>

        <div className="cheat-grid grid gap-4 md:grid-cols-2">
          {/* SOS */}
          <Panel title="Alarm / SOS" accent="text-emergency-red">
            <div className="rounded border border-emergency-red/40 bg-emergency-red/10 p-2 font-mono text-[11px] leading-relaxed">
              <p className="font-bold text-emergency-red">112 — telefon / GSM</p>
              <p className="text-field-text">PMR K1 · 446.00625 MHz · CTCSS 67.0</p>
              <p className="text-field-text">CB K9 · 27.065 MHz AM</p>
            </div>
            <p className="mt-2 text-[10.5px] leading-relaxed text-field-muted">
              Kanał 1 PMR (konwencja środowiskowa) i 9 CB są przeznaczone wyłącznie dla zagrożenia życia.
              Nie prowadź na nich rozmów.
            </p>
          </Panel>

          {/* PMR446 */}
          <Panel title="PMR446 · 16 kanałów · 12,5 kHz · 0,5 W ERP" accent="text-signal-amber">
            <table className="w-full border-collapse font-mono text-[10.5px] leading-tight">
              <caption className="sr-only">Częstotliwości 16 kanałów PMR446</caption>
              <thead>
                <tr className="text-[9px] uppercase tracking-wide text-field-faint">
                  <th scope="col" className="border-b border-field-border py-0.5 pr-1 text-left font-semibold">K</th>
                  <th scope="col" className="border-b border-field-border py-0.5 pr-2 text-left font-semibold">MHz</th>
                  <th scope="col" className="border-b border-field-border py-0.5 pr-1 text-left font-semibold">K</th>
                  <th scope="col" className="border-b border-field-border py-0.5 text-left font-semibold">MHz</th>
                </tr>
              </thead>
              <tbody>
                {pmrRows.map(([left, right]) => (
                  <tr key={left.n} className="border-b border-field-border/40 last:border-0">
                    {[left, right].map((ch) => (
                      <React.Fragment key={ch.n}>
                        <td className={`py-px pr-1 font-bold ${ch.tone ? pmrToneClass[ch.tone] : 'text-field-text'}`}>
                          {ch.n}
                        </td>
                        <td className={`py-px pr-2 ${ch.tone ? pmrToneClass[ch.tone] : 'text-field-text'}`}>
                          {ch.mhz}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-1.5 text-[9.5px] leading-snug text-field-muted">
              <span className="font-semibold text-emergency-red">1 SOS</span> ·{' '}
              <span className="font-semibold text-signal-amber">2 testy</span> ·{' '}
              <span className="font-semibold text-mesh-green">3 góry (107.2 Hz)</span> ·{' '}
              <span className="font-semibold text-rf-cyan">8 wywoławczy EU</span> ·{' '}
              <span className="font-semibold text-signal-amber">12 zapas testów</span>
            </p>
          </Panel>

          {/* CB */}
          <Panel title="CB Radio · 27 MHz" accent="text-signal-amber">
            <ul className="space-y-1 font-mono text-[10.5px] leading-tight">
              <FreqLine label="K9 · ratunkowy" value="27.065 MHz AM" tone="text-emergency-red" />
              <FreqLine label="K19 · drogowy" value="27.185 MHz AM" tone="text-signal-amber" />
              <FreqLine label="K28 · regionalny" value="27.285 MHz AM/FM" tone="text-signal-amber" />
              <FreqLine label="K20 · lokalny" value="27.205 MHz" tone="text-field-text" />
            </ul>
            <p className="mt-1.5 text-[9.5px] leading-snug text-field-muted">
              K28 = wywoławczy Bydgoszcz/Toruń. Po nawiązaniu łączności przejdź na kanał roboczy.
              Moc: 4 W AM/FM, 12 W SSB.
            </p>
          </Panel>

          {/* Mesh */}
          <Panel title="Sieci mesh · EU_868" accent="text-mesh-green">
            <ul className="space-y-1 font-mono text-[10.5px] leading-tight">
              <FreqLine label="Meshtastic" value="869.525 MHz" tone="text-mesh-green" />
              <FreqLine label="Preset" value="LONG_FAST · hop 3" tone="text-field-text" />
              <FreqLine label="MeshCore" value="869.618 MHz" tone="text-rf-cyan" />
              <FreqLine label="Path hash" value="2 bajty (Mode 1)" tone="text-field-text" />
            </ul>
            <p className="mt-1.5 text-[9.5px] leading-snug text-field-muted">
              Duty cycle 10%/h w paśmie 869.4–869.65 MHz. Preset i kanał uzgadniaj z lokalną siecią —
              wszystkie węzły muszą używać tych samych ustawień.
            </p>
          </Panel>

          {/* Calling procedure */}
          <Panel title="Wywołanie pomocy — kolejność" accent="text-emergency-red">
            <ol className="list-decimal space-y-1 pl-4 text-[10.5px] leading-snug text-field-text">
              <li>Nasłuchaj 5 s — upewnij się, że kanał jest wolny.</li>
              <li>
                <span className="font-semibold">„Mayday, Mayday, Mayday” lub „Pomocy, pomocy, pomocy” — tu [znak / imię].</span>
              </li>
              <li>Podaj pozycję: miejscowość, ulicę, punkt orientacyjny lub GPS.</li>
              <li>Co się stało, ile osób, stan rannych, jakiej pomocy potrzebujesz.</li>
              <li>Powtarzaj co 30–60 s; po każdym wywołaniu zwolnij PTT i słuchaj.</li>
              <li>„PAN PAN” = pilne, ale bez zagrożenia życia. Kanał zwolnij po potwierdzeniu pomocy.</li>
            </ol>
          </Panel>

          {/* Test schedule */}
          <Panel title="Testy łączności" accent="text-signal-amber">
            <ul className="space-y-1 text-[10.5px] leading-snug text-field-text">
              <li><span className="font-mono font-semibold">13. dzień miesiąca · 20:00</span></li>
              <li><span className="font-mono font-semibold">Ostatnia sobota miesiąca · 20:00</span></li>
              <li>PMR: K2 (446.01875), zapas K12 (446.14375)</li>
              <li>CB: K13 AM lub K11 USB</li>
              <li>Krótkofalarstwo: 145.500 / 433.500 MHz FM <span className="text-field-faint">(licencja)</span></li>
            </ul>
          </Panel>

          {/* Ham radio */}
          <Panel title="Krótkofalarstwo · SP2 (licencja)" accent="text-rf-cyan">
            <ul className="space-y-1 font-mono text-[10.5px] leading-tight">
              <FreqLine label="2 m · wywoławczy" value="145.500 MHz FM" tone="text-rf-cyan" />
              <FreqLine label="70 cm · wywoławczy" value="433.500 MHz FM" tone="text-rf-cyan" />
              <FreqLine label="HF · NVIS" value="3.5 / 7 MHz" tone="text-field-text" />
            </ul>
            <p className="mt-1.5 text-[9.5px] leading-snug text-field-muted">
              Praca wyłącznie z ważnym pozwoleniem radiowym. Przestrzegaj planu pasm i limitów mocy.
            </p>
          </Panel>

          {/* Q codes */}
          <Panel title="Kody Q" accent="text-rf-cyan">
            <dl className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] leading-tight">
              {qCodes.map((q) => (
                <div key={q.code} className="flex gap-1.5">
                  <dt className="shrink-0 font-mono font-bold text-rf-cyan">{q.code}</dt>
                  <dd className="text-field-muted">{q.meaning}</dd>
                </div>
              ))}
            </dl>
          </Panel>

          {/* Phonetic alphabet */}
          <Panel title="Alfabet fonetyczny (NATO/ICAO)" accent="text-signal-amber">
            <ul className="grid grid-cols-4 gap-x-2 gap-y-0 text-[10px] leading-tight">
              {alphabet.map(([letter, word]) => (
                <li key={letter} className="font-mono">
                  <span className="font-bold text-signal-amber">{letter}</span>{' '}
                  <span className="text-field-muted">{word}</span>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Operating rules */}
          <Panel title="Zasady pracy na kanale" accent="text-field-muted">
            <ul className="list-disc space-y-1 pl-4 text-[10.5px] leading-snug text-field-text">
              <li>PTT: nadajesz tylko przy wciśniętym przycisku; puść, aby słuchać.</li>
              <li>Nasłuch 5 s przed każdym wywołaniem.</li>
              <li>Transmisje 30–60 s, potem przerwa na odpowiedź.</li>
              <li>Kanał wywoławczy zwolnij po nawiązaniu łączności.</li>
              <li>CTCSS/DCS filtruje odsłuch — nie szyfruje rozmowy.</li>
              <li>Mów wolno i wyraźnie; podaj znak lub lokalizację.</li>
              <li>Notuj: data, godzina, QTH, sprzęt, raport słyszalności.</li>
            </ul>
          </Panel>
        </div>

        <footer className="mt-4 border-t border-field-border pt-2 text-[9px] leading-snug text-field-faint print:mt-2">
          <p>
            mBiT.pm — karta polowa v1.0 · stan: 24.11.2026 · pełne opisy i źródła: mbit.pm
            (PMR446, CB Radio, Testy, Plan Awaryjny).
          </p>
          <p>
            Kanały i przeznaczenia poza SOS mają charakter zwyczajowy — zawsze weryfikuj lokalne ustalenia.
            W zagrożeniu życia najpierw dzwoń na 112.
          </p>
        </footer>
      </article>

      <p className="mt-4 text-xs text-field-muted print:hidden">
        Potrzebujesz szerszej procedury? Zobacz{' '}
        <NavLink className="font-medium text-signal-amber hover:underline" to="/plan">
          Plan Awaryjny
        </NavLink>{' '}
        oraz{' '}
        <NavLink className="font-medium text-signal-amber hover:underline" to="/tests">
          harmonogram testów
        </NavLink>
        .
      </p>
    </div>
  )
}

/** Bordered panel used across the sheet */
function Panel({
  title,
  accent,
  children,
}: {
  title: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <section className="cheat-panel break-inside-avoid rounded-lg border border-field-border bg-field-recessed/30 p-3">
      <h3 className={`mb-1.5 font-mono text-[10px] font-bold uppercase tracking-wider ${accent}`}>
        {title}
      </h3>
      {children}
    </section>
  )
}

/** Compact label/value line in monospace */
function FreqLine({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: string
}) {
  return (
    <li className="flex items-baseline justify-between gap-2 border-b border-field-border/40 pb-0.5 last:border-0 last:pb-0">
      <span className="text-field-muted">{label}</span>
      <span className={`shrink-0 font-bold ${tone}`}>{value}</span>
    </li>
  )
}
