import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)

  // Apply class to <html> on every change
  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
        root.classList.add('dark')
        root.classList.remove('light')
    } else {
        root.classList.add('light')
        root.classList.remove('dark')
    }
    }, [isDark])

  function toggleTheme() {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}