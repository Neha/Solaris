# Solaris

Animated solar system web app with planet info, astrology data, and sky events.

## Tech Stack

- React 18 + Vite (no TypeScript, no testing framework)
- Plain CSS with custom properties and keyframe animations
- No state management library — React hooks only (useState, useEffect, useMemo, useCallback, useRef)
- i18n: custom context-based system (English + Hindi)

## Commands

- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Project Structure

```
src/
  App.jsx          — main app component (solar system, controls, detail panel)
  App.css          — all app styles
  planets.js       — planet data (colors, sizes, orbit radii)
  planetPositions.js — orbital angle calculations
  astrologyData.js — English & Hindu astrology data
  skyEvents.js     — astronomical events data
  EventsDrawer.jsx — sky events calendar drawer
  index.css        — global/reset styles
  main.jsx         — entry point
  i18n/
    LanguageContext.jsx  — language provider & hook
    translations.js      — UI string translations
    planetsHiContent.js  — Hindi planet content
public/
  favicon.svg
  space.mp3        — background music (user-supplied)
```

## Code Conventions

- Plain JavaScript (.js/.jsx), no TypeScript
- No semicolons (Vite default)
- Functional components only, no class components
- CSS animations via `--orbit-speed` and `--orbit-duration` custom properties
- Theme (light/dark) and language saved in localStorage and URL params
- All interactive elements have ARIA labels for accessibility
