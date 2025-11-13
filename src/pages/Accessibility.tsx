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
  <h1>Oświadczenie dostępności cyfrowej (WCAG 2.1 AA)</h1>
    <h2>Deklaracja dostępności</h2>
    <p>
      Projekt mBit.pm zobowiązuje się zapewnić dostępność strony zgodnie z wytycznymi WCAG 2.1 na poziomie AA. Strona jest w pełni responsywna, czytelna na wszystkich urządzeniach i dostępna dla osób z niepełnosprawnościami.
    </p>
    <h2>Kluczowe elementy dostępności</h2>
    <ul>
      <li>Kontrast tekstu: min. 4.5:1</li>
      <li>Widoczne focus indicators</li>
      <li>Nawigacja klawiaturą</li>
      <li>Alt tekst dla wszystkich grafik</li>
      <li>Skip navigation link</li>
      <li>Strukturalne nagłówki semantyczne</li>
      <li>Kompatybilność z czytnikami ekranu</li>
    </ul>
    <h2>Uwagi i kontakt</h2>
    <p>
      W przypadku problemów z dostępnością prosimy o kontakt: <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>. Staramy się usuwać bariery cyfrowe na bieżąco.
    </p>
    </article>
  )
}
