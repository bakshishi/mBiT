/**
 * File: Systems.tsx
 * Purpose: Additional systems page — assembles subsections with unified ToC via PageToc (Winlink, ham, licensing, others, links).
 */

import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'
import SystemsWinlink from './systems/Winlink'
import SystemsAmateurRadio from './systems/AmateurRadio'
import SystemsLicensingPL from './systems/LicensingPL'
import SystemsOtherSystems from './systems/OtherSystems'
import SystemsLinks from './systems/Links'
import PageToc, { TocItem } from '../components/PageToc'

/**
 * SystemsPage
 * Renders the "Dodatkowe Systemy" content with a unified textual ToC and modular sections.
 */
export default function SystemsPage() {
  /** ToC items corresponding to anchored sections inside subsections */
  const toc: TocItem[] = [
    { id: 'winlink', label: 'Winlink 2000' },
    { id: 'amatorskie', label: 'Łączność krótkofalarska (HF/VHF/UHF, NVIS)' },
    { id: 'licencje', label: 'Licencje w Polsce (UKE)' },
    { id: 'inne', label: 'Inne systemy awaryjne' },
    { id: 'linki', label: 'Baza linków' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Systemy Dodatkowe</h1>
        <p className="text-slate-700 mt-1">
          Winlink 2000, łączność krótkofalarska oraz inne systemy komunikacji awaryjnej. Praktyka, wdrożenia i źródła.
        </p>
      </header>

      {/* Unified ToC */}
      <PageToc items={toc} />

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
