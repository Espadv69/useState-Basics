import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <div className="explanation">
      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description="Initial state with the text hidden."
          imgUrl="/images/initHook.png"
          imgAlt="Code snippet showing the initial state with the text hidden."
        />

        <LiExplanation
          stepNumber={2}
          description="Function to toggle the text visibility."
          imgUrl="/images/toggleText.png"
          imgAlt="Code snippet showing the function to toggle the text visibility."
        />

        <LiExplanation
          stepNumber={3}
          description="Rendering HTML elements with the text and button."
          imgUrl="/images/htmlStructure.png"
          imgAlt="Code snippet showing the HTML structure with the text and button."
        />
      </ol>
    </div>
  )
}

export default Explanation
