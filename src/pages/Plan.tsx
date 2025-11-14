/**
 * File: Plan.tsx
 * Purpose: Page composition for the Multi‑System Emergency Plan using modular sub‑sections.
 * Notes: Assembles content components and provides in‑page navigation (table of contents).
 */

import React from 'react'
import PlanIntro from './plan/PlanIntro'
import PlanTiers from './plan/PlanTiers'
import PlanEquipment from './plan/PlanEquipment'
import PlanPower from './plan/PlanPower'
import PlanProcedures from './plan/PlanProcedures'
import PlanTests from './plan/PlanTests'
import PlanMistakes from './plan/PlanMistakes'
import PlanLinks from './plan/PlanLinks'
import PlanSummary from './plan/PlanSummary'
import PlanCommunity from './plan/PlanCommunity'
import PlanGlossary from './plan/PlanGlossary'

/**
 * PlanPage
 * Renders the full emergency communication plan with anchored sections and consistent formatting.
 */
export default function PlanPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Plan Awaryjny — Multi‑System</h1>
        <p className="text-slate-700 mt-1">
          Praktyczny plan łączności awaryjnej: poziomy (Tier 1–3), sprzęt, zasilanie, procedury, testy i checklisty.
        </p>
      </header>

      {/* Table of contents for quick navigation */}
      <nav aria-label="Spis treści" className="mb-8">
        <ul className="list-disc pl-5 text-sm text-slate-700 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          <li><a className="text-indigo-700 hover:underline" href="#wprowadzenie">Wprowadzenie</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#tiers">System wielopoziomowy (Tier 1–3)</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#sprzet">Sprzęt podstawowy</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#zasilanie">Zasilanie awaryjne</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#procedury">Procedury</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#testy">Testy łączności</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#bledy">Najczęstsze błędy</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#linki">Baza linków</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#checklisty">Checklisty</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#spolecznosc">Kontakt i społeczność</a></li>
          <li><a className="text-indigo-700 hover:underline" href="#slowniczek">Słowniczek</a></li>
        </ul>
      </nav>

      <PlanIntro />
      <PlanTiers />
      <PlanEquipment />
      <PlanPower />
      <PlanProcedures />
      <PlanTests />
      <PlanMistakes />
      <PlanLinks />
      <PlanSummary />
      <PlanCommunity />
      <PlanGlossary />
    </div>
  )
}
