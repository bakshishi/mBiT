/**
 * File: Privacy.tsx
 * Purpose: GDPR-compliant privacy policy page using consistent PageContainer styles.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

/**
 * PrivacyPage
 * Provides core GDPR statements, user rights, data scope and a single unified contact address.
 * Uses Section to ensure headings don't hide under the sticky header on hash navigation.
 */
export default function PrivacyPage() {
  return (
    <PageContainer
      title="Polityka Prywatności (RODO)"
      intro="Dbamy o prywatność użytkowników serwisu mBiT.pm. Zbieramy wyłącznie minimum danych niezbędnych do działania strony."
    >
      <Section id="admin" title="Administrator i kontakt">
        <p>
          Administratorem danych jest zespół mBiT.pm. Kontakt w każdej sprawie dotyczącej danych osobowych:
          <br />
          <a
            className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>
        </p>
      </Section>

      <Section id="basis" title="Zakres i podstawa przetwarzania">
        <ul className="list-disc pl-6 space-y-2">
          <li>Niezbędność do świadczenia usługi – obsługa serwisu, bezpieczeństwo, utrzymanie (art. 6 ust. 1 lit. b i f RODO).</li>
          <li>Zgoda użytkownika – wyłącznie dla funkcjonalności opcjonalnych, jeśli zostaną udostępnione (art. 6 ust. 1 lit. a RODO).</li>
          <li>Minimalizacja danych – nie prowadzimy profilowania ani nie zbieramy danych nadmiarowych.</li>
        </ul>
      </Section>

      <Section id="cookies" title="Pliki cookies i podobne technologie">
        <p>
          Serwis korzysta wyłącznie z plików cookies niezbędnych do jego działania (np. zapamiętanie decyzji o banerze cookies). Nie stosujemy śledzących cookies ani analityki naruszającej prywatność bez wyraźnej zgody.
        </p>
      </Section>

      <Section id="rights" title="Prawa użytkownika">
        <ul className="list-disc pl-6 space-y-2">
          <li>Dostęp do danych i uzyskanie kopii.</li>
          <li>Sprostowanie, usunięcie, ograniczenie przetwarzania.</li>
          <li>Przenoszenie danych oraz sprzeciw wobec przetwarzania – w granicach przepisów.</li>
          <li>Wycofanie zgody w dowolnym momencie (jeśli podstawą jest zgoda) – bez wpływu na zgodność z prawem wcześniejszego przetwarzania.</li>
        </ul>
        <p>
          Wnioski dotyczące praw prosimy kierować na adres:{' '}
          <a
            className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>.
        </p>
      </Section>

      <Section id="retention" title="Okres przechowywania">
        <p>
          Dane przechowujemy nie dłużej niż jest to konieczne do osiągnięcia celów wskazanych powyżej lub wymaganych przepisami prawa.
        </p>
      </Section>

      <Section id="security" title="Bezpieczeństwo">
        <ul className="list-disc pl-6 space-y-2">
          <li>HTTPS, dobre praktyki nagłówków bezpieczeństwa (CSP, HSTS), minimalizacja powierzchni ataku.</li>
          <li>Aktualizacje oprogramowania i bibliotek, kontrola błędów oraz monitoring.</li>
        </ul>
      </Section>

      <Section id="changes" title="Zmiany w polityce">
        <p>
          Zastrzegamy możliwość aktualizacji niniejszej polityki. Aktualna wersja jest zawsze dostępna na tej stronie.
        </p>
      </Section>
    </PageContainer>
  )
}
