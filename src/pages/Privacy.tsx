/**
 * File: Privacy.tsx
 * Purpose: GDPR-compliant privacy policy page using consistent PageContainer styles.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'

/**
 * PrivacyPage
 * Provides core GDPR statements, user rights, data scope and a single unified contact address.
 */
export default function PrivacyPage() {
  return (
    <PageContainer
      title="Polityka Prywatności (RODO)"
      intro="Dbamy o prywatność użytkowników serwisu mBiT.pm. Zbieramy wyłącznie minimum danych niezbędnych do działania strony."
    >
      <section aria-labelledby="admin">
        <h2 id="admin" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Administrator i kontakt</h2>
        <p>
          Administratorem danych jest zespół mBiT.pm. Kontakt w każdej sprawie dotyczącej danych osobowych:
          <br />
          <a className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2" href="mailto:kontakt@mbit.pm">
            kontakt@mbit.pm
          </a>
        </p>
      </section>

      <section aria-labelledby="basis">
        <h2 id="basis" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Zakres i podstawa przetwarzania</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Niezbędność do świadczenia usługi – obsługa serwisu, bezpieczeństwo, utrzymanie (art. 6 ust. 1 lit. b i f RODO).</li>
          <li>Zgoda użytkownika – wyłącznie dla funkcjonalności opcjonalnych, jeśli zostaną udostępnione (art. 6 ust. 1 lit. a RODO).</li>
          <li>Minimalizacja danych – nie prowadzimy profilowania ani nie zbieramy danych nadmiarowych.</li>
        </ul>
      </section>

      <section aria-labelledby="cookies">
        <h2 id="cookies" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Pliki cookies i podobne technologie</h2>
        <p>
          Serwis korzysta wyłącznie z plików cookies niezbędnych do jego działania (np. zapamiętanie decyzji o banerze cookies). Nie stosujemy śledzących cookies ani analityki naruszającej prywatność bez wyraźnej zgody.
        </p>
      </section>

      <section aria-labelledby="rights">
        <h2 id="rights" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Prawa użytkownika</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dostęp do danych i uzyskanie kopii.</li>
          <li>Sprostowanie, usunięcie, ograniczenie przetwarzania.</li>
          <li>Przenoszenie danych oraz sprzeciw wobec przetwarzania – w granicach przepisów.</li>
          <li>Wycofanie zgody w dowolnym momencie (jeśli podstawą jest zgoda) – bez wpływu na zgodność z prawem wcześniejszego przetwarzania.</li>
        </ul>
        <p>
          Wnioski dotyczące praw prosimy kierować na adres:
          {' '}
          <a className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2" href="mailto:kontakt@mbit.pm">
            kontakt@mbit.pm
          </a>.
        </p>
      </section>

      <section aria-labelledby="retention">
        <h2 id="retention" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Okres przechowywania</h2>
        <p>
          Dane przechowujemy nie dłużej niż jest to konieczne do osiągnięcia celów wskazanych powyżej lub wymaganych przepisami prawa.
        </p>
      </section>

      <section aria-labelledby="security">
        <h2 id="security" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Bezpieczeństwo</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>HTTPS, dobre praktyki nagłówków bezpieczeństwa (CSP, HSTS), minimalizacja powierzchni ataku.</li>
          <li>Aktualizacje oprogramowania i bibliotek, kontrola błędów oraz monitoring.</li>
        </ul>
      </section>

      <section aria-labelledby="changes">
        <h2 id="changes" className="text-xl font-semibold text-slate-900 dark:text-slate-50">Zmiany w polityce</h2>
        <p>
          Zastrzegamy możliwość aktualizacji niniejszej polityki. Aktualna wersja jest zawsze dostępna na tej stronie.
        </p>
      </section>
    </PageContainer>
  )
}
