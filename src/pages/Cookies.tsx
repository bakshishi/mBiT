/**
 * File: Cookies.tsx
 * Purpose: Cookie policy page aligned with GDPR, using PageContainer for consistent styling.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'

/**
 * CookiesPage
 * Describes cookie types used and choices available to users (strictly necessary only).
 */
export default function CookiesPage() {
  return (
    <PageContainer
      title="Polityka Cookies"
      intro="Używamy wyłącznie plików cookies niezbędnych do funkcjonowania serwisu mBiT.pm."
    >
      <section aria-labelledby="what">
        <h2 id="what" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Jakie cookies wykorzystujemy?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Niezbędne (required) – np. zapamiętanie decyzji dotyczącej banera cookies i preferencji interfejsu.</li>
          <li>Nie używamy śledzących ani marketingowych cookies bez uprzedniej, wyraźnej zgody.</li>
        </ul>
      </section>

      <section aria-labelledby="control">
        <h2 id="control" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Jak kontrolować cookies?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>W każdej chwili możesz usunąć cookies w ustawieniach przeglądarki.</li>
          <li>Możesz też zresetować decyzję dot. cookies usuwając dane strony (np. localStorage).</li>
        </ul>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Kontakt</h2>
        <p>
          Pytania dotyczące cookies i prywatności:{" "}
          <a className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2" href="mailto:kontakt@mbit.pm">
            kontakt@mbit.pm
          </a>
        </p>
      </section>
    </PageContainer>
  )
}
