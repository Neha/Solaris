/** UI strings — English (default) and Hindi */
export const translations = {
  en: {
    appTitle: 'Solaris',
    subtitle: 'Hover for name · Click for full details',
    langLabel: 'Language',
    langEnglish: 'English',
    langHindi: 'हिंदी',

    placementAriaLabel: 'Set date and time for planet positions',
    dateTimeTitle: 'Date & time',
    dateTimeExpect:
      'Pick any moment in time — we’ll freeze the orbits and explain where each world is on the diagram, in plain English.',
    dateLabel: 'Date',
    timeLabel: 'Time',
    showPositions: 'Show positions',
    positionsAt: 'Positions at',
    placementDetails: 'Placement details',
    resumeAnimation: 'Resume animation',

    timelineTitle: 'Timeline',
    timelineHelp:
      'Drag across months and years — orbits use sidereal periods from a J2000 model. Your chosen time of day is kept while you scrub.',
    timelineAriaLabel: 'Scrub date across years',
    timelineLiveHint: 'Live animation — drag to pick a date and freeze orbits',
    timelineOpenLabel: 'Timeline',
    timelineHide: 'Hide',

    planetPositionsTitle: 'Where were they?',
    placementDetailsSubtitle:
      'This is a simplified cartoon orbit (not a star chart). Each row tells you how far a planet has gone around its loop and how it compares to Earth.',
    placementSnapshotTitle: 'Quick read for this moment',
    placementTechLabel: 'Diagram numbers',
    placementPercentAround: '{percent}% around this lap',
    clockOnDiagram: 'On the picture, about {hour} o’clock (Sun in the middle)',
    lapLengthEarth: 'One lap = 1 year — your home track',
    lapLengthDays: 'One full lap takes about {days} Earth days',
    lapLengthYears: 'One full lap takes about {years} Earth years',

    orbitProgressStart: 'Just starting a fresh lap around the Sun',
    orbitProgressEarly: 'Still early on this trip around the Sun',
    orbitProgressQuarter: 'About a quarter of the way around',
    orbitProgressHalf: 'Roughly halfway around its orbit',
    orbitProgressPastHalf: 'Past halfway — on the long stretch home',
    orbitProgressLate: 'Almost back to where this lap began',

    relativeEarthYou: 'This is us — the blue dot’s track',
    relativeEarthAligned: 'Nearly lined up with Earth on the diagram',
    relativeEarthLittleAhead: 'A little ahead of Earth on the track',
    relativeEarthLittleBehind: 'A little behind Earth on the track',
    relativeEarthAhead: 'Ahead of Earth on the clockwise track',
    relativeEarthBehind: 'Behind Earth on the clockwise track',
    relativeEarthFarAhead: 'Much farther along the track than Earth',
    relativeEarthFarBehind: 'Still catching up to Earth on the track',
    relativeEarthOpposite: 'On the other side of the Sun from Earth, in this model',

    speedBlurbMercury: 'The sprinter — shortest lap in the solar system.',
    speedBlurbVenus: 'Bright and unhurried compared to Mercury.',
    speedBlurbEarth: 'Our baseline — everything else is measured against this track.',
    speedBlurbMars: 'The red loop — about 2 Earth years per lap.',
    speedBlurbJupiter: 'The giant takes its time — many Earth years per lap.',
    speedBlurbSaturn: 'Slow and stately, with the rings along for the ride.',
    speedBlurbUranus: 'Ice giant on a very long, cold commute.',
    speedBlurbNeptune: 'The outermost lap — patience required.',

    snapshotBuddyClose: '{planet} is almost shoulder-to-shoulder with Earth on the diagram.',
    snapshotBuddyNear: '{planet} is relatively close to Earth on the track right now.',
    snapshotSpread: 'The planets are spread around the Sun — like runners on different lanes.',

    placementAstroTitle: 'Astrology-style read',
    placementAstroDisclaimer:
      'Approximate tropical & Vedic signs from simplified sky math — for curiosity and play. Not a birth chart, not medical or financial advice. For your personal chart, use a qualified astrologer or precise ephemeris.',
    placementAstroMoodLabel: 'Broad sky mood',
    placementAstroWesternLabel: 'Western (tropical)',
    placementAstroVedicLabel: 'Vedic (sidereal, ~Lahiri)',
    placementAstroTapHint: 'Tap a planet on the diagram for full English & Hindu symbolism.',
    placementOrbitSection: 'Orbit diagram (science view)',

    astroMoodSunMoon:
      'Sun in {sunSign}, Moon in {moonSign} — outward tone vs emotional undercurrent for this date (general, not personal).',
    astroMoodSameSign:
      'Sun and Moon both in {sign} — a concentrated, same-note mood in this rough model (general, not personal).',
    astroWesternLine:
      '{planet} in {sign}: {focus}, filtered through {theme} themes. A collective flavor, not your private forecast.',
    astroVedicLine:
      '{planet} in {rashi}: {focus} — read in Jyotish style as general graha energy, not a personalized prediction.',

    astroFocusSun: 'vitality, identity, and visibility',
    astroFocusMoon: 'feelings, habits, and what feels safe',
    astroFocusMercury: 'talk, learning, and everyday decisions',
    astroFocusVenus: 'love, beauty, and what we value',
    astroFocusMars: 'drive, courage, and how we assert',
    astroFocusJupiter: 'growth, luck, and big-picture faith',
    astroFocusSaturn: 'discipline, limits, and long lessons',
    astroFocusUranus: 'surprise, freedom, and rule-breaking',
    astroFocusNeptune: 'dreams, intuition, and blur',

    signAries: 'Aries',
    signTaurus: 'Taurus',
    signGemini: 'Gemini',
    signCancer: 'Cancer',
    signLeo: 'Leo',
    signVirgo: 'Virgo',
    signLibra: 'Libra',
    signScorpio: 'Scorpio',
    signSagittarius: 'Sagittarius',
    signCapricorn: 'Capricorn',
    signAquarius: 'Aquarius',
    signPisces: 'Pisces',

    signThemeAries: 'bold and initiating',
    signThemeTaurus: 'steady and sensory',
    signThemeGemini: 'curious and quick',
    signThemeCancer: 'nurturing and private',
    signThemeLeo: 'expressive and proud',
    signThemeVirgo: 'practical and refining',
    signThemeLibra: 'harmonious and fair-minded',
    signThemeScorpio: 'deep and intense',
    signThemeSagittarius: 'adventurous and hopeful',
    signThemeCapricorn: 'ambitious and structured',
    signThemeAquarius: 'inventive and collective',
    signThemePisces: 'dreamy and compassionate',

    rashiMesha: 'Mesha (Aries)',
    rashiVrishabha: 'Vrishabha (Taurus)',
    rashiMithuna: 'Mithuna (Gemini)',
    rashiKarka: 'Karka (Cancer)',
    rashiSimha: 'Simha (Leo)',
    rashiKanya: 'Kanya (Virgo)',
    rashiTula: 'Tula (Libra)',
    rashiVrishchika: 'Vrishchika (Scorpio)',
    rashiDhanu: 'Dhanu (Sagittarius)',
    rashiMakara: 'Makara (Capricorn)',
    rashiKumbha: 'Kumbha (Aquarius)',
    rashiMeena: 'Meena (Pisces)',

    nameMoon: 'Moon',

    closePanel: 'Close panel',
    orbitalPeriodDays: 'Orbital period in days',

    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',

    copyLink: 'Copy link',
    linkCopied: 'Copied!',

    viewDetailsSun: 'View details for the Sun',
    viewDetailsPlanet: 'View details for',
    /** Use {name} placeholder */
    viewDetailsPlanetAria: 'View details for {name}',

    distanceFromSun: 'Distance from Sun',
    diameter: 'Diameter',
    orbitalPeriod: 'Orbital period',
    moonsLabel: 'Moons',
    planetsLabel: 'Planets',

    tabDetails: 'Details',
    tabEnglishAstro: 'English astrology',
    tabHinduAstro: 'Hindu astrology',

    appearance: 'Appearance',
    temperature: 'Temperature',
    properties: 'Properties',
    mass: 'Mass',
    surfaceGravity: 'Surface gravity',
    rotationPeriod: 'Rotation period',
    lengthOfDay: 'Length of day',
    atmosphere: 'Atmosphere',
    discovery: 'Discovery',
    interestingFacts: 'Interesting facts',
    tempMinMax: 'Min',
    tempMaxLabel: 'Max',

    // English astrology block
    rulingSign: 'Ruling sign',
    element: 'Element',
    modality: 'Modality',
    keyThemes: 'Key themes',
    bodyParts: 'Body parts',
    positiveTraits: 'Positive traits',
    challengingTraits: 'Challenging traits',
    house: 'House',

    // Hindu astrology block
    sanskritName: 'Sanskrit name',
    rulingRashi: 'Ruling rashi',
    day: 'Day',
    gemstone: 'Gemstone',
    metal: 'Metal',
    deity: 'Deity',
    significations: 'Significations',
    positiveEffects: 'Positive effects',
    negativeEffects: 'Negative effects',
    remedy: 'Remedy',

    orbitSpeed: 'Orbit speed',
    footerAriaLabel: 'Site credits and copyright',
    footerText:
      'This is a fun app, made for curious brains who believe in science and unicorns.',
    footerCopyrightRights: 'All rights reserved.',
    footerAuthorLabel: 'Author:',
    footerAuthorLinkAria: 'Visit Neha’s website (opens in new tab)',
    footerMadeWithAi: 'Made using AI — assisted writing, layout, and code.',

    // Position on orbit (placement panel)
    posTop: 'Top (0°)',
    posTopRight: 'Top-right (45°)',
    posRight: 'Right (90°)',
    posBottomRight: 'Bottom-right (135°)',
    posBottom: 'Bottom (180°)',
    posBottomLeft: 'Bottom-left (225°)',
    posLeft: 'Left (270°)',
    posTopLeft: 'Top-left (315°)',

    // Planet display names (same as English keys in data)
    nameSun: 'Sun',
    nameMercury: 'Mercury',
    nameVenus: 'Venus',
    nameEarth: 'Earth',
    nameMars: 'Mars',
    nameJupiter: 'Jupiter',
    nameSaturn: 'Saturn',
    nameUranus: 'Uranus',
    nameNeptune: 'Neptune',

    eventsTitle: 'Sky events',
    eventsOpenLabel: 'Events',
    eventsHelp:
      'Approximate dates for oppositions and bright conjunctions. Tap a day with a dot for a short note.',
    eventsHide: 'Hide',
    eventsNextUp: 'Next up',
    /** {planet} localized display name */
    eventsTitleOpposition: '{planet} opposition',
    /** {a} {b} localized planet names */
    eventsTitleConjunction: '{a} & {b} conjunction',
    eventsDisclaimer:
      'Dates are approximate (UTC calendar day). Check a planetarium app for your location and local time.',
    eventsPrevMonth: 'Previous month',
    eventsNextMonth: 'Next month',
    eventsCalendarAria: 'Event calendar',
    eventsDayAria: 'Select {date}',
    eventsDayAriaHas: '{date}, sky events listed in this app',
    eventsLater: 'Also coming',
    eventsEmpty:
      'No upcoming events in the built-in list. Add newer dates in the project data or use an almanac.',
  },

  hi: {
    appTitle: 'सौर मंडल',
    subtitle: 'नाम के लिए होवर करें · पूरी जानकारी के लिए क्लिक करें',
    langLabel: 'भाषा',
    langEnglish: 'English',
    langHindi: 'हिंदी',

    placementAriaLabel: 'ग्रहों की स्थिति के लिए दिनांक और समय सेट करें',
    dateTimeTitle: 'दिनांक और समय',
    dateTimeExpect:
      'कोई भी पल चुनें — हम कक्षाएँ रोककर सरल भाषा में बताएँगे कि चित्र पर हर ग्रह कहाँ है।',
    dateLabel: 'तारीख',
    timeLabel: 'समय',
    showPositions: 'स्थिति दिखाएँ',
    positionsAt: 'इस समय स्थिति:',
    placementDetails: 'स्थिति विवरण',
    resumeAnimation: 'एनिमेशन फिर से चलाएँ',

    timelineTitle: 'समय रेखा',
    timelineHelp:
      'महीनों और वर्षों में घिसकर देखें — कक्षाएँ J2000 मॉडल और नक्षत्रीय कालों पर आधारित हैं। घिसते समय चुना समय बना रहता है।',
    timelineAriaLabel: 'तारीख बदलकर वर्षों में जाएँ',
    timelineLiveHint: 'लाइव एनिमेशन — तारीख चुनने और कक्षाएँ स्थिर करने के लिए घिसें',
    timelineOpenLabel: 'समय रेखा',
    timelineHide: 'छिपाएँ',

    planetPositionsTitle: 'वे कहाँ थे?',
    placementDetailsSubtitle:
      'यह सरल चित्रण है (वास्तविक तारा मानचित्र नहीं)। हर पंक्ति बताती है कि ग्रह अपनी कक्षा पर कितना आगे है और पृथ्वी से कैसे जुड़ा है।',
    placementSnapshotTitle: 'इस पल की झलक',
    placementTechLabel: 'चित्र के आँकड़े',
    placementPercentAround: 'इस चक्कर का लगभग {percent}%',
    clockOnDiagram: 'चित्र पर लगभग {hour} बजे (बीच में सूर्य)',
    lapLengthEarth: 'एक चक्कर = 1 वर्ष — हमारा घर',
    lapLengthDays: 'एक पूरा चक्कर लगभग {days} पृथ्वी दिन',
    lapLengthYears: 'एक पूरा चक्कर लगभग {years} पृथ्वी वर्ष',

    orbitProgressStart: 'सूर्य के चारों ओर नया चक्कर शुरू',
    orbitProgressEarly: 'अभी यात्रा की शुरुआत',
    orbitProgressQuarter: 'लगभग एक चौथाई रास्ता',
    orbitProgressHalf: 'लगभग आधा चक्कर',
    orbitProgressPastHalf: 'आधे से आगे — घर की ओर',
    orbitProgressLate: 'लगभग वही बिंदु जहाँ चक्कर शुरू हुआ',

    relativeEarthYou: 'यह हम हैं — नीले ग्रह की कक्षा',
    relativeEarthAligned: 'चित्र पर लगभग पृथ्वी के साथ',
    relativeEarthLittleAhead: 'पृथ्वी से थोड़ा आगे',
    relativeEarthLittleBehind: 'पृथ्वी से थोड़ा पीछे',
    relativeEarthAhead: 'घड़ी की दिशा में पृथ्वी से आगे',
    relativeEarthBehind: 'पृथ्वी से पीछे की ओर',
    relativeEarthFarAhead: 'पृथ्वी से काफी आगे',
    relativeEarthFarBehind: 'पृथ्वी से अभी दूर पीछे',
    relativeEarthOpposite: 'इस मॉडल में पृथ्वी के विपरीम ओर',

    speedBlurbMercury: 'सबसे तेज़ — सबसे छोटा चक्कर।',
    speedBlurbVenus: 'बुध से धीरे, फिर भी चमकदार।',
    speedBlurbEarth: 'हमारा मानक — बाकी सब इससे तुलना होते हैं।',
    speedBlurbMars: 'लाल कक्षा — लगभग 2 पृथ्वी वर्ष प्रति चक्कर।',
    speedBlurbJupiter: 'विशाल ग्रह — बहुत लंबा चक्कर।',
    speedBlurbSaturn: 'धीरे, विनम्र — छल्लों सहित।',
    speedBlurbUranus: 'बर्फ़ीला दिग्गज — बहुत लंबी यात्रा।',
    speedBlurbNeptune: 'सबसे बाहरी कक्षा — धैर्य चाहिए।',

    snapshotBuddyClose: 'चित्र पर {planet} लगभग पृथ्वी के बगल में है।',
    snapshotBuddyNear: 'अभी {planet} पृथ्वी के काफ़ी पास है।',
    snapshotSpread: 'ग्रह सूर्य के चारों ओर बिखरे हैं — अलग-अलग लेन जैसे।',

    placementAstroTitle: 'ज्योतिष शैली में पढ़ना',
    placementAstroDisclaimer:
      'सरलीकृत गणना से अनुमानित ट्रॉपिकल और वैदिक राशियाँ — जिज्ञासा और मनोरंजन के लिए। जन्म कुंडली नहीं; चिकित्सा या वित्तीय सलाह नहीं। व्यक्तिगत कुंडली के लिए सटीक पंचांग या विशेषज्ञ देखें।',
    placementAstroMoodLabel: 'आकाश का मूड',
    placementAstroWesternLabel: 'पश्चिमी (ट्रॉपिकल)',
    placementAstroVedicLabel: 'वैदिक (साइडेरियल, ~लाहिरी)',
    placementAstroTapHint: 'पूर्ण अंग्रेजी और हिंदू प्रतीकवाद के लिए चित्र पर ग्रह टैप करें।',
    placementOrbitSection: 'कक्षा चित्र (विज्ञान दृश्य)',

    astroMoodSunMoon:
      'सूर्य {sunSign} में, चंद्र {moonSign} में — इस तारीख का बाहरी स्वर बनाम भावनात्मक धारा (सामान्य, व्यक्तिगत नहीं)।',
    astroMoodSameSign:
      'सूर्य और चंद्र दोनों {sign} में — इस मॉडल में एक ही रंग का मूड (सामान्य, व्यक्तिगत नहीं)।',
    astroWesternLine:
      '{planet} {sign} में: {focus}, {theme} रंग में। सामूहिक स्वाद, निजी भविष्यवाणी नहीं।',
    astroVedicLine:
      '{planet} {rashi} में: {focus} — ज्योतिष में सामान्य ग्रह ऊर्जा, व्यक्तिगत फल नहीं।',

    astroFocusSun: 'जीवन शक्ति, पहचान और दृश्यता',
    astroFocusMoon: 'भाव, आदतें और सुरक्षा की भावना',
    astroFocusMercury: 'बातचीत, सीख और रोज़ के फैसले',
    astroFocusVenus: 'प्रेम, सौंदर्य और मूल्य',
    astroFocusMars: 'ऊर्जा, साहस और दृढ़ता',
    astroFocusJupiter: 'वृद्धि, सौभाग्य और विश्वास',
    astroFocusSaturn: 'अनुशासन, सीमा और लंबे पाठ',
    astroFocusUranus: 'अचानक बदलाव, स्वतंत्रता',
    astroFocusNeptune: 'सपने, अंतर्ज्ञान और धुंध',

    signAries: 'मेष',
    signTaurus: 'वृषभ',
    signGemini: 'मिथुन',
    signCancer: 'कर्क',
    signLeo: 'सिंह',
    signVirgo: 'कन्या',
    signLibra: 'तुला',
    signScorpio: 'वृश्चिक',
    signSagittarius: 'धनु',
    signCapricorn: 'मकर',
    signAquarius: 'कुंभ',
    signPisces: 'मीन',

    signThemeAries: 'साहसी और शुरुआती',
    signThemeTaurus: 'स्थिर और भौतिक',
    signThemeGemini: 'जिज्ञासु और तेज़',
    signThemeCancer: 'पोषण और गोपनीय',
    signThemeLeo: 'अभिव्यंजक और गर्वित',
    signThemeVirgo: 'व्यावहारिक और सुधारक',
    signThemeLibra: 'सामंजस्यपूर्ण और न्यायप्रिय',
    signThemeScorpio: 'गहरा और तीव्र',
    signThemeSagittarius: 'साहसिक और आशावादी',
    signThemeCapricorn: 'महत्वाकांक्षी और संरचित',
    signThemeAquarius: 'नवीन और सामूहिक',
    signThemePisces: 'स्वप्निल और करुणामय',

    rashiMesha: 'मेष',
    rashiVrishabha: 'वृषभ',
    rashiMithuna: 'मिथुन',
    rashiKarka: 'कर्क',
    rashiSimha: 'सिंह',
    rashiKanya: 'कन्या',
    rashiTula: 'तुला',
    rashiVrishchika: 'वृश्चिक',
    rashiDhanu: 'धनु',
    rashiMakara: 'मकर',
    rashiKumbha: 'कुंभ',
    rashiMeena: 'मीन',

    nameMoon: 'चंद्र',

    closePanel: 'पैनल बंद करें',
    orbitalPeriodDays: 'कक्षीय अवधि (दिनों में)',

    themeToLight: 'हल्का थीम पर जाएँ',
    themeToDark: 'गहरा थीम पर जाएँ',

    copyLink: 'लिंक कॉपी करें',
    linkCopied: 'कॉपी हो गया!',

    viewDetailsSun: 'सूर्य का विवरण देखें',
    viewDetailsPlanet: 'का विवरण देखें',
    viewDetailsPlanetAria: '{name} का विवरण देखें',

    distanceFromSun: 'सूर्य से दूरी',
    diameter: 'व्यास',
    orbitalPeriod: 'कक्षीय अवधि',
    moonsLabel: 'चंद्रमा',
    planetsLabel: 'ग्रह',

    tabDetails: 'विवरण',
    tabEnglishAstro: 'अंग्रेजी ज्योतिष',
    tabHinduAstro: 'हिंदू ज्योतिष',

    appearance: 'रूप',
    temperature: 'तापमान',
    properties: 'गुण',
    mass: 'द्रव्यमान',
    surfaceGravity: 'सतह गुरुत्व',
    rotationPeriod: 'घूर्णन अवधि',
    lengthOfDay: 'दिन की लंबाई',
    atmosphere: 'वायुमंडल',
    discovery: 'खोज',
    interestingFacts: 'रोचक तथ्य',
    tempMinMax: 'न्यूनतम',
    tempMaxLabel: 'अधिकतम',

    rulingSign: 'शासक राशि',
    element: 'तत्व',
    modality: 'प्रकृति',
    keyThemes: 'मुख्य विषय',
    bodyParts: 'शरीर के अंग',
    positiveTraits: 'सकारात्मक गुण',
    challengingTraits: 'चुनौतीपूर्ण गुण',
    house: 'भाव',

    sanskritName: 'संस्कृत नाम',
    rulingRashi: 'शासक राशि',
    day: 'वार',
    gemstone: 'रत्न',
    metal: 'धातु',
    deity: 'देवता',
    significations: 'अर्थ',
    positiveEffects: 'सकारात्मक प्रभाव',
    negativeEffects: 'नकारात्मक प्रभाव',
    remedy: 'उपाय',

    orbitSpeed: 'कक्षा की गति',
    footerAriaLabel: 'कॉपीराइट और श्रेय',
    footerText:
      'यह एक मज़ेदार ऐप है, उन जिज्ञासु दिमागों के लिए जो विज्ञान और यूनिकॉर्न में विश्वास करते हैं।',
    footerCopyrightRights: 'सर्वाधिकार सुरक्षित।',
    footerAuthorLabel: 'लेखक:',
    footerAuthorLinkAria: 'नेहा की वेबसाइट (नई टैब में खुलती है)',
    footerMadeWithAi: 'AI की सहायता से बनाया गया — लेखन, लेआउट और कोड में।',

    posTop: 'शीर्ष (0°)',
    posTopRight: 'ऊपर-दाएँ (45°)',
    posRight: 'दाएँ (90°)',
    posBottomRight: 'नीचे-दाएँ (135°)',
    posBottom: 'नीचे (180°)',
    posBottomLeft: 'नीचे-बाएँ (225°)',
    posLeft: 'बाएँ (270°)',
    posTopLeft: 'ऊपर-बाएँ (315°)',

    nameSun: 'सूर्य',
    nameMercury: 'बुध',
    nameVenus: 'शुक्र',
    nameEarth: 'पृथ्वी',
    nameMars: 'मंगल',
    nameJupiter: 'बृहस्पति',
    nameSaturn: 'शनि',
    nameUranus: 'यूरेनस',
    nameNeptune: 'नेपच्यून',

    eventsTitle: 'आकाशीय घटनाएँ',
    eventsOpenLabel: 'घटनाएँ',
    eventsHelp:
      'विरोध और उज्ज्वल संयोगों के अनुमानित दिन। बिंदु वाले दिन पर टैप करके संक्षिप्त विवरण देखें।',
    eventsHide: 'छिपाएँ',
    eventsNextUp: 'अगली',
    eventsTitleOpposition: '{planet} विरोध',
    eventsTitleConjunction: '{a} और {b} का संयोग',
    eventsDisclaimer:
      'तारीखें अनुमानित हैं (UTC कैलेंडर दिन)। अपने स्थान और स्थानीय समय के लिए प्लैनेटोरियम ऐप देखें।',
    eventsPrevMonth: 'पिछला महीना',
    eventsNextMonth: 'अगला महीना',
    eventsCalendarAria: 'घटना कैलेंडर',
    eventsDayAria: '{date} चुनें',
    eventsDayAriaHas: '{date}, इस ऐप में सूचीबद्ध आकाशीय घटनाएँ',
    eventsLater: 'आगे भी',
    eventsEmpty:
      'अंतर्निहित सूची में कोई आगामी घटना नहीं। नई तारीखें डेटा में जोड़ें या पंचांग देखें।',
  },
}

