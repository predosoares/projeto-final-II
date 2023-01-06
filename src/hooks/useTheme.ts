/* eslint-disable no-undef */
import { useEffect, useCallback, useState } from 'react'

type Theme = 'light' | 'dark'

interface IUseTheme {
  toggleTheme: () => void
  currentTheme: Theme
}

const useTheme = (): IUseTheme => {
  const [currentTheme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('FootballDigital@theme')) {
        return localStorage.getItem('FootballDigital@theme') === 'dark'
          ? 'dark'
          : 'light'
      } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
    } else {
      return 'light'
    }
  })

  const reflectPreferences = useCallback((): void => {
    document?.firstElementChild?.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const setPreferences = (theme: Theme): void => {
    localStorage.setItem('FootballDigital@theme', theme)
  }

  const setMetaTagThemeColor = (theme: Theme) => {
    const [element] = document.getElementsByName(
      'theme-color',
    ) as NodeListOf<Element>

    const color = theme === 'light' ? 'white' : 'black'

    element.setAttribute('content', color)
  }

  const toggleTheme = (): void => {
    const theme = currentTheme === 'light' ? 'dark' : 'light'

    setTheme(theme)
    setMetaTagThemeColor(theme)
    setPreferences(theme)
  }

  useEffect(() => {
    const onChangeMedia = ({ matches: isDark }: MediaQueryListEvent) => {
      const theme = isDark ? 'dark' : 'light'
      setTheme(theme)
      setMetaTagThemeColor(theme)
      setPreferences(theme)
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onChangeMedia)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onChangeMedia)
    }
  }, [])

  useEffect(() => {
    reflectPreferences()
  }, [reflectPreferences])

  return { currentTheme, toggleTheme }
}

export { useTheme }
