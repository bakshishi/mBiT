# mBiT.pm — Mesh Bydgoszcz i Toruń

Production-ready React + TypeScript site focusing on emergency communications (Meshtastic, MeshCore, Reticulum, PMR446, CB).

Tech
- React 18, react-router (HashRouter), Tailwind CSS, lucide-react, shadcn UI available (not modified).
- Accessibility-first: Skip link, keyboard navigation, focus rings, ARIA labels.
- Mobile-first, performant, minimal JS.

Development
- npm run dev (already configured in project)
- Live preview runs in iframe with esbuild.

Structure
- Components: Layout, Header, Footer, CookieBanner, SkipLink, CopyField.
- Pages: Home, Meshtastic, MeshCore, Reticulum, PMR446, CB, Systems, Plan, Privacy, Cookies, Accessibility, EAA, NotFound.

Branding
- Gradient primary: #667eea → #764ba2
- Motto: Connectivity Without Limits

WCAG & GDPR
- Semantic headings, skip link, focus indicators, alt text, keyboard nav.
- Cookie banner stores consent in localStorage; no tracking by default.
- Separate pages for Privacy, Cookies, Accessibility, EAA.

Deployment Checklist (server/CDN)
- HTTPS only (TLS, HSTS), HTTP->HTTPS redirect.
- Static caching (immutable for hashed assets), gzip/br compression.
- CSP (default-src 'self'; img-src 'self' https: data:; script-src 'self'; style-src 'self' 'unsafe-inline').
- Add sitemap.xml and robots.txt.
- Preconnect to required external origins.
- Regular accessibility audits (WAVE, axe).

Notes
- Images use placeholder generator: https://sider.ai/autoimage/...
- CLI commands include EU_868 + LONG_FAST with hop limit 3.
- EU rule: duty cycle 10% (max 6 min/hour).