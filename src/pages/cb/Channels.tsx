/**
 * File: src/pages/cb/Channels.tsx
 * Purpose: Channels overview and common community conventions.
 */

import React from 'react'

/**
 * CbChannels
 * Lists key CB channels and their common uses.
 */
export default function CbChannels() {
  return (
    <div className="rounded-lg border border-field-border bg-field-card p-5 shadow-sm">
      <h3 className="text-xl font-bold font-display text-field-text">Kanały i typowe zastosowania w Polsce</h3>
      <ul className="mt-4 grid gap-3 text-sm">
        <li className="p-2.5 rounded bg-emergency-red/10 border border-emergency-red/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-emergency-red">Kanał 9 · 27.065 MHz (AM)</span>
          <span className="text-emergency-red font-medium text-xs sm:text-sm">RATUNKOWY (Emergency) — wyłącznie wzywanie pomocy</span>
        </li>
        <li className="p-2.5 rounded bg-signal-amber/10 border border-signal-amber/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-signal-amber">Kanał 19 · 27.185 MHz (AM)</span>
          <span className="text-field-text text-xs sm:text-sm">DROGOWY — informacje o trasie, utrudnienia, mobilit</span>
        </li>
        <li className="p-2.5 rounded bg-field-recessed border border-field-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-signal-amber">Kanał 28 · 27.285 MHz (AM/FM)</span>
          <span className="text-field-muted text-xs sm:text-sm">WYWOŁAWCZY REGIONALNY — Bydgoszcz, Toruń i stacje bazowe</span>
        </li>
        <li className="p-2.5 rounded bg-field-recessed border border-field-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-field-text">Kanał 20 · 27.205 MHz</span>
          <span className="text-field-muted text-xs sm:text-sm">Rozmowy lokalne, testy sprzętu i anten</span>
        </li>
        <li className="p-2.5 rounded bg-field-recessed border border-field-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-field-text">Kanały 12 i 30 (FM)</span>
          <span className="text-field-muted text-xs sm:text-sm">Praca w modulacji FM (czystszy dźwięk bez szumów AM)</span>
        </li>
        <li className="p-2.5 rounded bg-field-recessed border border-field-border flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <span className="font-mono font-bold text-rf-cyan">Kanały 16, 36–40 (SSB USB)</span>
          <span className="text-field-muted text-xs sm:text-sm">Łączności dalekosiężne DX (wymaga radia z SSB)</span>
        </li>
      </ul>
      <p className="mt-4 text-xs font-mono text-field-muted border-t border-field-border/60 pt-3">
        Zasada operacyjna: Poza kanałem 9, przeznaczenia to zwyczaje środowiskowe. Zwyczajowo rozmowy przenosi się poza kanał wywoławczy 28 lub drogowy 19. Zanim naciśniesz PTT — nasłuchaj przez 5 sekund!
      </p>
    </div>
  )
}
