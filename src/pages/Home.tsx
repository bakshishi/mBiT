/**
 * File: Home.tsx
 * Purpose: Home page with brand hero and a full set of section tiles (Meshtastic, MeshCore, Reticulum, PMR446, CB, Plan, Systemy, Zasoby).
 * Images use SmartImage with relative paths ("images/...") to work on GitHub Pages. To chyba nie działa.
 */

import React from 'react'
import { NavLink } from 'react-router'
import SmartImage from '../components/SmartImage'

/**
 * HomePage
 * Hero section + grid of navigational cards linking to key content areas.
 */
export default function HomePage() {
  /** Cards displayed on the homepage. Place your files in public/images (e.g. meshtastic.webp). */
  const cards = [
    { title: 'Meshtastic', to: '/meshtastic', desc: 'EU_868 · LONG_FAST · hop 3 · 10% duty.', img: 'images/meshtastic.webp', kw: 'lora mesh radio' },
    { title: 'MeshCore', to: '/meshcore', desc: 'EU/UK Narrow · 869.618 MHz · BW 62.5 kHz.', img: 'images/meshcore.webp', kw: 'lora narrowband' },
    { title: 'Reticulum', to: '/reticulum', desc: 'Suwerenne, szyfrowane sieci LoRa.', img: 'images/reticulum.webp', kw: 'encryption network' },
    { title: 'PMR446', to: '/pmr446', desc: 'Walkie-talkie UHF bez licencji.', img: 'images/pmr.webp', kw: 'uhf handheld radio' },
    { title: 'CB', to: '/cb', desc: 'Pasmo 27 MHz — łączność mobilna.', img: 'images/cb.webp', kw: 'cb radio' },
    { title: 'Plan', to: '/plan', desc: 'Koncepcja wielosystemowa i procedury.', img: 'images/plan.webp', kw: 'emergency plan' },
    { title: 'Systemy', to: '/systems', desc: 'Dodatkowe systemy i checklist.', img: 'images/systems.webp', kw: 'systems overview' },
    { title: 'Zasoby', to: '/resources', desc: 'Przewodniki, fora, mapy i społeczności.', img: 'images/resources.webp', kw: 'links library' }
  ]

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
            <SmartImage
              src="images/hero-mesh.webp"
              alt="Ilustracja sieci mesh nad miastem"
              className="w-full h-64 md:h-80 rounded-xl object-cover ring-1 ring-slate-200"
              fallbackKeyword="mesh network city"
            />
          </div>
        </div>
      </section>

      {/* Entrances */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((c) => (
            <NavLink
              key={c.title}
              to={c.to}
              className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
              aria-label={c.title}
            >
              <SmartImage
                src={c.img}
                alt={c.title}
                className="object-cover w-full h-32"
                fallbackKeyword={c.kw}
              />
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 group-hover:underline">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}
