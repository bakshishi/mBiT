# Plan Rozwoju i Działań dla Serwisu mBiT.pm (Mesh Bydgoszcz i Toruń)

Data aktualizacji: 25 listopada 2026 r.  
Status projektu: **Baza uporządkowana, scalona z gałęziami audytu i wypchnięta na GitHub (`main`).**

---

## 📋 Faza 1: Weryfikacja wdrożenia i audyt wizualny (Krótkoterminowe)

- [ ] **Weryfikacja GitHub Pages**:
  - Sprawdzenie zakładki *Actions* na GitHubie (`bakshishi/mBiT`) po ostatnim pushu commitów.
  - Potwierdzenie poprawnego zaserwowania odświeżonego artefaktu pod adresem strony (`https://bakshishi.github.io/mBiT/` lub domeną własną).
- [ ] **Audyt wizualny i mobilny (Live Preview)**:
  - Uruchomienie lokalnego środowiska deweloperskiego (`npm run dev`).
  - Przetestowanie nawigacji na urządzeniach mobilnych (menu hamburger, rozmiary dotykowe przycisków, czytelność fontów).
  - Weryfikacja podstrony narzędziowej `/tests` (kalkulator czasu pracy na zasilaniu bateryjnym oraz budżet łącza LoRa).

---

## 🧹 Faza 2: Optymalizacja kodu i czyszczenie zależności

- [ ] **Odchudzenie `package.json`**:
  - Wycięcie niewykorzystywanych komponentów biblioteki shadcn UI i paczek Radix (`cmdk`, `vaul`, `input-otp`, `embla-carousel-react`, `recharts`, `react-day-picker` itp.).
  - Pozostawienie tylko komponentów faktycznie importowanych w kodzie stron (`button`, `card`, `separator` itp.).
  - Ponowne wygenerowanie zredukowanego `package-lock.json`.
- [ ] **Konfiguracja Lintera i Formattera**:
  - Dodanie prostego skryptu lintującego (`eslint` lub `biome`), aby utrzymać czystość kodu przy kolejnych edycjach.

---

## 📍 Faza 3: Lokalizacja – Bydgoszcz, Toruń i Kujawsko-Pomorskie (Merytoryka)

Strona nosi nazwę **mBiT** (Mesh Bydgoszcz i Toruń), dlatego kluczowe jest uzupełnienie specyficznych danych regionalnych:

- [ ] **Węzły i sieć Meshtastic w regionie**:
  - Informacje o lokalnych węzłach bazowych / routerach (np. Bydgoszcz Fordon, Śródmieście, Osowa Góra, Toruń Skarpa, Wrzosy).
  - Rekomendowany preset (EU_868 `LONG_FAST`), nazwa kanału publicznego i ewentualnych kanałów pobocznych.
  - Link do lokalnej mapy węzłów (np. meshmap.net / liamcottle).
- [ ] **Lokalne konwencje radiowe (CB / PMR)**:
  - CB Radio: Potwierdzenie lokalnego kanału bazowego (kanał 28 dla regionu bydgosko-toruńskiego) obok standardowych kanałów 19 (drogowy) i 9 (ratunkowy).
  - PMR446: Rekomendowane kanały dla lokalnych grup sąsiedzkich w razie blackoutu (np. kanał 2 z określonym tonem CTCSS dla testów/wywołań).
- [ ] **Krótkofalarstwo w regionie (Okręg SP2)**:
  - Tabela lokalnych przemienników analogowych 2m i 70cm (np. SR2B, SR2T, przemienniki na masztach w Trzeciewcu / Toruniu).
  - Informacje o przemiennikach cyfrowych (DMR, Fusion C4FM) oraz lokalnych bramkach APRS.
  - Namiary na lokalne oddziały PZK (Bydgoski Klub Krótkofalowców, Toruński Klub Krótkofalowców).
- [ ] **Społeczność i kontakt**:
  - Dedykowany odnośnik do regionalnej grupy łączności (np. kanał na Telegramie, Signal lub forum/serwer Discord).

---

## ⚡ Faza 4: Funkcje zaawansowane dla łączności kryzysowej

- [x] **Tryb Offline / PWA (Progressive Web App)** — ukończone 25.11.2026:
  - Manifest (`public/manifest.webmanifest`) z ikonami 192/512 px, skrótami do Planu, Ściągawki i Testów oraz trybem `standalone`.
  - Service worker (`public/sw.js`) precache'uje app shell i obrazy; nawigacje działają network-first z fallbackiem offline, a statyczne zasoby w stale-while-revalidate.
  - Rejestracja tylko w buildzie produkcyjnym; sprawdzono instalowalność (brak błędów), działanie offline po zatrzymaniu serwera oraz poprawność pod podścieżką `/mBiT/`.
- [x] **Ściągawka do druku (PDF / Pocket Guide)** — ukończone 24.11.2026:
  - Jednostronicowa karta A4/A5 dostępna pod `/sciagawka`: tabele PMR446 i CB, kanały ratunkowe, presety mesh, procedura wywołania SOS, kody Q i alfabet fonetyczny.
  - Druk przez `window.print()`; style `@media print` wymuszają jasną paletę i ukrywają nawigację, stopkę oraz baner cookies.
- [ ] **Własna domena**:
  - Konfiguracja pliku `CNAME` dla domeny `mbit.pm` (jeśli domena jest zarejestrowana i ma wskazywać na GitHub Pages).
