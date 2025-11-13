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
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
<h1>Polityka Cookies</h1>
    <h2>Czym są pliki cookies?</h2>
    <p>
      Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika. Strona mBit.pm używa wyłącznie niezbędnych cookies do zapewnienia podstawowej funkcjonalności (np. zapamiętanie wyboru języka, sesji użytkownika).
    </p>
    <h2>Jak zarządzać cookies?</h2>
    <p>
      Użytkownik może w każdej chwili usunąć lub zablokować cookies poprzez ustawienia swojej przeglądarki internetowej. Ograniczenie stosowania plików cookies może wpłynąć na działanie niektórych funkcji strony.
    </p>
    <h2>Czy używamy cookies zewnętrznych?</h2>
    <p>
      Nie korzystamy z cookies zewnętrznych ani trackingowych.
    </p>
    <h2>Kontakt</h2>
    <p>
      W sprawach polityki cookies i prywatności prosimy pisać na adres <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>.
    </p>
    </article>
  )
}
