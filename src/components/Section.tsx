/**
 * File: Section.tsx
 * Purpose: Shared content section wrapper that renders unified h2 styling and spacing.
 */

import React from 'react'

/**
 * SectionProps
 * Props for Section wrapper.
 */
export interface SectionProps {
  /** Section id for in-page navigation */
  id: string
  /** Section title displayed as h2 */
  title: string
  /** Section content */
  children: React.ReactNode
  /** Optional className to extend container */
  className?: string
}

/**
 * Section
 * Provides consistent section spacing and h2 typography.
 */
export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className={className ? className : ''}>
      <h2 id={`${id}-label`} className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-2 text-sm text-slate-700">{children}</div>
    </section>
  )
}
