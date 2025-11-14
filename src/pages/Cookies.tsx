/**
 * File: Cookies.tsx
 * Purpose: Cookie policy page aligned with GDPR, using PageContainer for consistent styling.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

/**
 * CookiesPage
 * Describes cookie types used and choices available to users (strictly necessary only).
 * Uses Section to ensure proper scroll offset under sticky header.
 */
export default function CookiesPage() {
  return (
    <PageContainer
      title="Polityka Cookies"
      intro="Używamy wyłącznie plików cookies niezbędnych do funkcjonowania serwisu mBiT.pm."
    >
      <Section id="what" title="Jakie cookies wykorzystujemy?">
        <ul className="list-disc pl-6 space-y-2">
          <li>Niezbędne (required) – np. zapamiętanie decyzji dotyczącej banera cookies i preferencji interfejsu.</li>
          <li>Nie używamy śledzących ani marketingowych cookies bez uprzedniej, wyraźnej zgody.</li>
        </ul>
      </Section>

      <Section id="control" title="Jak kontrolować cookies?">
        <ul className="list-disc pl-6 space-y-2">
          <li>W każdej chwili możesz usunąć cookies w ustawieniach przeglądarki.</li>
          <li>Możesz też zresetować decyzję dot. cookies usuwając dane strony (np. localStorage).</li>
        </ul>
      </Section>

      <Section id="contact" title="Kontakt">
        <p>
          Pytania dotyczące cookies i prywatności:{' '}
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
