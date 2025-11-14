/**
 * File: components/ScrollToTopButton.tsx
 * Purpose: Reusable floating action button to smoothly scroll the viewport back to the top.
 * Notes: Shows after a configurable scroll threshold. Accessible and keyboard-friendly.
 */

import React from 'react'
import { ArrowUp } from 'lucide-react'

/** Props for ScrollToTopButton */
interface ScrollToTopButtonProps {
  /** Vertical scroll threshold (in px) after which the button becomes visible. Default: 300 */
  threshold?: number
}

/**
 * ScrollToTopButton
 * Displays a fixed-position button that appears after scrolling down,
 * and scrolls smoothly to the top when activated.
 */
export default function ScrollToTopButton({ threshold = 300 }: ScrollToTopButtonProps) {
  const [visible, setVisible] = React.useState(false)

  // Track scroll position and toggle visibility
  React.useEffect(() => {
    const onScroll = () => {
      // Using window.scrollY to detect current vertical offset
      setVisible(window.scrollY > threshold)
    }
    // Initialize state on mount
    onScroll()
    // Passive listener for performance
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  /**
   * handleClick
   * Scrolls the viewport to the top. Respects prefers-reduced-motion for accessibility.
   */
  function handleClick() {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Przewiń do góry"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg transition hover:from-indigo-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
