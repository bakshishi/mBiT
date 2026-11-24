import { createRoot } from 'react-dom/client'
import './shadcn.css'
import App from './App'

const root = createRoot(document.getElementById('app')!)
root.render(<App />)

/**
 * Service Worker: pełne działanie offline po pierwszej wizycie.
 * Rejestrujemy wyłącznie w buildzie produkcyjnym — serwer dev nie udostępnia public/.
 */
if (__PROD__ && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((error) => {
      console.warn('Service Worker: rejestracja nie powiodła się.', error)
    })
  })
}
