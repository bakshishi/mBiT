/**
 * File: Accessibility.tsx
 * Purpose: WCAG 2.1 AA accessibility statement page with unified styling and single contact email.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'

/**
 * AccessibilityPage
 * Declares conformance goals, testing methods, and contact for accessibility requests and feedback.
 */
export default function AccessibilityPage() {
  return (
    <PageContainer
      title="Deklaracja Dostępności (WCAG 2.1 AA)"
      intro="Serwis mBiT.pm dąży do pełnej zgodności z WCAG 2.1 AA oraz EN 301 549."
    >
      <section aria-labelledby="features">
        <h2 id="features" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Kluczowe funkcje dostępności</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Semantyczny HTML5, nawigacja klawiaturą, widoczny focus, alternative text dla obrazów.</li>
          <li>Skip link do treści głównej, ARIA labels dla elementów interaktywnych.</li>
          <li>Kontrast co najmniej 4.5:1 w stanach normalnych, zgodny z WCAG AA.</li>
        </ul>
      </section>

      <section aria-labelledby="testing">
        <h2 id="testing" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Testy i weryfikacja</h2>
        <p>
          Dostępność weryfikujemy za pomocą narzędzi WAVE, axe DevTools oraz testów manualnych (klawiatura, czytniki ekranu, urządzenia mobilne).
        </p>
      </section>

      <section aria-labelledby="feedback">
        <h2 id="feedback" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Zgłoszenia i kontakt</h2>
        <p>
          Jeśli napotkasz bariery dostępności lub potrzebujesz alternatywnego formatu treści, napisz do nas:
          {' '}
          <a className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2" href="mailto:kontakt@mbit.pm">
            kontakt@mbit.pm
          </a>.
          Postaramy się odpowiedzieć niezwłocznie, nie później niż w 14 dni.
        </p>
      </section>
    </PageContainer>
  )
}
