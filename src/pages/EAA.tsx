/**
 * File: EAA.tsx
 * Purpose: EU Accessibility Act information page with consistent styles.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

/**
 * EAAPage
 * Presents EAA scope and our compliance approach, with unified contact info.
 * Uses Section to ensure anchor navigation doesn't hide headings under the sticky header.
 */
export default function EAAPage() {
  return (
    <PageContainer
      title="EU Accessibility Act (EAA)"
      intro="mBiT.pm wspiera wymagania EAA/EN 301 549 dla produktów i usług cyfrowych."
    >
      <Section id="scope" title="Zakres">
        <p>
          Zapewnienie dostępności interfejsów, dokumentacji oraz wsparcia użytkowników, w tym dostępu równoważnego i zgodności z WCAG 2.1 AA.
        </p>
      </Section>

      <Section id="practice" title="Praktyka">
        <ul className="list-disc pl-6 space-y-2">
          <li>Kontrast co najmniej 4.5:1, skalowalny tekst, obsługa klawiaturą i czytnikami ekranu.</li>
          <li>Proces ciągłego doskonalenia – testy, audyty i poprawki w cyklu utrzymaniowym.</li>
        </ul>
      </Section>

      <Section id="contact" title="Kontakt">
        <p>
          W sprawach związanych z EAA prosimy o kontakt:{' '}
          <a
            className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>
        </p>
      </Section>
    </PageContainer>
  )
}
