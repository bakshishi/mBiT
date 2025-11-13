/**
 * File: Header.tsx
 * Purpose: Sticky site header with accessible navigation and mobile menu.
 */

import React from 'react'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

/**
 * Header
 * Renders the top navigation bar with brand logo, primary links, and a mobile menu toggle.
 */
export default function Header() {
  const [open, setOpen] = React.useState(false)

  /** Toggles the mobile menu open state */
  function toggle() {
    setOpen((o) => !o)
  }

  const navItems: Array<{ to: string; label: string }> = [
    { to: '/', label: 'Start' },
    { to: '/meshtastic', label: 'Meshtastic' },
    { to: '/meshcore', label: 'MeshCore' },
    { to: '/reticulum', label: 'Reticulum' },
    { to: '/pmr446', label: 'PMR446' },
    { to: '/cb', label: 'CB Radio' },
    { to: '/plan', label: 'Plan Awaryjny' },
    { to: '/systems', label: 'Systemy' },
  ]

/** 
 * const policyItems: Array<{ to: string; label: string }> = [
 *    { to: '/accessibility', label: 'Dostępność' },
 *    { to: '/eaa', label: 'EU Accessibility Act' },
 *   { to: '/privacy', label: 'Prywatność' },
 *  { to: '/cookies', label: 'Cookies' },
 *  ]
 **/

  const linkBase =
    'px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80 focus-visible:ring-offset-transparent'

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">
                Mesh Bydgoszcz i Toruń
              </span>
              <span className="text-xs text-slate-600">
                Connectivity Without Limits
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav aria-label="Główne" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#667eea] to-[#764ba2]'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="h-6 w-px bg-slate-300 mx-2" aria-hidden="true" />
            {policyItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? 'text-white bg-slate-900'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={toggle}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">Otwórz/zamknij menu</span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-slate-200 bg-white"
      >
        <nav aria-label="Główne - mobilne" className="px-4 py-3 grid gap-1">
          {[...navItems, ...policyItems].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block ${linkBase} ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#667eea] to-[#764ba2]'
                    : 'text-slate-800 hover:bg-slate-100'
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
