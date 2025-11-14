/**
 * File: PageHeader.tsx
 * Purpose: Shared page header with unified typography and optional subtitle for consistency across pages.
 */

import React from 'react'

/**
 * PageHeaderProps
 * Props for PageHeader component.
 */
export interface PageHeaderProps {
  /** Main page title (h1) */
  title: string
  /** Optional subtitle placed below the title */
  subtitle?: string
  /** Optional children (e.g., badges) rendered under the subtitle */
  children?: React.ReactNode
}

/**
 * PageHeader
 * Renders consistent h1 and optional subtitle used on content pages.
 */
export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      {subtitle ? <p className="text-slate-700 mt-1">{subtitle}</p> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </header>
  )
}
