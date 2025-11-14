/**
 * File: PageToc.tsx
 * Purpose: Shared textual Table of Contents with unified link styling and accessible navigation.
 * Notes: In HashRouter environments, we avoid updating the URL hash (default). Optionally allow updating hash.
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
  /**
   * If true, also updates the URL hash to #id. Default false (recommended with HashRouter).
   * Warning: With HashRouter, changing hash can break the route (#/route -> #id), so keep false.
   */
  updateHash?: boolean
}

/**
 * scrollTo
 * Smoothly scrolls to a section; optionally updates the URL hash.
 */
function scrollTo(id: string, updateHash: boolean) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (updateHash) {
      // Attempt to update hash safely (not recommended with HashRouter).
      const url = new URL(window.location.href)
      url.hash = id
      history.replaceState(null, '', url.toString())
    }
  }
}

/**
 * PageToc
 * Accessible textual ToC using consistent link visuals across pages.
 */
export default function PageToc({ items, updateHash = false }: PageTocProps) {
  return (
    <nav aria-label="Spis treści" className="mb-8">
      <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 list-disc pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollTo(item.id, updateHash)
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
