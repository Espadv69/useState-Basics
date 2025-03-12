import { useState } from 'react'
import './Input.css'

const Input = () => {
  // State to handle the input value
  const [inputValue, setInputValue] = useState('')

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="container">
      <h1>Real Time Input</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>{inputValue}</p>
    </div>
  )
}

export default Input
