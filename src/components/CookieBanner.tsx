/**
 * File: CookieBanner.tsx
 * Purpose: Minimal cookie consent banner compliant with GDPR (no tracking by default).
 */

import React from 'react'

/**
 * CookieBanner
 * Shows a consent notice stored in localStorage; no non-essential cookies are set.
 */
export default function CookieBanner() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const v = localStorage.getItem('cookie-consent')
    if (!v) setVisible(true)
  }, [])

  /** Accepts cookies and hides the banner (still no tracking enabled in this demo). */
  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }
  /** Rejects non-essential cookies and hides the banner. */
  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Zgoda na Cookies"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-50 bg-slate-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          Używamy wyłącznie niezbędnych cookies do działania strony. Możesz zaakceptować lub
          odrzucić cookies nieniezbędne. Szczegóły w{' '}
          <a className="underline" href="#/cookies">
            Polityce Cookies
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={reject}
            className="px-3 py-2 text-sm rounded bg-white text-slate-900 font-medium hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Odrzuć
          </button>
          <button
            onClick={accept}
            className="px-3 py-2 text-sm rounded bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  )
}
