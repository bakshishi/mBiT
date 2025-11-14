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
      <p>Używamy wyłącznie cookies niezbędnych do funkcjonowania strony (np. zapamiętanie decyzji o cookies).</p>
      <h2>Twoje wybory</h2>
      <p>Możesz w każdej chwili usunąć zgodę – wyczyść pamięć przeglądarki (localStorage: cookie-consent).</p>
      <h2>Brak śledzenia</h2>
      <p>Nie używamy analityki naruszającej prywatność bez uprzedniej zgody.</p>
    </article>
  )
}
