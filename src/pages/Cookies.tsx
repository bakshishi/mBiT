/**
 * File: Cookies.tsx
 * Purpose: Cookie policy page aligned with GDPR, using PageContainer for consistent styling.
 */

import React from 'react'
import PageContainer from '../components/PageContainer'
import Section from '../components/Section'

/**
 * CookiesPage
 * Describes cookie types used and choices available to users (strictly necessary only).
 * Uses Section to ensure proper scroll offset under sticky header.
 */
export default function CookiesPage() {
  return (
    <PageContainer
      title="Polityka Cookies"
      intro="Serwis mBiT.pm nie ustawia plików cookies. Zapamiętanie Twojego wyboru w banerze odbywa się w pamięci przeglądarki (localStorage)."
    >
      <Section id="what" title="Jakie cookies wykorzystujemy?">
        <ul className="list-disc pl-6 space-y-2">
          <li>Zapisujemy wyłącznie jeden wpis w localStorage przeglądarki („cookie-consent”) z Twoim wyborem w banerze. Nie jest on wysyłany na serwer.</li>
          <li>Nie używamy analityki, śledzących ani marketingowych cookies. Wybór „Akceptuj”/„Odrzuć” nie zmienia działania serwisu.</li>
        </ul>
      </Section>

      <Section id="control" title="Jak kontrolować cookies?">
        <ul className="list-disc pl-6 space-y-2">
          <li>W każdej chwili możesz usunąć dane strony w ustawieniach przeglądarki.</li>
          <li>Usunięcie danych strony (localStorage) spowoduje ponowne wyświetlenie banera.</li>
        </ul>
      </Section>

      <Section id="contact" title="Kontakt">
        <p>
          Pytania dotyczące cookies i prywatności:{' '}
          <a
            className="text-indigo-700 dark:text-indigo-300 underline underline-offset-2"
            href="mailto:kontakt@mbit.pm"
          >
            kontakt@mbit.pm
          </a>
        </p>
      </Section>
    </PageContainer>
  )
}
