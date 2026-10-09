/** Approximate geocentric ecliptic longitudes → zodiac signs (for playful transit-style copy). */

const J2000_EPOCH = new Date('2000-01-01T12:00:00.000Z').getTime()
const DAY_MS = 86400000

/** Mean longitude at J2000 + deg/day (simplified; not for precision ephemeris). */
const MEAN_L0 = {
  Sun: 280.466,
  Moon: 218.316,
  Mercury: 252.251,
  Venus: 181.98,
  Mars: 355.433,
  Jupiter: 34.352,
  Saturn: 50.077,
  Uranus: 314.055,
  Neptune: 304.349,
}

const MEAN_RATE = {
  Sun: 0.9856473604,
  Moon: 13.1763965268,
  Mercury: 4.0923988,
  Venus: 1.6021302244,
  Mars: 0.5240207766,
  Jupiter: 0.0830853001,
  Saturn: 0.0334442282,
  Uranus: 0.011725806,
  Neptune: 0.005995147,
}

export const ASTRO_BODIES = [
  'Sun',
  'Moon',
  'Mercury',
  'Venus',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
]

function normDeg(deg) {
  let x = deg % 360
  if (x < 0) x += 360
  return x
}

function daysSinceJ2000(date) {
  return (date.getTime() - J2000_EPOCH) / DAY_MS
}

/** Rough Lahiri-style ayanamsha (degrees) for Vedic rashi. */
export function approximateAyanamsha(date) {
  const years = daysSinceJ2000(date) / 365.25
  return 24.11 + years * 0.01396
}

export function meanLongitude(body, date) {
  const l0 = MEAN_L0[body]
  const rate = MEAN_RATE[body]
  if (l0 == null || rate == null) return 0
  return normDeg(l0 + rate * daysSinceJ2000(date))
}

export function longitudeToSignIndex(longitudeDeg) {
  return Math.floor(normDeg(longitudeDeg) / 30) % 12
}

export function getPlacementsForDate(date) {
  const ayan = approximateAyanamsha(date)
  const out = {}
  ASTRO_BODIES.forEach((body) => {
    const lon = meanLongitude(body, date)
    const sidLon = normDeg(lon - ayan)
    out[body] = {
      longitude: lon,
      tropicalSign: longitudeToSignIndex(lon),
      siderealSign: longitudeToSignIndex(sidLon),
    }
  })
  return out
}

export const SIGN_KEYS = [
  'signAries',
  'signTaurus',
  'signGemini',
  'signCancer',
  'signLeo',
  'signVirgo',
  'signLibra',
  'signScorpio',
  'signSagittarius',
  'signCapricorn',
  'signAquarius',
  'signPisces',
]

export const RASHI_KEYS = [
  'rashiMesha',
  'rashiVrishabha',
  'rashiMithuna',
  'rashiKarka',
  'rashiSimha',
  'rashiKanya',
  'rashiTula',
  'rashiVrishchika',
  'rashiDhanu',
  'rashiMakara',
  'rashiKumbha',
  'rashiMeena',
]
