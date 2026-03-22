// Structured astrology data for consistent panel display

export const SUN_ENGLISH = {
  rulingSign: 'Leo',
  element: 'Fire',
  modality: 'Fixed',
  keyThemes: ['Self & identity', 'Vitality & life force', 'Father & authority', 'Leadership & confidence', 'Creativity & expression'],
  bodyParts: 'Heart, spine, upper back, circulatory system, vitality',
  positiveTraits: ['Confident', 'Generous', 'Creative', 'Leadership', 'Loyal'],
  challengingTraits: ['Egotistical', 'Dominating', 'Arrogant', 'Stubborn'],
  house: 'Rules 5th house (creativity, children, pleasure)',
  description: 'The Sun is the core of the birth chart in Western astrology. It represents your essential self, ego, and life force. A well-placed Sun gives natural authority, warmth, and the ability to lead. It governs the father figure and those in power.',
}

export const SUN_HINDU = {
  sanskritName: 'Surya / Ravi',
  rulingRashi: ['Simha (Leo)'],
  day: 'Sunday (Ravivar)',
  gemstone: 'Ruby (Manikya)',
  metal: 'Copper',
  deity: 'Surya Dev',
  significations: ['Soul (Atman)', 'Father', 'Authority & government', 'Health & vitality', 'Bones', 'Right eye'],
  positiveEffects: ['Leadership', 'Courage', 'Respect', 'Success in government or administration', 'Strong vitality'],
  negativeEffects: ['Weak confidence', 'Heart or bone issues', 'Struggles with authority', 'Ego problems'],
  remedy: 'Surya Namaskar, Ruby gemstone, Sunday fasting, Surya mantra',
  description: 'Surya is the king of the navagrahas (nine planets). He represents the soul, father, and all forms of authority. Strong Surya in the chart gives dignity and success; afflicted Surya can affect health and confidence.',
}

export const MERCURY_ENGLISH = {
  rulingSign: 'Gemini, Virgo',
  element: 'Air (Gemini), Earth (Virgo)',
  modality: 'Mutable',
  keyThemes: ['Communication', 'Intellect & learning', 'Travel & movement', 'Commerce & trade', 'Siblings & neighbours'],
  bodyParts: 'Nervous system, hands, arms, lungs, thyroid',
  positiveTraits: ['Witty', 'Adaptable', 'Analytical', 'Curious', 'Skilled communicator'],
  challengingTraits: ['Nervous', 'Scattered', 'Overthinking', 'Critical'],
  house: 'Rules 3rd house (communication) & 6th house (service, health)',
  description: 'Mercury rules the mind and how we express it. It governs speech, writing, short travel, and logical thinking. A strong Mercury gives quick wit, versatility, and success in studies or business.',
}

export const MERCURY_HINDU = {
  sanskritName: 'Budha',
  rulingRashi: ['Mithuna (Gemini)', 'Kanya (Virgo)'],
  day: 'Wednesday (Budhvar)',
  gemstone: 'Emerald (Panna)',
  metal: 'Mercury (liquid)',
  deity: 'Lord Vishnu / Budha',
  significations: ['Intellect', 'Speech', 'Business & trade', 'Education', 'Maternal uncle', 'Skin'],
  positiveEffects: ['Sharp mind', 'Success in studies and commerce', 'Good communication', 'Mathematical ability'],
  negativeEffects: ['Nervousness', 'Speech defects', 'Skin issues', 'Anxiety', 'Fickle mind'],
  remedy: 'Emerald gemstone, Wednesday fasting, Budha mantra, green colour',
  description: 'Budha is the karaka (significator) of intelligence and speech. Strong Budha supports education, business, and writing; weak or afflicted Budha can cause nervous disorders or difficulty in expression.',
}

export const VENUS_ENGLISH = {
  rulingSign: 'Taurus, Libra',
  element: 'Earth (Taurus), Air (Libra)',
  modality: 'Fixed (Taurus), Cardinal (Libra)',
  keyThemes: ['Love & romance', 'Beauty & aesthetics', 'Money & luxury', 'Partnerships', 'Pleasure & comfort'],
  bodyParts: 'Throat, kidneys, veins, skin, reproductive system',
  positiveTraits: ['Charming', 'Artistic', 'Diplomatic', 'Affectionate', 'Appreciates beauty'],
  challengingTraits: ['Indulgent', 'Superficial', 'Possessive', 'Lazy'],
  house: 'Rules 2nd house (wealth) & 7th house (marriage, partnerships)',
  description: 'Venus is the planet of love, beauty, and material comfort. It governs relationships, art, fashion, and the things we value. A strong Venus brings harmony, charm, and the ability to attract what we desire.',
}

