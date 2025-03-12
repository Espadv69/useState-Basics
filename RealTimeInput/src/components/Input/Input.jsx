import { useState } from 'react'
import './Input.css'

const Input = () => {
  // State to handle the input value
  const [inputValue, setInputValue] = useState('')

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
}

export default Input