export const DEFAULT_LOCALE = 'en'

export function getTranslation(locale, key) {
  const lang = locale === 'hi' ? 'hi' : 'en'
  const pack = translations[lang]
  return pack[key] ?? translations.en[key] ?? key
}

/** Orbit angle → localized label */
export function getPositionLabelI18n(angleDeg, t) {
  const a = ((angleDeg % 360) + 360) % 360
  if (a < 22.5 || a >= 337.5) return t('posTop')
  if (a < 67.5) return t('posTopRight')
  if (a < 112.5) return t('posRight')
  if (a < 157.5) return t('posBottomRight')
  if (a < 202.5) return t('posBottom')
  if (a < 247.5) return t('posBottomLeft')
  if (a < 292.5) return t('posLeft')
  return t('posTopLeft')
}

const NAME_TO_KEY = {
  Sun: 'nameSun',
  Moon: 'nameMoon',
  Mercury: 'nameMercury',
  Venus: 'nameVenus',
  Earth: 'nameEarth',
  Mars: 'nameMars',
  Jupiter: 'nameJupiter',
  Saturn: 'nameSaturn',
  Uranus: 'nameUranus',
  Neptune: 'nameNeptune',
}

export function planetDisplayName(englishName, t) {
  const key = NAME_TO_KEY[englishName]
  return key ? t(key) : englishName
}

/** Replace {name} etc. in translated strings */
export function tReplace(t, key, vars) {
  let s = t(key)
  Object.entries(vars).forEach(([k, v]) => {
    s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
  })
  return s
}
