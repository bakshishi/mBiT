/**
 * File: pmr/Links.tsx
 * Purpose: Curated sources and detailed reading list for PMR446.
 */

import React from 'react'

/** Typed link shape */
interface LinkItem {
  label: string
  href: string
}

/** Group renderer for links */
function LinkGroup({ title, items }: { title: string; items: LinkItem[] }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <h3 className="text-sm font-medium text-slate-900">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        {items.map((i) => (
          <li key={i.href}>
            <a
              className="text-indigo-700 hover:underline"
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${i.label} — otwórz w nowej karcie`}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * PMRLinks
 * Groups external links: basics, channels/practice, etiquette/how-to, equipment/legal.
 */
export default function PMRLinks() {
  const basics: LinkItem[] = [
    { label: 'PMR446 — przegląd (Radioklucz)', href: 'https://www.radioklucz.pl/pmr446/' },
    { label: 'PMR446 — FAQ (446mhz.pl)', href: 'https://446mhz.pl/faq.html' },
    { label: 'PMR — Wikipedia', href: 'https://pl.wikipedia.org/wiki/PMR_(radio)' },
    { label: 'PMR446 — bez pozwoleń (inRadio)', href: 'https://inradio.pl/radiokomunikacja/radiotelefony-pmr446-bez-pozwolen/' },
  ]

  const channelsPractice: LinkItem[] = [
    { label: 'PMR446 — częstotliwości i kanały (P. Kosmala)', href: 'https://pawelkosmala.pl/pmr446-czestotliwosci-i-kanaly/' },
    { label: 'PMR — przewodnik (Łączność Bydgoszcz)', href: 'https://www.lacznosc.bydgoszcz.pl/blog/krotkofalowki-pmr-446-przewodnik/' },
    { label: 'Testy łączności awaryjnej — kanały i kody', href: 'https://planawaryjny.com/pmr-kanaly-i-kody/' },
    { label: 'PMRDX — praktyka i testy', href: 'https://pmrdx.pl' },
  ]

  const etiquetteHowto: LinkItem[] = [
    { label: 'Standard łączności — poradnik (Domowy Survival)', href: 'https://domowy-survival.pl/standard-lacznosci/' },
    { label: 'CTCSS/DCS — wytłumaczenie', href: 'https://rklondyn.uk/czym-jest-ctcss-i-dcs/' },
    { label: 'CTCSS — tabele i opis (DMR446)', href: 'https://www.dmr446.pl/pub/ctcss.html' },
  ]

  const equipmentLegal: LinkItem[] = [
    { label: 'PMR446 — kompendium (DMR446.pl)', href: 'https://www.dmr446.pl/pmr446.html' },
    { label: 'UKE — informacje i podstawy', href: 'https://uke.gov.pl' },
  ]

  return (
    <section id="linki" aria-labelledby="pmr-links-title" className="mb-10">
      <h2 id="pmr-links-title" className="text-lg font-semibold text-slate-900">Baza linków — źródła i szczegóły</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <LinkGroup title="Podstawy" items={basics} />
        <LinkGroup title="Kanały i praktyka" items={channelsPractice} />
        <LinkGroup title="Etykieta i „jak zacząć”" items={etiquetteHowto} />
        <LinkGroup title="Sprzęt i legalność" items={equipmentLegal} />
      </div>
    </section>
  )
}
