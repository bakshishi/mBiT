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
      <p>
        Szanujemy Twoją prywatność. Zbieramy minimalne dane niezbędne do działania serwisu.
        Nie stosujemy profilowania ani śledzących cookies bez Twojej zgody.
      </p>
      <h2>Administrator</h2>
      <p>Email: privacy@mbit.pm</p>
      <h2>Podstawa i cel przetwarzania</h2>
      <ul>
        <li>Niezbędność do świadczenia usługi (art. 6 ust. 1 lit. b RODO).</li>
        <li>Zgoda użytkownika dla funkcjonalności opcjonalnych (art. 6 ust. 1 lit. a).</li>
      </ul>
      <h2>Prawa użytkownika</h2>
      <ul>
        <li>Dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie, sprzeciw.</li>
      </ul>
      <h2>Kontakt w sprawie danych</h2>
      <p>Wnioski wysyłaj na: accessibility@mbit.pm lub privacy@mbit.pm</p>
    </article>
  )
}
