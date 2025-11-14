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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Oświadczenie dostępności cyfrowej (WCAG 2.1 AA)</h1>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="cfg" className="text-lg font-semibold text-slate-900"></h2>Deklaracja dostępności</h2>
    <p>
      Projekt mBit.pm zobowiązuje się zapewnić dostępność strony zgodnie z wytycznymi WCAG 2.1 na poziomie AA. Strona jest w pełni responsywna, czytelna na wszystkich urządzeniach i dostępna dla osób z niepełnosprawnościami.
    </p>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Kluczowe elementy dostępności</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
      <li>Kontrast tekstu: min. 4.5:1</li>
      <li>Widoczne focus indicators</li>
      <li>Nawigacja klawiaturą</li>
      <li>Alt tekst dla wszystkich grafik</li>
      <li>Skip navigation link</li>
      <li>Strukturalne nagłówki semantyczne</li>
      <li>Kompatybilność z czytnikami ekranu</li>
        </ul>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Uwagi i kontakt</h2>
    <p>
      W przypadku problemów z dostępnością prosimy o kontakt: <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>. Staramy się usuwać bariery cyfrowe na bieżąco.
    </p>
      </section>
    </div>
  )
}
