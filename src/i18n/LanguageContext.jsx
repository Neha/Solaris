import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, getTranslation } from './translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'solar-lang'

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    try {
      const q = new URLSearchParams(window.location.search).get('lang')
      if (q === 'hi' || q === 'en') return q
    } catch (_) {}
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'hi' || saved === 'en') return saved
    return DEFAULT_LOCALE
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch (_) {}
    document.documentElement.lang = locale === 'hi' ? 'hi' : 'en'
  }, [locale])

  const setLocale = useCallback((next) => {
    setLocaleState(next === 'hi' ? 'hi' : 'en')
  }, [])

  const t = useCallback(
    (key) => getTranslation(locale, key),
    [locale]
  )

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