export const VENUS_HINDU = {
  sanskritName: 'Shukra',
  rulingRashi: ['Vrishabha (Taurus)', 'Tula (Libra)'],
  day: 'Friday (Shukravar)',
  gemstone: 'Diamond (Heera)',
  metal: 'Silver',
  deity: 'Shukracharya (guru of asuras)',
  significations: ['Love & marriage', 'Wealth & luxury', 'Vehicles', 'Arts & music', 'Comfort', 'Reproduction'],
  positiveEffects: ['Wealth', 'Happy marriage', 'Luxury', 'Artistic success', 'Popularity'],
  negativeEffects: ['Relationship problems', 'Luxury addiction', 'Skin or urinary issues', 'Scandal'],
  remedy: 'Diamond or white sapphire, Friday fasting, Shukra mantra, white flowers',
  description: 'Shukra is the great benefic (along with Jupiter) and karaka for marriage and wealth. Strong Shukra gives material comfort and harmony; afflicted Shukra can affect relationships and finances.',
}

export const EARTH_ENGLISH = {
  rulingSign: '— (Earth is the vantage point; Taurus, Virgo, Capricorn are Earth signs)',
  element: 'Earth',
  modality: '—',
  keyThemes: ['Material reality', 'Stability', 'Body & senses', 'Practicality', 'Security'],
  bodyParts: 'Earth signs rule bones, skin, digestion (Virgo), structure (Capricorn)',
  positiveTraits: ['Grounded', 'Reliable', 'Patient', 'Practical', 'Loyal'],
  challengingTraits: ['Rigid', 'Materialistic', 'Resistant to change'],
  house: 'Earth signs rule 2nd (Taurus), 6th (Virgo), 10th (Capricorn) houses',
  description: 'In Western astrology the chart is geocentric—Earth is where we stand. The Moon rules the physical body and roots; Earth signs (Taurus, Virgo, Capricorn) embody stability, work, and the material world.',
}

export const EARTH_HINDU = {
  sanskritName: 'Prithvi / Bhumi',
  rulingRashi: '— (Element; not a graha)',
  day: '—',
  gemstone: '—',
  metal: '—',
  deity: 'Bhudevi',
  significations: ['Land', 'Stability', 'Body', 'Root chakra', 'Foundation'],
  positiveEffects: ['Groundedness', 'Stability', 'Wealth from land', 'Physical strength'],
  negativeEffects: 'N/A (element, not a planet in chart)',
  remedy: '—',
  description: 'Prithvi is one of the five elements (Pancha Mahabhuta). Chandra (Moon) rules mind and emotions; Earth represents the physical base. Land, property, and the body are linked to Earth element in Vedic thought.',
}

export const MARS_ENGLISH = {
  rulingSign: 'Aries, Scorpio (co-ruler)',
  element: 'Fire (Aries), Water (Scorpio)',
  modality: 'Cardinal (Aries), Fixed (Scorpio)',
  keyThemes: ['Action & drive', 'Courage & aggression', 'Desire & passion', 'Competition', 'Siblings'],
  bodyParts: 'Muscles, blood, adrenal glands, reproductive organs, head',
  positiveTraits: ['Courageous', 'Energetic', 'Determined', 'Passionate', 'Protective'],
  challengingTraits: ['Aggressive', 'Impatient', 'Reckless', 'Angry'],
  house: 'Rules 1st house (self) & 8th house (transformation, shared resources)',
  description: 'Mars is the planet of action and assertion. It governs courage, competition, and raw drive. A strong Mars gives energy and the will to succeed; afflicted Mars can show as anger or accidents.',
}

