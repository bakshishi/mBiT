/**
 * File: PageContainer.tsx
 * Purpose: Reusable page wrapper providing consistent spacing, max-width, and accessible typography without relying on Tailwind Typography plugin.
 */

import React from 'react'

/**
 * PageContainerProps
 * Props for PageContainer component.
 */
interface PageContainerProps {
  /** Optional page title rendered as H1 */
  title?: string
  /** Optional introductory paragraph displayed under the title */
  intro?: React.ReactNode
  /** Main page content */
  children: React.ReactNode
}

/**
 * PageContainer
 * Provides a consistent layout and base typography for content pages (policies, info pages).
 */
export default function PageContainer({ title, intro, children }: PageContainerProps) {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      {title ? (
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h1>
      ) : null}
      {intro ? (
        <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">{intro}</p>
      ) : null}
      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </main>
  )
}
