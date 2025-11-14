/**
 * File: PMR446.tsx
 * Purpose: Comprehensive PMR446 page with modular sections, in-page Table of Contents with smooth scrolling,
 *          and accessible, high-contrast content. Avoids HashRouter hash changes.
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

/**
 * scrollToSection
 * Smoothly scrolls to an element by id without altering the router hash.
 */
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * PMRPage
 * Renders the PMR446 guide with ToC and sections. Uses programmatic scrolling to prevent 404 in HashRouter.
 */
export default function PMRPage() {
  const onAnchorClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      scrollToSection(id)
    }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">PMR446 — Bez licencji</h1>
        <p className="text-slate-700 mt-1">
          446 MHz, 16 kanałów (12.5 kHz), 500 mW ERP, anteny niewymienne (UE). Krótkie i praktyczne wprowadzenie,
          zasady legalności, etykieta, tony CTCSS/DCS oraz rekomendowane kanały do zastosowań rodzinnych i awaryjnych.
        </p>
      </header>

      {/* Table of contents */}
      <nav aria-label="Spis treści" className="mb-8">
        <ul className="list-disc pl-5 text-sm text-slate-700 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('wprowadzenie')}>Wprowadzenie</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('prawo')}>Prawo w PL/EU</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('kanaly')}>Kanały i tony</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('etykieta')}>Etykieta</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('jak-zaczac')}>Jak zacząć</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('slowniczek')}>Słowniczek</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#" onClick={onAnchorClick('linki')}>Baza linków</a></li>
        </ul>
      </nav>

      {/* Sections */}
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
