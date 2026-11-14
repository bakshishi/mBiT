---
name: mBiT.pm — Mesh Bydgoszcz i Toruń
description: System projektowy łączności awaryjnej i sieci mesh (LoRa, PMR446, CB, Ham Radio). Estetyka Tactical RF & Topo-Grid — czytelność w trudnych warunkach terenowych, wysoki kontrast, precyzyjne dane techniczne i zero generycznego „AI slop”.

colors:
  # Główne kotwice marki (Brand Anchors - Sygnał Radiowy)
  signal-amber: "oklch(78% 0.17 68)"         # Podstawowy akcent: bursztynowy wyświetlacz radiowy / wywołanie
  signal-amber-rich: "oklch(71% 0.19 62)"    # Aktywny stan CTA / podświetlenie
  signal-amber-soft: "oklch(93% 0.08 72)"    # Tło podświetlenia w trybie jasnym
  mesh-green: "oklch(74% 0.17 148)"          # Status sieci LoRa / aktywny węzeł / mesh online
  rf-cyan: "oklch(76% 0.12 210)"             # Telemetria / pakiety / dane częstotliwości
  emergency-red: "oklch(62% 0.22 28)"        # Kanał ratunkowy / SOS / alarm (Kanał 1 PMR, Kanał 9 CB)

  # Powierzchnie terenowe - Tryb Ciemny / Nocny (Field Dark / OLED)
  surface-field-black: "oklch(12% 0.015 240)" # Głębokie tło aplikacji (oszczędzanie baterii OLED)
  surface-tactical-slate: "oklch(17% 0.02 240)" # Panele, karty, tabele, sekcje
  surface-raised: "oklch(22% 0.025 240)"      # Kontenery aktywne, paski narzędziowe
  surface-inset: "oklch(9% 0.01 240)"         # Pola kodów, konsole CLI, wycinki

  # Powierzchnie - Tryb Dzienny / Papier Terenowy (Field Paper - czytelność w słońcu)
  paper-ground: "oklch(97% 0.008 85)"         # Tło dzienne (neutralny ciepły papier)
  paper-card: "oklch(100% 0 0)"               # Czysta biała powierzchnia panelu
  paper-recessed: "oklch(93% 0.012 85)"       # Tło sekcji podrzędnych i tabel

  # Skala tekstu i kontrastu
  text-primary-dark: "oklch(95% 0.005 85)"    # Główny tekst na ciemnym tle (kontrast >12:1)
  text-muted-dark: "oklch(75% 0.015 85)"      # Tekst pomocniczy, parametry (kontrast >6:1)
  text-faint-dark: "oklch(55% 0.015 85)"      # Metadane, etykiety jednostek
  text-primary-light: "oklch(18% 0.02 240)"   # Główny tekst na jasnym tle (kontrast >14:1)
  text-muted-light: "oklch(40% 0.02 240)"     # Tekst pomocniczy na jasnym tle
  text-faint-light: "oklch(60% 0.015 240)"    # Etykiety i jednostki na jasnym tle

  # Linie podziału i siatki kalibracyjne
  hairline-dark: "oklch(28% 0.02 240 / 0.8)"  # Precyzyjne obramowania paneli w nocy
  hairline-amber: "oklch(78% 0.17 68 / 0.45)" # Aktywne ramki i wskaźniki focus
  hairline-light: "oklch(85% 0.01 240)"       # Siatka tabeli i separatorów w dzień

typography:
  scale:
    "10": "0.625rem"    # Mikroskopijne etykiety RF: Subton CTCSS, SF/BW, dBm
    "11": "0.6875rem"   # Etykiety węzłów, kanały w tabelach, tagi pasm
    "12": "0.75rem"     # Kod CLI, jednostki (MHz, mW, km), metadane
    "13": "0.8125rem"   # Tabele częstotliwości, opisy parametrów
    "14": "0.875rem"    # Podstawowy tekst gęsty, procedury, listy kroków
    "16": "1.0rem"      # Tekst ciągły artykułów, wstępy
    "18": "1.125rem"    # Lead paragrafu, nagłówki kart
    "20": "1.25rem"     # Nagłówki sekcji podrzędnych (h3)
    "24": "1.5rem"      # Nagłówki sekcji głównych (h2)
    "32": "2.0rem"      # Tytuły modułów i stron
    "40": "2.5rem"      # Tytuł główny Hero (h1)

  display:
    fontFamily: "Space Grotesk, Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"

  headline:
    fontFamily: "Space Grotesk, Chakra Petch, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"

  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35

  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65

  mono:
    fontFamily: "JetBrains Mono, Fira Code, SFMono-Regular, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.02em"

