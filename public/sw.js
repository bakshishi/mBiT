/**
 * File: public/sw.js
 * Purpose: Offline-first service worker for mBiT.pm (static SPA on GitHub Pages).
 * Notes:
 * - Relative URLs keep the worker working both at the domain root and under /mBiT/.
 * - Bump CACHE_VERSION on each release so old shells are replaced.
 * - Registration happens only in production builds (see src/main.tsx).
 */

const CACHE_PREFIX = 'mbit-'
const CACHE_VERSION = 'v1'
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`

/** App shell and field assets precached during installation */
const PRECACHE = [
  './',
  './index.html',
  './main.css',
  './main.js',
  './favicon.svg',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/hero-mesh.webp',
  './images/meshtastic.webp',
  './images/meshcore.webp',
  './images/reticulum.webp',
  './images/pmr.webp',
  './images/cb.webp',
  './images/systems.webp',
  './images/plan.webp',
  './images/resources.webp',
  './images/tests.webp',
]

/** Install: cache the shell, then activate immediately */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  )
})

/** Activate: drop old cache versions and take control of open pages */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

/** Navigation: network first, cached shell when offline */
async function networkFirst(request) {
  try {
    const response = await fetch(request)
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put('./index.html', response.clone())
    }
    return response
  } catch {
    const cache = await caches.open(CACHE_NAME)
    return (
      (await cache.match(request, { ignoreSearch: true })) ||
      (await cache.match('./index.html')) ||
      (await cache.match('./')) ||
      new Response('<h1>Offline</h1><p>Brak połączenia i brak kopii w pamięci podręcznej.</p>', {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      })
    )
  }
}

/** Static assets: serve cache immediately, refresh it in the background */
function staleWhileRevalidate(request, event) {
  return caches.open(CACHE_NAME).then((cache) =>
    cache.match(request, { ignoreSearch: true }).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok && response.type === 'basic') {
            cache.put(request, response.clone())
          }
          return response
        })
        .catch(() => cached || new Response('', { status: 504 }))

      if (cached) {
        event.waitUntil(network)
        return cached
      }
      return network
    })
  )
}

/** Fetch: same-origin GET only; everything else goes straight to the network */
self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request))
    return
  }

  event.respondWith(staleWhileRevalidate(request, event))
})
