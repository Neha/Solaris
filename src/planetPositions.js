// Orbital period in Earth days (approximate sidereal) for position calculation
const ORBIT_PERIOD_DAYS = {
  Mercury: 88,
  Venus: 224.7,
  Earth: 365.25,
  Mars: 687,
  Jupiter: 4332.6,
  Saturn: 10759.2,
  Uranus: 30688.5,
  Neptune: 60182,
}

const J2000_EPOCH = new Date('2000-01-01T12:00:00.000Z').getTime()

/**
 * Get angle in degrees (0–360) for a planet's position in its orbit at the given date/time.
 * 0° = planet at top of orbit (12 o'clock). Uses simple circular orbit model.
 */
export function getPlanetAngleAtDate(planetName, date) {
  const periodDays = ORBIT_PERIOD_DAYS[planetName]
  if (!periodDays) return 0
  const ms = date.getTime() - J2000_EPOCH
  const days = ms / (1000 * 60 * 60 * 24)
  const angle = ((days / periodDays) * 360) % 360
  return angle >= 0 ? angle : angle + 360
}

export { ORBIT_PERIOD_DAYS }

/** Human-readable position from angle (0° = top, clockwise). */
export function getPositionLabel(angleDeg) {
  const a = ((angleDeg % 360) + 360) % 360
  if (a < 22.5 || a >= 337.5) return 'Top (0°)'
  if (a < 67.5) return 'Top-right (45°)'
  if (a < 112.5) return 'Right (90°)'
  if (a < 157.5) return 'Bottom-right (135°)'
  if (a < 202.5) return 'Bottom (180°)'
  if (a < 247.5) return 'Bottom-left (225°)'
  if (a < 292.5) return 'Left (270°)'
  return 'Top-left (315°)'
}
