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

        <LiExplanation
          stepNumber={4}
          description={
            'Create a function that will reset the counter value to zero.'
          }
          imageSrc={'/images/resetFunction.png'}
          imageAlt={
            'code that shows how to create a function that resets the counter value to zero'
          }
        />

        <LiExplanation
          stepNumber={5}
          description={"Display the counter's value in the component."}
          imageSrc={'/images/htmlStructure.png'}
          imageAlt={'code that shows the HTML structure of the component'}
        />
      </ol>
    </div>
  )
}

export default Explanation
