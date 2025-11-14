/**
 * File: src/pages/cb/Etiquette.tsx
 * Purpose: Radio etiquette and emergency priorities for CB.
 */

import React from 'react'

/**
 * CbEtiquette
 * Describes do's and don'ts, including emergency priority.
 */
export default function CbEtiquette() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-xl font-semibold text-slate-900">Etykieta i priorytety</h3>
      <ul className="mt-2 list-disc pl-6 text-slate-700 space-y-2">
        <li>Nasłuchaj min. 5 s przed nadawaniem — nie przerywaj cudzej rozmowy.</li>
        <li>Krótko i na temat; rób przerwy, by inni mogli wejść do rozmowy.</li>
        <li>Użyj „BREAK” aby dołączyć; prowadzący powinien wpuścić nową stację.</li>
        <li>Podawaj znak/nick i QTH (lokalizację) na początku łączności.</li>
        <li>Nie retransmituj muzyki/reklam, nie używaj wulgaryzmów.</li>
      </ul>
      <div className="mt-4 rounded-md bg-amber-50 p-4 text-sm text-slate-800">
        <p className="font-medium">Sytuacje awaryjne:</p>
        <p className="mt-1">
          Hasło „RATUNEK” (lub „MAYDAY”) daje pierwszeństwo na kanale. Kanał 9 traktuj wyłącznie
          jako ratunkowy. Nadużywanie jest niedopuszczalne.
        </p>
      </div>
    </div>
  )
}
