/**
 * File: Home.tsx
 * Purpose: Home page with hero section, brand messaging, and entry cards to key sections.
 */

import React from 'react'
import { NavLink } from 'react-router'
import { ArrowRight, ExternalLink } from 'lucide-react'

/**
 * HomePage
 * Landing page presenting the mission, key calls-to-action, and quick navigation.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white"
        aria-label="Wprowadzenie"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Mesh Bydgoszcz i Toruń — mBiT.pm
              </h1>
              <p className="mt-4 text-white/90">
                Platforma wiedzy o łączności awaryjnej: Meshtastic, MeshCore, Reticulum, PMR446 i CB.
                Profesjonalnie, dostępnie, zgodnie z WCAG 2.1 AA i RODO.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <NavLink
                  to="/meshtastic"
                  className="inline-flex items-center gap-2 rounded bg-white text-slate-900 px-4 py-2 font-medium hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Zacznij od Meshtastic
                  <ArrowRight size={16} aria-hidden="true" />
                </NavLink>
                <a
                  href="https://t.me/meshtasticbdg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-white/60 px-4 py-2 font-medium hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Dołącz do Telegram (Bydgoszcz)
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="mt-4 text-sm text-white/90">
                Kluczowe: Bydgoszcz używa presetu <span className="font-semibold">LONG_FAST</span>.
                W EU obowiązuje <span className="font-semibold">duty cycle 10%</span> — maksymalnie 6 minut transmisji/godz.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden ring-1 ring-white/20">
              <img
                src="graph/generated_image.png"
                alt="Siatka łączności meshBiT"
                className="h-full w-full object-cover aspect-video"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Entrances */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12" aria-label="Wejścia do sekcji">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { to: '/meshtastic', title: 'Meshtastic', desc: 'Konfiguracja EU/PL (EU_868, LONG_FAST), presety, netykieta.' },
            { to: '/meshcore', title: 'MeshCore', desc: 'Lekka alternatywa. EU/UK Narrow preset.' },
            { to: '/reticulum', title: 'Reticulum', desc: 'Szyfrowana sieć, RNode, prywatność i bezpieczeństwo.' },
            { to: '/pmr446', title: 'PMR446', desc: 'Bezlicencyjne UHF, kanały CEPT, dobre praktyki.' },
            { to: '/cb', title: 'CB Radio', desc: 'Pas 27 MHz, kanały, propagacja i zasady.' },
            { to: '/plan', title: 'Plan Awaryjny', desc: 'Koncepcja wielosystemowa, procedury i sprzęt.' },
          ].map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              className="group block rounded-lg bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#667eea]"
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-[#667eea]">
                  Przejdź
                  <ArrowRight size={14} aria-hidden="true" className="transition -translate-x-0 group-hover:translate-x-0.5" />
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8" aria-label="Najważniejsze informacje">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">Rekordowy zasięg Meshtastic</h3>
            <p className="text-2xl font-bold mt-2 text-slate-900">331 km</p>
            <p className="text-sm text-slate-700 mt-1">Warunki LOS, zgodnie z dokumentacją i społecznością.</p>
          </div>
          <div className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">Test łączności</h3>
            <p className="text-sm text-slate-700 mt-2">
              Każdego 3. dnia miesiąca oraz w ostatnią sobotę o 20:00.
              Więcej:{' '}
              <a className="text-[#667eea] underline" target="_blank" rel="noopener noreferrer" href="https://planawaryjny.com/lacznosc-awaryjna/">
                planawaryjny.com
              </a>
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">EU: Duty Cycle</h3>
            <p className="text-sm text-slate-700 mt-2">
              Limit 10% na godzinę (rolling), maks. 6 minut transmisji/godzinę. Przestrzegaj regulacji.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
