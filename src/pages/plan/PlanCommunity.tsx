/**
 * File: plan/PlanCommunity.tsx
 * Purpose: Contact and community resources.
 */

import React from 'react'

/**
 * PlanCommunity
 * Lists helpful portals, forums and communities.
 */
export default function PlanCommunity() {
  return (
    <section id="spolecznosc" aria-labelledby="community-title" className="mb-10">
      <h2 id="community-title" className="text-lg font-semibold text-slate-900">10. Kontakt i społeczność</h2>
      <div className="mt-2 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Strony i fora</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>
              <a className="text-indigo-700 hover:underline" href="https://planawaryjny.com/" target="_blank" rel="noopener noreferrer">
                Plan Awaryjny
              </a>
            </li>
            <li>
              <a className="text-indigo-700 hover:underline" href="https://www.facebook.com/groups/342559882144940" target="_blank" rel="noopener noreferrer">
                Grupa Facebook (preppers)
              </a>
            </li>
            <li>
              <a className="text-indigo-700 hover:underline" href="https://discord.gg/krotkofalarstwo" target="_blank" rel="noopener noreferrer">
                Discord krótkofalarski
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-medium text-slate-900">Patronat i wsparcie</h3>
          <p className="mt-2 text-sm text-slate-700">
            Wspieraj twórców kanałów edukacyjnych (Patronite, BuyCoffee) i dołączaj do lokalnych grup prepperskich
            i krótkofalarskich — społeczność przyspiesza naukę i ułatwia testy łączności.
          </p>
        </div>
      </div>
    </section>
  )
}
