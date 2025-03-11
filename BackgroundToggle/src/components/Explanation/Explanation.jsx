import LiExplanation from './LiExplanation'
import './Explanation.css'

const Explanation = () => {
  return (
    <ol className="ol__explanation">
      <LiExplanation
        stepNumber={1}
        description={"Init the state with the value of the user's preference"}
        imgUrl={'/images/initHook.png'}
        imgAlt={
          'It is a code snippet that shows how to initialize a state with the value of the user preference'
        }
      />

      <LiExplanation
        stepNumber={2}
        description={'Create a function to toggle the theme'}
        imgUrl={'/images/toggleTheme.png'}
        imgAlt={
          'It is a code snippet that shows how to create a function to toggle the theme'
        }
      />
    </ol>
  )
}

export default Explanation
