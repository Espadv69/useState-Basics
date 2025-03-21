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

  // Function to reset the count
  const reset = () => {
    setCount(0) // Reset the count state to 0
  }

  return (
    <div className="counter">
      <h1>Basic Counter</h1>

      <p>{count}</p>

      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
