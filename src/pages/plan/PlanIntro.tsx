/**
 * File: plan/PlanIntro.tsx
 * Purpose: Introduction explaining the importance of emergency communication.
 */

import React from 'react'

/**
 * PlanIntro
 * Presents the context: failures of conventional networks and why to prepare alternative systems.
 */
export default function PlanIntro() {
  return (
    <section id="wprowadzenie" aria-labelledby="intro-title" className="mb-10">
      <h2 id="intro-title" className="text-lg font-semibold text-slate-900">
        1. Wprowadzenie — Dlaczego komunikacja awaryjna jest ważna?
      </h2>
      <p className="mt-2 text-sm text-slate-700">
        W sytuacjach kryzysowych (awarie energii, klęski żywiołowe, brak łączności komórkowej lub internetowej)
        tradycyjna komunikacja często zawodzi. Dlatego warto przygotować alternatywne źródła łączności,
        działające niezależnie od infrastruktury operatorów. Ten plan opiera się na urządzeniach bezlicencyjnych
        (PMR446, CB) oraz systemach mesh (Meshtastic), które tworzą zdecentralizowaną sieć komunikacyjną.
      </p>
    </section>
  )
}
