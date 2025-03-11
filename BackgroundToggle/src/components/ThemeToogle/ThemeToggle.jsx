import { useState } from 'react'
import './ThemeToggle.css'

const ThemeToggle = () => {
  // Add state to handle the theme
  const [theme, setTheme] = useState('light')

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
}

export default ThemeToggle
