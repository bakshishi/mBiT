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
        { name: 'Grupy lokalne', href: 'https://meshtastic.org/pl-PL/docs/community/local-groups/', desc: 'Mapa społeczności i kanałów komunikacji.' },
        { name: 'Diver: Poradniki', href: 'https://diver.net.pl/meshtastic', desc: 'Czy Meshtastic jest fantastic?' }
      ]
    },
    {
      title: 'MeshCore',
      items: [
        { name: 'Portal PL', href: 'https://lorameshcore.pl', desc: 'Polskie materiały, aktualne presety EU/UK Narrow.' },
        { name: 'Diver: Poradniki', href: 'https://diver.net.pl/meshcore', desc: 'MeshCore czy Meshtastic?' }
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
      title: 'Łączność kryzysowa',
      items: [
        { name: 'Diver: Łączność kryzysowa', href: 'https://diver.net.pl/lacznosc-kryzysowa', desc: 'Łączność kryzysowa' },
        { name: 'Plan Awaryjny: Łączność kryzysowa', href: 'https://planawaryjny.com/lacznosc-awaryjna/', desc: 'Metody, za pomocą których można ze sobą rozmawiać, w przypadku awarii standardowych kanałów komunikacyjnych.' },
        { name: 'Standard łączności dla polskich prepperów', href: 'https://domowy-survival.pl/standard-lacznosci-dla-polskich-prepperow/', desc: 'Łączność z wykorzystaniem: aplikacji Zello, PMR, CB.' }
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
