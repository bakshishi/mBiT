/**
 * File: PageToc.tsx
 * Purpose: Shared textual Table of Contents with unified link styling and accessible navigation.
 */

import React from 'react'

/**
 * TocItem
 * Single ToC entry descriptor.
 */
export interface TocItem {
  /** Section element id */
  id: string
  /** Human-readable label */
  label: string
}

/**
 * PageTocProps
 * Props for PageToc.
 */
export interface PageTocProps {
  /** Items to render in the ToC */
  items: TocItem[]
}

/**
 * scrollTo
 * Smoothly scrolls to a section and updates the URL hash.
 */
function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Update hash without page jump
    history.replaceState(null, '', `#${id}`)
  }
}

/**
 * PageToc
 * Accessible textual ToC using consistent link visuals across pages.
 */
export default function PageToc({ items }: PageTocProps) {
  return (
    <nav aria-label="Spis treści" className="mb-8">
      <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 list-disc pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.id)
              }}
              className="text-indigo-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
