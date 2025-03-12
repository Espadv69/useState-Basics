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
}

export default List
