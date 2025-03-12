import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <section className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initialize a constant array with the initial list of items."
          imgUrl="/images/initialList.png"
          imgAlt="code snippet of an array with 5 items"
        />

        <LiExplanation
          stepNumber={2}
          description="Define a state variable to store the list of items."
          imgUrl="/images/initListHook.png"
          imgAlt="code snippet of a state variable for list of items"
        />

        <LiExplanation
          stepNumber={3}
          description="Define a state variable to handle the input value."
          imgUrl="/images/initInputHook.png"
          imgAlt="code snippet of a state variable for input value"
        />

        <LiExplanation
          stepNumber={4}
          description="Create a function to handle the input change."
          imgUrl="/images/handleInputValue.png"
          imgAlt="code snippet of a function to handle input change"
        />

        <LiExplanation
          stepNumber={5}
          description="Create a function to add a new item to the list."
          imgUrl="/images/addItemFunction.png"
          imgAlt="code snippet of a function to add a new item"
        />

        <LiExplanation
          stepNumber={6}
          description="Create a function to remove an item from the list."
          imgUrl="/images/removeItemFunction.png"
          imgAlt="code snippet of a function to remove an item from the list"
        />
      </ol>
    </section>
  )
}

export default Explanation
