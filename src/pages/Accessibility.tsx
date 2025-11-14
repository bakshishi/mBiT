/**
 * File: Accessibility.tsx
 * Purpose: WCAG 2.1 AA accessibility statement page with unified styling and single contact email.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

/**
 * AccessibilityPage
 * Declares conformance goals, testing methods, and contact for accessibility requests and feedback.
 * Uses Section to avoid sticky header overlap on anchor navigation.
 */
export default function AccessibilityPage() {
  return (
    <PageContainer
      title="Deklaracja Dostępności (WCAG 2.1 AA)"
      intro="Serwis mBiT.pm dąży do pełnej zgodności z WCAG 2.1 AA oraz EN 301 549."
    >
      <Section id="features" title="Kluczowe funkcje dostępności">
        <ul className="list-disc pl-6 space-y-2">
          <li>Semantyczny HTML5, nawigacja klawiaturą, widoczny focus, alternative text dla obrazów.</li>
          <li>Skip link do treści głównej, ARIA labels dla elementów interaktywnych.</li>
          <li>Kontrast co najmniej 4.5:1 w stanach normalnych, zgodny z WCAG AA.</li>
        </ul>
      </Section>

      <Section id="testing" title="Testy i weryfikacja">
        <p>
          Dostępność weryfikujemy za pomocą narzędzi WAVE, axe DevTools oraz testów manualnych (klawiatura, czytniki ekranu, urządzenia mobilne).
        </p>
      </Section>

      <Section id="feedback" title="Zgłoszenia i kontakt">
        <p>
          Jeśli napotkasz bariery dostępności lub potrzebujesz alternatywnego formatu treści, napisz do nas:{' '}
          <a
            className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>. Postaramy się odpowiedzieć niezwłocznie, nie później niż w 14 dni.
        </p>
      </Section>
    </PageContainer>
  )
}
