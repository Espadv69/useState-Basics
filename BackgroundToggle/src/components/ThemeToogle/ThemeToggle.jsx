import { useState } from 'react'

import Explanation from '../Explanation/Explanation'
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
        Toogle {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <Explanation />
    </div>
  )
}

export default ThemeToggle