export const MARS_HINDU = {
  sanskritName: 'Mangala / Kuja',
  rulingRashi: ['Mesha (Aries)', 'Vrishchika (Scorpio)'],
  day: 'Tuesday (Mangalvar)',
  gemstone: 'Red Coral (Moonga)',
  metal: 'Copper / Red metals',
  deity: 'Hanuman, Kartikeya',
  significations: ['Land & property', 'Courage', 'Siblings', 'Strength', 'Weapons', 'Real estate'],
  positiveEffects: ['Courage', 'Success in property', 'Sports', 'Technical fields', 'Leadership in battle'],
  negativeEffects: ['Anger', 'Accidents', 'Fever', 'Property disputes', 'Conflict with siblings'],
  remedy: 'Red coral, Tuesday fasting, Hanuman Chalisa, red colour',
  description: 'Mangala is a malefic but also gives courage and property when well placed. It is karaka for siblings and land. Afflicted Mangala can cause anger, injury, or legal issues.',
}

export const JUPITER_ENGLISH = {
  rulingSign: 'Sagittarius, Pisces (traditional)',
  element: 'Fire (Sagittarius), Water (Pisces)',
  modality: 'Mutable',
  keyThemes: ['Wisdom & higher learning', 'Luck & expansion', 'Religion & philosophy', 'Children', 'Long-distance travel'],
  bodyParts: 'Liver, hips, thighs, fat metabolism, pituitary',
  positiveTraits: ['Optimistic', 'Generous', 'Wise', 'Fair', 'Philosophical'],
  challengingTraits: ['Overindulgent', 'Preachy', 'Overconfident', 'Wasteful'],
  house: 'Rules 9th house (fortune, philosophy) & 12th house (Pisces)',
  description: 'Jupiter is the great benefic—planet of growth, wisdom, and good fortune. It governs higher education, spirituality, and the search for meaning. A strong Jupiter brings optimism and opportunity.',
}

export const JUPITER_HINDU = {
  sanskritName: 'Guru / Brihaspati',
  rulingRashi: ['Dhanu (Sagittarius)', 'Meena (Pisces)'],
  day: 'Thursday (Guruvar)',
  gemstone: 'Yellow Sapphire (Pukhraj)',
  metal: 'Gold',
  deity: 'Brihaspati (guru of devas)',
  significations: ['Wisdom', 'Children', 'Higher education', 'Spirituality', 'Wealth', 'Husband (in female chart)'],
  positiveEffects: ['Wisdom', 'Children', 'Wealth', 'Respect', 'Spiritual growth', 'Good counsel'],
  negativeEffects: ['Poor judgment', 'Children issues', 'Obesity', 'Overconfidence', 'Legal trouble'],
  remedy: 'Yellow sapphire, Thursday fasting, Guru mantra, yellow colour, respect to teachers',
  description: 'Guru is the great benefic and karaka for wisdom, children, and fortune. Strong Guru gives prosperity and righteousness; weak Guru can affect judgment, children, or spirituality.',
}

export const SATURN_ENGLISH = {
  rulingSign: 'Capricorn, Aquarius (traditional)',
  element: 'Earth (Capricorn), Air (Aquarius)',
  modality: 'Cardinal (Capricorn), Fixed (Aquarius)',
  keyThemes: ['Discipline & responsibility', 'Karma & limits', 'Time & aging', 'Structure', 'Service'],
  bodyParts: 'Bones, joints, skin, teeth, knees, ears',
  positiveTraits: ['Disciplined', 'Patient', 'Reliable', 'Mature', 'Hardworking'],
  challengingTraits: ['Cold', 'Pessimistic', 'Isolating', 'Fearful', 'Delays'],
  house: 'Rules 10th house (career) & 11th house (Aquarius)',
  description: 'Saturn is the taskmaster—planet of discipline, delay, and long-term reward. It teaches through hardship and represents maturity. A well-placed Saturn brings endurance and success; afflicted Saturn can bring fear or obstacles.',
}

