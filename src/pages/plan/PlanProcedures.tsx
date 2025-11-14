/**
 * File: plan/PlanProcedures.tsx
 * Purpose: Step‑by‑step procedures during an emergency.
 */

import React from 'react'

/**
 * NoteBox
 * Simple callout for important tips or warnings.
 */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 rounded-md border-l-4 border-indigo-500 bg-indigo-50 p-3 text-sm text-slate-800">
      {children}
    </div>
  )
}

/**
 * PlanProcedures
 * Details four core steps: PMR check, activate mesh, use CB, document contacts.
 */
export default function PlanProcedures() {
  return (
    <section id="procedury" aria-labelledby="proc-title" className="mb-10">
      <h2 id="proc-title" className="text-lg font-semibold text-slate-900">5. Procedury — Jak działać w sytuacji awaryjnej?</h2>

      <div className="mt-3 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-slate-900">Krok 1: Sprawdź łączność lokalną (PMR446)</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Włącz PMR i ustaw kanał 2 (awaryjny) lub 3 z CTCSS 14 w górach.</li>
            <li>Wywołaj ogólnie: „Wywołanie ogólne w testach łączności awaryjnej, woła [imię/znak/miasto]”.</li>
            <li>Słuchaj przez ~30 sekund; w razie braku odpowiedzi spróbuj kanału 12 (zapasowy).</li>
          </ol>
          <NoteBox>Uwaga: Nadawaj bez CTCSS, chyba że w górach — wtedy ton 14 na kanale 3.</NoteBox>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-900">Krok 2: Aktywuj mesh (Meshtastic)</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Włącz węzeł Meshtastic i sparuj z telefonem przez Bluetooth.</li>
            <li>Wyślij wiadomość testową i oczekuj odpowiedzi innych węzłów.</li>
            <li>W razie ciszy — przenieś się wyżej lub w miejsce z mniejszą liczbą przeszkód.</li>
          </ol>
          <NoteBox>Węzły najlepiej rozmieścić na dachach, wzgórzach, wieżach — to zwiększa zasięg całej sieci.</NoteBox>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-900">Krok 3: Użyj CB Radio (jeśli potrzebujesz większego zasięgu)</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Ustaw kanał 13 AM (preperski) lub 11 USB.</li>
            <li>Wywołaj: „Wywołanie ogólne, woła [imię/znak/miasto]”.</li>
            <li>Przy zakłóceniach zmień kanał lub modulację (AM/FM/SSB).</li>
          </ol>
          <NoteBox>CB działa najlepiej w terenie otwartym i z dobrze zestrojoną, wysoką anteną.</NoteBox>
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-900">Krok 4: Dokumentuj wszystkie kontakty i zdarzenia</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
            <li>Data i godzina łączności, znak/imię rozmówcy, lokalizacja (Twoja i rozmówcy).</li>
            <li>Raport słyszalności (np. skala 1–5) oraz przekazane informacje (hasła, prośby o pomoc).</li>
            <li>Notatki pomagają w koordynacji i ocenie zasięgu, mogą stanowić dowód przekazania informacji.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
