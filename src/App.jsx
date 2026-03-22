import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { PLANETS, SUN } from './planets'
import { ENGLISH_ASTROLOGY, HINDU_ASTROLOGY } from './astrologyData'
import { getPlanetAngleAtDate, ORBIT_PERIOD_DAYS } from './planetPositions'
import { useLanguage } from './i18n/LanguageContext.jsx'
import {
  getPositionLabelI18n,
  planetDisplayName,
  tReplace,
} from './i18n/translations.js'
import { getLocalizedPlanetBody } from './i18n/planetsHiContent.js'
import { EventsDrawer } from './EventsDrawer.jsx'
import './App.css'

/** Chevron toggles: up when closed (slide up to open), down when open (slide down to hide). */
function TimelineChevron({ open }) {
  return (
    <span
      className={`timeline-chevron ${open ? 'timeline-chevron--open' : ''}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          fill="currentColor"
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        />
      </svg>
    </span>
  )
}

function PanelCloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden focusable="false" className="panel-close-icon">
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  )
}

function AstroList({ items }) {
  const arr = Array.isArray(items) ? items : (items != null && items !== '' ? [items] : [])
  if (arr.length === 0) return null
  if (arr.length === 1) return <span>{arr[0]}</span>
  return (
    <ul className="detail-astro-list">
      {arr.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

function EnglishAstroBlock({ data, t }) {
  if (!data) return null
  const { rulingSign, element, modality, keyThemes, bodyParts, positiveTraits, challengingTraits, house, description } = data
  return (
    <div className="detail-astro-block">
      <dl className="detail-astro-dl">
        {rulingSign && (<><dt>{t('rulingSign')}</dt><dd>{rulingSign}</dd></>)}
        {element && (<><dt>{t('element')}</dt><dd>{element}</dd></>)}
        {modality && (<><dt>{t('modality')}</dt><dd>{modality}</dd></>)}
        {keyThemes?.length > 0 && (<><dt>{t('keyThemes')}</dt><dd><AstroList items={keyThemes} /></dd></>)}
        {bodyParts && (<><dt>{t('bodyParts')}</dt><dd>{bodyParts}</dd></>)}
        {positiveTraits && (<><dt>{t('positiveTraits')}</dt><dd><AstroList items={positiveTraits} /></dd></>)}
        {challengingTraits && (<><dt>{t('challengingTraits')}</dt><dd><AstroList items={challengingTraits} /></dd></>)}
        {house && (<><dt>{t('house')}</dt><dd>{house}</dd></>)}
      </dl>
      {description && <p className="detail-astro-desc">{description}</p>}
    </div>
  )
}

function HinduAstroBlock({ data, t }) {
  if (!data) return null
  const { sanskritName, rulingRashi, day, gemstone, metal, deity, significations, positiveEffects, negativeEffects, remedy, description } = data
  const rashiArr = Array.isArray(rulingRashi) ? rulingRashi : (rulingRashi ? [rulingRashi] : [])
  return (
    <div className="detail-astro-block">
      <dl className="detail-astro-dl">
        {sanskritName && (<><dt>{t('sanskritName')}</dt><dd>{sanskritName}</dd></>)}
        {rashiArr.length > 0 && (<><dt>{t('rulingRashi')}</dt><dd><AstroList items={rashiArr} /></dd></>)}
        {day && (<><dt>{t('day')}</dt><dd>{day}</dd></>)}
        {gemstone && (<><dt>{t('gemstone')}</dt><dd>{gemstone}</dd></>)}
        {metal && (<><dt>{t('metal')}</dt><dd>{metal}</dd></>)}
        {deity && (<><dt>{t('deity')}</dt><dd>{deity}</dd></>)}
        {significations && (<><dt>{t('significations')}</dt><dd><AstroList items={Array.isArray(significations) ? significations : [significations]} /></dd></>)}
        {positiveEffects && (<><dt>{t('positiveEffects')}</dt><dd><AstroList items={Array.isArray(positiveEffects) ? positiveEffects : [positiveEffects]} /></dd></>)}
        {negativeEffects && negativeEffects !== '—' && (<><dt>{t('negativeEffects')}</dt><dd><AstroList items={Array.isArray(negativeEffects) ? negativeEffects : [negativeEffects]} /></dd></>)}
        {remedy && remedy !== '—' && (<><dt>{t('remedy')}</dt><dd>{remedy}</dd></>)}
      </dl>
      {description && <p className="detail-astro-desc">{description}</p>}
    </div>
  )
}

function buildShareUrl({
  locale,
  theme,
  speed,
  placementDateTime,
  placementDetailsOpen,
  selectedPlanet,
  detailTab,
}) {
  const u = new URL(typeof window !== 'undefined' ? window.location.href : 'http://localhost/')
  u.search = ''
  const p = new URLSearchParams()
  p.set('lang', locale)
  p.set('theme', theme)
  p.set('speed', String(speed))
  if (placementDateTime) {
    const d = placementDateTime
    const y = d.getFullYear()
    const mo = String(d.getMonth() + 1).padStart(2, '0')
    const da = String(d.getDate()).padStart(2, '0')
    const h = String(d.getHours()).padStart(2, '0')
    const mi = String(d.getMinutes()).padStart(2, '0')
    p.set('at', `${y}-${mo}-${da}T${h}:${mi}`)
    if (placementDetailsOpen) p.set('positions', '1')
  }
  if (selectedPlanet) {
    p.set('planet', selectedPlanet.name)
    p.set('tab', detailTab)
  }
  u.search = p.toString()
  return u.toString()
}

const DAY_MS = 86400000

function formatDateLocal(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function formatTimeLocal(d) {
  const h = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  return `${h}:${mi}`
}

function clamp(n, lo, hi) {
  return Math.min(Math.max(n, lo), hi)
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (_) {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

function App() {
  const { locale, setLocale, t } = useLanguage()
  const dateLocale = locale === 'hi' ? 'hi-IN' : undefined

  const [speed, setSpeed] = useState(() => {
    if (typeof window === 'undefined') return 1
    try {
      const s = new URLSearchParams(window.location.search).get('speed')
      const n = Number(s)
      if (!Number.isNaN(n) && n >= 0.25 && n <= 3) return n
    } catch (_) {}
    return 1
  })
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const tp = new URLSearchParams(window.location.search).get('theme')
      if (tp === 'light' || tp === 'dark') return tp
    } catch (_) {}
    const saved = localStorage.getItem('solar-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [hoveredPlanet, setHoveredPlanet] = useState(null)
  const [popupRect, setPopupRect] = useState(null)
  const [selectedPlanet, setSelectedPlanet] = useState(null)
  const [detailTab, setDetailTab] = useState('details')
  const [placementDateTime, setPlacementDateTime] = useState(null)
  const [placementDetailsOpen, setPlacementDetailsOpen] = useState(false)
  const [placementDate, setPlacementDate] = useState(() => {
    const d = new Date()
    return d.toISOString().slice(0, 10)
  })
  const [placementTime, setPlacementTime] = useState(() => {
    const d = new Date()
    return d.toTimeString().slice(0, 5)
  })

  const timelineBounds = useMemo(() => {
    const now = new Date()
    const y = now.getFullYear()
    const start = new Date(y - 35, 0, 1, 0, 0, 0, 0)
    const end = new Date(y + 35, 11, 31, 23, 59, 59, 999)
    return {
      min: start.getTime(),
      max: end.getTime(),
      startYear: start.getFullYear(),
      endYear: end.getFullYear(),
    }
  }, [])

  const timelineSliderValue = useMemo(() => {
    const { min, max } = timelineBounds
    if (placementDateTime) return clamp(placementDateTime.getTime(), min, max)
    return clamp(Date.now(), min, max)
  }, [placementDateTime, timelineBounds])

  const handleTimelineInput = useCallback(
    (e) => {
      const ms = Number(e.target.value)
      const base = new Date(ms)
      let h = 12
      let minute = 0
      if (placementDateTime) {
        h = placementDateTime.getHours()
        minute = placementDateTime.getMinutes()
      } else {
        const parts = placementTime.split(':')
        h = parseInt(parts[0], 10)
        minute = parseInt(parts[1], 10)
        if (Number.isNaN(h)) h = 12
        if (Number.isNaN(minute)) minute = 0
      }
      base.setHours(h, minute, 0, 0)
      setPlacementDateTime(base)
      setPlacementDate(formatDateLocal(base))
      setPlacementTime(formatTimeLocal(base))
    },
    [placementDateTime, placementTime]
  )

  const [copyFeedback, setCopyFeedback] = useState(false)
  const [timelineOpen, setTimelineOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const urlHydratedRef = useRef(false)

  /** “Now” used for default orbit angles — set on load and refreshed when resuming animation after placement mode */
  const [animationEpoch, setAnimationEpoch] = useState(() => new Date())

  const hoveredForDisplay = useMemo(() => {
    if (!hoveredPlanet) return null
    if (locale !== 'hi') return hoveredPlanet
    return getLocalizedPlanetBody(hoveredPlanet.name, hoveredPlanet.name === 'Sun', hoveredPlanet)
  }, [hoveredPlanet, locale])

  const selectedForDisplay = useMemo(() => {
    if (!selectedPlanet) return null
    if (locale !== 'hi') return selectedPlanet
    return getLocalizedPlanetBody(selectedPlanet.name, selectedPlanet.name === 'Sun', selectedPlanet)
  }, [selectedPlanet, locale])

  const handlePlanetEnter = (planet, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoveredPlanet(planet)
    setPopupRect(rect)
  }

  const handlePlanetLeave = () => {
    setHoveredPlanet(null)
    setPopupRect(null)
  }

  const handleSunEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoveredPlanet(SUN)
    setPopupRect(rect)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!timelineOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setTimelineOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [timelineOpen])

  useEffect(() => {
    if (typeof window === 'undefined' || urlHydratedRef.current) return
    urlHydratedRef.current = true
    const params = new URLSearchParams(window.location.search)
    const at = params.get('at')
    if (at) {
      const m = at.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})$/)
      if (m) {
        const d = new Date(`${m[1]}T${m[2]}:00`)
        if (!Number.isNaN(d.getTime())) {
          setPlacementDate(m[1])
          setPlacementTime(m[2])
          setPlacementDateTime(d)
        }
      }
    }
    if (params.get('positions') === '1') {
      setPlacementDetailsOpen(true)
    }
    const planetName = params.get('planet')
    if (planetName) {
      const body = planetName === 'Sun' ? SUN : PLANETS.find((x) => x.name === planetName)
      if (body) {
        setSelectedPlanet(body)
        const tab = params.get('tab')
        if (tab === 'details' || tab === 'english' || tab === 'hindu') {
          setDetailTab(tab)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (selectedPlanet) setDetailTab('details')
  }, [selectedPlanet])

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem('solar-theme', next) } catch (_) {}
      return next
    })
  }

  const handleShowPlacement = () => {
    const date = new Date(`${placementDate}T${placementTime}:00`)
    if (Number.isNaN(date.getTime())) return
    setPlacementDateTime(date)
    setPlacementDetailsOpen(true)
  }

  const handleResumeAnimation = () => {
    setPlacementDateTime(null)
    setPlacementDetailsOpen(false)
    setAnimationEpoch(new Date())
  }

  const shareUrl = useMemo(
    () =>
      buildShareUrl({
        locale,
        theme,
        speed,
        placementDateTime,
        placementDetailsOpen,
        selectedPlanet,
        detailTab,
      }),
    [
      locale,
      theme,
      speed,
      placementDateTime,
      placementDetailsOpen,
      selectedPlanet,
      detailTab,
    ]
  )

  const handleCopyLink = useCallback(async () => {
    const ok = await copyTextToClipboard(shareUrl)
    if (ok) {
      setCopyFeedback(true)
      window.setTimeout(() => setCopyFeedback(false), 2000)
    }
  }, [shareUrl])

  return (
    <div className="app" data-theme={theme}>
      <div className="header-actions">
        <label className="lang-select-wrap">
          <span className="visually-hidden">{t('langLabel')}</span>
          <select
            className="lang-select"
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            aria-label={t('langLabel')}
          >
            <option value="en">{t('langEnglish')}</option>
            <option value="hi">{t('langHindi')}</option>
          </select>
        </label>
        <button
          type="button"
          className={`copy-link-labeled ${copyFeedback ? 'copied' : ''}`}
          onClick={handleCopyLink}
          title={copyFeedback ? t('linkCopied') : t('copyLink')}
          aria-label={copyFeedback ? t('linkCopied') : t('copyLink')}
        >
          {copyFeedback ? t('linkCopied') : t('copyLink')}
        </button>
        <button
          type="button"
          className="icon-btn theme-toggle"
          onClick={toggleTheme}
          title={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
          aria-label={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="main-content">
        <div className="top-section">
          <div className="header-left-inner">
            <h1>{t('appTitle')}</h1>
            <p className="subtitle">{t('subtitle')}</p>
          </div>
      <section className="placement-controls-section" aria-label={t('placementAriaLabel')}>
        <h2 className="placement-controls-panel-title">{t('dateTimeTitle')}</h2>
        <p className="placement-controls-expect">
          {t('dateTimeExpect')}
        </p>
        <div className="placement-controls-fields">
          <label htmlFor="placement-date" className="placement-label">{t('dateLabel')}</label>
          <input
            id="placement-date"
            type="date"
            value={placementDate}
            onChange={(e) => {
              const v = e.target.value
              setPlacementDate(v)
              if (placementDateTime) {
                const d = new Date(`${v}T${placementTime}:00`)
                if (!Number.isNaN(d.getTime())) setPlacementDateTime(d)
              }
            }}
            className="placement-input"
          />
          <label htmlFor="placement-time" className="placement-label">{t('timeLabel')}</label>
          <input
            id="placement-time"
            type="time"
            value={placementTime}
            onChange={(e) => {
              const v = e.target.value
              setPlacementTime(v)
              if (placementDateTime) {
                const d = new Date(`${placementDate}T${v}:00`)
                if (!Number.isNaN(d.getTime())) setPlacementDateTime(d)
              }
            }}
            className="placement-input"
          />
        </div>
        {!placementDateTime ? (
          <button type="button" className="placement-btn" onClick={handleShowPlacement}>
            {t('showPositions')}
          </button>
        ) : (
          <div className="placement-controls-actions">
            <span className="placement-info">
              {t('positionsAt')}{' '}
              {placementDateTime.toLocaleString(dateLocale, { dateStyle: 'medium', timeStyle: 'short' })}
            </span>
            {!placementDetailsOpen && (
              <button type="button" className="placement-btn" onClick={() => setPlacementDetailsOpen(true)}>
                {t('placementDetails')}
              </button>
            )}
            <button type="button" className="placement-btn placement-btn-resume" onClick={handleResumeAnimation}>
              {t('resumeAnimation')}
            </button>
          </div>
        )}
      </section>
        </div>

      <div className="solar-system-wrapper">
        <div className="solar-system" style={{ '--orbit-speed': speed }}>
        <div
          className="sun-wrapper"
          onMouseEnter={handleSunEnter}
          onMouseLeave={handlePlanetLeave}
          onClick={() => setSelectedPlanet(SUN)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setSelectedPlanet(SUN)}
          aria-label={t('viewDetailsSun')}
        >
          <div className="sun" aria-hidden="true" />
        </div>
        {PLANETS.map((planet, index) => {
          const isFrozen = placementDateTime != null
          const referenceDate = isFrozen ? placementDateTime : animationEpoch
          const angle = getPlanetAngleAtDate(planet.name, referenceDate)
          return (
          <div
            key={planet.name}
            className={`orbit ${isFrozen ? 'orbit-frozen' : ''}`}
            style={{
              '--orbit-radius': `${planet.radius}%`,
              '--orbit-duration': `${planet.duration}s`,
              '--planet-size': `${planet.size}px`,
              '--planet-color': planet.color,
              zIndex: 10 - index,
              ...(isFrozen
                ? { transform: `rotate(${angle}deg)` }
                : { '--orbit-start-angle': `${angle}deg` }),
            }}
          >
            <div
              className="planet-wrapper"
              onMouseEnter={(e) => handlePlanetEnter(planet, e)}
              onMouseLeave={handlePlanetLeave}
              onClick={() => setSelectedPlanet(planet)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedPlanet(planet)}
              aria-label={tReplace(t, 'viewDetailsPlanetAria', {
                name: planetDisplayName(planet.name, t),
              })}
            >
              <div
                className="planet"
                role="img"
                aria-label={planetDisplayName(planet.name, t)}
                title={planetDisplayName(planet.name, t)}
              >
                {planet.name === 'Saturn' && <span className="ring" />}
              </div>
            </div>
          </div>
          )
        })}
      </div>

      </div>
      </div>

      {placementDateTime != null && placementDetailsOpen && (
        <aside className="placement-details-panel" aria-label={t('planetPositionsTitle')}>
          <div className="placement-details-panel-header">
            <h2 className="placement-details-title">{t('planetPositionsTitle')}</h2>
            <button
              type="button"
              className="placement-details-panel-close"
              onClick={() => setPlacementDetailsOpen(false)}
              aria-label={t('closePanel')}
            >
              <PanelCloseIcon />
            </button>
          </div>
          <p className="placement-details-subtitle">
            {t('placementDetailsSubtitle')}
          </p>
          <ul className="placement-details-list">
            {PLANETS.map((planet) => {
              const angle = getPlanetAngleAtDate(planet.name, placementDateTime)
              const periodDays = ORBIT_PERIOD_DAYS[planet.name]
              return (
                <li key={planet.name} className="placement-details-row">
                  <span className="placement-details-name">{planetDisplayName(planet.name, t)}</span>
                  <span className="placement-details-angle">{angle.toFixed(1)}°</span>
                  <span className="placement-details-position">{getPositionLabelI18n(angle, t)}</span>
                  {periodDays != null && (
                    <span className="placement-details-period" title={t('orbitalPeriodDays')}>
                      {periodDays} d
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </aside>
      )}

      {hoveredPlanet && popupRect && hoveredForDisplay && (
        <div
          className="planet-popup"
          style={{
            left: popupRect.left + popupRect.width / 2,
            top: popupRect.top - 8,
          }}
          aria-live="polite"
        >
          <div className="planet-popup-name">{planetDisplayName(hoveredPlanet.name, t)}</div>
          <dl className="planet-popup-props">
            <div>
              <dt>{t('distanceFromSun')}</dt>
              <dd>{hoveredForDisplay.distance}</dd>
            </div>
            <div>
              <dt>{t('diameter')}</dt>
              <dd>{hoveredForDisplay.diameter}</dd>
            </div>
            <div>
              <dt>{t('orbitalPeriod')}</dt>
              <dd>{hoveredForDisplay.orbitPeriod}</dd>
            </div>
            <div>
              <dt>{hoveredPlanet.name === 'Sun' ? t('planetsLabel') : t('moonsLabel')}</dt>
              <dd>{hoveredForDisplay.moons}</dd>
            </div>
          </dl>
        </div>
      )}

      {selectedPlanet && selectedForDisplay && (
        <>
          <button
            type="button"
            className="detail-panel-backdrop"
            onClick={() => setSelectedPlanet(null)}
            aria-label={t('closePanel')}
          />
          <aside
            className="detail-panel"
            aria-label={`${planetDisplayName(selectedPlanet.name, t)} — ${t('tabDetails')}`}
          >
            <div className="detail-panel-header">
              <h2 className="detail-panel-title">{planetDisplayName(selectedPlanet.name, t)}</h2>
              <button
                type="button"
                className="detail-panel-close"
                onClick={() => setSelectedPlanet(null)}
                aria-label={t('closePanel')}
              >
                <PanelCloseIcon />
              </button>
            </div>
            <div className="detail-panel-tabs">
              <button
                type="button"
                className={`detail-tab ${detailTab === 'details' ? 'active' : ''}`}
                onClick={() => setDetailTab('details')}
                aria-selected={detailTab === 'details'}
              >
                {t('tabDetails')}
              </button>
              <button
                type="button"
                className={`detail-tab ${detailTab === 'english' ? 'active' : ''}`}
                onClick={() => setDetailTab('english')}
                aria-selected={detailTab === 'english'}
              >
                {t('tabEnglishAstro')}
              </button>
              <button
                type="button"
                className={`detail-tab ${detailTab === 'hindu' ? 'active' : ''}`}
                onClick={() => setDetailTab('hindu')}
                aria-selected={detailTab === 'hindu'}
              >
                {t('tabHinduAstro')}
              </button>
            </div>
            <div className="detail-panel-body">
              {detailTab === 'details' && (
                <>
              <section className="detail-section">
                <h3>{t('appearance')}</h3>
                <p>{selectedForDisplay.appearance}</p>
              </section>
              <section className="detail-section">
                <h3>{t('temperature')}</h3>
                <p>
                  {t('tempMinMax')}: {selectedForDisplay.tempMin} · {t('tempMaxLabel')}:{' '}
                  {selectedForDisplay.tempMax}
                </p>
              </section>
              <section className="detail-section">
                <h3>{t('properties')}</h3>
                <dl className="detail-props">
                  <div>
                    <dt>{t('distanceFromSun')}</dt>
                    <dd>{selectedForDisplay.distance}</dd>
                  </div>
                  <div>
                    <dt>{t('diameter')}</dt>
                    <dd>{selectedForDisplay.diameter}</dd>
                  </div>
                  <div>
                    <dt>{t('orbitalPeriod')}</dt>
                    <dd>{selectedForDisplay.orbitPeriod}</dd>
                  </div>
                  <div>
                    <dt>{selectedPlanet.name === 'Sun' ? t('planetsLabel') : t('moonsLabel')}</dt>
                    <dd>{selectedForDisplay.moons}</dd>
                  </div>
                  <div>
                    <dt>{t('mass')}</dt>
                    <dd>{selectedForDisplay.mass}</dd>
                  </div>
                  <div>
                    <dt>{t('surfaceGravity')}</dt>
                    <dd>{selectedForDisplay.gravity}</dd>
                  </div>
                  <div>
                    <dt>
                      {selectedPlanet.name === 'Sun' ? t('rotationPeriod') : t('lengthOfDay')}
                    </dt>
                    <dd>{selectedForDisplay.dayLength}</dd>
                  </div>
                </dl>
              </section>
              <section className="detail-section">
                <h3>{t('atmosphere')}</h3>
                <p>{selectedForDisplay.atmosphere}</p>
              </section>
              <section className="detail-section">
                <h3>{t('discovery')}</h3>
                <p>{selectedForDisplay.discovered}</p>
              </section>
              {selectedForDisplay.facts && selectedForDisplay.facts.length > 0 && (
                <section className="detail-section detail-section-facts">
                  <h3>{t('interestingFacts')}</h3>
                  <ul className="detail-facts">
                    {selectedForDisplay.facts.map((fact, i) => (
                      <li key={i}>{fact}</li>
                    ))}
                  </ul>
                </section>
              )}
                </>
              )}
              {detailTab === 'english' && (
                <section className="detail-section detail-section-astrology">
                  <EnglishAstroBlock data={ENGLISH_ASTROLOGY[selectedPlanet.name]} t={t} />
                </section>
              )}
              {detailTab === 'hindu' && (
                <section className="detail-section detail-section-astrology">
                  <HinduAstroBlock data={HINDU_ASTROLOGY[selectedPlanet.name]} t={t} />
                </section>
              )}
            </div>
          </aside>
        </>
      )}

      <div className="orbit-controls">
        <div className="orbit-controls-toggles">
          <button
            type="button"
            className="timeline-open-btn"
            onClick={() => {
              setEventsOpen(false)
              setTimelineOpen((o) => !o)
            }}
            aria-expanded={timelineOpen}
            aria-controls="timeline-panel"
          >
            <TimelineChevron open={timelineOpen} />
            <span>{t('timelineOpenLabel')}</span>
          </button>
          <button
            type="button"
            className="events-open-btn"
            onClick={() => {
              setTimelineOpen(false)
              setEventsOpen((o) => !o)
            }}
            aria-expanded={eventsOpen}
            aria-controls="events-panel"
          >
            {t('eventsOpenLabel')}
          </button>
        </div>
        <div className="orbit-controls-main">
          <p className="app-footer">
            {t('footerText')}
          </p>
          <div className="orbit-controls-slider">
            <label htmlFor="speed" className="speed-label">
              {t('orbitSpeed')}
            </label>
            <input
              id="speed"
              type="range"
              min="0.25"
              max="3"
              step="0.25"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="speed-slider"
            />
            <span className="speed-value">{speed}x</span>
          </div>
        </div>
      </div>

      <EventsDrawer
        open={eventsOpen}
        onClose={() => setEventsOpen(false)}
        t={t}
        dateLocale={dateLocale}
        locale={locale}
      />

      <div
        className={`timeline-drawer ${timelineOpen ? 'timeline-drawer--open' : ''}`}
        aria-hidden={!timelineOpen}
      >
        <button
          type="button"
          className="timeline-drawer-backdrop"
          onClick={() => setTimelineOpen(false)}
          tabIndex={timelineOpen ? 0 : -1}
          aria-label={t('closePanel')}
        />
        <section
          id="timeline-panel"
          className="timeline-section"
          role="dialog"
          aria-modal="true"
          aria-labelledby="timeline-heading"
        >
          <div className="timeline-drawer-header">
            <h2 id="timeline-heading" className="timeline-section-title">
              {t('timelineTitle')}
            </h2>
            <button
              type="button"
              className="timeline-hide-btn"
              onClick={() => setTimelineOpen(false)}
            >
              <TimelineChevron open />
              <span>{t('timelineHide')}</span>
            </button>
          </div>
          <p className="timeline-section-help">{t('timelineHelp')}</p>
          <div className="timeline-current-date" aria-live="polite">
            {placementDateTime
              ? placementDateTime.toLocaleString(dateLocale, {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })
              : t('timelineLiveHint')}
          </div>
          <div className="timeline-scrubber-wrap">
            <input
              id="timeline-scrubber"
              type="range"
              min={timelineBounds.min}
              max={timelineBounds.max}
              step={DAY_MS}
              value={timelineSliderValue}
              onChange={handleTimelineInput}
              className="timeline-scrubber"
              aria-label={t('timelineAriaLabel')}
            />
          </div>
          <div className="timeline-year-labels">
            <span>{timelineBounds.startYear}</span>
            <span>{timelineBounds.endYear}</span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