rounded:
  none: "0px"
  xs: "2px"             # Ostre rogi wojskowe / obudowy radiotelefonów
  sm: "4px"             # Przyciski akcji, pigułki kanałów, pola formularzy
  md: "6px"             # Karty modułów, panele procedur
  lg: "8px"             # Główne kontenery strony
  full: "9999px"        # Tylko statusowe wskaźniki LED (diody TX/RX)

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"

components:
  button-primary:
    backgroundColor: "{colors.signal-amber}"
    textColor: "oklch(12% 0.02 240)"
    typography: "{typography.title}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.signal-amber}"
    borderColor: "{colors.hairline-amber}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  badge-frequency:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.rf-cyan}"
    typography: "{typography.mono}"
    rounded: "{rounded.xs}"
    padding: "2px 6px"
  card-panel:
    backgroundColor: "{colors.surface-tactical-slate}"
    textColor: "{colors.text-primary-dark}"
    borderColor: "{colors.hairline-dark}"
    rounded: "{rounded.md}"
    padding: "20px"
---

# Design System: mBiT.pm (Tactical RF & Topo-Grid)

## 1. Overview & Creative North Star

**Kierunek kreatywny: „Tactical RF & Topo-Grid” (Łączność Polowa i Precyzja Widma)**

Serwis **mBiT.pm** nie jest kolejną aplikacją SaaS ani platformą marketingową – to **terenowy przewodnik i baza operacyjna łączności kryzysowej dla Bydgoszczy, Torunia i regionu Kujawsko-Pomorskiego**. 

W sytuacji kryzysowej (blackout, awaria stacji bazowych GSM, zakłócenia pogodowe, powódź na Wiśle):
* Użytkownik korzysta z telefonu w pełnym słońcu na wzgórzu Fordonu lub w nocy przy świeczce, oszczędzając każdy procent baterii.
* Informacje muszą być natychmiastowe, skanowalne wzrokiem w 3 sekundy, jednoznaczne i pozbawione zbędnych ozdobników.
* Kolorystyka i typografia nawiązują do profesjonalnego sprzętu radiokomunikacyjnego (Yaesu, Motorola, Icom, RNode, radia morskie i lotnicze): monochromatyczny ekran telemetryczny, bursztynowe wskaźniki gotowości, zieleń aktywnego węzła LoRa oraz precyzyjne oznaczenia alarmowe.

### Zastąpienie generycznego „AI Slop”:
1. **Koniec z fioletowo-różowym gradientem `#5a67d8 → #764ba2`:** Przeniesienie akcentu na **bursztyn telemetryczny (`Signal Amber`)**, **zieleń pakietu LoRa (`Mesh Green`)** i **czerwień ratunkową (`Emergency Red`)**.
2. **Koniec z nudną siatką 9 identycznych kart:** Zastąpienie powtarzalnych kafelków hierarchicznym układem operacyjnym: tabele parametrów, paski szybkiego wyboru częstotliwości, interaktywne ściągawki i mapy.
3. **Prawdziwy tryb terenowy (Field Dark / High-Contrast Paper):** Oparta o tokeny OKLCH paleta z gwarancją czytelności w słońcu i maksymalnej oszczędności ekranów OLED w nocy.

---

## 2. System Rules & Anti-Slop Bans (Zasady Nienaruszalne)

Poniższe reguły obowiązują każdego twórcę i agenta AI pracującego nad kodem `mBiT`:

### ❌ Zakazy Bezwzględne (The Refuse):
1. **Zakaz gradientów na tekście i przyciskach:** Żadnych `bg-gradient-to-r from-purple to-indigo`. W świecie radiowym przycisk to fizyczny przełącznik PTT lub taktyczny klawisz.
2. **Zakaz identycznych kart bento jako jedynej struktury strony:** Karty to leniwy kontener. Dane techniczne (kanały, częstotliwości, tony, moce ERP) należą do **kompaktowych tabel i matryc parametrów**, a nie do rozmytych kafelków z obrazkami.
3. **Zakaz emoji w roli profesjonalnych ikon:** Zamiast `📡`, `📻`, `🚗` stosujemy ostre, spójne ikony SVG (z biblioteki `lucide-react`) o grubości obrysu 1.5–2px.
4. **Zakaz sztucznych cieni i glassmorphismu:** Żadnych `backdrop-blur-md` i rozlanych poświat neonowych na kartach. Głębokość wynika z 1-pikselowych linii kalibracyjnych (`hairline`), subtelnych przesunięć tła i ramek technicznych.
5. **Zakaz ozdobnych etykiet „01 / 02 / 03”:** Numerujemy wyłącznie procedury o ścisłej kolejności kroków ratunkowych.

