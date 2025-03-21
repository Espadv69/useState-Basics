import { useState } from 'react'
import './ShowText.css'

const ShowText = () => {
  // Initialize the state with false value to hide the text
  const [showText, setShowText] = useState(false)

  // Function to toggle the state value
  const toggleText = () => {
    setShowText(!showText)
  }

  return (
    <div className="show-text">
      <h1>Show or Hide Text</h1>
      <button onClick={toggleText}>
        {showText ? 'Hide Text' : 'Show Text'}
      </button>
      {showText && (
        <p className={showText ? 'visible' : ''}>
          This is the text to show or hide
        </p>
      )}
    </div>
  )
}

export default ShowText
