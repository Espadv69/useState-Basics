import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <div className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initialise the state with an empty string."
          imgUrl="/images/initHook.png"
          imgAlt="Code snippet showing the initialisation of the state."
        />

        <LiExplanation
          stepNumber={2}
          description="Create a function that updates the state."
          imgUrl="/images/handleValue.png"
          imgAlt="Code snippet showing the function that updates the state."
        />

        <LiExplanation
          stepNumber={3}
          description="Render an input element that uses the state as its value and the function as its onChange handler, and display the state in a paragraph element."
          imgUrl="/images/htmlStructure.png"
          imgAlt="Code snippet showing the input element and paragraph element with the state."
        />
      </ol>
    </div>
  )
}

export default Explanation
