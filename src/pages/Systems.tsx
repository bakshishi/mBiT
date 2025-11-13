/**
 * File: Systems.tsx
 * Purpose: Additional systems overview (Winlink, amateur radio) and maintenance checklist.
 */

import React from 'react'

/**
 * SystemsPage
 * Lists additional emergency comms systems and deployment checklist.
 */
export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Dodatkowe Systemy</h1>
        <p className="text-slate-700 mt-1">Winlink 2000, radio amatorskie oraz zagadnienia wdrożeniowe.</p>
      </header>

      <section aria-labelledby="winlink">
        <h2 id="winlink" className="text-lg font-semibold text-slate-900">Winlink 2000</h2>
        <p className="text-sm text-slate-700 mt-2">E‑mail przez radio HF/VHF/UHF, działanie bez Internetu.</p>
      </section>

      <section aria-labelledby="check" className="mt-8">
        <h2 id="check" className="text-lg font-semibold text-slate-900">Checklist wdrożenia</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>HTTPS only (SSL/TLS), kompresja gzip, caching headers.</li>
          <li>Minifikacja CSS/JS, optymalizacja obrazów (WebP), CDN.</li>
          <li>Audyt dostępności (WAVE, axe), testy mobilne.</li>
          <li>Security headers: CSP, HSTS, X-Content-Type-Options.</li>
        </ul>
      </section>
    </div>
  )
}
