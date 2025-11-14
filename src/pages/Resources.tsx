/**
 * File: Resources.tsx
 * Purpose: Curated catalog of external resources used across the site (Meshtastic, MeshCore, Reticulum, PMR, CB, EmCom).
 * Notes:
 * - Splits PMR446 and CB into separate sections.
 * - Aggregates external links used in PMR and CB pages.
 * - Excludes accessibility/RODO links as requested.
 */

import React from 'react'
import { ExternalLink } from 'lucide-react'

/**
 * Resource item shape for typed mapping.
 */
interface ResourceItem {
  name: string
  href: string
  desc: string
}

/**
 * ResourcesPage
 * Presents categorized link cards with concise descriptions and external-link affordance.
 */
export default function ResourcesPage() {
  const groups: Array<{ title: string; items: ResourceItem[] }> = [
    {
      title: 'Meshtastic',
      items: [
        { name: 'Oficjalna dokumentacja', href: 'https://meshtastic.org/docs/introduction/', desc: 'Przewodnik startowy, konfiguracja, presety.' },
        { name: 'Blog: LongFast vs MediumFast', href: 'https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/', desc: 'Analiza wydajności i rekomendacje.' },
        { name: 'Grupy lokalne', href: 'https://meshtastic.org/pl-PL/docs/community/local-groups/', desc: 'Mapa społeczności i kanałów komunikacji.' }
      ]
    },
    {
      title: 'MeshCore',
      items: [
        { name: 'Portal PL', href: 'https://lorameshcore.pl', desc: 'Polskie materiały, aktualne presety EU/UK Narrow.' },
        { name: 'Diver: przewodniki', href: 'https://diver.net.pl/meshcore', desc: 'Instrukcje i dobre praktyki wdrożeń.' }
      ]
    },
    {
      title: 'Reticulum',
      items: [
        { name: 'reticulum.network', href: 'https://reticulum.network', desc: 'Oficjalna strona i manual.' },
        { name: 'RNode — unsigned.io', href: 'https://unsigned.io/rnode/', desc: 'Sprzęt referencyjny i dokumentacja.' }
      ]
    },
    // Split: PMR446
    {
      title: 'PMR446',
      items: [
        // Z topikiem ogólnym i kompendiami
        { name: 'PMR446 — przegląd (Radioklucz)', href: 'https://www.radioklucz.pl/pmr446/', desc: 'Wprowadzenie, podstawy i sprzęt.' },
        { name: 'PMR446 — kompendium (DMR446.pl)', href: 'https://www.dmr446.pl/pmr446.html', desc: 'Zasady, sprzęt, praktyka — kompendium PL.' },
        { name: 'PMR446 — bez pozwoleń (inRadio)', href: 'https://inradio.pl/radiokomunikacja/radiotelefony-pmr446-bez-pozwolen/', desc: 'Przegląd sprzętu i legalności.' },
        { name: 'PMR446 — FAQ (446mhz.pl)', href: 'https://446mhz.pl/faq.html', desc: 'Najczęstsze pytania i odpowiedzi.' },
        { name: '446mhz.pl — mapa społeczności', href: 'https://446mhz.pl', desc: 'Mapa, inicjatywy i społeczność PMR w PL.' },
        { name: 'PMR — Wikipedia', href: 'https://pl.wikipedia.org/wiki/PMR_(radio)', desc: 'Artykuł encyklopedyczny.' },

        // Kanały i praktyka
        { name: 'PMR — przewodnik (Łączność Bydgoszcz)', href: 'https://www.lacznosc.bydgoszcz.pl/blog/krotkofalowki-pmr-446-przewodnik/', desc: 'Praktyczne wprowadzenie i dobre praktyki.' },
        { name: 'Testy łączności awaryjnej — kanały i kody', href: 'https://planawaryjny.com/pmr-kanaly-i-kody/', desc: 'Kanały testowe i kody — Plan Awaryjny.' },
        { name: 'PMRDX — praktyka i testy', href: 'https://pmrdx.pl', desc: 'Raporty zasięgu, testy i praktyka.' },

        // Etykieta i kody
        { name: 'Standard łączności (Domowy Survival)', href: 'https://domowy-survival.pl/standard-lacznosci/', desc: 'Procedury, kanały, dobre praktyki.' },
        { name: 'CTCSS/DCS — wytłumaczenie (RK Londyn)', href: 'https://rklondyn.uk/czym-jest-ctcss-i-dcs/', desc: 'Różnice, zastosowania i ograniczenia.' },
        { name: 'CTCSS — tabele i opis (DMR446)', href: 'https://www.dmr446.pl/pub/ctcss.html', desc: 'Lista tonów i krótkie opisy.' },

        // Legalność / instytucje
        { name: 'UKE — informacje i podstawy', href: 'https://uke.gov.pl', desc: 'Urząd Komunikacji Elektronicznej — informacje dla użytkowników.' },
        { name: 'Midland Europe — PMR', href: 'https://midlandeurope.com', desc: 'Regulacje i sprzęt PMR (producent, EU).' },
      ]
    },
    // Split: CB Radio
    {
      title: 'CB Radio',
      items: [
        { name: 'CB — kanały i częstotliwości (Paweł Kosmala)', href: 'https://pawelkosmala.pl/blog/czestotliwosci-i-kanaly-cb-radio/', desc: 'Tabela kanałów i przeznaczeń.' },
        { name: 'CB Radio — przewodnik (RadioKlucz)', href: 'https://www.radioklucz.pl/cbradio/', desc: 'Wprowadzenie, sprzęt, praktyka.' },
        { name: 'Kanał 19 AM/FM — poradnik (Interia)', href: 'https://motoryzacja.interia.pl/porady/news-kanal-19-am-czy-fm-jak-ustawic-cb-radio-w-samochodzie,nId,20355928', desc: 'Jak ustawić radio i wybrać modulację.' },
        { name: 'Instrukcje i tabele President (PL)', href: 'https://president.com.pl/tabela_czestotliwosci,280159,1.html', desc: 'Tabele, dokumentacja producenta.' },

        { name: 'Zasięg CB — co wpływa (Wobuzzeria)', href: 'https://wobuzzeria.pl/jaki-zasieg-ma-cb-radio-odkryj-co-wplywa-na-jego-zasieg', desc: 'Czynniki zasięgu i praktyczne wskazówki.' },
        { name: 'Mapa/Prognoza propagacji HF (SP4DKF)', href: 'https://sp4dkf.pl/mapa-propagacji/', desc: 'Bieżące warunki propagacyjne w PL.' },
        { name: 'Propagacja — PDF (CB)', href: 'https://cbradio.pl/pliki/propagacja.pdf', desc: 'Podstawy propagacji w paśmie 27 MHz.' },
        { name: 'CB w aucie — poradnik (Bezdroza4x4)', href: 'https://www.bezdroza4x4.pl/lacznosc-radiowa-w-samochodzie/', desc: 'Praktyka mobilna, montaż i bezpieczeństwo.' },
        { name: 'Znaki wywoławcze — podstawy (HF5L/PZK)', href: 'https://hf5l.pl/abc-znaki/', desc: 'Zwyczaje i podstawy raportowania.' },
        { name: 'CB — przewodnik (Radioklub)', href: 'https://radioklub.pl/cbradio', desc: 'Zasoby klubowe i materiały edukacyjne.' },
        { name: 'CB — kanały i przeznaczenia (Plan Awaryjny)', href: 'https://planawaryjny.com/cb-kanaly-i-czestotliwosci/', desc: 'Zestawienia kanałów i rekomendacje.' },
        { name: 'CB Forum — dyskusje', href: 'https://cb-forum.pl', desc: 'Forum użytkowników CB w PL.' },
      ]
    },
    {
      title: 'Łączność kryzysowa',
      items: [
        { name: 'Diver: Łączność kryzysowa', href: 'https://diver.net.pl/lacznosc-kryzysowa', desc: 'Łączność kryzysowa' },
        {
          name: 'Plan Awaryjny: Łączność kryzysowa',
          href: 'https://planawaryjny.com/lacznosc-awaryjna/',
          desc: 'Metody, za pomocą których można ze sobą rozmawiać, w przypadku awarii standardowych kanałów komunikacyjnych.'
        },
        {
          name: 'Standard łączności dla polskich prepperów',
          href: 'https://domowy-survival.pl/standard-lacznosci-dla-polskich-prepperow/',
          desc: 'Łączność z wykorzystaniem: aplikacji Zello, PMR, CB.'
        }
      ]
    },
    {
      title: 'Lokalne społeczności',
      items: [
        { name: 'Meshtastic Bydgoszcz (Telegram)', href: 'https://t.me/meshtasticbdg', desc: 'Kanał społeczności lokalnej.' },
        { name: 'SR3WLK — Winlink', href: 'https://sr3wlk.pl', desc: 'Polski portal Winlink i zasoby.' }
      ]
    }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Zasoby internetowe</h1>
        <p className="text-slate-700 mt-1">
          Zbiór linków używanych w serwisie: dokumentacja, przewodniki, społeczności i łączność awaryjna. Linki dostępności/RODO pominięto.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={group.title}>
            <h2 id={group.title} className="text-lg font-semibold text-slate-900">{group.title}</h2>
            <ul className="mt-3 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
                    aria-label={`${item.name} — otwórz w nowej karcie`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#667eea]">
                        <ExternalLink size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-medium text-slate-900 group-hover:underline">{item.name}</h3>
                        <p className="text-sm text-slate-700 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
