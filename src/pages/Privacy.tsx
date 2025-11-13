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
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 prose prose-slate">
<h1>Polityka Prywatności (RODO)</h1>
    <h2>Informacje ogólne</h2>
    <p>
      Niniejsza strona internetowa mBit.pm jest niezależnym projektem informacyjnym dotyczącym łączności awaryjnej. Szanujemy prywatność użytkowników i nie zbieramy danych osobowych, poza adresem e-mail w kontaktach bezpośrednich (<a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>).
    </p>
    <h2>Dane osobowe</h2>
    <ul>
      <li>Nie rejestrujemy kont użytkowników.</li>
      <li>Nie prowadzimy analityki odwiedzin, nie korzystamy z Google Analytics ani innych narzędzi śledzących.</li>
      <li>Przesłanie wiadomości e-mail na adres kontaktowy powoduje przetwarzanie adresu e-mail i treści wiadomości wyłącznie w celu udzielenia odpowiedzi.</li>
    </ul>
    <h2>Podstawa prawna</h2>
    <p>
      Przetwarzanie danych odbywa się zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
    </p>
    <h2>Prawa użytkownika</h2>
    <ul>
      <li>Prawo dostępu do danych</li>
      <li>Prawo sprostowania</li>
      <li>Prawo ograniczenia przetwarzania</li>
      <li>Prawo usunięcia danych</li>
    </ul>
    <p>Aby skorzystać ze swoich praw skontaktuj się na adres: <a href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>.</p>
    <h2>Zmiany Polityki Prywatności</h2>
    <p>
      Polityka może być aktualizowana; wszelkie zmiany publikujemy na tej stronie.
    </p>
    </article>
  )
}
