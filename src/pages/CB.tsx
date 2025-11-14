/**
 * File: src/pages/CB.tsx
 * Purpose: Comprehensive CB Radio page composed from small reusable sections with unified ToC and accessible layout.
 */

import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton'
import CbIntro from './cb/Intro'
import CbLegal from './cb/Legal'
import CbChannels from './cb/Channels'
import CbHowTo from './cb/HowTo'
import CbEtiquette from './cb/Etiquette'
import CbModulation from './cb/Modulation'
import CbPropagation from './cb/Propagation'
import CbMistakes from './cb/Mistakes'
import CbLinks from './cb/Links'
import PageToc, { TocItem } from '../components/PageToc'

/**
 * CBPage
 * Assembles all CB sections and renders a unified local table of contents.
 */
export default function CBPage() {
  const toc: TocItem[] = [
    { id: 'intro', label: 'Wprowadzenie' },
    { id: 'legal', label: 'Prawo w PL' },
    { id: 'channels', label: 'Kanały' },
    { id: 'howto', label: 'Jak zacząć' },
    { id: 'etiquette', label: 'Etykieta' },
    { id: 'modulation', label: 'Modulacje' },
    { id: 'propagation', label: 'Propagacja' },
    { id: 'mistakes', label: 'Najczęstsze błędy' },
    { id: 'links', label: 'Baza linków' },
  ] as const

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">CB Radio — poradnik dla początkujących</h1>
        <p className="mt-2 text-slate-700 max-w-3xl">
          Pasmo obywatelskie 27 MHz bez licencji. 40 kanałów (CEPT), AM/FM oraz SSB (do 12 W PEP).
          Prosta obsługa, niski koszt wejścia i realne zastosowania w codziennej i awaryjnej łączności.
        </p>
      </header>

      {/* Unified ToC */}
      <PageToc items={toc} />

      {/* Sections with stable anchors */}
      <section id="intro" aria-labelledby="cb-intro">
        <h2 id="cb-intro" className="sr-only">Wprowadzenie</h2>
        <CbIntro />
      </section>

      <section id="legal" aria-labelledby="cb-legal" className="mt-10">
        <h2 id="cb-legal" className="sr-only">Prawo w Polsce</h2>
        <CbLegal />
      </section>

      <section id="channels" aria-labelledby="cb-channels" className="mt-10">
        <h2 id="cb-channels" className="sr-only">Kanały i przeznaczenia</h2>
        <CbChannels />
      </section>

      <section id="howto" aria-labelledby="cb-howto" className="mt-10">
        <h2 id="cb-howto" className="sr-only">Jak zacząć</h2>
        <CbHowTo />
      </section>

      <section id="etiquette" aria-labelledby="cb-etiquette" className="mt-10">
        <h2 id="cb-etiquette" className="sr-only">Etykieta</h2>
        <CbEtiquette />
      </section>

      <section id="modulation" aria-labelledby="cb-mod" className="mt-10">
        <h2 id="cb-mod" className="sr-only">Modulacje</h2>
        <CbModulation />
      </section>

      <section id="propagation" aria-labelledby="cb-prop" className="mt-10">
        <h2 id="cb-prop" className="sr-only">Propagacja</h2>
        <CbPropagation />
      </section>

      <section id="mistakes" aria-labelledby="cb-mistakes" className="mt-10">
        <h2 id="cb-mistakes" className="sr-only">Najczęstsze błędy</h2>
        <CbMistakes />
      </section>

      <section id="links" aria-labelledby="cb-links" className="mt-10">
        <h2 id="cb-links" className="sr-only">Baza linków</h2>
        <CbLinks />
      </section>

      <ScrollToTopButton />
    </div>
  )
}
