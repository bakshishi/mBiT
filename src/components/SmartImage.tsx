/**
 * File: SmartImage.tsx
 * Purpose: Resilient image component that falls back to a lightweight local placeholder when the primary src is unavailable.
 * Notes: On GitHub Pages (repo site), absolute paths like "/images/..." break due to base path.
 *        This component sanitizes leading slashes to keep image URLs relative to the current site root.
 *        The fallback is an inline SVG (data URI) — no third-party requests are made.
 */

import React from 'react'

/** Local placeholder (brand gradient + mesh waves) used when an image cannot be loaded. */
const PLACEHOLDER_SRC =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#667eea"/><stop offset="1" stop-color="#764ba2"/>' +
      '</linearGradient></defs>' +
      '<rect width="640" height="360" fill="url(#g)" opacity="0.18"/>' +
      '<g fill="none" stroke="#667eea" stroke-width="3" stroke-linecap="round" opacity="0.6">' +
      '<path d="M250 150c24 0 40 16 70 16s46-16 70-16"/>' +
      '<path d="M250 190c24 0 40 16 70 16s46-16 70-16"/>' +
      '</g><circle cx="320" cy="236" r="9" fill="#667eea" opacity="0.7"/></svg>'
  )

/**
 * SmartImage
 * Renders an image with graceful fallback to a local SVG placeholder.
 * Also normalizes local paths by stripping a leading slash ("/images/foo.webp" -> "images/foo.webp").
 * `fallbackKeyword` is kept for backward compatibility and is ignored.
 */
export default function SmartImage(props: {
  src?: string
  alt: string
  className?: string
  fallbackKeyword?: string
}) {
  const { src, alt, className } = props
  const fallback = PLACEHOLDER_SRC

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

  /** Handle image load errors by switching to the local placeholder. */
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
