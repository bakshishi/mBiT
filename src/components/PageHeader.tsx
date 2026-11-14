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
    <header className="mb-6 border-b border-field-border pb-4">
      <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-field-text">{title}</h1>
      {subtitle ? <p className="text-field-muted mt-1 text-sm sm:text-base">{subtitle}</p> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </header>
  )
}
