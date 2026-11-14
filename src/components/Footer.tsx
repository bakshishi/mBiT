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
    <footer className="mt-16 border-t border-field-border bg-field-card text-field-text print:hidden transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        <section aria-labelledby="quick-links">
          <h2 id="quick-links" className="text-xs font-bold uppercase tracking-wider text-signal-amber font-mono">
            Szybka nawigacja
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/meshtastic">
                Meshtastic EU_868
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/meshcore">
                MeshCore (2-byte hash)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/reticulum">
                Reticulum Network
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/pmr446">
                PMR446 (Tabela 16 kanałów)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/cb">
                CB Radio (K-19 / K-28)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/plan">
                Plan Awaryjny (Tier 1–3)
              </NavLink>
            </li>
          </ul>
        </section>

        <section aria-labelledby="communities">
          <h2 id="communities" className="text-xs font-bold uppercase tracking-wider text-signal-amber font-mono">
            Społeczności i Mapy
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-field-muted hover:text-signal-amber transition-colors"
                href="https://meshmap.net/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Mapa węzłów Meshtastic MeshMap"
              >
                <span>MeshMap.net — Mapa węzłów na żywo</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-field-muted hover:text-signal-amber transition-colors"
                href="https://t.me/meshtasticbdg"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Grupa Telegram Bydgoszcz"
              >
                <span>Telegram: Meshtastic Bydgoszcz</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-field-muted hover:text-signal-amber transition-colors"
                href="https://meshtastic.org/pl-PL/docs/community/local-groups/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Oficjalna lista grup lokalnych"
              >
                <span>Meshtastic Polska — grupy lokalne</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="legal">
          <h2 id="legal" className="text-xs font-bold uppercase tracking-wider text-signal-amber font-mono">
            Prawne i kontakt
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/privacy">
                Polityka Prywatności (RODO)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/cookies">
                Polityka Cookies (brak śledzenia)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/accessibility">
                Deklaracja Dostępności (WCAG 2.1 AA)
              </NavLink>
            </li>
            <li>
              <NavLink className="text-field-muted hover:text-signal-amber transition-colors" to="/eaa">
                European Accessibility Act (EAA)
              </NavLink>
            </li>
            <li className="text-field-muted text-xs pt-1">
              Kontakt operacyjny: <a className="text-field-text hover:text-signal-amber underline font-mono" href="mailto:kontakt@mbit.pm">kontakt@mbit.pm</a>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t border-field-border py-4 text-center text-xs font-mono text-field-faint">
        © {new Date().getFullYear()} mBiT.pm — Tactical RF &amp; Mesh Bydgoszcz / Toruń · Otwarta łączność kryzysowa
      </div>
    </footer>
  )
}
