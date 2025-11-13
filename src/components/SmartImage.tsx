/**
 * File: SmartImage.tsx
 * Purpose: Resilient image component that falls back to a lightweight placeholder when the primary src is unavailable.
 * Notes: On GitHub Pages (repo site), absolute paths like "/images/..." break due to base path.
 *        This component sanitizes leading slashes to keep image URLs relative to the current site root.
 */

import React from 'react'

/**
 * SmartImage
 * Renders an image with graceful fallback to sider.ai/autoimage using a short English keyword.
 * Also normalizes local paths by stripping a leading slash ("/images/foo.webp" -> "images/foo.webp").
 */
export default function SmartImage(props: {
  src?: string
  alt: string
  className?: string
  fallbackKeyword: string
}) {
  const { src, alt, className, fallbackKeyword } = props
  const fallback = `https://sider.ai/autoimage/${encodeURIComponent(fallbackKeyword)}`

  /**
   * Normalize provided src:
   * - Keep absolute URLs (http/https) as-is.
   * - If local and starts with "/", strip it to make the path relative (GitHub Pages friendly).
   */
  const normalizeSrc = React.useCallback((maybeSrc?: string) => {
    if (!maybeSrc) return undefined
    const isAbsoluteHttp = /^https?:\/\//i.test(maybeSrc)
    if (isAbsoluteHttp) return maybeSrc
    if (maybeSrc.startsWith('/')) return maybeSrc.slice(1)
    return maybeSrc
  }, [])

  const [currentSrc, setCurrentSrc] = React.useState(() => normalizeSrc(src) || fallback)

  /** Update currentSrc whenever the incoming src changes. */
  React.useEffect(() => {
    setCurrentSrc(normalizeSrc(src) || fallback)
  }, [src, fallback, normalizeSrc])

  /** Handle image load errors by switching to a placeholder URL. */
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
