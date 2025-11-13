/**
 * File: Home.tsx
 * Purpose: Visible, welcoming home page with brand hero, clear entrances to key sections.
 */

import React from 'react'
import { NavLink } from 'react-router'

/**
 * HomePage
 * Hero section + quick tiles linking to core content areas.
 */
export default function HomePage() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Mesh Bydgoszcz i Toruń
            </h1>
            <p className="mt-3 text-slate-700">
              Connectivity Without Limits — wiedza i praktyka o łączności awaryjnej: Meshtastic,
              MeshCore, Reticulum, PMR446 i CB. Sprawdzone ustawienia, dobre praktyki i plan awaryjny.
            </p>
            <div className="mt-6 flex gap-3">
              <NavLink
                to="/meshtastic"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-[#667eea] to-[#764ba2] px-4 py-2 text-white font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
              >
                Start z Meshtastic
              </NavLink>
              <NavLink
                to="/plan"
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-slate-900 font-medium border border-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                Plan awaryjny
              </NavLink>
            </div>
            <p className="mt-3 text-xs text-slate-600">
              EU: duty cycle LoRa 10%/h, rekomendowany preset: LONG_FAST (EU_868) i hop limit 3.
            </p>
          </div>
          <div className="relative">
            {/* Smart placeholder image */}
            <img
              src="https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/cb0342bb-e67b-4542-b85c-46e96ea33244.jpg"
              alt="Ilustracja sieci mesh nad miastem"
              className="w-full h-64 md:h-80 rounded-xl object-cover ring-1 ring-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Entrances */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Meshtastic',
            to: '/meshtastic',
            desc: 'EU_868, LONG_FAST, hop limit 3, 10% duty cycle.',
            img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/3235aa8b-de75-4ed9-b353-58fd1802819d.jpg'
          },
          {
            title: 'MeshCore',
            to: '/meshcore',
            desc: 'EU/UK Narrow: 869.618 MHz, BW 62.5 kHz, SF8.',
            img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/0beec8a5-84da-4d14-999c-2f76e70d62f2.jpg'
          },
          {
            title: 'Reticulum',
            to: '/reticulum',
            desc: 'Szyfrowane sieci suwerenne, LoRa 868 MHz.',
            img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/8c7526eb-6245-466a-a695-db9189e671cf.jpg'
          },
          {
            title: 'PMR446 i CB',
            to: '/systems',
            desc: 'Walkie-talkie UHF i pasmo 27 MHz.',
            img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/66a7d768-86a4-43fc-ab1d-92eee0b3a635.jpg'
          }
        ].map((c) => (
          <NavLink
            key={c.title}
            to={c.to}
            className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            aria-label={c.title}
          >
            <img src={c.img} className="object-cover w-full h-32" alt="" />
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 group-hover:underline">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  )
}
