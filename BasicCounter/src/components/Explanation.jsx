import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <div className="explanation">
      <h2>How to use this counter</h2>

      <ol className="ol__explanation">
        <LiExplanation
          stepNumber={1}
          description={'Create a state variable to handle the counter value.'}
          imageSrc={'/images/initHook.png'}
          imageAlt={
            'code that shows how to create a hook to handle counter value'
          }
        />
      </ol>
    </div>
  )
}

export default Explanation
