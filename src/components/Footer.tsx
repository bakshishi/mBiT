/**
 * File: Footer.tsx
 * Purpose: Site footer with quick links, social/community references, and legal links.
 */

import React from 'react'
import { NavLink } from 'react-router'
import { ExternalLink } from 'lucide-react'

/**
 * Footer
 * Renders footer with quick navigation and contact information.
 */
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        <section aria-labelledby="quick-links">
          <h2 id="quick-links" className="text-sm font-semibold text-slate-900">
            Szybkie linki
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/meshtastic">
                Meshtastic
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/meshcore">
                MeshCore
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/reticulum">
                Reticulum
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/plan">
                Plan Awaryjny
              </NavLink>
            </li>
          </ul>
        </section>

        <section aria-labelledby="communities">
          <h2 id="communities" className="text-sm font-semibold text-slate-900">
            Społeczności (niezależne od mBiT.pm)
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                className="inline-flex items-center gap-1 text-slate-700 hover:underline"
                href="https://t.me/meshtasticbdg"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Telegram Bydgoszcz"
              >
                Telegram: Bydgoszcz
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1 text-slate-700 hover:underline"
                href="https://meshtastic.org/pl-PL/docs/community/local-groups/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Lista grup Meshtastic"
              >
                Lista grup Meshtastic
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="legal">
          <h2 id="legal" className="text-sm font-semibold text-slate-900">
            Prawne i kontakt
          </h2>
          <ul className="mt-3 space-y-2">
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/privacy">
                Polityka Prywatności (RODO)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/cookies">
                Polityka Cookies
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/accessibility">
                Deklaracja Dostępności (WCAG 2.1 AA)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-slate-700 hover:underline" to="/eaa">
                EU Accessibility Act
              </NavLink>
            </li>
            <li className="text-slate-700">
              Kontakt: <a className="hover:underline" href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} mBiT.pm — Mesh Bydgoszcz i Toruń
      </div>
    </footer>
  )
}
