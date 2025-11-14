/**
 * File: RouteChangeScroll.tsx
 * Purpose: Reset window scroll position (and focus main content) on route changes,
 *          without causing secondary scroll jumps that hide the page title under the sticky header.
 * Notes:
 * - Uses behavior: 'auto' to avoid animation jitter.
 * - Focus uses preventScroll to avoid implicit scroll-on-focus.
 */

import React from 'react'
import { useLocation } from 'react-router'

/**
 * RouteChangeScroll
 * On path change: instantly scrolls to top and focuses #main-content for a11y,
 * without triggering extra scroll adjustments.
 */
export default function RouteChangeScroll() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    // Instantly jump to the very top to avoid "almost top" jitter on route change
    window.scrollTo({ top: 0, behavior: 'auto' })

    // Move keyboard focus to main content for accessibility, but don't scroll again
    const main = document.getElementById('main-content') as HTMLElement | null
    if (main) {
      try {
        // preventScroll avoids the browser aligning the focused element into view,
        // which previously pushed the title under the sticky header.
        main.focus({ preventScroll: true })
      } catch {
        // Older browsers fallback
        main.focus()
      }
    }
  }, [pathname])

  return null
}
