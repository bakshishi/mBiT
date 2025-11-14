/**
 * File: Accessibility.tsx
 * Purpose: WCAG 2.1 AA accessibility statement page.
 */

import React from 'react'

/**
 * AccessibilityPage
 * Declares conformance goals, testing methods, and contact for accessibility requests.
 */
export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
      <h1>Deklaracja Dostępności (WCAG 2.1 AA)</h1>
      <p>Serwis mBiT.pm dąży do pełnej zgodności z WCAG 2.1 AA i EN 301 549.</p>
      <h2>Kluczowe funkcje</h2>
      <ul>
        <li>Semantyczny HTML5, nawigacja klawiaturą, widoczny focus, alt dla obrazów.</li>
        <li>Skip link do treści głównej, ARIA label dla elementów interaktywnych.</li>
      </ul>
      <h2>Testowanie</h2>
      <p>Weryfikacja z użyciem WAVE i axe DevTools, testy na urządzeniach mobilnych.</p>
      <h2>Kontakt</h2>
      <p>Zgłoszenia barier: accessibility@mbit.pm</p>
    </article>
  )
}
