/**
 * File: components/Section.tsx
 * Purpose: Reusable content section with consistent spacing, heading and anchor-friendly offset
 *          so that sticky header does not overlap section titles when navigating to #hash.
 */

import React from 'react'

/**
 * SectionProps
 * Defines props for the Section component.
 */
export interface SectionProps {
  /** Optional DOM id used for anchor navigation (#id) */
  id?: string
  /** Optional section title rendered as an h2 */
  title?: string
  /** Optional subtitle or description under the title */
  subtitle?: React.ReactNode
  /** Optional custom classes to extend layout */
  className?: string
  /** Section content */
  children: React.ReactNode
}

/**
 * Section
 * Provides a semantic <section> with optional heading and subtitle.
 * Adds scroll-margin-top to prevent sticky header from covering the title on hash navigation.
 */
export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  // Create an accessible heading id derived from section id when possible,
  // otherwise use a stable React-generated id.
  const reactId = React.useId()
  const headingId = id ? `${id}-title` : `section-${reactId}-title`

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-28 ${className ?? ''}`}
    >
      {title ? (
        <header className="mb-3">
          <h2
            id={headingId}
            className="text-xl font-semibold text-slate-900 dark:text-slate-50"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-slate-700 dark:text-slate-300">{subtitle}</p>
          ) : null}
        </header>
      ) : null}
      <div className="grid gap-3">{children}</div>
    </section>
  )
}
