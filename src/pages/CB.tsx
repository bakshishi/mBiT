/**
 * File: CB.tsx
 * Purpose: CB Radio overview for CEPT plan with channels and HF propagation basics.
 */

import React from 'react'

/**
 * CBPage
 * Presents CB radio essentials for the CEPT plan and operational etiquette.
 */
export default function CBPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">CB Radio — 27 MHz</h1>
        <p className="text-slate-700 mt-1">40 kanałów (CEPT), tryby AM/FM/SSB, moc 1–4 W.</p>
      </header>
      <section aria-labelledby="channels">
        <h2 id="channels" className="text-lg font-semibold text-slate-900">Kanały</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          <li>Kanał 9: 27.065 MHz (Emergency)</li>
          <li>Kanał 19: 27.185 MHz (Trucker&apos;s)</li>
          <li>Kanał 20: 27.205 MHz (Ogólny)</li>
        </ul>
      </section>
      <section aria-labelledby="hf" className="mt-8">
        <h2 id="hf" className="text-lg font-semibold text-slate-900">Propagacja HF</h2>
        <p className="text-sm text-slate-700">
          Warunki zależą od pory dnia i sezonu; występuje propagacja E/F. Możliwy zasięg lokalny po globalny.
        </p>
      </section>
    </div>
  )
}
