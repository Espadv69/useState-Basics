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
      </ol>
    </div>
  )
}

export default Explanation
