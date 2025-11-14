/**
 * File: EAA.tsx
 * Purpose: EU Accessibility Act information page with consistent styles.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'

/**
 * EAAPage
 * Presents EAA scope and our compliance approach, with unified contact info.
 */
export default function EAAPage() {
  return (
    <PageContainer
      title="EU Accessibility Act (EAA)"
      intro="mBiT.pm wspiera wymagania EAA/EN 301 549 dla produktów i usług cyfrowych."
    >
      <section aria-labelledby="scope">
        <h2 id="scope" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Zakres</h2>
        <p>
          Zapewnienie dostępności interfejsów, dokumentacji oraz wsparcia użytkowników, w tym dostępu równoważnego i zgodności z WCAG 2.1 AA.
        </p>
      </section>

      <section aria-labelledby="practice">
        <h2 id="practice" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Praktyka</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Kontrast co najmniej 4.5:1, skalowalny tekst, obsługa klawiaturą i czytnikami ekranu.</li>
          <li>Proces ciągłego doskonalenia – testy, audyty i poprawki w cyklu utrzymaniowym.</li>
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Kontakt</h2>
        <p>
          W sprawach związanych z EAA prosimy o kontakt:
          {' '}
          <a className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2" href="mailto:kontakt@mbit.pm">
            kontakt@mbit.pm
          </a>
        </p>
      </section>
    </PageContainer>
  )
}
