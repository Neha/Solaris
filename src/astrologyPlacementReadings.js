import { SIGN_KEYS, RASHI_KEYS } from './zodiacPlacements.js'

const PLANET_FOCUS_KEY = {
  Sun: 'astroFocusSun',
  Moon: 'astroFocusMoon',
  Mercury: 'astroFocusMercury',
  Venus: 'astroFocusVenus',
  Mars: 'astroFocusMars',
  Jupiter: 'astroFocusJupiter',
  Saturn: 'astroFocusSaturn',
  Uranus: 'astroFocusUranus',
  Neptune: 'astroFocusNeptune',
}

const SIGN_THEME_KEY = [
  'signThemeAries',
  'signThemeTaurus',
  'signThemeGemini',
  'signThemeCancer',
  'signThemeLeo',
  'signThemeVirgo',
  'signThemeLibra',
  'signThemeScorpio',
  'signThemeSagittarius',
  'signThemeCapricorn',
  'signThemeAquarius',
  'signThemePisces',
]

/** Broad “sky weather” headline from Sun + Moon signs only. */
export function getAstroMoodHeadline(placements, t, tReplace) {
  const sun = placements.Sun?.tropicalSign ?? 0
  const moon = placements.Moon?.tropicalSign ?? 0
  const sunSign = t(SIGN_KEYS[sun])
  const moonSign = t(SIGN_KEYS[moon])
  if (sun === moon) {
    return tReplace('astroMoodSameSign', { sign: sunSign })
  }
  return tReplace('astroMoodSunMoon', { sunSign, moonSign })
}

export function getWesternReading(body, tropicalSignIndex, t, tReplace, planetLabel) {
  const sign = t(SIGN_KEYS[tropicalSignIndex])
  const focus = t(PLANET_FOCUS_KEY[body])
  const theme = t(SIGN_THEME_KEY[tropicalSignIndex])
  return tReplace('astroWesternLine', {
    planet: planetLabel,
    sign,
    focus,
    theme,
  })
}

export function getVedicReading(body, siderealSignIndex, t, tReplace, planetLabel) {
  const rashi = t(RASHI_KEYS[siderealSignIndex])
  const focus = t(PLANET_FOCUS_KEY[body])
  return tReplace('astroVedicLine', {
    planet: planetLabel,
    rashi,
    focus,
  })
}
