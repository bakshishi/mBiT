/**
 * File: src/pages/systems/Links.tsx
 * Purpose: Curated links section for "Systemy Dodatkowe" with clear grouping and corrected SR3WLK link.
 */

import React from 'react'

/** Link item descriptor */
interface LinkItem {
  label: string
  href: string
}

/**
 * SystemsLinks
 * Renders grouped external links for Winlink, Amateur Radio and other emergency systems.
 */
export default function SystemsLinks() {
  const winlink: LinkItem[] = [
    { label: 'Winlink — oficjalna strona', href: 'https://winlink.org/' },
    { label: 'SR3WLK — co to jest Winlink?', href: 'https://sr3wlk.pl/co-to-jest-winlink/' },
    { label: 'SR3WLK: Winlink — instalacja', href: 'https://sr3wlk.pl/instalowanie-oprogramowania/' },
  ]

  const ham: LinkItem[] = [
    { label: 'UKE — egzaminy i pozwolenia amatorskie', href: 'https://bip.uke.gov.pl/jak-uzyskac-rezerwacje--pozwolenie--zezwolenie-tresc/egzaminy-i-pozwolenia-amatorskie,6,45.html' },
    { label: 'UKE — pozwolenia amatorskie (wnioski)', href: 'https://bip.uke.gov.pl/jak-uzyskac-rezerwacje--pozwolenie--zezwolenie-tresc/pozwolenia-amatorskie,6,0.html' },
    { label: 'egzaminkf.pl — przykładowe pytania', href: 'https://egzaminkf.pl' },
  ]

  const others: LinkItem[] = [
    { label: 'APRS — podstawy', href: 'https://radioteam.pl/aprs/' },
    { label: 'D-STAR — wprowadzenie', href: 'https://sr5uva.org/dstar.html' },
    { label: 'ALE — Automatic Link Establishment', href: 'https://hflink.com/automaticlinkestablishment/' },
    { label: 'GMDSS — przegląd systemu', href: 'https://www.imo.org/en/OurWork/Safety/Pages/RadiaCommunicationsSearchRescue-Default.aspx' },
  ]

  return (
    <section id="linki" aria-labelledby="systems-links" className="mt-10">
      <h2 id="systems-links" className="text-lg font-semibold text-slate-900">Baza linków</h2>
      <div className="mt-3 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-slate-900">Winlink</h3>
          <ul className="mt-2 space-y-2">
            {winlink.map((l) => (
              <li key={l.href}>
                <a
                  className="text-indigo-700 hover:underline"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Krótkofalarstwo (PL)</h3>
          <ul className="mt-2 space-y-2">
            {ham.map((l) => (
              <li key={l.href}>
                <a
                  className="text-indigo-700 hover:underline"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-medium text-slate-900">Inne systemy</h3>
          <ul className="mt-2 space-y-2">
            {others.map((l) => (
              <li key={l.href}>
                <a
                  className="text-indigo-700 hover:underline"
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
