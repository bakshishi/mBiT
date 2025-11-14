/**
 * File: components/PageToc.tsx
 * Purpose: Local table-of-contents with smooth, offset-aware scrolling (HashRouter-safe).
 *          Does not modify location.hash to avoid interfering with react-router HashRouter.
 */

import React from 'react'

/**
 * TocItem
 * Describes a single entry in the local table of contents.
 */
export interface TocItem {
  /** Target element id to scroll to */
  id: string
  /** Visible label */
  label: string
}

/**
 * PageTocProps
 * Props for the PageToc component.
 */
interface PageTocProps {
  /** List of items to render in the ToC */
  items: TocItem[]
  /** Optional vertical offset in pixels to account for sticky headers. Default: 96 */
  offset?: number
  /** Optional title for assistive technologies (aria-label). Default: "Spis treści" */
  ariaLabel?: string
}

/**
 * getOffset
 * Returns the scroll offset. If not provided, uses a sensible default.
 */
function getOffset(custom?: number): number {
  // Default offset matches scroll-mt-24 (96px), aligned with Section component.
  // Can be tuned per-page by passing the offset prop.
  return typeof custom === 'number' ? custom : 96
}

/**
 * prefersReducedMotion
 * Checks OS-level preference to avoid motion.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * scrollToId
 * Scrolls the viewport to the element with the given id using an offset,
 * without changing the hash (HashRouter-safe).
 */
function scrollToId(id: string, offsetPx?: number) {
  const el = document.getElementById(id)
  if (!el) return

  const rect = el.getBoundingClientRect()
  const absoluteY = rect.top + window.scrollY
  const top = Math.max(absoluteY - getOffset(offsetPx), 0)

  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}

/**
 * PageToc
 * Renders a horizontal, accessible ToC. Clicking items performs offset-aware scroll
 * to prevent section titles from hiding under the sticky header. Hash is not modified.
 */
export default function PageToc({ items, offset, ariaLabel = 'Spis treści' }: PageTocProps) {
  // Handle click with keyboard/mouse consistently
  const onActivate = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement> | React.KeyboardEvent<HTMLAnchorElement>, id: string) => {
      // Prevent default anchor behavior so HashRouter path is not polluted by #id
      if ('preventDefault' in e) e.preventDefault()
      scrollToId(id, offset)
    },
    [offset]
  )

  return (
    <nav
      aria-label={ariaLabel}
      className="mb-6 rounded-lg border border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-2"
    >
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.id}>
            {/* Using <a> for semantics; preventDefault in handler keeps HashRouter safe */}
            <a
              href={`#${item.id}`}
              onClick={(e) => onActivate(e, item.id)}
              onKeyDown={(e) => {
                // Support Enter/Space activation for accessibility
                if (e.key === 'Enter' || e.key === ' ') {
                  onActivate(e, item.id)
                }
              }}
              className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
