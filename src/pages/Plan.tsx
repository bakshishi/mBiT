/**
 * File: Plan.tsx
 * Purpose: Page composition for the Multi‑System Emergency Plan using modular sub‑sections and unified ToC via PageToc.
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
import ScrollToTopButton from '../components/ScrollToTopButton'
import PageToc, { TocItem } from '../components/PageToc'

/**
 * PlanPage
 * Renders the emergency communication plan with unified textual ToC. Hash not modified to keep HashRouter path stable.
 */
export default function PlanPage() {
  /** ToC items that match anchors defined in corresponding subsections */
  const toc: TocItem[] = [
    { id: 'wprowadzenie', label: 'Wprowadzenie' },
    { id: 'tiers', label: 'System wielopoziomowy (Tier 1–3)' },
    { id: 'sprzet', label: 'Sprzęt podstawowy' },
    { id: 'zasilanie', label: 'Zasilanie awaryjne' },
    { id: 'procedury', label: 'Procedury' },
    { id: 'testy', label: 'Testy łączności' },
    { id: 'bledy', label: 'Najczęstsze błędy' },
    { id: 'linki', label: 'Baza linków' },
    { id: 'checklisty', label: 'Checklisty' },
    { id: 'spolecznosc', label: 'Kontakt i społeczność' },
    { id: 'slowniczek', label: 'Słowniczek' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Plan Awaryjny — Multi‑System</h1>
        <p className="text-slate-700 mt-1">
          Praktyczny plan łączności awaryjnej: poziomy (Tier 1–3), sprzęt, zasilanie, procedury, testy i checklisty.
        </p>
      </header>

      {/* Unified ToC */}
      <PageToc items={toc} />

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

      {/* Floating action: scroll back to top */}
      <ScrollToTopButton />
    </div>
  )
}
