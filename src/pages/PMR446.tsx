/**
 * File: PMR446.tsx
 * Purpose: Comprehensive PMR446 page with modular sections, unified ToC via PageToc, and accessible, high-contrast content.
 */

import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'
import PMRIntro from './pmr/Intro'
import PMRLegal from './pmr/Legal'
import PMRChannels from './pmr/Channels'
import PMREtiquette from './pmr/Etiquette'
import PMRHowTo from './pmr/HowTo'
import PMRGlossary from './pmr/Glossary'
import PMRLinks from './pmr/Links'
import PageToc, { TocItem } from '../components/PageToc'

/**
 * PMRPage
 * Renders the PMR446 guide with unified PageToc and sections. No hash changes (HashRouter-safe).
 */
export default function PMRPage() {
  /** ToC items matching section anchors defined within subcomponents */
  const toc: TocItem[] = [
    { id: 'wprowadzenie', label: 'Wprowadzenie' },
    { id: 'prawo', label: 'Prawo w PL/EU' },
    { id: 'kanaly', label: 'Kanały i tony' },
    { id: 'etykieta', label: 'Etykieta' },
    { id: 'jak-zaczac', label: 'Jak zacząć' },
    { id: 'slowniczek', label: 'Słowniczek' },
    { id: 'linki', label: 'Baza linków' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">PMR446 — Bez licencji</h1>
        <p className="text-slate-700 mt-1">
          446 MHz, 16 kanałów (12.5 kHz), 500 mW ERP, anteny niewymienne (UE). Krótkie i praktyczne wprowadzenie,
          zasady legalności, etykieta, tony CTCSS/DCS oraz rekomendowane kanały do zastosowań rodzinnych i awaryjnych.
        </p>
      </header>

      {/* Unified ToC */}
      <PageToc items={toc} />

      {/* Sections (IDs are defined inside the subcomponents) */}
      <PMRIntro />
      <PMRLegal />
      <PMRChannels />
      <PMREtiquette />
      <PMRHowTo />
      <PMRGlossary />
      <PMRLinks />

      {/* Floating to top */}
      <ScrollToTopButton />
    </div>
  )
}
