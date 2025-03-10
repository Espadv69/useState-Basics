import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  // Initialize the count state
  const [count, setCount] = useState(0)

  // Function to increment the count
  // This function will be called when the button is clicked
  const increment = () => {
    setCount(count + 1)
  }
}

export default Counter
