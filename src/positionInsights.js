import { ORBIT_PERIOD_DAYS } from './planetPositions.js'

function normAngle(deg) {
  return ((deg % 360) + 360) % 360
}

/** Signed difference planet − Earth on clockwise orbit (−180…180). */
export function angleDiffFromEarth(planetAngle, earthAngle) {
  let d = normAngle(planetAngle) - normAngle(earthAngle)
  if (d > 180) d -= 360
  if (d < -180) d += 360
  return d
}

/** 0–11 for 12 o'clock … 11 o'clock on the diagram (0° = top). */
export function angleToClockHour(angleDeg) {
  const a = normAngle(angleDeg)
  const hour = Math.round(a / 30) % 12
  return hour === 0 ? 12 : hour
}

/** Translation key for how far around the lap (8 bands). */
export function orbitProgressKey(angleDeg) {
  const p = normAngle(angleDeg) / 360
  if (p < 0.08 || p >= 0.92) return 'orbitProgressStart'
  if (p < 0.25) return 'orbitProgressEarly'
  if (p < 0.42) return 'orbitProgressQuarter'
  if (p < 0.58) return 'orbitProgressHalf'
  if (p < 0.75) return 'orbitProgressPastHalf'
  if (p < 0.92) return 'orbitProgressLate'
  return 'orbitProgressStart'
}

export function orbitProgressPercent(angleDeg) {
  return Math.round(normAngle(angleDeg) / 3.6)
}

/** Key + vars for position vs Earth, or null for Earth. */
export function relativeEarthKey(planetName, planetAngle, earthAngle) {
  if (planetName === 'Earth') return { key: 'relativeEarthYou', vars: {} }
  const d = angleDiffFromEarth(planetAngle, earthAngle)
  const ad = Math.abs(d)
  if (ad <= 12) return { key: 'relativeEarthAligned', vars: {} }
  if (ad <= 35) {
    return d > 0
      ? { key: 'relativeEarthLittleAhead', vars: {} }
      : { key: 'relativeEarthLittleBehind', vars: {} }
  }
  if (ad <= 90) {
    return d > 0
      ? { key: 'relativeEarthAhead', vars: {} }
      : { key: 'relativeEarthBehind', vars: {} }
  }
  if (ad <= 150) {
    return d > 0
      ? { key: 'relativeEarthFarAhead', vars: {} }
      : { key: 'relativeEarthFarBehind', vars: {} }
  }
  return { key: 'relativeEarthOpposite', vars: {} }
}

const SPEED_KEY = {
  Mercury: 'speedBlurbMercury',
  Venus: 'speedBlurbVenus',
  Earth: 'speedBlurbEarth',
  Mars: 'speedBlurbMars',
  Jupiter: 'speedBlurbJupiter',
  Saturn: 'speedBlurbSaturn',
  Uranus: 'speedBlurbUranus',
  Neptune: 'speedBlurbNeptune',
}

export function planetSpeedBlurbKey(planetName) {
  return SPEED_KEY[planetName] ?? null
}

/** Human-ish lap length from period days. */
export function humanLapLabel(planetName, t) {
  const days = ORBIT_PERIOD_DAYS[planetName]
  if (!days) return ''
  if (planetName === 'Earth') return t('lapLengthEarth')
  if (days < 100) return tReplaceInline(t('lapLengthDays'), { days: Math.round(days) })
  if (days < 400) return tReplaceInline(t('lapLengthDays'), { days: Math.round(days) })
  const years = days / 365.25
  if (years < 2) return tReplaceInline(t('lapLengthYears'), { years: years.toFixed(1) })
  return tReplaceInline(t('lapLengthYears'), { years: Math.round(years).toString() })
}

function tReplaceInline(str, vars) {
  let s = str
  Object.entries(vars).forEach(([k, v]) => {
    s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
  })
  return s
}

/** Closest planet to Earth on the diagram (by angle). */
export function findBuddyPlanet(planetAngles) {
  const earth = planetAngles.Earth
  if (earth == null) return null
  let bestName = null
  let bestAbs = 181
  for (const [name, angle] of Object.entries(planetAngles)) {
    if (name === 'Earth') continue
    const ad = Math.abs(angleDiffFromEarth(angle, earth))
    if (ad < bestAbs) {
      bestAbs = ad
      bestName = name
    }
  }
  if (!bestName) return null
  return { name: bestName, diffDeg: bestAbs }
}

export function snapshotInsightKey(buddy) {
  if (!buddy) return 'snapshotSpread'
  if (buddy.diffDeg <= 12) return 'snapshotBuddyClose'
  if (buddy.diffDeg <= 40) return 'snapshotBuddyNear'
  return 'snapshotSpread'
}
