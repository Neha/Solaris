import { useMemo, useState, useEffect } from 'react'
import { getUpcomingSkyEvents, parseEventDate, skyEventsByDateKey } from './skyEvents'
import { planetDisplayName, tReplace } from './i18n/translations.js'

function pad2(n) {
  return String(n).padStart(2, '0')
}

function isoFromYmd(y, m0, d) {
  return `${y}-${pad2(m0 + 1)}-${pad2(d)}`
}

function buildMonthCells(year, month0) {
  const first = new Date(year, month0, 1)
  const startWeekday = first.getDay()
  const daysInMonth = new Date(year, month0 + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

export function EventsDrawer({ open, onClose, t, dateLocale, locale }) {
  const [view, setView] = useState(() => {
    const n = new Date()
    return { y: n.getFullYear(), m: n.getMonth() }
  })
  const [selectedIso, setSelectedIso] = useState(null)

  const byDate = useMemo(() => skyEventsByDateKey(), [])
  const upcoming = useMemo(() => getUpcomingSkyEvents(new Date()), [open])
  const nextEvent = upcoming[0] ?? null

  useEffect(() => {
    if (!open) return
    const up = getUpcomingSkyEvents(new Date())
    if (up[0]) {
      const d = parseEventDate(up[0].date)
      setView({ y: d.getFullYear(), m: d.getMonth() })
    }
    setSelectedIso(null)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const weekdays = useMemo(() => {
    const ref = new Date(2024, 0, 7)
    return Array.from({ length: 7 }, (_, i) => {
      const x = new Date(ref)
      x.setDate(ref.getDate() + i)
      return x.toLocaleDateString(dateLocale, { weekday: 'short' })
    })
  }, [dateLocale])

  const monthLabel = useMemo(() => {
    const d = new Date(view.y, view.m, 1)
    return d.toLocaleDateString(dateLocale, { month: 'long', year: 'numeric' })
  }, [view.y, view.m, dateLocale])

  const cells = useMemo(() => buildMonthCells(view.y, view.m), [view.y, view.m])

  const eventTitle = (e) => {
    if (e.kind === 'opposition') {
      const name = planetDisplayName(e.planet, t)
      return tReplace(t, 'eventsTitleOpposition', { planet: name })
    }
    const [a, b] = e.bodies
    return tReplace(t, 'eventsTitleConjunction', {
      a: planetDisplayName(a, t),
      b: planetDisplayName(b, t),
    })
  }

  const blurb = (e) => (locale === 'hi' ? e.blurb.hi : e.blurb.en)

  return (
    <div
      className={`events-drawer ${open ? 'events-drawer--open' : ''}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="events-drawer-backdrop"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        aria-label={t('closePanel')}
      />
      <section
        id="events-panel"
        className="events-section"
        role="dialog"
        aria-modal="true"
        aria-labelledby="events-heading"
      >
        <div className="events-drawer-header">
          <h2 id="events-heading" className="events-section-title">
            {t('eventsTitle')}
          </h2>
          <button type="button" className="timeline-hide-btn" onClick={onClose}>
            <span>{t('eventsHide')}</span>
          </button>
        </div>
        <p className="events-section-help">{t('eventsHelp')}</p>

        {upcoming.length === 0 && (
          <p className="events-empty-note" role="status">
            {t('eventsEmpty')}
          </p>
        )}

        {nextEvent && (
          <div className="events-next-highlight">
            <div className="events-next-label">{t('eventsNextUp')}</div>
            <div className="events-next-title">{eventTitle(nextEvent)}</div>
            <div className="events-next-date">
              {parseEventDate(nextEvent.date).toLocaleDateString(dateLocale, {
                dateStyle: 'medium',
              })}
            </div>
            <p className="events-next-blurb">{blurb(nextEvent)}</p>
          </div>
        )}

        <div className="events-cal-nav">
          <button
            type="button"
            className="events-cal-nav-btn"
            onClick={() =>
              setView((v) => {
                const nm = v.m - 1
                if (nm < 0) return { y: v.y - 1, m: 11 }
                return { y: v.y, m: nm }
              })
            }
            aria-label={t('eventsPrevMonth')}
          >
            ‹
          </button>
          <span className="events-cal-month" aria-live="polite">
            {monthLabel}
          </span>
          <button
            type="button"
            className="events-cal-nav-btn"
            onClick={() =>
              setView((v) => {
                const nm = v.m + 1
                if (nm > 11) return { y: v.y + 1, m: 0 }
                return { y: v.y, m: nm }
              })
            }
            aria-label={t('eventsNextMonth')}
          >
            ›
          </button>
        </div>

        <div className="events-cal" role="grid" aria-label={t('eventsCalendarAria')}>
          <div className="events-cal-weekdays">
            {weekdays.map((w, i) => (
              <div key={`wd-${i}`} className="events-cal-wd">
                {w}
              </div>
            ))}
          </div>
          <div className="events-cal-cells">
            {cells.map((day, i) => {
              if (day == null) {
                return <div key={`e-${i}`} className="events-cal-cell events-cal-cell--empty" />
              }
              const iso = isoFromYmd(view.y, view.m, day)
              const dayEvents = byDate.get(iso)
              const has = dayEvents && dayEvents.length > 0
              const isSel = selectedIso === iso
              const dateStr = parseEventDate(iso).toLocaleDateString(dateLocale, {
                dateStyle: 'medium',
              })
              return (
                <button
                  key={iso}
                  type="button"
                  className={`events-cal-cell ${has ? 'events-cal-cell--event' : ''} ${
                    isSel ? 'events-cal-cell--selected' : ''
                  }`}
                  onClick={() => setSelectedIso(iso)}
                  aria-pressed={isSel}
                  aria-label={
                    has
                      ? tReplace(t, 'eventsDayAriaHas', { date: dateStr })
                      : tReplace(t, 'eventsDayAria', { date: dateStr })
                  }
                >
                  <span className="events-cal-daynum">{day}</span>
                  {has && <span className="events-cal-dot" aria-hidden />}
                </button>
              )
            })}
          </div>
        </div>

        {selectedIso && byDate.get(selectedIso)?.length > 0 && (
          <ul className="events-day-list">
            {byDate.get(selectedIso).map((e) => (
              <li key={e.id} className="events-day-item">
                <div className="events-day-item-title">{eventTitle(e)}</div>
                <p className="events-day-item-blurb">{blurb(e)}</p>
              </li>
            ))}
          </ul>
        )}

        {upcoming.length > 1 && (
          <div className="events-later">
            <div className="events-later-label">{t('eventsLater')}</div>
            <ul className="events-later-list">
              {upcoming.slice(1).map((e) => (
                <li key={e.id} className="events-later-item">
                  <time className="events-later-date" dateTime={e.date}>
                    {parseEventDate(e.date).toLocaleDateString(dateLocale, {
                      dateStyle: 'medium',
                    })}
                  </time>
                  <span className="events-later-title">{eventTitle(e)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="events-disclaimer">{t('eventsDisclaimer')}</p>
      </section>
    </div>
  )
}
