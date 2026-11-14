/**
 * File: Home.tsx
 * Purpose: Operational Hub & Tactical RF Matrix for mBiT.pm (Mesh Bydgoszcz & Toruń).
 * Conforms to DESIGN.md: high-contrast, domain-authentic, anti-slop, field-ready.
 */

import React from 'react'
import { NavLink } from 'react-router'
import { 
  Radio, 
  Wifi, 
  ShieldAlert, 
  Network, 
  Calendar, 
  BookOpen, 
  ArrowRight,
  Activity,
  Layers,
  Cpu
} from 'lucide-react'
import SmartImage from '../components/SmartImage'

export default function HomePage() {
  return (
    <div className="bg-field-ground text-field-text transition-colors">
      {/* 1. HERO OPERACYJNY */}
      <section className="relative border-b border-field-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-16 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            {/* Tactical Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-signal-amber/30 bg-signal-amber/10 px-3 py-1 text-xs font-mono font-medium text-signal-amber mb-4">
              <span className="h-2 w-2 rounded-full bg-mesh-green animate-pulse" aria-hidden="true" />
              <span>Kujawsko-Pomorskie · Region Bydgoszcz &amp; Toruń</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-field-text leading-[1.15]">
              Łączność Awaryjna <br className="hidden sm:inline" />
              <span className="text-signal-amber">&amp; Sieci Mesh</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-field-muted max-w-2xl leading-relaxed">
              Otwarty, niezależny od sieci GSM i Internetu przewodnik radiokomunikacji dla Bydgoszczy,
              Torunia i okolic. Od ręcznych radiotelefonów PMR i CB po samonaprawiające się cyfrowe węzły LoRa.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink
                to="/plan"
                className="inline-flex items-center gap-2 rounded-md bg-signal-amber px-5 py-2.5 text-slate-950 font-semibold text-sm shadow hover:bg-signal-amber-rich transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
              >
                <ShieldAlert size={16} aria-hidden="true" />
                <span>Plan Łączności Awaryjnej</span>
              </NavLink>
              <NavLink
                to="/meshtastic"
                className="inline-flex items-center gap-2 rounded-md border border-field-border bg-field-card px-5 py-2.5 text-field-text font-medium text-sm hover:border-signal-amber/50 hover:bg-field-recessed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
              >
                <Network size={16} aria-hidden="true" />
                <span>Meshtastic EU_868</span>
              </NavLink>
            </div>

            {/* Tactical Status Pill */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-field-faint border-t border-field-border/60 pt-4">
              <span>EU: 869.525 MHz</span>
              <span className="text-field-border">|</span>
              <span>Preset: LONG_FAST</span>
              <span className="text-field-border">|</span>
              <span>Hop Limit: 3</span>
              <span className="text-field-border">|</span>
              <span>Duty Cycle: 10%/h</span>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="rounded-xl overflow-hidden border border-field-border bg-field-card shadow-sm p-1.5">
              <SmartImage
                src="images/hero-mesh.webp"
                alt="Wizualizacja łączności radiowej nad Bydgoszczą i Toruniem"
                className="w-full h-64 md:h-80 rounded-lg object-cover"
                fallbackKeyword="radio mesh city network"
              />
              <div className="p-3 text-xs font-mono flex items-center justify-between text-field-muted bg-field-card">
                <span>Topografia: Dolina Dolnej Wisły</span>
                <span className="text-mesh-green font-semibold">● Węzły aktywne</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERACYJNA MATRYCA ŁĄCZNOŚCI (TACTICAL RF MATRIX) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-signal-amber">
            <Radio size={14} aria-hidden="true" />
            <span>Stanowisko Częstotliwości i Pasm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-field-text mt-1">
            Matryca Łączności Kryzysowej (Bydgoszcz &amp; Toruń)
          </h2>
          <p className="text-sm text-field-muted mt-1 max-w-3xl">
            Szybki przegląd podstawowych systemów łączności. Kliknij sekcję, aby przejść do szczegółowej procedury, konfiguracji i bazy częstotliwości.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Sektor A: Cyfrowy Mesh LoRa */}
          <div className="rounded-xl border border-field-border bg-field-card p-5 flex flex-col justify-between shadow-sm hover:border-signal-amber/40 transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-mesh-green/15 text-mesh-green text-xs font-mono font-semibold px-2 py-0.5">
                  LORA MESH · 868 MHz
                </span>
                <Wifi size={18} className="text-mesh-green" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold font-display text-field-text mt-3">
                Cyfrowe Sieci Mesh
              </h3>
              <p className="text-xs text-field-muted mt-1">
                Autonomiczna komunikacja tekstowa i telemetryczna bez infrastruktury operatora.
              </p>

              <ul className="mt-4 space-y-2.5 text-xs font-mono">
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">Meshtastic</span>
                  <span className="text-signal-amber">869.525 MHz · LongFast</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">MeshCore</span>
                  <span className="text-rf-cyan">869.618 MHz · 2-Byte Hash</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">Reticulum</span>
                  <span className="text-field-muted">Szyfrowany transfer RNode</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-field-border flex items-center justify-between text-xs">
              <NavLink to="/meshtastic" className="font-semibold text-signal-amber hover:underline inline-flex items-center gap-1">
                <span>Konfiguracja Meshtastic</span>
                <ArrowRight size={13} aria-hidden="true" />
              </NavLink>
              <NavLink to="/meshcore" className="text-field-muted hover:text-field-text">
                MeshCore &rarr;
              </NavLink>
            </div>
          </div>

          {/* Sektor B: Pasma Otwarte & Głos */}
          <div className="rounded-xl border border-field-border bg-field-card p-5 flex flex-col justify-between shadow-sm hover:border-signal-amber/40 transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-signal-amber/15 text-signal-amber text-xs font-mono font-semibold px-2 py-0.5">
                  GŁOS · BEZ LICENCJI
                </span>
                <Radio size={18} className="text-signal-amber" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold font-display text-field-text mt-3">
                PMR446 &amp; CB Radio
              </h3>
              <p className="text-xs text-field-muted mt-1">
                Bezpośrednia łączność głosowa na podręcznych walkie-talkie i radiach samochodowych/bazowych.
              </p>

              <ul className="mt-4 space-y-2.5 text-xs font-mono">
                <li className="flex items-center justify-between p-2 rounded bg-emergency-red/10 border border-emergency-red/30">
                  <span className="font-semibold text-emergency-red">PMR Kanał 1 (SOS)</span>
                  <span className="text-emergency-red font-bold">446.00625 MHz</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">PMR K-2 (Testy)</span>
                  <span className="text-signal-amber">446.01875 MHz</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">CB K-19 (Trasa) / K-28</span>
                  <span className="text-field-text">27.185 / 27.285 MHz</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-field-border flex items-center justify-between text-xs">
              <NavLink to="/pmr446" className="font-semibold text-signal-amber hover:underline inline-flex items-center gap-1">
                <span>Tabela 16 kanałów PMR</span>
                <ArrowRight size={13} aria-hidden="true" />
              </NavLink>
              <NavLink to="/cb" className="text-field-muted hover:text-field-text">
                CB Radio &rarr;
              </NavLink>
            </div>
          </div>

          {/* Sektor C: Procedury & Licencjonowane */}
          <div className="rounded-xl border border-field-border bg-field-card p-5 flex flex-col justify-between shadow-sm hover:border-signal-amber/40 transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded bg-rf-cyan/15 text-rf-cyan text-xs font-mono font-semibold px-2 py-0.5">
                  OPERACYJNE · DX / HF
                </span>
                <Layers size={18} className="text-rf-cyan" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold font-display text-field-text mt-3">
                Plan Awaryjny &amp; SP2
              </h3>
              <p className="text-xs text-field-muted mt-1">
                Procedury wielopoziomowe (Tier 1–3), zasilanie akumulatorowe PV oraz krótkofalarstwo.
              </p>

              <ul className="mt-4 space-y-2.5 text-xs font-mono">
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">Tier 1: Lokalny</span>
                  <span className="text-mesh-green">PMR446 / LoRa dom</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">Tier 2: Miasto/Powiat</span>
                  <span className="text-signal-amber">CB Radio / Repeater Mesh</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded bg-field-recessed border border-field-border/60">
                  <span className="font-semibold text-field-text">Tier 3: Kraj / Global</span>
                  <span className="text-rf-cyan">Winlink / HF NVIS</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-field-border flex items-center justify-between text-xs">
              <NavLink to="/plan" className="font-semibold text-signal-amber hover:underline inline-flex items-center gap-1">
                <span>Pełny Plan Awaryjny</span>
                <ArrowRight size={13} aria-hidden="true" />
              </NavLink>
              <NavLink to="/tests" className="text-field-muted hover:text-field-text">
                Kalendarz testów &rarr;
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODUŁY POGŁĘBIAJĄCE (PRZEWODNIKI TEMATYCZNE) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="border-t border-field-border pt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold font-display text-field-text">
                Przewodniki Sprzętowe i Baza Wiedzy
              </h2>
              <p className="text-sm text-field-muted mt-1">
                Szczegółowe konfiguracje urządzeń, parametry prawne UKE oraz zasoby społecznościowe.
              </p>
            </div>
            <NavLink
              to="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-signal-amber hover:underline self-start md:self-auto"
            >
              <span>Katalog Zasobów i Mapy</span>
              <ArrowRight size={14} aria-hidden="true" />
            </NavLink>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Meshtastic LoRa"
              badge="868 MHz"
              desc="Konfiguracja Heltec V3, T-Beam i RAK4631 pod kątem sieci miejskiej w Bydgoszczy i Toruniu."
              to="/meshtastic"
              img="images/meshtastic.webp"
              kw="meshtastic radio module"
            />
            <FeatureCard
              title="MeshCore Narrow"
              badge="Direct-Path"
              desc="Wąskopasmowy protokół o niskim poborze energii i instrukcja konfiguracji 2-bajtowego hasha."
              to="/meshcore"
              img="images/meshcore.webp"
              kw="lora meshcore hardware"
            />
            <FeatureCard
              title="PMR446 & Walkie-Talkie"
              badge="UHF 0.5W"
              desc="Tabela 16 częstotliwości, kody subtonów CTCSS/DCS i etykieta prowadzenia łączności SOS."
              to="/pmr446"
              img="images/pmr.webp"
              kw="pmr446 walkie talkie"
            />
            <FeatureCard
              title="CB Radio 27 MHz"
              badge="40 Kanałów"
              desc="Propagacja fali przyziemnej, anteny stacjonarne i lokalny kanał 28 w regionie."
              to="/cb"
              img="images/cb.webp"
              kw="cb radio transceiver"
            />
            <FeatureCard
              title="Reticulum Network"
              badge="Kryptografia"
              desc="Architektura suwerennej sieci danych z węzłami RNode i bezpieczną wymianą pakietów."
              to="/reticulum"
              img="images/reticulum.webp"
              kw="reticulum encrypted network"
            />
            <FeatureCard
              title="Testy i Procedury"
              badge="Harmonogram"
              desc="Comiesięczne testy łączności (13. dzień mies. i ostatnia sobota) oraz kalkulator zasilania."
              to="/tests"
              img="images/tests.webp"
              kw="radio test schedule"
            />
            <FeatureCard
              title="Systemy Dodatkowe"
              badge="Ham Radio"
              desc="Krótkofalarstwo w okręgu SP2, procedury egzaminacyjne UKE oraz system Winlink."
              to="/systems"
              img="images/systems.webp"
              kw="amateur radio antenna"
            />
            <FeatureCard
              title="Plan i Zasilanie"
              badge="Blackout Ready"
              desc="Dobór paneli fotowoltaicznych, akumulatorów LiFePO4 oraz procedury rodzinne."
              to="/plan"
              img="images/plan.webp"
              kw="emergency power lifepo4"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

/** Pomocnicza karta przewodnika ze spójnym obramowaniem */
function FeatureCard({
  title,
  badge,
  desc,
  to,
  img,
  kw
}: {
  title: string
  badge: string
  desc: string
  to: string
  img: string
  kw: string
}) {
  return (
    <NavLink
      to={to}
      className="group rounded-xl overflow-hidden border border-field-border bg-field-card hover:border-signal-amber/60 hover:shadow-md transition-all flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-amber"
    >
      <div className="relative h-32 w-full overflow-hidden bg-field-recessed">
        <SmartImage
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          fallbackKeyword={kw}
        />
        <span className="absolute top-2 right-2 rounded bg-slate-950/80 backdrop-blur text-signal-amber text-[10px] font-mono px-2 py-0.5 border border-signal-amber/30">
          {badge}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm font-display text-field-text group-hover:text-signal-amber transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-xs text-field-muted leading-relaxed">
            {desc}
          </p>
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono font-medium text-signal-amber group-hover:underline">
          <span>Czytaj przewodnik</span>
          <ArrowRight size={12} aria-hidden="true" />
        </span>
      </div>
    </NavLink>
  )
}
