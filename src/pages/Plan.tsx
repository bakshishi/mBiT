/**
 * File: Plan.tsx
 * Purpose: Page composition for the Multi‑System Emergency Plan using modular sub‑sections and unified ToC via PageToc.
 */

import React from 'react'
import { Printer } from 'lucide-react'
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
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-field-text tracking-tight">Plan Awaryjny — Multi‑System</h1>
          <p className="text-field-muted mt-1 text-sm sm:text-base">
            Praktyczny plan łączności awaryjnej: poziomy (Tier 1–3), sprzęt, zasilanie, procedury, testy i checklisty.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="print:hidden self-start sm:self-auto inline-flex items-center gap-1.5 rounded-md border border-field-border bg-field-card px-3 py-1.5 text-xs sm:text-sm font-medium text-field-text shadow-sm hover:bg-field-recessed hover:text-signal-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber transition-colors"
          aria-label="Drukuj plan awaryjny lub zapisz jako PDF"
        >
          <Printer size={16} aria-hidden="true" />
          Drukuj / Zapisz PDF
        </button>
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
