# Plan Rozwoju i Działań dla Serwisu mBiT.pm (Mesh Bydgoszcz i Toruń)

Data aktualizacji: 11 listopada 2026 r.  
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

- [ ] **Tryb Offline / PWA (Progressive Web App)**:
  - Dodanie prostego Service Workera i manifestu PWA, aby strona mogła zostać zainstalowana na telefonie i działać w 100% offline w sytuacji braku Internetu i blackoutu sieci komórkowej.
- [ ] **Ściągawka do druku (PDF / Pocket Guide)**:
  - Wygenerowanie jednostronicowej karty formatu A4 / A5 do wydruku (tabela częstotliwości, kanały ratunkowe, alfabet fonetyczny, kody Q, procedury wywołania SOS) do noszenia w plecaku ucieczkowym (BOB) lub radiotelefonie.
- [ ] **Własna domena**:
  - Konfiguracja pliku `CNAME` dla domeny `mbit.pm` (jeśli domena jest zarejestrowana i ma wskazywać na GitHub Pages).
