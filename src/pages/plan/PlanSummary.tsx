/**
 * File: plan/PlanSummary.tsx
 * Purpose: Readiness checklists before and during emergencies.
 */

import React from 'react'

/** Checklist rendering helper */
function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <h3 className="text-sm font-medium text-slate-900">{title}</h3>
      <ul className="mt-2 list-none space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
            <span aria-hidden="true" className="mt-0.5 inline-block h-4 w-4 rounded-sm border border-slate-300" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * PlanSummary
 * Two concise checklists: before and during an emergency.
 */
export default function PlanSummary() {
  const before = [
    'Posiadam co najmniej 2 radiotelefony PMR446',
    'Mam węzeł Meshtastic (opcjonalnie) i/lub CB Radio',
    'Wszystkie urządzenia są naładowane; mam zapasowe baterie/powerbank',
    'Mam panel solarny (opcjonalnie)',
    'Znam kanały awaryjne (PMR: 2/12, PMR w górach: 3 CTCSS 14; CB: 11 USB/13 AM)',
    'Biorę udział w testach (13. dzień i ostatnia sobota miesiąca, 20:00)',
    'Znam formułę wywołania ogólnego',
    'Mam notes do dokumentowania kontaktów',
  ]

  const during = [
    'Włączyłem PMR i sprawdziłem kanał 2/3 (góry: 3 z CTCSS 14)',
    'Aktywowałem Meshtastic i wysłałem wiadomość testową',
    'Użyłem CB dla większego zasięgu (jeżeli posiadam)',
    'Dokumentuję kontakty: czas, znak/imię, lokalizacja, raport, treść',
    'Oszczędzam energię (wyłączam nieużywane urządzenia)',
    'Zmieniam lokalizację, gdy nie ma łączności',
  ]

  return (
    <section id="checklisty" aria-labelledby="summary-title" className="mb-10">
      <h2 id="summary-title" className="text-lg font-semibold text-slate-900">9. Podsumowanie — Checklist gotowości</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <Checklist title="Przed sytuacją awaryjną" items={before} />
        <Checklist title="W sytuacji awaryjnej" items={during} />
      </div>
    </section>
  )
}
