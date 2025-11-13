/**
 * File: EAA.tsx
 * Purpose: EU Accessibility Act information page.
 */

import React from 'react'

/**
 * EAAPage
 * Presents EAA scope and our compliance approach.
 */
export default function EAAPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
      <h1>EU Accessibility Act (EAA)</h1>
      <p>Serwis wpisuje się w wymagania EAA/EN 301 549 dla produktów i usług cyfrowych.</p>
      <h2>Zakres</h2>
      <p>Zapewnienie dostępności interfejsów, dokumentacji i wsparcia użytkowników.</p>
      <h2>Praktyka</h2>
      <ul>
        <li>Kontrast co najmniej 4.5:1.</li>
        <li>Obsługa klawiaturą i czytnikami ekranu.</li>
      </ul>
    </article>
  )
}
