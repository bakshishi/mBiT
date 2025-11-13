/**
 * File: Resources.tsx
 * Purpose: Curated catalog of online resources for Meshtastic, MeshCore, Reticulum, PMR/CB, and compliance.
 */

import React from 'react'
import { ExternalLink } from 'lucide-react'

/**
 * Resource item shape for typed mapping.
 */
interface ResourceItem {
  name: string
  href: string
  desc: string
}

/**
 * ResourcesPage
 * Presents categorized link cards with concise descriptions and external-link affordance.
 */
export default function ResourcesPage() {
  const groups: Array<{ title: string; items: ResourceItem[] }> = [
    {
      title: 'Meshtastic',
      items: [
        { name: 'Oficjalna dokumentacja', href: 'https://meshtastic.org/docs/introduction/', desc: 'Przewodnik startowy, konfiguracja, presety.' },
        { name: 'Blog: LongFast vs MediumFast', href: 'https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/', desc: 'Analiza wydajności i rekomendacje.' },
        { name: 'Grupy lokalne', href: 'https://meshtastic.org/pl-PL/docs/community/local-groups/', desc: 'Mapa społeczności i kanałów komunikacji.' }
      ]
    },
    {
      title: 'MeshCore',
      items: [
        { name: 'Portal PL', href: 'https://lorameshcore.pl', desc: 'Polskie materiały, aktualne presety EU/UK Narrow.' },
        { name: 'Diver: przewodniki', href: 'https://diver.net.pl/meshcore', desc: 'Instrukcje i dobre praktyki wdrożeń.' }
      ]
    },
    {
      title: 'Reticulum',
      items: [
        { name: 'reticulum.network', href: 'https://reticulum.network', desc: 'Oficjalna strona i manual.' },
        { name: 'RNode — unsigned.io', href: 'https://unsigned.io/rnode/', desc: 'Sprzęt referencyjny i dokumentacja.' }
      ]
    },
    {
      title: 'PMR446 i CB',
      items: [
        { name: '446mhz.pl', href: 'https://446mhz.pl', desc: 'Mapa i społeczność PMR w Polsce.' },
        { name: 'Midland Europe — PMR', href: 'https://midlandeurope.com', desc: 'Regulacje i sprzęt PMR.' },
        { name: 'CB Forum', href: 'https://cb-forum.pl', desc: 'Dyskusje i porady praktyczne.' }
      ]
    },
    {
      title: 'Dostępność i RODO',
      items: [
        { name: 'European Accessibility Act', href: 'https://digital-strategy.ec.europa.eu/en/policies/european-accessibility-act', desc: 'Wymogi EAA i EN 301 549.' },
        { name: 'W3C WCAG 2.1', href: 'https://www.w3.org/TR/WCAG21/', desc: 'Kryteria sukcesu poziomu AA.' },
        { name: 'RODO/GDPR', href: 'https://gdpr.eu', desc: 'Prawa użytkowników i obowiązki administratora.' }
      ]
    },
    {
      title: 'Lokalne społeczności',
      items: [
        { name: 'Meshtastic Bydgoszcz (Telegram)', href: 'https://t.me/meshtasticbdg', desc: 'Kanał społeczności lokalnej.' },
        { name: 'SR3WLK — Winlink', href: 'https://sr3wlk.pl', desc: 'Polski portal Winlink i zasoby.' }
      ]
    }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Zasoby internetowe</h1>
        <p className="text-slate-700 mt-1">
          Zbiór sprawdzonych linków: dokumentacja, przewodniki, społeczności i zgodność (WCAG/RODO/EAA).
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} aria-labelledby={group.title}>
            <h2 id={group.title} className="text-lg font-semibold text-slate-900">{group.title}</h2>
            <ul className="mt-3 space-y-3">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
                    aria-label={`${item.name} — otwórz w nowej karcie`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 text-[#667eea]">
                        <ExternalLink size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-medium text-slate-900 group-hover:underline">{item.name}</h3>
                        <p className="text-sm text-slate-700 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
