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
      intro="mBiT.pm to niekomercyjny serwis informacyjny, który najpewniej nie podlega dyrektywie EAA; mimo to dążymy do dostępności."
    >
      <Section id="scope" title="Zakres">
        <p>
          EU Accessibility Act dotyczy m.in. e-commerce, transportu, mediów audiowizualnych i usług bankowych dla konsumentów. Serwis nie oferuje takich usług, więc stosujemy WCAG 2.1 AA dobrowolnie, jako dobrą praktykę.
        </p>
      </Section>

      <Section id="practice" title="Praktyka">
        <ul className="list-disc pl-6 space-y-2">
          <li>Dążymy do kontrastu co najmniej 4.5:1, skalowalnego tekstu oraz obsługi klawiaturą i czytnikami ekranu.</li>
          <li>Zgłoszone bariery poprawiamy w miarę możliwości.</li>
        </ul>
      </Section>

      <Section id="contact" title="Kontakt">
        <p>
          W sprawach związanych z EAA prosimy o kontakt:{' '}
          <a
            className="text-signal-amber hover:underline underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>
        </p>
      </Section>
    </PageContainer>
  )
}
