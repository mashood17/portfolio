import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  // 1️⃣ Load saved theme (or fallback to system preference)
  useEffect(() => {
    const saved = localStorage.getItem('theme')

    if (saved) {
      setIsDark(saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
    }
  }, [])

  // 2️⃣ Apply theme + persist it
  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add('dark')
      root.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  // 3️⃣ Toggle handler
  function toggleTheme() {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}