### ✅ Wymogi Inżynieryjne (The Floor):
1. **Minimalny kontrast 4.5:1 (WCAG AA) i 7:1 (AAA) dla parametrów kluczowych:** Żadnego szarego tekstu na jasnoszarym tle w tabelach częstotliwości.
2. **Tabele zoptymalizowane pod smartfony:** Tabele kanałów i częstotliwości muszą mieścić się na ekranie telefonu o szerokości 360px bez ucinania kluczowych danych (kanał + MHz + subton).
3. **Typografia liczb w monospace:** Wszystkie częstotliwości (np. `446.00625 MHz`, `869.525 MHz`, `27.285 MHz`) oraz kody CTCSS/DCS (`67.0 Hz`, `DCS 023`) **zawsze** zapisujemy fontem o stałej szerokości znaków (`JetBrains Mono` / `SFMono`).
4. **Gotowość do druku (Print-First):** Każda procedura ratunkowa i harmonogram testów musi drukować się na jednej kartce A4/A5 bez elementów nawigacji, stopki i banerów cookies.

---

## 3. Colors & Tokens (RF Spectrum Palette)

Wszystkie kolory zdefiniowano w przestrzeni **OKLCH**, co gwarantuje jednolity kontrast percepcyjny i brak przekłamań jasności na różnych wyświetlaczach.

| Token | Wartość OKLCH | Zastosowanie semantyczne |
| :--- | :--- | :--- |
| **`signal-amber`** | `oklch(78% 0.17 68)` | Główny kolor marki: przyciski akcji, wybrane stany aktywne, nagłówki operacyjne. |
| **`signal-amber-rich`**| `oklch(71% 0.19 62)` | Stan hover / aktywny przycisków, wysokie skupienie uwagi. |
| **`mesh-green`** | `oklch(74% 0.17 148)` | Węzły sieci mesh aktywne, pomyślne połączenie, status „online/odbiera”. |
| **`rf-cyan`** | `oklch(76% 0.12 210)` | Pakiety danych, bezpośrednie trasy (direct-path), telemetria baterii. |
| **`emergency-red`** | `oklch(62% 0.22 28)` | Alarm, kanały SOS (PMR K1, CB K9), procedury bezpośredniego zagrożenia życia. |
| **`surface-field-black`**| `oklch(12% 0.015 240)` | Tło aplikacji w trybie nocnym / polowym (minimalny pobór mocy matryc OLED). |
| **`surface-tactical-slate`**| `oklch(17% 0.02 240)` | Karty danych, kontenery sekcji, tło nagłówków tabeli. |
| **`hairline-dark`** | `oklch(28% 0.02 240 / 0.8)`| 1px obramowanie techniczne modułów i tabel. |

---

## 4. Typography Hierarchy & Rules

Typografia opiera się na dwóch uzupełniających się rodzinach:
1. **Space Grotesk** – techniczny, geometryczny bezszeryfowy font dla tytułów i nagłówków sekcji (charakter inżynieryjny, lotniczy i radiowy).
2. **Inter** – neutralny, zoptymalizowany pod kątem ekranów font do długich tekstów, instrukcji prawnych i poradników.
3. **JetBrains Mono / SFMono** – rygorystyczny font o stałej szerokości znaków do danych telemetrycznych, tabel kanałów, kodów CLI i częstotliwości.

### Hierarchia:
* **Display (h1):** `clamp(2.2rem, 4vw, 2.75rem)`, waga 700, interlinia 1.1. Bezpośredni, mocny komunikat.
* **Headline (h2):** `clamp(1.4rem, 2.5vw, 1.75rem)`, waga 600. Wyznacza główne stacje tematyczne.
* **Section Title (h3):** `1.125rem` (18px), waga 600. Nagłówki tabel, modułów procedur i kroków.
* **Body Text:** `0.9375rem` (15px), waga 400, interlinia 1.65. Optymalna długość wiersza: 60–72 znaków.
* **Telemetry Data / Code:** `0.8125rem` (13px), monospace. Etykiety częstotliwości i polecenia konsoli.

