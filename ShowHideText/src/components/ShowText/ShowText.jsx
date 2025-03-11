import { useState } from 'react'
import './ShowText.css'

const ShowText = () => {
  // Initialize the state with false value to hide the text
  const [showText, setShowText] = useState(false)

  // Function to toggle the state value
  const toggleText = () => {
    setShowText(!showText)
  }
}

export default ShowText