export const SATURN_HINDU = {
  sanskritName: 'Shani',
  rulingRashi: ['Makara (Capricorn)', 'Kumbha (Aquarius)'],
  day: 'Saturday (Shanivar)',
  gemstone: 'Blue Sapphire (Neelam) — wear only after consultation',
  metal: 'Iron',
  deity: 'Shani Dev',
  significations: ['Karma', 'Delay', 'Discipline', 'Service', 'Labour', 'Longevity', 'Father (in some charts)'],
  positiveEffects: ['Discipline', 'Long-term success', 'Spiritual maturity', 'Authority', 'Stability'],
  negativeEffects: ['Delays', 'Obstacles', 'Bone/skin issues', 'Loss', 'Fear', 'Servitude'],
  remedy: 'Shani mantra, Saturday fasting, service to elders, iron donation, blue sapphire (with caution)',
  description: 'Shani is the chief karmic planet. He rewards patience and punishes wrongdoing. Strong Shani gives lasting success; afflicted Shani brings delays and lessons. Respect and remedy are important.',
}

export const URANUS_ENGLISH = {
  rulingSign: 'Aquarius (modern)',
  element: 'Air',
  modality: 'Fixed',
  keyThemes: ['Innovation', 'Rebellion', 'Sudden change', 'Technology', 'Liberation'],
  bodyParts: 'Nervous system, circulation, ankles',
  positiveTraits: ['Original', 'Inventive', 'Humanitarian', 'Independent', 'Unconventional'],
  challengingTraits: ['Erratic', 'Detached', 'Rebellious without cause'],
  house: 'Associated with 11th house (Aquarius)',
  description: 'Uranus is the awakener—modern ruler of Aquarius. It brings sudden insight, revolution, and break from tradition. It rules technology, astrology, and collective change.',
}

export const URANUS_HINDU = {
  sanskritName: '—',
  rulingRashi: 'Not in classical Vedic system',
  day: '—',
  gemstone: '—',
  metal: '—',
  deity: '—',
  significations: 'Uranus is not one of the seven classical grahas (Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani).',
  positiveEffects: '—',
  negativeEffects: '—',
  remedy: '—',
  description: 'Traditional Jyotish uses only the seven visible bodies. Some modern Vedic astrologers associate Uranus with sudden change or innovation, but it has no classical significations, gem, or deity.',
}

export const NEPTUNE_ENGLISH = {
  rulingSign: 'Pisces (modern)',
  element: 'Water',
  modality: 'Mutable',
  keyThemes: ['Dreams', 'Illusion', 'Spirituality', 'Compassion', 'Art & mysticism'],
  bodyParts: 'Feet, immune system, pineal gland',
  positiveTraits: ['Imaginative', 'Compassionate', 'Intuitive', 'Artistic', 'Spiritual'],
  challengingTraits: ['Escapist', 'Confused', 'Victim mentality', 'Addiction-prone'],
  house: 'Associated with 12th house (Pisces)',
  description: 'Neptune dissolves boundaries—modern ruler of Pisces. It rules dreams, spirituality, and the unconscious. It inspires art and compassion but can also bring confusion or illusion.',
}

export const NEPTUNE_HINDU = {
  sanskritName: '—',
  rulingRashi: 'Not in classical Vedic system',
  day: '—',
  gemstone: '—',
  metal: '—',
  deity: '—',
  significations: 'Neptune is not one of the seven classical grahas.',
  positiveEffects: '—',
  negativeEffects: '—',
  remedy: '—',
  description: 'Traditional Vedic astrology does not use Neptune. Some practitioners link it to spirituality or illusion, but it has no ancient texts, gem, or deity associations.',
}

// Lookup by celestial body name for the detail panel
export const ENGLISH_ASTROLOGY = {
  Sun: SUN_ENGLISH,
  Mercury: MERCURY_ENGLISH,
  Venus: VENUS_ENGLISH,
  Earth: EARTH_ENGLISH,
  Mars: MARS_ENGLISH,
  Jupiter: JUPITER_ENGLISH,
  Saturn: SATURN_ENGLISH,
  Uranus: URANUS_ENGLISH,
  Neptune: NEPTUNE_ENGLISH,
}

export const HINDU_ASTROLOGY = {
  Sun: SUN_HINDU,
  Mercury: MERCURY_HINDU,
  Venus: VENUS_HINDU,
  Earth: EARTH_HINDU,
  Mars: MARS_HINDU,
  Jupiter: JUPITER_HINDU,
  Saturn: SATURN_HINDU,
  Uranus: URANUS_HINDU,
  Neptune: NEPTUNE_HINDU,
}
