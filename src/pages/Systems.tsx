/**
 * File: Systems.tsx
 * Purpose: Additional systems page — assembles subsections (Winlink, amateur radio, licensing, other systems, links)
 *          and provides an in-page table of contents with smooth scrolling that doesn't break HashRouter.
 */

import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'
import SystemsWinlink from './systems/Winlink'
import SystemsAmateurRadio from './systems/AmateurRadio'
import SystemsLicensingPL from './systems/LicensingPL'
import SystemsOtherSystems from './systems/OtherSystems'
import SystemsLinks from './systems/Links'

/**
 * scrollToSection
 * Smoothly scrolls to a target element by id without touching the router hash.
 */
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * SystemsPage
 * Renders the "Dodatkowe Systemy" content with a table of contents and modular sections.
 */
export default function SystemsPage() {
  const onAnchorClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      scrollToSection(id)
    }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Systemy Dodatkowe</h1>
        <p className="text-slate-700 mt-1">
          Winlink 2000, łączność krótkofalarska oraz inne systemy komunikacji awaryjnej. Praktyka, wdrożenia i źródła.
        </p>
      </header>

      {/* Table of contents */}
      <nav aria-label="Spis treści" className="mb-8">
        <ul className="list-disc pl-5 text-sm text-slate-700 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('winlink')}>
              Winlink 2000
            </a>
          </li>
          <li>
            <a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('amatorskie')}>
              Łączność krótkofalarska (HF/VHF/UHF, NVIS)
            </a>
          </li>
          <li>
            <a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('licencje')}>
              Licencje w Polsce (UKE)
            </a>
          </li>
          <li>
            <a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('inne')}>
              Inne systemy awaryjne
            </a>
          </li>
          <li>
            <a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('linki')}>
              Baza linków
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <SystemsWinlink />
      <SystemsAmateurRadio />
      <SystemsLicensingPL />
      <SystemsOtherSystems />
      <SystemsLinks />

      {/* Floating to top */}
      <ScrollToTopButton />
    </div>
  )
}
