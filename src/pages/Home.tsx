/**
 * File: Home.tsx
 * Purpose: Landing page with hero, clear entry points to key sections, and brand visuals.
 */

import React from 'react'
import { NavLink } from 'react-router'

/**
 * HomePage
 * Presents the brand hero and navigation cards for the primary topics.
 */
export default function HomePage() {
  const cards: Array<{
    to: string
    title: string
    desc: string
    img: string
  }> = [
    {
      to: '/meshtastic',
      title: 'Meshtastic',
      desc: 'Otwarto-źródłowa komunikacja LoRa mesh. Preset LONG_FAST i 10% duty cycle.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/1f0622f7-5ae9-45e7-863c-3211b3520aa2.jpg',
    },
    {
      to: '/meshcore',
      title: 'MeshCore',
      desc: 'Lekka alternatywa z direct path routing. Niskie zużycie energii.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/39922df6-5deb-44f7-8939-c42319448dd0.jpg',
    },
    {
      to: '/reticulum',
      title: 'Reticulum',
      desc: 'Zaawansowana, szyfrowana sieć. Suwerenna komunikacja i mostkowanie.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/c20c96b9-a38b-494f-99a2-c61a27249ad0.jpg',
    },
    {
      to: '/pmr446',
      title: 'PMR446',
      desc: 'Walkie-talkie UHF bez licencji. 16 kanałów, 500 mW ERP.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/695bed44-c57c-41e7-a3c7-9fdd4a8dcf6f.jpg',
    },
    {
      to: '/cb',
      title: 'CB Radio',
      desc: 'Pas 27 MHz. Komunikacja lokalna i DX w sprzyjających warunkach.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/cf8d076f-af85-45b8-9885-9a4d233c97df.jpg',
    },
    {
      to: '/plan',
      title: 'Plan Awaryjny',
      desc: 'Strategia multi-system: PMR, Meshtastic, CB, opcjonalnie radio amatorskie.',
      img: 'https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/0c5f4897-ca3d-4888-a354-564effb71ddb.jpg',
    },
  ]

  return (
    <div className="relative">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Mesh Bydgoszcz i Toruń
              </h1>
              <p className="mt-3 text-white/90 max-w-prose">
                Connectivity Without Limits — platforma o łączności awaryjnej:
                Meshtastic, MeshCore, Reticulum, PMR446 i CB. Skuteczna, zgodna z WCAG i RODO.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <NavLink
                  to="/meshtastic"
                  className="inline-flex items-center rounded-md bg-white text-slate-900 px-4 py-2 font-medium hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Zaczynam z Meshtastic
                </NavLink>
                <NavLink
                  to="/plan"
                  className="inline-flex items-center rounded-md bg-slate-900/20 text-white px-4 py-2 font-medium ring-1 ring-white/40 hover:bg-slate-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Plan Awaryjny
                </NavLink>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-white/20">
              <img
                src="https://pub-cdn.sider.ai/u/U0AWH6W56YJ/web-coder/6915d9a3b5ea6df6148be35e/resource/1887557f-dcd0-4078-9e91-e0fcde427a7c.jpg"
                alt=""
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <h2 className="text-xl font-semibold text-slate-900">Szybkie wejścia</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              className="group rounded-lg bg-white ring-1 ring-slate-200 hover:ring-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 overflow-hidden"
            >
              <div className="h-40">
                <img src={c.img} className="object-cover w-full h-full" alt="" />
              </div>
              <div className="p-4">
                <h3 className="text-slate-900 font-semibold">{c.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{c.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
