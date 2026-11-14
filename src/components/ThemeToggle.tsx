/**
 * File: ThemeToggle.tsx
 * Purpose: Accessible theme switcher between Field Paper (Light) and Field OLED (Dark).
 *          Stores user preference in localStorage and toggles the .dark class on <html>.
 */

import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('mbit_theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('mbit_theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('mbit_theme', 'light')
    }
  }, [isDark])

  function toggle() {
    setIsDark((prev) => !prev)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Przełącz na tryb dzienny' : 'Przełącz na tryb nocny (OLED)'}
      title={isDark ? 'Tryb Nocny aktywny (kliknij aby włączyć Dzienny)' : 'Tryb Dzienny aktywny (kliknij aby włączyć Nocny OLED)'}
      className="inline-flex items-center gap-1.5 rounded-md border border-field-border bg-field-card px-2.5 py-1.5 text-xs font-mono font-medium text-field-muted hover:text-signal-amber hover:border-signal-amber/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber transition-colors"
    >
      {isDark ? (
        <>
          <Moon size={14} className="text-signal-amber" aria-hidden="true" />
          <span className="hidden sm:inline">OLED</span>
        </>
      ) : (
        <>
          <Sun size={14} className="text-signal-amber" aria-hidden="true" />
          <span className="hidden sm:inline">Dzień</span>
        </>
      )}
    </button>
  )
}
