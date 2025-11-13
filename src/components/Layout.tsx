/**
 * File: Layout.tsx
 * Purpose: App shell layout with SkipLink, Header, Footer, main Outlet and CookieBanner.
 */

import React from 'react'
import { Outlet } from 'react-router'
import SkipLink from './SkipLink'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

/**
 * Layout
 * Provides consistent page structure and accessibility primitives across routes.
 */
export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-slate-50 text-slate-900">
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
