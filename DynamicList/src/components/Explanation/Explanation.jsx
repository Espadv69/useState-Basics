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
      </ol>
    </section>
  )
}

export default Explanation
