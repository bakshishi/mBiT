/**
 * File: systems/Links.tsx
 * Purpose: Curated base of links for sources and detailed reading related to additional systems.
 */

import React from 'react'

/** Shape for typed links */
interface LinkItem {
  label: string
  href: string
}

/** Simple group renderer */
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
 * SystemsLinks
 * Provides grouped references: Winlink, UKE/licencje, NVIS/łączność HF, APRS, D‑STAR, TETRA, ALE, JS8Call, GMDSS.
 */
export default function SystemsLinks() {
  const winlink: LinkItem[] = [
    { label: 'Winlink — oficjalna strona', href: 'https://winlink.org/' },
    { label: 'SR3WLK — co to jest Winlink?', href: 'https://sr3wlk.pl/co-to-jest-winlink/' },
    { label: 'Winlink Express — instalacja (PL)', href: 'https://sr3wlk.pl/winlink-express/' },
  ]

  const licensing: LinkItem[] = [
    { label: 'UKE — egzaminy i pozwolenia amatorskie', href: 'https://bip.uke.gov.pl/jak-uzyskac-rezerwacje--pozwolenie--zezwolenie-tresc/egzaminy-i-pozwolenia-amatorskie,6,45.html' },
    { label: 'Portal rejestracji na egzamin UKE', href: 'https://egzaminy.uke.gov.pl' },
    { label: 'PUE UKE — wnioski o pozwolenia', href: 'https://pue.uke.gov.pl' },
    { label: 'egzaminkf.pl — przygotowanie do egzaminu', href: 'https://egzaminkf.pl' },
  ]

  const nvis: LinkItem[] = [
    { label: 'NVIS — wprowadzenie i praktyka (PL)', href: 'https://sp5mxf.com/antena-nvis/' },
    { label: 'NVIS discussion (SP forum)', href: 'http://sp7pki.iq24.pl/default.asp?grupa=162751&temat=385402' },
  ]

  const aprs: LinkItem[] = [
    { label: 'APRS — wprowadzenie (Radioteam)', href: 'https://radioteam.pl/aprs/' },
    { label: 'APRS — Wikipedia', href: 'https://pl.wikipedia.org/wiki/Automatic_Packet_Reporting_System' },
  ]

  const dstar: LinkItem[] = [
    { label: 'D‑STAR — podstawy (SR5UVA)', href: 'https://sr5uva.org/dstar.html' },
    { label: 'D‑STAR — przewodnik (PL PDF)', href: 'http://img.radio-sklep.pl/pdf/d-star-pl.pdf' },
  ]

  const tetra: LinkItem[] = [
    { label: 'TETRA — Wikipedia', href: 'https://pl.wikipedia.org/wiki/Terrestrial_Trunked_Radio' },
    { label: 'Czym jest TETRA (PL)', href: 'https://tetraforum.pl/co-to-jest-tetra/' },
  ]

  const ale: LinkItem[] = [
    { label: 'Automatic Link Establishment — overview', href: 'https://en.wikipedia.org/wiki/Automatic_link_establishment' },
    { label: 'HFLink — ALE resources', href: 'http://hflink.com/automaticlinkestablishment/' },
  ]

  const js8: LinkItem[] = [
    { label: 'JS8Call — oficjalna strona', href: 'http://js8call.com' },
    { label: 'JS8Call — wprowadzenie (PL)', href: 'https://d4a.uk/index.php/hamradio/92-js8call-w-pasmie-cb' },
  ]

  const gmdss: LinkItem[] = [
    { label: 'GMDSS — Wikipedia (EN)', href: 'https://en.wikipedia.org/wiki/Global_Maritime_Distress_and_Safety_System' },
    { label: 'IMO — Radio Communications (GMDSS)', href: 'https://www.imo.org/en/OurWork/Safety/Pages/RadiaCommunicationsSearchRescue-Default.aspx' },
  ]

  return (
    <section id="linki" aria-labelledby="links-title" className="mb-10">
      <h2 id="links-title" className="text-lg font-semibold text-slate-900">Baza linków — źródła i szczegóły</h2>

      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <LinkGroup title="Winlink" items={winlink} />
        <LinkGroup title="Licencje i UKE" items={licensing} />
        <LinkGroup title="NVIS / łączność HF" items={nvis} />
        <LinkGroup title="APRS" items={aprs} />
        <LinkGroup title="D‑STAR" items={dstar} />
        <LinkGroup title="TETRA" items={tetra} />
        <LinkGroup title="ALE" items={ale} />
        <LinkGroup title="JS8Call" items={js8} />
        <LinkGroup title="GMDSS" items={gmdss} />
      </div>
    </section>
  )
}
