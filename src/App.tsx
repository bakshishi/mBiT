/**
 * File: App.tsx
 * Purpose: Main routing using react-router HashRouter with nested routes and a shared layout.
 */

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import MeshtasticPage from './pages/Meshtastic'
import MeshCorePage from './pages/MeshCore'
import ReticulumPage from './pages/Reticulum'
import PMRPage from './pages/PMR446'
import CBPage from './pages/CB'
import SystemsPage from './pages/Systems'
import PlanPage from './pages/Plan'
import PrivacyPage from './pages/Privacy'
import CookiesPage from './pages/Cookies'
import AccessibilityPage from './pages/Accessibility'
import EAAPage from './pages/EAA'
import ResourcesPage from './pages/Resources'
import TestsPage from './pages/Tests'
import NotFoundPage from './pages/NotFound'

/**
 * App
 * Configures top-level router and route tree.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="meshtastic" element={<MeshtasticPage />} />
          <Route path="meshcore" element={<MeshCorePage />} />
          <Route path="reticulum" element={<ReticulumPage />} />
          <Route path="pmr446" element={<PMRPage />} />
          <Route path="cb" element={<CBPage />} />
          <Route path="systems" element={<SystemsPage />} />
          <Route path="plan" element={<PlanPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="eaa" element={<EAAPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
