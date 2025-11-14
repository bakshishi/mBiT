/**
 * File: Cookies.tsx
 * Purpose: Cookie policy page aligned with GDPR.
 */

import React from 'react'

/**
 * CookiesPage
 * Describes cookie types used and choices available to users.
 */
export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Polityka Cookies</h1>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="cfg" className="text-lg font-semibold text-slate-900">Czym są pliki cookies?</h2>
    <p>
      Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika. Strona mBit.pm używa wyłącznie niezbędnych cookies do zapewnienia podstawowej funkcjonalności (np. zapamiętanie wyboru języka, sesji użytkownika).
    </p>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Jak zarządzać cookies?</h2>
    <p>
      Użytkownik może w każdej chwili usunąć lub zablokować cookies poprzez ustawienia swojej przeglądarki internetowej. Ograniczenie stosowania plików cookies może wpłynąć na działanie niektórych funkcji strony.
    </p>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Czy używamy cookies zewnętrznych?</h2>
    <p>
      Nie korzystamy z cookies zewnętrznych ani trackingowych.
    </p>
      </section>

      <section aria-labelledby="pl-res" className="mt-8">
        <h2 id="pl-res" className="text-lg font-semibold text-slate-900">Kontakt</h2>
    <p>
      W sprawach polityki cookies i prywatności prosimy pisać na adres <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>.
    </p>
      </section>
    </div>
  )
}
