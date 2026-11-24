# mBiT.pm — Mesh Bydgoszcz i Toruń

Statyczny serwis o łączności awaryjnej w regionie Bydgoszczy i Torunia: Meshtastic, MeshCore, Reticulum, PMR446, CB, krótkofalarstwo, plan awaryjny i testy łączności.

Motto: **Connectivity Without Limits**

## Technologie

- React 18 + TypeScript, react-router 7 (`HashRouter`)
- Tailwind CSS + tokeny systemu Tactical RF (`src/shadcn.css`)
- lucide-react (ikony)
- esbuild jako bundler (`scripts/build.mjs`)
- Hosting: GitHub Pages (workflow `.github/workflows/pages.yml`)

## Uruchomienie

Wymagany Node.js 20+.

```bash
npm install        # instalacja zależności
npm run dev        # serwer deweloperski z live reload (adres w konsoli)
npm run build      # build produkcyjny do dist/
npm run typecheck  # sprawdzenie typów (tsc --noEmit)
```

`npm run build` czyści `dist/`, kopiuje zawartość `public/` (obrazy, favicon, robots.txt) i buduje aplikację. Katalog `dist/` jest generowany i nie jest przechowywany w repozytorium.

## Struktura

```
index.html              szablon strony (lang="pl", meta, favicon)
public/                 zasoby statyczne kopiowane do dist/ (images/*.webp, favicon.svg, robots.txt)
scripts/build.mjs       build / serwer deweloperski (esbuild + Tailwind)
src/
  App.tsx               routing (HashRouter, 15 stron + 404)
  main.tsx              punkt wejścia
  components/           Layout, Header, Footer, CookieBanner, SmartImage, Section, PageToc, ...
  pages/                strony główne: Home, Meshtastic, MeshCore, Reticulum, PMR446, CB,
                        Systems, Plan, Resources, Tests, CheatSheet, Privacy, Cookies,
                        Accessibility, EAA, NotFound
  pages/cb|plan|pmr|systems/   podsekcje dużych stron
.github/workflows/
  pages.yml             build i wdrożenie na GitHub Pages (push do main)
  ci.yml                build + typecheck dla pull requestów
```

## Obrazy

Obrazy trzymamy w `public/images/` (format WebP) i odwołujemy się do nich ścieżką względną, np. `images/meshtastic.webp` (bez wiodącego `/`, żeby działały na GitHub Pages pod podścieżką). Komponent `SmartImage` przy błędzie ładowania pokazuje lokalny placeholder SVG — nie są wykonywane żadne zapytania do zewnętrznych serwisów.

## Druk

- `/sciagawka` — jednostronicowa karta polowa A4: kanały SOS, tabele PMR446/CB, presety mesh,
  procedura wywołania pomocy, kody Q i alfabet fonetyczny.
- Druk przez `window.print()` (A4, skala 100%; A5 — skala ok. 71%). Style `@media print`
  w `src/shadcn.css` wymuszają jasną paletę i ukrywają nawigację, stopkę oraz baner cookies.

## Marka

- Akcent główny: Signal Amber (`#d97706` w trybie jasnym, `#f59e0b` w ciemnym)
- Status sieci: Mesh Green; dane techniczne: RF Cyan; alarmy: Emergency Red
- Pełne tokeny i zasady: `DESIGN.md`

## Dostępność i prywatność

- Skip link, nawigacja klawiaturą, widoczne focusy, atrybuty ARIA, semantyczne nagłówki.
- Baner cookies zapisuje wybór w `localStorage`; serwis nie używa analityki ani śledzenia.
- Osobne strony: Prywatność, Cookies, Dostępność, EAA.

## Wdrożenie

Push do `main` uruchamia workflow `pages.yml` (Node 20, `npm run build`, publikacja `dist/` na GitHub Pages).

Uwagi:

- Na GitHub Pages nie można ustawiać własnych nagłówków HTTP (CSP, HSTS itp.). Jeśli będą potrzebne, wymagają własnego serwera lub CDN przed stroną.
- Brak pliku `package-lock.json` oznacza, że CI używa `npm install`. Po wygenerowaniu lockfile (`npm install` lokalnie i commit) workflow automatycznie przełączy się na `npm ci`.
- Dzięki `HashRouter` (adresy `#/trasa`) nie są potrzebne reguły przekierowań, ale podstrony nie są indeksowane osobno przez wyszukiwarki.

## Notatki merytoryczne

- Polecenia CLI Meshtastic: region `EU_868`, preset `LONG_FAST`, hop limit 3.
- Przepisy UE: duty cycle 10% (maks. 6 min nadawania na godzinę) w paśmie 869,4–869,65 MHz.
- Treści (częstotliwości, kanały, harmonogram testów, linki) wymagają okresowej weryfikacji.
