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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">EU Accessibility Act (EAA)</h1>
       <p className="text-slate-700 mt-1">
	   Serwis wpisuje się w wymagania EAA/EN 301 549 dla produktów i usług cyfrowych.
	   </p>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Zakres</h2>
      <p>Zapewnienie dostępności interfejsów, dokumentacji i wsparcia użytkowników.</p>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Praktyka</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
        <li>Kontrast co najmniej 4.5:1.</li>
        <li>Obsługa klawiaturą i czytnikami ekranu.</li>
      </ul>
      </section>
    </div>
  )
}
