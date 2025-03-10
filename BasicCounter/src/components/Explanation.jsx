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

        <LiExplanation
          stepNumber={2}
          description={
            "Create a function that will increment the counter's value."
          }
          imageSrc={'/images/incrementFunction.png'}
          imageAlt={
            'code that shows how to create a function that increments the counter value'
          }
        />

        <LiExplanation
          stepNumber={3}
          description={
            "Create a function that will decrement the counter's value."
          }
          imageSrc={'/images/decrementFunction.png'}
          imageAlt={
            'code that shows how to create a function that decrements the counter value'
          }
        />
      </ol>
    </div>
  )
}

export default Explanation
