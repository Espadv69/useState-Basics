import { useState } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  // Add state to handle the theme
  const [theme, setTheme] = useState('light')

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`theme-toggle ${theme}`}>
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme} className="toggle-btn">
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeToggle
