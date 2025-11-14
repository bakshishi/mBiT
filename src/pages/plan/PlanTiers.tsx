/**
 * File: plan/PlanTiers.tsx
 * Purpose: Multi‑level system overview (Tier 1–3) with equipment, range, pros/cons.
 */

import React from 'react'

/** Props used by the TierCard */
interface TierProps {
  title: string
  purpose: string
  gear: string[]
  range: string[]
  pros: string[]
  cons: string[]
}

/**
 * TierCard
 * Displays a single tier in a consistent, compact layout.
 */
function TierCard({ title, purpose, gear, range, pros, cons }: TierProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-700">{purpose}</p>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-slate-900">Sprzęt</h4>
          <ul className="mt-1 list-disc pl-4 text-sm text-slate-700">
            {gear.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-900">Zasięg</h4>
          <ul className="mt-1 list-disc pl-4 text-sm text-slate-700">
            {range.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-medium text-slate-900">Zalety</h4>
          <ul className="mt-1 list-disc pl-4 text-sm text-slate-700">
            {pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-900">Wady</h4>
          <ul className="mt-1 list-disc pl-4 text-sm text-slate-700">
            {cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

/**
 * PlanTiers
 * Lists Tier 1–3 using TierCard components.
 */
export default function PlanTiers() {
  return (
    <section id="tiers" aria-labelledby="tiers-title" className="mb-10">
      <h2 id="tiers-title" className="text-lg font-semibold text-slate-900">
        2. System wielopoziomowy — Tier 1, 2, 3
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <TierCard
          title="Tier 1 — Łączność lokalna (0–5 km)"
          purpose="Krótki dystans w terenie miejskim lub otwartym."
          gear={[
            'PMR446 (radiotelefony przenośne, 0,5 W)',
            'Meshtastic handheld (przenośne węzły LoRa)',
          ]}
          range={[
            'PMR446: 1–5 km w mieście, do ~10 km w otwartym terenie',
            'Meshtastic: podobny zasięg, ale z przekazywaniem przez kolejne węzły',
          ]}
          pros={['Bez licencji', 'Prosta obsługa', 'Niski koszt']}
          cons={['Ograniczony zasięg w zabudowie', 'Wrażliwość na przeszkody terenowe']}
        />

        <TierCard
          title="Tier 2 — Średni zasięg (5–30 km)"
          purpose="Łączność między miejscowościami, trudny teren, wsparcie repeaterów."
          gear={[
            'CB Radio (stacje bazowe/samochodowe)',
            'PMR446 z lepszym umiejscowieniem anteny (wysoko)',
            'Nody Meshtastic z repeaterami stacjonarnymi',
          ]}
          range={[
            'CB: 5–20 km, do ~40 km ze stacji bazowej i dobrą anteną',
            'PMR z wysokości: możliwe >100 km w sprzyjających warunkach',
            'Meshtastic mesh: zasięg rozszerzany przez kolejne węzły',
          ]}
          pros={['Lepsze pokrycie obszaru', 'Wsparcie repeaterów', 'CB: większa moc i penetracja przeszkód']}
          cons={['CB wymaga zasilania 12 V', 'Potrzebne podstawy procedur radiowych']}
        />

        <TierCard
          title="Tier 3 — Dalekosiężna (30 km+, globalnie)"
          purpose="Połączenia dalekiego zasięgu, w tym międzynarodowe."
          gear={[
            'Meshtastic DX (konfiguracje maksymalnego zasięgu, np. Very Long Slow)',
            'Wysokie repetery Meshtastic (maszty, wieże, wysokie budynki)',
            'Winlink (email przez radio, wymaga licencji)',
            'Krótkofalarstwo HF (wymaga licencji)',
          ]}
          range={[
            'Meshtastic DX: potwierdzone połączenia >300 km',
            'Winlink: globalny zasięg (fale krótkie HF)',
          ]}
          pros={['Możliwy zasięg globalny', 'Email przez radio (Winlink)', 'Mostkowanie sieci mesh przez Internet']}
          cons={['Wyższa złożoność', 'Wyższy koszt sprzętu', 'Wymagana licencja (Winlink/HF)']}
        />
      </div>
    </section>
  )
}
