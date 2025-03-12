import { useState } from 'react'
import './List.css'

// Initial list of items
const INITIAL_LIST = [
  'First item',
  'Second item',
  'Third item',
  'Fourth item',
  'Fifth item',
]

const List = () => {
  // Init the list state with the initial list to have a starting point
  const [list, setList] = useState(INITIAL_LIST)
  // Init the input state with an empty string
  const [inputValue, setInputValue] = useState('')

  // Function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // Function to add a new item to the list
  const addItem = () => {
    // Check if the input value is not empty
    if (inputValue.trim() === '') return

    // Add the new item to the list
    setList([...list, inputValue])

    // Reset the input value
    setInputValue('')
  }
}

export default List
