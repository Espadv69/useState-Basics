import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <ol className="ol__explanation">
      <LiExplanation
        stepNumber={1}
        description={"Init the state with the value of the user's preference"}
        imgUrl={'/images/initHook.png'}
      />
    </ol>
  )
}

export default Explanation
