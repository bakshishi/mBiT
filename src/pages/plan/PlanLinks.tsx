/**
 * File: plan/PlanLinks.tsx
 * Purpose: Curated link base grouped by topic.
 */

import React from 'react'

/** Link entry type */
interface LinkEntry {
  label: string
  href: string
}

/** Group of links with a title */
function LinkGroup({ title, items }: { title: string; items: LinkEntry[] }) {
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
 * PlanLinks
 * Renders categorized external resources for further learning.
 */
export default function PlanLinks() {
  const pmr: LinkEntry[] = [
    { label: 'PMR446 — Mapa użytkowników', href: 'https://446mhz.pl' },
    { label: 'Łączność radiowa — PMR446 (Pobudka)', href: 'https://radioklub.pl/pmr446/' },
    { label: 'PMR446 — Częstotliwości i kanały', href: 'https://pawelkosmala.pl/pmr446-czestotliwosci-i-kanaly/' },
  ]

  const cb: LinkEntry[] = [
    { label: 'CB Radio — Wikipedia', href: 'https://pl.wikipedia.org/wiki/CB-radio' },
    { label: 'CB Radio — Podstawy i zasięg', href: 'https://wobuzzeria.pl/jaki-zasieg-ma-cb-radio/' },
  ]

  const mesh: LinkEntry[] = [
    { label: 'Meshtastic — Oficjalna strona', href: 'https://meshtastic.org/' },
    { label: 'Meshtastic — Starter Kit (Nettigo)', href: 'https://starter-kit.nettigo.pl/meshtastic/' },
    { label: 'Meshtastic — Mapa sieci', href: 'https://meshmap.net/' },
  ]

  const tests: LinkEntry[] = [
    { label: 'Plan Awaryjny — testy łączności', href: 'https://planawaryjny.com/' },
    { label: 'Testy łączności kryzysowej — Bydgoszcz', href: 'https://lacznosc.bydgoszcz.pl/testy-lacznosci-kryzysowej/' },
    { label: 'Standard łączności dla prepperów', href: 'https://domowy-survival.pl/standard-lacznosci/' },
  ]

  const winlink: LinkEntry[] = [
    { label: 'Winlink — Oficjalna strona', href: 'https://winlink.org/' },
    { label: 'Winlink 2000 — Polska strona Winlink (SR3WLK)', href: 'https://sr3wlk.pl/' },
  ]

  const power: LinkEntry[] = [
    { label: 'OFF‑GRID: stacje i panele (przykłady)', href: 'https://orllo.pl/off-grid-stacja-zasilania/' },
    { label: 'Zasilanie mobilne — przegląd', href: 'https://m.sklep.rms.pl/zasilanie-mobilne/' },
  ]

  const video: LinkEntry[] = [
    { label: 'Sierra Echo — testy łączności', href: 'https://www.youtube.com/@SierraEcho' },
    { label: 'Gotowy (SP9ADC) — testy terenowe', href: 'https://www.youtube.com/@gotowy_sp9adc' },
    { label: 'Radiowoaktywny — PMR, testy', href: 'https://www.youtube.com/@radiowoaktywny' },
  ]

  return (
    <section id="linki" aria-labelledby="links-title" className="mb-10">
      <h2 id="links-title" className="text-lg font-semibold text-slate-900">8. Baza linków — Poszerz wiedzę</h2>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <LinkGroup title="Podstawy PMR446" items={pmr} />
        <LinkGroup title="CB Radio" items={cb} />
        <LinkGroup title="Meshtastic" items={mesh} />
        <LinkGroup title="Testy łączności" items={tests} />
        <LinkGroup title="Winlink (HF)" items={winlink} />
        <LinkGroup title="Zasilanie awaryjne" items={power} />
        <LinkGroup title="Kursy wideo" items={video} />
      </div>
    </section>
  )
}
