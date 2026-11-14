/**
 * File: Header.tsx
 * Purpose: Sticky site header with accessible navigation and mobile menu.
 * Notes: Top bar shows only primary navigation (policy links removed as requested).
 */

import React from 'react'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

/**
 * Header
 * Renders the top navigation bar with brand logo, primary links, theme toggle and a mobile menu.
 */
export default function Header() {
  const [open, setOpen] = React.useState(false)

  /** Toggles the mobile menu open state */
  function toggle() {
    setOpen((o) => !o)
  }

  /** Primary navigation items shown in the top bar */
  const navItems: Array<{ to: string; label: string }> = [
    { to: '/', label: 'Start' },
    { to: '/meshtastic', label: 'Meshtastic' },
    { to: '/meshcore', label: 'MeshCore' },
    { to: '/reticulum', label: 'Reticulum' },
    { to: '/pmr446', label: 'PMR446' },
    { to: '/cb', label: 'CB Radio' },
    { to: '/plan', label: 'Plan Awaryjny' },
    { to: '/systems', label: 'Systemy' },
    { to: '/resources', label: 'Zasoby' },
    { to: '/tests', label: 'Testy' },
  ]

  const linkBase =
    'px-2 py-1.5 lg:px-2.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber'

  return (
    <header className="sticky top-0 z-40 bg-field-card/95 backdrop-blur border-b border-field-border print:hidden transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-2">
          <NavLink to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber rounded-md p-1">
            <Logo />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-field-text tracking-tight font-display">
                mBiT<span className="text-signal-amber">.pm</span>
              </span>
              <span className="text-[11px] font-mono text-field-muted hidden sm:inline">
                Mesh Bydgoszcz &amp; Toruń
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav aria-label="Główne" className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'bg-signal-amber text-slate-950 font-semibold shadow-sm'
                      : 'text-field-muted hover:text-field-text hover:bg-field-recessed'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Switcher: OLED Field Mode / Day Paper */}
            <ThemeToggle />

            {/* Mobile / Tablet menu button */}
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={toggle}
              className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-field-text border border-field-border bg-field-card hover:bg-field-recessed focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              <span className="sr-only">Otwórz/zamknij menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="xl:hidden border-t border-field-border bg-field-card shadow-lg"
      >
        <nav aria-label="Główne - mobilne" className="px-4 py-3 grid gap-1 sm:grid-cols-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block ${linkBase} ${
                  isActive
                    ? 'bg-signal-amber text-slate-950 font-semibold shadow-sm'
                    : 'text-field-muted hover:text-field-text hover:bg-field-recessed'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
