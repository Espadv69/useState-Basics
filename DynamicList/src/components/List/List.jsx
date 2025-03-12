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
  // Init the list state with the initial list
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

  // Function to remove an item from the list
  const removeItem = (index) => {
    // Create a new list without the item at the given index
    const newList = list.filter((_, i) => i !== index)

    // Update the list
    setList(newList)
  }

  return (
    <section className="list">
      <h1>Dynamic List</h1>

      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new item..."
          maxLength={30}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul className="ul__list">
        {list.map((item, index) => (
          <li className="li__list" key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
