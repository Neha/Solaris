/**
 * Curated approximate dates for stargazing (geocentric; local visibility varies).
 * Refresh periodically from almanacs / planetarium software.
 */

export const SKY_EVENTS = [
  {
    id: 'ven-jup-2025',
    date: '2025-11-12',
    kind: 'conjunction',
    bodies: ['Venus', 'Jupiter'],
    blurb: {
      en:
        'Venus and Jupiter meet in the morning sky. Two bright “stars” close together — easy with the naked eye.',
      hi:
        'शुक्र और बृहस्पति सुबह के आकाश में नज़दीक दिखेंगे। दो उज्ज्वल बिंदु — बिना उपकरण के भी देखे जा सकते हैं।',
    },
  },
  {
    id: 'mars-opp-2027',
    date: '2027-02-19',
    kind: 'opposition',
    planet: 'Mars',
    blurb: {
      en:
        'Mars is opposite the Sun: closest and brightest for the year, rising around sunset and visible all night.',
      hi:
        'मंगल सूर्य के विपरीत: साल में सबसे नज़दीक और उज्ज्वल, सूर्यास्त के आसपास उगकर रात भर दिखाई देगा।',
    },
  },
  {
    id: 'sat-opp-2026',
    date: '2026-09-21',
    kind: 'opposition',
    planet: 'Saturn',
    blurb: {
      en:
        'Saturn at opposition — the ringed planet is well placed for telescopes and steady binoculars.',
      hi:
        'शनि विरोध पर — वलयों वाला ग्रह दूरबीन और स्थिर दूरदर्शी के लिए अच्छी स्थिति में।',
    },
  },
  {
    id: 'jup-opp-2026',
    date: '2026-11-07',
    kind: 'opposition',
    planet: 'Jupiter',
    blurb: {
      en:
        'Jupiter at opposition: the largest planet dominates the sky; moons visible in small scopes.',
      hi:
        'बृहस्पति विरोध पर: सबसे बड़ा ग्रह आकाश में छाया रहेगा; छोटी दूरबीन में चंद्रमा दिख सकते हैं।',
    },
  },
  {
    id: 'mer-ven-2026',
    date: '2026-06-05',
    kind: 'conjunction',
    bodies: ['Mercury', 'Venus'],
    blurb: {
      en:
        'Mercury and Venus pair low in the twilight. Use a clear western horizon and look soon after sunset.',
      hi:
        'बुध और शुक्र गोधूलि में नीचे नज़दीक। साफ़ पश्चिमी क्षितिज और सूर्यास्त के तुरंत बाद देखें।',
    },
  },
]

export function parseEventDate(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number)
  return new Date(y, m - 1, d, 12, 0, 0, 0)
}

export function getUpcomingSkyEvents(now = new Date()) {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  return [...SKY_EVENTS]
    .filter((e) => parseEventDate(e.date).getTime() >= start.getTime())
    .sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())
}

export function skyEventsByDateKey() {
  const map = new Map()
  for (const e of SKY_EVENTS) {
    const list = map.get(e.date) ?? []
    list.push(e)
    map.set(e.date, list)
  }
  return map
}
