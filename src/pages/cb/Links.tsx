/**
 * File: src/pages/cb/Links.tsx
 * Purpose: Curated list of sources and further reading for the CB page.
 */

import React from 'react'

/**
 * LinkItem
 * Simple shape for a resource item.
 */
interface LinkItem {
  label: string
  href: string
  note?: string
}

/**
 * CbLinks
 * Displays a curated "Baza linków" compiled from the provided material.
 */
export default function CbLinks() {
  const links: LinkItem[] = [
    { label: 'CB — kanały i częstotliwości (Paweł Kosmala)', href: 'https://pawelkosmala.pl/blog/czestotliwosci-i-kanaly-cb-radio/' },
    { label: 'CB Radio — przewodnik (RadioKlucz)', href: 'https://www.radioklucz.pl/cbradio/' },
    { label: 'Kanał 19 AM/FM — poradnik (Interia/Motoryzacja)', href: 'https://motoryzacja.interia.pl/porady/news-kanal-19-am-czy-fm-jak-ustawic-cb-radio-w-samochodzie,nId,20355928' },
    { label: 'Instrukcje i tabele President (PL)', href: 'https://president.com.pl/tabela_czestotliwosci,280159,1.html' },

    { label: 'Zasięg CB — co wpływa (Wobuzzeria)', href: 'https://wobuzzeria.pl/jaki-zasieg-ma-cb-radio-odkryj-co-wplywa-na-jego-zasieg' },
    { label: 'Mapa/Prognoza propagacji HF (SP4DKF)', href: 'https://sp4dkf.pl/mapa-propagacji/' },
    { label: 'Propagacja — PDF (CB)', href: 'https://cbradio.pl/pliki/propagacja.pdf' },
    { label: 'Poradnik łączności awaryjnej — CB w aucie', href: 'https://www.bezdroza4x4.pl/lacznosc-radiowa-w-samochodzie/' },
    { label: 'Znaki wywoławcze — podstawy (HF5L/PZK)', href: 'https://hf5l.pl/abc-znaki/' },
    { label: 'CB — przewodnik (Radioklub)', href: 'https://radioklub.pl/cbradio' },
    { label: 'CB — kanały i przeznaczenia (Plan Awaryjny)', href: 'https://planawaryjny.com/cb-kanaly-i-czestotliwosci/' },
  ]

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Baza linków — materiały źródłowe i zasoby</h3>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.href} className="text-slate-800">
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-indigo-500 underline-offset-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {l.label}
            </a>
            {l.note ? <span className="ml-2 text-sm text-slate-600">— {l.note}</span> : null}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-600">
        Uwaga: Modulacja SSB i długie łączności DX mogą wymagać szczególnej uwagi co do zgodności z lokalnymi regulacjami.
      </p>
    </div>
  )
}
