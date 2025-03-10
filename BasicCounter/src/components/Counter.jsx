import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  // Initialize the count state
  const [count, setCount] = useState(0)

  // Function to increment the count
  const increment = () => {
    setCount(count + 1) // Update the count state summing 1
  }

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1) // Update the count state subtracting 1
  }
}

export default Counter
