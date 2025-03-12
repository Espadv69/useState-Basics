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
      </ol>
    </div>
  )
}

export default Explanation
