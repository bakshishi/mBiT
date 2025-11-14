/**
 * File: Privacy.tsx
 * Purpose: GDPR-compliant privacy policy page (summary demo content).
 */

import React from 'react'

/**
 * PrivacyPage
 * Provides core GDPR statements, user rights, and contact for data requests.
 */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Polityka Prywatności (RODO)</h1>
      </header>

      <section aria-labelledby="cfg">
        <h2 id="cfg" className="text-lg font-semibold text-slate-900">Informacje ogólne</h2>
    <p>
      Niniejsza strona internetowa mBit.pm jest niezależnym projektem informacyjnym dotyczącym łączności awaryjnej. Szanujemy prywatność użytkowników i nie zbieramy danych osobowych, poza adresem e-mail w kontaktach bezpośrednich (<a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>).
    </p>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Dane osobowe</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
      <li>Nie rejestrujemy kont użytkowników.</li>
      <li>Nie prowadzimy analityki odwiedzin, nie korzystamy z Google Analytics ani innych narzędzi śledzących.</li>
      <li>Przesłanie wiadomości e-mail na adres kontaktowy powoduje przetwarzanie adresu e-mail i treści wiadomości wyłącznie w celu udzielenia odpowiedzi.</li>
    </ul>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Podstawa prawna</h2>
    <p>
      Przetwarzanie danych odbywa się zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
    </p>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Prawa użytkownika</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
      <li>Prawo dostępu do danych</li>
      <li>Prawo sprostowania</li>
      <li>Prawo ograniczenia przetwarzania</li>
      <li>Prawo usunięcia danych</li>
    </ul>
    <p>Aby skorzystać ze swoich praw skontaktuj się na adres: <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>.</p>
      </section>

      <section aria-labelledby="diff" className="mt-8">
        <h2 id="diff" className="text-lg font-semibold text-slate-900">Zmiany Polityki Prywatności</h2>
    <p>
      Polityka może być aktualizowana; wszelkie zmiany publikujemy na tej stronie.
    </p>
      </section>
    </div>
  )
}
