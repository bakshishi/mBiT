/**
 * File: SmartImage.tsx
 * Purpose: Resilient image component that falls back to a lightweight placeholder when the primary src is unavailable.
 */

import React from 'react'

/**
 * SmartImage
 * Renders an image with graceful fallback to sider.ai/autoimage using a short English keyword.
 */
export default function SmartImage(props: {
  src?: string
  alt: string
  className?: string
  fallbackKeyword: string
}) {
  const { src, alt, className, fallbackKeyword } = props
  const fallback = `https://sider.ai/autoimage/${encodeURIComponent(fallbackKeyword)}`
  const [currentSrc, setCurrentSrc] = React.useState(src || fallback)

  /**
   * Update currentSrc whenever the incoming src changes.
   */
  React.useEffect(() => {
    setCurrentSrc(src || fallback)
  }, [src, fallback])

  /**
   * Handle image load errors by switching to a placeholder URL.
   */
  const handleError = React.useCallback(() => {
    if (currentSrc !== fallback) {
      setCurrentSrc(fallback)
    }
  }, [currentSrc, fallback])

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}