---

## 5. Layout & Spatial Density

* **Gęstość informacyjna (Data Density):** W łączności kryzysowej puste białe przestrzenie (tzw. „marketing fluff”) utrudniają szybkie odnalezienie ratunku. Stosujemy zwarty rytm pionowy: 8px, 16px, 24px, 32px.
* **Siatka operacyjna:** Podział na kolumny telemetryczne (np. lewa kolumna: kluczowe parametry i status; prawa: szczegółowa procedura działania).
* **Maksymalna szerokość kontenera:** `1280px` (7xl), centrowane z bezpiecznym marginesem 16px na smartfonach i 24px na tabletach.

---

## 6. Elevation, Depth & Surfaces

* **Płaska hierarchia warstw (Flat Layering):** Głębokość osiągamy przez **kontrast powierzchni** (`surface-field-black` → `surface-tactical-slate` → `surface-raised`), a nie przez rozmyte cienie.
* **Obramowania 1px Hairline:** Każda karta, boks ostrzeżenia i wiersz tabeli posiada precyzyjne obramowanie `1px solid var(--hairline)`.
* **Subtelny akcent krawędziowy:** W boksach alarmowych dopuszcza się lewe obramowanie `3px solid var(--emergency-red)` jako wyraźny wskaźnik priorytetu SOS.

---

## 7. Component Specifications

### 7.1. Przyciski (Buttons)
* **Primary (Akcja Główna):** Tło `signal-amber`, tekst ciemny (`surface-field-black`), waga 600, zaokrąglenie 4px. Zapewnia natychmiastowe kliknięcie w rękawiczkach lub na małym ekranie (min. wysokość 44px).
* **Secondary / Outline:** Tło przezroczyste, obramowanie 1px `hairline-amber`, tekst `signal-amber`.
* **Print / Export Button:** Dedykowany przycisk techniczny z ikoną drukarki, tło neutralne, obramowanie techniczne.

### 7.2. Pigułki Częstotliwości i Statusu (Badges & Pills)
* Kompaktowe kontenery z czcionką monospace:
  * `Kanał 1 · 446.00625 MHz` → Tło ciemne, obramowanie czerwone, tekst czerwony jasny.
  * `Meshtastic · 869.525 MHz` → Tło ciemne, obramowanie zielone, tekst zielony jasny.
  * `CB K-28 · 27.285 MHz` → Tło ciemne, obramowanie bursztynowe, tekst bursztynowy.

### 7.3. Tabele Kanałów
* Wiersze naprzemienne lub oddzielone delikatną linią 1px.
* Kolumny o stałych szerokościach dla numeru kanału i częstotliwości.
* Wyraźne oznaczenia kolorystyczne dla kanałów o specjalnym przeznaczeniu (Alarm / Testy / Wywoławczy).

### 7.4. Pola Kopiowania CLI (CopyField)
* Blok monospace z przyciskiem szybkiego kopiowania po prawej stronie.
* Wizualne potwierdzenie skopiowania („Skopiowano!”) trwające 1.5 sekundy.

---

## 8. Do and Do Not (Dobre i Złe Praktyki)

### DO (Należy robić):
* Projektuj pod kątem czytelności na zewnątrz w ostrym słońcu oraz w całkowitej ciemności (tryb nocny).
* Używaj jednoznacznych jednostek technicznych (`MHz`, `kHz`, `mW`, `dBm`, `W ERP`, `CTCSS`).
* Testuj stronę w trybie drukowania (`Ctrl + P`) – plan awaryjny ma mieścić się na papierze.
* Zachowuj czyste, semantyczne tagi HTML (`<table>`, `<section>`, `<article>`, `<header>`).
* Dbaj o minimalny rozmiar paczki JS – strona musi ładować się błyskawicznie nawet przy słabym zasięgu 2G/EDGE.

### DO NOT (Czego nie wolno robić):
* Nie używaj fioletowo-niebieskich gradientów „AI style”.
* Nie twórz ścian tekstu bez podziału na logiczne bloki z nagłówkami.
* Nie ukrywaj częstotliwości i parametrów w rozwijanych akordeonach – w sytuacji stresu użytkownik nie może klikać i szukać.
* Nie dodawaj bibliotek animacji obciążających procesor telefonu podczas oszczędzania energii.
* Nie stosuj zewnętrznych fontów pobieranych z Google Fonts w locie – fonty muszą być zoptymalizowane, systemowe lub lokalne, aby strona działała w 100% offline.
